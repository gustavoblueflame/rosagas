import "./assets/styles/App.css";
import Header from "./components/Header";
import Carrousel from "./components/Carrousel";
import Home from "./components/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <Carrousel />
      <div className="container">
        <Home />
        <Footer />
      </div>
    </div>
  );
}

export default App;
