
// Initialize the buttons --------------------------------------------

let amount = 0;
const delBtn = document.querySelectorAll('.del-btn');
const addBtn = document.querySelector('#add-btn');
const increase = document.getElementById("increase")
const decrease = document.getElementById("decrease")

// Initialize Elements ------------------------------------------------

let inputReason = document.getElementById('add-new-line');
let inputAmount = document.getElementById('add-new-amount');
let totalAmount = document.querySelector('#total-amount');
const liAmount = document.querySelectorAll('span')

// Event Listener for Add transaction button ---------------------------

addBtn.addEventListener('click', (e) => {
    //console.log(input.value);
    if (inputReason.value != '' && inputAmount.value != 0) {
        const li = document.createElement('li');
        li.innerHTML = `${inputReason.value} <span>${inputAmount.value}</span> <button onclick='ddelete(this)' class='del-btn'>X</button>`;
        document.querySelector('ul').append(li);
        totalAmount.innerText = parseInt(totalAmount.innerText) - parseInt(inputAmount.value)
        
    } else {
        alert("Please enter the reason or amount or both");
    }
    inputReason.value = '';
    inputAmount.value = '';
});

// Event Listener for transaction delete button -------------------------

delBtn.forEach(element => {
    element.addEventListener('click', (e) => {
    //    console.log(e.target.parentNode);
        amount = e.target.parentNode.querySelector('span').innerText;
        totalAmount.innerText = parseInt(totalAmount.innerText) + parseInt(amount)
        e.target.parentNode.remove();
    });
});

function ddelete(e) {
//    console.log(e.parentNode.querySelector('span').innerText);
    amount = e.parentNode.querySelector('span').innerText;
    totalAmount.innerText = parseInt(totalAmount.innerText) + parseInt(amount)
    e.parentNode.remove();
}

// Increase the total amount Button

increase.addEventListener('click', () => {
    // console.log(totalAmount.innerText)
    let res = parseInt(totalAmount.innerText)
    res += 100;    
    totalAmount.innerText = res;
})

// decrease the total amount Button

decrease.addEventListener('click', () => {
    // console.log(totalAmount.innerText)
    let res = parseInt(totalAmount.innerText)
    res -= 100;    
    totalAmount.innerText = res;
})

// Actual Logic (Subtraction)

function subtractAmount() {
    for(let i = 0; i < liAmount.length; i++) {
    totalAmount.innerText =   parseInt(totalAmount.innerText) - parseInt(liAmount[i].innerText)
    }
}