import React from 'react';

class App extends React.Component {
  state = {
    todolist: null
  }

  componentDidMount() {
    const url = 'http://localhost:8080/api/todolist'
    fetch(url)
    .then(res => res.json())
    .then(data => this.setState({ todolist: data }))
  }

  render() {
    return (
      <div className="App">

        <div>
          <form className="todoitem" action="">
            <h2>Add a todo item:</h2>
            <p>Title</p>
            <input type="text" placeholder="fix fence"/>
            <input type="submit" value="Submit"/>
          </form>
        </div>

        <h2>Current todo list:</h2>
        <p>...</p>
      </div>
    );
  }
}

export default App;
