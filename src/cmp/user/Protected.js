import React,{useEffect} from 'react'
import { useNavigate } from 'react-router-dom'

export default function Protected({Cmp}) {
    const navigate = useNavigate()
    useEffect(()=>{
        if(!sessionStorage.getItem('user')){
            navigate("/")
        }
    },[])
  return (
    <div><Cmp/></div>
  )
}
