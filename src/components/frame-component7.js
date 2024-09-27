import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./frame-component7.css";

const FrameComponent7 = ({ className = "" }) => {
  return (
    <header className={`rectangle-group ${className}`}>
      <div className="frame-item" />
      <img
        className="daya-main-logo"
        loading="lazy"
        alt="Daya Africa Logo"
        src="/daya-main-logo@2x.png"
      />
      <nav className="navigation">
        <nav className="ambassadors">
          {/* Home Link */}
          <Link className="home" to="/">Home</Link>
          
          {/* Digital Ambassadors Link */}
          <Link className="home" to="/digital-ambassadors">Digital Ambassadors</Link>
          
          <div className="about-blog">
            <div className="blog">
              {/* About Us Link */}
              <Link className="about-us1" to="/about-us">About Us</Link>
              
              {/* Blog as static text, not a link */}
              <span className="blog1">Blog</span>
            </div>
          </div>
        </nav>
      </nav>
      <div className="hero">
        <div className="hero-content">
          <div className="hero-top">
            <div className="hero-shapes">
              <img
                className="vector-icon"
                loading="lazy"
                alt="Vector Icon"
                src="/vector.svg"
              />
              <div className="hero-background" />
            </div>
          </div>
          <div className="help">
            {/* Help Link */}
            <Link className="help1" to="/help">Help</Link>
          </div>
          <button className="cta1">
            <div className="cta-item" />
            {/* Sign Up Link */}
            <Link className="sign-up1" to="/sign-up">Sign up</Link>
          </button>
        </div>
      </div>
    </header>
  );
};

FrameComponent7.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent7;
