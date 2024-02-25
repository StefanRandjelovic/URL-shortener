// HELPER FUNCTIONS
import { handleCopy } from "@helpers/helpers.js";

const ShortenedLinks = ({ longURL, shortURL }) => {
  return (
    <div onClick={handleCopy}>
      <p className="longURL">{longURL}</p>
      <div className="rightSide">
        <p className="shortURL">{shortURL}</p>
        <button>copy</button>
      </div>
    </div>
  );
};

export default ShortenedLinks;
