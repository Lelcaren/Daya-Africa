import PropTypes from "prop-types";
import "./frame-component5.css";

const FrameComponent5 = ({ className = "" }) => {
  return (
    <section className={`tech-savvy-content-wrapper ${className}`}>
      <div className="tech-savvy-content">
        <div className="how-to-get-started-wrapper">
          <h1 className="how-to-get">How to get started?</h1>
        </div>
        <div className="signup-train-earn">
          <div className="join-squad-button-wrapper">
            <div className="step-one">
              <img
                className="step-one-image"
                loading="lazy"
                alt=""
                src="/3@2x.png"
              />
              <div className="what-you-will-do-items-wrapper">
                <div className="what-you-will-do-items">
                  <div className="nav-links">
                    <h1 className="sign-up4">Sign Up</h1>
                  </div>
                  <h2 className="join-the-squad">
                    Join the squad in a few clicks
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className="step-two">
            <div className="step-two-details-wrapper">
              <div className="step-two-details">
                <div className="step-two-description-wrapper">
                  <img
                    className="step-two-description"
                    loading="lazy"
                    alt=""
                    src="/4@2x.png"
                  />
                </div>
                <div className="what-you-will-do-items1">
                  <div className="benefits-heading-wrapper">
                    <h1 className="get-trained">Get Trained</h1>
                  </div>
                  <h2 className="learn-the-ropes">
                    Learn the ropes from our experts.
                  </h2>
                </div>
              </div>
            </div>
            <div className="step-three">
              <img
                className="step-three-image"
                loading="lazy"
                alt=""
                src="/5@2x.png"
              />
              <div className="step-three-details-wrapper">
                <div className="step-three-details">
                  <div className="nav-links">
                    <h1 className="start-earning">Start Earning</h1>
                  </div>
                  <h2 className="make-money-by">
                    Make money by promoting Daya and helping others.
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent5.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent5;
