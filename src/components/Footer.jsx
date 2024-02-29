// HELPERS
import { footerLinks, footerSocialMedia } from "@helpers/array-info.js";

// DEV DEPENDENCIES
import { Link } from "react-router-dom";

// COMPONENTS
import Logo from "@components/Logo.jsx";
import FooterLinksSection from "@components/FooterLinksSection.jsx";

// STYLES
import "@styles/Footer.scss";

const Footer = () => {
  return (
    <footer>
      <div className="left-logo">
        <Logo classA="footer-logo" />
      </div>
      <div className="middle-links">
        {footerLinks.map((section) => (
          <FooterLinksSection
            key={crypto.randomUUID()}
            id={section.id}
            h3={section.h3}
          >
            {section.LinkS && <a href="/#sc">{section.LinkS}</a>}
            {section.LinksB && (
              <Link to="/under_construction">{section.LinksB}</Link>
            )}
            {section.Analytics && (
              <Link to="/under_construction">{section.Analytics}</Link>
            )}
            {section.Blog && (
              <Link to="/under_construction">{section.Blog}</Link>
            )}
            {section.Developers && (
              <Link to="/under_construction">{section.Developers}</Link>
            )}
            {section.Support && (
              <Link to="/under_construction">{section.Support}</Link>
            )}
            {section.About && (
              <Link to="/under_construction">{section.About}</Link>
            )}
            {section.Team && (
              <Link to="/under_construction">{section.Team}</Link>
            )}
            {section.Careers && (
              <Link to="/under_construction">{section.Careers}</Link>
            )}
            {section.Contact && (
              <Link to="/under_construction">{section.Contact}</Link>
            )}
          </FooterLinksSection>
        ))}
      </div>
      <div className="right-social-media">
        {footerSocialMedia.map((img_src) => (
          <a key={crypto.randomUUID()} href={img_src.link} target="_blank">
            <img src={img_src.img} />
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
