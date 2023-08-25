let signupButton = document.getElementById('signup-button')
if (localStorage.getItem('dummyDatabase') == null){
    let x = [{ name : 'pivate' , password: 'privet'}]
    localStorage.setItem('dummyDatabase', JSON.stringify(x))
}
function readDatabase(){
    let dummyDatabase = JSON.parse(localStorage.getItem('dummyDatabase'))
    return dummyDatabase //re turn an array of objects
}
function writeDatabase(data){
    localStorage.setItem('dummyDatabase',JSON.stringify(data))
}
let readData = readDatabase()
signupButton.addEventListener('click', function(){
    let getName = document.getElementById('signup-user-name').value
    let getPassword = document.getElementById('signup-password').value
    let createUser = {
        name : getName,
        password : getPassword
    }
    alert('Now please log in with your usename and password')
    readData.push(createUser)
    writeDatabase(readData)

    localStorage.setItem(getName,JSON.stringify({}))
})

