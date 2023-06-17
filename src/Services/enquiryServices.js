import axios from "axios";
import { BASE_URL } from "../urlConfig/Url";

export function addEnquiry(data){
    return axios.post(BASE_URL+'/api/enquiry/addEnquiry', data)
}

export function allEnquiry(data){
    return axios.post(BASE_URL+'/api/enquiry/allEnquiry', data)
}

export function allAcceptEnquiry(data){
    return axios.post(BASE_URL+'/api/enquiry/allAcceptEnquiry', data)
}


export function enquiryDetails(data){
    return axios.post(BASE_URL+'/api/enquiry/enquiryDetails', data)
}

export function addDescription(data){
    return axios.post(BASE_URL+'/api/enquiry/addDescription', data)
}

export function checkStatus(data){
    return axios.post(BASE_URL+'/api/enquiry/checkStatus', data)
}

export function deleteEnquiry(data){
    return axios.post(BASE_URL+'/api/enquiry/deleteEnquiry', data)
}
