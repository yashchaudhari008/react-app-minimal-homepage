import "./AboutMenu.css";
import { FaThumbsUp, FaHeadset, FaUserShield, FaGem } from "react-icons/fa";

export default function AboutMenu() {
  return (
    <div className="aboutCard">
      <h1>About Us</h1>
      <p>
        Kuber E-bikes is one of India’s leading electric two-wheeler
        manufacturer. Our goal is to build a better, cleaner and greener future
        for the generations to come.
      </p>
      <br />
      <h2>Why Choose Us?</h2>
      <div className="features">
        <div className="featureItem">
          <FaThumbsUp className="featureIcon" />
          <p>Best Products</p>
        </div>
        <div className="featureItem">
          <FaGem className="featureIcon" />
          <p>Quality Service</p>
        </div>
        <div className="featureItem">
          <FaUserShield className="featureIcon" />
          <p>Trusted Dealers</p>
        </div>
        <div className="featureItem">
          <FaHeadset className="featureIcon" />
          <p>Excellent Support</p>
        </div>
      </div>
      <h2>Get in Touch</h2>
      <a href="https://www.facebook.com/kuberebikes/">Facebook Page</a>
      <p>
        <b>Contact No:</b> +918950754626
      </p>
      <p>
        <b>Email:</b> info@kuberebikes.com
      </p>
    </div>
  );
}
