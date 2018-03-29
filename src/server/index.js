'use strict';
const express = require('express');
const React = require('react');
const renderToString = require('react-dom/server').renderToString;
const path = require('path');
const fs = require('fs');
const App = require('../client/containers/app').default;

const app = new express();
const port = process.env.PORT || 8080;

app.use(express.static('public'));
const filePath = path.normalize('./src/server/index.html');
const index = fs.readFileSync(filePath, 'utf8');

app.get('/*', (req, res) => {
  const content = renderToString(<App />);
  const html = index.replace('<!-- ::APP:: -->',content);
  res.send(html);
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
