//document.getElementById("count-el").innerText=5

let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}
///////////////////////////////////////////////////

/*
let Message = [ 
    "hey, how is it going",
    "i'm great, thank you! how about you?",
    "all good. been working on my portfolio lately"
]

let newmessage = "same here"
 Message.push(newmessage)
 console.log(Message)
 Message.pop()
*/
/*
let age = 22

if (age <= 21){
    console.log("you are not up to the age limit")
}else{
    console.log('you are welcome ')
}
*/



/*
let username = "Ola"
let Message = "You have a new Notification"
let Messagetouser = Message + " " + username + "!"
console.log(Messagetouser)
////////////////////////////////////////////////////////

*/






/*count = count + 1  

    let bonuspoints = 50
    console.log(bonuspoints)

    bonuspoints = bonuspoints + 50
    console.log(bonuspoints)

    bonuspoints = bonuspoints - 75
    console.log(bonuspoints)

    bonuspoints = bonuspoints2 + 45
    console.log(bonuspoints)*/

/*

calculator
let num1 = 8
let num2 = 2
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2

// Create four functions: add(), subtract(), divide(), multiply()

function add(){
   document.getElementById('sum-el').innerHTML = num1 + num2
}

function subtract(){
     document.getElementById('sum-el').innerHTML = num1 - num2
}

function divide(){
     document.getElementById('sum-el').innerHTML = num1 / num2
}

function multiply(){
     document.getElementById('sum-el').innerHTML = num1 * num2
}

// Call the correct function when the user clicks on one of the buttons
// Perform the given calculation using num1 and num2
// Render the result of the calculation in the paragraph with id="sum-el"

// E.g. if the user clicks on the "Plus" button, you should render
// "Sum: 10" (since 8 + 2 = 10) inside the paragraph with id="sum-el"

*/
