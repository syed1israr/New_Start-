import React from 'react'
import '../Utils/Contact.css'
const ContactUs = () => {
  return (
    <div id="page3">
        <div id="left1">
          <div id="text5">
            <h5>Contact us !</h5>
            <h1>We Would Love<br />to Hear from you</h1>
          </div>
          <div id="info">
            <div className="infos">
              <div className="circle i1"></div>
              <h1 className='hi'>GreenScapes@restraunts.com</h1>
            </div>
            <div className="infos">
              <div className="circle i1"></div>
              <h1 className='hi' >Pune-Maharashtra 411005</h1>
            </div>
          </div>
        </div>
        <div id="right1">
          <div className="line l1">
            <h1 className='hi'>👋 Say Hi!</h1>
            <div className="circle c1"><i className="ri-arrow-right-up-line"></i></div>
          </div>
          <div className="line l2"></div>
        </div>
      </div>
  )
}

export default ContactUs