import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "./Image/smart lights_logo.svg";
import Button from 'react-bootstrap/Button';
import "./Home.css"
import Home_Page from './Home_Page';



function Header() {
  return (<>

<section>

<Navbar collapseOnSelect expand="lg" >

 <Container className='img' >
 <Navbar.Brand href="#home" ><img src={logo} alt='logo' className='logo'/></Navbar.Brand>
   {/* <Navbar.Brand href="#home" ><img src={logo} alt='logo' className='logo'/></Navbar.Brand> */}
   <Navbar.Toggle aria-controls="responsive-navbar-nav" />
   <Navbar.Collapse id="responsive-navbar-nav" className='head  '>
     <Nav className="me-auto">
      
     </Nav>
     <Nav style={{marginRight:"100px"}}>
       <Nav.Link href="#home" className='text-light '>Home</Nav.Link>
       <Nav.Link href="#product" className='text-light '>Product</Nav.Link>
       <Nav.Link href="#software" className='text-light'>Software Services</Nav.Link>
       <Nav.Link href="#memes" className='btn'>
       <Button as="input" type="reset" value="Login" size="sm"/>
       </Nav.Link>
     </Nav>
   </Navbar.Collapse>

 </Container>
 
</Navbar> 
 <Home_Page/>
</section>
 
 

 







 
   
 </> );
}

export default Header;