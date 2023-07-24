import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.scss'

import { composeWithDevTools } from 'redux-devtools-extension';
import {reducer} from '../src/Reducer/Reducer.js'
import { legacy_createStore } from 'redux';
import { Provider } from 'react-redux';
 
const store = legacy_createStore(
   reducer, composeWithDevTools()
   //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store = { store }>
      <App />
    </Provider>
  </React.StrictMode>,
)
