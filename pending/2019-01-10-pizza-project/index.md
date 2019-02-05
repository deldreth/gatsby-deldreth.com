---
title: Interview, Pizza Project
date: '2019-01-10T00:00:00.284Z'
tags: ['code test', 'react', 'apollo']
published: false
---

Breakdown of a React project I created for an interview test that involved using a simple GraphQL API, Apollo Client, and Redux.

<!-- end -->

This is actually the first of what will hopefully be a series of _I was interviewing and had to finish a take home project_. It will probably include my general take on the project as a whole, feedback on its use in the hiring process, and some technical breakdown of what I did. I'm not interested in calling companies or people out for creating overly simple or even unnecessariliy obtuse coding projects. So I won't be divulging any names of people or organizations.

## Premise

This project was to create a (presumably React) application utilizing a provided GraphQL API. The API itself was straightforward. Composed of two queries and an enum. The queries were intended to return all possible types of pizza, or a single pizza by name (names in this case were managed, albeit not well, by the aforementioned enum). Each pizza also had a list of toppings attached to it and pricing for those toppings.

### Criteria

1. UI to allow **adding and removing** pizzas to a _shopping cart_.
2. UI to allow **adding or toggling** toppings of a pizza.
  * Logic to handle case where a pizza has a **maximum** number of total toppings.
3. Logic to display cost of an **individual** pizza.
4. Logic to display cost of **entire** cart.
5. Styling, testing, and other additions would not be considered.

## Setup

The requirements for the project did mention that anything could really be used for this, but that the organization used Apollo Client, Redux, and React in particular.

### Thought process

I thought it best to go with what was familiar to my audience. I started with create-react-app. It's simple and required pretty much no overhead to get going. One thing I've noticed after doing a number of similar project excersizes is that the faster you can churn them out the better off you'll be. 

Package wise I chose:

* apollo-boost (apollo-client is also present), graphql-tag
* react-apollo
* redux, react-redux, redux-thunk
* styled-components

I had really (really) been wanting to have an excuse to play with nes.css (https://nostalgic-css.github.io/NES.css/). So I went with that despite knowing that the instructions stated that style libraries would not be considered during assessment. 

### Componentry

I created three components that would service the basic pieces of UI.

* Select - pizza selection component, this would explicitly use react-apollo's Query component to query all possible types of pizza and then serve as the point where a user would add pizza to their cart.
* Pizza - Display pizza name, toppings, UI to allow removal from cart, and the total cost of the pizza.
* Cart - Grid component to display all pizzas in the cart as well as the total cost of the _order_.

### Redux

Based on the requirements I assumed, accurately, that I would only need three actions to describe the most basic interactions: ADD_PIZZA, REMOVE_PIZZA, and TOGGLE_TOPPING. Of these three only ADD_PIZZA would need to be handled asyncronously. 

In evaluating the returns of the GraphQL API I noticed that none of the pizzas had a unique identifier. It made sense. I decided that he state of the application would just be a single array that represented the cart. Pizzas in the cart would then be referenced throughout the application by their index in the store.

### What I intentionally left out

Assuming I would get to the third part of this particular interview process... I didn't want to go all in. Firstly, I wanted to get this done as quickly as possible so I could spend time withe my family. Secondly, it's fun to see what other teams tend to do in common situations like directory structure and project organization.

I specifically made the `src` directory of the application relatively flat. I also did not use any sort of selector library for calculation functions that will be talked about later.

## Structure


