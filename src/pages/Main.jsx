// STYLES
import "@styles/Main.scss";

// COMPONENTS
import Description from "@components/Description.jsx";
import LinkShortener from "@components/LinkShortener.jsx";
import ShortenedLinks from "@components/ShortenedLinks";
import AdvancedStatistics from "@components/AdvancedStatistics";

// DEV DEPENDENCIES
import { useAtom } from "jotai";

// GLOBAL STATE
import { shortenedLinks } from "@jotai/store";

const Main = () => {
  // GLOBAL STATE
  const [linksArr, setLinksArr] = useAtom(shortenedLinks);

  return (
    <>
      <main>
        <Description />
        <section className="gray">
        <LinkShortener />
        <section className='shortened-links-section'>
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
        <AdvancedStatistics />
        </section>
      </main>
    </>
  );
};

export default Main;
