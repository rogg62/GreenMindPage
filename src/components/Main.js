import "./Main.css";
//Components
import FeedBack from "./FeedBack.js"
import Features from "./Features.js"
import Categories from "./Categories.js"
import BlueComponent from "./BlueComponent.js"
import BestSelling from "./BestSelling.js"
const Main = () => {
  return (
    <main>
    <BlueComponent/>
    <BestSelling/>
    <Features/>
    <Categories/>
    <FeedBack/>
    </main>
  );
};

export default Main;