import React,{useEffect, useState} from 'react'
import { Outlet, useNavigate } from "react-router-dom";
import Logo from '../assets/images/logo.jpeg'

export default function Layout() {

    
    let navigate = useNavigate(); 
    const [pathName, setPathName]=useState('')


    useEffect(()=>{
        setPathName("/"+window.location.href.split('/')[3])
    },[])

    function goto(path){
        setPathName(path)
        navigate(path);
    }
    return (
        <>

            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"><img className='nav-logo' src={Logo}/></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <span className={`nav-link cursor-pointer ${pathName=='/' ? "active": ""}`} onClick={()=>{goto('/')}}><i className='fa fa-home'></i> Home</span>
                            </li>
                            <li className="nav-item">
                                <span className={`nav-link cursor-pointer ${pathName=='/courses' ? "active": ""}`} onClick={()=>{goto('/courses')}}><i className='fa fa-mortar-board'></i> Courses</span>
                            </li>
                            <li className="nav-item">
                                <span className={`nav-link cursor-pointer ${pathName=='/contactus' ? "active": ""}`} onClick={()=>{goto('/contactus')}}><i className='fa fa-phone'></i> Contact Us</span>
                            </li>
                            <li className="nav-item">
                                <span className={`nav-link cursor-pointer ${pathName=='/enquiry' ? "active": ""}`} onClick={()=>{goto('/enquiry')}}><i className='fa fa-search'></i> Enquiry Now</span>
                            </li>
                            <li className="nav-item">
                                <span className={`nav-link cursor-pointer ${pathName=='/enquirystatus' ? "active": ""}`} onClick={()=>{goto('/enquirystatus')}}><i className='fa fa-commenting'></i> Enquiry Status</span>
                            </li>
                        </ul>
                        <span className="navbar-text">
                            <button className='btn btn-primary' onClick={()=>{goto('/login')}}><i className='fa fa-sign-in'></i> Login</button>
                            <button className='btn btn-primary mx-2' onClick={()=>{goto('/signup')}}><i className="fa fa-user-plus"> </i> Registration</button>
                        </span>
                    </div>
                </div>
            </nav>

            <Outlet />
        </>
    )
}
