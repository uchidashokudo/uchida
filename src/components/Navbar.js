import React from "react";
import { Link } from "gatsby";
import logo from "../img/uchida_logo_2.png";

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

  // <p>
  //   👋&nbsp;&nbsp;Uchida Eatery is accepting ONLINE TAKE-OUT orders! Open Wednesday - Saturday. Pick up between 11:30am - 2:30pm.
  // </p>
  render() {
    return (
      <div>
        <div id="mainLogo" className="container center">
          <div class="notice">
            <p>
              👋&nbsp;&nbsp;Uchida Eatery is accepting ONLINE TAKE-OUT orders!
            </p>
            <br />
            <p>December 29, 30, 31: Pick up between 4:00pm - 6:00pm</p>
            <br />
            <p>
              <a href="https://uchida-eatery.square.site/" target="_blank">
                Check out our new menu here.
              </a>
              &nbsp;&nbsp;🎉
            </p>
            <br />
            <p style={{ fontSize: "0.9rem", fontStyle: "italic" }}>
              We aren't able to accept phone-orders and dining-in is not
              available at this time. We apologize for the inconvenience and
              appreciate the understanding.
            </p>
          </div>
          <div class="notice warn">
            <p>
              Uchida Eatery will be closed between January 1st - 11th. Have a
              happy new year and thank you for the continued support!
            </p>
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
