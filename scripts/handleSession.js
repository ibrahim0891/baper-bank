let loginStatus = JSON.parse(localStorage.getItem('logindata'))
if (loginStatus == null) {
    window.location = '/pages/login-page.html'
}
function logout() {
    localStorage.setItem('logindata', null)
    window.location = '/pages/login-page.html'
}

function selectUser() {
    let userName = JSON.parse(localStorage.getItem('logindata'))
    return userName.name
    console.log(userName);
}
function readUserData() {
    let data = JSON.parse(localStorage.getItem(selectUser()))
    // console.log(data);
    return data
    //a object containing info like balance , phone number and other stuffs
}
function writeUserData(newData) { //need to pass an obj
    localStorage.setItem(selectUser(), JSON.stringify(newData))
}