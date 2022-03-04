let chars = ["a","b","c","d","e","f","g",
             "h","i","j","k","l","m","n",
             "o","p", "q", "r", "s", "t", 
             "u", "v", "w", "x", "y", "z", 
             "A","B","C","D","E","F","G",
             "H","I","J","K","L","M","N",
             "O","P", "Q", "R", "S", "T", 
             "U", "V", "W", "X", "Y", "Z",
             "1", "2", "3", "4", "5", "6", 
             "7", "8", "9", "0", "!", "@",
             "#", "$", "%", "^", "&", "*", 
             "(", ")", "_", "-", "+", "=",
             "{", "}", "[", "]", "/", "|", 
             "\\", "'", '"', ".", ",", "?",
             ";", ":", "~"
             ]
             

let generateEl = document.getElementById("generate")

let option1El = document.getElementById("option-1")
let option2El = document.getElementById("option-2")
let option3El = document.getElementById("option-3")
let option4El = document.getElementById("option-4")

generateEl.addEventListener("click", populate);

function populate() {
    option1El.value = generatePassword()
    option3El.value = generatePassword()
    option2El.value = generatePassword()
    option4El.value = generatePassword()
}

function generatePassword() {
    let password = []
    for (let i = 0; i < 15; i++) {
        let randomChar = chars[Math.floor(Math.random() * chars.length)]
        password.push(randomChar)
    }
    password = password.join("")
    return password
}