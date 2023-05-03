import "./Categories.css";
//Images
import Plant1 from "../assets/Frame 36.svg";
import Plant3 from "../assets/Frame 37.svg";
import Plant2 from "../assets/Frame 38.svg";

const Categories = () => {
  return (
    <div id="Categories">
      <div id="Categorie1">
        <h1>Categories</h1>
        <p>Find what you are looking for</p>
      </div>
      <div id="Categorie2">
        <div className="boxeCategories2">
          <img src={Plant1} alt="" />
          <h1>Natural Plants</h1>
        </div>

        <div id="boxeCategories2">
          <img src={Plant2} alt="" />
          <h1>Plant Accessories</h1>
          <p>Horem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <button>
            Explore
            <span class="material-symbols-outlined">arrow_right_alt</span>
          </button>
        </div>

        <div className="boxeCategories2">
          <img src={Plant3} alt="" />
          <h1>Artificial Plants</h1>
        </div>
      </div>
    </div>
  );
};

export default Categories;
