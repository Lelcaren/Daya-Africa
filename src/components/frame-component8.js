import PropTypes from "prop-types";
import "./frame-component8.css";

const FrameComponent8 = ({ className = "" }) => {
  return (
    <div className={`frame-div ${className}`}>
      <div className="rectangle-div" />
      <div className="data-wrapper">
        <div className="data">
          <div className="ownership">
            <div className="your-data-is-valuable-daya-gi-parent">
              <h1 className="your-data-is">
                Your data is valuable. Daya gives you data ownership and
                autonomy
              </h1>
              <div className="and-we-can">
                (and we can also show you how to mine your data safely for a
                profit 😉)
              </div>
            </div>
            <div className="control">
              <div className="take-control-of">
                Take control of your data with well-informed choices on what
                your data can be used for.
              </div>
            </div>
          </div>
          <button className="cta3">
            <div className="cta-child1" />
            <a className="learn-more">Learn More</a>
          </button>
        </div>
      </div>
      <div className="data-images">
        <div className="graphic-one" />
        <div className="graphic-two" />
        <img
          className="data-mining-icon"
          loading="lazy"
          alt=""
          src="/data-mining@2x.png"
        />
      </div>
    </div>
  );
};

FrameComponent8.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent8;
