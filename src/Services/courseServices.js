import axios from "axios";
import { BASE_URL } from "../urlConfig/Url";

export function addCourse(data){
    return axios.post(BASE_URL+'/api/course/addCourse', data)
}

export function allCourse(data){
    return axios.post(BASE_URL+'/api/course/allCourse', data)
}

export function courseDetails(data){
    return axios.post(BASE_URL+'/api/course/courseDetails', data)
}