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
        onSubmit={(event) => {
          event.preventDefault();
          if (event.target.linkShort.value == "") {
            setError(true);
          }
          setQueryURL(event.target.linkShort.value);
        }}
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
      {error && <p id="error">Please add a link</p>}
    </section>
  );
};

export default LinkShortener;
