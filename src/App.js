import logo from "./logo.svg";
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
      <div className="App-container">
        <Header />
      </div>
      <div className="content-container">
        <About />
      </div>
      <div className="content-container">
        <Portfolio />
      </div>
      <div className="content-container">
        <Contact />
      </div>
      <div className="footer-content">
      <Footer />
      </div>
     
    </div>
  );
}

export default App;
