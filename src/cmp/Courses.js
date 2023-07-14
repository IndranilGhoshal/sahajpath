import React, { useEffect, useState } from 'react'
import newsfoot1 from '../assets/images/03.png'
import newsfoot2 from '../assets/images/04.png'
import course1 from '../assets/images/course/01.jpg'
import course2 from '../assets/images/course/02.jpg'
import course3 from '../assets/images/course/03.jpg'
import course4 from '../assets/images/course/04.jpg'
import course5 from '../assets/images/course/05.jpg'
import course6 from '../assets/images/course/06.jpg'
import Footers from './Footers'
import { useNavigate } from 'react-router-dom'
import { allCourse } from '../Services/courseServices'
import { IMAGE_URL } from '../urlConfig/Url'
import { hideLoader } from '../Services/common'

export default function Courses() {

  var navigate = useNavigate()

  const goto = (path) => {
    navigate(path)
  }

  useEffect(() => {
    allCoursefun()
    setTimeout(() => {
      hideLoader()
    }, 1000);
  }, [])

  const [courseData, setCourseData] = useState([])

  const allCoursefun = () => {
    var data = {}
    allCourse(data).then(result => {
      setCourseData(result.data.response)
    })
  }


  return (

    <>
      <div className="pageheader-section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="pageheader-content text-center">
                <h2>Archives: Courses</h2>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb justify-content-center">
                    <li className="breadcrumb-item" onClick={() => { goto("/") }}><a>Home</a></li>
                    <li className="breadcrumb-item active" aria-current="page" onClick={() => { goto("/courses") }}>Courses</li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="group-select-section">
        <div className="container">
          <div className="section-wrapper">
            <div className="row align-items-center g-4">
              <div className="col-md-1">
                <div className="group-select-left">
                  <i className="icofont-abacus-alt"></i>
                  <span>Filters</span>
                </div>
              </div>
              <div className="col-md-11">
                <div className="group-select-right">
                  <div className="row g-2 row-cols-lg-4 row-cols-sm-2 row-cols-1">
                    <div className="col">
                      <div className="select-item">
                        <select>
                          <option value="">All Categories</option>
                          <option value="uncategorized">Uncategorized</option>
                          <option value="academy">Academy</option>
                          <option value="agency">Agency</option>
                          <option value="app">App</option>
                          <option value="bar">Bar</option>
                        </select>
                        <div className="select-icon">
                          <i className="icofont-rounded-down"></i>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="select-item">
                        <select>
                          <option value="">All Language</option>
                          <option value="java">JAVA</option>
                          <option value="php">PHP</option>
                          <option value="html">HTML</option>
                          <option value="python">PYTHON</option>
                          <option value="javascript">JAVASCRIPT</option>
                        </select>
                        <div className="select-icon">
                          <i className="icofont-rounded-down"></i>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="select-item">
                        <select>
                          <option value="">All Prices</option>
                          <option value="29">29</option>
                          <option value="39">39</option>
                          <option value="69">69</option>
                          <option value="99">99</option>
                          <option value="199">199</option>
                        </select>
                        <div className="select-icon">
                          <i className="icofont-rounded-down"></i>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="select-item">
                        <select>
                          <option value="">All Skills</option>
                          <option value="html">HTML</option>
                          <option value="css">CSS</option>
                          <option value="php">PHP</option>
                          <option value="java">JAVA</option>
                          <option value="javascript">JAVASCRIPT</option>
                          <option value="wordpress">WORDPRESS</option>
                          <option value="react">REACT</option>
                          <option value="vue">VUE</option>
                          <option value="angular">ANGULAR</option>
                        </select>
                        <div className="select-icon">
                          <i className="icofont-rounded-down"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* <!-- course section start here --> */}
      <div className="course-section padding-tb section-bg">
        <div className="container">
          <div className="section-header text-center">
            <span className="subtitle">Featured Courses</span>
            <h2 className="title">Pick A Course To Get Started</h2>
          </div>
          <div className="section-wrapper">
            <div className="row g-4 justify-content-center row-cols-xl-3 row-cols-md-2 row-cols-1">
              {
                courseData.map((item, i) => (
                  <div className="col">
                    <div className="course-item">
                      <div className="course-inner">
                        <div className="course-thumb">
                          <img className='nav-logo' src={IMAGE_URL + item.courseBanner} />
                        </div>
                        <div className="course-content">
                          <a href=""><h5>{item.course} ({item.courseDuration})</h5></a>
                          <div className="course-details">
                            <div className="couse-count"><p>Recognized by {item.courseApprovedBy}</p></div>
                            <div className="couse-count"><p>Recognized by {item.courseDescription}</p></div>
                          </div>
                          <div className="course-footer">
                            <div className="course-author">
                              <a className="ca-name">Eligibility: {item.courseEligibility}</a>
                            </div>
                            
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              }


            </div>
          </div>
        </div>
      </div>
      {/* <!-- course section ending here --> */}
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