import "./BlueComponent.css";
import Line from "../assets/Line 1.svg";
import Plant from "../assets/plants1.svg";
import Seta from "../assets/Vector 187.svg";
import Seta2 from "../assets/Vector 186.svg";
const BlueComponent = () => {
  return (
    <div id="blueContainer">
      <div id="blueTitle">
        <h1>Buy your dream plants</h1>
        <div id="info">
          <div id="boxInfo1">
            <h1 className="h1">50+</h1>
            <h3>Plant Species</h3>
          </div>
          <img src={Line} alt="" id="line" />
          <div id="boxInfo2">
            <h1 className="h1">100+</h1>
            <h3>Customers</h3>
          </div>
        </div>

        <div class="search-container">
          <input
            type="text"
            id="text"
            placeholder="What are you looking for?"
          />
          <button type="submit">
            <span class="material-symbols-outlined">search</span>
          </button>
        </div>
      </div>
      <img src={Seta} alt="" id="Seta" />
      <img src={Seta2} alt="" id="Seta2" />
      <div id="bloobPlant">
        <img src={Plant} alt="" id="PlantImg" />
      </div>
    </div>
  );
};

export default BlueComponent;
