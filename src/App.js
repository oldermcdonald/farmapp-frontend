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
            <input type="submit" value="Submit"/>
          </form>
        </div>

      </div>
    );
  }
}

export default App;
