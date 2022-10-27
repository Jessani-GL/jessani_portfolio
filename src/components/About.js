import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import profile from "../assets/images/profile.jpg";

import "../App.css";

function About() {
  return (
    <Container>
      <div className="about-box">
        <Row>
          <Col>
            <div className="text-align-left">
            <br></br>
              
              <h2 className="text-bold"><span className="textColor-primary">about me</span>&#x3e;</h2>
              <p>Hi! My name is Jessani. </p>
              <p>
                I am a Australian programmer that aspires to
                specialise in creating mobile applications and websites.  I have a deep passion for expressing 
                my creativity and innovation in not only in software development, but also 
                in design and UI/UX. As of currently, I am a student studying Information Technology in
                RMIT university.
              </p>
            </div>
          </Col>
          <Col>
          <img src={profile} alt="project1" className="img-profile"/>
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default About;
