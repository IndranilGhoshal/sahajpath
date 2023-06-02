import React, { useEffect, useState } from 'react'
import { allUsers } from '../../Services/userServices'


export default function RegistrationList() {
  const [registrationList, setRegistrationList] = useState([])

  useEffect(() => {
    allRegistrationFun()
  }, [])

  const allRegistrationFun = () => {
    var data = {
    }
    allUsers(data).then(result => {
      setRegistrationList(result.data.response)
    })
  }

  return (
    <>
      <h3>Registration List</h3>
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
                    <td colSpan='6' className='text-center'>Session not Added. Please add session.</td>
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
                        <td>{item.status}</td>
                        <td><button className='btn btn-primary'>View</button></td>
                      </tr>
                    </tbody>
                  ))
                }
              </>
          }
      </table>


    </>
  )
}
