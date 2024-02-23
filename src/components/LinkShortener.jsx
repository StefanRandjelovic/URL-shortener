// COMPONENTS
import Button from "./Button";

// STYLES
import "@styles/LinkShortener.scss";

// DEV DEPENDENCIES
import { useAtom } from "jotai";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect } from "react";

// GLOBAL STATE
import { shortenedLinks } from "@jotai/store.js";

const LinkShortener = () => {
  // GLOBAL STATE
  const [linksArr, setLinksArr] = useAtom(shortenedLinks);

  const apiUrl = "https://cleanuri.com/api/v1/shorten";

  const handleSubmit = async (event) => {
    const data = await axios.post(apiUrl, {
      url: "https://www.youtube.com/",
    });
    return data;
  };

  //   const axios = require('axios');

  // const encodedParams = new URLSearchParams();
  // encodedParams.set('clientId', 'https://www.phind.com/search?home=true');

  // const options = {
  //   method: 'POST',
  //   url: 'https://bitlymikilior1v1.p.rapidapi.com/getAppInfo',
  //   headers: {
  //     'content-type': 'application/x-www-form-urlencoded',
  //     'X-RapidAPI-Key': '97b5157d24msh67f49a2c234b43cp10709djsne4262cd31341',
  //     'X-RapidAPI-Host': 'Bitlymikilior1V1.p.rapidapi.com'
  //   },
  //   data: encodedParams,
  // };

  // try {
  // 	const response = await axios.request(options);
  // 	console.log(response.data);
  // } catch (error) {
  // 	console.error(error);
  // }

  const { data } = useQuery({
    queryKey: ["shortenedURL"],
    queryFn: handleSubmit,
  });

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <section className="shortener-sec">
      <form className="shortener" onSubmit={handleSubmit}>
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
