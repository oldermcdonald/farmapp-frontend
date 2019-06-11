import React from 'react';
import ToDoList from './ToDoList'

class App extends React.Component {
  state = {
    todolist: null
  }

  componentDidMount() {
    const apiUrl = 'http://localhost:8080/api/todolist'
    fetch(apiUrl)
    .then(res => res.json())
    .then(data => this.setState({ 
      todolist: data
    }))
  }

  render() {
    return (
      <div className="App">
        <ToDoList />
        <h2>Current todo list:</h2>
        <p>...</p>
      </div>
    );
  }
}

export default App;
