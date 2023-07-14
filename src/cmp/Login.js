import React, { useEffect, useState } from 'react'
import Logo from '../assets/images/logo.png'
import newsfoot1 from '../assets/images/03.png'
import newsfoot2 from '../assets/images/04.png'
import signupimg from '../assets/images/signup-image.png'
import signinimg from '../assets/images/signin-image.png'
import { useNavigate } from "react-router-dom";
import { userLogin } from '../Services/userServices';
import { adminLogin } from '../Services/adminServices';
import Footers from './Footers'
import { NotificationContainer, NotificationManager } from 'react-notifications';
import { getAdminData, getUserData, hideLoader, showLoader } from '../Services/common'



export default function Login() {
    let navigate = useNavigate();

    useEffect(() => {

        if (sessionStorage.getItem('user')) {
            navigate("/user/dashboard")
        }

        if (sessionStorage.getItem('admin')) {
            navigate("/admin/dashboard")
        }


        setTimeout(() => {
            hideLoader()
        }, 1000);
    }, [])

    function goto(path) {
        navigate(path);
        showLoader()
    }

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const [emailErr, setEmailErr] = useState(false)
    const [passwordErr, setPasswordErr] = useState(false)
    const [validEmailErr, setValidEmailErr] = useState(false)

    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    const login = () => {
        setEmailErr(false)
        setPasswordErr(false)
        setValidEmailErr(false)

        var err = 0;

        if (email.trim() == "") {
            setEmailErr(true)
            err++
        }

        if (email.trim()) {
            if (!email.trim().match(mailformat)) {
                setValidEmailErr(true)
                err++
            }
        }


        if (password.trim() == "") {
            setPasswordErr(true)
            err++
        }


        if (err == 0) {
            var data = {
                "email": email.trim(),
                "password": password.trim()
            }
            showLoader()
            userLogin(data).then(result => {
                hideLoader()
                if (result.data.success) {
                    sessionStorage.setItem('user', JSON.stringify(result.data))
                    navigate("/users/dashboard")
                } else {
                    NotificationManager.error(result.data.message);
                }
            })
        }



    }

    const adminlogin = () => {

        setEmailErr(false)
        setPasswordErr(false)
        setValidEmailErr(false)


        var err = 0;

        if (email.trim() == "") {
            setEmailErr(true)
            err++
        }

        if (email.trim()) {
            if (!email.trim().match(mailformat)) {
                setValidEmailErr(true)
                err++
            }
        }

        if (password.trim() == "") {
            setPasswordErr(true)
            err++
        }

        if (err == 0) {
            var data = {
                "email": email.trim(),
                "password": password.trim()
            }
            showLoader()
            adminLogin(data).then(result => {
                hideLoader()
                // console.log(result)
                if (result.data.success) {
                    sessionStorage.setItem('admin', JSON.stringify(result.data))
                    navigate("/admin/dashboard")
                } else {
                    NotificationManager.error(result.data.message);
                }
            })
        }
    }


    const tabChange = () => {
        setEmailErr(false)
        setPasswordErr(false)
        setValidEmailErr(false)
        setEmail("")
        setPassword("")
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
                                        <li className="breadcrumb-item" onClick={() => { goto("/") }}><a>Home</a></li>
                                        <li className="breadcrumb-item active" aria-current="page" onClick={() => { goto("/login") }}>Login</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>






            <div className="login-section logn_pge padding-tb section-bg">
                <div className="container">
                    <div className="account-wrapper">
                        {/* TABs */}
                        <div class="nav nav-tabs" id="nav-tab" role="tablist">
                            <button
                                class="nav-link active"
                                id="nav-home-tab"
                                data-bs-toggle="tab"
                                data-bs-target="#nav-home"
                                type="button"
                                role="tab"
                                aria-controls="nav-home"
                                aria-selected="true"
                                onClick={tabChange}
                            >
                                Student Login
                            </button>

                            <button
                                class="nav-link"
                                id="nav-profile-tab"
                                data-bs-toggle="tab"
                                data-bs-target="#nav-profile"
                                type="button"
                                role="tab"
                                aria-controls="nav-profile"
                                aria-selected="false"
                                onClick={tabChange}
                            >
                                Admin Login
                            </button>
                        </div>
                        <div class="tab-content" id="nav-tabContent">
                            <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                                <div className='inerdive'>
                                    <div class="signup-image">
                                        <figure><img className='sinupi' src={signupimg} /></figure>
                                    </div>
                                    <div className='signup-frm'>
                                        <span className='login_logo'>
                                            <img className='logn_dv' src={Logo} />
                                        </span>
                                        <h3 className="title">Student Login</h3>
                                        <div className="account-form">
                                            <div className='mt-2'>
                                                <label className='font-weight-500 emle_lab'>Email:</label>
                                                <div className='mt-2'><i class="icofont-email"></i>
                                                    <input className='form-control' type='text' value={email} onChange={(e) => { setEmail(e.target.value) }} />
                                                </div>
                                                {
                                                    emailErr ? <div style={{ fontSize: "12px", color: '#f00', textAlign: 'left' }}>Enter Email</div> : null
                                                }
                                                {
                                                    validEmailErr ? <div style={{ fontSize: "12px", color: '#f00', textAlign: 'left' }}>Enter Valid Email</div> : null
                                                }
                                            </div>
                                            <div className='mt-2'>
                                                <label className='font-weight-500 emle_lab'>Password:</label>
                                                <div className='mt-2'>
                                                    <i class="icofont-ui-password"></i>
                                                    <input className='form-control' type='password' value={password} onChange={(e) => { setPassword(e.target.value) }} />
                                                </div>
                                                {
                                                    passwordErr ? <div style={{ fontSize: "12px", color: '#f00', textAlign: 'left' }}>Enter Password</div> : null
                                                }
                                            </div>
                                            <div className='mx-auto d-grid gap-2 mt-4'>
                                                <button className='btn btn-primary btn-lg' onClick={login}>Login</button>
                                            </div>
                                            <div className='mt-4'>
                                                <div className='text-center'><p>Are you new user?</p></div>
                                                <div className='text-center'><p>Please <span style={{ cursor: 'pointer', fontWeight: '500' }} onClick={() => { goto('/signup') }}>Sign Up</span></p></div>
                                            </div>


                                        </div>
                                    </div>
                                </div></div>
                            <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                                <div className='inerdive'>
                                    <div class="signup-image">
                                        <figure><img className='sinupi' src={signinimg} /></figure>
                                    </div>
                                    <div className='signup-frm'>
                                        <span className='login_logo'>
                                            <img className='logn_dv' src={Logo} />
                                        </span>
                                        <h3 className="title">Admin Login</h3>
                                        <div className="account-form">
                                            <div className='mt-2'>
                                                <label className='font-weight-500 emle_lab'>Email</label>
                                                <div className='mt-2'><i class="icofont-email"></i>
                                                    <input className='form-control' type='text' value={email} onChange={(e) => { setEmail(e.target.value) }} />
                                                </div>
                                                {
                                                    emailErr ? <div style={{ fontSize: "12px", color: '#f00', textAlign: 'left' }}>Enter Email</div> : null
                                                }
                                                {
                                                    validEmailErr ? <div style={{ fontSize: "12px", color: '#f00', textAlign: 'left' }}>Enter Valid Email</div> : null
                                                }
                                            </div>
                                            <div className='mt-2'>
                                                <label className='font-weight-500 emle_lab'>Password</label>
                                                <div className='mt-2'>
                                                    <i class="icofont-ui-password"></i>
                                                    <input className='form-control' type='password' value={password} onChange={(e) => { setPassword(e.target.value) }} />
                                                </div>
                                                {
                                                    passwordErr ? <div style={{ fontSize: "12px", color: '#f00', textAlign: 'left' }}>Enter Password</div> : null
                                                }
                                            </div>
                                            <div className='mx-auto d-grid gap-2 mt-4'>
                                                <button className='btn btn-primary btn-lg' onClick={adminlogin}>Login</button>
                                            </div>
                                        </div>
                                    </div></div></div>
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
            <NotificationContainer />
        </>
    )
}
