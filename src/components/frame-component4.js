import PropTypes from "prop-types";
import "./frame-component4.css";

const FrameComponent4 = ({ className = "" }) => {
  return (
    <section className={`what-you-will-do-content-wrapper ${className}`}>
      <div className="what-you-will-do-content">
        <div className="what-you-will-do-content-child" />
        <div className="squad-columns">
          <div className="community-benefits">
            <h1 className="what-you-will">What You will be doing?</h1>
          </div>
          <div className="promote-daya-spread-container">
            <ul className="promote-daya-spread-the-word">
              <li className="promote-daya-spread">
                Promote Daya: Spread the word about Daya's awesomeness.
              </li>
              <li>Provide Support: Be a financial guru for your community.</li>
            </ul>
          </div>
        </div>
        <div className="squad-columns">
          <div className="community-benefits">
            <h1 className="what-you-will">Earn Residual Income by:</h1>
          </div>
          <div className="promote-daya-spread-container">
            <ul className="promote-daya-spread-the-word">
              <li className="promote-daya-spread">
                Referral Rewards: Get paid for every friend who joins and
                transacts on Daya.
              </li>
              <li className="promote-daya-spread">
                Tiered Incentives: Level up and earn even more.
              </li>
              <li>
                Crypto Bonuses: Be a crypto champion and earn extra rewards.
              </li>
            </ul>
          </div>
        </div>
        <img
          className="doing-image-icon"
          loading="lazy"
          alt=""
          src="/2@2x.png"
        />
      </div>
    </section>
  );
};

FrameComponent4.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent4;
