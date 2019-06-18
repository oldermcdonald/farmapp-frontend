// Dexie is a minamalistic wrapper for IndexedDB
// import Dexie from 'dexie'

// create new local database instance
// var dbName = new Dexie('dbName');

// define the schema
// ++id on the primary key means it will be auto-incremented
// let version = 1;
// db.version(version).stores({
//   toDoTable: "++id, title, category, details, location, lat, long"
// });


// export default db;




// export function newLocalDB(dbName) {
//   var dbName = new Dexie('dbName');
//   return dbName
// }





// idb is a library that makes small improvements on indexedDB API
// import { openDB, /* deleteDB, wrap, unwrap */} from 'idb'

// function checkifSupported() {
//   if(!('indexedDB' in window)) {
//     console.log("This browser doesn't support IndexedDb")
//     return null;
//   }
// }

// export function createDB(databaseName) {
//   checkifSupported()
//   console.log('creating indexedDB')
//   return openDB(databaseName, 1, function(upgradeDb) {
//     if (!upgradeDb.objectStoreNames.contains('events')) {
//       const eventOS = upgradeDb.createObjectStore('events', {keyPath: 'id'});
//     }
//   });
// }


// export async function createDB(databaseName) {
//   checkifSupported()
//   console.log('IndexedDB opened')
//   let version = 1
//   return await openDB(databaseName, version)
// }


// save data to local database
// export function saveData(dbName, events) {
//   checkifSupported()
//   console.log('saving to indexedDb')
//   return dbName.then(db => {
//     const tx = db.transaction('events', 'readwrite');
//     const store = tx.objectStore('events');
//     return Promise.all(events.map(event => store.put(event)))
//     .catch(() => {
//       tx.abort();
//       throw Error('Events were not added to the store');
//     });
//   });
// }


