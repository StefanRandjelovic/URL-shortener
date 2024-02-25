// HELPER FUNCTIONS
import { handleCopy } from "@helpers/helpers.js";

// STYLES
import "@styles/ShortenedLinks.scss";

// COMPONENTS
import Button from "./Button";

const ShortenedLinks = ({ longURL, shortURL }) => {
  return (
    <div className="shortened-links" onClick={handleCopy}>
      <p className="longURL">{longURL}</p>
      <div className="rightSide">
        <p className="shortURL">{shortURL}</p>
        <Button classA={'button square'} text='copy'/>
      </div>
    </div>
  );
};

export default ShortenedLinks;
