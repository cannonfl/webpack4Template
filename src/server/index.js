'use strict';
const express = require('express');
const renderer = require('../helpers/renderer').default;

const app = new express();
const port = process.env.PORT || 8080;

app.use(express.static('public'));

app.get('/*', (req, res) => {
  res.send(renderer());
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
