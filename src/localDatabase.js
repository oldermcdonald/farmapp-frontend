import { openDB, /* deleteDB, wrap, unwrap */} from 'idb'


function checkifSupported() {
  if(!('indexedDB' in window)) {
    console.log("This browser doesn't support IndexedDb")
    return null;
  }
}

// Create a local database with IndexedDB
// export function createDB(databaseName) {
//   checkifSupported()
//   console.log('creating indexedDB')
//   return openDB(databaseName, 1, function(upgradeDb) {
//     if (!upgradeDb.objectStoreNames.contains('events')) {
//       const eventOS = upgradeDb.createObjectStore('events', {keyPath: 'id'});
//     }
//   });
// }


export function createDB(databaseName) {
  checkifSupported()
  var dbPromise = openDB(databaseName,  1)
  console.log('IndexedDB opened')
}


// save data to local database
export function saveData(dbName, events) {
  checkifSupported()
  console.log('saving to indexedDb')
  return dbName.then(db => {
    const tx = db.transaction('events', 'readwrite');
    const store = tx.objectStore('events');
    return Promise.all(events.map(event => store.put(event)))
    .catch(() => {
      tx.abort();
      throw Error('Events were not added to the store');
    });
  });
}


