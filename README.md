express-template: An express.js app template
===
**express-template** is a project template for Node.js + Express.js RESTful API. This template lets you quickly start creating new applications.
# Features
1. Request logging with Morgan
2. Realizing basic security with Helmet
3. Parsing body with body-parser
4. Organize settings into config
# Getting started
## Prerequisites
**WARNING** This works only in Linux/Unix(macOS)!

First, clone this repository. Next, run the command below to install dependencies:
```
npm install
```
Then, set an empty environment variable. This version does not have a code for DB connecting, but you can add any.
# How to test
```
npm test
```
# Dependencies
- [body-parser](https://github.com/expressjs/body-parser)
- [dotenv](https://github.com/motdotla/dotenv)
- [express](https://github.com/expressjs/express)
- [helmet](https://github.com/helmetjs/helmet)
- [morgan](https://github.com/expressjs/morgan)
# TODO:
1. Database connection
2. Swagger
3. Test coverage
4. Support windows environment
