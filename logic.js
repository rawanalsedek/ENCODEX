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
const algoSelect = document.getElementById("algoSelect");
const keyHint = document.getElementById("keyHint");

const generateBtn =
document.getElementById("generateKeyBtn");

const generateRSABtn =
document.getElementById("generateRSAKeysBtn");

const keyInput =
document.getElementById("keyInput");

const rsaPublic =
document.getElementById("rsaPublicKey");

const rsaPrivate =
document.getElementById("rsaPrivateKey");

const resultText =
document.getElementById("resultText");
const encryptBtn =
document.getElementById("encryptBtn");

const decryptBtn =
document.getElementById("decryptBtn");
const actionBtns =
document.getElementById("actionBtns");

const controlsBox =
document.getElementById("controlsBox");
// ==========================
// DIFFIE-HELLMAN KEY EXCHANGE - CLEAN IMPLEMENTATION
// ==========================
const userInputGroup = document.querySelector(".input-group");
const generateRotorBtn = document.getElementById("generateRotorKeyBtn");
const generateAffineBtn = document.getElementById("generateAffineKeyBtn");
const generateVigenereBtn = document.getElementById("generateVigenereKeyBtn");
// ==========================
// COLUMNAR TRANSPOSITION CIPHER IMPLEMENTATION
// ==========================
const generateColumnarBtn = document.getElementById("generateColumnarKeyBtn");

const aesTypeSelect = document.getElementById("aesTypeSelect");
const generateAESBtn = document.getElementById("generateAESKeyBtn");
const aesKeyError = document.getElementById("aesKeyError");
// ==========================
// DES IMPLEMENTATION
// ==========================
const generateDESBtn = document.getElementById("generateDESKeyBtn");
const desKeyError = document.getElementById("desKeyError");
// ==========================
// ONE-TIME PAD (OTP) IMPLEMENTATION
// ==========================
const generateOTPBtn = document.getElementById("generateOTPKeyBtn");
const otpKeyError = document.getElementById("otpKeyError");
// ==========================
// RAIL FENCE CIPHER IMPLEMENTATION
// ==========================
const railFenceKeyError = document.getElementById("railFenceKeyError");
// ==========================
// HILL CIPHER IMPLEMENTATION
// ==========================
const hillCipherBox = document.getElementById("hillCipherBox");
const hillMatrixSize = document.getElementById("hillMatrixSize");
const hillMatrixSizeInput = document.getElementById("hillMatrixSizeInput");
const hillMatrixRows = document.getElementById("hillMatrixRows");
const generateHillKeyBtn = document.getElementById("generateHillKeyBtn");
const hillKeyError = document.getElementById("hillKeyError");
// ==========================
// DIFFIE-HELLMAN KEY EXCHANGE - CLEAN IMPLEMENTATION
// ==========================
const diffieHellmanBox = document.getElementById("diffieHellmanBox");
const dhPrimeInput = document.getElementById("dhPrimeInput");
const dhGeneratorInput = document.getElementById("dhGeneratorInput");
const dhPrivateInput = document.getElementById("dhPrivateInput");
const generateDHValuesBtn = document.getElementById("generateDHValuesBtn");
const generateDHSharedBtn = document.getElementById("generateDHSharedBtn");
const dhKeyError = document.getElementById("dhKeyError");
// ==========================
// GCD FUNCTION
// ==========================

function gcd(a, b) {

    // BigInt support
    if (typeof a === "bigint" || typeof b === "bigint") {

        a = BigInt(a);
        b = BigInt(b);

        while (b !== 0n) {
            let t = b;
            b = a % b;
            a = t;
        }

        return a;
    }

    // Normal numbers
    while (b !== 0) {
        let t = b;
        b = a % b;
        a = t;
    }

    return a;
}
// ==========================
// Caesar Cipher (WORKING)
// ==========================

function caesarEncrypt(text, key) {

    let shift = parseInt(key);

    if (isNaN(shift)) {
        return "Invalid key! Enter a number.";
    }

    shift = shift % 26;

    let result = "";

    for (let i = 0; i < text.length; i++) {

        let char = text[i];

        if (char.match(/[a-z]/i)) {

            let code = text.charCodeAt(i);

            // Uppercase letters
            if (code >= 65 && code <= 90) {
                char = String.fromCharCode(((code - 65 + shift + 26) % 26) + 65);
            }

            // Lowercase letters
            else if (code >= 97 && code <= 122) {
                char = String.fromCharCode(((code - 97 + shift + 26) % 26) + 97);
            }
        }

        result += char;
    }

    return result;
}


// ==========================
// Caesar Decrypt
// ==========================

function caesarDecrypt(text, key) {

    let shift = parseInt(key);

    if (isNaN(shift)) {
        return "Invalid key! Enter a number.";
    }

    // reverse shift
    return caesarEncrypt(text, -shift);
}
// ==========================
// Vigenere Cipher (WORKING)
// ==========================

function vigenereEncrypt(text, key) {

    if (!key || key.trim() === "") {
        return " Please enter key!";
    }

    if (!/^[a-zA-Z]+$/.test(key)) {
        return " Invalid Key! Only letters A-Z are allowed.";
    }

    key = key.toUpperCase();
    text = text.toUpperCase();

    let result = "";
    let keyIndex = 0;

    for (let i = 0; i < text.length; i++) {

        let char = text[i];

        if (char >= 'A' && char <= 'Z') {

            let shift = key.charCodeAt(keyIndex % key.length) - 65;

            result += String.fromCharCode(
                ((char.charCodeAt(0) - 65 + shift) % 26) + 65
            );

            keyIndex++;

        } else {
            result += char;
        }
    }

    return result;
}


// ==========================
// Vigenere Decrypt
// ==========================
function vigenereDecrypt(text, key) {

    if (!key || key.trim() === "") {
        return " Please enter key!";
    }

    if (!/^[a-zA-Z]+$/.test(key)) {
        return " Invalid Key! Only letters A-Z are allowed.";
    }

    key = key.toUpperCase();
    text = text.toUpperCase();

    let result = "";
    let keyIndex = 0;

    for (let i = 0; i < text.length; i++) {

        let char = text[i];

        if (char >= 'A' && char <= 'Z') {

            let shift = key.charCodeAt(keyIndex % key.length) - 65;

            result += String.fromCharCode(
                ((char.charCodeAt(0) - shift - 65 + 26) % 26) + 65
            );

            keyIndex++;

        } else {
            result += char;
        }
    }

    return result;
}
// ==========================
// RSA IMPLEMENTATION (BIGINT)
// ==========================

// Modular exponentiation
function modPow(base, exp, mod) {
    let result = 1n;
    base = base % mod;

    while (exp > 0n) {
        if (exp % 2n === 1n) {
            result = (result * base) % mod;
        }
        exp = exp / 2n;
        base = (base * base) % mod;
    }
    return result;
}

// RSA Encrypt (e, n)
function rsaEncrypt(text, publicKey) {
    try {
        let [e, n] = publicKey.split(",").map(x => BigInt(x.trim()));
        if (n < 256n) {
    return "n must be greater than 255";}

        let result = [];

        for (let char of text) {
            let m = BigInt(char.charCodeAt(0));
            let c = modPow(m, e, n);
            result.push(c.toString());
        }

        return result.join(" ");
    } catch (err) {
        return " Invalid Public Key format (use e,n)";
    }
}

// RSA Decrypt (d, n)
function rsaDecrypt(text, privateKey) {
    try {
        let [d, n] = privateKey.split(",").map(x => BigInt(x.trim()));
        if (n < 256n) {
    return "n must be greater than 255";}

        let chars = text.split(" ");
        let result = "";

        for (let c of chars) {
            let m = modPow(BigInt(c), d, n);
            result += String.fromCharCode(Number(m));
        }

        return result;
    } catch (err) {
        return " Invalid Private Key format (use d,n)";
    }
}
// ==========================
// SHA-256 HASH
// ==========================

async function sha256Hash(text) {

    const encoder = new TextEncoder();

    const data = encoder.encode(text);

    const hashBuffer =
    await crypto.subtle.digest("SHA-256", data);

    const hashArray =
    Array.from(new Uint8Array(hashBuffer));

    const hashHex =
    hashArray
    .map(b => b.toString(16).padStart(2, "0"))
    .join("");

    return hashHex;
}
// ================= CODEX AES Encryption Functions =================
const aesKeyLengths = {
    "AES-128": 16,
    "AES-192": 24,
    "AES-256": 32
};

function getSelectedAESLength() {
    return aesKeyLengths[aesTypeSelect?.value] || 16;
}

function showAESError(message) {
    if (!aesKeyError) return;

    aesKeyError.innerText = message;
    aesKeyError.style.display = message ? "block" : "none";
}

function validateAESKey(key) {
    const selectedType = aesTypeSelect?.value || "AES-128";
    const expectedLength = getSelectedAESLength();

    if (!key) {
        return `Please enter an ${selectedType} secret key.`;
    }

    if (!/^[\x20-\x7E]+$/.test(key)) {
        return "AES key must use plain ASCII characters only.";
    }

    if (key.length !== expectedLength) {
        return `${selectedType} key must be exactly ${expectedLength} characters. Current length: ${key.length}.`;
    }

    return "";
}

function arrayBufferToBase64(buffer) {
    const bytes = new Uint8Array(buffer);
    let binary = "";

    for (let i = 0; i < bytes.length; i++) {
        binary += String.fromCharCode(bytes[i]);
    }

    return btoa(binary);
}

function base64ToUint8Array(value) {
    const binary = atob(value);
    const bytes = new Uint8Array(binary.length);

    for (let i = 0; i < binary.length; i++) {
        bytes[i] = binary.charCodeAt(i);
    }

    return bytes;
}

async function importAESKey(key) {
    const encoder = new TextEncoder();

    return crypto.subtle.importKey(
        "raw",
        encoder.encode(key),
        { name: "AES-GCM" },
        false,
        ["encrypt", "decrypt"]
    );
}

async function aesEncrypt(text, key) {
    const validationError = validateAESKey(key);

    if (validationError) {
        showAESError(validationError);
        return validationError;
    }

    if (typeof crypto === "undefined" || !crypto.subtle) {
        return "AES is not available in this browser context. Please use a modern browser over HTTPS or localhost.";
    }

    showAESError("");

    try {
        const encoder = new TextEncoder();
        const iv = crypto.getRandomValues(new Uint8Array(12));
        const cryptoKey = await importAESKey(key);
        const encrypted = await crypto.subtle.encrypt(
            { name: "AES-GCM", iv },
            cryptoKey,
            encoder.encode(text)
        );

        return `${aesTypeSelect.value || "AES-128"}:${arrayBufferToBase64(iv)}:${arrayBufferToBase64(encrypted)}`;
    } catch (err) {
        return "AES encryption failed. Please check your key and try again.";
    }
}

