//Get all data of user to load on webpage
let data = readUserData()

//show the name and image of user in the top title bar
let greet = document.getElementById('greet').innerText = `Hello! ${selectUser()}`
let menuAvater = document.getElementById('menu-avater')
menuAvater.src = data['avater']

//Get the name of all elements that wiill display and update data of the dummydatabase 

//Show the balance of the account in the title bar
let balance = document.getElementById('balance')
balance.innerText = `${data.Balance}$`

//make the tab work

//get tabbox and its child elements
function openTab(event, tabName){
    let tabContentBox = Array.from(document.getElementById('tab-content-box').children)
    tabContentBox.forEach((tabBox)=>{
        tabBox.style.display = 'none'
    })
    document.getElementById(tabName).style.display = 'block'

    let tabButtons = Array.from(document.getElementsByClassName('tab-button'))
    console.log(tabButtons);
    tabButtons.forEach((tab)=>{
        tab.className = tab.className.replace(' bg-gray-200','')
    })
    event.target.className += ' bg-gray-200'
}

document.getElementById('deposit').addEventListener('click',()=>{
    let depositAmount = document.getElementById('deposit-amount')
    data.Balance = Number(data.Balance) +  Number(depositAmount.value)
    balance.innerText = `${(data.Balance)}$`
    writeUserData(data)
    alert(`${depositAmount}$ has been added to your account`)
})

document.getElementById('withdraw').addEventListener('click',()=>{
    let withdrawAmount = document.getElementById("withdraw-amount")
    data.Balance = Number(data.Balance) - Number(withdrawAmount.value)
    if( data.Balance <= -1){
        alert("Not enough balance!")
    }
    else{
        balance.innerText = `${(data.Balance)}$`
        writeUserData(data)
        alert(`${withdrawAmount.value}$ has been successfully withdrawn in your dream`)
    }
})
document.getElementById('transfer').addEventListener('click',function(){
    let recepientName = document.getElementById('recepient-name').value
    // console.log(localStorage.getItem(recepientName));
    if (localStorage.getItem(recepientName) !== null){
        let trasnferAmount = Number(document.getElementById('transfer-amount').value)
        let recepientBalance = JSON.parse(localStorage.getItem(recepientName)).Balance
        let recepientBalanceUpdate = JSON.parse(localStorage.getItem(recepientName))
        recepientBalanceUpdate["Balance"] = trasnferAmount + recepientBalance
        
        localStorage.setItem(recepientName, JSON.stringify(recepientBalanceUpdate))
        // console.log(trasnferAmount, recepientBalance, recepientBalanceUpdate);

        data.Balance = Number(data.Balance) - trasnferAmount
        if( data.Balance <= -1){
            alert("Not enough balance!")
        }
        else{
            balance.innerText = `${(data.Balance)}$`
            writeUserData(data)
            alert(`${trasnferAmount}$ has been tranferred to ${recepientName}'s account`)
        }
    }
    else{
        alert('Please enter a resistered user name/')
    }
})