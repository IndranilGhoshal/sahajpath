import axios from "axios";
import { BASE_URL } from "../urlConfig/Url";

export function userLogin(data){
    return axios.post(BASE_URL+'/api/user/login', data)
}

export function registration(data){
    return axios.post(BASE_URL+'/api/user/registration', data)
}

export function allUsers(data){
    return axios.post(BASE_URL+'/api/user/allUsers', data)
}

export function userDetails(data){
    return axios.post(BASE_URL+'/api/user/userDetails', data)
}

export function userStatus(data){
    return axios.post(BASE_URL+'/api/user/userStatus', data)
}