import React, { useEffect, useState } from 'react'
import newsfoot1 from '../assets/images/03.png'
import newsfoot2 from '../assets/images/04.png'
import { useNavigate } from "react-router-dom";
import { allCourse, courseDetails } from '../Services/courseServices';


export default function SignUp() {
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
                    <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Registration</li>
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
            <h3 className="title">Registration</h3>
            <div className="account-form rgstne_pge">
              <div className="form-group">
                <label className='font-weight-500'>Name</label>
                <div className='mt-2'>
                  <input type='text' className='form-control' value={name} onChange={(e) => { setName(e.target.value) }} />
                </div>
              </div>
              <div className="form-group">
                <label className='font-weight-500'>Email</label>
                <div className='mt-2'>
                  <input type='text' className='form-control' value={email} onChange={(e) => { setEmail(e.target.value) }} />
                </div>
              </div>
              <div className="form-group">
                <label className='font-weight-500'>Password</label>
                <div className='mt-2'>
                  <input type='password' className='form-control' value={password} onChange={(e) => { setPassword(e.target.value) }} />
                </div>
              </div>

              <div className="form-group gndre">
                <div className='ac_typ'><label className='font-weight-500'>Gender</label>
                  <div className='ac_typ_in'>
                    <input type='radio' name='gender' id='male' className='mx-2' value='Male' onChange={(e) => { setGender(e.target.value) }} />
                    <label for='male'>Male</label>
                  </div>
                  <div className='ac_typ_in'>
                    <input type='radio' name='gender' id='female' className='mx-2' value='Female' onChange={(e) => { setGender(e.target.value) }} />
                    <label for='female'>Female</label></div>
                </div>
              </div>
              <div className="form-group">
                <label className='font-weight-500'>Contact No.</label>
                <div className='mt-2'>
                  <input type='text' className='form-control' value={contactNo} onChange={(e) => { setContactNo(e.target.value) }} />
                </div>
              </div>
              <div className="form-group">
                <label className='font-weight-500'>Date of Birth</label>
                <div className='mt-2'>
                  <input type='date' className='form-control' value={dateOfBirth} onChange={(e) => { setDateOfBirth(e.target.value) }} />
                </div>
              </div>
              <div className="form-group">
                <label className='font-weight-500'>Address</label>
                <div className='mt-2'>
                  <textarea type='text' className='form-control' value={address} onChange={(e) => { setAddress(e.target.value) }}>

                  </textarea>
                </div>
              </div>
              <div className="form-group">
                <label className='font-weight-500'>Pin Code</label>
                <div className='mt-2'>
                  <input type='text' className='form-control' value={pinCode} onChange={(e) => { setPinCode(e.target.value) }} />
                </div>
              </div>

              <div className="form-group">
                <label className='font-weight-500'>Course</label>
                <div className='mt-2'>
                  <select type='text' className='form-control' value={course} onChange={(e) => { setCourse(e.target.value); getCourseDetails(e.target.value) }} >
                    <option value=''>Select</option>
                    {
                      courseList.map((item, i) => (
                        <option value={item.id}>{item.course}</option>
                      ))
                    }
                  </select>
                </div>
              </div>
              {
                courseFullFees ?
                  <div className="form-group">
                    <label className='font-weight-500'>Total Course Fees</label>
                    <div className='mt-2'>
                      <div style={{ textAlign: "left" }}>{courseFullFees}</div>
                    </div>
                  </div> : null
              }

              {
                courseType ?
                  <div className="form-group">
                    <label className='font-weight-500'>Per {courseType} Fees</label>
                    <div className='mt-2'>
                      <div style={{ textAlign: "left" }}>{courseTypeFees}</div>
                    </div>
                  </div> : null
              }

              <div className="form-group">
                <label className='font-weight-500'>Registraion Fees</label>
                <div className='mt-2'>
                  <select type='text' className='form-control' value={registrationFees} onChange={(e) => { setRegistrationFees(e.target.value)}} >
                    <option value=''>Select</option>
                    <option value='10000'>10,000</option>
                  
                  </select>
                </div>
              </div>



              <div className='mx-auto d-grid gap-2 mt-4'>
                <button className='btn btn-primary btn-lg'>Submit</button>
              </div>

              <div className='mt-4'>
                <div className='text-center'><p> Are you already register?</p></div>
                <div className='text-center'><p>Please <span className='font-weight-500 cursor-pointer' onClick={() => { goto('/login') }}>Login</span></p></div>
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
