'use strict';
import React from 'react';
import {renderToString} from 'react-dom/server';
import path from 'path';
import fs from 'fs';
import App from '../client/containers/app';

const filePath = path.normalize('./src/server/index.html');
const index = fs.readFileSync(filePath, 'utf8');

export default () => {
  const content = renderToString(<App />);
  return index.replace('<!-- ::APP:: -->',content);
}
