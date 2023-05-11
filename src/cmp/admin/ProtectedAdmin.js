import React,{useEffect} from 'react'
import { useNavigate } from 'react-router-dom'

export default function ProtectedAdmin({Cmp}) {
    const navigate = useNavigate()
    useEffect(()=>{
        if(!sessionStorage.getItem('admin')){
            navigate("/")
        }
    },[])
  return (
    <div><Cmp/></div>
  )
}