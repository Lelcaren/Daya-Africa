import PropTypes from "prop-types";
import "./frame-component3.css";

const FrameComponent3 = ({ className = "" }) => {
  return (
    <section className={`divider-benefits-wrapper ${className}`}>
      <div className="divider-benefits">
        <div className="home-dropdown">
          <h2 className="are-you-a-container">
            <span>
              <p className="are-you-a">{`Are you a tech-savvy, socially connected individual looking for an exciting opportunity to impact your community while building a sustainable passive income stream? `}</p>
              <p className="daya-is-seeking">
                Daya is seeking enthusiastic Digital Ambassadors to join us on
                the journey to financial freedom for all. This is your chance to
                be at the forefront of financial innovation, promote sustainable
                social inclusion, and earn perpetual residual income.
              </p>
            </span>
          </h2>
        </div>
        <div className="benefits-highlight">
          <img className="icon1" loading="lazy" alt="" src="/1@2x.png" />
          <div className="rectangle-parent2">
            <div className="frame-child3" />
            <div className="help-link-wrapper">
              <h1 className="benefits-of-joining">
                Benefits of joining the Daya Squad?
              </h1>
            </div>
            <div className="empower-your-community-container">
              <ul className="empower-your-community-be-a-f">
                <li className="empower-your-community">
                  Empower Your Community: Be a financial hero and help others
                  use Daya.
                </li>
                <li className="empower-your-community">{`Flexible & Rewarding: Work your way and earn big bucks.`}</li>
                <li>
                  Be Part of the Future: Join the financial revolution with
                  Daya's innovative features.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent3;
