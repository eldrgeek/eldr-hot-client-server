import App from '../client/components/App';
import Html from '../client/common/Html';
import configureStore from '../client/store';

import React from 'react';
import { Provider } from 'react-redux';

import {renderStatic} from 'glamor/server'
// import {rehydrate} from 'glamor'
import {render} from 'react-dom'
import ReactDOMServer from 'react-dom/server'



// eslint-disable-next-line no-sync

function renderApp(consoleContents, path, callback) {
  
//  const store = configureStore({consoleContents});
  const store = configureStore({consoleContents});
  const state = store.getState();
  
  
  let {html, css, ids} = renderStatic(() => ReactDOMServer.renderToString(
    <Provider store={store}>
        <App />
      </Provider>))

   
  let page1 = Html({html, title: "The really good title", store: JSON.stringify(state), css, ids})
  //console.log(page1)
  callback(null, page1);
}

module.exports = renderApp;
