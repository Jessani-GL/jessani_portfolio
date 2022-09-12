import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import project1 from "../assets/images/graphic_demo.gif";
import project2 from "../assets/images/forum_demo.gif";

import "../App.css";

function About() {
  return (
    <Container>
      <div className="portfolio box">
      <div className="text-align-left">
              <h2 className="text-bold">
                <span className="textColor-primary">projects</span>&#x3e;
              </h2>
            </div>
        <div className="portfolio-spacing">
          <Row>
            
            <Col>
              <img src={project1} alt="project1" className="img-responsive" />
            </Col>
            <Col>
              <div className="text-align-left">
                <h4 className="text-bold">
                  <span className="texColor-accent">
                    Graphic Design Program
                  </span>
                </h4>
                <p>Graphic editor project using Java and JavaFX.</p>
                <p>
                    
                    Github:
                  <a
                    className="App-link"
                    href=" https://github.com/Jessani-GL/Graphic-Design-App"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    source&#x27B6;
                  </a>
                </p>
              </div>
            </Col>
          </Row>
        </div>
        {/* end of portfolio-spacing */}

        <div className="portfolio-spacing">
          <Row>
            <Col>
              <div className="text-align-left">
                <h4 className="text-bold">
                  <span className="texColor-accent">Forum Webapp</span>
                </h4>
                <p>
                  Simple social media website for industry. Technology consists
                  of Javascript ES6, React.js, Node.js, HTML, CSS and Bootstrap.
                </p>
                <p>
                  
                  Github:
                  <a
                    className="App-link"
                    href="https://github.com/Jessani-GL/social-media-website"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    source&#x27B6;
                  </a>
                </p>
              </div>
            </Col>
            <Col>
              <img src={project2} alt="project2" className="img-responsive" />
            </Col>
          </Row>
        </div>
        {/* end of portfolio-spacing */}
      </div>
    </Container>
  );
}

export default About;
