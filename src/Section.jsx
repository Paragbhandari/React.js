import React from 'react'
import "./Section.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import icon from "./Image/street_light_controler.png"




const Section = (props) => {
  return (
    <>
   <main className='bg '>
 
      <div className='container section-data'>
      <h3>Ecosystem</h3>
      <h1>How does a smart street light ecosystem work?</h1>
    
      </div>
      
{/* 
  <div className="container btn" style={{ marginTop: "150px", marginLeft: "20px" }}>
      <div className="row">
        <div className="col-sm">
          <div className='all-icons'>
            <img src={icon} alt="icon" className="img-thumbnail" />
          </div>
          <div className='all-icons join all'>
            <img src={icon} alt="icon" className="img-thumbnail" />
          </div>
          <div className='first-icons'>
            <h1>Street Light Controller</h1>
            <p>Activates/deactivates in response to motion/light sensing and controls the brightness of the street lamp</p>
          </div>
        </div>
        <div className="col-sm">
          <div className='all-icons all1'>
            <img src={icon} alt="icon" className="img-thumbnail" />
          </div>
          <div className='first-icons'>
            <h1>Gateway</h1>
            <p>Employes for interfacing between a Controller and the Lighting Management Software</p>
          </div>
        </div>
        <div className="col-sm">
          <div className='all-icons'>
            <img src={icon} alt="icon" className="img-thumbnail" />
          </div>
          <div className='first-icons'>
            <h1>Cloud-based Management System</h1>
            <p>Collect information from multiple gateways.</p>
          </div>
        </div>
      </div>
    </div>

    <div className="container" style={{ marginTop: "25px" }}>
      <div className="row justify-content-md-center">
        <div className="col col-lg-2 col-sm-6">
          <div className='all-icons '>
            <img src={icon} alt="icon" className="img-thumbnail" />
          </div>
          <div className="last-icon">
            <h1>User</h1>
            <p>Data from the cloud is used to monitor and control street light by the System Managers.</p>
          </div>
        </div>
        <div className="col col-lg-2 col-sm-6">
          <div className='all-icons'>
            <img src={icon} alt="icon" className="img-thumbnail" />
          </div>
          <div className="last-icon">
            <h1>Evaluation</h1>
            <p>Collect information from multiple gateways.</p>
          </div>
        </div>
      </div>
    </div> */}


    <div className="container btn" style={{ marginTop: "150px", marginLeft: "20px" }}>
  <div className="row">
    <div className="col-sm">
      <div className='all-icons'>
        <img src={icon} alt="icon" className="img-thumbnail" />
      </div>
      <div className='all-icons join all'>
        <img src={icon} alt="icon" className="img-thumbnail" />
      </div>
      <div className='first-icons'>
        <h1>Street Light Controller</h1>
        <p>Activates/deactivates in response to motion/light sensing and controls the brightness of the street lamp</p>
      </div>
    </div>
    <div className="col-sm">
      <div className='all-icons all1'>
        <img src={icon} alt="icon" className="img-thumbnail" />
      </div>
      <div className='first-icons all2'>
        <h1>Gateway</h1>
        <p>Employes for interfacing between a Controller and the Lighting Management Software</p>
      </div>
    </div>
    <div className="col-sm">
      <div className='all-icons'>
        <img src={icon} alt="icon" className="img-thumbnail" />
      </div>
      <div className='first-icons'>
        <h1>Cloud-based Management System</h1>
        <p>Collect information from multiple gateways.</p>
      </div>
    </div>
  </div>
</div>

<div className="container" style={{ marginTop: "25px" }}>
  <div className="row justify-content-md-center">
    <div className="col col-lg-2 col-sm-6">
      <div className='all-icons all1'>
        <img src={icon} alt="icon" className="img-thumbnail" />
      </div>
      <div className="last-icon">
        <h1>User</h1>
        <p>Data from the cloud is used to monitor and control street light by the System Managers.</p>
      </div>
    </div>
    <div className="col col-lg-2 col-sm-6">
      <div className='all-icons'>
        <img src={icon} alt="icon" className="img-thumbnail" />
      </div>
      <div className="last-icon">
        <h1>Evaluation</h1>
        <p>Collect information from multiple gateways.</p>
      </div>
    </div>
  </div>
</div>








   </main>


    </>
  )
}

export default Section




