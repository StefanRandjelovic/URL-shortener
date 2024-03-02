// COMPONENTS
import Button from "./Button";
import Anchor from "./Anchor";
import Logo from "./Logo";
// DEV DEPENDENCIES
import { useState } from "react";

// REACT ROUTER
import { Link } from "react-router-dom";

// STYLES
import "@styles/Nav.scss";

// SVG
import Menu from "@images/menu.svg";

const Navbar = () => {
  const navLinks = ["Features", "Pricing", "Resources"];
  const navAccount = ["Login", "Sign Up"];

  // STATE VARIABLES
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <nav>
        <div className="left-side">
          <Link to="/">
            <Logo classA={"nav1 logo"} />
          </Link>
          <div className="nav-links">
            {navLinks.map((link) => (
              <Link to="/under_construction" key={link}>
                <Anchor classA="nav link" text={link} />
              </Link>
            ))}
          </div>
        </div>
        <div className="right-side">
          <img
            onClick={() => setShowMenu(!showMenu)}
            id="menu"
            src={Menu}
            alt="Menu"
          />
          
          <Link to="/under_construction">
            <Anchor classA={"nav link"} text={navAccount[0]} />
          </Link>

          <Link to="/under_construction">
            <Button classA={"button pill"} text={navAccount[1]} />
          </Link>
        </div>
        {showMenu && (
            <div className="menu-modal">
              {navLinks.map((link) => (
                <Link to="/under_construction" key={link}>
                  <Anchor classA="nav link menu" text={link} />
                </Link>
              ))}
              <hr />
              <Link to="/under_construction">
                <Anchor classA={"nav link menu"} text={navAccount[0]} />
              </Link>

              <Link id='modal-button' to="/under_construction">
                <Button classA={"button pill menu"} text={navAccount[1]} />
              </Link>
            </div>
          )}
      </nav>
    </>
  );
};

export default Navbar;
