const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
require('dotenv').config();

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


app.listen(PORT,()=>{
    console.log(`application running at port :${PORT}`);
});