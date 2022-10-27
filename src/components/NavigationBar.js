import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "../App.css";

function NavigationBar() {
  return (
    <Navbar expand="lg" variant="dark" className='custom-navbar' fixed='top'>
      <Container>
        <Navbar.Brand href="#" className='textColor-secondary text-bold'>
          <span className='textColor-primary'  id='btn-up'>jessan</span>i.
          </Navbar.Brand>
        <Nav>
            <Nav.Link href="#home" id='btn-up'>home.</Nav.Link>
            <Nav.Link href="#about" id='btn-up'>about.</Nav.Link>
            <Nav.Link href="#portfolio" id='btn-up'>portfolio.</Nav.Link>
            <Nav.Link href="#contact" id='btn-up'>contact.</Nav.Link>
            
          </Nav>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;