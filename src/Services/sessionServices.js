import axios from "axios";
import { BASE_URL } from "../urlConfig/Url";

export function addSession(data){
    return axios.post(BASE_URL+'/api/session/addSession', data)
}

export function allSession(data){
    return axios.post(BASE_URL+'/api/session/allSession', data)
}

export function editSession(data){
    return axios.post(BASE_URL+'/api/session/editSession', data)
}

export function deleteSession(data){
    return axios.post(BASE_URL+'/api/session/deleteSession', data)
}