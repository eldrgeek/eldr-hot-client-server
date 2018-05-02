import App from '../client/components/App';
import Html from '../client/common/Html';
import configureStore from '../client/store';
import fs from 'fs';
import React from 'react';
import { Provider } from 'react-redux';
import { renderToString } from 'react-dom/server';
import { ServerStyleSheet } from 'styled-components'; // <-- importing ServerStyleSheet
console.log("New Server-Renders") 
// eslint-disable-next-line no-sync
const template = fs.readFileSync(__dirname + '/../index.html', 'utf8');

function renderApp(path, callback) {
  const store = configureStore();
  const state = store.getState();
  const sheet = new ServerStyleSheet(); // <-- creating out stylesheet 

  const rendered = renderToString(sheet.collectStyles(
    <Provider store={store}>
      <App />
    </Provider>)
  );
  const styles = sheet.getStyleTags(); // <-- getting all the tags from the sheet
  let page = template
    .replace('<!-- CONTENT -->', rendered)
    .replace('"-- STORES --"', JSON.stringify(state))
    .replace('<!-- STYLES -->', styles)
  
  let page1 = Html({body: rendered, title: "The really good title", store: JSON.stringify(state)+ "//XXXXXXXXX", styles: styles})
  //console.log(page1)
  callback(null, page1);
}

module.exports = renderApp;
