import React, { useEffect, useState } from 'react'
import Logo from '../../assets/images/logo.jpeg'
import { allSession } from '../../Services/sessionServices'
import { allCourse } from '../../Services/courseServices'

export default function Admission() {

    const [sessionList, setSessionList]=useState([])
    const [courseList, setCourseList]=useState([])



    useEffect(()=>{
        allSessionFun()
        allCourseFun()
    }, [])

    const allSessionFun = () =>{
        var data ={}
        allSession(data).then(result=>{
            setSessionList(result.data.response)
        })
    }

    const allCourseFun = () =>{
        var data ={}
        allCourse (data).then(result=>{
            setCourseList(result.data.response)
        })
    }




    return (
        <>
            <div className='admission-form'>
                <div className='admisson-head'>
                <div><img src={Logo} className='logo-admission'/></div>
                    Admission Form
                </div>
                <div className='admission-body mt-2'>
                    <div>
                        <label>Session</label>
                        <div className='mt-2'>
                            <select className='form-control'>
                                <option>Select</option>
                                {
                                    sessionList.map((item,i)=>(
                                        <option>{item.start}-{item.end}</option>
                                    ))
                                }
                            </select>
                        </div>
                    </div>
                    <div className='mt-2'>
                        <label>Course Applied</label>
                        <div className='mt-2'>
                            <select className='form-control'>
                                <option>Select</option>
                                {
                                    courseList.map((item,i)=>(
                                        <option>{item.course}</option>
                                    ))
                                }
                            </select>
                        </div>
                    </div>
                    <div className='mt-2'>
                        <label>Medium</label>
                        <div className='mt-2'>
                            <select className='form-control'>
                                <option>Select</option>
                                <option>Bengali</option>
                                <option>English</option>
                                <option>Hindi</option>
                                <option>Urdu</option>
                                <option>Nepali</option>
                            </select>
                        </div>
                    </div>
                    <div className='mt-2'>
                        <label>Subject Applied Method (for B.Ed.)</label>
                        <div className='mt-2'>
                            <input type='text' className='form-control' />
                        </div>
                    </div>
                    <div className='mt-2'>
                        <label>Candidate Name: (CAPITAL LETTER)</label>
                        <div className='mt-2'>
                            <input type='text' className='form-control' />
                        </div>
                    </div>
                    <div className='mt-2'>
                        <label>Father's Name: (CAPITAL LETTER)</label>
                        <div className='mt-2'>
                            <input type='text' className='form-control' />
                        </div>
                    </div>
                    <div className='mt-2'>
                        <label>Mother's Name: (CAPITAL LETTER)</label>
                        <div className='mt-2'>
                            <input type='text' className='form-control' />
                        </div>
                    </div>
                    <div className='mt-2'>
                        <label>Date of Birth</label>
                        <div className='mt-2'>
                            <input type='date' className='form-control' />
                        </div>
                    </div>
                    <div className='mt-2'>
                        <label>Category</label>
                        <div className='mt-2'>
                            <select className='form-control'>
                                <option>Select</option>
                                <option>General</option>
                                <option>ST</option>
                                <option>SC</option>
                                <option>OBC-A</option>
                                <option>OBC-B</option>
                                <option>Others</option>
                            </select>
                        </div>
                    </div>
                    <div className='mt-2'>
                        <label>Present Address</label>
                        <div className='mt-2'>
                            <textarea className='form-control'></textarea>
                        </div>
                    </div>
                    <div className='mt-2'>
                        <label>Pin Code</label>
                        <div className='mt-2'>
                            <input type='text' className='form-control' />
                        </div>
                    </div>
                    <div className='mt-2'>
                        <label>Premanent Address</label>
                        <div className='mt-2'>
                            <textarea className='form-control'></textarea>
                        </div>
                    </div>
                    <div className='mt-2'>
                        <label>Pin Code</label>
                        <div className='mt-2'>
                            <input type='text' className='form-control' />
                        </div>
                    </div>
                    <div className='mt-2'>
                        <label>Email ID</label>
                        <div className='mt-2'>
                            <input type='text' className='form-control' />
                        </div>
                    </div>
                    <div className='mt-2'>
                        <label>Candidate Mobile No.</label>
                        <div className='mt-2'>
                            <input type='text' className='form-control' />
                        </div>
                    </div>
                    <div className='mt-2'>
                        <label>Whatsapp No.</label>
                        <div className='mt-2'>
                            <input type='text' className='form-control' />
                        </div>
                    </div>
                    <div className='mt-2'>
                        <label>Aadhar Card No.</label>
                        <div className='mt-2'>
                            <input type='text' className='form-control' />
                        </div>
                    </div>
                    <div className='mt-2'>
                        <label>Parent's Mobile No.</label>
                        <div className='mt-2'>
                            <input type='text' className='form-control' />
                        </div>
                    </div>
                    <div className='mt-2'>
                        <label>H.S. School Name</label>
                        <div className='mt-2'>
                            <input type='text' className='form-control' />
                        </div>
                    </div>
                    <div className='mt-2'>
                        <label>University last Attended</label>
                        <div className='mt-2'>
                            <input type='text' className='form-control' />
                        </div>
                    </div>
                    <div className='mt-2'>
                        <label>Registration No.</label>
                        <div className='mt-2'>
                            <input type='text' className='form-control' />
                        </div>
                    </div>

                    <div className='mx-auto d-grid gap-2 mt-4'>
                        <button className='btn btn-primary btn-lg'>Submit</button>
                    </div>


                </div>
            </div>
        </>
    )
}
