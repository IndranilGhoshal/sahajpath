import React from 'react'
import Logo from '../assets/images/logo.jpeg'
import { useNavigate } from "react-router-dom";


export default function SignUp() {
  let navigate = useNavigate(); 

    function goto(path){
        navigate(path);
    }
  return (
    <>
      <div className='signup-form my-5'>
        <div className='signup-head'>
          <div><img src={Logo} className='logo-login'/></div>
        Registration
        </div>
        <div className='signup-body mt-2'>
          <div>
            <label className='font-weight-500'>First Name</label><span className='color-red'>*</span>
            <div className='mt-2'>
              <input type='text' className='form-control' />
            </div>
          </div>
          <div className='mt-2'>
            <label className='font-weight-500'>Last Name</label><span className='color-red'>*</span>
            <div className='mt-2'>
              <input type='text' className='form-control'/>
            </div>
          </div>
          <div className='mt-2'>
            <label className='font-weight-500'>Email</label><span className='color-red'>*</span>
            <div className='mt-2'>
              <input type='text' className='form-control'/>
            </div>
          </div>
          <div className='mt-2'>
            <label className='font-weight-500'>Password</label><span className='color-red'>*</span>
            <div className='mt-2'>
              <input type='password' className='form-control'/>
            </div>
          </div>
          <div className='mt-2'>
            <label className='font-weight-500'>Gender</label><span className='color-red'>*</span>
            <div className='mt-2'>
              <label for='male'>Male</label>
              <input type='radio' name='gender' id='male' className='mx-2' />
              <label for='female'>Female</label>
              <input type='radio' name='gender' id='female' className='mx-2' />
            </div>
          </div>
          <div className='mt-2'>
            <label className='font-weight-500'>Contact No.</label><span className='color-red'>*</span>
            <div className='mt-2'>
              <input type='text' className='form-control'/>
            </div>
          </div>
          <div className='mt-2'>
            <label className='font-weight-500'>Date of Birth</label><span className='color-red'>*</span>
            <div className='mt-2'>
              <input type='date' className='form-control'/>
            </div>
          </div>
          <div className='mt-2'>
            <label className='font-weight-500'>Address</label><span className='color-red'>*</span>
            <div className='mt-2'>
              <textarea type='text' className='form-control'></textarea>
            </div>
          </div>
          <div className='mt-2'>
            <label className='font-weight-500'>Pin Code</label><span className='color-red'>*</span>
            <div className='mt-2'>
              <input type='text' className='form-control'/>
            </div>
          </div>

          <div className='mx-auto d-grid gap-2 mt-4'>
            <button className='btn btn-primary btn-lg'>Submit</button>
          </div>

          <div className='mt-2'>
                <div className='text-center'>Are you already register?</div>
                <div className='text-center'>Please <span className='font-weight-500 cursor-pointer' onClick={()=>{goto('/login')}}>Login</span></div>
            </div>

        </div>
      </div>

    </>
  )
}
