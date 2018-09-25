---
title: GraphQL primer part one
date: '2018-09-24T00:00:00.284Z'
tags: ['graphql', 'schema', 'api']
published: false
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

At Firefly XD we manage a rather large React and Redux web application. The vast majority of its interactions with internal services are handled through REST-like endpoints. We don't have a lot of robust paramaterized filtering. Our usuage of GraphQL isn't largely to manage big portions of the application, instead we rely on it (and AWS Appsync) to faciliate our rapid prototyping process.

> GraphQL is a data query and manipulation language, and a runtime for handling those queries.