async function aesDecrypt(text, key) {
    const validationError = validateAESKey(key);

    if (validationError) {
        showAESError(validationError);
        return validationError;
    }

    if (typeof crypto === "undefined" || !crypto.subtle) {
        return "AES is not available in this browser context. Please use a modern browser over HTTPS or localhost.";
    }

    try {
        const parts = text.trim().split(":");

        if (parts.length !== 3 || !aesKeyLengths[parts[0]]) {
            return "Invalid AES format. Use the encrypted result generated by this tool.";
        }

        const [encryptedType, ivBase64, cipherBase64] = parts;

        if (encryptedType !== aesTypeSelect.value) {
            return `Selected type must match encrypted data: ${encryptedType}.`;
        }

        showAESError("");

        const decoder = new TextDecoder();
        const cryptoKey = await importAESKey(key);
        const decrypted = await crypto.subtle.decrypt(
            { name: "AES-GCM", iv: base64ToUint8Array(ivBase64) },
            cryptoKey,
            base64ToUint8Array(cipherBase64)
        );

        return decoder.decode(decrypted);
    } catch (err) {
        return "AES decryption failed. Check the key, AES type, and encrypted text.";
    }
}

// ==========================
// DES IMPLEMENTATION
// ==========================
const desKeyLengths = {
    des: 8,
    tripledes: 24
};

const desIP = [
    58, 50, 42, 34, 26, 18, 10, 2, 60, 52, 44, 36, 28, 20, 12, 4,
    62, 54, 46, 38, 30, 22, 14, 6, 64, 56, 48, 40, 32, 24, 16, 8,
    57, 49, 41, 33, 25, 17, 9, 1, 59, 51, 43, 35, 27, 19, 11, 3,
    61, 53, 45, 37, 29, 21, 13, 5, 63, 55, 47, 39, 31, 23, 15, 7
];

const desFP = [
    40, 8, 48, 16, 56, 24, 64, 32, 39, 7, 47, 15, 55, 23, 63, 31,
    38, 6, 46, 14, 54, 22, 62, 30, 37, 5, 45, 13, 53, 21, 61, 29,
    36, 4, 44, 12, 52, 20, 60, 28, 35, 3, 43, 11, 51, 19, 59, 27,
    34, 2, 42, 10, 50, 18, 58, 26, 33, 1, 41, 9, 49, 17, 57, 25
];

const desE = [
    32, 1, 2, 3, 4, 5, 4, 5, 6, 7, 8, 9,
    8, 9, 10, 11, 12, 13, 12, 13, 14, 15, 16, 17,
    16, 17, 18, 19, 20, 21, 20, 21, 22, 23, 24, 25,
    24, 25, 26, 27, 28, 29, 28, 29, 30, 31, 32, 1
];

const desP = [
    16, 7, 20, 21, 29, 12, 28, 17, 1, 15, 23, 26, 5, 18, 31, 10,
    2, 8, 24, 14, 32, 27, 3, 9, 19, 13, 30, 6, 22, 11, 4, 25
];

const desPC1 = [
    57, 49, 41, 33, 25, 17, 9, 1, 58, 50, 42, 34, 26, 18,
    10, 2, 59, 51, 43, 35, 27, 19, 11, 3, 60, 52, 44, 36,
    63, 55, 47, 39, 31, 23, 15, 7, 62, 54, 46, 38, 30, 22,
    14, 6, 61, 53, 45, 37, 29, 21, 13, 5, 28, 20, 12, 4
];

const desPC2 = [
    14, 17, 11, 24, 1, 5, 3, 28, 15, 6, 21, 10,
    23, 19, 12, 4, 26, 8, 16, 7, 27, 20, 13, 2,
    41, 52, 31, 37, 47, 55, 30, 40, 51, 45, 33, 48,
    44, 49, 39, 56, 34, 53, 46, 42, 50, 36, 29, 32
];

const desKeyShifts = [1, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1];

const desSBoxes = [
    [14,4,13,1,2,15,11,8,3,10,6,12,5,9,0,7,0,15,7,4,14,2,13,1,10,6,12,11,9,5,3,8,4,1,14,8,13,6,2,11,15,12,9,7,3,10,5,0,15,12,8,2,4,9,1,7,5,11,3,14,10,0,6,13],
    [15,1,8,14,6,11,3,4,9,7,2,13,12,0,5,10,3,13,4,7,15,2,8,14,12,0,1,10,6,9,11,5,0,14,7,11,10,4,13,1,5,8,12,6,9,3,2,15,13,8,10,1,3,15,4,2,11,6,7,12,0,5,14,9],
    [10,0,9,14,6,3,15,5,1,13,12,7,11,4,2,8,13,7,0,9,3,4,6,10,2,8,5,14,12,11,15,1,13,6,4,9,8,15,3,0,11,1,2,12,5,10,14,7,1,10,13,0,6,9,8,7,4,15,14,3,11,5,2,12],
    [7,13,14,3,0,6,9,10,1,2,8,5,11,12,4,15,13,8,11,5,6,15,0,3,4,7,2,12,1,10,14,9,10,6,9,0,12,11,7,13,15,1,3,14,5,2,8,4,3,15,0,6,10,1,13,8,9,4,5,11,12,7,2,14],
    [2,12,4,1,7,10,11,6,8,5,3,15,13,0,14,9,14,11,2,12,4,7,13,1,5,0,15,10,3,9,8,6,4,2,1,11,10,13,7,8,15,9,12,5,6,3,0,14,11,8,12,7,1,14,2,13,6,15,0,9,10,4,5,3],
    [12,1,10,15,9,2,6,8,0,13,3,4,14,7,5,11,10,15,4,2,7,12,9,5,6,1,13,14,0,11,3,8,9,14,15,5,2,8,12,3,7,0,4,10,1,13,11,6,4,3,2,12,9,5,15,10,11,14,1,7,6,0,8,13],
    [4,11,2,14,15,0,8,13,3,12,9,7,5,10,6,1,13,0,11,7,4,9,1,10,14,3,5,12,2,15,8,6,1,4,11,13,12,3,7,14,10,15,6,8,0,5,9,2,6,11,13,8,1,4,10,7,9,5,0,15,14,2,3,12],
    [13,2,8,4,6,15,11,1,10,9,3,14,5,0,12,7,1,15,13,8,10,3,7,4,12,5,6,11,0,14,9,2,7,11,4,1,9,12,14,2,0,6,10,13,15,3,5,8,2,1,14,7,4,10,8,13,15,12,9,0,3,5,6,11]
];

function showDESError(message) {
    if (!desKeyError) return;

    desKeyError.innerText = message;
    desKeyError.style.display = message ? "block" : "none";
}

function isDESAlgorithm(algo) {
    return algo === "des" || algo === "tripledes";
}

function getSelectedDESLength() {
    return desKeyLengths[algoSelect?.value] || 8;
}

function validateDESKey(key, algo = algoSelect?.value || "des") {
    const expectedLength = desKeyLengths[algo];
    const label = algo === "tripledes" ? "Triple DES (3DES)" : "DES";

    if (!expectedLength) return "";

    if (!key) {
        return `Please enter a ${label} key.`;
    }

    if (!/^[\x20-\x7E]+$/.test(key)) {
        return `${label} key must use plain ASCII text characters only.`;
    }

    if (key.length !== expectedLength) {
        return `${label} key must be exactly ${expectedLength} characters. Current length: ${key.length}.`;
    }

    return "";
}

function desPermute(bits, table) {
    return table.map(position => bits[position - 1]);
}

function desXor(left, right) {
    return left.map((bit, index) => bit ^ right[index]);
}

function desLeftShift(bits, amount) {
    return bits.slice(amount).concat(bits.slice(0, amount));
}

function desBytesToBits(bytes) {
    const bits = [];

    for (const byte of bytes) {
        for (let i = 7; i >= 0; i--) {
            bits.push((byte >> i) & 1);
        }
    }

    return bits;
}

function desBitsToBytes(bits) {
    const bytes = new Uint8Array(bits.length / 8);

    for (let i = 0; i < bytes.length; i++) {
        let value = 0;

        for (let bit = 0; bit < 8; bit++) {
            value = (value << 1) | bits[i * 8 + bit];
        }

        bytes[i] = value;
    }

    return bytes;
}

function desCreateSubKeys(keyBytes) {
    let keyBits = desPermute(desBytesToBits(keyBytes), desPC1);
    let left = keyBits.slice(0, 28);
    let right = keyBits.slice(28);
    const subKeys = [];

    for (let round = 0; round < 16; round++) {
        left = desLeftShift(left, desKeyShifts[round]);
        right = desLeftShift(right, desKeyShifts[round]);
        subKeys.push(desPermute(left.concat(right), desPC2));
    }

    return subKeys;
}

function desRoundFunction(right, subKey) {
    const expanded = desPermute(right, desE);
    const mixed = desXor(expanded, subKey);
    const sBoxOutput = [];

    for (let box = 0; box < 8; box++) {
        const chunk = mixed.slice(box * 6, box * 6 + 6);
        const row = (chunk[0] << 1) | chunk[5];
        const col = (chunk[1] << 3) | (chunk[2] << 2) | (chunk[3] << 1) | chunk[4];
        const value = desSBoxes[box][row * 16 + col];

        sBoxOutput.push((value >> 3) & 1, (value >> 2) & 1, (value >> 1) & 1, value & 1);
    }

    return desPermute(sBoxOutput, desP);
}

function desCryptBlock(blockBytes, keyBytes, decrypt = false) {
    const subKeys = desCreateSubKeys(keyBytes);
    const roundKeys = decrypt ? subKeys.reverse() : subKeys;
    let blockBits = desPermute(desBytesToBits(blockBytes), desIP);
    let left = blockBits.slice(0, 32);
    let right = blockBits.slice(32);

    for (const roundKey of roundKeys) {
        const nextLeft = right;
        const nextRight = desXor(left, desRoundFunction(right, roundKey));
        left = nextLeft;
        right = nextRight;
    }

    return desBitsToBytes(desPermute(right.concat(left), desFP));
}

// ==========================
// TRIPLE DES IMPLEMENTATION
// ==========================
function tripleDESCryptBlock(blockBytes, keyBytes, decrypt = false) {
    const key1 = keyBytes.slice(0, 8);
    const key2 = keyBytes.slice(8, 16);
    const key3 = keyBytes.slice(16, 24);

    if (decrypt) {
        return desCryptBlock(
            desCryptBlock(
                desCryptBlock(blockBytes, key3, true),
                key2,
                false
            ),
            key1,
            true
        );
    }

    return desCryptBlock(
        desCryptBlock(
            desCryptBlock(blockBytes, key1, false),
            key2,
            true
        ),
        key3,
        false
    );
}

