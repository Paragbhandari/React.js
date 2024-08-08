

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import "./Home_Page.css"

function Home_Page() {
  return (
    <Card className="bg-dark text-white">
    
      <Card.ImgOverlay className='title'>
      <h4>Smart Lighting Solution</h4>
        <h3>Bringing A New Perective To Street Lights</h3>
        <h3>And The Cities Of Tomorrow.</h3>
        <Button as="input" type="reset" value="Login" size="sm"/>
      </Card.ImgOverlay>
    </Card>
  );
}

export default Home_Page;