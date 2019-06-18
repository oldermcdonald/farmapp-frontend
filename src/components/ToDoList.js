import React from 'react'
import './ToDoList.css'
export default class ToDoList extends React.Component {

  // 
  componentDidUpdate() {
    // this.props.inputElement.current.focus()
  }

  render() {
    return (
      <div className="toDoList">

        <form action="submit" onSubmit={this.props.addItem}>
          <input
            type="text"
            placeholder="fix fence"
            ref={this.props.inputElement}
            value={this.props.currentItem.text}
            onChange={this.props.handleInputField}
          />
          <button type="submit">Add Task</button>
        </form>

      </div>
    )
  }
}