import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "../App.css";

function NavigationBar() {
  return (
    <Navbar expand="lg" variant="dark" className='custom-navbar' fixed='top'>
      <Container>
        <Navbar.Brand href="#" className='textColor-secondary text-bold'>
          <span className='textColor-primary'>jessan</span>i.
          </Navbar.Brand>
        <Nav>
            <Nav.Link href="#home">home.</Nav.Link>
            <Nav.Link href="#about">about.</Nav.Link>
            <Nav.Link href="#portfolio">portfolio.</Nav.Link>
            <Nav.Link href="#contact">contact.</Nav.Link>
            
          </Nav>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;