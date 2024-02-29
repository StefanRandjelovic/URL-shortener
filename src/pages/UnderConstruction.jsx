// STYLES
import "@styles/UnderConstruction.scss";

// SVG
import Construction from "@images/construction.svg";

const UnderConstruction = () => {
  return (
    <>
      <main className="ucm">
        <img src={Construction} alt="WIP" />
        <h1>UnderConstruction</h1>
        <p>
          Sorry for the inconvenience, but the requested page is currently under
          construction
        </p>
      </main>
    </>
  );
};

export default UnderConstruction;
