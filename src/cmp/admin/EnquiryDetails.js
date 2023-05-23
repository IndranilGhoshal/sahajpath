import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { addDescription, enquiryDetails } from '../../Services/enquiryServices'

export default function EnquiryDetails() {

    let { id } = useParams()
    let navigate = useNavigate()


    const [details, setDetails] = useState({})
    const [adminDescription, setAdminDescription] = useState('')

    useEffect(() => {
        enquiryDetailsFun()
    }, [])

    const enquiryDetailsFun = () => {
        var data = {
            "id": id
        }
        enquiryDetails(data).then(result => {
            setDetails(result.data.response)
        })
    }

    const onApproved = () =>{
        var data = {
            "id":id,
            "adminDescription":adminDescription
        }

        addDescription(data).then(result=>{
            if(result.data.success){
                navigate("/admin/enquirylist")
            }
        })
    }

    return (
        <>
            <div>Enquiry Details</div>
            <div>
                <div className='row'>
                    <div className='col-sm-6'>
                        <label>Name</label>
                    </div>

                    <div className='col-sm-6'>
                        <div>{details.name}</div>
                    </div>
                </div>

                <div className='row'>
                    <div className='col-sm-6'>
                        <label>Father's Name</label>
                    </div>

                    <div className='col-sm-6'>
                        <div>{details.fatherName}</div>
                    </div>
                </div>
                
                <div className='row'>
                    <div className='col-sm-6'>
                        <label>Father's Occupation</label>
                    </div>

                    <div className='col-sm-6'>
                        <div>{details.fatherOccupation}</div>
                    </div>
                </div>

                <div className='row'>
                    <div className='col-sm-6'>
                        <label>Caste</label>
                    </div>

                    <div className='col-sm-6'>
                        <div>{details.caste}</div>
                    </div>
                </div>

                <div className='row'>
                    <div className='col-sm-6'>
                        <label>Address</label>
                    </div>

                    <div className='col-sm-6'>
                        <div>{details.address}</div>
                    </div>
                </div>

                <div className='row'>
                    <div className='col-sm-6'>
                        <label>Pin Code</label>
                    </div>

                    <div className='col-sm-6'>
                        <div>{details.pinCode}</div>
                    </div>
                </div>

                <div className='row'>
                    <div className='col-sm-6'>
                        <label>Email Id</label>
                    </div>

                    <div className='col-sm-6'>
                        <div>{details.email}</div>
                    </div>
                </div>

                <div className='row'>
                    <div className='col-sm-6'>
                        <label>Mobile No.</label>
                    </div>

                    <div className='col-sm-6'>
                        <div>{details.mobileNo}</div>
                    </div>
                </div>

                <div className='row'>
                    <div className='col-sm-6'>
                        <label>Another Mobile No.</label>
                    </div>

                    <div className='col-sm-6'>
                        <div>{details.anotherMobileNo}</div>
                    </div>
                </div>

                <div className='row'>
                    <div className='col-sm-6'>
                        <label>Whatsapp No.</label>
                    </div>

                    <div className='col-sm-6'>
                        <div>{details.whatsappNo}</div>
                    </div>
                </div>

                <div className='row'>
                    <div className='col-sm-6'>
                        <label>Last Qualification</label>
                    </div>

                    <div className='col-sm-6'>
                        <div>{details.lastQualification}</div>
                    </div>
                </div>

                <div className='row'>
                    <div className='col-sm-6'>
                        <label>Date of Birth</label>
                    </div>

                    <div className='col-sm-6'>
                        <div>{details.dateOfBirth}</div>
                    </div>
                </div>


                <div className='row'>
                    <div className='col-sm-6'>
                        <label>Gender</label>
                    </div>

                    <div className='col-sm-6'>
                        <div>{details.gender}</div>
                    </div>
                </div>


                <div className='row'>
                    <div className='col-sm-6'>
                        <label>Language</label>
                    </div>

                    <div className='col-sm-6'>
                        <div>{details.language}</div>
                    </div>
                </div>


                <div className='row'>
                    <div className='col-sm-6'>
                        <label>Willing Course</label>
                    </div>

                    <div className='col-sm-6'>
                        <div>{details.course}</div>
                    </div>
                </div>


                <div className='row'>
                    <div className='col-sm-6'>
                        <label>Inform by</label>
                    </div>

                    <div className='col-sm-6'>
                        <div>{details.inform}</div>
                    </div>
                </div>


                <div className='row'>
                    <div className='col-sm-6'>
                        <label>Description</label>
                    </div>

                    <div className='col-sm-6'>
                        <div>{details.description}</div>
                    </div>
                </div>

                <div className='row'>
                    <div className='col-sm-6'>
                        <label>Status</label>
                    </div>

                    <div className='col-sm-6'>
                        <div>{details.status}</div>
                    </div>
                </div>

                <div className='row'>
                    <div className='col-sm-6'>
                        <label>Admin Description</label>
                    </div>

                    <div className='col-sm-6'>
                        <div>
                            <textarea className='form-control' value={adminDescription} onChange={(e)=>{setAdminDescription(e.target.value)}}>

                            </textarea>
                        </div>
                    </div>
                </div>

            
                <div className='mx-auto d-grid gap-2 mt-4'>
                        <button className='btn btn-primary btn-lg' onClick={onApproved}>Approved</button>
                    </div>

            </div>

        </>
    )
}
