import React, { useEffect, useState } from 'react'
import { allCourse } from '../../Services/courseServices'
import { allUsers } from '../../Services/userServices'
import { allEnquiry } from '../../Services/enquiryServices'
import { hideLoader } from '../../Services/common'
import { useNavigate } from 'react-router'



export default function DashboardAdmin() {

  var navigate = useNavigate()

  const [registrationList, setRegistrationList] = useState([])
  const [courseList, setCourseList] = useState([])
  const [enquiryList, setEnquiryList] = useState([])



  useEffect(() => {
    loginCheck()
    setTimeout(() => {
      hideLoader()
    }, 1000);
    allCourseFun()
    allRegistrationFun()
    allEnquiryFun()
}, [])

const loginCheck=()=>{
  if(!sessionStorage.getItem('admin')){
    navigate("/login")
  }
}

const allCourseFun = () => {
    var data = {
    }
    allCourse(data).then(result => {
        // console.log(result)
        setCourseList(result.data.response)
    })
}

const allRegistrationFun = () => {
  var data = {
  }
  allUsers(data).then(result => {
    setRegistrationList(result.data.response)
  })
}

const allEnquiryFun=()=>{
  var data = {

  }
  allEnquiry(data).then(result=>{
    setEnquiryList(result.data.response)
  })
}

  return (
    <div className='dsas_bb'>
      <div class="dash-brd"><i class="icofont-dashboard"></i> Admin Dashboard</div>
      <div className='das_cat'>
        <button>
          <div class="d-flex align-items-center">
            <div class="card-icon-das">
              <i class="icofont-file-document"></i>
            </div>
            <div class="cr_txt_top">
              <h6>
                {
                  courseList.length !=0?
                  courseList.length
                  :0
                }
              </h6>
              <span class="cr_txt">Course</span>

            </div>
          </div>
        </button>
        <button>
          <div class="d-flex align-items-center">
            <div class="card-icon-das">
            <i class="icofont-copy-invert"></i>
            </div>
            <div class="cr_txt_top">
              <h6>
                {
                  registrationList.length !=0?
                  registrationList.length
                  :0
                }
              </h6>
              <span class="cr_txt">Registration</span>

            </div>
          </div>
        </button>
        <button>
          <div class="d-flex align-items-center">
            <div class="card-icon-das">
            <i class="icofont-ui-text-chat"></i>
            </div>
            <div class="cr_txt_top">
              <h6>
                {
                  enquiryList.length !=0?
                  enquiryList.length
                  :0
                }
              </h6>
              <span class="cr_txt">Enquiry</span>

            </div>
          </div>
        </button>

      </div>
    </div>
  )
}