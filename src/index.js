import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// imported idb for indexedDB below
import { openDB, deleteDB, wrap, unwrap } from 'idb'

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();


// call bg sync
navigator.serviceWorker.ready.then(function(swRegistration) {
  return swRegistration.sync.register('myFirstSync');
});



function createIndexedDB() {
  if (!('indexedDB' in window)) {return null;}
  return openDB('todolist', 1, function(upgradeDb) {
    if (!upgradeDb.objectStoreNames.contains('events')) {
      const eventsOS = upgradeDb.createObjectStore('events', {keyPath: 'id'});
    }
  });
}

// TODO - create indexedDB database
const dbPromise = createIndexedDB();