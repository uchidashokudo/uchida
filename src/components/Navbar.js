import React from "react";
import { Link } from "gatsby";
import logo from "../img/uchida_logo_2.png";
import { HTMLContent } from '../components/Content'

const Navbar = class extends React.Component {
  componentDidMount() {
    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(
      document.querySelectorAll(".navbar-burger"),
      0
    );
    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
      // Add a click event on each of them
      $navbarBurgers.forEach(el => {
        el.addEventListener("click", () => {
          // Get the target from the "data-target" attribute
          const target = el.dataset.target;
          const $target = document.getElementById(target);

          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle("is-active");
          $target.classList.toggle("is-active");
        });
      });
    }
  }


  render() {
    return (
      <div>
        <div id="mainLogo" className="container center">
          {/* <div class="notice warn" >
            👋&nbsp;&nbsp;Uchida Eatery will be closed August 31st (Wed.) and September 1st (Thu.).<br/>We apologize for the inconvenience and we look forward to seeing you soon.<br/>Thank you for the continued support.
          </div> */}
          <div className={"notice " + this.props.data.frontmatter.description}>
            <HTMLContent className="content" content={this.props.data.html} />
          </div>
          <Link to="/" title="Home">
            <img src={logo} alt="Uchida" />
          </Link>
        </div>
        <nav
          className="navbar is-transparent"
          role="navigation"
          aria-label="main-navigation"
        >
          <div className="container">
            <div className="navbar-brand">
              {/* Hamburger menu */}
              <div className="navbar-burger burger" data-target="navMenu">
                <span />
                <span />
                <span />
              </div>
            </div>
            <div id="navMenu" className="navbar-menu">
              <div className="navbar-start has-text-centered">
                <Link className="navbar-item" to="/about">
                  About
                </Link>
                <a
                  className="navbar-item"
                  href="https://uchida-eatery.square.site/"
                >
                  Menu
                </a>
                <Link className="navbar-item" to="/contact">
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
};

export default Navbar;
