import "./Footer.css";
import Logo from "../assets/GREENMIND (1).svg";
import Twitter from "../assets/Group 13.svg";
import Instagram from "../assets/Group 12.svg";
import Facebook from "../assets/Group 11.svg";

const Footer = () => {
  return (
    <footer>
      <div id="FooterTop">
        <div id="contactFooter">
          <img src={Logo} alt="" id="Logo" />
          <p>We help you find your dream plant</p>
          <div id="RedeSocial">
            <img src={Facebook} alt="" title="Facebook"/>
            <img src={Instagram} alt="" title="Instagram"/>
            <img src={Twitter} alt="" title="Twitter" />
          </div>
        </div>

        <div id="Links">
          <div id="link1">
            <span>Information</span>
            <a href="#Features">About</a>
            <a href="2">Product</a>
            <a href="3">Blog</a>
          </div>

          <div id="link2">
            <span>Company</span>
            <a href="1">Community</a>
            <a href="2">Career</a>
            <a href="3">Our story</a>
          </div>

          <div id="link3">
            <span>Contact</span>
            <a href="1">Getting Started</a>
            <a href="2">Pricing</a>
            <a href="3">Resources</a>
          </div>
        </div>
      </div>

      <div id="FooterBottom">
        <div id="copyFooter">
          <p>2023 all Right Reserved Term of use GREENMIND</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
