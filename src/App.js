import React from 'react';
import ToDoList from './ToDoList'
import ListItem from './ListItem'


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      items: [], // to do list items
      currentItem: {text:'', key:''} // store text entered
    }
  }

  // Get data from server api with fetch
  componentDidMount() {
    const apiUrl = 'http://localhost:8080/api/todolist'
    fetch(apiUrl) // fetch api data
    .then(res => res.json()) // convert api data to json
    .then(data => {
      console.log(data)
      this.setState({ // add db items to state
        items: data
      })
    })
  }

  // get input text ready to store when form submitted
  handleInputField = event => {
    console.log('input received')
    const inputText = event.target.value // get text from input
    const currentItem = { text: inputText, key: Date.now() }
    this.setState({currentItem}) // store 
  }

  // adds the current item to the item array
  addItem = event => {
    event.preventDefault()
    const newItem = this.state.currentItem
    console.log(`adding new item to state: ${newItem.text}`)
    // add newItem to items with spread
    const items = [ ...this.state.items, newItem ]
    this.setState({
      items: items,
      // reset currentItem to empty values
      currentItem: { text: '', key: ''}
    })
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

        <ListItem />

      </div>
    );
  }
}

export default App;
