import React, { useEffect } from 'react'
import newsfoot1 from '../assets/images/03.png'
import newsfoot2 from '../assets/images/04.png'
import iconcont1 from '../assets/images/icon/01.png'
import iconcont2 from '../assets/images/icon/02.png'
import iconcont3 from '../assets/images/icon/03.png'
import iconcont4 from '../assets/images/icon/04.png'
import Footers from './Footers'
import { useNavigate } from 'react-router-dom'
import { hideLoader } from '../Services/common'


export default function ContactUs() {

  var navigate = useNavigate()

  useEffect(()=>{
    setTimeout(() => {
      hideLoader()
    }, 1000);
  },[])

  const goto = (path) =>{
    navigate(path)
  }
  return (
    <>
      <div className="pageheader-section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="pageheader-content text-center">
                <h2>Get In Touch With Us</h2>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb justify-content-center">
                    <li className="breadcrumb-item" onClick={()=>{goto("/")}}><a>Home</a></li>
                    <li className="breadcrumb-item active" aria-current="page" onClick={()=>{goto("/contactus")}}>Contact Us</li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="map-address-section padding-tb section-bg">
        <div className="container">
            <div className="section-header text-center">
                <span className="subtitle">Get in touch with us</span>
                <h2 className="title">We're Always Eager To Hear From You!</h2>
            </div>
            <div className="section-wrapper">
                <div className="row flex-row-reverse">
                    <div className="col-xl-4 col-lg-5 col-12">
                        <div className="contact-wrapper">
                            <div className="contact-item">
                                <div className="contact-thumb">
                                <img className='' src={iconcont1} />
                                </div>
                                <div className="contact-content">
                                    <h6 className="title">Office Address</h6>
                                    <p>Shop No. 6, 5 SASHI BHUSAN BASAK LANE DURGA APPARTMENT, near NAINAN BANDHAB SAMITY CLUB, Baranagar, Kolkata, West Bengal </p>
                                </div>
                            </div>
                            <div className="contact-item">
                                <div className="contact-thumb">
                                <img className='' src={iconcont2} />
                                </div>
                                <div className="contact-content">
                                    <h6 className="title">Phone number</h6>
                                    <p>+91 8240 759 778&nbsp; | +91 8250 065 159</p>
                                    <p>+91 9874 918 752&nbsp; | +91 9674 440 028</p>
                                </div>
                            </div>
                            <div className="contact-item">
                                <div className="contact-thumb">
                                <img className='' src={iconcont3} />
                                </div>
                                <div className="contact-content">
                                    <h6 className="title">Send email </h6>
                                    <a href="mailto:support@sahajpathcareersolution.in">support@sahajpathcareersolution.in</a>
                                </div>
                            </div>
                            <div className="contact-item">
                                <div className="contact-thumb">
                                <img className='' src={iconcont4} />
                                </div>
                                <div className="contact-content">
                                    <h6 className="title">Follow Us</h6>
                                    <a style={{fontSize:"12px"}} href="https://www.facebook.com/sahajpathcareersolution" target='_blank'>https://www.facebook.com/sahajpathcareersolution</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-8 col-lg-7 col-12">
                        <div className="map-area">
                            <div className="maps">
                             <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14729.992912408277!2d88.377359!3d22.6352053!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89d2cbfb856c7%3A0x31180d5d844d0798!2sSahajpath%20Career%20Solutions!5e0!3m2!1sen!2sin!4v1684235265648!5m2!1sen!2sin" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
   
      {/* <!-- footer --> */}
      <div className="news-footer-wrap">
        <div className="fs-shape">
          <img className='fst-1' src={newsfoot1} />
          <img className='fst-2' src={newsfoot2} />
        </div>
        {/* <!-- Newsletter Section Start Here --> */}
        <div className="news-letter">
          <div className="container">
            <div className="section-wrapper">
              {/* <div className="news-title">
                <h3>Want Us To Email You About Special Offers And Updates?</h3>
              </div>
              <div className="news-form">
                <form action="/">
                  <div className="nf-list">
                    <input type="email" name="email" placeholder="Enter Your Email" />
                    <input type="submit" name="submit" value="Subscribe Now" />
                  </div>
                </form>
              </div> */}
            </div>
          </div>
        </div>
        {/* <!-- Newsletter Section Ending Here --> */}

        {/* <!-- Footer Section Start Here --> */}
        <Footers />
        {/* <!-- Footer Section Ending Here --> */}
      </div>
      {/* <!-- footer --> */}

    </>
  )
}