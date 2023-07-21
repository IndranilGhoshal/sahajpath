
export function getUserData(){
    return JSON.parse(sessionStorage.getItem("user"))
}

export function getAdminData(){
    return JSON.parse(sessionStorage.getItem("admin"))
}

export function showLoader(){
    document.querySelector('.loadr').style.display = 'block';
    document.querySelector('.loader_wait').style.display = 'block';
    document.querySelector('.loader_bg').style.display = 'block';
}

export function hideLoader(){
    document.querySelector('.loadr').style.display = 'none';
    document.querySelector('.loader_wait').style.display = 'none';
    document.querySelector('.loader_bg').style.display = 'none';
}