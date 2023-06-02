import React, { useEffect, useState } from 'react'
import { getUserId } from '../../Services/common'
import { userDetails } from '../../Services/userServices'


export default function RegistrationStatus() {

  const [details, setDetails] = useState({})

  useEffect(() => {
    registrationDetailsFun()
}, [])

const registrationDetailsFun = () => {
    var data = {
        "id": getUserId().response.id
    }
    userDetails(data).then(result => {
        setDetails(result.data.response)
    })
}

  return (
    <>
    <h3>RegistrationStatus</h3>

    <div>
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
                        <label>Email</label>
                    </div>

                    <div className='col-sm-6'>
                        <div>{details.email}</div>
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
                        <label>Contact No</label>
                    </div>

                    <div className='col-sm-6'>
                        <div>{details.contactNo}</div>
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
                        <label>Course</label>
                    </div>

                    <div className='col-sm-6'>
                        <div>{details.course}</div>
                    </div>
                </div>

                <div className='row'>
                    <div className='col-sm-6'>
                        <label>Registration Fees</label>
                    </div>

                    <div className='col-sm-6'>
                        <div>{details.registrationFee}</div>
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

              

            </div>
    </div>
    
    
    </>
  )
}
