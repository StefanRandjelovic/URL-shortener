// COMPONENTS
import Description from "@components/Description.jsx";
import LinkShortener from "@components/LinkShortener.jsx";
import ShortenedLinks from "@components/ShortenedLinks";
// DEV DEPENDENCIES
import { useAtomValue } from "jotai";

// GLOBAL STATE
import { shortenedLinks } from "@jotai/store";

const Main = () => {
  // GLOBAL STATE
  const linksArr = useAtomValue(shortenedLinks);
  console.log(linksArr);

  

  return (
    <>
      <main>
        <Description />
        <LinkShortener />
        
          {linksArr.length > 0 &&
            linksArr.map((links) => (
              <ShortenedLinks
                key={crypto.randomUUID()}
                longURL={links.long}
                shortURL={links.short}
              />
            ))}
        
      </main>
    </>
  );
};

export default Main;