function desGetRandomBytes(length) {
    if (typeof crypto === "undefined" || !crypto.getRandomValues) {
        throw new Error("Secure random generation is not available in this browser.");
    }

    const bytes = new Uint8Array(length);
    crypto.getRandomValues(bytes);
    return bytes;
}

function desBytesToBase64(bytes) {
    let binary = "";

    for (const byte of bytes) {
        binary += String.fromCharCode(byte);
    }

    return btoa(binary);
}

function desBase64ToBytes(value) {
    if (!/^[A-Za-z0-9+/]+={0,2}$/.test(value) || value.length % 4 !== 0) {
        throw new Error("Invalid Base64 data.");
    }

    const binary = atob(value);
    const bytes = new Uint8Array(binary.length);

    for (let i = 0; i < binary.length; i++) {
        bytes[i] = binary.charCodeAt(i);
    }

    return bytes;
}

function desPadBytes(bytes) {
    const paddingLength = 8 - (bytes.length % 8 || 8);
    const finalPaddingLength = paddingLength === 0 ? 8 : paddingLength;
    const padded = new Uint8Array(bytes.length + finalPaddingLength);

    padded.set(bytes);
    padded.fill(finalPaddingLength, bytes.length);

    return padded;
}

function desUnpadBytes(bytes) {
    if (!bytes.length || bytes.length % 8 !== 0) {
        throw new Error("Invalid padded data.");
    }

    const paddingLength = bytes[bytes.length - 1];

    if (paddingLength < 1 || paddingLength > 8 || paddingLength > bytes.length) {
        throw new Error("Invalid padding.");
    }

    for (let i = bytes.length - paddingLength; i < bytes.length; i++) {
        if (bytes[i] !== paddingLength) {
            throw new Error("Invalid padding.");
        }
    }

    return bytes.slice(0, bytes.length - paddingLength);
}

function desProcessCBC(inputBytes, keyBytes, ivBytes, algo, decrypt = false) {
    const output = new Uint8Array(inputBytes.length);
    let previousBlock = ivBytes;

    for (let offset = 0; offset < inputBytes.length; offset += 8) {
        const block = inputBytes.slice(offset, offset + 8);
        let processedBlock;

        if (decrypt) {
            processedBlock = algo === "tripledes"
                ? tripleDESCryptBlock(block, keyBytes, true)
                : desCryptBlock(block, keyBytes, true);

            output.set(desXor(Array.from(processedBlock), Array.from(previousBlock)), offset);
            previousBlock = block;
        } else {
            const mixedBlock = new Uint8Array(desXor(Array.from(block), Array.from(previousBlock)));

            processedBlock = algo === "tripledes"
                ? tripleDESCryptBlock(mixedBlock, keyBytes, false)
                : desCryptBlock(mixedBlock, keyBytes, false);

            output.set(processedBlock, offset);
            previousBlock = processedBlock;
        }
    }

    return output;
}

function desEncrypt(text, key, algo = "des") {
    const validationError = validateDESKey(key, algo);

    if (validationError) {
        showDESError(validationError);
        return validationError;
    }

    try {
        showDESError("");

        const encoder = new TextEncoder();
        const keyBytes = encoder.encode(key);
        const ivBytes = desGetRandomBytes(8);
        const paddedBytes = desPadBytes(encoder.encode(text));
        const encryptedBytes = desProcessCBC(paddedBytes, keyBytes, ivBytes, algo, false);
        const label = algo === "tripledes" ? "3DES" : "DES";

        return `${label}:${desBytesToBase64(ivBytes)}:${desBytesToBase64(encryptedBytes)}`;
    } catch (err) {
        return "DES encryption failed. Please check your key and try again.";
    }
}

function desDecrypt(text, key, algo = "des") {
    const validationError = validateDESKey(key, algo);

    if (validationError) {
        showDESError(validationError);
        return validationError;
    }

    try {
        const parts = text.trim().split(":");
        const expectedLabel = algo === "tripledes" ? "3DES" : "DES";

        if (parts.length !== 3 || parts[0] !== expectedLabel) {
            return `Invalid ${expectedLabel} format. Use the encrypted result generated by this tool.`;
        }

        const encoder = new TextEncoder();
        const decoder = new TextDecoder();
        const keyBytes = encoder.encode(key);
        const ivBytes = desBase64ToBytes(parts[1]);
        const encryptedBytes = desBase64ToBytes(parts[2]);

        if (ivBytes.length !== 8 || encryptedBytes.length === 0 || encryptedBytes.length % 8 !== 0) {
            return `Invalid ${expectedLabel} encrypted data.`;
        }

        showDESError("");

        const decryptedBytes = desProcessCBC(encryptedBytes, keyBytes, ivBytes, algo, true);
        return decoder.decode(desUnpadBytes(decryptedBytes), { fatal: true });
    } catch (err) {
        return "DES decryption failed. Check the key and encrypted text.";
    }
}

function generateSecureDESKey(length) {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+[]{};:,.?";
    const randomValues = desGetRandomBytes(length);

    return Array.from(randomValues)
        .map(value => characters[value % characters.length])
        .join("");
}

// ==========================
// ONE-TIME PAD (OTP) IMPLEMENTATION
// ==========================
const otpPrintableAsciiPattern = /^[\x20-\x7E]+$/;

function showOTPError(message) {
    if (!otpKeyError) return;

    otpKeyError.innerText = message;
    otpKeyError.style.display = message ? "block" : "none";
}

function validateOTPText(text, mode = "encrypt") {
    if (!text || text.length === 0) {
        return mode === "encrypt"
            ? "Please enter plaintext before using OTP."
            : "Please enter OTP encrypted text.";
    }

    if (mode === "encrypt" && !otpPrintableAsciiPattern.test(text)) {
        return "OTP plaintext must use printable ASCII text characters only.";
    }

    return "";
}

function validateOTPKey(key, expectedLength) {
    if (!key || key.length === 0) {
        return "Please enter an OTP key.";
    }

    if (!otpPrintableAsciiPattern.test(key)) {
        return "OTP key must be a printable random string.";
    }

    if (key.length !== expectedLength) {
        return `OTP key length must match the text length exactly. Text length: ${expectedLength}, key length: ${key.length}.`;
    }

    return "";
}

function otpBytesToBase64(bytes) {
    let binary = "";

    for (const byte of bytes) {
        binary += String.fromCharCode(byte);
    }

    return btoa(binary);
}

function otpBase64ToBytes(value) {
    if (!/^[A-Za-z0-9+/]+={0,2}$/.test(value) || value.length % 4 !== 0) {
        throw new Error("Invalid Base64 data.");
    }

    const binary = atob(value);
    const bytes = new Uint8Array(binary.length);

    for (let i = 0; i < binary.length; i++) {
        bytes[i] = binary.charCodeAt(i);
    }

    return bytes;
}

function otpEncrypt(text, key) {
    const textError = validateOTPText(text, "encrypt");

    if (textError) {
        showOTPError(textError);
        return textError;
    }

    const keyError = validateOTPKey(key, text.length);

    if (keyError) {
        showOTPError(keyError);
        return keyError;
    }

    showOTPError("");

    const encryptedBytes = new Uint8Array(text.length);

    for (let i = 0; i < text.length; i++) {
        encryptedBytes[i] = text.charCodeAt(i) ^ key.charCodeAt(i);
    }

    return `OTP:${otpBytesToBase64(encryptedBytes)}`;
}

function otpDecrypt(text, key) {
    const textError = validateOTPText(text, "decrypt");

    if (textError) {
        showOTPError(textError);
        return textError;
    }

    try {
        const parts = text.trim().split(":");

        if (parts.length !== 2 || parts[0] !== "OTP") {
            return "Invalid OTP format. Use the encrypted result generated by this tool.";
        }

        const encryptedBytes = otpBase64ToBytes(parts[1]);
        const keyError = validateOTPKey(key, encryptedBytes.length);

        if (keyError) {
            showOTPError(keyError);
            return keyError;
        }

        showOTPError("");

        let decryptedText = "";

        for (let i = 0; i < encryptedBytes.length; i++) {
            const charCode = encryptedBytes[i] ^ key.charCodeAt(i);

            if (charCode < 32 || charCode > 126) {
                return "OTP decryption failed. Check that the key is correct.";
            }

            decryptedText += String.fromCharCode(charCode);
        }

        return decryptedText;
    } catch (err) {
        return "OTP decryption failed. Check the encrypted text and key.";
    }
}

function generateSecureOTPKey(length) {
    if (!length || length < 1) {
        throw new Error("Please enter text first so the OTP key can match its length.");
    }

    if (typeof crypto === "undefined" || !crypto.getRandomValues) {
        throw new Error("Secure random generation is not available in this browser.");
    }

    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+[]{};:,.?";
    const randomValues = new Uint8Array(length);
    crypto.getRandomValues(randomValues);

    return Array.from(randomValues)
        .map(value => characters[value % characters.length])
        .join("");
}
// ==========================
// ROTOR CIPHER (Advanced)
// ==========================

function parseRotorKey(key) {

    if (!key || key.trim() === "") {
        return null;
    }

    let arr = key.split(",").map(n => Number(n.trim()));

    // validation
    if (arr.some(isNaN)) {
        return null;
    }

    return arr;
}

function rotorEncrypt(text, key) {

    let rotors = parseRotorKey(key);
    if (!rotors || rotors.length < 2) {
        return " Rotor Cipher (Advanced) requires at least 2 numbers in key (e.g. 3,7,12)";
    }

    let result = "";

    for (let i = 0; i < text.length; i++) {

        let char = text[i];
        let shift = rotors[i % rotors.length];

        if (char.match(/[a-z]/i)) {

            let code = text.charCodeAt(i);

            if (code >= 65 && code <= 90) {
                char = String.fromCharCode(
                    ((code - 65 + shift + 26) % 26) + 65
                );
            }

            else if (code >= 97 && code <= 122) {
                char = String.fromCharCode(
                    ((code - 97 + shift + 26) % 26) + 97
                );
            }
        }

        result += char;
    }

    return result;
}

function rotorDecrypt(text, key) {

    let rotors = parseRotorKey(key);
    if (!rotors || rotors.length < 2) {
        return " Rotor Cipher (Advanced) requires at least 2 numbers in key (e.g. 3,7,12)";
    }
    let result = "";

    for (let i = 0; i < text.length; i++) {

        let char = text[i];
        let shift = rotors[i % rotors.length];

        if (char.match(/[a-z]/i)) {

            let code = text.charCodeAt(i);

            if (code >= 65 && code <= 90) {
                char = String.fromCharCode(
                    ((code - 65 - shift + 26) % 26) + 65
                );
            }

            else if (code >= 97 && code <= 122) {
                char = String.fromCharCode(
                    ((code - 97 - shift + 26) % 26) + 97
                );
            }
        }

        result += char;
    }

    return result;
}

