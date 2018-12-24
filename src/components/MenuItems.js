import React from 'react'
import PropTypes from 'prop-types'
import { v4 } from 'uuid'

const MenuItems = ({ menuItems }) => (
  <div>
    <ul className="menu-items">
      {menuItems.map(menuItem => (
        <li key={v4()} className="item">
          <div className="columns">
            <div className="title column is-12">
              <label>{menuItem.name}</label>
              <span
                style={{
                  float: 'right'
                }}
              >
                {menuItem.price}
              </span>
            </div>
          </div>
          <div className="columns">
            <div className="description column is-4">
              <p className="">{menuItem.description}</p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  </div>
);

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
