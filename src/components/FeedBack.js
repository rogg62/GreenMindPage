import "./Feedback.css";
import Comment1 from "../assets/Frame 45.svg";
import Comment2 from "../assets/Frame 48.svg";

const Feedback = () => {
  return (
    <div id="Feedback">
      <div id="FeedTitle">
        <h1>What customers say about GREEMIND?</h1>
      </div>

      <div id="scroll">
        <div className="wrapper">
          <div className="Scrollitem">
            <img src={Comment1} alt="" />
          </div>
        </div>

        <div className="wrapper">
          <div className="Scrollitem">
            <img src={Comment2} alt="" />
          </div>
        </div>

        <div className="wrapper">
          <div className="Scrollitem">
            <img src={Comment1} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
