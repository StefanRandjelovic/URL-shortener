// STYLES
import "@styles/Button.scss";

const Button = ({ classA, text }) => {
  return <button className={classA}>{text}</button>;
};

export default Button;
