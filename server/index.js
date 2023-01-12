const express = require('express');
require('dotenv').config();
const {qraphqlHTTP, graphqlHTTP} = require('express-graphql');
const port = process.env.PORT || 5000;
const schema = require('./schema/schema')

const app = express();


app.use('/graphql', graphqlHTTP({

}))

app.listen(port, console.log(`server running on port ${port} `));