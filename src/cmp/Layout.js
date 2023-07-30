import React, { useEffect, useState } from 'react'
import { Outlet, useNavigate } from "react-router-dom";
import Logo from '../assets/images/logo.png'
import { hideLoader, showLoader } from '../Services/common';



export default function Layout() {


    let navigate = useNavigate();

    useEffect(() => {
        // setPathName("/" + window.location.href.split('/')[3])
    }, [])

    function goto(path) {
        showLoader()
        navigate(path);
        setTimeout(() => {
            hideLoader()
        }, 1000);
    }


    const [menubar, setMenuBar] = useState(false)

    const menufun =()=>{
        if(!menubar){
            setMenuBar(true)
        }else{
           setMenuBar(false) 
        }
    }


    return (
        <>


            {/* <!-- header section start here --> */}
            <a href="#" className="scrollToTop"><i class="icofont-rounded-up"></i>Page Toper</a>
            <header className="header-section">
                <div className="header-top">
                    <div className="container">
                        <div className="header-top-area">

                            <ul className="lab-ul left">
                                <li className='scroller'>
                                    <i className="icofont-ui-call"></i>
                                    
                                    <marquee scrolldelay="300" width="130px">+91 8240 759 778 , +91 8250 065 159 , +91 9874 918 752 , +91 9674 440 028</marquee>

                                </li>
                                <li>
                                    <i className="icofont-location-pin"></i> Kolkata, India
                                </li>
                            </ul>
                            <ul className="lab-ul social-icons d-flex align-items-center">
                                <li><p>Find us on : </p></li>
                                <li><a href="https://www.facebook.com/sahajpathcareersolution" target='_blank' className="rss"><i class="icofont-facebook"></i></a></li>
                                {/* <li><a href="#" className="fb"><i className="icofont-facebook-messenger"></i></a></li>
                                <li><a href="#" className="twitter"><i className="icofont-twitter"></i></a></li>
                                <li><a href="#" className="vimeo"><i className="icofont-vimeo"></i></a></li>
                                <li><a href="#" className="skype"><i className="icofont-skype"></i></a></li>
                                <li><a href="#" className="rss"><i className="icofont-rss-feed"></i></a></li> */}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="header-bottom">
                    <div className="container">
                        <div className="header-wrapper">
                            <div className="logo">
                                <a href=""><img className='nav-logo' src={Logo} /></a>
                            </div>
                            <div className={`menu-area `}>
                                <div className="menu">
                                    <ul className={`lab-ul ${menubar?"active":""}`}>
                                        <li className="">
                                            <a className={`nav-link cursor-pointer`} onClick={() => { goto('/'); menufun() }}><i className='fa fa-home'></i> Home</a>
                                        </li>
                                        <li className="menu-item">
                                            <a className={`nav-link cursor-pointer`} onClick={() => { goto('/courses'); menufun() }}><i className='fa fa-mortar-board'></i> Courses</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className={`nav-link cursor-pointer`} onClick={() => { goto('/contactus'); menufun() }}><i className='fa fa-phone'></i> Contact Us</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className={`nav-link cursor-pointer`} onClick={() => { goto('/enquiry'); menufun() }}><i className='fa fa-search'></i> Enquiry Now</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className={`nav-link cursor-pointer`} onClick={() => { goto('/enquirystatus'); menufun() }}><i className='fa fa-commenting'></i> Enquiry Status</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className={`nav-link cursor-pointer`} onClick={() => { goto('/studynotes'); menufun() }}><i className='fa fa-book'></i> Study Notes</a>
                                        </li>
                                    </ul>


                                </div>


                                <a className='login' onClick={() => { goto('/login'); setMenuBar(false)  } }><i className='fa fa-sign-in'></i> Login</a>
                                <a className='signup' onClick={() => { goto('/signup'); setMenuBar(false)  }}><i className="fa fa-user-plus"> </i> Registration</a>

                                {/* <!-- toggle icons --> */}
                                <div className={`header-bar d-lg-none ${menubar?"active":""}`} onClick={()=>{menufun()}}>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* <!-- header section ending here --> */}



            <Outlet />
        </>
    )
}