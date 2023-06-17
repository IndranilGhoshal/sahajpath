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

export function uploadFile(data) {
    return fetch(BASE_URL + '/api/upload', {
            method: 'POST',
            body: data,
    }).then(res => res.json())
}

export function editCourse(data){
    return axios.post(BASE_URL+'/api/course/editCourse', data)
}

export function deleteCourse(data){
    return axios.post(BASE_URL+'/api/course/deleteCourse', data)
}