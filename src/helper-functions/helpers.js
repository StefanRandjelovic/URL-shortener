// DEV DEPENDENCIES
import axios from "axios";

// FETCHING FUNCTION
const handleFetch = async (url) => {
  const apiUrl = "https://is.gd/create.php?format=simple&url=";
  const { data } = await axios.get(`${apiUrl}${url}`);
  return data;
};

// SHORTENED LINK COPYING FUNCTION
const handleCopy = async (event) => {
  console.log(event.target.parentElement.querySelector("button").classList);
  if (
    event.target.className == "shortURL" ||
    event.target.tagName == "BUTTON"
  ) {
    navigator.clipboard.writeText(
      event.target.parentElement.querySelector(".shortURL").innerHTML
    );
    event.target.parentElement.querySelector("button").innerHTML = "copied";
    event.target.parentElement
      .querySelector("button")
      .classList.toggle("copied");
    setTimeout(() => {
      event.target.parentElement.querySelector("button").innerHTML = "copy";
      event.target.parentElement
        .querySelector("button")
        .classList.remove("copied");
    }, 4000);
  }
};

export { handleFetch, handleCopy };
