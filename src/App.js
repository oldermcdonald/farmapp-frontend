import React from 'react';
import ToDoList from './ToDoList'
import ListItem from './ListItem'
import axios from 'axios'


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      items: [], // to do list items
      currentItem: {
        text:'',
        key:''
      } // store text entered
    }
  }

  // Get data from server after first render
  componentDidMount() {
    this.getToDoItemsFromDB();
  }

  getToDoItemsFromDB() {
    let apiUrl = 'http://localhost:8080/api/todolist'
    axios.get(apiUrl) // get api data
    .then(res => {
      this.setState({ // add db items to state
        items: res.data
      })
    })
    .catch(err => console.log(err))
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
    // update db with newItem
    this.sendToDoItemsToDB(newItem)
  }


  // Send item to database
  sendToDoItemsToDB = itemToAdd => {
    let apiUrl = 'http://localhost:8080/api/todolist'
    axios.post(apiUrl, itemToAdd)
    .then(res => {
      console.log(res)
    })
  }


  removeItem = event => {
    console.log('item removed')
  }


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
