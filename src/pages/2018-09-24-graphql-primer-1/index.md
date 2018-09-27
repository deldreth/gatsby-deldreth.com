---
title: GraphQL primer part one
date: '2018-09-24T00:00:00.284Z'
tags: ['graphql', 'schema', 'api']
thumbnail: './graphql.png'
thumbnailBg: '#fce7f4'
---

In November I'll be giving a talk about GraphQL to the Asheville Javascript Developers group. From schema definition to its use in today's applications. This is part one of three of what will become that talk.

<!-- end -->

# Table of contents

1. Introduction
2. Schema: types, queries, and mutations
3. Writing a server with an existing REST api
4. Writing a service with an existing relational database
5. Querying: fetch, GraphiQL, and other clients
6. Apollo client
7. Queries in react-apollo
8. Mutations in react-apollo
9. Schema: Subscriptions
10. Serverless GraphQL with AWS Appsync
11. Do you need this in your stack?

# Introduction <a name="#introduction"/>

I'm in an incredibly fortunate position with my job where I can freely suggest that we approach newer technologies to help solve our problems. One of those technologies that's on the tip of every developer's tongue is GraphQL. Even in Asheville you can't throw a stick without hitting at least one dev expounding the merits and sometime frustrations of GraphQL.

These articles are intented to be a primer for anyone new or interested in GraphQL. If you're adept or masterful in GraphQL you may not find the first few portions of these articles very interesting.

At Firefly XD we manage a rather large React and Redux web application. The vast majority of its interactions with internal services are handled through REST-like endpoints. We don't have a lot of robust paramaterized filtering. Our usuage of GraphQL isn't largely to manage big portions of the application, instead we rely on it (and AWS AppSync) to faciliate our rapid prototyping process.

> GraphQL is a data query and manipulation language, and a runtime for handling those queries.

I'm a huge proponent of using whatever technology solves the problem quickly, expressively, and with minimal overhead. Part of the excitement of GraphQL isn't necessarily that it's just new, but that there are powerful services like AppSync and Prisma that faciliate the data access layer leaving the developer to simply write queries. Like any technology it's important to evaluate its merits and its flaws before jumping in head first.

# Schema: types, queries, and mutations

Your schema defines the shape and relationship of your data. It specifies the type values of fields returned by queries. It details inputs, filters, and arguments to queries and mutations. Services like AppSync and Prisma will use your schema to map data to its source.

## Scalar types

When defining your schema each field is assigned a type. GraphQL supports five scalar types `Int`, `Float`, `Boolean`, `String`, and `ID`. Ending a type definition with an exclaimation mark indicates that the field is non-nullable. Wrapping a type definition in square brackets indicates a list of that type.

## Object types

Imagine that we wanted to create a type that described a cat. This cat has a name, a weight, an age, and a breed. To do this we define an object type.

```graphql
type Cat {
  name: String!
  age: Int
  weight: Float
  breed: String
}
```

Our cat object type has four fields made up of different scalars. T name field is the only field that cannot be null.

Imagine we're creating a cat adoption agency management application. The agency is a single organization with multiple locations. We want to define a relationship of a location to the cats in their care.

```graphql
type Location {
  id: ID!
  name: String!
  cats: [Cat]!
}
```

I've defined another object type called `Location` that has an id, name, and list of cats. Note the placement of the exclaimation mark on `[Cat]!`. This specifies that the field cats will be a non-nullable list that could be empty. The relationship is beginning to form but we need to update our Cat object type to ultimately reflect our schema.

```graphql
type Cat {
  name: String!
  age: Int
  weight: Float
  breed: String
  locationID: ID!
}
```

```graphql
type Query {
  location(location: ID!): Location
}
```

```graphql
{
  GetLocation($location: ID!) {
    location(location: $location) {
      name
      cats {
        name
        age
        breed
      }
    }
  }
}
```
