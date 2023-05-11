import React, { useState } from 'react'
import Logo from '../assets/images/logo.jpeg'

export default function Enquiry() {


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


    const onSubmit = () => {
        var err = 0
        setNameErr(false)
        setFatherNameErr(false)
        setFatherOccupationErr(false)
        setCasteErr(false)
        setAddressErr(false)
        setPinCodeErr(false)
        setEmailErr(false)
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

        if (name == '') {
            setNameErr(true)
            err++
        }
        if (fatherName == '') {
            setFatherNameErr(true)
            err++
        }
        if (fatherOccupation == '') {
            setFatherOccupationErr(true)
            err++
        }
        if (caste == '') {
            setCasteErr(true)
            err++
        }
        if (address == '') {
            setAddressErr(true)
            err++
        }
        if (pinCode == '') {
            setPinCodeErr(true)
            err++
        }
        if (email == '') {
            setEmailErr(true)
            err++
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

        if (err == 0) {

            console.log(data)
        }



    }







    return (
        <>
            <div className='enquiry-form my-5'>
                <div className='enquiry-head'>
                    <div><img src={Logo} className='logo-enquiry' /></div>
                    <div className='enquiry-title'>Enquiry Form</div>
                </div>
                <div className='enquiry-body'>
                    <div className='mt-2'>
                        <lable className='font-weight-500 color-blue'>Name:</lable>
                        <div className='mt-2'>
                            <input type='text' className={`form-control input-border-blue ${nameErr ? "error-fill" : ""}`} value={name} onChange={(e) => { setName(e.target.value) }} />
                        </div>
                        {
                            nameErr ? <span className='color-red font-size-14'>Enter the name</span> : null
                        }
                    </div>
                    <div className='mt-2'>
                        <lable className='font-weight-500 color-blue'>Father's Name:</lable>
                        <div className='mt-2'>
                            <input type='text' className={`form-control input-border-blue ${fatherNameErr ? "error-fill" : ""}`} value={fatherName} onChange={(e) => { setFatherName(e.target.value) }} />
                        </div>
                        {
                            fatherNameErr ? <span className='color-red font-size-14'>Enter the father's name</span> : null
                        }
                    </div>

                    <div className='row'>
                        <div className='col-sm-6'>
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
                        <div className='col-sm-6'>
                            <div className='mt-2'>
                                <lable className='font-weight-500 color-blue'>Caste:</lable>
                                <div className='mt-2'>
                                    <select className={`form-control input-border-blue ${casteErr ? "error-fill" : ""}`} value={caste} onChange={(e) => { setCaste(e.target.value) }}>
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
                    </div>

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
                    <div className='mt-2'>
                        <lable className='font-weight-500 color-blue'>Pin Code:</lable>
                        <div className='mt-2'>
                            <input type='text' className={`form-control input-border-blue ${pinCodeErr ? "error-fill" : ""}`} value={pinCode} onChange={(e) => { setPinCode(e.target.value) }} />
                        </div>
                        {
                            pinCodeErr ? <span className='color-red font-size-14'>Enter the pin code</span> : null
                        }
                    </div>
                    <div className='mt-2'>
                        <lable className='font-weight-500 color-blue'>Email ID:</lable>
                        <div className='mt-2'>
                            <input type='text' className={`form-control input-border-blue ${emailErr ? "error-fill" : ""}`} value={email} onChange={(e) => { setEmail(e.target.value) }} />
                        </div>
                        {
                            emailErr ? <span className='color-red font-size-14'>Enter the email</span> : null
                        }
                    </div>

                    <div className='row'>
                        <div className='col-sm-4'>
                            <div className='mt-2'>
                                <lable className='font-weight-500 color-blue'>Mobile No.:</lable>
                                <div className='mt-2'>
                                    <input type='text' className={`form-control input-border-blue ${mobileNoErr ? "error-fill" : ""}`} value={mobileNo} onChange={(e) => { setMobileNo(e.target.value) }} />
                                </div>
                                {
                                    mobileNoErr ? <span className='color-red font-size-14'>Enter the mobile no.</span> : null
                                }
                            </div>
                        </div>
                        <div className='col-sm-4'>
                            <div className='mt-2'>
                                <lable className='font-weight-500 color-blue'>Another Mobile No.:</lable>
                                <div className='mt-2'>
                                    <input type='text' className={`form-control input-border-blue ${anotherMobileNoErr ? "error-fill" : ""}`} value={anotherMobileNo} onChange={(e) => { setAnotherMobileNo(e.target.value) }} />
                                </div>
                                {
                                    anotherMobileNoErr ? <span className='color-red font-size-14'>Enter the another mobile no.</span> : null
                                }
                            </div>
                        </div>
                        <div className='col-sm-4'>
                            <div className='mt-2'>
                                <lable className='font-weight-500 color-blue'>Whatsapp No.:</lable>
                                <div className='mt-2'>
                                    <input type='text' className={`form-control input-border-blue ${whatsappNoErr ? "error-fill" : ""}`} value={whatsappNo} onChange={(e) => { setWhatsappNo(e.target.value) }} />
                                </div>
                                {
                                    whatsappNoErr ? <span className='color-red font-size-14'>Enter the whatsapp no.</span> : null
                                }
                            </div>
                        </div>
                    </div>

                    <div className='row'>
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
                                    <select className={`form-control input-border-blue ${genderErr ? "error-fill" : ""}`} value={gender} onChange={(e) => { setGender(e.target.value) }}>
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
                    </div>

                    <div className='mt-2'>
                        <lable className='font-weight-500 color-blue'>Which language you want to study?</lable>
                        <span className='mt-3 mx-2'>
                            <label htmlFor='bengali' className='font-weight-500 color-blue'>Bengali</label>
                            <input type='radio' name='language' id='bengali' className='mx-2' value='Bengali' onChange={(e) => { setLanguage(e.target.value) }} />
                            <label htmlFor='english' className='font-weight-500 color-blue'>English</label>
                            <input type='radio' name='language' id='english' className='mx-2' value='English' onChange={(e) => { setLanguage(e.target.value) }} />
                            <label htmlFor='hindi' className='font-weight-500 color-blue'>Hindi</label>
                            <input type='radio' name='language' id='hindi' className='mx-2' value='Hindi' onChange={(e) => { setLanguage(e.target.value) }} />
                        </span>
                    </div>
                    <div className='mt-2'>
                        <lable className='font-weight-500 color-blue'>Willing Course (✓):</lable>
                        <div className='mt-2'>
                            <div className='row'>
                                <div className='col-sm-6'>
                                    <input
                                        type='checkbox'
                                        checked={course === "M.P / H.S"}
                                        value='M.P / H.S'
                                        onChange={(e) => { setCourse(e.target.value) }}
                                    />
                                    <label className='mx-2 color-blue'>M.P / H.S</label>
                                    <div className='mx-3 color-blue'>(Board/Council)</div>
                                </div>
                                <div className='col-sm-6'>
                                    <input
                                        type='checkbox'
                                        checked={course === "BBA / MBA (HR/FINANCE/SALES & MKT.)"}
                                        value='BBA / MBA (HR/FINANCE/SALES & MKT.)'
                                        onChange={(e) => { setCourse(e.target.value) }}
                                    />
                                    <label className='mx-2 color-blue'>BBA / MBA (HR/FINANCE/SALES & MKT.)</label>
                                    <div className='mx-3 color-blue'>(UGC Approved)</div>
                                </div>
                            </div>
                            <div className='row mt-2'>
                                <div className='col-sm-6'>
                                    <input
                                        type='checkbox'
                                        checked={course === "B.A / B.Sc / B.Com"}
                                        value='B.A / B.Sc / B.Com'
                                        onChange={(e) => { setCourse(e.target.value) }}
                                    />
                                    <label className='mx-2 color-blue'>B.A / B.Sc / B.Com</label>
                                    <div className='mx-3 color-blue'>(UGC Approved)</div>
                                </div>
                                <div className='col-sm-6'>
                                    <input
                                        type='checkbox'
                                        checked={course === "BCA / MCA / B.Sc (IT) / M.Sc (IT)"}
                                        value='BCA / MCA / B.Sc (IT) / M.Sc (IT)'
                                        onChange={(e) => { setCourse(e.target.value) }}
                                    />
                                    <label className='mx-2 color-blue'>BCA / MCA / B.Sc (IT) / M.Sc (IT)</label>
                                    <div className='mx-3 color-blue'>(UGC Approved)</div>
                                </div>
                            </div>
                            <div className='row mt-2'>
                                <div className='col-sm-6'>
                                    <input
                                        type='checkbox'
                                        checked={course === "M.A / M.Sc / M.Com"}
                                        value='M.A / M.Sc / M.Com'
                                        onChange={(e) => { setCourse(e.target.value) }}
                                    />
                                    <label className='mx-2 color-blue'>M.A / M.Sc / M.Com</label>
                                    <div className='mx-3 color-blue'>(UGC Approved)</div>
                                </div>
                                <div className='col-sm-6'>
                                    <input
                                        type='checkbox'
                                        checked={course === "B. Lib / B.Lis / M.Lis / M.Lis"}
                                        value='B. Lib / B.Lis / M.Lis / M.Lis'
                                        onChange={(e) => { setCourse(e.target.value) }}
                                    />
                                    <label className='mx-2 color-blue'>B. Lib / B.Lis / M.Lis / M.Lis</label>
                                    <div className='mx-3 color-blue'>(UGC Approved)</div>
                                </div>
                            </div>
                            <div className='row mt-2'>
                                <div className='col-sm-6'>
                                    <input
                                        type='checkbox'
                                        checked={course === "D.El.Ed / B.Ed. / M.Ed"}
                                        value='D.El.Ed / B.Ed. / M.Ed'
                                        onChange={(e) => { setCourse(e.target.value) }}
                                    />
                                    <label className='mx-2 color-blue'>D.El.Ed / B.Ed. / M.Ed</label>
                                    <div className='mx-3 color-blue'>(NCTE Approved)</div>
                                </div>
                                <div className='col-sm-6'>
                                    <input
                                        type='checkbox'
                                        checked={course === "Dep. Engg.(Civil/Mechanical/Electrical)"}
                                        value='Dep. Engg.(Civil/Mechanical/Electrical)'
                                        onChange={(e) => { setCourse(e.target.value) }}
                                    />
                                    <label className='mx-2 color-blue'>Dep. Engg.(Civil/Mechanical/Electrical)</label>
                                    <div className='mx-3 color-blue'>(AICTE Approved)</div>
                                </div>
                            </div>
                            <div className='row mt-2'>
                                <div className='col-sm-6'>
                                    <input
                                        type='checkbox'
                                        checked={course === "B.P.Ed / M.P.Ed"}
                                        value='B.P.Ed / M.P.Ed'
                                        onChange={(e) => { setCourse(e.target.value) }}
                                    />
                                    <label className='mx-2 color-blue'>B.P.Ed / M.P.Ed</label>
                                    <div className='mx-3 color-blue'>(NCTE Approved)</div>
                                </div>
                                <div className='col-sm-6'>
                                    <input
                                        type='checkbox'
                                        checked={course === "B.Tech / M.Tech / B.Engg / M.Engg"}
                                        value='B.Tech / M.Tech / B.Engg / M.Engg'
                                        onChange={(e) => { setCourse(e.target.value) }}
                                    />
                                    <label className='mx-2 color-blue'>B.Tech / M.Tech / B.Engg / M.Engg</label>
                                    <div className='mx-3 color-blue'>(AICTE Approved)</div>
                                </div>
                            </div>
                            <div className='row mt-2'>
                                <div className='col-sm-6'>
                                    <input
                                        type='checkbox'
                                        checked={course === "D.Pham / B.Pham / M.Pham / Pham.D"}
                                        value='D.Pham / B.Pham / M.Pham / Pham.D'
                                        onChange={(e) => { setCourse(e.target.value) }}
                                    />
                                    <label className='mx-2 color-blue'>D.Pham / B.Pham / M.Pham / Pham.D</label>
                                    <div className='mx-3 color-blue'>(PCI Approved)</div>
                                </div>
                                <div className='col-sm-6'>
                                    <input
                                        type='checkbox'
                                        checked={course === "M.Phil / P.hd"}
                                        value='M.Phil / P.hd'
                                        onChange={(e) => { setCourse(e.target.value) }}
                                    />
                                    <label className='mx-2 color-blue'>M.Phil / P.hd</label>
                                    <div className='mx-3 color-blue'>(UGC Approved)</div>
                                </div>
                            </div>
                            <div className='row mt-2'>
                                <div className='col-sm-6'>
                                    <input
                                        type='checkbox'
                                        checked={course === "LLB / LLM"}
                                        value='LLB / LLM'
                                        onChange={(e) => { setCourse(e.target.value) }}
                                    />
                                    <label className='mx-2 color-blue'>LLB / LLM</label>
                                    <div className='mx-3 color-blue'>(BCI Approved)</div>
                                </div>
                                <div className='col-sm-6'>
                                    <input
                                        type='checkbox'
                                        checked={course === "other"}
                                        value='other'
                                        onChange={(e) => { setCourse(e.target.value) }}
                                    />
                                    <label className='mx-2 color-blue'>Other</label>
                                    <input className='mx-3 form-control input-border-blue width-50' type='text' />
                                </div>
                            </div>
                            <div className='row mt-2'>
                                <div className='col-sm-12'>
                                    <input
                                        type='checkbox'
                                        checked={course === "ANM / GNM / B.Sc (Nur) / Post Basic Nursing / M.Sc (Nur)"}
                                        value='ANM / GNM / B.Sc (Nur) / Post Basic Nursing / M.Sc (Nur)'
                                        onChange={(e) => { setCourse(e.target.value) }}
                                    />
                                    <label className='mx-2 color-blue'>ANM / GNM / B.Sc (Nur) / Post Basic Nursing / M.Sc (Nur)</label>
                                    <div className='mx-3 color-blue'>(INC Approved)</div>
                                </div>
                            </div>


                        </div>
                    </div>
                    <div className='mt-2'>
                        <lable className='font-weight-500 color-blue'>How you inform by</lable>
                        <span className='mt-2 mx-2'>
                            <label htmlFor='print_media' className='font-weight-500 color-blue'>Print Media</label>
                            <input type='radio' name='inform' id='print_media' className='mx-2' value='Print Media' onChange={(e) => { setInform(e.target.value) }} />
                            <label htmlFor='social_media' className='font-weight-500 color-blue'>Social Media</label>
                            <input type='radio' name='inform' id='social_media' className='mx-2' value='Social Media' onChange={(e) => { setInform(e.target.value) }} />
                            <label htmlFor='reference' className='font-weight-500 color-blue'>Reference</label>
                            <input type='radio' name='inform' id='reference' className='mx-2' value='Reference' onChange={(e) => { setInform(e.target.value) }} />
                        </span>
                    </div>

                    <div className='mt-2'>
                        <lable className='font-weight-500 color-blue'>Course Fees / Payment History:</lable>
                        <div className='mt-2'>
                            <textarea className={`form-control input-border-blue ${descriptionErr ? "error-fill" : ""}`} value={description} onChange={(e) => { setDescription(e.target.value) }}></textarea>
                        </div>
                        {
                            descriptionErr ? <span className='color-red font-size-14'>Enter the description</span> : null
                        }
                    </div>



                    <div className='mx-auto d-grid gap-2 mt-4'>
                        <button className='btn btn-primary btn-lg' onClick={onSubmit}>Submit</button>
                    </div>


                </div>
            </div>
        </>
    )
}
