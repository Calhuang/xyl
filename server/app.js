require('module-alias/register');
require('dotenv').config()

const express = require('express');
// const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const expressGraphQL = require('express-graphql');
const schema = require('./graphql/schema/schema');
const { ApolloServer } = require('apollo-server-express');
const typeDefs = require('./graphql/schema/schema')
const resolvers = require('./graphql/resolvers/resolvers')
const models = require('./models')
const cors = require('cors')
const routes = require('./routes/api')

models.Post.sync()

// routing
const server = new ApolloServer({ typeDefs, resolvers, context: ({ req }) => { return {models, req} } });
const app = express();
server.applyMiddleware({ app });

// CORS
const whitelist = ['http://localhost:3000', 'https://www.calverino.com/']

const corsOptions = function(origin, callback) {
  // allow requests with no origin 
  // (like mobile apps or curl requests)
  if(!origin) return callback(null, true);
  if(whitelist.indexOf(origin) === -1){
    var msg = 'The CORS policy for this site does not ' +
              'allow access from the specified Origin.';
    return callback(new Error(msg), false);
  }
  return callback(null, true);
}

app.use(cors({
  origin: corsOptions,
}))

app.use('/api', routes)

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;
