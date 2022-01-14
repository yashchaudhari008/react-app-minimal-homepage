import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import ProductMenu from "./ProductMenu";
import AboutMenu from "./AboutMenu";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="body">
        <ProductMenu />
        <AboutMenu />
      </div>
      <Footer />
    </div>
  );
}

export default App;
