import React, { useEffect, useState } from 'react'
import { addEnquiry } from '../Services/enquiryServices'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import newsfoot1 from '../assets/images/03.png'
import newsfoot2 from '../assets/images/04.png'
import { useNavigate } from 'react-router-dom'
import Footers from './Footers';
import { allCourse } from '../Services/courseServices';
import { hideLoader, showLoader } from '../Services/common';
import { NotificationContainer, NotificationManager } from 'react-notifications';


export default function Enquiry() {


    var navigate = useNavigate()

    const goto = (path) => {
        navigate(path)
    }


    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false)
        setName("")
        setFatherName("")
        setFatherOccupation("")
        setCaste("")
        setAddress("")
        setPinCode("")
        setEmail("")
        setMobileNo("")
        setAnotherMobileNo("")
        setWhatsappNo("")
        setLastQualification("")
        setDateOfBirth("")
        setGender("")
        setLanguage("")
        setCourse("")
        setInform("")
        setDescription("")
        navigate("/")
    };
    const handleShow = () => setShow(true);


    const [name, setName] = useState('')
    const [fatherName, setFatherName] = useState('')
    const [fatherOccupation, setFatherOccupation] = useState('')
    const [caste, setCaste] = useState('')
    const [address, setAddress] = useState('')
    const [pinCode, setPinCode] = useState('')
    const [email, setEmail] = useState('')
    const [mobileNo, setMobileNo] = useState('')
    const [anotherMobileNo, setAnotherMobileNo] = useState('')
    const [whatsappNo, setWhatsappNo] = useState('')
    const [lastQualification, setLastQualification] = useState('')
    const [dateOfBirth, setDateOfBirth] = useState('')
    const [gender, setGender] = useState('')
    const [language, setLanguage] = useState('')
    const [course, setCourse] = useState('')
    const [inform, setInform] = useState('')
    const [description, setDescription] = useState('')


    const [nameErr, setNameErr] = useState(false)
    const [fatherNameErr, setFatherNameErr] = useState(false)
    const [fatherOccupationErr, setFatherOccupationErr] = useState(false)
    const [casteErr, setCasteErr] = useState(false)
    const [addressErr, setAddressErr] = useState(false)
    const [pinCodeErr, setPinCodeErr] = useState(false)
    const [emailErr, setEmailErr] = useState(false)
    const [emailValidErr, setEmailValidErr] = useState(false)
    const [mobileNoErr, setMobileNoErr] = useState(false)
    const [anotherMobileNoErr, setAnotherMobileNoErr] = useState(false)
    const [whatsappNoErr, setWhatsappNoErr] = useState(false)
    const [lastQualificationErr, setLastQualificationErr] = useState(false)
    const [dateOfBirthErr, setDateOfBirthErr] = useState(false)
    const [genderErr, setGenderErr] = useState(false)
    const [languageErr, setLanguageErr] = useState(false)
    const [courseErr, setCourseErr] = useState(false)
    const [informErr, setInformErr] = useState(false)
    const [descriptionErr, setDescriptionErr] = useState(false)






    const [key, setKey] = useState('')

    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


    const [courseData, setCourseData] = useState([])


    useEffect(() => {
        getCoursesData()
        setTimeout(() => {
            hideLoader()
        }, 1000);
    }, [])

    const getCoursesData = () => {
        var data = {}
        allCourse(data).then(result => {
            setCourseData(result.data.response)
        })
    }

    const onSubmit = () => {
        var err = 0
        setNameErr(false)
        setFatherNameErr(false)
        setFatherOccupationErr(false)
        setCasteErr(false)
        setAddressErr(false)
        setPinCodeErr(false)
        setEmailErr(false)
        setEmailValidErr(false)
        setMobileNoErr(false)
        setAnotherMobileNoErr(false)
        setWhatsappNoErr(false)
        setLastQualificationErr(false)
        setDateOfBirthErr(false)
        setGenderErr(false)
        setLanguageErr(false)
        setCourseErr(false)
        setInformErr(false)
        setDescriptionErr(false)

        if (name.trim() == '') {
            setNameErr(true)
            err++
        }
        if (fatherName.trim() == '') {
            setFatherNameErr(true)
            err++
        }
        if (fatherOccupation.trim() == '') {
            setFatherOccupationErr(true)
            err++
        }
        if (caste == '') {
            setCasteErr(true)
            err++
        }
        if (address.trim() == '') {
            setAddressErr(true)
            err++
        }
        if (pinCode.trim() == '') {
            setPinCodeErr(true)
            err++
        }
        if (email.trim() == '') {
            setEmailErr(true)
            err++
        }
        if (email.trim()) {
            if (!email.trim().match(mailformat)) {
                setEmailValidErr(true)
                err++
            }
        }
        if (mobileNo == '') {
            setMobileNoErr(true)
            err++
        }
        if (anotherMobileNo == '') {
            setAnotherMobileNoErr(true)
            err++
        }
        if (whatsappNo == '') {
            setWhatsappNoErr(true)
            err++
        }
        if (lastQualification == '') {
            setLastQualificationErr(true)
            err++
        }
        if (dateOfBirth == '') {
            setDateOfBirthErr(true)
            err++
        }
        if (gender == '') {
            setGenderErr(true)
            err++
        }
        if (language == '') {
            setLanguageErr(true)
            err++
        }
        if (course == '') {
            setCourseErr(true)
            err++
        }
        if (inform == '') {
            setInformErr(true)
            err++
        }
        if (description == '') {
            setDescriptionErr(true)
            err++
        }
        if (err == 0) {
            var data = {
                "name": name,
                "fatherName": fatherName,
                "fatherOccupation": fatherOccupation,
                "caste": caste,
                "address": address,
                "pinCode": pinCode,
                "email": email,
                "mobileNo": mobileNo,
                "anotherMobileNo": anotherMobileNo,
                "whatsappNo": whatsappNo,
                "lastQualification": lastQualification,
                "dateOfBirth": dateOfBirth,
                "gender": gender,
                "language": language,
                "course": course,
                "inform": inform,
                "description": description,
            }
            showLoader()
            addEnquiry(data).then(result => {
                hideLoader()
                if (result.data.success) {
                    setKey(result.data.response.key)
                    handleShow()
                }else{
                    NotificationManager.error(result.data.message);
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
                                <h2>Enquiry Form</h2>
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb justify-content-center">
                                        <li className="breadcrumb-item" onClick={() => { goto("/") }}><a>Home</a></li>
                                        <li className="breadcrumb-item active" aria-current="page" onClick={() => { goto("/enquiry") }}>Enquiry</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="enquiry-section map-address-section padding-tb section-bg">
                <div className="container">
                    <div className="section-wrapper">
                        <div className='enquiry-form'>

                            <div className='enquiry-body'>
                                <div className='row'>
                                    <div className='col-sm-4'>
                                        <div className='mt-2'>
                                            <lable className='font-weight-500 color-blue'>Name:</lable>
                                            <div className='mt-2'>
                                                <input type='text' className={`form-control input-border-blue ${nameErr ? "error-fill" : ""}`} value={name} onChange={(e) => { setName(e.target.value) }} />
                                            </div>
                                            {
                                                nameErr ? <span className='color-red font-size-14'>Enter the name</span> : null
                                            }
                                        </div>
                                    </div>
                                    <div className='col-sm-4'>
                                        <div className='mt-2'>
                                            <lable className='font-weight-500 color-blue'>Father's Name:</lable>
                                            <div className='mt-2'>
                                                <input type='text' className={`form-control input-border-blue ${fatherNameErr ? "error-fill" : ""}`} value={fatherName} onChange={(e) => { setFatherName(e.target.value) }} />
                                            </div>
                                            {
                                                fatherNameErr ? <span className='color-red font-size-14'>Enter the father's name</span> : null
                                            }
                                        </div></div>


                                    <div className='col-sm-4'>
                                        <div className='mt-2'>
                                            <lable className='font-weight-500 color-blue'>Father's Occupation:</lable>
                                            <div className='mt-2'>
                                                <input type='text' className={`form-control input-border-blue ${fatherOccupationErr ? "error-fill" : ""}`} value={fatherOccupation} onChange={(e) => { setFatherOccupation(e.target.value) }} />
                                            </div>
                                            {
                                                fatherOccupationErr ? <span className='color-red font-size-14'>Enter the father's occupation</span> : null
                                            }
                                        </div>
                                    </div>
                                    <div className='col-sm-4'>
                                        <div className='mt-2'>
                                            <lable className='font-weight-500 color-blue'>Caste:</lable>
                                            <div className='mt-2'>
                                                <select className={`form-select input-border-blue ${casteErr ? "error-fill" : ""}`} value={caste} onChange={(e) => { setCaste(e.target.value) }}>
                                                    <option value=''>Select</option>
                                                    <option value='Gen'>Gen</option>
                                                    <option value='SC'>SC</option>
                                                    <option value='ST'>ST</option>
                                                    <option value='OBC-A'>OBC-A</option>
                                                    <option value='OBC-B'>OBC-B</option>
                                                    <option value='Others'>Others</option>
                                                </select>
                                            </div>
                                            {
                                                casteErr ? <span className='color-red font-size-14'>Select the caste</span> : null
                                            }
                                        </div>
                                    </div>

                                    <div className='col-sm-4'>
                                        <div className='mt-2'>
                                            <lable className='font-weight-500 color-blue'>Address:</lable>
                                            <div className='mt-2'>
                                                <textarea className={`form-control input-border-blue ${addressErr ? "error-fill" : ""}`} value={address} onChange={(e) => { setAddress(e.target.value) }}>

                                                </textarea>
                                            </div>
                                            {
                                                addressErr ? <span className='color-red font-size-14'>Enter the address</span> : null
                                            }
                                        </div>
                                    </div>
                                    <div className='col-sm-4'>
                                        <div className='mt-2'>
                                            <lable className='font-weight-500 color-blue'>Pin Code:</lable>
                                            <div className='mt-2'>
                                                <input type='text' className={`form-control input-border-blue ${pinCodeErr ? "error-fill" : ""}`} maxLength={6} value={pinCode} onChange={(e) => { setPinCode(e.target.value) }} />
                                            </div>
                                            {
                                                pinCodeErr ? <span className='color-red font-size-14'>Enter the pin code</span> : null
                                            }
                                        </div></div>
                                    <div className='col-sm-4'>
                                        <div className='mt-2'>
                                            <lable className='font-weight-500 color-blue'>Email ID:</lable>
                                            <div className='mt-2'>
                                                <input type='text' className={`form-control input-border-blue ${emailErr ? "error-fill" : ""}`} value={email} onChange={(e) => { setEmail(e.target.value) }} />
                                            </div>
                                            {
                                                emailErr ? <span className='color-red font-size-14'>Enter the email</span> : null
                                            }
                                            {
                                                emailValidErr ? <div className='color-red font-size-14'>Enter Valid Email</div> : null
                                            }
                                        </div></div>


                                    <div className='col-sm-4'>
                                        <div className='mt-2'>
                                            <lable className='font-weight-500 color-blue'>Mobile No.:</lable>
                                            <div className='mt-2'>
                                                <input type='text' maxLength={10} className={`form-control input-border-blue ${mobileNoErr ? "error-fill" : ""}`} value={mobileNo} onChange={(e) => { setMobileNo(e.target.value) }} />
                                            </div>
                                            {
                                                mobileNoErr ? <span className='color-red font-size-14'>Enter the mobile no.</span> : null
                                            }
                                        </div>
                                    </div>
                                    <div className='col-sm-4'>
                                        <div className='mt-2'>
                                            <lable className='font-weight-500 color-blue'>Parents Mobile No.:</lable>
                                            <div className='mt-2'>
                                                <input type='text' maxLength={10} className={`form-control input-border-blue ${anotherMobileNoErr ? "error-fill" : ""}`} value={anotherMobileNo} onChange={(e) => { setAnotherMobileNo(e.target.value) }} />
                                            </div>
                                            {
                                                anotherMobileNoErr ? <span className='color-red font-size-14'>Enter the parents mobile no.</span> : null
                                            }
                                        </div>
                                    </div>
                                    <div className='col-sm-4'>
                                        <div className='mt-2'>
                                            <lable className='font-weight-500 color-blue'>Whatsapp No.:</lable>
                                            <div className='mt-2'>
                                                <input type='text' maxLength={10} className={`form-control input-border-blue ${whatsappNoErr ? "error-fill" : ""}`} value={whatsappNo} onChange={(e) => { setWhatsappNo(e.target.value) }} />
                                            </div>
                                            {
                                                whatsappNoErr ? <span className='color-red font-size-14'>Enter the whatsapp no.</span> : null
                                            }
                                        </div>
                                    </div>



                                    <div className='col-sm-4'>
                                        <div className='mt-2'>
                                            <lable className='font-weight-500 color-blue'>Last Qualification:</lable>
                                            <div className='mt-2'>
                                                <input type='text' className={`form-control input-border-blue ${lastQualificationErr ? "error-fill" : ""}`} value={lastQualification} onChange={(e) => { setLastQualification(e.target.value) }} />
                                            </div>
                                            {
                                                lastQualificationErr ? <span className='color-red font-size-14'>Enter the last qualification</span> : null
                                            }
                                        </div>
                                    </div>
                                    <div className='col-sm-4'>
                                        <div className='mt-2'>
                                            <lable className='font-weight-500 color-blue'>Date of Birth:</lable>
                                            <div className='mt-2'>
                                                <input type='date' className={`form-control input-border-blue ${dateOfBirthErr ? "error-fill" : ""}`} value={dateOfBirth} onChange={(e) => { setDateOfBirth(e.target.value) }} />
                                            </div>
                                            {
                                                dateOfBirthErr ? <span className='color-red font-size-14'>Enter the date of birth</span> : null
                                            }
                                        </div>
                                    </div>
                                    <div className='col-sm-4'>
                                        <div className='mt-2'>
                                            <lable className='font-weight-500 color-blue'>Gender:</lable>
                                            <div className='mt-2'>
                                                <select className={`form-select input-border-blue ${genderErr ? "error-fill" : ""}`} value={gender} onChange={(e) => { setGender(e.target.value) }}>
                                                    <option value=''>Select</option>
                                                    <option value='Male'>Male</option>
                                                    <option value='Female'>Female</option>
                                                    <option value='Transgender'>Transgender</option>
                                                </select>
                                            </div>
                                            {
                                                genderErr ? <span className='color-red font-size-14'>Select the gender</span> : null
                                            }
                                        </div>
                                    </div>


                                    <div className='mt-4'>
                                        <lable className='font-weight-500 color-blue bg-lab-cus'>Which language you want to study?</lable>
                                        <div className='mt-3 d-flex'>
                                            <div className='fm_inr_dv me-5'>
                                                <input type='radio' name='language' id='bengali' className='mx-2' value='Bengali' onChange={(e) => { setLanguage(e.target.value) }} />
                                                <label htmlFor='bengali' className='font-weight-500 color-blue'>Bengali</label>

                                            </div>
                                            <div className='fm_inr_dv me-5'>
                                                <input type='radio' name='language' id='english' className='mx-2' value='English' onChange={(e) => { setLanguage(e.target.value) }} />
                                                <label htmlFor='english' className='font-weight-500 color-blue'>English</label>

                                            </div>
                                            <div className='fm_inr_dv me-5'>
                                                <input type='radio' name='language' id='hindi' className='mx-2' value='Hindi' onChange={(e) => { setLanguage(e.target.value) }} />
                                                <label htmlFor='hindi' className='font-weight-500 color-blue'>Hindi</label>

                                            </div>


                                        </div>
                                        {
                                            languageErr ? <span className='color-red font-size-14'>Select the language</span> : null
                                        }
                                    </div>
                                </div>
                                <div className='mt-2'>
                                    <lable className='font-weight-500 color-blue  bg-lab-cus mb-3'>Willing Course (✓):</lable>
                                    <div className='mt-2'>
                                        <div className='row'>
                                            {
                                                courseData.map((item, index) => (
                                                    <div className='col-sm-4'>
                                                        <div className='fm_inr_dv'>
                                                            <input
                                                                type='checkbox'
                                                                checked={course === item.course}
                                                                value={item.course}
                                                                onChange={(e) => { setCourse(e.target.value) }}
                                                            />
                                                            <label className='mx-2 color-blue'>{item.course}<span className='color-blue'> ({item.courseApprovedBy})</span></label>
                                                        </div>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    </div>
                                    {
                                        courseErr ? <span className='color-red font-size-14'>Select the course</span> : null
                                    }
                                </div>
                                <div className='mt-2'>
                                    <lable className='font-weight-500 color-blue  bg-lab-cus mb-3'>How you inform by</lable>
                                    <div className='mt-3 d-flex howyou'>
                                        <div className='fm_inr_dv me-5'><input type='radio' name='inform' id='print_media' className='mx-2' value='Print Media' onChange={(e) => { setInform(e.target.value) }} />
                                            <label htmlFor='print_media' className='font-weight-500 color-blue'>Print Media</label>

                                        </div>
                                        <div className='fm_inr_dv me-5'><input type='radio' name='inform' id='social_media' className='mx-2' value='Social Media' onChange={(e) => { setInform(e.target.value) }} />
                                            <label htmlFor='social_media' className='font-weight-500 color-blue'>Social Media</label>

                                        </div>
                                        <div className='fm_inr_dv me-5'><input type='radio' name='inform' id='reference' className='mx-2' value='Reference' onChange={(e) => { setInform(e.target.value) }} />
                                            <label htmlFor='reference' className='font-weight-500 color-blue'>Reference</label>

                                        </div>
                                    </div>
                                    {
                                        informErr ? <span className='color-red font-size-14'>Select the inform by</span> : null
                                    }
                                </div>

                                <div className='mt-2'>
                                    <lable className='font-weight-500 color-blue'>Course Fees / Payment History:</lable>
                                    <div className='mt-2 fm_inr_dv'>
                                        <textarea className={`form-control input-border-blue ${descriptionErr ? "error-fill" : ""}`} value={description} onChange={(e) => { setDescription(e.target.value) }}></textarea>
                                    </div>
                                    {
                                        descriptionErr ? <span className='color-red font-size-14'>Enter the description</span> : null
                                    }
                                </div>



                                <div className='mx-auto mt-4 text-center'>
                                    <button className='btn btn-primary btn-lg' onClick={onSubmit}><i class="fa fa-paper-plane-o"></i> Submit</button>
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


            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Thank you for Enquiry</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Your Enquiry is successfull added. Your enquiry key is {key}.
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>Ok</Button>
                </Modal.Footer>
            </Modal>

            <NotificationContainer />

        </>
    )
}
