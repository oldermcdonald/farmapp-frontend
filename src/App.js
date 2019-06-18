import React from 'react';
import ToDoList from './components/ToDoList'
import ListItems from './components/ListItems'
import './App.css'
import './reset.css'
// import db from './localDatabase'

import Dexie from 'dexie'


const serverData = require('./serverData')
// const localDatabase = require('./localDatabase')


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

    // Create a new local database instance with dexie
    var localDb = new Dexie('famappLocal');
    localDb.version(1).stores({
      todolist: "++id, title, category, details, location, lat, long"
    });

    // Open the localDb
    localDb.open().catch(error => console.error(`Open failed: ${error}`))

    // add stuff to localDb
    localDb.todolist.add({
      title: "derp",
      category: 'a',
      details: 'none',
      location: 'melb',
      lat: 3,
      long: 5
    })

    serverData.getData()
      .then(dataFromServer => {
        this.updateAppState(dataFromServer)
        console.log(dataFromServer[0])
        // add server data to local db

        localDb.todolist.add(dataFromServer)

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
    event.preventDefault() // prevent reload on form submission
    const newItem = this.state.currentItem
    console.log(`adding new item to state: ${newItem.title}`)
    // update state with newItem
    const items = [ ...this.state.items, newItem ]
    this.setState({
      items: items,
      // reset currentItem to empty values
      currentItem: { text: '', key: ''}
    })
    // serverData.sendData(newItem)
  }


  deleteItem = key => {
    console.log(`item (${key}) removed`)
    const filteredItems = this.state.items.filter(item => {
      return item.key !== key
    })
    this.setState({
      items: filteredItems
    })
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




  render() {
    return (
      <div className="App">
        <ToDoList
          addItem={this.addItem}
          inputElement={this.inputElement} // to refer to this element
          handleInputField={this.handleInputField}
          currentItem={this.state.currentItem}
        />

        <ListItems itemsArray={this.state.items} deleteItem={this.deleteItem}/>
      </div>
    );
  }
}

export default App;