// ==========================
// ROTATOR CIPHER (Basic)
// ==========================
function parseBasicRotatorKey(key) {
    const trimmedKey = String(key || "").trim();

    if (!/^-?\d+$/.test(trimmedKey)) {
        return null;
    }

    return Number(trimmedKey);
}

function basicRotatorEncrypt(text, key) {
    const shift = parseBasicRotatorKey(key);

    if (shift === null) {
        return "Invalid Basic Rotator key! Enter one number only (e.g., 3).";
    }

    let result = "";
    const normalizedShift = shift % 26;

    for (let i = 0; i < text.length; i++) {
        let char = text[i];
        const code = text.charCodeAt(i);

        if (code >= 65 && code <= 90) {
            char = String.fromCharCode(((code - 65 + normalizedShift + 26) % 26) + 65);
        } else if (code >= 97 && code <= 122) {
            char = String.fromCharCode(((code - 97 + normalizedShift + 26) % 26) + 97);
        }

        result += char;
    }

    return result;
}

function basicRotatorDecrypt(text, key) {
    const shift = parseBasicRotatorKey(key);

    if (shift === null) {
        return "Invalid Basic Rotator key! Enter one number only (e.g., 3).";
    }

    return basicRotatorEncrypt(text, -shift);
}
// ==========================
// Substitution Cipher
// ==========================
function createSubstitutionMap(key, reverse = false) {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    key = key.toUpperCase().replace(/[^A-Z]/g, "");

    const map = {};

    if (!reverse) {
        for (let i = 0; i < alphabet.length; i++) {
            map[alphabet[i]] = key[i];
        }
    } else {
        for (let i = 0; i < alphabet.length; i++) {
            map[key[i]] = alphabet[i];
        }
    }

    return map;
}

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

    if (!validateSubstitutionKey(key)) {
        return "Invalid Key! Key must contain 26 unique letters.";
    }

    const map = createSubstitutionMap(key);

    let result = "";

    for (let char of text) {

        let upperChar = char.toUpperCase();

        if (alphabet.includes(upperChar)) {

            let encryptedChar = map[upperChar];

            result += (char === char.toLowerCase())
                ? encryptedChar.toLowerCase()
                : encryptedChar;

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

    if (!validateSubstitutionKey(key)) {
        return "Invalid Key! Key must contain 26 unique letters.";
    }

    const map = createSubstitutionMap(key, true);

    let result = "";

    for (let char of text) {

        let upperChar = char.toUpperCase();

        if (alphabet.includes(upperChar)) {

            let decryptedChar = map[upperChar];

            result += (char === char.toLowerCase())
                ? decryptedChar.toLowerCase()
                : decryptedChar;

        } else {
            result += char;
        }
    }

    return result;
}
// ==========================
// AFFINE CIPHER
// ==========================
// modular inverse of a mod 26
function modInverse(a, m) {
    a = a % m;
    for (let x = 1; x < m; x++) {
        if ((a * x) % m === 1) return x;
    }
    return -1;
}

// ENCRYPT
function affineEncrypt(text, key) {

    if (!key || !key.includes(",")) {
        return " Enter key like: a,b";
    }

    let [a, b] = key.split(",").map(x => parseInt(x.trim()));

    if (isNaN(a) || isNaN(b)) {
        return " Key must be numbers (a,b)";
    }

    if (gcd(a, 26) !== 1) {
        return " 'a' must be coprime with 26 (e.g. 3,5,7,11,15,17,19,21,23,25)";
    }

    let result = "";

    for (let char of text) {

        if (char.match(/[a-z]/i)) {

            let code = char.charCodeAt(0);

            let base = (code >= 65 && code <= 90) ? 65 : 97;

            let x = code - base;

            let encrypted = (a * x + b) % 26;

            result += String.fromCharCode(encrypted + base);

        } else {
            result += char;
        }
    }

    return result;
}

// DECRYPT
function affineDecrypt(text, key) {

    if (!key || !key.includes(",")) {
        return " Enter key like: a,b";
    }

    let [a, b] = key.split(",").map(x => parseInt(x.trim()));

    if (isNaN(a) || isNaN(b)) {
        return " Key must be numbers (a,b)";
    }

    if (gcd(a, 26) !== 1) {
        return " Invalid 'a' value";
    }

    let a_inv = modInverse(a, 26);

    if (a_inv === -1) {
        return " No modular inverse found";
    }

    let result = "";

    for (let char of text) {

        if (char.match(/[a-z]/i)) {

            let code = char.charCodeAt(0);

            let base = (code >= 65 && code <= 90) ? 65 : 97;

            let x = code - base;

            let decrypted = (a_inv * (x - b + 26)) % 26;

            result += String.fromCharCode(decrypted + base);

        } else {
            result += char;
        }
    }

    return result;
}

// ==========================
// RAIL FENCE CIPHER IMPLEMENTATION
// ==========================
function showRailFenceError(message) {
    if (!railFenceKeyError) return;

    railFenceKeyError.innerText = message;
    railFenceKeyError.style.display = message ? "block" : "none";
}
function validateRailFenceKey(key, textLength = 0) {
    const trimmedKey = String(key).trim();

    if (trimmedKey === "") {
        return "Rail Fence key is required. Enter the number of rails.";
    }

    if (!/^\d+$/.test(trimmedKey)) {
        return "Rail Fence key must be a whole number only.";
    }

    const rails = Number(trimmedKey);

    if (!Number.isSafeInteger(rails)) {
        return "Rail Fence key is too large.";
    }

    if (rails < 2) {
        return "Rail Fence key must be greater than or equal to 2.";
    }

    if (textLength > 0 && rails > textLength) {
        return "Rail Fence key cannot be greater than the text length.";
    }

    return "";
}
function buildRailFencePattern(textLength, rails) {
    const pattern = [];
    let row = 0;
    let direction = 1;

    for (let i = 0; i < textLength; i++) {
        pattern.push(row);

        if (row === 0) {
            direction = 1;
        } else if (row === rails - 1) {
            direction = -1;
        }

        row += direction;
    }

    return pattern;
}
function railFenceEncrypt(text, key) {
    const validationError = validateRailFenceKey(key, text.length);

    if (validationError) {
        showRailFenceError(validationError);
        return validationError;
    }

    showRailFenceError("");

    const rails = Number(String(key).trim());
    const pattern = buildRailFencePattern(text.length, rails);
    const fence = Array.from({ length: rails }, () => []);

    for (let i = 0; i < text.length; i++) {
        fence[pattern[i]].push(text[i]);
    }

    return fence.map(row => row.join("")).join("");
}
function railFenceDecrypt(text, key) {
    const validationError = validateRailFenceKey(key, text.length);

    if (validationError) {
        showRailFenceError(validationError);
        return validationError;
    }

    showRailFenceError("");

    const rails = Number(String(key).trim());
    const pattern = buildRailFencePattern(text.length, rails);
    const railLengths = Array(rails).fill(0);

    for (let row of pattern) {
        railLengths[row]++;
    }

    const fence = [];
    let cursor = 0;

    for (let row = 0; row < rails; row++) {
        fence[row] = text.slice(cursor, cursor + railLengths[row]).split("");
        cursor += railLengths[row];
    }

    const railPositions = Array(rails).fill(0);
    let result = "";

    for (let row of pattern) {
        result += fence[row][railPositions[row]];
        railPositions[row]++;
    }

    return result;
}

// ==========================
// COLUMNAR TRANSPOSITION CIPHER IMPLEMENTATION
// ==========================
function validateColumnarKey(key) {
    if (!key || key.trim() === "") {
        return "Enter key as a keyword.";
    }

    const cleanKey = key.trim();

    if (cleanKey.length < 2) {
        return "Columnar key must contain at least 2 letters.";
    }

    if (!/^[a-zA-Z]+$/.test(cleanKey)) {
        return "Columnar key must contain English letters only.";
    }

    return "";
}

// ==========================
// COLUMNAR TRANSPOSITION CIPHER IMPLEMENTATION
// ==========================
function getColumnarOrder(key) {
    return key
        .toUpperCase()
        .split("")
        .map((char, index) => ({ char, index }))
        .sort((a, b) => {
            if (a.char === b.char) {
                return a.index - b.index;
            }

            return a.char.localeCompare(b.char);
        })
        .map(item => item.index);
}

// ==========================
// COLUMNAR TRANSPOSITION CIPHER IMPLEMENTATION
// ==========================
function columnarEncrypt(text, key) {
    const validationError = validateColumnarKey(key);

    if (validationError) {
        return validationError;
    }

    const cleanKey = key.trim();
    const columnCount = cleanKey.length;
    const order = getColumnarOrder(cleanKey);
    let result = "";

    for (let columnIndex of order) {
        for (let i = columnIndex; i < text.length; i += columnCount) {
            result += text[i];
        }
    }

    return result;
}

// ==========================
// COLUMNAR TRANSPOSITION CIPHER IMPLEMENTATION
// ==========================
function columnarDecrypt(text, key) {
    const validationError = validateColumnarKey(key);

    if (validationError) {
        return validationError;
    }

    const cleanKey = key.trim();
    const columnCount = cleanKey.length;
    const rowCount = Math.ceil(text.length / columnCount);
    const shortColumnCount = (columnCount * rowCount) - text.length;
    const order = getColumnarOrder(cleanKey);
    const columns = Array(columnCount).fill("");
    let cursor = 0;

    for (let sortedPosition = 0; sortedPosition < order.length; sortedPosition++) {
        const originalColumnIndex = order[sortedPosition];
        const isShortColumn = originalColumnIndex >= columnCount - shortColumnCount;
        const columnLength = rowCount - (isShortColumn ? 1 : 0);

        columns[originalColumnIndex] =
            text.slice(cursor, cursor + columnLength);

        cursor += columnLength;
    }

    let result = "";

    for (let row = 0; row < rowCount; row++) {
        for (let column = 0; column < columnCount; column++) {
            if (columns[column][row]) {
                result += columns[column][row];
            }
        }
    }

    return result;
}

// ==========================
// HILL CIPHER IMPLEMENTATION
// ==========================
function showHillError(message) {
    if (!hillKeyError) return;

    hillKeyError.innerText = message;
    hillKeyError.style.display = message ? "block" : "none";
}

// ==========================
// HILL CIPHER IMPLEMENTATION
// ==========================
function mod26(value) {
    return ((value % 26) + 26) % 26;
}

// ==========================
// HILL CIPHER IMPLEMENTATION
// ==========================
function hillGcd(a, b) {
    a = Math.abs(a);
    b = Math.abs(b);

    while (b !== 0) {
        const temp = b;
        b = a % b;
        a = temp;
    }

    return a;
}

// ==========================
// HILL CIPHER IMPLEMENTATION
// ==========================
function hillModInverse(value, modulus = 26) {
    const normalized = mod26(value);

    for (let i = 1; i < modulus; i++) {
        if ((normalized * i) % modulus === 1) {
            return i;
        }
    }

    return null;
}

// ==========================
// HILL CIPHER IMPLEMENTATION
// ==========================
function hillMinor(matrix, rowToRemove, columnToRemove) {
    return matrix
        .filter((_, rowIndex) => rowIndex !== rowToRemove)
        .map(row => row.filter((_, columnIndex) => columnIndex !== columnToRemove));
}

// ==========================
// HILL CIPHER IMPLEMENTATION
// ==========================
function hillDeterminant(matrix) {
    const size = matrix.length;

    if (size === 1) {
        return matrix[0][0];
    }

    if (size === 2) {
        return (matrix[0][0] * matrix[1][1]) -
            (matrix[0][1] * matrix[1][0]);
    }

    let determinant = 0;

    for (let column = 0; column < size; column++) {
        const sign = column % 2 === 0 ? 1 : -1;
        determinant += sign * matrix[0][column] *
            hillDeterminant(hillMinor(matrix, 0, column));
    }

    return determinant;
}

// ==========================
// HILL CIPHER IMPLEMENTATION
// ==========================
function hillMatrixInverse(matrix) {
    const size = matrix.length;
    const augmented = matrix.map((row, rowIndex) => [
        ...row.map(mod26),
        ...Array.from({ length: size }, (_, columnIndex) => rowIndex === columnIndex ? 1 : 0)
    ]);

    for (let column = 0; column < size; column++) {
        let pivotRow = -1;

        for (let row = column; row < size; row++) {
            if (hillModInverse(augmented[row][column]) !== null) {
                pivotRow = row;
                break;
            }
        }

        if (pivotRow === -1) {
            return null;
        }

        if (pivotRow !== column) {
            [augmented[column], augmented[pivotRow]] = [augmented[pivotRow], augmented[column]];
        }

        const pivotInverse = hillModInverse(augmented[column][column]);
        augmented[column] = augmented[column].map(value => mod26(value * pivotInverse));

        for (let row = 0; row < size; row++) {
            if (row === column) continue;

            const factor = augmented[row][column];

            if (factor === 0) continue;

            augmented[row] = augmented[row].map((value, index) =>
                mod26(value - factor * augmented[column][index])
            );
        }
    }

    return augmented.map(row => row.slice(size));
}

// ==========================
// HILL CIPHER IMPLEMENTATION
// ==========================
function blockHillSizeInput(event) {
    const allowedControlKeys = [
        "Backspace", "Delete", "Tab", "Escape", "Enter",
        "ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown",
        "Home", "End"
    ];

    if (
        allowedControlKeys.includes(event.key) ||
        ((event.ctrlKey || event.metaKey) && ["a", "c", "v", "x"].includes(event.key.toLowerCase()))
    ) {
        return;
    }

    if (!/^[\d*]$/.test(event.key)) {
        event.preventDefault();
    }
}

// ==========================
// HILL CIPHER IMPLEMENTATION
// ==========================
function getHillMatrixSize() {
    const size = Number(hillMatrixSize?.value || 2);
    return Number.isInteger(size) && size >= 2 && size <= 10 ? size : 2;
}

// ==========================
// HILL CIPHER IMPLEMENTATION
// ==========================
function syncHillMatrixSizeInput(size = getHillMatrixSize()) {
    if (hillMatrixSizeInput) {
        hillMatrixSizeInput.value = `${size}*${size}`;
    }
}

// ==========================
// HILL CIPHER IMPLEMENTATION
// ==========================
function parseHillMatrixSizeInput(value) {
    const normalizedValue = String(value || "").trim();
    const match = normalizedValue.match(/^([2-9]|10)\*\1$/);
    return match ? Number(match[1]) : null;
}

// ==========================
// HILL CIPHER IMPLEMENTATION
// ==========================
function sanitizeHillMatrixSizeInput(event) {
    event.target.value = event.target.value.replace(/[^\d*]/g, "");

    const size = parseHillMatrixSizeInput(event.target.value);

    if (size === null) {
        showHillError("Matrix size must be written as n*n from 2*2 to 10*10.");
        return;
    }

    updateHillMatrixSize(size);
}

// ==========================
// HILL CIPHER IMPLEMENTATION
// ==========================
function updateHillMatrixSize(size) {
    if (!Number.isInteger(size) || size < 2 || size > 10) return;

    if (hillMatrixSize) {
        hillMatrixSize.value = String(size);
    }

    syncHillMatrixSizeInput(size);
    renderHillMatrixInputs(size);
    showHillError("");
}

// ==========================
// HILL CIPHER IMPLEMENTATION
// ==========================
function parseHillMatrix() {
    const size = getHillMatrixSize();
    const rowInputs = Array.from(document.querySelectorAll(".hill-row-input"));
    const matrix = [];

    if (rowInputs.length !== size) {
        return { error: "Hill matrix rows are not ready. Select the matrix size again." };
    }

    for (let rowIndex = 0; rowIndex < size; rowIndex++) {
        const rowValue = rowInputs[rowIndex].value.trim();

        if (rowValue === "") {
            return { error: `Row ${rowIndex + 1} is required.` };
        }

        if (!/^\d+(\s+\d+)*$/.test(rowValue)) {
            return { error: `Row ${rowIndex + 1} must contain numbers separated by spaces only.` };
        }

        const row = rowValue.split(/\s+/).map(Number);

        if (row.length !== size) {
            return { error: `Row ${rowIndex + 1} must contain exactly ${size} numbers.` };
        }

        if (row.some(value => !Number.isSafeInteger(value))) {
            return { error: `Row ${rowIndex + 1} contains a number that is too large.` };
        }

        matrix.push(row.map(value => mod26(value)));
    }

    if (!hillMatrixInverse(matrix)) {
        return { error: "Hill matrix must be invertible modulo 26." };
    }

    return { matrix, size };
}

// ==========================
// HILL CIPHER IMPLEMENTATION
// ==========================
function hillPrepareText(text) {
    if (!/^[a-zA-Z]+$/.test(text)) {
        return { error: "Hill Cipher supports English letters only, without spaces or symbols." };
    }

    return { text: text.toUpperCase() };
}

// ==========================
// HILL CIPHER IMPLEMENTATION
// ==========================
function hillProcess(text, matrix, size) {
    let result = "";

    for (let i = 0; i < text.length; i += size) {
        const block = text.slice(i, i + size).padEnd(size, "X");
        const vector = block.split("").map(char => char.charCodeAt(0) - 65);

        for (let row = 0; row < size; row++) {
            let value = 0;

            for (let column = 0; column < size; column++) {
                value += matrix[row][column] * vector[column];
            }

            result += String.fromCharCode(mod26(value) + 65);
        }
    }

    return result;
}

// ==========================
// HILL CIPHER IMPLEMENTATION
// ==========================
function hillEncrypt(text) {
    const prepared = hillPrepareText(text);

    if (prepared.error) {
        showHillError(prepared.error);
        return prepared.error;
    }

    const parsed = parseHillMatrix();

    if (parsed.error) {
        showHillError(parsed.error);
        return parsed.error;
    }

    showHillError("");
    return hillProcess(prepared.text, parsed.matrix, parsed.size);
}

// ==========================
// HILL CIPHER IMPLEMENTATION
// ==========================
function hillDecrypt(text) {
    const prepared = hillPrepareText(text);

    if (prepared.error) {
        showHillError(prepared.error);
        return prepared.error;
    }

    const parsed = parseHillMatrix();

    if (parsed.error) {
        showHillError(parsed.error);
        return parsed.error;
    }

    const inverseMatrix = hillMatrixInverse(parsed.matrix);

    if (!inverseMatrix) {
        const error = "Hill matrix must be invertible modulo 26.";
        showHillError(error);
        return error;
    }

    showHillError("");
    return hillProcess(prepared.text, inverseMatrix, parsed.size).replace(/X+$/g, "");
}

// ==========================
// HILL CIPHER IMPLEMENTATION
// ==========================
function renderHillMatrixInputs(size = getHillMatrixSize()) {
    if (!hillMatrixRows) return;

    hillMatrixRows.innerHTML = "";

    for (let row = 0; row < size; row++) {
        const input = document.createElement("input");
        input.type = "text";
        input.className = "hill-row-input";
        input.placeholder = `Row ${row + 1}: ${Array(size).fill(0).join(" ")}`;
        input.inputMode = "numeric";
        input.pattern = "\\d+(\\s+\\d+)*";

        input.addEventListener("keydown", blockHillMatrixInput);
        input.addEventListener("input", sanitizeHillMatrixInput);

        hillMatrixRows.appendChild(input);
    }
}

// ==========================
// HILL CIPHER IMPLEMENTATION
// ==========================
function blockHillMatrixInput(event) {
    const allowedControlKeys = [
        "Backspace", "Delete", "Tab", "Escape", "Enter",
        "ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown",
        "Home", "End"
    ];

    if (
        allowedControlKeys.includes(event.key) ||
        ((event.ctrlKey || event.metaKey) && ["a", "c", "v", "x"].includes(event.key.toLowerCase()))
    ) {
        return;
    }

    if (!/^[\d ]$/.test(event.key)) {
        event.preventDefault();
    }
}

// ==========================
// HILL CIPHER IMPLEMENTATION
// ==========================
function sanitizeHillMatrixInput(event) {
    event.target.value = event.target.value
        .replace(/[^\d\s]/g, "")
        .replace(/\s+/g, " ");
    showHillError("");
}

// ==========================
// HILL CIPHER IMPLEMENTATION
// ==========================
function fillHillMatrix(matrix) {
    const size = matrix.length;

    if (hillMatrixSize) {
        hillMatrixSize.value = String(size);
    }

    syncHillMatrixSizeInput(size);
    renderHillMatrixInputs(size);

    Array.from(document.querySelectorAll(".hill-row-input"))
        .forEach((input, rowIndex) => {
            input.value = matrix[rowIndex].join(" ");
        });
}

// ==========================
// HILL CIPHER IMPLEMENTATION
// ==========================
function generateRandomHillMatrix() {
    const randomSize = getHillMatrixSize();
    const validDiagonalValues = [1, 3, 5, 7, 9, 11, 15, 17, 19, 21, 23, 25];
    const matrix = Array.from({ length: randomSize }, (_, row) =>
        Array.from({ length: randomSize }, (_, column) => {
            if (row === column) {
                return validDiagonalValues[Math.floor(Math.random() * validDiagonalValues.length)];
            }

            return column > row ? Math.floor(Math.random() * 26) : 0;
        })
    );

    fillHillMatrix(matrix);
    showHillError("");
}

// ==========================
// DIFFIE-HELLMAN KEY EXCHANGE - CLEAN IMPLEMENTATION
// ==========================
const dhCleanParameterSets = [
    { p: 467, g: 2 },
    { p: 887, g: 5 },
    { p: 1019, g: 2 },
    { p: 2029, g: 2 },
    { p: 3253, g: 6 }
];

// ==========================
// DIFFIE-HELLMAN KEY EXCHANGE - CLEAN IMPLEMENTATION
// ==========================
let dhGeneratedPeerPrivate = null;

// ==========================
// DIFFIE-HELLMAN KEY EXCHANGE - CLEAN IMPLEMENTATION
// ==========================
function showDHError(message) {
    if (!dhKeyError) return;

    dhKeyError.innerText = message;
    dhKeyError.style.display = message ? "block" : "none";
}

// ==========================
// DIFFIE-HELLMAN KEY EXCHANGE - CLEAN IMPLEMENTATION
// ==========================
function parseDHInteger(input, label) {
    const value = String(input?.value || "").trim();

    if (value === "") {
        return { error: `${label} is required.` };
    }

    if (!/^\d+$/.test(value)) {
        return { error: `${label} must contain digits only.` };
    }

    const numberValue = Number(value);

    if (!Number.isSafeInteger(numberValue)) {
        return { error: `${label} is too large for this demo.` };
    }

    return { value: numberValue };
}

// ==========================
// DIFFIE-HELLMAN KEY EXCHANGE - CLEAN IMPLEMENTATION
// ==========================
function isDHPrime(value) {
    if (value < 2) return false;
    if (value % 2 === 0) return value === 2;

    for (let i = 3; i * i <= value; i += 2) {
        if (value % i === 0) return false;
    }

    return true;
}

// ==========================
// DIFFIE-HELLMAN KEY EXCHANGE - CLEAN IMPLEMENTATION
// ==========================
function dhModPow(base, exponent, modulus) {
    let result = 1n;
    let currentBase = BigInt(base) % BigInt(modulus);
    let currentExponent = BigInt(exponent);
    const currentModulus = BigInt(modulus);

    while (currentExponent > 0n) {
        if (currentExponent % 2n === 1n) {
            result = (result * currentBase) % currentModulus;
        }

        currentExponent = currentExponent / 2n;
        currentBase = (currentBase * currentBase) % currentModulus;
    }

    return result;
}

// ==========================
// DIFFIE-HELLMAN KEY EXCHANGE - CLEAN IMPLEMENTATION
// ==========================
function getDHPrimeFactors(value) {
    const factors = new Set();
    let current = value;

    while (current % 2 === 0) {
        factors.add(2);
        current = current / 2;
    }

    for (let i = 3; i * i <= current; i += 2) {
        while (current % i === 0) {
            factors.add(i);
            current = current / i;
        }
    }

    if (current > 1) {
        factors.add(current);
    }

    return Array.from(factors);
}

// ==========================
// DIFFIE-HELLMAN KEY EXCHANGE - CLEAN IMPLEMENTATION
// ==========================
function isDHGenerator(generator, prime) {
    const factors = getDHPrimeFactors(prime - 1);

    for (let factor of factors) {
        if (dhModPow(generator, (prime - 1) / factor, prime) === 1n) {
            return false;
        }
    }

    return true;
}

// ==========================
// DIFFIE-HELLMAN KEY EXCHANGE - CLEAN IMPLEMENTATION
// ==========================
function validateDHCleanInputs() {
    const primeResult = parseDHInteger(dhPrimeInput, "Prime (p)");
    if (primeResult.error) return { error: primeResult.error };

    const generatorResult = parseDHInteger(dhGeneratorInput, "Generator (g)");
    if (generatorResult.error) return { error: generatorResult.error };

    const privateResult = parseDHInteger(dhPrivateInput, "Private Key");
    if (privateResult.error) return { error: privateResult.error };

    const p = primeResult.value;
    const g = generatorResult.value;
    const privateKey = privateResult.value;

    if (p < 5) {
        return { error: "Prime (p) must be at least 5." };
    }

    if (p > 1000000) {
        return { error: "Prime (p) must be 1,000,000 or less for this demo." };
    }

    if (!isDHPrime(p)) {
        return { error: "Prime (p) must be a valid prime number." };
    }

    if (g < 2 || g >= p) {
        return { error: "Generator (g) must be between 2 and p - 1." };
    }

    if (g > 100) {
        return { error: "Generator (g) must be a small number, 100 or less." };
    }

    if (!isDHGenerator(g, p)) {
        return { error: "Generator (g) must be valid for the selected prime." };
    }

    if (privateKey < 2 || privateKey >= p - 1) {
        return { error: "Private Key must be between 2 and p - 2." };
    }

    return { p, g, privateKey };
}

// ==========================
// DIFFIE-HELLMAN KEY EXCHANGE - CLEAN IMPLEMENTATION
// ==========================
function getDHRandomValue(maxExclusive) {
    if (maxExclusive <= 1) return 0;

    if (typeof crypto !== "undefined" && crypto.getRandomValues) {
        const values = new Uint32Array(1);
        crypto.getRandomValues(values);
        return values[0] % maxExclusive;
    }

    return Math.floor(Math.random() * maxExclusive);
}

// ==========================
// DIFFIE-HELLMAN KEY EXCHANGE - CLEAN IMPLEMENTATION
// ==========================
function generateRandomDHValues() {
    const params = dhCleanParameterSets[getDHRandomValue(dhCleanParameterSets.length)];
    const privateKey = 2 + getDHRandomValue(params.p - 3);

    dhGeneratedPeerPrivate = 2 + getDHRandomValue(params.p - 3);
    dhPrimeInput.value = String(params.p);
    dhGeneratorInput.value = String(params.g);
    dhPrivateInput.value = String(privateKey);
    showDHError("");
}

// ==========================
// DIFFIE-HELLMAN KEY EXCHANGE - CLEAN IMPLEMENTATION
// ==========================
function calculateDiffieHellman() {
    const validation = validateDHCleanInputs();

    if (validation.error) {
        showDHError(validation.error);
        return validation.error;
    }

    showDHError("");

    const peerPrivate = dhGeneratedPeerPrivate &&
        dhGeneratedPeerPrivate >= 2 &&
        dhGeneratedPeerPrivate < validation.p - 1
        ? dhGeneratedPeerPrivate
        : 2 + getDHRandomValue(validation.p - 3);

    dhGeneratedPeerPrivate = peerPrivate;

    const publicKeyA = dhModPow(validation.g, validation.privateKey, validation.p);
    const publicKeyB = dhModPow(validation.g, peerPrivate, validation.p);
    const sharedSecretA = dhModPow(publicKeyB, validation.privateKey, validation.p);
    const sharedSecretB = dhModPow(publicKeyA, peerPrivate, validation.p);

    if (sharedSecretA !== sharedSecretB) {
        return "Shared secret mismatch.";
    }

    return sharedSecretA.toString();
}


// ==========================
// Handle Buttons 
// ==========================

async function handleEncrypt() {
    const text = document.getElementById("userInput").value;
    const key = document.getElementById("keyInput").value;
    const algo = document.getElementById("algoSelect").value;
    let result = "";
     if (text.trim() === "") {
        document.getElementById("resultText").innerText = " Please enter text!";
        return;
    }

    if (algo === "caesar" && key.trim() === "") {
        document.getElementById("resultText").innerText = " Please enter shift number!";
        return;
    }
   if (algo === "vigenere" && (!key || !/^[a-zA-Z]+$/.test(key))) {
     document.getElementById("resultText").innerText = " Invalid Key! Letters only.";
        return;
    }
  else if (algo === "rsa") {

    const pubKey = rsaPublic.value.trim();

    if (!/^\d+\s*,\s*\d+$/.test(pubKey)) {
        result = "Invalid Public Key! Use format: e,n";
    } else {
        result = rsaEncrypt(text, pubKey);
    }
}
if (algo === "affine") {

    if (!key || !key.includes(",")) {
        document.getElementById("resultText").innerText =
            " Enter key as: a,b";
        return;
    }

    let [a, b] = key.split(",").map(x => parseInt(x.trim()));

    if (isNaN(a) || isNaN(b)) {
        document.getElementById("resultText").innerText =
            " a and b must be numbers";
        return;
    }

    if (gcd(a, 26) !== 1) {
        document.getElementById("resultText").innerText =
            " a must be coprime with 26";
        return;
    }
}

    if (algo === "caesar") {
        result = caesarEncrypt(text, key);
    }
    else if (algo === "vigenere") {
    result = vigenereEncrypt(text, key);
}
else if (algo === "rsa") {
    const pubKey = rsaPublic.value;

    if (!pubKey.includes(",")) {
        result = "Invalid Public Key! Must be e,n";
    } else {
        result = rsaEncrypt(text, pubKey);
    }
}
else if (algo === "hash") {

    result = await sha256Hash(text);
}
else if (algo === "aes") {
    result = await aesEncrypt(text, key);
}
// ==========================
// DES IMPLEMENTATION
// ==========================
else if (algo === "des") {
    result = desEncrypt(text, key, "des");
}
// ==========================
// TRIPLE DES IMPLEMENTATION
// ==========================
else if (algo === "tripledes") {
    result = desEncrypt(text, key, "tripledes");
}
// ==========================
// ONE-TIME PAD (OTP) IMPLEMENTATION
// ==========================
else if (algo === "otp") {
    result = otpEncrypt(text, key);
}
else if (algo === "rotator") {
    result = rotorEncrypt(text, key);
}
else if (algo === "rotatorbasic") {
    result = basicRotatorEncrypt(text, key);
}
else if (algo === "railfence") {
    result = railFenceEncrypt(text, key);
}
// ==========================
// COLUMNAR TRANSPOSITION CIPHER IMPLEMENTATION
// ==========================
else if (algo === "columnar") {
    result = columnarEncrypt(text, key);
}
// ==========================
// HILL CIPHER IMPLEMENTATION
// ==========================
else if (algo === "hill") {
    result = hillEncrypt(text);
}
    else if (algo === "substitution") {
    result = substitutionEncrypt(text, key);
}
else if (algo === "affine") {
    result = affineEncrypt(text, key);
}
if (typeof result === "string" && result.includes("Enter key")) {
    document.getElementById("resultText").innerText = result;
    return;
}

    document.getElementById("resultText").innerText = result;
    const resultBox = document.querySelector(".result-box");

resultBox.classList.remove("show-result");

setTimeout(() => {
    resultBox.classList.add("show-result");
}, 10);
}

async function handleDecrypt() {
    const text = document.getElementById("userInput").value;
    const key = document.getElementById("keyInput").value;
    const algo = document.getElementById("algoSelect").value;
    let result = "";
    if (text.trim() === "") {
        document.getElementById("resultText").innerText = " Please enter text!";
        return;
    }

    if (algo === "caesar" && key.trim() === "") {
        document.getElementById("resultText").innerText = " Please enter shift number!";
        return;
    }

    if (algo === "vigenere" && (!key || !/^[a-zA-Z]+$/.test(key))) {
        document.getElementById("resultText").innerText = " Invalid Key! Letters only.";
        return;
    }
    else if (algo === "rsa") {

    const privKey = rsaPrivate.value.trim();

    if (!/^\d+\s*,\s*\d+$/.test(privKey)) {
        result = "Invalid Private Key! Use format: d,n";
    } else {
        result = rsaDecrypt(text, privKey);
    }
}
if (algo === "affine") {
    if (!key.includes(",")) {
        document.getElementById("resultText").innerText = " Enter key as: a,b";
        return;
    }
}

    if (algo === "caesar") {
        result = caesarDecrypt(text, key);
    }
    else if (algo === "vigenere") {
    result = vigenereDecrypt(text, key);
}
else if (algo === "rsa") {
    const privKey = rsaPrivate.value;

    if (!privKey.includes(",")) {
        result = "Invalid Private Key! Must be d,n";
    } else {
        result = rsaDecrypt(text, privKey);
    }
}
else if (algo === "aes") {
    result = await aesDecrypt(text, key);
}
// ==========================
// DES IMPLEMENTATION
// ==========================
else if (algo === "des") {
    result = desDecrypt(text, key, "des");
}
// ==========================
// TRIPLE DES IMPLEMENTATION
// ==========================
else if (algo === "tripledes") {
    result = desDecrypt(text, key, "tripledes");
}
// ==========================
// ONE-TIME PAD (OTP) IMPLEMENTATION
// ==========================
else if (algo === "otp") {
    result = otpDecrypt(text, key);
}
else if (algo === "rotator") {
    result = rotorDecrypt(text, key);
}
else if (algo === "rotatorbasic") {
    result = basicRotatorDecrypt(text, key);
}
else if (algo === "railfence") {
    result = railFenceDecrypt(text, key);
}
// ==========================
// COLUMNAR TRANSPOSITION CIPHER IMPLEMENTATION
// ==========================
else if (algo === "columnar") {
    result = columnarDecrypt(text, key);
}
// ==========================
// HILL CIPHER IMPLEMENTATION
// ==========================
else if (algo === "hill") {
    result = hillDecrypt(text);
}
    else if (algo === "substitution") {
    result = substitutionDecrypt(text, key);
}
else if (algo === "affine") {
    result = affineDecrypt(text, key);
}
if (typeof result === "string" && result.includes("Enter key")) {
    document.getElementById("resultText").innerText = result;
    return;
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
// ==========================
// Update UI based on algorithm
// ==========================

function updateKeyUI() {

    if (!algoSelect) return;

    const algo = algoSelect.value;
    keyInput.style.display = "block";
    rsaPublic.style.display = "none";
    rsaPrivate.style.display = "none";
    generateBtn.style.display = "none";
    generateRSABtn.style.display = "none";
    // ==========================
    // UI CONTROLS FIX / BUTTON HANDLING
    // ==========================
    actionBtns.style.display = "flex";
    if (userInputGroup) userInputGroup.style.display = "block";
    decryptBtn.style.display = "inline-block";
    encryptBtn.style.display = "inline-block";
    actionBtns.style.justifyContent = "center";
    controlsBox.style.justifyContent = "space-between";
    generateRotorBtn.style.display = "none";
    generateAffineBtn.style.display = "none";
    generateVigenereBtn.style.display = "none";
    if (generateColumnarBtn) generateColumnarBtn.style.display = "none";
    if (aesTypeSelect) aesTypeSelect.style.display = "none";
    if (generateAESBtn) generateAESBtn.style.display = "none";
    if (generateDESBtn) generateDESBtn.style.display = "none";
    if (generateOTPBtn) generateOTPBtn.style.display = "none";
    if (hillCipherBox) hillCipherBox.style.display = "none";
    if (generateHillKeyBtn) generateHillKeyBtn.style.display = "none";
    if (diffieHellmanBox) diffieHellmanBox.style.display = "none";
    if (generateDHValuesBtn) generateDHValuesBtn.style.display = "none";
    if (generateDHSharedBtn) generateDHSharedBtn.style.display = "none";
    keyInput.type = "text";
    keyInput.removeAttribute("min");
    keyInput.removeAttribute("step");
    keyInput.removeAttribute("inputmode");
    keyInput.removeAttribute("pattern");
    keyInput.placeholder = "Enter key...";
    // ==========================
    // UI CONTROLS FIX / BUTTON HANDLING
    // ==========================
    encryptBtn.innerText = " Encrypt ";
    decryptBtn.innerText = " Decrypt ";
    showAESError("");
    showDESError("");
    showOTPError("");
    showRailFenceError("");
    showHillError("");
    showDHError("");

    // ==========================
    // Show / Hide Generate Button
    // ==========================

    if (algo === "substitution") {
        generateBtn.style.display = "block";
    } else {
        generateBtn.style.display = "none";
    }

    // ==========================
    // Key Hint Messages
    // ==========================

    if (algo === "caesar") {
        keyHint.innerText = "Enter a number (e.g., 3)";
    }

    else if (algo === "vigenere") {
        generateVigenereBtn.style.display = "block";
        keyHint.innerText = "Enter a word (e.g., KEY)";
    }

    else if (algo === "affine") {
        generateAffineBtn.style.display = "block";
        keyHint.innerText = "Enter two numbers: a,b (e.g. 5,8). a must be coprime with 26";
    }

    else if (algo === "railfence") {
        keyInput.type = "number";
        keyInput.min = "2";
        keyInput.step = "1";
        keyInput.inputMode = "numeric";
        keyInput.pattern = "\\d+";
        keyInput.placeholder = "Enter number of rails...";
        keyHint.innerText = "Enter number of rails (e.g., 3)";
    }

    else if (algo === "columnar") {
        generateColumnarBtn.style.display = "block";
        keyHint.innerText = "Enter keyword (e.g., SECRET)";
    }

    else if (algo === "substitution") {
        keyHint.innerText =
            "Key must contain exactly 26 unique English letters";
    }

    else if (algo === "hill") {
        // ==========================
        // HILL CIPHER IMPLEMENTATION
        // ==========================
        keyInput.style.display = "none";
        hillCipherBox.style.display = "flex";
        generateHillKeyBtn.style.display = "block";
        syncHillMatrixSizeInput();
        renderHillMatrixInputs();
        keyHint.innerText = "Enter matrix size as n*n, then enter an invertible matrix key modulo 26";
    }

    else if (algo === "rotator") {

    keyInput.style.display = "block";

    rsaPublic.style.display = "none";
    rsaPrivate.style.display = "none";

    generateBtn.style.display = "none";
    generateRSABtn.style.display = "none";

    decryptBtn.style.display = "inline-block";
    encryptBtn.style.display = "inline-block";
    generateRotorBtn.style.display = "block";

    keyHint.innerText =
    "Rotor Cipher (Advanced): enter numbers like 3,7,12,5,9";
}

    else if (algo === "rotatorbasic") {

    keyInput.style.display = "block";
    keyInput.type = "text";
    keyInput.inputMode = "numeric";
    keyInput.pattern = "-?\\d+";
    keyInput.placeholder = "Enter one number only...";

    rsaPublic.style.display = "none";
    rsaPrivate.style.display = "none";

    generateBtn.style.display = "none";
    generateRSABtn.style.display = "none";

    decryptBtn.style.display = "inline-block";
    encryptBtn.style.display = "inline-block";

    keyHint.innerText =
    "Rotator Cipher (Basic): enter one number only (e.g., 2)";
}

    else if (algo === "otp") {
        // ==========================
        // ONE-TIME PAD (OTP) IMPLEMENTATION
        // ==========================
        keyInput.style.display = "block";
        keyInput.type = "text";
        keyInput.placeholder = "Enter random text key...";
        if (generateOTPBtn) generateOTPBtn.style.display = "block";
        keyHint.innerText =
            "OTP key must be a random string with exactly the same length as the text.";
    }

   else if (algo === "hash") {

    keyInput.style.display = "none";

    rsaPublic.style.display = "none";

    rsaPrivate.style.display = "none";

    generateBtn.style.display = "none";

    generateRSABtn.style.display = "none";

    decryptBtn.style.display = "none";

    encryptBtn.style.display = "inline-block";

    // Center Encrypt Button
    actionBtns.style.justifyContent = "center";

    // Center Controls
    controlsBox.style.justifyContent = "center";

    keyHint.innerText =
    "SHA-256 does not require a key";
}

    else if (algo === "rsa") {

    keyInput.style.display = "none";
    rsaPublic.style.display = "block";
    rsaPrivate.style.display = "block";
    generateRSABtn.style.display = "block";

    keyHint.innerText =
        "Enter Public Key (e,n) and Private Key (d,n)";
    }
    else if (algo === "aes") {
        keyInput.style.display = "block";
        aesTypeSelect.style.display = "block";
        generateAESBtn.style.display = "block";
        keyHint.innerText =
            `${aesTypeSelect.value} requires exactly ${getSelectedAESLength()} ASCII characters.`;
    }

    else if (algo === "des") {
        // ==========================
        // DES IMPLEMENTATION
        // ==========================
        keyInput.style.display = "block";
        keyInput.placeholder = "Enter exactly 8 characters...";
        if (generateDESBtn) generateDESBtn.style.display = "block";
        keyHint.innerText =
            "DES requires exactly 8 ASCII text characters.";
    }

    else if (algo === "tripledes") {
        // ==========================
        // TRIPLE DES IMPLEMENTATION
        // ==========================
        keyInput.style.display = "block";
        keyInput.placeholder = "Enter exactly 24 characters...";
        if (generateDESBtn) generateDESBtn.style.display = "block";
        keyHint.innerText =
            "Triple DES (3DES) requires exactly 24 ASCII text characters.";
    }

    else if (algo === "diffie") {
        // ==========================
        // DIFFIE-HELLMAN KEY EXCHANGE - CLEAN IMPLEMENTATION
        // ==========================
        keyInput.style.display = "none";
        if (userInputGroup) userInputGroup.style.display = "none";
        rsaPublic.style.display = "none";
        rsaPrivate.style.display = "none";
        diffieHellmanBox.style.display = "flex";
        generateDHValuesBtn.style.display = "block";
        generateDHSharedBtn.style.display = "inline-block";
        // ==========================
        // UI CONTROLS FIX / BUTTON HANDLING
        // ==========================
        encryptBtn.innerText = " Encrypt ";
        decryptBtn.innerText = " Decrypt ";
        actionBtns.style.display = "flex";
        encryptBtn.style.display = "none";
        decryptBtn.style.display = "none";
        actionBtns.style.justifyContent = "center";
        controlsBox.style.justifyContent = "space-between";
        keyHint.innerText =
            "Enter p, g, private key, and optional other public key.";
    }

    else {
        keyInput.style.display = "block";
        rsaPublic.style.display = "none";
        rsaPrivate.style.display = "none";
        keyHint.innerText = "Enter appropriate key";
    }
}

// ==========================
// Run on Page Load
// ==========================

if (algoSelect) {

    updateKeyUI();

    algoSelect.addEventListener("change", updateKeyUI);
}

// ==========================
// Generate Random Substitution Key
// ==========================

if (generateBtn) {

    generateBtn.addEventListener("click", () => {

        const alphabet =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

        // Shuffle letters
        for (let i = alphabet.length - 1; i > 0; i--) {

            const j = Math.floor(
                Math.random() * (i + 1)
            );

            [alphabet[i], alphabet[j]] =
            [alphabet[j], alphabet[i]];
        }

        // Put generated key inside input
        keyInput.value = alphabet.join("");
    });
}

// ==========================
// Generate Random Affine Key
// ==========================

if (generateAffineBtn) {

    generateAffineBtn.addEventListener("click", () => {

        const validAValues = [1, 3, 5, 7, 9, 11, 15, 17, 19, 21, 23, 25];

        const a =
        validAValues[
            Math.floor(Math.random() * validAValues.length)
        ];

        const b = Math.floor(Math.random() * 26);

        keyInput.value = `${a},${b}`;
    });
}

// ==========================
// Generate Random Vigenere Key
// ==========================

if (generateVigenereBtn) {

    generateVigenereBtn.addEventListener("click", () => {

        const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        const length = Math.floor(Math.random() * 8) + 4;
        let key = "";

        for (let i = 0; i < length; i++) {
            key += letters[Math.floor(Math.random() * letters.length)];
        }

        keyInput.value = key;
    });
}

// ==========================
// COLUMNAR TRANSPOSITION CIPHER IMPLEMENTATION
// ==========================
if (generateColumnarBtn) {

    generateColumnarBtn.addEventListener("click", () => {

        const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const length = Math.floor(Math.random() * 5) + 5;
        let key = "";

        for (let i = 0; i < length; i++) {
            key += letters[Math.floor(Math.random() * letters.length)];
        }

        keyInput.value = key;
    });
}

// ==========================
// HILL CIPHER IMPLEMENTATION
// ==========================
if (hillMatrixSize) {

    hillMatrixSize.addEventListener("change", () => {
        updateHillMatrixSize(getHillMatrixSize());
    });
}

// ==========================
// HILL CIPHER IMPLEMENTATION
// ==========================
if (hillMatrixSizeInput) {

    hillMatrixSizeInput.addEventListener("keydown", blockHillSizeInput);
    hillMatrixSizeInput.addEventListener("input", sanitizeHillMatrixSizeInput);
    hillMatrixSizeInput.addEventListener("blur", () => {
        if (parseHillMatrixSizeInput(hillMatrixSizeInput.value) === null) {
            syncHillMatrixSizeInput();
            showHillError("");
        }
    });
}

// ==========================
// HILL CIPHER IMPLEMENTATION
// ==========================
if (generateHillKeyBtn) {

    generateHillKeyBtn.addEventListener("click", generateRandomHillMatrix);
}
// ================= CODEX AES Encryption Random Key Generator =================
function generateSecureAESKey() {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+[]{};:,.?";
    const randomValues = new Uint32Array(getSelectedAESLength());

    crypto.getRandomValues(randomValues);

    return Array.from(randomValues)
        .map(value => characters[value % characters.length])
        .join("");
}

if (generateAESBtn) {

    generateAESBtn.addEventListener("click", () => {

        if (typeof crypto === "undefined" || !crypto.getRandomValues) {
            showAESError("Secure random generation is not available in this browser.");
            return;
        }

        keyInput.value = generateSecureAESKey();
        showAESError("");
        keyHint.innerText =
            `${aesTypeSelect.value} requires exactly ${getSelectedAESLength()} ASCII characters.`;
    });
}

if (aesTypeSelect) {

    aesTypeSelect.addEventListener("change", () => {
        showAESError("");
        keyHint.innerText =
            `${aesTypeSelect.value} requires exactly ${getSelectedAESLength()} ASCII characters.`;
    });
}

// ==========================
// DES IMPLEMENTATION
// ==========================
if (generateDESBtn) {

    generateDESBtn.addEventListener("click", () => {

        try {
            keyInput.value = generateSecureDESKey(getSelectedDESLength());
            showDESError("");
            keyHint.innerText = algoSelect.value === "tripledes"
                ? "Triple DES (3DES) requires exactly 24 ASCII text characters."
                : "DES requires exactly 8 ASCII text characters.";
        } catch (err) {
            showDESError(err.message);
        }
    });
}

// ==========================
// ONE-TIME PAD (OTP) IMPLEMENTATION
// ==========================
if (generateOTPBtn) {

    generateOTPBtn.addEventListener("click", () => {

        const text = document.getElementById("userInput").value;
        const textError = validateOTPText(text, "encrypt");

        if (textError) {
            showOTPError(textError);
            return;
        }

        try {
            keyInput.value = generateSecureOTPKey(text.length);
            showOTPError("");
            keyHint.innerText =
                `OTP key generated with ${text.length} characters to match the text.`;
        } catch (err) {
            showOTPError(err.message);
        }
    });
}

// ==========================
// RAIL FENCE CIPHER IMPLEMENTATION
// ==========================
if (keyInput) {

    keyInput.addEventListener("keydown", (event) => {

        if (algoSelect?.value !== "railfence") return;

        const allowedControlKeys = [
            "Backspace", "Delete", "Tab", "Escape", "Enter",
            "ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown",
            "Home", "End"
        ];

        if (
            allowedControlKeys.includes(event.key) ||
            ((event.ctrlKey || event.metaKey) && ["a", "c", "v", "x"].includes(event.key.toLowerCase()))
        ) {
            return;
        }

        if (!/^\d$/.test(event.key)) {
            event.preventDefault();
        }
    });

    keyInput.addEventListener("input", () => {

        if (algoSelect?.value !== "railfence") return;

        keyInput.value = keyInput.value.replace(/\D/g, "");
        showRailFenceError("");
    });

    // ==========================
    // DES IMPLEMENTATION
    // ==========================
    keyInput.addEventListener("input", () => {

        if (!isDESAlgorithm(algoSelect?.value)) return;

        showDESError("");
    });

    // ==========================
    // ROTATOR CIPHER (Basic)
    // ==========================
    keyInput.addEventListener("input", () => {

        if (algoSelect?.value !== "rotatorbasic") return;
    });

    // ==========================
    // ONE-TIME PAD (OTP) IMPLEMENTATION
    // ==========================
    keyInput.addEventListener("input", () => {

        if (algoSelect?.value !== "otp") return;

        keyInput.value = keyInput.value.replace(/[^\x20-\x7E]/g, "");
        showOTPError("");
    });
}

// ==========================
// DIFFIE-HELLMAN KEY EXCHANGE - CLEAN IMPLEMENTATION
// ==========================
function blockNonNumericInput(event) {
    const allowedControlKeys = [
        "Backspace", "Delete", "Tab", "Escape", "Enter",
        "ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown",
        "Home", "End"
    ];

    if (
        allowedControlKeys.includes(event.key) ||
        ((event.ctrlKey || event.metaKey) && ["a", "c", "v", "x"].includes(event.key.toLowerCase()))
    ) {
        return;
    }

    if (!/^\d$/.test(event.key)) {
        event.preventDefault();
    }
}

// ==========================
// DIFFIE-HELLMAN KEY EXCHANGE - CLEAN IMPLEMENTATION
// ==========================
function sanitizeDHInput(event) {
    event.target.value = event.target.value.replace(/\D/g, "");
    showDHError("");
}

// ==========================
// DIFFIE-HELLMAN KEY EXCHANGE - CLEAN IMPLEMENTATION
// ==========================
[dhPrimeInput, dhGeneratorInput, dhPrivateInput].forEach(input => {
    if (!input) return;

    input.addEventListener("keydown", blockNonNumericInput);
    input.addEventListener("input", sanitizeDHInput);
});

// ==========================
// DIFFIE-HELLMAN KEY EXCHANGE - CLEAN IMPLEMENTATION
// ==========================
if (generateDHValuesBtn) {

    generateDHValuesBtn.addEventListener("click", () => {
        generateRandomDHValues();
    });
}

// ==========================
// DIFFIE-HELLMAN KEY EXCHANGE - CLEAN IMPLEMENTATION
// ==========================
if (generateDHSharedBtn) {

    generateDHSharedBtn.addEventListener("click", () => {
        document.getElementById("resultText").innerText = calculateDiffieHellman();
    });
}
// ==========================
// Generate Random RSA Keys
// ==========================

function gcdBigInt(a, b) {

    while (b !== 0n) {

        let t = b;

        b = a % b;

        a = t;
    }

    return a;
}

// Modular inverse
function modInverseBigInt(e, phi) {

    let [old_r, r] = [phi, e];

    let [old_s, s] = [1n, 0n];

    let [old_t, t] = [0n, 1n];

    while (r !== 0n) {

        let q = old_r / r;

        [old_r, r] = [r, old_r - q * r];

        [old_s, s] = [s, old_s - q * s];

        [old_t, t] = [t, old_t - q * t];
    }

    return (old_t % phi + phi) % phi;
}

// Random prime list
const primeNumbers = [
    61n, 53n, 59n, 47n,
    71n, 67n, 73n, 79n
];

if (generateRSABtn) {

    generateRSABtn.addEventListener("click", () => {

        // Random p
        const p =
        primeNumbers[
            Math.floor(Math.random() * primeNumbers.length)
        ];

        // Random q
        let q =
        primeNumbers[
            Math.floor(Math.random() * primeNumbers.length)
        ];

        while (q === p) {

            q =
            primeNumbers[
                Math.floor(Math.random() * primeNumbers.length)
            ];
        }

        const n = p * q;

        const phi =
        (p - 1n) * (q - 1n);

        let e = 17n;

        while (gcdBigInt(e, phi) !== 1n) {
            e += 2n;
        }

        const d = modInverseBigInt(e, phi);

        rsaPublic.value = `${e},${n}`;

        rsaPrivate.value = `${d},${n}`;
    });
}

function generateRandomRotorKey() {

    let size = Math.floor(Math.random() * 4) + 3;


    let arr = [];

    for (let i = 0; i < size; i++) {
        arr.push(Math.floor(Math.random() * 25) + 1);
    }

    keyInput.value = arr.join(",");
}
if (generateRotorBtn) {
    generateRotorBtn.addEventListener("click", generateRandomRotorKey);
}

// ==========================
// SHARED UI ENHANCEMENTS
// ==========================
function initBackToTopButton() {
    const backToTopBtn = document.querySelector(".back-to-top");
    if (!backToTopBtn) return;

    const toggleBackToTop = () => {
        backToTopBtn.classList.toggle("is-visible", window.scrollY > 420);
    };

    backToTopBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    window.addEventListener("scroll", toggleBackToTop, { passive: true });
    toggleBackToTop();
}

initBackToTopButton();
