const express = require('express');
const app = express();
const port = 3000;
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
const dbName = 'portfolio';

MongoClient.connect(url, { useUnifiedTopology: true }, (err, client) => {
  if (err) return console.error(err);
  console.log('Connected to MongoDB');

  const db = client.db(dbName);

  // Define your routes and API endpoints here

  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
});

app.use(express.static('public'));
