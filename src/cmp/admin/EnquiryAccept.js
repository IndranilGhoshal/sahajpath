import React, { useState, useEffect } from 'react'
import { allAcceptEnquiry, deleteEnquiry } from '../../Services/enquiryServices'
import { useNavigate } from 'react-router-dom'
import { NotificationContainer, NotificationManager } from 'react-notifications';


export default function EnquiryAccept() {
    const [enquiryList, setEnquiryList] = useState([])

    var navigate = useNavigate()
  
    useEffect(() => {
      allEnquiryFun()
    
    }, [])
    
  
    const allEnquiryFun=()=>{
      var data = {
  
      }
      allAcceptEnquiry(data).then(result=>{
        setEnquiryList(result.data.response)
      })
    }

    const deleteEnquiryFun = (val) =>{

      var data = {
        "id":val
      }
  
      deleteEnquiry(data).then(result=>{
        if(result.data.success){
          NotificationManager.success(result.data.message);
          allEnquiryFun()
        }else{
          NotificationManager.error(result.data.message);
        }
      })
    }
  
    
  
  
    return (
      <>
        <div className='enquiry-list'>
          <div className='enquiry-list-head'>
            Enquiry Approved List
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
              <tbody>
  
              {
                              enquiryList.length == 0 ?
                                  <>
                                      
                                          <tr>
                                              <td colSpan='5s' className='text-center'>No Data Found</td>
                                          </tr>
                                     
                                  </>
                                  :
                                  <>
                                      {
                                          enquiryList.map((item, i) => (
                                             
                                                  <tr>
                                                      <td scope="row">{i + 1}.</td>
                                                      <td>{item.name}</td>
                                                      <td>{item.email}</td>
                                                      <td><span class="badge bg-success">{item.status}</span></td>
  
                                                      <td>
                                                          <button type="button" className="btn btn-secondary btn-sm" onClick={()=>{deleteEnquiryFun(item.id)}}><i class="icofont-ui-delete"></i> Delete</button>
                                                      </td>
                                                  </tr>
                                             
                                          ))
                                      }
                                  </>
                          }
                          </tbody>
            </table>
          </div>
  
        </div>
        
        <NotificationContainer />
  
      </>
    )
}
