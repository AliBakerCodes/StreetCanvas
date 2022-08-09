const express = require('express');
require('dotenv').config();
const cors = require('cors')
const { graphqlHTTP } = require('express-graphql')
const schema = require('./schema/schema')
const connectDB = require('./config/db')
const port = process.env.PORT || 8080;
const { createJWT } = require('./utils/auth')


const app = express();

connectDB();

app.use(cors());

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: process.env.NODE_ENV === 'development'
}));

app.listen(port, console.log(`Server running on port ${port}`));


app.get('/authtest', (req, res) => {
  res.json(createJWT({ username: "username1", email: "username1@gmail.com", password: "12345678" }));
})
