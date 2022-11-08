const key = document.getElementById("exampleFormControlInput1");
const inputText = document.getElementById("exampleFormControlTextarea1");
const encryptBtn = document.getElementById("ecryptBtn");

const engAlphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];


encryptBtn.addEventListener("click", () => {

    // Get the text and key
    let initialText = inputText.value;
    let initialKey = Number(key.value);

    let encryptedText = [];
    let finalMessage = "";

    for (let i = 0; i < initialText.length; i++) {
        encryptedText = encryptedText.concat(engAlphabet.indexOf(initialText[i]));
    }

    for (let i = 0; i < encryptedText.length; i++) {
        if (encryptedText[i] == -1){
            finalMessage = finalMessage.concat(" ");
        } else {
            finalMessage += engAlphabet[(encryptedText[i] + initialKey) % 52];
        }
    }

    document.getElementById("result").innerHTML = finalMessage;
});


const decryptBtn = document.getElementById("decryptBtn");
const decryptText = document.getElementById("decryptText");
const decryptKey = document.getElementById("decryptKey");

decryptBtn.addEventListener("click", () => {
    let encryptedText = decryptText.value;
    let encryptedlKey = Number(decryptKey.value);

    let decryptedText = [];
    let finalMessage = "";

    for (let i = 0; i < encryptedText.length; i++) {
        decryptedText = decryptedText.concat(engAlphabet.indexOf(encryptedText[i]));
    }

    for (let i = 0; i < decryptedText.length; i++) {
        if (decryptedText[i] == -1){
            finalMessage = finalMessage.concat(" ");
        } else {
            finalMessage += engAlphabet[(decryptedText[i] - encryptedlKey) % 26];
        }
    }

    document.getElementById("resultDecryption").innerHTML = finalMessage;

});
