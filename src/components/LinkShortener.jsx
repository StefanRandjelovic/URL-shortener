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

  console.log(data);
  console.log(linksArr);

  return (
    <section className="shortener-sec">
      <form
        className="shortener"
        onSubmit={(event) => {
          event.preventDefault();
          setQueryURL(event.target.linkShort.value);
        }}
      >
        <input
          type="text"
          name="linkShort"
          placeholder="Shorten a link here..."
        />
        <Button classA={"button square"} text="Shorten It!" />
      </form>
      {<p id="error">Error</p>}
    </section>
  );
};

export default LinkShortener;
