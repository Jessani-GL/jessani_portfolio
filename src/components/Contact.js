import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "../App.css";

function Contact() {
  return (
    <Container>
      <div className="about-box">
        <Row>
          <Col>
            <div className="text-align-left">
              <h2 className="text-bold"><span className="textColor-primary">contact me</span>&#x3e;</h2>
              <p>
                Contact me here for further inquiries.
              </p>
              <p>
              <span className="text-larger">&#x2709;</span> {" "} jessani.lin5721@gmail.com
              </p>
            </div>
          </Col>
          <Col>
         
          </Col>
        </Row>
        
        <Row>
            <Col>
            <div className="text-align-left">
              <h2 className="text-bold"><span className="textColor-primary">profile</span>&#x3e;</h2>
              <p>
              LinkedIn:
                  <a
                    className="App-link"
                    href="https://www.linkedin.com/in/jessani-linsangan-96b63a209/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    source&#x27B6;
                  </a>
              </p>
              <p>
              Github:
                  <a
                    className="App-link"
                    href=" https://github.com/Jessani-GL/"
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
    </Container>
  );
}

export default Contact;
