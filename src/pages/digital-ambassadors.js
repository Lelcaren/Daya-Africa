import FrameComponent2 from "../components/frame-component2";
import FrameComponent3 from "../components/frame-component3";
import FrameComponent4 from "../components/frame-component4";
import FrameComponent5 from "../components/frame-component5";
import FrameComponent6 from "../components/frame-component6";
import "./digital-ambassadors.css";

const DigitalAmbassadors = () => {
  return (
    <div className="digital-ambassadors">
      <FrameComponent2 />
      <div className="spacer">
        <img className="icon" loading="lazy" alt="" src="/7@2x.png" />
      </div>
      <FrameComponent3 />
      <FrameComponent4 />
      <FrameComponent5 />
      <div className="games1">Games</div>
      <FrameComponent6 />
    </div>
  );
};

export default DigitalAmbassadors;
