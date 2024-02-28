// DEV DEPENDENCIES
import axios from "axios";

// FETCHING FUNCTION - LinkShortener.jsx
const api = axios.create({
  baseURL: "https://is.gd/create.php?format=simple&url=",
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.log(error.message);
    return Promise.reject(error.message);
  }
);

const handleFetch = async (url) => {
  try {
    const Api = "https://is.gd/create.php?format=simple&url=";
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

// INSTANCE DELETING FUNCTION - LinkShortener.jsx
const handleDelete = (event, linksArr, setLinksArr) => {
  event.stopPropagation();
  const x = Object.values(linksArr.map((links) => links.long)).indexOf(
    event.target.parentElement.querySelector(".longURL").innerHTML
  );
  linksArr.splice(x, 1);
  setLinksArr([...linksArr]);
};

// HANDLE SUBMIT - LinkShortener.jsx
const handleSubmit = (
  event,
  linksArr,
  setQueryURL,
  setError,
  setErrorMessage
) => {
  event.preventDefault();
  const badLinkReg =
    /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()!@:%_\+.~#?&\/\/=]*)/;
  if (!badLinkReg.test(event.target.linkShort.value)) {
    setError(true);
    setErrorMessage(
      "Enter a valid link, a valid link shoud start with http or https"
    );
    return;
  }
  if (event.target.linkShort.value == "") {
    setError(true);
    setErrorMessage("Please add a link");
    return;
  }
  if (
    Object.values(linksArr.map((links) => links.long)).includes(
      event.target.linkShort.value
    )
  ) {
    setError(true);
    setErrorMessage("You have already entered that link");
    return;
  }
  setQueryURL(event.target.linkShort.value);
};

export { handleFetch, handleCopy, handleDelete, handleSubmit };
