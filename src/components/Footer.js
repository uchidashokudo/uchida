import React from 'react'
import PropTypes from 'prop-types'

const Footer = ({ email, instagram, facebook }) => {
  return (
    <div id="footer">
      <ul>
        <li className="title">Address</li>
        <li className="address">
          633 Courtney St&nbsp;<br/>
          Victoria, BC&nbsp;<br/>
          V8W 1B9
        </li>
      </ul>
      <ul>
        <li className="title">Hours</li>
        <li>
          Tues. - Fri.
        </li>
        <li style={{paddingTop: '10px'}}>
          Taking orders:
        </li>
        <li>
          8:30am - 11am
        </li>
        <li style={{paddingTop: '10px'}}>
          Pick up:
        </li>
        <li>
          11am - 2pm
        </li>
        <li style={{paddingTop: '10px', fontSize: '0.65rem'}}>
          (Hours adjusted
        </li>
        <li style={{paddingBottom: '10px', fontSize: '0.65rem'}}>
          due to COVID-19)
        </li>
      </ul>
      <ul>
        <li className="title">Contact</li>
        <li><a href="tel:250-388-7383">250 388 7383</a></li>
        <li>
          <a href={"mailto:" + email}>Email</a>
        </li>
      </ul>
      <ul >
        <li className="title">Social</li>
        <li>
          <a href={facebook} target="_blank" rel="noopener noreferrer" >Facebook</a>
        </li>
        <li>
          <a href={instagram} target="_blank" rel="noopener noreferrer" >Instagram</a>
        </li>
      </ul>
    </div>
  )
}

export default Footer

Footer.propTypes = {
  email: PropTypes.string,
  facebook: PropTypes.string,
  instagram: PropTypes.string,
}
