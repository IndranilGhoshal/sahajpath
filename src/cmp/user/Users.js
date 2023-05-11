import React from 'react'
import Layout from './Layout'
import { useNavigate } from 'react-router-dom'

export default function Users() {
    let userData = JSON.parse(sessionStorage.getItem("user"))
    const navigate = useNavigate()
  return userData ? <div><Layout /></div> : <div>{navigate("/")}</div>
}
