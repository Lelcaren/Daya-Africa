import Final from "./final";
import PropTypes from "prop-types";
import "./frame-component6.css";

const FrameComponent6 = ({ className = "" }) => {
  return (
    <section className={`frame-section ${className}`}>
      <div className="frame-child4" />
      <div className="final-c-t-a-content">
        <div className="final-c-t-adetails">
          <div className="final-c-t-a-message-wrapper">
            <div className="final-c-t-a-message">
              <h1 className="join-the-daya1">
                Join the Daya Squad today! Make a difference and earn big
                rewards.
              </h1>
              <div className="get-trained-image-wrapper">
                <button className="cta6">
                  <div className="cta-child4" />
                  <div className="get-started1">Get Started</div>
                </button>
              </div>
            </div>
          </div>
          <img
            className="join-today-image"
            loading="lazy"
            alt=""
            src="/6@2x.png"
          />
        </div>
      </div>
      <Final
        aboutAlignSelf="stretch"
        aboutFlex="unset"
        dayaLogoLight="/daya-logo-light@2x.png"
      />
    </section>
  );
};

FrameComponent6.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent6;
