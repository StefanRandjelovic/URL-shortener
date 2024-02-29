// COMPONENTS
import Button from "./Button";

// HELPER FUNCTIONS
import { handleFetch, handleSubmit } from "@helpers/helpers.js";

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
    if (data && data.startsWith("Request failed")) {
      setError(true);
      setErrorMessage("Enter a valid link");
      return;
    }
    if (data && linksArr == []) {
      setLinksArr([{ short: data, long: queryURL }]);
    } else if (data && linksArr != []) {
      setLinksArr([...linksArr, { short: data, long: queryURL }]);
    }
  }, [data]);

  return (
    <section className="shortener-sec" id="sc">
      <form
        className="shortener"
        onSubmit={() =>
          handleSubmit(event, linksArr, setQueryURL, setError, setErrorMessage)
        }
      >
        <input
          onDoubleClick={(event) => {
            event.stopPropagation();
            event.target.value = "";
            setError(false);
          }}
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
