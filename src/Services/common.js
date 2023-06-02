export function getPayId(){
    var data = sessionStorage.getItem("payee_id")
    return data
}
export function getUserId(){
    return JSON.parse(sessionStorage.getItem("user"))
}