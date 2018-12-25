import React from 'react'
import { Link } from 'gatsby'

const Footer = class extends React.Component {
 render() {
    return <div id="footer">
      <ul>
        <li className="title">Address</li>
        <li className="address">
          633 Courtney St&nbsp;<br/>
          Victoria, BC&nbsp;<br/>
          V8W 1C1
        </li>
      </ul>
      <ul>
        <li className="title">Hours</li>
        <li>
          Mon. - Fri.
        </li>
        <li>
          11am - 2pm
        </li>
      </ul>
      <ul>
        <li className="title">Contact</li>
        <li>
          Email
        </li>
        <li>
          Facebook
        </li>
      </ul>
      <ul >
        <li className="title">Social</li>
        <li>
          Facebook
        </li>
        <li>
          Instagram
        </li>
      </ul>
    </div>;
  }
}

export default Footer
