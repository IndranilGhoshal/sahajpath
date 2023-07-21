import axios from "axios";
import { BASE_URL } from "../urlConfig/Url";

export function adminLogin(data){
    return axios.post(BASE_URL+'/api/admin/login', data)
}