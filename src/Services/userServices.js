import axios from "axios";
import { BASE_URL } from "../urlConfig/Url";

export function userLogin(data){
    return axios.post(BASE_URL+'/api/user/login', data)
}