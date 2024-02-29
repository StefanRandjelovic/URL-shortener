// STYLES
import '@styles/FooterLinksSection.scss';

const FooterLinksSection = ({ id, h3, children }) => {
  return (
    <div className={`section ${id}`}>
      <h3>{h3}</h3>
      {children}
    </div>
  );
};

export default FooterLinksSection;
