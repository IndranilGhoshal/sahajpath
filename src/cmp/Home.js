import React, { useEffect } from 'react'
import banrimg1 from '../assets/images/01.png'
import about01 from '../assets/images/01_002.jpg'
import about02 from '../assets/images/02_003.jpg'
import about03 from '../assets/images/03_005.jpg'
import about04 from '../assets/images/01_002.png'
import feedback1 from '../assets/images/01_008.jpg'
import feedback2 from '../assets/images/01_004.jpg'
import feedback3 from '../assets/images/02_002.jpg'
import newsfoot1 from '../assets/images/03.png'
import newsfoot2 from '../assets/images/04.png'
import achiv1 from '../assets/images/01_003.png'
import achiv2 from '../assets/images/02.png'
import Footers from './Footers'
import { hideLoader } from '../Services/common'


export default function Home() {
    useEffect(()=>{
        setTimeout(() => {
            hideLoader()
        }, 1000);
    },[])
    return (
        <>
            {/* <!-- banner section start here --> */}
            <section className="banner-section style-1">
                <div className="container">
                    <div className="section-wrapper">
                        <div className="row align-items-center">
                            <div className="col-xxl-5 col-xl-6 col-lg-10">
                                <div className="banner-content">
                                    <h6 className="subtitle text-uppercase fw-medium">Sahajpath Career Solution</h6>
                                    <h2 className="title"><span className="d-lg-block">Learn The</span> Skills You Need <span className="d-lg-block">To Succeed</span></h2>
                                    <p className="desc">Free online courses from the world’s Leading experts. join 18+ million Learners today.</p>

                                </div>
                            </div>
                            <div className="col-xxl-7 col-xl-6">
                                <div className="banner-thumb">
                                    <img className='nav-logo' src={banrimg1} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="all-shapes"></div>
                <div className="cbs-content-list d-none">
                    <ul className="lab-ul">
                        <li className="ccl-shape shape-1"><a href="#">16 Students Happy</a></li>
                        <li className="ccl-shape shape-2"><a href="#">130 Total Courses</a></li>
                        <li className="ccl-shape shape-3"><a href="#">89% Successful Students</a></li>
                        <li className="ccl-shape shape-4"><a href="#">23 Learners</a></li>
                        <li className="ccl-shape shape-5"><a href="#">36 Languages</a></li>
                    </ul>
                </div>
            </section>
            {/* <!-- banner section ending here --> */}

            {/* <!-- abouts section start here --> */}
            <div className="about-section">
                <div className="container">
                    <div className="row justify-content-center row-cols-xl-2 row-cols-1 align-items-end flex-row-reverse">
                        <div className="col">
                            <div className="about-right padding-tb">
                                <div className="section-header">
                                    <span className="subtitle">About Our Sahajpath</span>
                                    <h2 className="title">Good Qualification Services And Better Skills</h2>
                                    <p>Distinctively provide acces mutfuncto
                                        users whereas transparent proceses somes ncentivize eficient
                                        functionalities rather than extensible archtectur communicate leveraged
                                        services and cross-platform.</p>
                                </div>
                                <div className="section-wrapper">
                                    <ul className="lab-ul">
                                        <li>
                                            <div className="sr-left">
                                                <img className='nav-logo' src={about01} />
                                            </div>
                                            <div className="sr-right">
                                                <h5>Skilled Instructors</h5>
                                                <p>Distinctively provide acces mutfuncto users whereas communicate leveraged services</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="sr-left">
                                                <img className='nav-logo' src={about02} />
                                            </div>
                                            <div className="sr-right">
                                                <h5>Get Certificate</h5>
                                                <p>Distinctively provide acces mutfuncto users whereas communicate leveraged services</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="sr-left">
                                                <img className='nav-logo' src={about03} />
                                            </div>
                                            <div className="sr-right">
                                                <h5>Online Classes</h5>
                                                <p>Distinctively provide acces mutfuncto users whereas communicate leveraged services</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="about-left">
                                <div className="about-thumb">
                                    <img className='nav-logo' src={about04} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- about section ending here --> */}


            {/* <!-- course section start here --> */}
            {/* <div className="course-section padding-tb section-bg">
                <div className="container">
                    <div className="section-header text-center">
                        <span className="subtitle">Featured Courses</span>
                        <h2 className="title">Pick A Course To Get Started</h2>
                    </div>
                    <div className="section-wrapper">
                        <div className="row g-4 justify-content-center row-cols-xl-3 row-cols-md-2 row-cols-1">
                            <div className="col">
                                <div className="course-item">
                                    <div className="course-inner">
                                        <div className="course-thumb">
                                            <img className='nav-logo' src={course1} />
                                        </div>
                                        <div className="course-content">
                                            <a href=""><h5>D.El Ed (2 Years)</h5></a>
                                            <div className="course-details">
                                                <div className="couse-count"><p>Recognized by NCTE & Affilited to WBBPE approved College</p></div>
                                            </div>
                                            <div className="course-footer">
                                                <div className="course-author">
                                                    <a className="ca-name">Session 2023-2025</a>
                                                </div>
                                                <div className="course-btn">
                                                    <a href="" className="lab-btn-text" data-bs-target="#addContactModal" data-bs-toggle="modal" data-bs-dismiss="modal">Read More <i className="icofont-external-link"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="course-item">
                                    <div className="course-inner">
                                        <div className="course-thumb">
                                            <img className='nav-logo' src={course2} />
                                        </div>
                                        <div className="course-content">
                                            <a href=""><h5>B. Ed</h5></a>
                                            <div className="course-details">
                                                <div className="couse-count"><p>Recognized by NCTE & Affilited to BSAEU (Erstwhile WBUTTEPA) approved College</p></div>
                                            </div>
                                            <div className="course-footer">
                                                <div className="course-author">
                                                    <a className="ca-name">Session 2023-2025</a>
                                                </div>
                                                <div className="course-btn">
                                                    <a href="" className="lab-btn-text" data-bs-target="#addContactModal" data-bs-toggle="modal" data-bs-dismiss="modal">Read More <i className="icofont-external-link"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="course-item">
                                    <div className="course-inner">
                                        <div className="course-thumb">
                                            <img className='nav-logo' src={course3} />
                                        </div>
                                        <div className="course-content">
                                            <a href=""><h5>M. Ed (2 Years)</h5></a>
                                            <div className="course-details">
                                                <div className="couse-count"><p>Recognized by NCTE & Affilited to BSAEU (Erstwhile WBUTTEPA) approved College</p></div>
                                            </div>
                                            <div className="course-footer">
                                                <div className="course-author">
                                                    <a className="ca-name">Session 2023-2025</a>
                                                </div>
                                                <div className="course-btn">
                                                    <a href="" className="lab-btn-text" data-bs-target="#addContactModal" data-bs-toggle="modal" data-bs-dismiss="modal">Read More <i className="icofont-external-link"></i></a>
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
            {/* <!-- course section ending here --> */}




            {/* <!-- student feedbak section start here --> */}
            <div className="student-feedbak-section padding-tb shape-img">
                <div className="container">
                    <div className="section-header text-center">
                        <span className="subtitle">Loved by 200,000+ students</span>
                        <h2 className="title">Students Community Feedback</h2>
                    </div>
                    <div className="section-wrapper">
                        <div className="row justify-content-center row-cols-lg-2 row-cols-1">
                            <div className="col">
                                <div className="sf-left">
                                    <div className="sfl-thumb">
                                        <img className='nav-logo' src={feedback1} />
                                        {/* <a href="" className="video-button" data-rel="lightcase"><i className="icofont-ui-play"></i></a> */}
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="stu-feed-item">
                                    <div className="stu-feed-inner">
                                        <div className="stu-feed-top">
                                            <div className="sft-left">
                                                <div className="sftl-thumb">
                                                    <img className='nav-logo' src={feedback2} />
                                                </div>
                                                <div className="sftl-content">
                                                    <a href="#"><h6>Oliver Beddows</h6></a>
                                                    <span>Student</span>
                                                </div>
                                            </div>
                                            <div className="sft-right">
                                                <span className="ratting">
                                                    <i className="icofont-ui-rating"></i>
                                                    <i className="icofont-ui-rating"></i>
                                                    <i className="icofont-ui-rating"></i>
                                                    <i className="icofont-ui-rating"></i>
                                                    <i className="icofont-ui-rating"></i>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="stu-feed-bottom">
                                            <p>Rapidiously buildcollaboration
                                                anden deas sharing viaing and with bleedng edgeing nterfaces
                                                fnergstcally plagiarize teams anbuling paradgms whereas goingi forward
                                                process and monetze</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="stu-feed-item">
                                    <div className="stu-feed-inner">
                                        <div className="stu-feed-top">
                                            <div className="sft-left">
                                                <div className="sftl-thumb">
                                                    <img className='nav-logo' src={feedback3} />
                                                </div>
                                                <div className="sftl-content">
                                                    <a href="#"><h6>Madley Pondor</h6></a>
                                                    <span>Faculty</span>
                                                </div>
                                            </div>
                                            <div className="sft-right">
                                                <span className="ratting">
                                                    <i className="icofont-ui-rating"></i>
                                                    <i className="icofont-ui-rating"></i>
                                                    <i className="icofont-ui-rating"></i>
                                                    <i className="icofont-ui-rating"></i>
                                                    <i className="icofont-ui-rating"></i>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="stu-feed-bottom">
                                            <p>Rapidiously buildcollaboration
                                                anden deas sharing viaing and with bleedng edgeing nterfaces
                                                fnergstcally plagiarize teams anbuling paradgms whereas goingi forward
                                                process and monetze</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- student feedbak section ending here --> */}

            {/* <!-- Achievement section start here --> */}
            <div className="achievement-section padding-tb">
                <div className="container">
                    <div className="section-header text-center">
                        <span className="subtitle">START TO SUCCESS</span>
                        <h2 className="title">Achieve Your Goals With Sahajpath</h2>
                    </div>
                    <div className="section-wrapper">
                        <div className="counter-part mb-4">
                            <div className="row g-4 row-cols-lg-4 row-cols-sm-2 row-cols-1 justify-content-center">
                                <div className="col">
                                    <div className="count-item">
                                        <div className="count-inner">
                                            <div className="count-content">
                                                <h2><span className="count" data-to="30" data-speed="1500">30</span><span>+</span></h2>
                                                <p>Years of Language Education Experience</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="count-item">
                                        <div className="count-inner">
                                            <div className="count-content">
                                                <h2><span className="count" data-to="3080" data-speed="1500">3,080</span><span>+</span></h2>
                                                <p>Learners Enrolled in Sahajpath Courses</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="count-item">
                                        <div className="count-inner">
                                            <div className="count-content">
                                                <h2><span className="count" data-to="330" data-speed="1500">330</span><span>+</span></h2>
                                                <p>Qualified Teachers And Language Experts</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="count-item">
                                        <div className="count-inner">
                                            <div className="count-content">
                                                <h2><span className="count" data-to="2300" data-speed="1500">2,300</span><span>+</span></h2>
                                                <p>Innovative Foreign Language Courses</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="achieve-part">
                            <div className="row g-4 row-cols-1 row-cols-lg-2">
                                <div className="col">
                                    <div className="achieve-item">
                                        <div className="achieve-inner">
                                            <div className="achieve-thumb">
                                                <img className='chiv' src={achiv1} />

                                            </div>
                                            <div className="achieve-content">
                                                <h4>Start Teaching Today</h4>
                                                <p>Seamlessly engage technically sound coaborative reintermed goal oriented content rather than ethica</p>
                                                <a href="#" className="lab-btn"><span>Become A Instructor</span></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="achieve-item">
                                        <div className="achieve-inner">
                                            <div className="achieve-thumb">
                                                <img className='chiv' src={achiv2} />
                                            </div>
                                            <div className="achieve-content">
                                                <h4>If You Join Our Course</h4>
                                                <p>Seamlessly engage technically sound coaborative reintermed goal oriented content rather than ethica</p>
                                                <a href="#" className="lab-btn"><span>Register For Free</span></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Achievement section ending here --> */}

            {/* Modal */}

            {/* Modal end*/}

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


                {/* add new popup start */}
                <div id="addContactModal" tabindex="-1" aria-labelledby="addContactModal" class="modal fade addContactModal" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered modal-xl">
                        <div class="modal-content">
                            <div class="modal-header pageheader-section style-2">
                                <div class="container-fluid">
                                    <div class="row align-items-center">
                                        <div class="col-sm-10">
                                            <h3 class="modal-title d-inline-block align-middle me-2">Course Details</h3>

                                        </div>
                                        <div class="col-sm-2 d-flex justify-content-end"><button type="button" data-bs-dismiss="modal" aria-label="Close" class="btn-close"></button></div>
                                    </div>
                                </div>
                            </div>
                            <div class="modal-body">
                                <div class="container-fluid">
                                    <div class="row">
                                        <div class="">
                                            <div class="container">
                                                <div class="row">
                                                    <div class="col-lg-12">
                                                        <div class="main-part">
                                                            <div class="course-item">
                                                                <div class="course-inner">
                                                                    <div class="course-content">
                                                                        <h3>Course Overview</h3>
                                                                        <p>In this course take you from the fundamentals and concepts of data modeling all the way through anumber of best practices and techniques that you’ll need to build data models in your organization. You’ll find many By the end of the course, you’ll be all set to not only put these principles to works but also to maike the key data modeling and design decisions required by the info data modeling that transcend the nuts-and-bolts that clearly the key covered the course and design patterns.</p>
                                                                        <h4>What You'll Learn in This Course:</h4>
                                                                        <ul class="lab-ul">
                                                                            <li><i class="icofont-tick-mark"></i>Ready to begin working on real-world data modeling projects</li>
                                                                            <li><i class="icofont-tick-mark"></i>Expanded responsibilities as part of an existing role</li>
                                                                            <li><i class="icofont-tick-mark"></i>Be able to create Flyers, Brochures, Advertisements</li>
                                                                            <li><i class="icofont-tick-mark"></i>Find a new position involving data modeling.</li>
                                                                            <li><i class="icofont-tick-mark"></i>Work with color and Gradients and Grids</li>
                                                                        </ul>
                                                                        <p>In this course take you from the fundamentals and concepts of data modeling all the way through anumber  of best practices and techniques that you’ll need to build data models in your organization. You’ll find many examples that clearly the key covered the course</p>
                                                                        <p>By the end of the course, you’ll be all set to not only put these principles to works but also to maike the key data modeling and design decisions required by the info data modeling that transcend the nuts-and-bolts that clearly the key covered the course and design patterns.</p>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div class="course-video">
                                                                <div class="course-video-title">
                                                                    <h4>Course Content</h4>
                                                                </div>
                                                                <div class="course-video-content">
                                                                    <div class="accordion" id="accordionExample">
                                                                        <div class="accordion-item">
                                                                            <div class="accordion-header" id="accordion01">
                                                                                <button class="d-flex flex-wrap justify-content-between" data-bs-toggle="collapse" data-bs-target="#videolist1" aria-expanded="true" aria-controls="videolist1"><span>1.Introduction</span> <span>5lessons, 17:37</span> </button>
                                                                            </div>
                                                                            <div id="videolist1" class="accordion-collapse collapse show" aria-labelledby="accordion01" data-bs-parent="#accordionExample">
                                                                                <ul class="lab-ul video-item-list">
                                                                                    <li class=" d-flex flex-wrap justify-content-between">
                                                                                        <div class="video-item-title">1.1 Welcome to the course 02:30 minutes</div>
                                                                                    </li>
                                                                                    <li class=" d-flex flex-wrap justify-content-between">
                                                                                        <div class="video-item-title">1.2 How to set up your photoshop workspace  08:33 minutes</div>
                                                                                    </li>
                                                                                    <li class=" d-flex flex-wrap justify-content-between">
                                                                                        <div class="video-item-title">1.3 Essential Photoshop Tools 03:38 minutes</div>
                                                                                    </li>
                                                                                    <li class=" d-flex flex-wrap justify-content-between">
                                                                                        <div class="video-item-title">1.4 Finding inspiration 02:30 minutes</div>
                                                                                    </li>
                                                                                    <li class=" d-flex flex-wrap justify-content-between">
                                                                                        <div class="video-item-title">1.5 Choosing Your Format 03:48 minutes</div>
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                        <div class="accordion-item">
                                                                            <div class="accordion-header" id="accordion02">
                                                                                <button class="d-flex flex-wrap justify-content-between" data-bs-toggle="collapse" data-bs-target="#videolist2" aria-expanded="true" aria-controls="videolist2"> <span>2.How to Create Mixed Media Art in Adobe Photoshop</span> <span>5 lessons, 52:15</span> </button>
                                                                            </div>
                                                                            <div id="videolist2" class="accordion-collapse collapse" aria-labelledby="accordion02" data-bs-parent="#accordionExample">
                                                                                <ul class="lab-ul video-item-list">
                                                                                    <li class=" d-flex flex-wrap justify-content-between">
                                                                                        <div class="video-item-title">2.1 Using Adjustment Layers 06:20 minutes</div>
                                                                                    </li>
                                                                                    <li class=" d-flex flex-wrap justify-content-between">
                                                                                        <div class="video-item-title">2.2 Building the composition 07:33 minutes</div>
                                                                                    </li>
                                                                                    <li class=" d-flex flex-wrap justify-content-between">
                                                                                        <div class="video-item-title">2.3 Photoshop Lighting effects 06:30 minutes</div>
                                                                                    </li>
                                                                                    <li class=" d-flex flex-wrap justify-content-between">
                                                                                        <div class="video-item-title">2.4 Digital Painting using photoshop brushes 08:34 minutes</div>
                                                                                    </li>
                                                                                    <li class=" d-flex flex-wrap justify-content-between">
                                                                                        <div class="video-item-title">2.5 Finalizing the details 10:30 minutes</div>
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>



                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div></div></div>


                {/* <!-- Footer Section Start Here --> */}
                <Footers />
                {/* <!-- Footer Section Ending Here --> */}
            </div>
            {/* <!-- footer --> */}
        </>
    )
}