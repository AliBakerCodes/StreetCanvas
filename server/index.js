const express = require('express');
require('dotenv').config();
const cors = require('cors')
const { graphqlHTTP } = require('express-graphql')
const schema = require('./schema/schema')
const connectDB = require('./config/db')
const port = process.env.PORT || 8080;
const { createJWT } = require('./utils/auth')
const { authenticate } = require('./utils/authMiddleware')

const https = require('https');
const fs = require('fs');

const options = {
  key: fs.readFileSync('.cert/key.pem'),
  cert: fs.readFileSync('.cert/cert.pem')
};

const app = express();

https.createServer(options, app).listen(3002);


connectDB();

app.use(cors());


app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: process.env.NODE_ENV === 'development'
}));

app.listen(port, console.log(`Server running on port ${port}`));


