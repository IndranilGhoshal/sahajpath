import React, { useState } from 'react'
import Logo from '../assets/images/logo.jpeg'
import newsfoot1 from '../assets/images/03.png'
import newsfoot2 from '../assets/images/04.png'
import { useNavigate } from "react-router-dom";
import { userLogin } from '../Services/userServices';
import { adminLogin } from '../Services/adminServices';


export default function Login() {
    let navigate = useNavigate(); 

    function goto(path){
        navigate(path);
    }

    const [email, setEmail]=useState('')
    const [password, setPassword]=useState('')
    const [type, setType]=useState('')


    const login=()=>{

        if(type=='admin'){
        var data ={
            "email":email,
            "password":password
        }
        adminLogin(data).then(result=>{
            // console.log(result)
            if(result.data.success){
                sessionStorage.setItem('admin', JSON.stringify(result.data))
                navigate("/admin/dashboard")
            }
        })
        }

        if(type=='student'){
        var data ={
            "email":email,
            "password":password
        }
        userLogin(data).then(result=>{
            // console.log(result)
            if(result.data.success){
                sessionStorage.setItem('user', JSON.stringify(result.data))
                navigate("/users/dashboard")
            }
        })
        }
    }
  return (
    <>
     <div className="pageheader-section">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="pageheader-content text-center">
                                <h2>Login</h2>
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb justify-content-center">
                                        <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                                        <li className="breadcrumb-item active" aria-current="page">Login</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>




    <div className="login-section padding-tb section-bg">
        <div className="container">
            <div className="account-wrapper">
                <h3 className="title">Login</h3>
            <div className="account-form">
            <div className="form-group">
                
                <div className='ac_typ'><label className='font-weight-500'>Account Type</label>
                <div className='ac_typ_in'><input type='radio' name='account' id='admin' className='mx-2' value='admin' onChange={(e)=>{setType(e.target.value)}}/>
                    <label htmlFor='admin'>Admin</label>
                    
                </div>
                <div className='ac_typ_in'><input type='radio' name='account' id='student' className='mx-2' value='student' onChange={(e)=>{setType(e.target.value)}}/>
                    <label htmlFor='student'>Student</label>
                    
                </div>
                </div>
            </div>
            <div className='mt-2'>
            <label className='font-weight-500 emle_lab'>Email</label>
            <div className='mt-2'>
            <input className='form-control' type='text' value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
            </div>
            </div>
            <div className='mt-2'>
            <label className='font-weight-500 emle_lab'>Password</label>
            <div className='mt-2'>
            <input className='form-control' type='password' value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
            </div>
            </div>
            <div className='mx-auto d-grid gap-2 mt-4'>
            <button className='btn btn-primary btn-lg' onClick={login}>Login</button>
            </div>
            <div className='mt-4'>
                <div className='text-center'><p>Are you new user?</p></div>
                <div className='text-center'><p>Please <span className='font-weight-500 cursor-pointer' onClick={()=>{goto('/signup')}}>Sign Up</span></p></div>
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
                            <div className="news-title">
                                <h3>Want Us To Email You About Special Offers And Updates?</h3>
                            </div>
                            <div className="news-form">
                                <form action="/">
                                    <div className="nf-list">
                                        <input type="email" name="email" placeholder="Enter Your Email" />
                                        <input type="submit" name="submit" value="Subscribe Now" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Newsletter Section Ending Here --> */}

                {/* <!-- Footer Section Start Here --> */}
                <footer>

                    <div className="footer-bottom style-2">
                        <div className="container">
                            <div className="section-wrapper">
                                <p>Copyrights © 2023 All Rights Services</p>
                            </div>
                        </div>
                    </div>
                </footer>
                {/* <!-- Footer Section Ending Here --> */}
            </div>
            {/* <!-- footer --> */}
    </>
  )
}
