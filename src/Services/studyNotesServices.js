import axios from "axios";
import { BASE_URL } from "../urlConfig/Url";

export function addStudyNotes(data){
    return axios.post(BASE_URL+'/api/studyNotes/addStudyNotes', data)
}

export function allStudyNotes(data){
    return axios.post(BASE_URL+'/api/studyNotes/allStudyNotes', data)
}
export function deleteStudyNotes(data){
    return axios.post(BASE_URL+'/api/studyNotes/deleteStudyNotes', data)
}
