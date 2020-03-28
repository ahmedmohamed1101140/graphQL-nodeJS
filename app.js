const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
require('dotenv').config({path: '/.env'});

const app = express();
mongoose.connect(process.env.MLAB_URL);

mongoose.connection.once('open',()=>{
    console.log('Connected To Database');
});


app.use('/graphql',graphqlHTTP({
    schema,
    graphiql: true
}));

const PORT = process.env.PORT || 3000;
// "MLAB_URL": "mongodb://ahmed:test123@ds253960.mlab.com:53960/gql-node"


app.listen(PORT,()=>{
    console.log(`application running at port :${PORT}`);
});