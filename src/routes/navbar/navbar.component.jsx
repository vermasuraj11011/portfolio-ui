import React, {Fragment, useContext, useState} from "react";
import logo from "../../assets/suraj-logo.png";
import "./navbar.styles.scss";
import {Outlet, useLocation, useNavigate} from "react-router-dom";
import {scroller} from "react-scroll";
import {UserContext} from "../../context/user.context";

const NAV_LINKS = ["home", "about", "project", "experience", "contact"];

const Navbar = () => {
  const {currentUser} = useContext(UserContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleHomeClick = (elementName) => {
    setMenuOpen(false);
    if (location.pathname === "/") {
      scrollToElement(elementName);
    } else {
      navigate("/");
      setTimeout(() => {
        scrollToElement(elementName);
      }, 50);
    }
  };

  const scrollToElement = (element) => {
    const scrollDurationPerPx = 0.5;
    const currentScrollPosition = window.pageYOffset;
    const targetScrollPosition = document.getElementById(element).offsetTop;
    const distance = Math.abs(targetScrollPosition - currentScrollPosition);
    const duration = distance * scrollDurationPerPx;

    scroller.scrollTo(element, {
      duration: duration,
      smooth: true,
    });
  };

  // When signed in, only the Home link is shown (matches previous behaviour)
  const visibleLinks = currentUser ? ["home"] : NAV_LINKS;

  return (
    <Fragment>
      <div className="nav-container">
        <div className="nav-flex">
          <div className="nav-logo" onClick={() => handleHomeClick("home")}>
            <img src={logo} alt="Suraj Verma logo"/>
          </div>

          <button
            className={`nav-toggle ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <div className={`nav-links-container ${menuOpen ? "open" : ""}`}>
            {visibleLinks.map((link) => (
              <div
                key={link}
                className="nav-link"
                onClick={() => handleHomeClick(link)}
              >
                {link}
              </div>
            ))}
          </div>
        </div>
      </div>
      <Outlet/>
    </Fragment>
  );
};

export default Navbar;
