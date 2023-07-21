import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { addDescription, enquiryDetails } from '../../Services/enquiryServices'
import { NotificationContainer, NotificationManager } from 'react-notifications';
import { hideLoader, showLoader } from '../../Services/common'


export default function EnquiryDetails() {

    let { id } = useParams()
    let navigate = useNavigate()


    const [details, setDetails] = useState({})
    const [adminDescription, setAdminDescription] = useState('')

    useEffect(() => {
        enquiryDetailsFun()
        setTimeout(() => {
            hideLoader()
        }, 1000);
    }, [])

    const enquiryDetailsFun = () => {
        var data = {
            "id": id
        }
        enquiryDetails(data).then(result => {
            setDetails(result.data.response)
        })
    }

    const onApproved = () => {

        var err = 0

        if (adminDescription == '') {
            NotificationManager.error("Enter description");
            err++
        }

        if (err == 0) {
            var data = {
                "id": id,
                "adminDescription": adminDescription
            }
            showLoader()
            addDescription(data).then(result => {
                hideLoader()
                if (result.data.success) {
                    navigate("/admin/enquirylist")
                } else {
                    NotificationManager.error(result.data.message);
                }
            })
        }

    }

    return (
        <>
            <div className='session-list-head'>Enquiry Details</div>
            <div className='regst_stus'>
                <div className='row'>
                    <div className='col-sm-12'>
                        <ul>
                            <li><label>Name:</label><div>{details.name}</div></li>
                            <li><label>Father's Name:</label><div>{details.fatherName}</div></li>
                            <li><label>Father's Occupation:</label><div>{details.fatherOccupation}</div></li>
                            <li><label>Caste:</label> <div>{details.caste}</div></li>
                            <li><label>Address:</label><div>{details.address}</div></li>
                            <li><label>Pin Code:</label><div>{details.pinCode}</div></li>
                            <li><label>Email Id:</label><div>{details.email}</div></li>
                            <li><label>Mobile No.:</label><div>{details.mobileNo}</div></li>
                            <li><label>Parents Mobile No.:</label><div>{details.anotherMobileNo}</div></li>
                            <li><label>Whatsapp No.:</label><div>{details.whatsappNo}</div></li>
                            <li><label>Last Qualification:</label><div>{details.lastQualification}</div></li>
                            <li><label>Date of Birth:</label><div>{details.dateOfBirth}</div></li>
                            <li><label>Gender:</label><div>{details.gender}</div></li>
                            <li><label>Language:</label><div>{details.language}</div></li>
                            <li><label>Willing Course:</label><div>{details.course}</div></li>
                            <li><label>Inform by:</label><div>{details.inform}</div></li>
                            <li><label>Description:</label><div>{details.description}</div></li>
                            <li><label>Status:</label><div><span class="badge bg-warning text-dark">{details.status}</span></div></li>
                            <li><label>Admin Description:</label>

                                {
                                    details.status == "Pending"
                                        ?
                                        <textarea className='form-control' value={adminDescription} onChange={(e) => { setAdminDescription(e.target.value) }}>
                                        </textarea>
                                        :
                                        <div>{details.admin_description}</div>

                                }

                            </li>
                        </ul>
                    </div>
                </div>


                         {
                        details.status == "Pending"
                        ?
                        <div className='mx-auto d-grid gap-2 mt-4'>
                            <button className='btn btn-primary btn-lg submits' onClick={onApproved}>Approved</button>
                        </div>
                        :null
                            }



            </div>
            <NotificationContainer />
        </>
    )
}
