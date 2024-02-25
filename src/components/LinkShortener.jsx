// COMPONENTS
import Button from "./Button";

// STYLES
import "@styles/LinkShortener.scss";

// DEV DEPENDENCIES
import { useAtom } from "jotai";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";

// GLOBAL STATE
import { shortenedLinks } from "@jotai/store.js";

const LinkShortener = () => {
  // GLOBAL STATE
  const [linksArr, setLinksArr] = useAtom(shortenedLinks);

  // STATE VARIABLES
  const [queryURL, setQueryURL] = useState("");

  // FETCHING FUNCTION
  const handleFetch = async (url) => {
    const apiUrl = "https://is.gd/create.php?format=simple&url=";
    const { data } = await axios.get(`${apiUrl}${url}`);
    return data;
  };

  // FETCH RESPONSE HANDLER
  const { data, refetch, isRefetching, isError } = useQuery({
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

  isRefetching && console.log(isRefetching, isError);
  data && console.log(data);

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
