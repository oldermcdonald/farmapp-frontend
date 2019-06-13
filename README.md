# Farm Todo App
### GA - Software Engineering Immersive Project 4

A simple todo list that works offline for farmers to manage tasks. 🚜

### Brief:
Make a todo list app with a map component that can work offline. The intention is that farmers can add tasks to their list when offline and have GPS coordinates saved with the task so that they can return to the exact spot.


### Usage Scenario:
 A farmer finds a noxious weed in the paddock while working. She opens the app on her phone which still works even without internet access. She adds a todo item about the weed to remind her to return to the exact spot in a couple of months to check if it is erradicated. When she returns back to the house at the end of the day, her phone background syncs the todo item up to the server over wifi.


### Research:
- Consulted with a drought stricken cattle farmer in northern NSW to understand parts of the job that they find challenging and where there might be opportunities to assist.
- Gathered information over phone calls and spreadsheets to get a big picture overview of the many admin processes of running a farm. These processes include stringent reporting demands for bio-security laws, stock management, chemical inventory and feed inventory.
- Collaborated to reduce the scope of the project down to something more achievable within a short time span, hence focussing on solving ad-hoc task management with a todo list.
- There are tons of todo list apps available, but struggled to find any with a geolocation tagging abilities that would be useful in a big paddock.
- Developed a feature survey to establish which features would be highest priority (Top 3 were - 'Works Offline', 'has GPS' and 'can  categorize jobs').

### Tech:
- Progressive Web App (PWA)
- Node.JS Backend - [view source](https://github.com/oldermcdonald/farmapp-backend)
- React Frontend (create-react-app)
- PSQL DB backend
- [Workbox](https://developers.google.com/web/tools/workbox/ "Workbox")
- [IndexedDB](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API "IndexedDb")
- [Mapbox](https://www.mapbox.com/ "Mapbox")


### Key Challenges:
For me there's been a lot of 'firsts' in this project and I've had to learn many new things! Its my first react app, the first time i've tried using service workers, the first time i've tried to make a PWA, and the first time i've played with Workbox and IndexedDB!
 1. Service Workers - Create-react-app provides limited access to the service worker config which has proved challenging. While its great that you can register the react app as a PWA straight out of the box (so that it pre-caches the site for you), I found it more difficult to configure when I wanted to create a new database on indexedDB. Create-react-app does utilize Workbox under the hood now, rather than sw-precache which is useful.
 2. Mapping - Mapbox with open-street-map
 3. 
 4. 

### Timing:
Built over 4 days in class.
