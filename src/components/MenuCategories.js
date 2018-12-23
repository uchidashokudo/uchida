import React from 'react'
import PropTypes from 'prop-types'
import { v4 } from 'uuid'
import MenuItems from '../components/MenuItems'

const MenuCategories = ({ categories }) => (
  <div>
      {categories.map(category => (
        <div key={v4()} className='menu-section'>
          <label className="title">{category.heading}</label>
          <p>{category.description}</p>
          <MenuItems menuItems={category.items} />
        </div>
      ))}
  </div>
)

MenuCategories.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      heading: PropTypes.string,
      description: PropTypes.string,
      items: PropTypes.array
    })
  ),
}

export default MenuCategories
