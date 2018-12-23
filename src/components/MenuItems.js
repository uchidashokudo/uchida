import React from 'react'
import PropTypes from 'prop-types'
import { v4 } from 'uuid'

const MenuItems = ({ menuItems }) => (
  <div>
    <ul classNames="menu-items">
      {menuItems.map(menuItem => (
        <li key={v4()} classNames="item">
          <label className="title">{menuItem.name}</label>
          <span className="price">{menuItem.price}</span>
          <p className="description">{menuItem.description}</p>
        </li>
      ))}
    </ul>
  </div>
)

MenuItems.propTypes = {
  menuItems: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      description: PropTypes.string,
      price: PropTypes.string,
    })
  ),
}

export default MenuItems
