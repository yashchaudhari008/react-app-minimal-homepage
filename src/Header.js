import logo from "./logo.png";
import "./Header.css";

export default function Header() {
  return (
    <header>
      <img alt="logo" src={logo} className="headerLogo"></img>
      <h2 className="headerText">Kuber E-Bikes</h2>
    </header>
  );
}
