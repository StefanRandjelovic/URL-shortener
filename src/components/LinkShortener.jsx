// COMPONENTS
import Button from "./Button";

// HELPER FUNCTIONS
import { handleFetch } from "@helpers/helpers.js";

// STYLES
import "@styles/LinkShortener.scss";

// DEV DEPENDENCIES
import { useAtom } from "jotai";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

// GLOBAL STATE
import { shortenedLinks } from "@jotai/store.js";

const LinkShortener = () => {
  // GLOBAL STATE
  const [linksArr, setLinksArr] = useAtom(shortenedLinks);

  // STATE VARIABLES
  const [queryURL, setQueryURL] = useState("");
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // HANDLE SUBMIT
  const handleSubmit = (event, arr) => {
    event.preventDefault();
    console.log(event.target.linkShort.value);
    if (event.target.linkShort.value == "") {
      setError(true);
      setErrorMessage("Please add a link");
      return;
    } else if (
      arr.includes(event.target.linkShort.value)
      )
     {
      console.log(
        arr.includes(event.target.linkShort.value)
        )
      ;
      setError(true);
      setErrorMessage("You have already shortened that link");
      return;
    }
    setQueryURL(event.target.linkShort.value);
  };

  linksArr.map((links) => console.log(links.long));

  // FETCH RESPONSE HANDLER
  const { data, refetch, isRefetching, isError, isLoading } = useQuery({
    queryKey: ["shortURL"],
    queryFn: () => handleFetch(queryURL),
    enabled: false,
  });

  useEffect(() => {
    if (queryURL === "") {
      return;
    }
    refetch();
  }, [queryURL]);

  useEffect(() => {
    if (data && linksArr == []) {
      setLinksArr([{ short: data, long: queryURL }]);
    } else if (data && linksArr != []) {
      setLinksArr([...linksArr, { short: data, long: queryURL }]);
    }
  }, [data]);

  return (
    <section className="shortener-sec">
      <form
        className="shortener"
        onSubmit={() => handleSubmit(event, linksArr)}
      >
        <input
          onClick={() => setError(false)}
          type="text"
          name="linkShort"
          placeholder="Shorten a link here..."
          style={error ? { border: "1px solid red" } : null}
        />
        <Button classA={"button square"} text="Shorten It!" />
      </form>
      {error && <p id="error">{errorMessage}</p>}
    </section>
  );
};

export default LinkShortener;
