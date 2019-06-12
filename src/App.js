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

  // Get data from server api
  componentDidMount() {
    const apiUrl = 'http://localhost:8080/api/todolist'
    axios.get(apiUrl) // get api data
    .then(res => {
      console.log(res)
      this.setState({ // add db items to state
        items: res.data
      })
    })
  }

  // get input text ready to store when form submitted
  handleInputField = event => {
    console.log('input received')
    const inputText = event.target.value // get text from input
    const currentItem = {
      text: inputText,
      key: Date.now()
    }
    this.setState({currentItem}) // store 
  }


  // adds the current item to the item array
  addItem = event => {
    event.preventDefault()

    const newItem = {
      id: 0,
      title: this.state.currentItem.text,
      category: 'placeholder',
      lat: '00.000000',
      long: '00.000000',
      location: 'placeholder',
      details: 'placeholder'
    }

    console.log(`adding new item to state: ${newItem.text}`)

    // add newItem to items with spread
    const items = [ ...this.state.items, newItem ]
    this.setState({
      items: items,
      // reset currentItem to empty values
      currentItem: { text: '', key: ''}
    })
  }


  removeItem = event => {
    console.log('item removed')
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
