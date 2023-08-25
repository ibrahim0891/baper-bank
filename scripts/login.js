
let defaultUserName = 'ibrahim.003'
let defaultUserPassword = 1234
let getSubmitButton = document.getElementById('submit')

function readDatabase(){
    let dummyDatabase = JSON.parse(localStorage.getItem('dummyDatabase'))
    return dummyDatabase //re turn an array of objects
}

getSubmitButton.addEventListener('click',(e)=>{
    e.preventDefault()
    let getUserName = document.getElementById('login-user-name').value
    let getUserPassword = document.getElementById('login-password').value
    // console.log(getUserName);
    let readData = readDatabase()
    function checkUser(obj){
        return obj.name == getUserName && obj.password == getUserPassword
    }
    let finduser = readData.find(checkUser)
    if (finduser != undefined){
        window.location = '/index.html'
        localStorage.setItem('logindata',JSON.stringify({name : getUserName , password : getUserPassword}))
    }
    else{
        alert('User not resisted!')
    }
})

