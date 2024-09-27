import { useMemo } from "react";
import PropTypes from "prop-types";
import "./final.css";

const Final = ({
  className = "",
  aboutAlignSelf,
  aboutFlex,
  dayaLogoLight,
}) => {
  const finalStyle = useMemo(() => {
    return {
      alignSelf: aboutAlignSelf,
      flex: aboutFlex,
    };
  }, [aboutAlignSelf, aboutFlex]);

  return (
    <footer className={`final ${className}`} style={finalStyle}>
      <div className="final-child" />
      <div className="frame-parent4">
        <div className="frame-wrapper2">
          <div className="frame-parent5">
            <div className="daya-logo-light-wrapper">
              <img
                className="daya-logo-light"
                loading="lazy"
                alt=""
                src={dayaLogoLight}
              />
            </div>
            <div className="lorem-ipsum-dolor-si-parent">
              <div className="lorem-ipsum-dolor">
                Connecting Africa through travel, fun, and finance!
              </div>
              <div className="lorem-ipsum-dolor1">
                Subscribe to our newsletter to find out more.
              </div>
            </div>
            <button className="cta8">
              <div className="cta-child6" />
              <div className="subscribe">Subscribe</div>
            </button>
          </div>
        </div>
        <div className="copyright-2020">Copyright © 2024</div>
      </div>
      <div className="services-wrapper">
        <div className="services">
          <div className="digital-ambassadors4">
            Digital Ambassadors Program.
          </div>
          <div className="community">Join our Community.</div>
          <div className="about-careers">
            <div className="community">About us</div>
            <div className="careers">Careers</div>
          </div>
        </div>
      </div>
      <div className="follow-us-parent">
        <div className="follow-us">Follow Us</div>
        <div className="frame-parent6">
          <div className="frame-parent7">
            <div className="facebook-wrapper">
              <img
                className="facebook-icon"
                loading="lazy"
                alt=""
                src="/001facebook.svg"
              />
            </div>
            <img
              className="twitter-icon"
              loading="lazy"
              alt=""
              src="/003twitter.svg"
            />
            <div className="instagram-wrapper">
              <img
                className="instagram-icon"
                loading="lazy"
                alt=""
                src="/004instagram@2x.png"
              />
            </div>
          </div>
          <div className="social-names-wrapper">
            <div className="social-names">
              <div className="facebook">Facebook</div>
              <div className="twitter">Twitter</div>
              <div className="facebook">Instagram</div>
            </div>
          </div>
        </div>
      </div>
      <div className="about-links-wrapper">
        <div className="about-links1">
          <div className="lorem-ipsum-dolor-si-parent">
            <div className="about">Need a hand? Connect with us!</div>
            <div className="our-story1">
              <p className="email-supportdayaafrica">
                {`Email: `}
                <a
                  className="supportdayaafrica"
                  href="mailto:support@daya.africa"
                  target="_blank"
                >
                  <span className="supportdayaafrica1">
                    support@daya.africa
                  </span>
                </a>
              </p>
              <p className="email-supportdayaafrica">
                Phone: +[Your Contact Number]
              </p>
            </div>
          </div>
          <div className="legal-links">
            <div className="terms-conditions">{`Terms & Conditions`}</div>
            <div className="privacy-policy">Privacy Policy</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

Final.propTypes = {
  className: PropTypes.string,
  dayaLogoLight: PropTypes.string,

  /** Style props */
  aboutAlignSelf: PropTypes.any,
  aboutFlex: PropTypes.any,
};

export default Final;
