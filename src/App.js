import React from 'react';

class App extends React.Component {
  render() {
    return (
      <div className="App">

      <div>
        <form className="todoitem" action="">
          <h1>Add a todo item</h1>
          <p>Description</p>
          <input type="text" placeholder="fix fence"/>
          <p>Due Date</p>
          <input type="date"/>
          <p>Comments</p>
          <textarea name="" id="" cols="30" rows="5"></textarea>
          <button>Add</button>
        </form>
      </div>

      </div>
    );
  }
}

export default App;
