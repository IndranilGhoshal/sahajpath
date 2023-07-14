import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { userDetails, userStatus } from '../../Services/userServices'
import { allCourse } from '../../Services/courseServices'
import { allSession } from '../../Services/sessionServices'
import { hideLoader, showLoader } from '../../Services/common'
import { NotificationContainer, NotificationManager } from 'react-notifications';



export default function RegistrationDetails() {

    let { id } = useParams()
    let navigate = useNavigate()

    const [details, setDetails] = useState({})
    const [status, setStatus] = useState('')


    useEffect(() => {
        registrationDetailsFun()
        allCourseFun()
        allSessionFun()
    }, [])

    const registrationDetailsFun = () => {
        var data = {
            "id": id
        }
        userDetails(data).then(result => {
            setDetails(result.data.response)
            setStatus(result.data.response.status)
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

    const onApproved = () => {

        var data = {
            "id": id,
            "status": status
        }
        showLoader()
        userStatus(data).then(result => {
            hideLoader()
            if (result.data.success) {
                navigate("/admin/registrationlist")
            }else{
                NotificationManager.error(result.data.message);
            }
        })

    }




    return (
        <>
            <div className='session-list-head'>Registration Details</div>
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
                            <li> <label>Status:</label>
                                <div>
                                    {
                                        details.status == "Paid" ?
                                            <><span class="badge bg-success">{details.status}</span></> :
                                            <select className='form-control' value={status} onChange={(e) => { setStatus(e.target.value) }}>
                                                <option value="Not Paid">Not Paid</option>
                                                <option value="Paid">Paid</option>
                                            </select>
                                    }
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                {
                    details.status == "Paid" ?
                        null :
                        <div className='mx-auto d-grid gap-2 mt-4'>
                            <button className='btn btn-primary btn-lg submits' onClick={onApproved}>Approved</button>
                        </div>
                }

            </div>
            <NotificationContainer />

        </>
    )
}
