// COMPONENTS
import Button from "./Button";
import Anchor from "./Anchor";
import Logo from "./Logo";

// REACT ROUTER
import { Link } from "react-router-dom";

// STYLES
import "@styles/Nav.scss";

const Navbar = () => {
  const navLinks = ["Features", "Pricing", "Resources"];
  const navAccount = ["Login", "Sign Up"];

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
          <Link to="/under_construction">
            <Anchor classA={"nav link"} text={navAccount[0]} />
          </Link>

          <Link to="/under_construction">
            <Button classA={"button pill"} text={navAccount[1]} />
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
