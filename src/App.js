import React from 'react';
import ToDoList from './components/ToDoList'
import ListItem from './components/ListItem'
import { openDB, /* deleteDB, wrap, unwrap */} from 'idb'

const serverData = require('./serverData')

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      items: [],
      currentItem: {
        text:'',
        key:''
      }
    }
  }

  componentDidMount() {
    serverData.getData()
      .then(dataFromServer => {
        this.updateAppState(dataFromServer)
        this.saveEventDataLocally(dataFromServer)
      }).catch(err => console.log(err))
  }

  updateAppState = data => {
    this.setState({
      items: data
    })
  }

  // capture input text ready to store when form submitted
  handleInputField = event => {
    console.log('input received')
    const inputText = event.target.value // get text from input
    const currentItem = {
      key: Date.now(),
      title: inputText,
      category: 'placeholder',
      lat: '00.000000', // get on submit
      long: '00.000000', // get on submit
      location: 'placeholder',
      details: 'placeholder'
    }
    this.setState({currentItem})
  }

  // adds the current item to the item array
  addItem = event => {
    event.preventDefault()
    const newItem = this.state.currentItem
    console.log(`adding new item to state: ${newItem.title}`)
    // update state with newItem
    const items = [ ...this.state.items, newItem ]
    this.setState({
      items: items,
      // reset currentItem to empty values
      currentItem: { text: '', key: ''}
    })
    serverData.sendData(newItem)
  }


  removeItem = event => {
    console.log('item removed')
  }


  // GPS Functions
  getCurrentGPSPosition() {
    if ("geolocation" in navigator) {
      // check if geolocation is supported
      navigator.geolocation.getCurrentPosition( position => {
        console.log(`lat: ${position.coords.latitude}`)
        console.log(`long: ${position.coords.longitude}`)
      })
      // provide error condition if location not returned
    } else {
      console.log('geolocation is not enabled')
      // get location some other way
    }
  }

  
  // Local Database IndexedDB Functions 

  // Create a database within IndexedDB local browser
  createIndexedDB() {
    if (!('indexedDB' in window)) {return null;}
    return openDB('todolist', 1, function(upgradeDb) {
      if (!upgradeDb.objectStoreNames.contains('list')) {
        const listOS = upgradeDb.createObjectStore('list', {keyPath: 'id'});
      }
    });
  }

  // create indexedDB database and get back a promise
  dbPromise = this.createIndexedDB();

  saveEventDataLocally = data => {
    console.log('saving to indexedDb')
  }



  render() {
    return (
      <div className="App">
        <ToDoList
          addItem={this.addItem}
          inputElement={this.inputElement}
          handleInputField={this.handleInputField}
          currentItem={this.state.currentItem}
        />
        <h2>Current todo list:</h2>
        <ListItem itemsArray={this.state.items}/>
      </div>
    );
  }
}

export default App;