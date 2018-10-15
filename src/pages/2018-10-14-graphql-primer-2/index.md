---
title: GraphQL primer part two
date: '2018-10-14T00:00:00.284Z'
tags: ['graphql', 'schema', 'api']
thumbnail: '../2018-10-05-graphql-primer-1/graphql.png'
thumbnailBg: '#fce7f4'
---

Previously, I covered the basics of GraphQL schema definition including types, queries, and mutations. In part two I'll be diving into creating a GraphQL service and server with Prisma, MySQL, and Apollo Server.

<!-- end -->

# Table of contents

[Previously]()

- [Introduction](/2018-10-05-graphql-primer-1#Introduction)
- [Schema: types, queries, and mutations](/2018-10-05-graphql-primer-1#Schema)
  - [Scalar types](/2018-10-05-graphql-primer-1#schema-scalar)
  - [Object types](/2018-10-05-graphql-primer-1#schema-object)
  - [Queries](/2018-10-05-graphql-primer-1#schema-queries)
  - [Mutations](/2018-10-05-graphql-primer-1#schema-mutations)
- Writing a GraphQL service and server on top of MySQL
  - [Prisma datamodel](#prisma-datamodel)
  - [Generated schema](#graphql-generate)
- Querying: fetch, GraphiQL, and other clients
- Apollo client
- Queries in react-apollo
- Mutations in react-apollo
- Schema: Subscriptions
- Serverless GraphQL with AWS Appsync
- Do you need this in your stack?

I'll also be including two links to repos that can be used to follow along. The first has the base docker compose setup needed to get started. The other is the end result for the server. This article does assume some basic experience/knowledge with Docker. I've selected [Prisma](https://prisma.io) for this portion largely due to my familiarity. There are, however, other great projects such as [Hasura](https://hasura.io/) that offer similar features.

Prisma also creates a useful electron app, [graphql-playground](https://github.com/prisma/graphql-playground), that can be used to interact with the service here. Other's like GraphiQL can be used too.

## Preperation

[Docker can be obtained here.](https://www.docker.com/get-started) Follow the instructions to get it setup. After you've gotten Docker setup and authenticated with the Docker Hub you'll be able to install the images necessary for this portion.

I'm going to be placing the definition for the data layer inside the same project as the server. The basic directory structure in this case will be:

```
- database/
  - datamodel.graphql
  - docker-compose.yml
  - prisma.yml
- src/
  - index.js
  - schema.graphql
- .graphqlconfig.yml
```

The docker-compose.yml file will define two images one running our Prisma service and the other running our MySQL server. You can see it broken down in more detail within the Prisma docs and the one for this service is vanilla.

```yaml
version: '3'
services:
  prisma:
    image: prismagraphql/prisma:1.14
    restart: always
    ports:
      - '4466:4466'
    environment:
      PRISMA_CONFIG: |
        port: 4466
        databases:
          default:
            connector: mysql
            host: mysql
            port: 3306
            user: root
            password: prisma
            migrations: true
  mysql:
    image: mysql:5.7
    restart: always
    environment:
      MYSQL_ROOT_PASSWORD: prisma
    volumes:
      - mysql:/var/lib/mysql
volumes: mysql:
```

We also need a file to configure Prisma's external interface. In the same database directory we have a prisma.yml.

```yaml
endpoint: http://localhost:4466
datamodel: datamodel.graphql
```

That's it for the setup! Once you've got it set you can use the following command to pull the images and start your backend services.

```
docker-compose -f database/docker-compose.yml up -d
```

Now to actually writing our service.

# Writing a GraphQL service and server on top of MySQL

For quick reference here's the final schema that we created in part one.

```graphql
type Location {
  id: ID!
  name: String!
  cats: [Cat!]!
}

type Cat {
  id: ID!
  name: String!
  age: Int
  weight: Float
  breed: String
  location: Location
}

input LocationInput {
  name: String!
}

input CatInput {
  name: String!
  age: Int
  weight: Float
  breed: String
}

type Query {
  location(id: ID!): Location!
  cat(id: ID!): Cat!
  getLocations(): [Location]!
}

type Mutation {
  addLocation(input: LocationInput): Location!
  addCat(locationId: ID!, input: CatInput): Cat!
}

schema {
  query: Query
  mutation: Mutation
}
```

For our data access layer we need to break this down into the datamodel.graphql file that Prisma is going to process to build our access schema. In this case we don't actually need our input, query and mutation, or schema types. Prisma also introduces some specific directives to our schema that it uses to extend the data definitions. The one we'll be using in our case is `@unique`. There are others like [@default](<https://www.prisma.io/docs/1.4/reference/service-configuration/data-modelling-(sdl)-eiroozae8u#default-value>) and [@relation](<https://www.prisma.io/docs/1.4/reference/service-configuration/data-modelling-(sdl)-eiroozae8u#relations>).

<a name="prisma-datamodel"></a>

## Prisma datamodel

In this case we only need our two main types: Location and Cat. Notice that I've added `@unique` to the `id` field. This will instruct Prisma that the field should be an auto increment key.

```graphql
# database/datamodel.graphql
type Location {
  id: ID! @unique
  name: String!
  cats: [Cat!]!
}

type Cat {
  id: ID! @unique
  name: String!
  age: Int
  weight: Float
  breed: String
  location: Location
}
```

That's it! Relatively simple for the case of this project. If you're following along you can place the contents of that snippet in `database/datamodel.graphql`. Once there you can deploy your datamodel to the dockerized Prisma service with the following command.

```
npx prisma deploy
```

If you've gotten green lights across the board then that means you have a working data layer mapped through Prisma to your MySQL server. If you've installed a GraphQL client you should be able to inspect the schema at `http://localhost:4466`. Take note about how this schema differs from our intended one. Prisma makes a lot of useful assumptions about how we want to faciliate interacting with our data. It provides a number of ORM like types for querying data. We will use this schema to write the server.

<a name="graphql-generate"></a>

## Generated schema
