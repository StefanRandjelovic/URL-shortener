// HELPER FUNCTIONS
import { handleCopy, handleDelete } from "@helpers/helpers.js";

// STYLES
import "@styles/ShortenedLinks.scss";

// COMPONENTS
import Button from "./Button";

const ShortenedLinks = ({ longURL, shortURL, linksArr, setLinksArr }) => {
  return (
    <div className="shortened-links" onClick={handleCopy}>
      <div className="leftSide">
        <p
          onClick={() => handleDelete(event, linksArr, setLinksArr)}
          className="close"
          title="Delete this entry"
        >
          +
        </p>
        <p className="longURL">{longURL}</p>
      </div>
      <div className="rightSide">
        <p className="shortURL">{shortURL}</p>
        <Button classA={"button square"} text="copy" />
      </div>
    </div>
  );
};

export default ShortenedLinks;
