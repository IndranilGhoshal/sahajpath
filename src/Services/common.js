
export function getUserId(){
    return JSON.parse(sessionStorage.getItem("user"))
}