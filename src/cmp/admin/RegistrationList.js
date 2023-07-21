import React, { useEffect, useState } from 'react'
import { allUsers } from '../../Services/userServices'

import { useNavigate } from 'react-router-dom'
import { hideLoader, showLoader } from '../../Services/common'



export default function RegistrationList() {

  var navigate = useNavigate()

  const [registrationList, setRegistrationList] = useState([])

  useEffect(() => {
    allRegistrationFun()
    setTimeout(() => {
      hideLoader()
    }, 1000);
  }, [])

  const allRegistrationFun = () => {
    var data = {
    }
    allUsers(data).then(result => {
      setRegistrationList(result.data.response)
    })
  }

  const goto = (val) =>{
    showLoader()
    navigate("/admin/registrationdetails/"+val)
    setTimeout(() => {
      hideLoader()
    }, 1000);
  }

  return (
    <>
     <div className='enquiry-list'>
        <div className='enquiry-list-head'>
        Registration List
        </div>
        <div className='enquiry-list-body'>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Sl. No.</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Contact No.</th>
            <th scope="col">Status</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
          {
            registrationList.length == 0 ?
              <>
                <tbody>
                  <tr>
                    <td colSpan='6' className='text-center'>Data not Found.</td>
                  </tr>
                </tbody>
              </>
              :
              <>
                {
                  registrationList.map((item, i) => (
                    <tbody>
                      <tr>
                        <th scope="row">{i + 1}.</th>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.contactNo}</td>
                        <td>
                          {
                            item.status == "Paid"?<span className="badge bg-success">{item.status}</span>:null
                          }
                          {
                            item.status == "Not Paid"?<span className="badge bg-warning text-dark">{item.status}</span>:null
                          }
                          
                          </td>
                        <td><button type="button" className="btn btn-primary btn-sm" onClick={()=>{goto(item.id)}}><i class="icofont-eye-alt"></i> View</button></td>
                      </tr>
                    </tbody>
                  ))
                }
              </>
          }
      </table>
</div></div>

    </>
  )
}
