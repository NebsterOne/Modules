// TODO: Import express
const express = require('express');

const data = require('./terms.json');
// TODO: Import 'terms.json' file
const PORT = 3001;

// TODO: Initialize app variable
const app = express();

// TODO: Create a route for a GET request that will return the content of our `terms.json` file
app.get('/',(req,res) => res.send('go to /api'));
app.get('/api',(req,res) => res.json(data));

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
