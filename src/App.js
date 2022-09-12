import "./App.css";
import NavigationBar from "./components/NavigationBar";
import Header from "./components/Header";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <div className="App-container" id="home">
        <Header />
      </div>
      <div className="content-container" id="about">
        <About />
      </div>
      <div className="content-container" id="portfolio">
        <Portfolio />
      </div>
      <div className="content-container" id="contact">
        <Contact />
      </div>
      <div className="footer-content">
      <Footer />
      </div>
     
    </div>
  );
}

export default App;
