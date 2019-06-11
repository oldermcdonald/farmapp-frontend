import React from 'react'

export default class ToDoList extends React.Component {
  render() {
    return (
      <div>
      <form className="todoitem" action="">
        <h2>Add a todo item:</h2>
        <p>Title</p>
        <input type="text" placeholder="fix fence"/>
        <input type="submit" value="Add Task"/>
      </form>
    </div>
    )
  }
}