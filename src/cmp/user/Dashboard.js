import React, { useEffect, useState } from 'react'
import { getUserData, hideLoader } from '../../Services/common'
import { allCourse } from '../../Services/courseServices'
import { useNavigate } from 'react-router'

export default function Dashboard() {

  var navigate = useNavigate()

  useEffect(() => {
    allCourseFun()
    loginCheck()
    setTimeout(() => {
      hideLoader()
    }, 1000);
  }, [])

  const [courseList, setCourseList] = useState([])

  const allCourseFun = () => {
    var data = {}
    allCourse(data).then(result => {
      setCourseList(result.data.response)
    })
  }

  const loginCheck=()=>{
    if(!sessionStorage.getItem('user')){
      navigate("/login")
    }
  }



  return (
    <>
      
      <div className='std_dsbt'>
        <div className="dash-brd"><i class="icofont-dashboard"></i> Student Dashboard</div>
        <div className='std_crd'>
          <div className='std_crd_ic'>
            <i className="icofont-user-alt-3"></i>
          </div>
          <div className='std_crd_ic_dt'>
            <ul>
              <li><label>Course:</label><div>
                {
                  courseList.map((item, i) => (
                    item.id == getUserData().response.course ? item.course : null
                  ))
                }
                </div></li>
              <li><label>Name:</label><div>{getUserData().response.name}</div></li>
              <li><label>Email:</label> <div>{getUserData().response.email}</div></li>
              <li><label>Gender:</label><div>{getUserData().response.gender}</div></li>
              <li><label>Contact No.:</label> <div>{getUserData().response.contactNo}</div></li>
              <li> <label>Date of Birth:</label><div>{getUserData().response.dateOfBirth}</div></li>
              <li><label>Address:</label><div>{getUserData().response.address}</div></li>
              <li><label>Pin Code:</label><div>{getUserData().response.pinCode}</div></li>
            </ul>
          </div></div></div>

    </>
  )
}
