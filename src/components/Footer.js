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
        <li style={{ paddingTop: "1rem", paddingBottom: "1rem" }}>
          Taking orders the night before or on the day.
        </li>
        <li className="title">Pick up times</li>
        <li>
          <ul>
            <li><b>Mon.</b> Closed</li>
            <li><b>Tue.</b> Closed</li>
            <li><b>Wed.</b> 11:00pm - 2:00pm</li>
            <li><b>Thu.</b> 11:00pm - 2:00pm</li>
            <li><b>Fri.</b> 11:00pm - 2:00pm</li>
            <li><b>Sat.</b> 11:00pm - 2:00pm</li>
            <li><b>Sun.</b> Closed</li>
          </ul>
        </li>
      </ul>
      <ul>
        <li className="title">Contact</li>
        <li><a href="tel:250-388-7383">250 388 7383</a></li>
        <li>
          <a href={"mailto:" + email}>Email</a>
        </li>
        <li className="title" style={{paddingTop: "12px"}}>Menu</li>
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
