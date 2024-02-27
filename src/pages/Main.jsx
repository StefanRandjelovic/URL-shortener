// COMPONENTS
import Description from "@components/Description.jsx";
import LinkShortener from "@components/LinkShortener.jsx";
import ShortenedLinks from "@components/ShortenedLinks";

// DEV DEPENDENCIES
import { useAtom } from "jotai";

// GLOBAL STATE
import { shortenedLinks } from "@jotai/store";

// HELPER FUNCTIONS
import { sectionStyles } from "@helpers/helpers";

const Main = () => {
  // GLOBAL STATE
  const [linksArr, setLinksArr] = useAtom(shortenedLinks);

  return (
    <>
      <main>
        <Description />
        <LinkShortener />
        <section style={sectionStyles}>
          {linksArr.length > 0 &&
            linksArr.map((links) => (
              <ShortenedLinks
                setLinksArr={setLinksArr}
                linksArr={linksArr}
                key={crypto.randomUUID()}
                longURL={links.long}
                shortURL={links.short}
              />
            ))}
        </section>
      </main>
    </>
  );
};

export default Main;
