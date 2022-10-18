// console.log(document.querySelector("#card-info-num").classList);
// console.log(document.querySelector("#card-info").classList);
//Stuff to hide above

//Get all data from forums
// console.log(document.querySelector("#cardname").value);
// console.log(document.querySelector("#cardnumber"));
// console.log(document.querySelector("#month-digit"));
// console.log(document.querySelector("#year-digit"));
// console.log(document.querySelector("#cvc"));

const button = document.getElementById("btn");

let num3 = document.getElementById("fake-num-3");
let num1 = document.getElementById("fake-num-1");
let num2 = document.getElementById("fake-num-2");
let num4 = document.getElementById("fake-num-4");
let fakeCvc = document.getElementById("fake-cvc");
let nameCard = document.getElementById("fake-name");
let expiryDate = document.getElementById("expiry-date");
//ALL FAKE CREDIT CARD DATA
const cardNumber = document.querySelector("#cardnumber");
const cardName = document.querySelector("#cardname");
const monthDigit = document.querySelector("#month-digit");
const yearDigit = document.querySelector("#year-digit");
const cvc = document.querySelector("#cvc");
//ALL SUBMITTED DATA
const cardhide = document.querySelector("#card-info");
const cardNumHide = document.querySelector("#card-info-num");
const thankYou = document.querySelector("#thankYou");

console.log(button);

function collectData() {
  if (button.innerHTML == "Confirm") {
    cardNum = cardNumber.value;
    creditCardArray = cardNum.match(/.{4}/g);
    num1.innerHTML = creditCardArray[0];
    num2.innerHTML = creditCardArray[1];
    num3.innerHTML = creditCardArray[2];
    num4.innerHTML = creditCardArray[3];
    //finished adding credit number
    fakeCvc.innerHTML = cvc.value;
    nameCard.innerHTML = cardName.value;
    expiryCardDate = `${monthDigit.value}/${yearDigit.value}`;
    expiryDate.innerHTML = expiryCardDate;
    //finished adding all info to card
    cardhide.classList.add("hidden");
    cardNumHide.classList.add("hidden");
    thankYou.classList.remove("hidden");
    button.innerHTML = "Continue";
  } else {
    cardhide.classList.remove("hidden");
    cardNumHide.classList.remove("hidden");
    thankYou.classList.add("hidden");
    button.innerHTML = "Confirm";
  }
}

button.addEventListener("click", collectData);
