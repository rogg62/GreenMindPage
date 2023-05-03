import "./Features.css";

//Images
import Imagem1 from "../assets/Group 1.svg"
import Imagem2 from "../assets/Group 1 (1).svg"
import Imagem3 from "../assets/Group 1 (2).svg"

const Features = () => {
  return (
    <div id="Features">
      <div id="title">
        <h1>About us</h1>
        <p>Order now and appreciate the beauty of nature</p>
      </div>
      <div id="Boxes">
        <div className="featuresBoxes">
            <img src={Imagem1} alt="" />
            <h1>Large Assortment</h1>
            <p>we offer many different types of products with fewer variations in each category.</p>
        </div>
        <div className="featuresBoxes">
            <img src={Imagem2} alt="" />
            <h1>Fast & Free Shipping</h1>
            <p>4-day or less delivery time, free shipping and an expedited delivery option.</p>
        </div>
        <div className="featuresBoxes">
            <img src={Imagem3} alt="" />
            <h1>24/7 Support</h1>
            <p>answers to any business related inquiry 24/7 and in real-time.</p>
        </div>
      </div>
    </div>
  );
};

export default Features;
