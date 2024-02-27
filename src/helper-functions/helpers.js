// DEV DEPENDENCIES
import axios from "axios";

// FETCHING FUNCTION - LinkShortener.jsx
const api = axios.create({
  baseURL: "https://is.gd/create.php?format=simple&url=",
});

api.interceptors.response.use(
  response => response,
  error => {
    console.log(error.message)
    return Promise.reject(error.message)
  }
)

const handleFetch = async (url) => {
  try {
    const Api = "https://is.gd/create.php?format=simple&url="
    const { data } = await api.get(`${Api}${url}`);
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

// SHORTENED LINK COPYING FUNCTION - ShortenedLinks.jsx
const handleCopy = async (event) => {
  if (
    event.target.className == "shortURL" ||
    event.target.tagName == "BUTTON"
  ) {
    navigator.clipboard.writeText(
      event.target.parentElement.querySelector(".shortURL").innerHTML
    );
    event.target.parentElement.querySelector("button").innerHTML = "copied!";
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

// SECTION STYLES - Main.jsx
const sectionStyles = {
  display: "flex",
  flexDirection: "column",
  maxWidth: "1440px",
  margin: "0 auto",
};

export { handleFetch, handleCopy, sectionStyles };
