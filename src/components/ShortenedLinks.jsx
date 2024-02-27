// HELPER FUNCTIONS
import { handleCopy } from "@helpers/helpers.js";

// STYLES
import "@styles/ShortenedLinks.scss";

// COMPONENTS
import Button from "./Button";

const ShortenedLinks = ({ longURL, shortURL, linksArr, setLinksArr }) => {
  // INSTANCE DELETING FUNCTION
  const handleDelete = (event) => {
    event.stopPropagation();
    const x = Object.values(linksArr.map((links) => links.long)).indexOf(
      event.target.parentElement.querySelector(".longURL").innerHTML
    );
    linksArr.splice(x, 1);
    setLinksArr([...linksArr]);
  };

  return (
    <div className="shortened-links" onClick={handleCopy}>
      <div className="leftSide">
        <p onClick={handleDelete} className="close" title="Delete this entry">
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
