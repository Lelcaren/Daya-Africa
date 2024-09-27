import FrameComponent7 from "../components/frame-component7";
import FrameComponent9 from "../components/frame-component9";
import FrameComponent8 from "../components/frame-component8";
import Footer from "../components/footer";
import "./home-page.css";

const HomePage = () => {
  return (
    <div className="home-page">
      <FrameComponent7 />
      <section className="home-page-inner">
        <div className="content-left-parent">
          <div className="content-left">
            <div className="connecting-africa-parent">
              <div className="connecting-africa">
                <div className="slogan">
                  <h1 className="connecting-africa-through">
                    Connecting Africa through travel, fun, and finance!
                  </h1>
                  <div className="image">
                    <img className="map-icon" alt="" src="/map@2x.png" />
                    <div className="mobile-parent">
                      <img
                        className="mobile-icon"
                        alt=""
                        src="/mobile@2x.png"
                      />
                      <img
                        className="plane-icon"
                        loading="lazy"
                        alt=""
                        src="/plane@2x.png"
                      />
                      <img className="logo-icon" alt="" src="/logo@2x.png" />
                    </div>
                  </div>
                </div>
                <div className="dive">
                  <div className="divider-wrapper">
                    <img
                      className="divider-icon"
                      loading="lazy"
                      alt=""
                      src="/divider.svg"
                    />
                  </div>
                  <h2 className="dive-into-the">
                    Dive into the world where fun meets financial freedom. Get
                    personalised rewards for all your transactions.
                  </h2>
                </div>
              </div>
              <h1 className="pay-play-connect">Pay. Play. Connect!</h1>
              <button className="cta">
                <div className="cta-child" />
                <div className="sign-up">Sign up</div>
              </button>
            </div>
          </div>
          <div className="frame-parent">
            <div className="frame-wrapper">
              <div className="get-personalised-rewards-ever-parent">
                <h2 className="get-personalised-rewards-container">
                  <p className="get-personalised-rewards">
                    Get personalised rewards;
                  </p>
                  <p className="get-personalised-rewards">
                    Every day, every week, every month, and every year.
                  </p>
                </h2>
                <div className="rewards-image-wrapper">
                  <div className="rewards-image" />
                </div>
              </div>
            </div>
            <div className="main-image-parent">
              <div className="main-image">
                <img
                  className="transaction-graphic-icon"
                  loading="lazy"
                  alt=""
                  src="/7@2x.png"
                />
              </div>
              <div className="transact">
                <img
                  className="main-icon"
                  loading="lazy"
                  alt=""
                  src="/main@2x.png"
                />
                <div className="chance-wrapper">
                  <div className="chance">
                    <div className="when-you-transact">
                      When you transact on the Daya app, you stand a chance to
                      win gift cards, shopping vouchers, and even an all-expense
                      paid trip to your dream location on the continent!
                    </div>
                    <div className="button-wrapper">
                      <button className="button">
                        <div className="button-child" />
                        <div className="get-started">Get started</div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FrameComponent9 />
      <div className="games">Games</div>
      <section className="frame-group">
        <FrameComponent8 />
        <Footer />
      </section>
    </div>
  );
};

export default HomePage;
