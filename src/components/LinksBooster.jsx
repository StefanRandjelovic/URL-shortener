// DEV DEPENDENCIES
import { Link } from "react-router-dom";

// COMPONENTS
import Button from "@components/Button.jsx";

// STYLES
import "@styles/LinksBooster.scss";

const LinksBooster = () => {
  return (
    <div className="links-booster">
      <h1>Boost your links today</h1>
      <Link to="/under_construction">
        <Button classA="button pill" text="Get Started" />
      </Link>
    </div>
  );
};

export default LinksBooster;
