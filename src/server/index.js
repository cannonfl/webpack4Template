'use strict';
const express = require('express');
const React = require('react');
const renderToString = require('react-dom/server').renderToString;
const App = require('../client/containers/app').default;

const path = require('path');
const app = new express();

const port = process.env.PORT || 8080;

app.use(express.static(path.resolve(__dirname, 'public')));
app.get('/*', (req, res) => {
  const content = renderToString(<App />);
  res.send(content);
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
