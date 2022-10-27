import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import project1 from "../assets/images/graphic_demo.gif";
import project2 from "../assets/images/forum_demo.gif";
import project3 from "../assets/videos/medical_application.mov";
import project4 from "../assets/videos/socialmedia.mov";

import "../App.css";

function Portfolio() {
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
        <hr></hr>
        <div className="portfolio-spacing">
          <Row>
            <Col>
              <div className="text-align-left">
                <h4 className="text-bold">
                  <span className="texColor-accent">Forum Webapp</span>
                </h4>
                <p>
                  Simple social media website for a industry demographic.
                  Technology consists of Javascript ES6, React.js, Node.js,
                  HTML, CSS and Bootstrap.
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
        <hr></hr>
        <div className="portfolio-spacing">
          <Row>
            <Col>
              <video
                width="320"
                height="240"
                autoplay="autoplay"
                muted
                className="img-responsive"
              >
                <source src={project3} type="video/mp4" />
                Sorry, your browser does not support the video tag.
              </video>
            </Col>
            <Col>
              <div className="text-align-left">
                <h4 className="text-bold">
                  <span className="texColor-accent">
                    Medical Mobile Application
                  </span>
                </h4>
                <p>
                  A mobile application for medical services. This collaborative
                  group project was developed using Flutter, Java and
                  Microservices. The project management consisted of Scrum.
                </p>
                <p>
                  Github (frontend):
                  <a
                    className="App-link"
                    href="https://github.com/Jessani-GL/MedicalApp_frontend"
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

        <hr></hr>
        <div className="portfolio-spacing">
          <Row>
            <Col>
              <div className="text-align-left">
                <h4 className="text-bold">
                  <span className="texColor-accent">Loop Agile Now Webapp</span>
                </h4>
                <p>
                  This website is a social media platform for industry and
                  education audiences to share posts with. This collaborative
                  project was developed with React, Bootstrap, Express and
                  Node.js.
                </p>
                <p>
                  Github:
                  {/* <a
                    className="App-link"
                    href="https://github.com/Jessani-GL/social-media-website"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    source&#x27B6;
                  </a> */}
                  (Coming soon)
                </p>
              </div>
            </Col>
            <Col>
              <video
                width="320"
                height="240"
                // controls
                autoplay="autoplay"
                muted
                className="video-responsive"
              >
                <source src={project4} type="video/mp4" />
                Sorry, your browser does not support the video tag.
              </video>
            </Col>
          </Row>
        </div>
        {/* end of portfolio-spacing */}
      </div>
    </Container>
  );
}

export default Portfolio;
