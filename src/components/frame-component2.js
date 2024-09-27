import PropTypes from "prop-types";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./frame-component2.css";

const FrameComponent2 = ({ className = "" }) => {
  return (
    <section className={`digital-ambassadors-inner ${className}`}>
      <div className="image-parent">
        <div className="image1">
          <button className="cta4">
            <div className="cta-child2" />
            <div className="sign-up2">Sign up</div>
          </button>
          <div className="map-parent">
            <img
              className="map-icon2"
              loading="lazy"
              alt="Map Icon"
              src="/map@2x.png"
            />
            <img className="people-icon" alt="People Icon" src="/people@2x.png" />
          </div>
        </div>
        <div className="rectangle-parent1">
          <div className="frame-child1" />
          <div className="about-columns-parent">
            <div className="about-columns">
              <div className="about-links">
                <div className="links-column">
                  {/* Update Home link */}
                  <Link to="/" className="home1">Home</Link>
                </div>
                <div className="links-column">
                  {/* Update Digital Ambassadors link */}
                  <Link to="/digital-ambassadors" className="home1">Digital Ambassadors</Link>
                </div>
                {/* Update About Us link */}
                <Link to="/about-us" className="about-us2">About Us</Link>
                {/* Remove Blog as a link if needed */}
                <span className="blog2">Blog</span>
              </div>
              <div className="description-content-wrapper">
                <div className="description-content">
                  <h1 className="join-the-daya">
                    Join the Daya Squad and Make a Difference.
                  </h1>
                  <div className="blog-link-wrapper">
                    <div className="home-dropdown-items">
                      <div className="home-dropdown-item1">
                        <img
                          className="divider-icon2"
                          loading="lazy"
                          alt="Divider Icon"
                          src="/divider.svg"
                        />
                      </div>
                      <h2 className="earn-cool-cash">
                        Earn cool cash while helping your community.
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="vector-parent">
              <img
                className="vector-icon1"
                loading="lazy"
                alt="Vector Icon"
                src="/vector.svg"
              />
              <div className="frame-child2" />
            </div>
            {/* Update Help link */}
            <Link to="/help" className="help2">Help</Link>
          </div>
          <header className="country-help-signup">
            <button className="cta5">
              <div className="cta-child3" />
              {/* Update Sign Up button */}
              <Link to="/sign-up" className="sign-up3">Sign up</Link>
            </button>
            <img
              className="daya-main-logo1"
              loading="lazy"
              alt="Daya Main Logo"
              src="/daya-main-logo@2x.png"
            />
          </header>
        </div>
      </div>
    </section>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2;
