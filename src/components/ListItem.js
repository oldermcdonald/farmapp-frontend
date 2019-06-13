import React from 'react'
import './ListItem.css'

export default class ListItem extends React.Component {
  generateTasks(item) {
    return (
      <li key={item.key}>
        <div className="list-item-checkbox"></div>
        <p>{item.title}</p>
      </li>
    )
  }

  render() {
    const itemsArray = this.props.itemsArray
    const listItems = itemsArray.map(item => {
      return this.generateTasks(item)
    })
    
    return (
      <ul className="list-item">
        {listItems}
        hello
      </ul>
    )
  }
}