import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import bannerImg from "../assets/images/header.png";

import "../App.css";

function Header() {
  return (
   
    <Container>

      <Row>
        {/* I need to have my text set as 'absolute' so it goes over my image. */}
        <img src={bannerImg} alt ='banner'/>
        <Col>
          <div className="text-align-left">
            <p>Hello, I am Jessani</p>
            <h1 className="header-font-size">
             i'm a software engineer.
            </h1>
            <p>
              I am pursuing to specialise in creating websites and mobile
              applications
            </p>
          </div>
        </Col>
        <Col></Col>
      </Row>
      
    </Container>
  );
}

export default Header;
