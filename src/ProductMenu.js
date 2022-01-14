import "./ProductMenu.css";
import logo from "./logo1.png";
import productsImg from "./products.png";
import { FaLeaf, FaTools, FaIdBadge, FaBook } from "react-icons/fa";

export default function ProductMenu() {
  return (
    <div className="products">
      <h1 className="mainHeading">
        <img alt="logo" src={logo} className="mainLogo"></img>
        <br />
        Switch To <br />
        <span className="green">Electric Bikes</span>
        <br /> Now!
      </h1>
      <h1>Our Products</h1>
      <img alt="bikes" src={productsImg} className="productsImg"></img>
      <h2>Features</h2>
      <div className="features">
        <div className="featureItem">
          <FaLeaf className="featureIcon" />
          <p>Ecofriendly</p>
        </div>
        <div className="featureItem">
          <FaTools className="featureIcon" />
          <p>Low Maintainance</p>
        </div>
        <div className="featureItem">
          <FaIdBadge className="featureIcon" />
          <p>No License</p>
        </div>
        <div className="featureItem">
          <FaBook className="featureIcon" />
          <p>No Registration</p>
        </div>
      </div>
    </div>
  );
}
