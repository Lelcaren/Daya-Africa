import PropTypes from "prop-types";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./frame-component1.css";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <section className={`rectangle-parent3 ${className}`}>
      <div className="frame-child5" />
      <div className="frame-container">
        <div className="frame-parent1">
          <div className="home-parent">
            {/* Update Home link */}
            <Link to="/" className="home2">Home</Link>
            {/* Update Digital Ambassadors link */}
            <Link to="/digital-ambassadors" className="home2">Digital Ambassadors</Link>
            {/* Update About Us link */}
            <Link to="/about-us" className="about-us3">About Us</Link>
            <div className="blog-wrapper">
              {/* Blog is now just plain text, no link */}
              <span className="blog3">Blog</span>
            </div>
          </div>
          <div className="frame-wrapper1">
            <div className="frame-parent2">
              <div className="the-story-of-daya-in-africa-wrapper">
                <h1 className="the-story-of">The story of Daya in Africa</h1>
              </div>
              <div className="frame-parent3">
                <div className="divider-container">
                  <img
                    className="divider-icon3"
                    loading="lazy"
                    alt="Divider Icon"
                    src="/divider.svg"
                  />
                </div>
                <h2 className="we-are-transforming">
                  We are transforming the way you transact while giving you
                  rewards, fun and data protection.
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="help-wrapper">
          {/* Update Help link */}
          <Link to="/help" className="blog3">Help</Link>
        </div>
      </div>
      <header className="daya-main-logo-parent">
        <img
          className="daya-main-logo2"
          loading="lazy"
          alt="Daya Main Logo"
          src="/daya-main-logo@2x.png"
        />
        <button className="cta7">
          <div className="cta-child5" />
          {/* Update Sign Up button */}
          <Link to="/sign-up" className="sign-up5">Sign up</Link>
        </button>
        <div className="vector-group">
          <img
            className="vector-icon2"
            loading="lazy"
            alt="Vector Icon"
            src="/vector.svg"
          />
          <div className="frame-child6" />
        </div>
      </header>
    </section>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;

