import React from 'react'
import PropTypes from 'prop-types'
import { v4 } from 'uuid'

const MenuItems = ({ menuItems }) => (
  <div>
    <ul>
      {menuItems.map(menuItem => (
        <li key={v4()}>
          <div>
            {menuItem.name} - {menuItem.price}
            <br />
            <cite> – {menuItem.description}</cite>
            <br />
          </div>
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
