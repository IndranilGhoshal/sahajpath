import React, { useEffect, useState } from 'react'
import { getUserData, hideLoader } from '../../Services/common'
import { userDetails } from '../../Services/userServices'
import { allCourse } from '../../Services/courseServices'
import { allSession } from '../../Services/sessionServices'


export default function RegistrationStatus() {

    const [details, setDetails] = useState({})

    useEffect(() => {
        registrationDetailsFun()
        allCourseFun()
        allSessionFun()
        setTimeout(() => {
            hideLoader()
        }, 1000);
    }, [])

    const registrationDetailsFun = () => {
        var data = {
            "id": getUserData().response.id
        }
        userDetails(data).then(result => {
            setDetails(result.data.response)
        })
    }

    const [courseList, setCourseList] = useState([])

    const allCourseFun = () => {
        var data = {}
        allCourse(data).then(result => {
            setCourseList(result.data.response)
        })
    }

    const [sessionList, setSessionList] = useState([])

    const allSessionFun = () => {
        var data = {}
        allSession(data).then(result => {
            setSessionList(result.data.response)
        })
    }

    return (
        <>
            <div className='session-list-head'>Registration Status</div>
            <div className='regst_stus'>
                <div className='row'>
                    <div className='col-sm-12'>
                        <ul>
                        <li><label>Session:</label><div>
                                {
                                    sessionList.map((item, i) => (
                                        item.id == details.session ? item.start +'-'+ item.end : null
                                    ))
                                }

                            </div></li>
                            <li><label>Name:</label><div>{details.name}</div></li>
                            <li><label>Email:</label> <div>{details.email}</div></li>
                            <li><label>Gender:</label><div>{details.gender}</div></li>
                            <li><label>Contact No.:</label> <div>{details.contactNo}</div></li>
                            <li> <label>Date of Birth:</label><div>{details.dateOfBirth}</div></li>
                            <li><label>Address:</label><div>{details.address}</div></li>
                            <li><label>Pin Code:</label><div>{details.pinCode}</div></li>
                            <li><label>Email Id:</label><div>{details.email}</div></li>
                            <li><label>Course:</label><div>
                                {
                                    courseList.map((item, i) => (
                                        item.id == details.course ? item.course : null
                                    ))
                                }

                            </div></li>
                            <li> <label>Registration Fees:</label><div>₹{details.registrationFee}</div></li>
                            <li> <label>Status:</label> <div>

                                {
                                    details.status == "Not Paid" ? <span className="badge bg-warning text-dark">{details.status}</span> : null
                                }

                                {
                                    details.status == "Paid" ? <span className="badge bg-success">{details.status}</span> : null
                                }

                                {
                                    details.status == "Not Paid" ? <span className='mx-2'>(Your payment is not done. Please contact the institution.)</span> : null
                                }

                                

                            </div></li>
                        </ul>
                    </div>
                </div>
            </div>


        </>
    )
}
