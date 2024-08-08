import React from 'react'
import "./Software.css"

import img from "./Image/users_png.png"



const Software = () => {
  return (
  <>
 <section className='soft' id='software'>
  <div className='container'>
    <h1 className='soft-head'>The platform assists city managers on multiple fronts</h1>
  </div>
  <div className='container1 cont'>
    <div className='soft-div '>
      <img src={img} alt='img'/>
      <h1 className='softdiv-head'>Saves on power consumption & related costs</h1>
    </div>
    <div className='soft-div soft-div1' style={{borderRight:"1px solid white"}}>
      <img src={img} alt='img'/>
      <h1 className='softdiv-head'>Lowers downtime</h1>
    </div>
  </div>


  <div className='container1 cont'>
    <div className='soft-div soft-div1'>
      <img src={img} alt='img' />
      <h1 className='softdiv-head'>Detects Power thefts.</h1>
    </div>
    <div className='soft-div soft-div1'  style={{borderRight:"1px solid white",marginLeft:"100px"}}>
      <img src={img} alt='img' />
      <h1 className='softdiv-head'>Ensures smart monitoring and control of the street light infrastructure</h1>
    </div>
  </div>


  
  <div className='container1 cont'>
    <div className='soft-div soft-div2'>
      <img src={img} alt='img'/>
      <h1 className='softdiv-head'>Detects Power thefts.</h1>
    </div>
    <div className='soft-div soft-div2'  style={{borderRight:"1px solid white"}}>
      <img src={img} alt='img' style={{marginTop:"50px"}}/>
      <h1 className='softdiv-head'>Ensures smart monitoring and control of the street light infrastructure</h1>
    </div>
  </div>
</section>

 
  </>
  )
}

export default Software


