import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from "./Image/smart lights_logo.svg";
import "./Footer.css"

function Footer() {
  return (<>
    <Card className='footer'>
      <Card.Header>
      <Navbar collapseOnSelect expand="lg" >
      <Container style={{marginTop:"30px"}}>
      <Navbar.Brand href="#home" ><img src={logo} alt='logo' className='logo'/></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
       
         
         
          </Nav>
          <Nav>
         
            <Nav.Link href="#product" className='text-light '>Product</Nav.Link>
            <Nav.Link href="#software"  className='text-light'>Software Services</Nav.Link>
            <Nav.Link href="#"  className='text-light'>Follow Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      </Card.Header>
      <Card.Body style={{position:"relative"}} >
        <div><Card.Title className='line'></Card.Title></div>
        <Card.Text className='foot-text'>
          <nav className='container foot-nav'>
          <Nav.Link href="#" className='text-light nav-l'>Privacy Policy</Nav.Link>
            <Nav.Link href="#"  className='text-light nav-2'>Terms & Condition</Nav.Link>
            <Nav.Link href="#"  className='text-light nav-3'>Cookie Policy</Nav.Link>
          </nav>
        </Card.Text>
      
        
      </Card.Body>
    </Card>
    
         
    
  </>);
}

export default Footer;