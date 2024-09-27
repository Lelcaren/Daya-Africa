import PropTypes from "prop-types";
import "./frame-component9.css";

const FrameComponent9 = ({ className = "" }) => {
  return (
    <section className={`home-page-child ${className}`}>
      <div className="rectangle-container">
        <div className="frame-inner" />
        <div className="play-games-with-the-coins-you-wrapper">
          <h1 className="play-games-with">
            Play Games with the coins you earn!
          </h1>
        </div>
        <div className="games-divider">
          <img className="divider-icon1" alt="" src="/divider-1.svg" />
        </div>
        <div className="bouquet">
          <div className="have-fun-with">
            Have fun with our bouquet of games, and earn additional coins and
            rewards while managing your finances.
          </div>
        </div>
        <div className="play">
          <button className="cta2">
            <div className="cta-inner" />
            <div className="play-now">Play now!</div>
          </button>
        </div>
        <img className="game-icon" loading="lazy" alt="" src="/game@2x.png" />
      </div>
    </section>
  );
};

FrameComponent9.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent9;
