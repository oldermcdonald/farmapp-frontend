import React from 'react'
import './ToDoList.css'
export default class ToDoList extends React.Component {

  render() {
    return (
      <div className="toDoList">
        <h2>Add a todo item:</h2>

        <form action="submit" onSubmit={this.props.addItem}>
          <input
            type="text"
            placeholder="fix fence"
            // ref={this.props.inputElement}
            value={this.props.currentItem.text} // need .text otherwise object returned
            onChange={this.props.handleInputField}
          />
          <button type="submit">Add Task</button>
        </form>

      </div>
    )
  }
}