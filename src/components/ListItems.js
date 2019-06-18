import React from 'react'
import './ListItems.css'

export default class ListItems extends React.Component {

  render() {
    const itemsArray = this.props.itemsArray

    // map through the items in todo
    const listItems = itemsArray.map((item) => {
      return (
        <li key={item.key} onClick={() => this.props.deleteItem(item.key)}>
          <div className="list-item-checkbox"></div>
          {item.title}
        </li>
      )
    })
    
    return (
      <ul className="list-item">{listItems}</ul>
    )
  }
}