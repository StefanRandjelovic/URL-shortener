// SVG
import LogoImg from "@images/logo.svg";

// STYLES
import "@styles/Logo.scss";

const Logo = ({ classA }) => {
  return <img className={classA} src={LogoImg} />;
};

export default Logo;
