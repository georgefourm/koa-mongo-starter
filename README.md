# koa-mongo-starter
A boilerplate [koaJS](http://koajs.com/) setup, using MongoDB as the backend database, 
structured in a sensible way, including common libraries for routing, configuration, logging, and database access.

## Motivation
KoaJS is a very minimalistic, unopinionated node framework, providing a thin layer of abstraction 
over the base node libraries, and while this provides the developer with maximum flexibility,
a part of the code is repeated accross similar projects. 

This repository aims to include that part of the code, using tried and tested libraries of the node ecosystem.
By no means is this project an attempt to cover all use cases. Instead, it focuses on a specific setup that
I have found is convenient when working with a Mongo database.

## Installation

Simply run `npm install` to fetch dependencies

## Usage

For development purposes, if you have [nodemon](https://nodemon.io/) installed, 
you can run the application using `npm run start`or simply `nodemon app`

## Libraries

The following libraries are used in this setup:

- [config](https://github.com/lorenwest/node-config) , a versatile configuration library
- [winston](https://github.com/winstonjs/winston) , a configurable and modular logging library
- [mongoose](http://mongoosejs.com/) , a popular and elegant ODM for working with MongoDB
- [bcrypt](https://github.com/kelektiv/node.bcrypt.js) , a powerful library for password hashing
- [pug](https://github.com/pugjs/pug) , a high-performance templating engine
- [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken) , the Auth0 implementation of JSON Web Tokens
- [app-module-path](https://github.com/patrick-steele-idem/app-module-path-node) , a useful library to simplify require() paths

## Koa Extensions

The project is based on several extensions of the koa framework, in order to easily bootstrap a new application.

- [koa-bodyparser](https://github.com/koajs/bodyparser), a body parser for Koa
- [koa-json](https://github.com/koajs/json) , a JSON pretty-printing middleware
- [koa-logger](https://github.com/koajs/logger) , a console request logger for koa
- [koa-router](https://github.com/alexmingoia/koa-router) , routing middleware for koa
