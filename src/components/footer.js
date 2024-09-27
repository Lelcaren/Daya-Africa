import Final from "./final";
import PropTypes from "prop-types";
import "./footer.css";

const Footer = ({ className = "" }) => {
  return (
    <div className={`footer ${className}`}>
      <Final
        aboutAlignSelf="unset"
        aboutFlex="1"
        dayaLogoLight="/daya-logo-light@2x.png"
      />
    </div>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
