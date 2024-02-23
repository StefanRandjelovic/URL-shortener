// COMPONENTS
import Button from "./Button.jsx";

// SVG
import Illustration from "@images/illustration-working.svg";

// STYLES
import "@styles/Description.scss";

const Description = () => {
  return (
    <section className="description">
      <div className="dsc-left-side">
        <div className="dsc-left-side-text">
          <h1>More than just shorter links</h1>
          <p>
            Build your brand’s recognition and get detailed insights on how your
            links are performing.
          </p>
        </div>
        <Button classA={"button pill"} text="Get Started" />
      </div>
      <div className="dsc-right-side">
        <img src={Illustration} alt="Illustration" />
      </div>
    </section>
  );
};

export default Description;
