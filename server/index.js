const express = require('express');
require('dotenv').config();
const cors = require('cors')
const { graphqlHTTP } = require('express-graphql')
const schema = require('./schema/schema')
const connectDB = require('./config/db')
const port = process.env.PORT || 8080;
const { createJWT } = require('./utils/auth')

const path = require('path');
const app = express();
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});


app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: process.env.NODE_ENV === 'development'
}));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

connectDB();

app.use(cors());


app.listen(port, console.log(`Server running on port ${port}`));


app.get('/authtest', (req, res) => {
  res.json(createJWT({ username: "username1", email: "username1@gmail.com", password: "12345678" }));
})
