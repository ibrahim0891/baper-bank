//Get all data of user to load on webpage
let data = readUserData()

//show the name and image of user in the top title bar
let greet = document.getElementById('greet').innerText = `${selectUser()}`
let menuAvater = document.getElementById('menu-avater')
menuAvater.src = data['avater']

//Get the name of all elements that wiill display and update data of the dummydatabase 

//Show the balance of the account in the title bar
let balance = document.getElementById('balance')
balance.innerText = `${data.Balance}$`

//make the tab work

//get tabbox and its child elements

let tab = document.getElementById('tab-box')

let tabArray = Array.from(tab.children)

tabArray.map((tab)=>{
    tab.addEventListener('click', (e)=>{
        
    })
})