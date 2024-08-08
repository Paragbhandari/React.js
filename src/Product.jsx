import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import productimg from "./Image/smart_lights.png"
import "./Product.css"
import img from "./Image/icon_png.png"


function Product() {
  return (<>
  <section style={{ background: "linear-gradient(rgb(235, 255, 255),rgba(211, 211, 221, 101))"}}>
  <Container className='main' id='product'>
    <Row className='row_text'>
      <Col sm={12}>
    
        <p>Product</p>
       <div className='heading'>
       <h6><strong>Cutting-edge hardware,</strong>Offerings helping cities optimize resources and achieve smart development goals</h6>
       </div>

      </Col>
    </Row>
    <Row >
    <Col sm={3} className='col_1'>Centralized Control & Monitoring System</Col>
    <Col sm={3} className='col_2'>NEMA-Mounted VOLC 1160</Col>
    <Col sm={3} className='col_3'>Retrofit Street Light Controller VOLC 2160</Col>
      <Col sm={3} className='col_4'>Retrofit Street Light Controller VOLC 2180</Col>
    </Row>
    <Row >
    <Col sm={3} className='col_5'>Centralized Control & Monitoring System</Col>
    </Row>
   
 
 <Container>
      <Row>
        <Col xs={12} sm={6} className='image'>
          <img src={productimg} alt='img' />
        </Col>
        <Col xs={12} sm={6} className='image'>
          <p style={{fontSize:"15px", position:"relative",top:"15px"}}>Products Us</p>
         <h1 style={{fontSize:"18px", maxWidth:"200px"}}> Centralized Control &
         Monitoring System</h1>
         <p style={{fontSize:"9px", maxWidth:"200px"}}>Designed indigenously for street lighting projects, the CCMS offers a complete feeder panel for a group of 30-50 street lights</p>
         <Nav.Item>
        <Nav.Link eventKey="link-1" style={{color:"blue"}}>Know More <img src={img} style={{height:"20px", width:"20px"}}/></Nav.Link>
      </Nav.Item>
        </Col>
      </Row>
    </Container> 


 
   
    
  </Container>

  </section>
  
  
  </>);
}

export default Product;
