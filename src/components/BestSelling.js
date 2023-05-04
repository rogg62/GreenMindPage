import "./BestSelling.css";
import Plant1 from "../assets/Frame 9.svg";
import Plant2 from "../assets/Frame 8.svg";
import Plant3 from "../assets/Frame 7.svg";

const BestSelling = () => {
  return (
    <div id="BestSelling">
      <div id="BestInfo">
        <h1>Best Selling Plants</h1>
        <p>Easiest way to healthy life by buying your favorite plants </p>
        <button>
          See more
          <span className="material-symbols-outlined">arrow_right_alt</span>
        </button>
      </div>
      <div className="SellingBoxs">
        <img src={Plant1} alt="" />
        <div className="boxs">
          <h1>Natural Plants</h1>
          <p>₱ 1,400.00</p>
        </div>
      </div>
      <div className="SellingBoxs">
        <img src={Plant2} alt="" id="img" />
        <div className="boxs">
          <h1>Artificial Plants</h1>
          <p>₱ 900.00</p>
        </div>
      </div>
      <div className="SellingBoxs">
        <img src={Plant3} alt="" />
        <div className="boxs">
          <h1>Artificial Plants</h1>
          <p>₱ 3,500.00</p>
        </div>
      </div>
    </div>
  );
};

export default BestSelling;
