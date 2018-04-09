const express = require("express");
const mongoose = require("./db/db");
const graphqlHTTP = require("express-graphql");
const cors = require("cors");
//const db = mongoose();
const app = express();

app.use('*', cors());

const userSchema = require('./graphql/index').userSchema;
app.use('/graphql',cors(), graphqlHTTP({
    schema: userSchema,
    graphiql: true
}));

// Up and Running at Port 4000
app.listen(process.env.PORT || 3000, () => {
    console.log('A GraphQL API running at port 4000');
});
