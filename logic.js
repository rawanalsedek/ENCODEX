// ==========================
// Typed.js Animation
// ==========================

if (document.getElementById('typed-text')) {

    var typed = new Typed('#typed-text', {
        strings: [
            'Secure Your Text Messages <i class="fas fa-lock"></i>',
            'Explore Modern Cryptography <i class="fas fa-brain"></i>',
            'Easy to Use Tools <i class="fas fa-bolt"></i>'
        ],
        typeSpeed: 60,
        backSpeed: 40,
        loop: true
    });

}

// ==========================
// AOS Animation Initialization
// ==========================

if (typeof AOS !== "undefined") {

    AOS.init({
        duration: 1000,
        once: true
    });

}
// Caesar Encrypt
function caesarEncrypt(text, key) {
    return text;
}

// Caesar Decrypt
function caesarDecrypt(text, key) {
    return text;
}
// ==========================
// Substitution Cipher
// ==========================

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// Validate Key
function validateSubstitutionKey(key) {

    key = key.toUpperCase();


    if (key.length !== 26) {
        return false;
    }

    const uniqueLetters = new Set(key);

    if (uniqueLetters.size !== 26) {
        return false;
    }

    for (let char of key) {

        if (!alphabet.includes(char)) {
            return false;
        }
    }

    return true;
}

// ==========================
// Encryption
// ==========================

function substitutionEncrypt(text, key) {

    key = key.toUpperCase();

    // Check key validity
    if (!validateSubstitutionKey(key)) {
        return "Invalid Key! Key must contain 26 unique letters.";
    }

    let result = "";

    for (let char of text) {

        let upperChar = char.toUpperCase();

        if (alphabet.includes(upperChar)) {

            let index = alphabet.indexOf(upperChar);

            let encryptedChar = key[index];
            if (char === char.toLowerCase()) {

                result += encryptedChar.toLowerCase();

            } else {

                result += encryptedChar;
            }

        } else {

        
            result += char;
        }
    }

    return result;
}

// ==========================
// Decryption
// ==========================

function substitutionDecrypt(text, key) {

    key = key.toUpperCase();

    // Check key validity
    if (!validateSubstitutionKey(key)) {
        return "Invalid Key! Key must contain 26 unique letters.";
    }

    let result = "";

    for (let char of text) {

        let upperChar = char.toUpperCase();

        if (key.includes(upperChar)) {

            let index = key.indexOf(upperChar);

            let decryptedChar = alphabet[index];

            if (char === char.toLowerCase()) {

                result += decryptedChar.toLowerCase();

            } else {

                result += decryptedChar;
            }

        } else {

            result += char;
        }
    }

    return result;
}
// ==========================
// Handle Buttons
// ==========================

function handleEncrypt() {
    const text = document.getElementById("userInput").value;
    const key = document.getElementById("keyInput").value;
    const algo = document.getElementById("algoSelect").value;
    if (text.trim() === "") {
    alert("Please enter text!");
    return;
}

    let result = "";

    if (algo === "caesar") {
        result = caesarEncrypt(text, key);
    }
    else if (algo === "substitution") {
    result = substitutionEncrypt(text, key);
}

    document.getElementById("resultText").innerText = result;
    const resultBox = document.querySelector(".result-box");

resultBox.classList.remove("show-result");

setTimeout(() => {
    resultBox.classList.add("show-result");
}, 10);
}

function handleDecrypt() {
    const text = document.getElementById("userInput").value;
    const key = document.getElementById("keyInput").value;
    const algo = document.getElementById("algoSelect").value;
    if (text.trim() === "") {
    alert("Please enter text!");
    return;
}

    let result = "";

    if (algo === "caesar") {
        result = caesarDecrypt(text, key);
    }
    else if (algo === "substitution") {
    result = substitutionDecrypt(text, key);
}

    document.getElementById("resultText").innerText = result;
    const resultBox = document.querySelector(".result-box");

resultBox.classList.remove("show-result");

setTimeout(() => {
    resultBox.classList.add("show-result");
}, 10);
}
function copyText() {
    const text = document.getElementById("resultText").innerText;
    const btn = document.querySelector(".btn-copy");
    if (
    text.trim() === "" ||
    text === "Your result will appear here..."
) {
    alert("No result to copy!");
    return;
}

    navigator.clipboard.writeText(text)
        .then(() => {
            btn.innerText = "Copied!";

            setTimeout(() => {
                btn.innerText = "Copy Result";
            }, 1500);
        })
        .catch(() => {
            alert("Failed to copy!");
        });
}
function toggleMenu() {
    document.querySelector(".nav-links").classList.toggle("active");
}
const algoSelect = document.getElementById("algoSelect");
const keyHint = document.getElementById("keyHint");

algoSelect.addEventListener("change", () => {
    const algo = algoSelect.value;

    if (algo === "caesar") {
        keyHint.innerText = "Enter a number (e.g., 3)";
    } 
    else if (algo === "vigenere") {
        keyHint.innerText = "Enter a word (e.g., KEY)";
    } 
    else if (algo === "affine") {
        keyHint.innerText = "Enter two numbers (a, b)";
    } 
    else if (algo === "railfence") {
        keyHint.innerText = "Enter number of rails (e.g., 3)";
    } 
    else if (algo === "columnar") {
        keyHint.innerText = "Enter keyword (e.g., SECRET)";
    } 
    else if (algo === "substitution") {
        keyHint.innerText = "Enter 26-letter key mapping";
    } 
    else if (algo === "hill") {
        keyHint.innerText = "Enter matrix key (e.g., 2x2)";
    } 
    else if (algo === "rotator") {
        keyHint.innerText = "Enter shift value";
    } 
    else if (algo === "otp") {
        keyHint.innerText = "Key must be same length as text";
    } 
    else if (algo === "hash") {
        keyHint.innerText = "No key required";
    } 
    else if (algo === "rsa") {
        keyHint.innerText = "Public/Private key (demo only)";
    } 
    else if (algo === "aes" || algo === "des") {
        keyHint.innerText = "Complex key (demo only)";
    } 
    else if (algo === "diffie") {
        keyHint.innerText = "Key exchange algorithm (no direct input)";
    } 
    else {
        keyHint.innerText = "Enter appropriate key";
    }
});
function swapText() {
    const input = document.getElementById("userInput");
    const result = document.getElementById("resultText");

    const temp = input.value;
    input.value = result.innerText;
    result.innerText = temp;
}

