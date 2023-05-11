import React, { useState } from 'react'
import Logo from '../assets/images/logo.jpeg'
import { useNavigate } from "react-router-dom";
import { userLogin } from '../Services/userServices';
import { adminLogin } from '../Services/adminServices';


export default function Login() {
    let navigate = useNavigate(); 

    function goto(path){
        navigate(path);
    }

    const [email, setEmail]=useState('')
    const [password, setPassword]=useState('')
    const [type, setType]=useState('')


    const login=()=>{

        if(type=='admin'){
        var data ={
            "email":email,
            "password":password
        }
        adminLogin(data).then(result=>{
            // console.log(result)
            if(result.data.success){
                sessionStorage.setItem('admin', JSON.stringify(result.data))
                navigate("/admin/dashboard")
            }
        })
        }

        if(type=='student'){
        var data ={
            "email":email,
            "password":password
        }
        userLogin(data).then(result=>{
            // console.log(result)
            if(result.data.success){
                sessionStorage.setItem('user', JSON.stringify(result.data))
                navigate("/users/dashboard")
            }
        })
        }
    }
  return (
    <>
    <div className='login-form my-5'>
        <div className='login-head'>
            <div><img src={Logo} className='logo-login'/></div>
            Login
        </div>
        <div className='login-body mt-3'>
            <div>
                <label className='font-weight-500'>Account Type:</label>
                <div className='mt-2'>
                    <label htmlFor='admin'>Admin</label>
                    <input type='radio' name='account' id='admin' className='mx-2' value='admin' onChange={(e)=>{setType(e.target.value)}}/>
                    <label htmlFor='student'>Student</label>
                    <input type='radio' name='account' id='student' className='mx-2' value='student' onChange={(e)=>{setType(e.target.value)}}/>
                </div>
            </div>
            <div className='mt-2'>
            <label className='font-weight-500'>Email:</label>
            <div className='mt-2'>
            <input className='form-control' type='text' value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
            </div>
            </div>
            <div className='mt-2'>
            <label className='font-weight-500'>Password:</label>
            <div className='mt-2'>
            <input className='form-control' type='password' value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
            </div>
            </div>
            <div className='mx-auto d-grid gap-2 mt-4'>
            <button className='btn btn-primary btn-lg' onClick={login}>Login</button>
            </div>
            <div className='mt-2'>
                <div className='text-center'>Are you new user?</div>
                <div className='text-center'>Please <span className='font-weight-500 cursor-pointer' onClick={()=>{goto('/signup')}}>Sign Up</span></div>
            </div>
            

        </div>
    </div>
    </>
  )
}
