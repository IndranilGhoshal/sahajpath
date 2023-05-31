import React, { useEffect, useState, useCallback } from 'react'
import newsfoot1 from '../assets/images/03.png'
import newsfoot2 from '../assets/images/04.png'
import card1 from '../assets/images/card1.png'
import card2 from '../assets/images/card2.png'
import card3 from '../assets/images/card3.png'
import card4 from '../assets/images/card4.png'
import qrcd from '../assets/images/QR-Code.jpg'
import $ from "jquery";


import { useNavigate } from "react-router-dom";
import { allCourse, courseDetails } from '../Services/courseServices';
import Footers from './Footers'




export default function SignUp() {

  function loadScript(src) {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  }

  async function displayRazorpay() {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }



    var options = {
      "key": "rzp_test_7Vl0rR9pRIcrY4",
      "amount": "",
      "currency": "INR",
      "name": "",
      "description": "Test Transaction",
      "image": "",
      "order_id": "",
      "handler": function (response) {
        console.log(response.razorpay_payment_id);
        if (response.razorpay_payment_id) {
          alert("Payment Successfully!")
          localStorage.setItem('payee_id', response.razorpay_payment_id)
        }
      },
      "prefill": {
        "name": "Indranil Ghoshal",
        "email": "indranillghoshal@gmail.com",
        "contact": "7908231967"
      },
      "notes": {
        "address": "Razorpay Corporate Office"
      },
      "theme": {
        "color": "#00FF00"
      },
      "error": {
        "code": "BAD_REQUEST_ERROR",
        "description": "Authentication failed due to incorrect otp",
        "field": null,
        "source": "customer",
        "step": "payment_authentication",
        "reason": "invalid_otp",
        "metadata": {
          "payment_id": "",
          "order_id": ""
        }
      }
    };

    options.amount=registrationFees+"00"

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  }

  let navigate = useNavigate();


  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [gender, setGender] = useState('')
  const [contactNo, setContactNo] = useState('')
  const [dateOfBirth, setDateOfBirth] = useState('')
  const [address, setAddress] = useState('')
  const [pinCode, setPinCode] = useState('')
  const [course, setCourse] = useState('')
  const [registrationFees, setRegistrationFees] = useState('')


  const [nameErr, setNameErr] = useState(false)
  const [emailErr, setEmailErr] = useState(false)
  const [passwordErr, setPasswordErr] = useState(false)
  const [genderErr, setGenderErr] = useState(false)
  const [contactNoErr, setContactNoErr] = useState(false)
  const [dateOfBirthErr, setDateOfBirthErr] = useState(false)
  const [addressErr, setAddressErr] = useState(false)
  const [pinCodeErr, setPinCodeErr] = useState(false)
  const [courseErr, setCourseErr] = useState(false)
  const [registrationFeesErr, setRegistrationFeesErr] = useState(false)


  function goto(path) {
    navigate(path);
  }

  const [courseList, setCourseList] = useState([])

  useEffect(() => {
    allCourseFun()
  }, [])

  const allCourseFun = () => {
    var data = {}
    allCourse(data).then(result => {
      setCourseList(result.data.response)
    })
  }

  const [courseFullFees, setCourseFullFees] = useState("")
  const [courseType, setCourseType] = useState("")
  const [courseTypeFees, setCourseTypeFees] = useState("")

  const getCourseDetails = (val) => {
    setCourseFullFees("")
    var data = {
      "id": val
    }

    courseDetails(data).then(result => {
      setCourseFullFees(result.data.response.courseFees)
      setCourseType(result.data.response.courseType)
      setCourseTypeFees(result.data.response.courseTypeFees)
    })

  }


  const [paymentTab, setPaymentTab] = useState(true)
  const [completeTab, setCompleteTab] = useState(true)


  const onSubmit = () => {
    setNameErr(false)
    setContactNoErr(false)
    setEmailErr(false)
    setPasswordErr(false)
    setGenderErr(false)
    setDateOfBirthErr(false)
    setAddressErr(false)
    setPinCodeErr(false)
    setCourseErr(false)
    setRegistrationFeesErr(false)

    var err = 0;

    if (name == "") {
      setNameErr(true)
      err++
    }
    if (contactNo == "") {
      setContactNoErr(true)
      err++
    }
    if (email == "") {
      setEmailErr(true)
      err++
    }
    if (password == "") {
      setPasswordErr(true)
      err++
    }
    if (gender == "") {
      setGenderErr(true)
      err++
    }
    if (dateOfBirth == "") {
      setDateOfBirthErr(true)
      err++
    }
    if (address == "") {
      setAddressErr(true)
      err++
    }
    if (pinCode == "") {
      setPinCodeErr(true)
      err++
    }
    if (course == "") {
      setCourseErr(true)
      err++
    }
    if (registrationFees == "") {
      setRegistrationFeesErr(true)
      err++
    }

    // if(err==0){
    setPaymentTab(false)
    setTimeout(() => {
      $('#nav-profile-tab').click()
    }, 100);
    // }
  }

  const onSubmitPay = () =>{
    setCompleteTab(false)
    setTimeout(() => {
      $("#nav-contact-tab").click()
    }, 100);
  }


  return (
    <>
      <div className="pageheader-section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="pageheader-content text-center">
                <h2>Register Now</h2>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb justify-content-center">
                    <li className="breadcrumb-item" onClick={() => { goto("/") }}><a>Home</a></li>
                    <li className="breadcrumb-item active" aria-current="page" onClick={() => { goto("/signup") }}>Registration</li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="login-section padding-tb section-bg">
        <div className="container">
          <div className="section-wrapper">
            {/* Tabs */}
            <div className="nav nav-tabs" id="nav-tab" role="tablist">

              <button className="nav-link active"
                id="nav-home-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-home"
                type="button"
                role="tab"
                aria-controls="nav-home"
                aria-selected="true"

              >
                Personal Details
              </button>

              <button
                className="nav-link"
                id="nav-profile-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-profile"
                type="button"
                role="tab"
                aria-controls="nav-profile"
                aria-selected="false"
                disabled={paymentTab}
              >
                Payment
              </button>

              <button
                className="nav-link"
                id="nav-contact-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-contact"
                type="button"
                role="tab"
                aria-controls="nav-contact"
                aria-selected="false"
                disabled={completeTab}
              >
                Complete
              </button>
            </div>

            <div class="tab-content" id="nav-tabContent">
              {/* Personal details */}
              <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                {/* <h3 className="title">Registration</h3> */}
                <div className="account-form rgstne_pge">
                  <div className='new_rgstne_pge'>
                    <div className="form-group">
                      <label className='font-weight-500'>Name:</label>
                      <div className='mt-2'>
                        <input type='text' className='form-control' value={name} onChange={(e) => { setName(e.target.value) }} />
                      </div>
                      {
                        nameErr ? <span className='color-red font-size-14'>Enter the name</span> : null
                      }
                    </div>
                    <div className="form-group">
                      <label className='font-weight-500'>Contact No.:</label>
                      <div className='mt-2'>
                        <input type='text' className='form-control' value={contactNo} onChange={(e) => { setContactNo(e.target.value) }} />
                      </div>
                      {
                        contactNoErr ? <span className='color-red font-size-14'>Enter the contact no.</span> : null
                      }
                    </div>
                    <div className="form-group">
                      <label className='font-weight-500'>Email Id:</label>
                      <div className='mt-2'>
                        <input type='text' className='form-control' value={email} onChange={(e) => { setEmail(e.target.value) }} />
                      </div>
                      {
                        emailErr ? <span className='color-red font-size-14'>Enter the email id</span> : null
                      }
                    </div>
                    <div className="form-group">
                      <label className='font-weight-500'>Password:</label>
                      <div className='mt-2'>
                        <input type='password' className='form-control' value={password} onChange={(e) => { setPassword(e.target.value) }} />
                      </div>
                      {
                        passwordErr ? <span className='color-red font-size-14'>Enter the password</span> : null
                      }
                    </div>

                    <div className="form-group gndre">
                      <div className='ac_typ'><label className='font-weight-500'>Gender:</label>
                        <div className='ac_typ_in_out'>
                          <div className='ac_typ_in'>
                            <input type='radio' name='gender' id='male' className='mx-2' value='Male' onChange={(e) => { setGender(e.target.value) }} />
                            <label for='male'>Male</label>
                          </div>
                          <div className='ac_typ_in'>
                            <input type='radio' name='gender' id='female' className='mx-2' value='Female' onChange={(e) => { setGender(e.target.value) }} />
                            <label for='female'>Female</label></div>
                        </div></div>
                      {
                        genderErr ? <span className='color-red font-size-14'>Select the gender</span> : null
                      }
                    </div>

                    <div className="form-group">
                      <label className='font-weight-500'>Date of Birth:</label>
                      <div className='mt-2'>
                        <input type='date' className='form-control' value={dateOfBirth} onChange={(e) => { setDateOfBirth(e.target.value) }} />
                      </div>
                      {
                        dateOfBirthErr ? <span className='color-red font-size-14'>Enter the date of birth</span> : null
                      }
                    </div>
                    <div className="form-group">
                      <label className='font-weight-500'>Address:</label>
                      <div className='mt-2'>
                        <textarea type='text' className='form-control' value={address} onChange={(e) => { setAddress(e.target.value) }}>

                        </textarea>
                      </div>
                      {
                        addressErr ? <span className='color-red font-size-14'>Enter the address</span> : null
                      }
                    </div>
                    <div className="form-group">
                      <label className='font-weight-500'>Pin Code:</label>
                      <div className='mt-2'>
                        <input type='text' className='form-control' value={pinCode} onChange={(e) => { setPinCode(e.target.value) }} />
                      </div>
                      {
                        pinCodeErr ? <span className='color-red font-size-14'>Enter the pin code</span> : null
                      }
                    </div>

                    <div className="form-group">
                      <label className='font-weight-500'>Course:</label>
                      <div className='mt-2'>
                        <select className='form-control' value={course} onChange={(e) => { setCourse(e.target.value); getCourseDetails(e.target.value) }} >
                          <option value=''>Select</option>
                          {
                            courseList.map((item, i) => (
                              <option value={item.id}>{item.course}</option>
                            ))
                          }
                        </select>
                      </div>
                      {
                        courseErr ? <span className='color-red font-size-14'>Select the course</span> : null
                      }
                    </div>
                    {
                      courseFullFees ?
                        <div className="form-group">
                          <label className='font-weight-500'>Total Course Fees:</label>
                          <div className='mt-2'>
                            <div style={{ textAlign: "left" }}>{courseFullFees}</div>
                          </div>
                        </div> : null
                    }

                    {
                      courseType ?
                        <div className="form-group">
                          <label className='font-weight-500'>Per {courseType} Fees:</label>
                          <div className='mt-2'>
                            <div style={{ textAlign: "left" }}>{courseTypeFees}</div>
                          </div>
                        </div> : null
                    }

                    <div className="form-group">
                      <label className='font-weight-500'>Registraion Fees:</label>
                      <div className='mt-2'>
                        <select type='text' className='form-control' value={registrationFees} onChange={(e) => { setRegistrationFees(e.target.value) }} >
                          <option value=''>Select</option>
                          <option value='10000'>10,000</option>

                        </select>
                      </div>
                      {
                        registrationFeesErr ? <span className='color-red font-size-14'>Select the registration fee</span> : null
                      }
                    </div>
                  </div>



                  <div className='mx-auto d-grid gap-2 mt-4'>
                    <button className='btn btn-primary btn-lg' onClick={onSubmit}>Submit</button>
                  </div>

                  <div className='mt-4'>
                    <div className='text-center'><p> Are you already register?</p></div>
                    <div className='text-center'><p>Please <span className='font-weight-500 cursor-pointer' onClick={() => { goto('/login') }}>Login</span></p></div>
                  </div>

                </div>
              </div>
              {/* Payment */}
              <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">

                {/* payment */}
                <div class="row">

                  <div class="col-12 mt-4">
                    <div class="py-3">
                      <p class="mb-0 fw-bold h4">Payment Methods</p>
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="card-body p-0">
                      <p className='m-0'>
                        <a class="btn btn-primary p-2 w-100 h-100 d-flex align-items-center justify-content-between"
                          data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="true"
                          aria-controls="collapseExample">
                          <span class="fw-bold">Payment Gateway</span>
                          <span class="">
                            <i class="fa fa-cc-visa" aria-hidden="true"></i>&nbsp;
                            <i class="fa fa-cc-mastercard" aria-hidden="true"></i>&nbsp;
                            <i class="fa fa-cc-discover" aria-hidden="true"></i>&nbsp;
                            <i class="fa fa-cc-amex" aria-hidden="true"></i>

                          </span>
                        </a>
                      </p>
                      <div class="collapse show p-5 border" id="collapseExample">
                        <div class="row">
                          <div class="col-lg-6 mb-lg-0 col-sm-12 mb-3">
                            <p class="h4 mb-0">Summary</p>
                            <p class="mb-0"><span class="fw-bold">Name </span><span class="c-green">: {name}</span></p>
                            <p class="mb-0"><span class="fw-bold">Course Name </span><span 
                            class="c-green">: {
                              courseList.map((item, i) => (
                                item.id == course ?
                                item.course
                                :null
                              ))
                                                }</span></p>
                            <p class="mb-0"><span class="fw-bold">Price </span><span
                              class="c-green">: ₹10000.00</span></p>
                          </div>
                          <div class="col-lg-6 col-sm-12">
                            {/* <form action="" class="form"> */}
                            <div class="row">
                              <div class="col-12">
                                <div>
                                  <button className="App-link" onClick={displayRazorpay}>
                                    Pay ₹10000.00
                                  </button>
                                </div>
                              </div>
                            </div>
                            {/* </form> */}
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>

                </div>
                <div className='mx-auto mt-4 text-center'>
                  <button className='btn btn-primary btn-lg' onClick={onSubmitPay}>Submit</button>

                </div>
                {/* payment end */}


              </div>
              {/* Complete */}
              <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
                <p className='aprv_st'><svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-patch-check-fill" viewBox="0 0 16 16">
                  <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z" />
                </svg> Success Payment</p>

                <div className='mx-auto mt-4 text-center'>
                  <button className='btn btn-primary btn-lg'>Go to Home Page</button>
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
