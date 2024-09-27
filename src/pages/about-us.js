import FrameComponent1 from "../components/frame-component1";
import Final from "../components/final";
import "./about-us.css";

const AboutUs = () => {
  return (
    <div className="about-us">
      <FrameComponent1 />
      <div className="games2">Games</div>
      <section className="rectangle-parent">
        <div className="frame-child" />
        <div className="at-daya-we-believe-finance-sh-wrapper">
          <h2 className="at-daya-we-container">
            <span>
              <p className="at-daya-we">
                At Daya, we believe that finance should be both enjoyable and accessible for the vibrant African youth. By integrating gamification with robust fintech solutions, we empower our users to manage their finances effortlessly while having fun.
              </p>
              <p className="whether-youre-sending">
                Whether you’re sending money, paying bills, topping up your airtime, or mining data, we’ve got you covered!
              </p>
            </span>
          </h2>
        </div>
        <Final dayaLogoLight="/daya-logo-light@2x.png" />
        <img className="map-icon1" loading="lazy" alt="" src="/map@2x.png" />
      </section>
    </div>
  );
};

export default AboutUs;

