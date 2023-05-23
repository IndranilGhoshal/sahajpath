import React, { useState, useEffect } from 'react'
import { allEnquiry } from '../../Services/enquiryServices'
import { useNavigate } from 'react-router-dom'
export default function EnquiryList() {

  const [enquiryList, setEnquiryList] = useState([])

  var navigate = useNavigate()

  useEffect(() => {
    allEnquiryFun()
  
  }, [])
  

  const allEnquiryFun=()=>{
    var data = {

    }
    allEnquiry(data).then(result=>{
      setEnquiryList(result.data.response)
    })
  }

  const goto = (val) =>{

    navigate("/admin/enquirydetails/"+val)

  }


  return (
    <>
      <div className='enquiry-list'>
        <div className='enquiry-list-head'>
          Enquiry List
        </div>
        <div className='enquiry-list-body'>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Sl. No.</th>
                <th scope="col">Name</th>
                <th scope="col">Email Id</th>
                <th scope="col">Status</th>
                <th scope="col">Action</th>
              </tr>
            </thead>

            {
                            enquiryList.length == 0 ?
                                <>
                                    <tbody>
                                        <tr>
                                            <td colSpan='5s' className='text-center'>No Data Found</td>
                                        </tr>
                                    </tbody>
                                </>
                                :
                                <>
                                    {
                                        enquiryList.map((item, i) => (
                                            <tbody>
                                                <tr>
                                                    <td scope="row">{i + 1}.</td>
                                                    <td>{item.name}</td>
                                                    <td>{item.email}</td>
                                                    <td>{item.status}</td>

                                                    <td>
                                                        <button type="button" className="btn btn-primary btn-sm" onClick={()=>{goto(item.id)}}>View</button>
                                                        <button type="button" className="btn btn-secondary btn-sm mx-2">Delete</button>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        ))
                                    }
                                </>
                        }
          </table>
        </div>

      </div>

    </>
  )
}
