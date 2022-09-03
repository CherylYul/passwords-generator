const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const excludeNumbers = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

const excludeSymbols = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const onlyCharacters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

let generateEl = document.getElementById("generate-el")
let pass1El = document.getElementById("pass1-el")
let pass2El = document.getElementById("pass2-el")
let toggleSymbol = document.querySelector(".symbols-container .toggle")
let toggleNumber = document.querySelector(".numbers-container .toggle")
let textSymbol = document.querySelector(".symbols-container .text")
let textNumber = document.querySelector(".numbers-container .text")
let remind = document.getElementById("remind")

function getLength() {
    return document.querySelector("input").value
}

function randomCharater() {
    if (toggleNumber.classList.contains("active") && toggleSymbol.classList.contains("active")) {
        return onlyCharacters[Math.floor(Math.random() * onlyCharacters.length)]
    } else if (toggleNumber.classList.contains("active") && !toggleSymbol.classList.contains("active")) {
        return excludeNumbers[Math.floor(Math.random() * excludeNumbers.length)]   
    } else if (!toggleNumber.classList.contains("active") && toggleSymbol.classList.contains("active")) {
        return excludeSymbols[Math.floor(Math.random() * excludeSymbols.length)]   
    } else {
        return characters[Math.floor(Math.random() * characters.length)]
    }
}

function generatePassword() {
    pass1El.textContent = ""
    pass2El.textContent = ""
    let passwordLength = getLength()
    if (passwordLength === "") {
        remind.textContent = "You need to set your password's length!"
    } else {
        for (let i = 0; i<passwordLength; i++) {
            pass1El.textContent += randomCharater()
            pass2El.textContent += randomCharater()
        }
    }
}

generateEl.addEventListener("click", generatePassword)

const passOne = document.querySelector("#pass1-el");

passOne.onclick = function() {
    document.execCommand("copy");
}

passOne.addEventListener("copy", function(event) {
    event.preventDefault();
    if (event.clipboardData) {
        event.clipboardData.setData("text/plain", passOne.textContent);
        console.log(event.clipboardData.getData("text"))
    }
});

const passTwo = document.querySelector("#pass2-el");

passTwo.onclick = function() {
    document.execCommand("copy");
}

passTwo.addEventListener("copy", function(event) {
    event.preventDefault();
    if (event.clipboardData) {
        event.clipboardData.setData("text/plain", passTwo.textContent);
        console.log(event.clipboardData.getData("text"))
    }
});

function animatedSymbols() {
    toggleSymbol.classList.toggle("active")
    if (toggleSymbol.classList.contains("active")) {
        textSymbol.innerText = "off"  
    } else {
        textSymbol.innerText = "on"
    }
}

function animatedNumbers() {
    toggleNumber.classList.toggle("active")
    if (toggleNumber.classList.contains("active")) {
        textNumber.innerText = "off"  
    } else {
        textNumber.innerText = "on"
    }
}