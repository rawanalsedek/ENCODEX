const algorithmData = {
    caesar: {

    title: "Caesar Cipher",

    description:
    "A classical substitution cipher that encrypts plaintext by shifting each letter by a fixed number of positions in the alphabet.",

    overview: [
        {
            title: "Type",
            text: "Symmetric Key / Monoalphabetic Cipher"
        },
        {
            title: "Security",
            text: "Low Security"
        },
        {
            title: "Key Space",
            text: "25 possible keys"
        }
    ],

    encryption:
    "Each plaintext letter is shifted forward using a fixed shift value.",

    decryption:
    "Each ciphertext letter is shifted backward using the same key.",

    rules: [
        "Uses one shared secret key.",
        "Key represents shift value.",
        "Only 25 possible keys exist.",
        "Letters keep repeating with same mapping."
    ],

    advantages:
    "Easy to implement, fast, and perfect for beginners learning cryptography.",

    disadvantages:
    "Weak against brute force and frequency analysis attacks.",

    security:
    "Caesar Cipher is not secure for modern communication and is mainly used for educational purposes.",

    steps: [
        "H → K",
        "E → H",
        "L → O",
        "L → O",
        "O → R"
    ],

    faq:
    [
        "Is it secure? → No, it is very weak.",
        "Does it use one key? → Yes.",
        "What type is it? → Symmetric monoalphabetic cipher."
    ]
},

    vigenere: {

        title: "Vigenere Cipher",

        description:
        "Vigenere Cipher is an encryption method that uses multiple substitution alphabets to encrypt alphabetic text using a keyword.",

        overview: [
            {
                title: "Type",
                text: "Symmetric Key / Polyalphabetic Substitution Cipher"
            },
            {
                title: "Security",
                text: "Medium Security"
            },
            {
                title: "Key",
                text: "Shared keyword"
            }
        ],

        encryption:
        "Each plaintext letter is shifted by the value of the matching keyword letter. The keyword is repeated until it matches the plaintext length.",

        decryption:
        "Each ciphertext letter is shifted backward by the value of the matching repeated keyword letter to recover the plaintext.",

        rules: [
            "Uses one shared keyword.",
            "The keyword is repeated to match the plaintext length.",
            "Each key letter creates a different Caesar-style shift.",
            "Sender and receiver must know the same keyword.",
            "Only alphabetic text is processed by the classical method."
        ],

        advantages:
        "More secure than Caesar Cipher, uses multiple substitution alphabets, is harder to break with simple frequency analysis, and is easy to understand for beginners.",

        disadvantages:
        "Vulnerable if the keyword is short, repeated keys reduce security, and it can be broken using statistical attacks.",

        security:
        "Vigenere Cipher is stronger than Caesar Cipher, but modern computers can break it using frequency analysis, Kasiski Examination, and statistical cryptanalysis. It is not secure for modern real-world communication.",

        steps: [
            "Choose a keyword",
            "Repeat the keyword to match the plaintext length",
            "Convert letters to values A=0 through Z=25",
            "Encrypt with Ei = (Pi + Ki) mod 26",
            "Decrypt with Di = (Ei - Ki + 26) mod 26"
        ],

        faq:
        [
            "Is Vigenere Cipher secure? It is stronger than Caesar Cipher but not secure enough for modern systems.",
            "Does it use one key? Yes, it uses one shared keyword.",
            "What type is it? It is a Polyalphabetic Substitution Cipher.",
            "What is the biggest weakness? Repeating keywords and statistical attacks.",
            "What is Kasiski Examination? A cryptanalysis method that detects repeating patterns in ciphertext."
        ]
    },

    rsa: {

        title: "RSA Cipher",

        description:
        "RSA Algorithm is an asymmetric encryption algorithm that uses a public key for encryption and a private key for decryption.",

        overview: [
            {
                title: "Type",
                text: "Asymmetric Key Cipher"
            },
            {
                title: "Security",
                text: "High Security with large keys"
            },
            {
                title: "Keys",
                text: "Public Key and Private Key"
            }
        ],

        encryption:
        "RSA encrypts a numeric message by raising it to the public exponent e and reducing the result modulo n.",

        decryption:
        "RSA decrypts ciphertext by raising it to the private exponent d and reducing the result modulo n.",

        rules: [
            "Uses two keys: public and private.",
            "The public key is shared for encryption.",
            "The private key must stay secret for decryption.",
            "Security is based on the difficulty of factoring large numbers.",
            "Real RSA must use large secure key sizes such as 2048-bit or more."
        ],

        advantages:
        "Very secure when implemented correctly, does not require sharing the private key, is used globally, and supports digital signatures.",

        disadvantages:
        "Slower than symmetric encryption, requires large computation, is not suitable for large data directly, and depends heavily on strong prime numbers.",

        security:
        "RSA is secure only with large keys, strong random prime generation, and careful implementation. Weak primes, small key sizes, or bad padding can break RSA.",

        steps: [
            "Choose two prime numbers p and q",
            "Compute n = p x q",
            "Compute phi(n) = (p - 1)(q - 1)",
            "Choose e so gcd(e, phi(n)) = 1",
            "Compute d as the modular inverse of e modulo phi(n)"
        ],

        faq:
        [
            "Is RSA secure? Yes, if implemented correctly with large key sizes.",
            "Does RSA use one key? No, it uses public and private keys.",
            "What is RSA based on? The large prime factorization problem.",
            "Why is RSA important? It enables secure communication over insecure networks."
        ]
    },

    hash: {

        title: "Hash Function",

        description:
        "A Cryptographic Hash Function is a one-way mathematical function that converts input data of any size into a fixed-size output called a hash value or digest.",

        overview: [
            {
                title: "Type",
                text: "One-Way Cryptographic Function"
            },
            {
                title: "Security",
                text: "High Security for integrity"
            },
            {
                title: "Output",
                text: "Fixed-size digest"
            }
        ],

        encryption:
        "Hashing is not encryption. It transforms input data into a fixed-length digest for integrity checking and verification.",

        decryption:
        "Hash functions have no decryption step because they are designed to be one-way and irreversible.",

        rules: [
            "The same input always produces the same hash.",
            "A tiny input change should produce a completely different hash.",
            "The original input cannot be recovered from the digest.",
            "Good hash functions resist collisions.",
            "Hashing is used for integrity, not secret-message encryption."
        ],

        advantages:
        "Very fast, useful for secure integrity checking, widely used, and excellent at detecting tampering.",

        disadvantages:
        "Cannot recover original data, weak algorithms such as MD5 and SHA-1 are broken, and hashing is not encryption.",

        security:
        "MD5 is insecure, SHA-1 is deprecated, SHA-256 is secure for modern integrity use, and SHA-3 is the most modern standardized family.",

        steps: [
            "Accept input data",
            "Pad or prepare the message according to the algorithm",
            "Process fixed-size blocks through compression or permutation rounds",
            "Produce a fixed-size digest",
            "Compare digests to verify integrity"
        ],

        faq:
        [
            "Can a hash be decrypted? No, hashing is one-way.",
            "Is hashing encryption? No, it is used for integrity and verification.",
            "Which hash is modern? SHA-256 and SHA-3 are modern choices.",
            "Are MD5 and SHA-1 secure? No, MD5 is insecure and SHA-1 is deprecated."
        ]
    },

    rotator: {

        title: "Rotor Cipher (Advanced)",

        description:
        "Rotor Cipher is an advanced substitution cipher that uses multiple rotation keys applied cyclically to each character in the plaintext.",

        overview: [
            {
                title: "Type",
                text: "Polyalphabetic Substitution Cipher"
            },
            {
                title: "Security",
                text: "Medium Security"
            },
            {
                title: "Key",
                text: "Repeating rotation key list"
            }
        ],

        encryption:
        "Each alphabetic character is shifted using the next value from a repeating key array, so different characters can receive different shifts.",

        decryption:
        "Each ciphertext character is shifted backward using the same cyclic key array to recover the original plaintext.",

        rules: [
            "Uses multiple shift keys.",
            "Keys repeat cyclically across the text.",
            "Uses circular alphabet rotation modulo 26.",
            "Each character can have a different encryption shift.",
            "The same key list is required for decryption."
        ],

        advantages:
        "Stronger than simple rotation, harder to analyze than Caesar Cipher, simple to implement, and useful for educational cryptography.",

        disadvantages:
        "Not secure against modern attacks, weaker than AES or RSA, and patterns can still be detected.",

        security:
        "Rotor Cipher improves basic rotation by adding multiple keys, but it is still a classical cipher and not suitable for modern secure communication.",

        steps: [
            "Choose plaintext",
            "Choose a list of rotation keys",
            "Repeat the keys cyclically",
            "Encrypt each character with Ci = (Pi + Ki) mod 26",
            "Decrypt each character with Pi = (Ci - Ki + 26) mod 26"
        ],

        faq:
        [
            "Is Rotor Cipher stronger than Caesar Cipher? Yes, because it uses multiple shifts.",
            "Does the key repeat? Yes, the key list repeats cyclically.",
            "Is it secure today? No, it is educational and classical.",
            "What is the main idea? Each character gets a shift from a repeating key array."
        ]
    },

    rotatorbasic: {

        title: "Rotator Cipher (Basic)",

        description:
        "Rotator Cipher (Basic) is a simple rotation cipher that uses one numeric key to shift every alphabetic character by the same amount.",

        overview: [
            {
                title: "Type",
                text: "Monoalphabetic Substitution Cipher"
            },
            {
                title: "Security",
                text: "Low Security"
            },
            {
                title: "Key",
                text: "One number"
            }
        ],

        encryption:
        "Each uppercase or lowercase letter is shifted forward by one numeric key. Symbols, spaces, and digits stay unchanged.",

        decryption:
        "Each encrypted letter is shifted backward by the same numeric key to recover the original text.",

        rules: [
            "Uses one numeric key only.",
            "The key must be a single number such as 2, 3, or 7.",
            "Uppercase letters remain uppercase.",
            "Lowercase letters remain lowercase.",
            "Symbols, spaces, and numbers are not changed."
        ],

        advantages:
        "Very simple, easy to understand, fast to calculate, and useful for learning basic character rotation.",

        disadvantages:
        "Weak against brute force, uses only one repeated shift, and is not secure for real communication.",

        security:
        "Rotator Cipher (Basic) is educational only. It is easy to break because there are only 26 possible alphabet shifts.",

        steps: [
            "Choose plaintext",
            "Choose one numeric key",
            "Encrypt each letter with C = (P + key) mod 26",
            "Leave symbols unchanged",
            "Decrypt each letter with P = (C - key + 26) mod 26"
        ],

        faq:
        [
            "Does it use multiple keys? No, it uses one number only.",
            "Does it change symbols? No, symbols stay unchanged.",
            "Is it secure? No, it is a basic educational cipher.",
            "Is it the same as Rotor Cipher (Advanced)? No, Rotor Cipher (Advanced) uses a cyclic key list."
        ]
    },

    affine: {

        title: "Affine Cipher",

        description:
        "The Affine Cipher is a Monoalphabetic Substitution Cipher that improves Caesar Cipher by using multiplication and addition in modular arithmetic.",

        overview: [
            {
                title: "Type",
                text: "Symmetric Key Cipher"
            },
            {
                title: "Security",
                text: "Low Security"
            },
            {
                title: "Keys",
                text: "a and b"
            }
        ],

        encryption:
        "Affine Cipher encrypts each letter with a linear function: multiply the plaintext value by a, add b, then reduce modulo 26.",

        decryption:
        "Decryption uses the modular inverse of a, then reverses the shift by b to recover the original letter.",

        rules: [
            "Uses two keys: a and b.",
            "a is the multiplication key.",
            "b is the shift key.",
            "gcd(a, 26) must equal 1.",
            "If gcd(a, 26) is not 1, decryption becomes impossible."
        ],

        advantages:
        "Simple to implement, stronger than Caesar Cipher, and a good introduction to modular arithmetic.",

        disadvantages:
        "Weak against frequency analysis, has a small key space, and is not secure for real communication.",

        security:
        "Affine Cipher is a classical encryption method used for educational purposes only and is not secure for modern cryptography.",

        steps: [
            "Convert letters to numbers A=0 through Z=25",
            "Choose keys a and b",
            "Check gcd(a, 26) = 1",
            "Encrypt with E(x) = (a x + b) mod 26",
            "Decrypt with D(x) = a^-1(x - b) mod 26"
        ],

        faq:
        [
            "Why must gcd(a, 26) be 1? Because a must have a modular inverse for decryption.",
            "Is Affine stronger than Caesar? Yes, but it is still weak.",
            "Does it use one key? It uses two values: a and b.",
            "Is it secure today? No, it is educational only."
        ]
    },

    substitution: {

        title: "Substitution Cipher",

        description:
        "A classical encryption method where each letter is replaced with another letter based on a substitution key.",

        overview: [
            {
                title: "Type",
                text: "Monoalphabetic Cipher"
            },
            {
                title: "Key",
                text: "26-letter substitution mapping"
            },
            {
                title: "Security",
                text: "Weak against frequency analysis"
            }
        ],

        encryption:
        "Each plaintext character is replaced using a custom alphabet mapping.",

        decryption:
        "The encrypted letters are mapped back to the original alphabet.",

        rules: [
            "Key must contain 26 unique letters.",
            "No repeated characters allowed.",
            "Uppercase and lowercase can both be encrypted."
        ],

        advantages:
        "Simple and easy to understand.",

        disadvantages:
        "Can be broken using frequency analysis.",

        security:
        "Not secure for modern communication.",

        steps: [
            "A → Q",
            "B → W",
            "C → E",
            "HELLO → ITSSG"
        ],

        faq:
        [
            "Is it secure? → No, it is mainly educational.",
            "Does it use one key? → Yes."
        ]
    },

    // ==========================
    // RAIL FENCE CIPHER IMPLEMENTATION
    // ==========================
    railfence: {

        title: "Rail Fence Cipher",

        description:
        "Rail Fence Cipher is a classical transposition cipher that rearranges character positions by writing the message in a zigzag path across multiple rails, then reading the rails row by row.",

        overview: [
            {
                title: "Type",
                text: "Transposition Cipher"
            },
            {
                title: "Key",
                text: "Number of rails"
            },
            {
                title: "Security",
                text: "Low / Educational"
            }
        ],

        encryption:
        "Plaintext characters are written diagonally down and up across the selected number of rails. After the zigzag is complete, the ciphertext is formed by reading rail 1, then rail 2, then rail 3, and so on.",

        decryption:
        "Decryption rebuilds the same zigzag pattern, marks the positions where letters belong, fills those positions with ciphertext rail by rail, then reads along the original zigzag route to recover the plaintext.",

        rules: [
            "The key must be a whole number.",
            "The key must be greater than or equal to 2.",
            "The key represents the number of rails.",
            "Encryption and decryption must use the same rail count.",
            "It changes character positions only; it does not substitute letters.",
            "Spaces and symbols can be preserved, but educational examples often remove spaces to make the rail pattern easier to read."
        ],

        advantages:
        "Simple, visual, easy to implement, and very useful for learning how transposition ciphers hide a message by rearranging positions instead of changing letters.",

        disadvantages:
        "Weak against brute force and pattern analysis, especially with short messages or small rail counts. It should not be used for real security.",

        security:
        "Rail Fence Cipher is a classical educational cipher with low security. It demonstrates transposition clearly, but modern attackers can test likely rail counts and recover readable plaintext quickly.",

        steps: [
            "Choose the number of rails",
            "Write the plaintext in a zigzag path",
            "Read each rail row by row",
            "Use the same rail count to reverse the pattern"
        ],

        faq:
        [
            "Is it substitution? No, it rearranges character positions.",
            "Can it decrypt spaces and symbols? Yes, they are handled as characters.",
            "What is the minimum key? 2 rails.",
            "Is it secure today? No, it is for education only."
        ]
    },

    // ==========================
    // DIFFIE-HELLMAN KEY EXCHANGE - CLEAN IMPLEMENTATION
    // ==========================
    diffie: {

        title: "Diffie-Hellman Key Exchange",

        description:
        "Diffie-Hellman Key Exchange is a cryptographic method that lets two parties create the same shared secret over an insecure channel without sending the secret itself.",

        overview: [
            {
                title: "Type",
                text: "Asymmetric Key Exchange"
            },
            {
                title: "Public Values",
                text: "Prime number p and generator g"
            },
            {
                title: "Output",
                text: "Shared secret key"
            }
        ],

        encryption:
        "Diffie-Hellman does not encrypt text directly. It uses modular exponentiation to create a shared secret, then that secret can be used as a key for a symmetric cipher such as AES.",

        decryption:
        "Diffie-Hellman itself has no decryption step. Both sides independently calculate the same shared secret, then use that secret with a separate encryption algorithm to decrypt messages.",

        rules: [
            "p must be a valid prime number.",
            "g should be a valid generator or agreed base for the group.",
            "Each party chooses a private key and never shares it.",
            "Each party sends only a public value.",
            "Both parties calculate the same shared secret independently.",
            "Real systems must authenticate the exchange to prevent man-in-the-middle attacks.",
            "Modern systems use large safe parameters or elliptic-curve Diffie-Hellman."
        ],

        advantages:
        "Allows two parties to create a shared symmetric key without sending that key over the network, making it useful for secure protocols such as TLS when combined with authentication.",

        disadvantages:
        "It does not authenticate identities by itself, does not encrypt data directly, and becomes weak if tiny parameters, reused private values, or invalid public values are accepted.",

        security:
        "Diffie-Hellman is secure when it uses strong validated parameters, random private keys, public-key validation, and authentication. Without authentication, it is vulnerable to man-in-the-middle attacks.",

        steps: [
            "Choose prime p and generator g",
            "Choose private key a",
            "Calculate public key A = g^a mod p",
            "Calculate public keys A and B",
            "Calculate the matching shared secret"
        ],

        faq:
        [
            "Does it encrypt text? No, it exchanges keys.",
            "What should stay private? The private key.",
            "What can be public? p, g, and the public key.",
            "What is the shared secret used for? It is used to derive a symmetric encryption key.",
            "What is the main risk? Man-in-the-middle attacks if the exchange is not authenticated."
        ]
    },

    // ==========================
    // COLUMNAR TRANSPOSITION CIPHER IMPLEMENTATION
    // ==========================
    columnar: {

        title: "Columnar Transposition Cipher",

        description:
        "Columnar Transposition Cipher is a classical transposition cipher that rearranges character positions by writing plaintext into rows under a keyword, then reading columns according to the alphabetical order of the key letters.",

        overview: [
            {
                title: "Type",
                text: "Transposition Cipher"
            },
            {
                title: "Key",
                text: "Keyword"
            },
            {
                title: "Security",
                text: "Low / Educational"
            }
        ],

        encryption:
        "The plaintext is written row by row under the keyword. The key letters are sorted alphabetically, and columns are read in that sorted order to produce the ciphertext.",

        decryption:
        "The ciphertext is split into column pieces according to the sorted key order. Those pieces are restored to their original column positions, then the grid is read row by row to recover the plaintext.",

        rules: [
            "The key must contain English letters only.",
            "The key must contain at least 2 letters.",
            "Repeated key letters are handled from left to right.",
            "It rearranges positions only; it does not replace letters.",
            "Spaces and symbols in the message are preserved by the tool, but educational examples often remove spaces for a cleaner grid.",
            "If the final row is incomplete, the shorter columns must be handled correctly during decryption."
        ],

        advantages:
        "Simple to understand, visual, easy to implement, and useful for learning how keyword-based transposition rearranges message positions.",

        disadvantages:
        "Weak against modern attacks and classical cryptanalysis. Short keys, predictable language, and repeated patterns can reveal the column order.",

        security:
        "Columnar Transposition is a classical educational cipher with low security. It is useful for learning transposition, but it should not be used for real-world data protection.",

        steps: [
            "Choose a keyword",
            "Write plaintext into rows",
            "Sort columns by keyword letters",
            "Read columns in sorted order",
            "Reverse the process to decrypt"
        ],

        faq:
        [
            "Does it replace letters? No, it rearranges their positions.",
            "Can the key have repeated letters? Yes, repeated letters are ordered left to right.",
            "Does it preserve spaces? Yes, the tool treats spaces as characters.",
            "Is it secure today? No, it is educational only."
        ]
    },

    // ==========================
    // HILL CIPHER IMPLEMENTATION
    // ==========================
    hill: {

        title: "Hill Cipher",

        description:
        "Hill Cipher is a polygraphic substitution cipher that encrypts groups of letters together using matrix multiplication modulo 26.",

        overview: [
            {
                title: "Type",
                text: "Polygraphic Substitution Cipher"
            },
            {
                title: "Key",
                text: "Invertible matrix modulo 26"
            },
            {
                title: "Block Size",
                text: "2x2, 3x3, or 4x4"
            }
        ],

        encryption:
        "Letters are converted to numbers, grouped into fixed-size vectors, then multiplied by an invertible key matrix modulo 26.",

        decryption:
        "The inverse of the key matrix modulo 26 is calculated, then multiplied by each ciphertext vector to recover the original plaintext vectors.",

        rules: [
            "The matrix must contain numbers only.",
            "Each row must contain exactly the selected matrix size.",
            "The matrix determinant must be coprime with 26.",
            "The key matrix must have a modular inverse.",
            "Only English letters are processed by this implementation.",
            "Plaintext may be padded with X to complete the last block."
        ],

        advantages:
        "Encrypts groups of letters together, hides single-letter frequency patterns better than simple substitution, and clearly demonstrates linear algebra in cryptography.",

        disadvantages:
        "Classical Hill Cipher is not secure for modern use, can be broken with known-plaintext attacks, and requires a valid invertible matrix for decryption.",

        security:
        "Hill Cipher is a classical educational cipher. It is mathematically useful for learning matrices and modular arithmetic, but it should not be used for modern secure communication.",

        steps: [
            "Choose matrix size",
            "Enter an invertible matrix key",
            "Split text into letter blocks",
            "Multiply each block by the matrix modulo 26",
            "Use the inverse matrix to decrypt"
        ],

        faq:
        [
            "Why must the matrix be invertible? Decryption needs the modular inverse matrix.",
            "Can the key contain letters? No, it must contain numbers only.",
            "What modulo is used? 26.",
            "Is Hill Cipher secure today? No, it is educational only."
        ]
    },

    // ================= CODEX AES Encryption Algorithm Data =================
    aes: {

        title: "AES Cipher",

        description:
        "Advanced Encryption Standard (AES) is a symmetric block cipher that encrypts fixed 128-bit blocks using substitution, permutation, mixing, and round-key XOR operations.",

        overview: [
            {
                title: "Type",
                text: "Symmetric Block Cipher"
            },
            {
                title: "Modes",
                text: "AES-128, AES-192, AES-256"
            },
            {
                title: "Security",
                text: "Very high modern security"
            }
        ],

        encryption:
        "AES converts plaintext into ciphertext with the same shared secret key. Internally, each 128-bit state passes through SubBytes, ShiftRows, MixColumns, and AddRoundKey rounds. In this tool, AES-GCM is used with a fresh random IV for every encryption.",

        decryption:
        "AES decrypts the ciphertext using the same secret key, AES type, and IV. If any value is wrong, decryption fails safely.",

        rules: [
            "AES always uses a 128-bit block size.",
            "AES-128 uses 10 rounds and a 16-character key in this tool.",
            "AES-192 uses 12 rounds and a 24-character key in this tool.",
            "AES-256 uses 14 rounds and a 32-character key in this tool.",
            "The same key and AES type must be used for encryption and decryption.",
            "A random IV should be generated for every encryption operation."
        ],

        advantages:
        "Extremely secure, fast in hardware and software, used worldwide in HTTPS, VPNs, banking, and government systems, and resistant to known practical cryptanalysis when implemented correctly.",

        disadvantages:
        "Implementation is complex, key management must be handled carefully, and it is not ideal for extremely tiny systems without appropriate hardware or optimized libraries.",

        security:
        "AES is the global standard for modern symmetric encryption. It is considered secure against practical attacks when used with strong keys, a safe mode such as GCM, unique IVs, and correct implementation.",

        steps: [
            "Place plaintext bytes into a 4x4 state matrix",
            "XOR the state with the initial round key",
            "Repeat SubBytes, ShiftRows, MixColumns, and AddRoundKey",
            "Skip MixColumns in the final round",
            "Return the final ciphertext bytes"
        ],

        faq:
        [
            "Is AES symmetric? Yes, the same secret key is used for encryption and decryption.",
            "What block size does AES use? Always 128 bits.",
            "How many rounds does AES use? 10, 12, or 14 rounds depending on the key size.",
            "Which mode is used in the encryption tool? AES-GCM.",
            "Why is there an IV in the tool output? It keeps repeated messages from producing the same ciphertext."
        ]
    },

    // ==========================
    // DES IMPLEMENTATION
    // ==========================
    des: {

        title: "DES",

        description:
        "Data Encryption Standard (DES) is a legacy symmetric block cipher that encrypts 64-bit blocks using a 64-bit key block with 56 effective key bits and 8 parity bits.",

        overview: [
            {
                title: "Type",
                text: "Symmetric Block Cipher"
            },
            {
                title: "Key",
                text: "64-bit block / 56 effective bits"
            },
            {
                title: "Block Size",
                text: "64 bits"
            }
        ],

        encryption:
        "DES applies an initial permutation, 16 Feistel rounds, and a final permutation to each 64-bit block. This tool uses CBC mode with a fresh random IV and PKCS#7 padding for complete text messages.",

        decryption:
        "DES decrypts by applying the same Feistel structure with the round keys in reverse order. In CBC mode, it also uses the same IV and removes PKCS#7 padding to recover the original text.",

        rules: [
            "The key must be exactly 8 characters.",
            "The key must be plain ASCII text in this implementation.",
            "The same key is required for encryption and decryption.",
            "DES uses 16 Feistel rounds.",
            "DES has a 64-bit block size.",
            "The encrypted output includes DES, IV, and ciphertext parts.",
            "Empty input or invalid ciphertext is rejected."
        ],

        advantages:
        "DES is historically important and useful for learning Feistel networks, key schedules, S-Boxes, permutations, padding, and CBC mode.",

        disadvantages:
        "DES is no longer secure for modern real-world protection because its 56-bit effective key size can be brute-forced.",

        security:
        "DES is obsolete and should not be used for new security systems. It is included here for education and compatibility study only. Use AES for modern encryption.",

        steps: [
            "Enter an 8-character key",
            "Generate a random 64-bit IV",
            "Pad the message to full blocks",
            "Encrypt each block with DES-CBC",
            "Return DES:IV:ciphertext"
        ],

        faq:
        [
            "Is DES symmetric? Yes, the same key encrypts and decrypts.",
            "Why exactly 8 characters? DES uses a 64-bit key block.",
            "How many rounds does DES use? 16 Feistel rounds.",
            "Is DES recommended today? No, AES is recommended for modern use."
        ]
    },

    // ==========================
    // TRIPLE DES IMPLEMENTATION
    // ==========================
    tripledes: {

        title: "Triple DES (3DES)",

        description:
        "Triple DES (3DES or TDEA) is a legacy symmetric block cipher that applies the DES cipher three times using three 8-character key parts.",

        overview: [
            {
                title: "Type",
                text: "Symmetric Block Cipher"
            },
            {
                title: "Key",
                text: "24 text characters / 3 DES keys"
            },
            {
                title: "Process",
                text: "Encrypt-Decrypt-Encrypt"
            }
        ],

        encryption:
        "3DES uses the EDE sequence: encrypt with key 1, decrypt with key 2, then encrypt with key 3. This tool wraps it in CBC mode with a random IV and PKCS#7 padding.",

        decryption:
        "3DES decrypts by reversing the EDE sequence with the same 24-character key and IV, then validates and removes padding.",

        rules: [
            "The key must be exactly 24 characters.",
            "The key is treated as three 8-character DES keys.",
            "The key must be plain ASCII text in this implementation.",
            "The same 24-character key is required for decryption.",
            "The encrypted output includes 3DES, IV, and ciphertext parts."
        ],

        advantages:
        "3DES is stronger than single DES and demonstrates how repeated block cipher operations can extend the life of an older cipher design.",

        disadvantages:
        "3DES is much slower than AES, keeps DES's small 64-bit block size, and is considered legacy for modern systems.",

        security:
        "3DES is included for educational and legacy understanding. It is not recommended for new encryption. AES is the better choice for modern applications.",

        steps: [
            "Enter a 24-character key",
            "Split it into three 8-character DES keys",
            "Generate a random IV",
            "Encrypt with DES EDE in CBC mode",
            "Return 3DES:IV:ciphertext"
        ],

        faq:
        [
            "Does 3DES use DES internally? Yes, it applies DES three times.",
            "How long is the key here? Exactly 24 characters.",
            "What does EDE mean? Encrypt, Decrypt, Encrypt.",
            "Is AES better today? Yes, AES is faster and recommended."
        ]
    },

    // ==========================
    // ONE-TIME PAD (OTP) IMPLEMENTATION
    // ==========================
    otp: {

        title: "One-Time Pad (OTP)",

        description:
        "One-Time Pad (OTP) is a symmetric encryption method where every plaintext character or byte is combined with a truly random key value of the same length, and that key is used only once.",

        overview: [
            {
                title: "Type",
                text: "Symmetric Stream Cipher"
            },
            {
                title: "Key Rule",
                text: "Key length equals text length"
            },
            {
                title: "Key",
                text: "Truly random, secret, one-time"
            }
        ],

        encryption:
        "Each plaintext character is XORed with the matching random key character. This tool returns the result as OTP:Base64 so encrypted bytes remain safe to copy.",

        decryption:
        "The Base64 ciphertext is decoded, then each encrypted byte is XORed with the matching key character to recover the original text.",

        rules: [
            "The key must be truly random.",
            "The key length must exactly equal the plaintext length or byte length.",
            "The same key is required for decryption.",
            "The key must be used once only and then destroyed.",
            "The key must stay completely secret.",
            "Empty text and empty keys are rejected."
        ],

        advantages:
        "When the key is truly random, used once, kept secret, and exactly as long as the message, OTP can provide perfect secrecy.",

        disadvantages:
        "Secure key generation, delivery, storage, and one-time use are difficult in real systems. Reusing the same key can expose both messages.",

        security:
        "OTP can provide perfect secrecy only when the key is truly random, at least as long as the message, kept secret, and never reused. Breaking any of these rules breaks the security guarantee.",

        steps: [
            "Enter plaintext",
            "Generate a random key with the same length",
            "XOR every plaintext character with its key character",
            "Encode the encrypted bytes as Base64",
            "Use the same key once to decrypt"
        ],

        faq:
        [
            "Can the key be shorter than the text? No.",
            "Can the key be reused? No, it must be one-time.",
            "Why Base64 output? It keeps binary OTP ciphertext copy-safe.",
            "Is OTP the same as a password? No, an OTP key must be random and as long as the message.",
            "What happens if the key is reused? The system becomes vulnerable."
        ]
    },

};


const selector = document.getElementById("algorithmSelector");
const content = document.getElementById("algorithmContent");

function renderAlgorithm(algo) {

    const data = algorithmData[algo];

    content.innerHTML = `

    <div class="algorithm-hero">
        <h2>${data.title}</h2>
        <p>${data.description}</p>
    </div>

    <div class="overview-cards">

        ${data.overview.map(card => `
            <div class="overview-card">
                <h3>${card.title}</h3>
                <p>${card.text}</p>
            </div>
        `).join("")}

    </div>


    <div class="content-section">
        <h3>What is ${data.title}?</h3>
        <p>${data.description}</p>
    </div>


    <div class="content-section">
        <h3>How Encryption Works</h3>
        <p>${data.encryption}</p>
    </div>


    <div class="content-section">
        <h3>How Decryption Works</h3>
        <p>${data.decryption}</p>
    </div>


    <div class="content-section">
        <h3>Key Rules</h3>

        <ul class="rules-list">
            ${data.rules.map(rule => `<li>${rule}</li>`).join("")}
        </ul>
    </div>


    <div class="content-section">
        <h3>Advantages & Disadvantages</h3>

        <p><strong>Advantages:</strong> ${data.advantages}</p>
        <br>
        <p><strong>Disadvantages:</strong> ${data.disadvantages}</p>
    </div>


    <div class="content-section">
        <h3>Security Note</h3>
        <p>${data.security}</p>
    </div>

    ${algo === "railfence" ? `

<div class="content-section railfence-section">
    <h3>Step-by-Step Encryption Example</h3>

    <div class="crypto-flow">
        <div class="crypto-step reveal-step">
            <div class="step-title">Input</div>
            <div class="step-content">
                Plaintext = WE ARE DISCOVERED FLEE AT ONCE
                <br>
                Remove spaces for the educational grid:
                <br>
                WEAREDISCOVEREDFLEEATONCE
                <br>
                Key = 3 rails
            </div>
        </div>

        <div class="arrow">&darr;</div>

        <div class="crypto-step reveal-step">
            <div class="step-title">Step 1 - Zigzag Route</div>
            <div class="step-content">
                With 3 rails, the route is:
                <br>
                Rail 1 &rarr; Rail 2 &rarr; Rail 3 &rarr; Rail 2 &rarr; repeat
                <br><br>
                Pattern:
                <br>
                1, 2, 3, 2, 1, 2, 3, 2, ...
            </div>
        </div>

        <div class="arrow">&darr;</div>

        <div class="crypto-step reveal-step railfence-wide-step">
            <div class="step-title">Step 2 - Put Each Letter on Its Rail</div>
            <div class="step-content">
                <div class="railfence-grid">
                    <div>Position</div><div>01</div><div>02</div><div>03</div><div>04</div><div>05</div><div>06</div><div>07</div><div>08</div><div>09</div><div>10</div><div>11</div><div>12</div><div>13</div><div>14</div><div>15</div><div>16</div><div>17</div><div>18</div><div>19</div><div>20</div><div>21</div><div>22</div><div>23</div><div>24</div><div>25</div>
                    <div>Letter</div><div>W</div><div>E</div><div>A</div><div>R</div><div>E</div><div>D</div><div>I</div><div>S</div><div>C</div><div>O</div><div>V</div><div>E</div><div>R</div><div>E</div><div>D</div><div>F</div><div>L</div><div>E</div><div>E</div><div>A</div><div>T</div><div>O</div><div>N</div><div>C</div><div>E</div>
                    <div>Rail</div><div>1</div><div>2</div><div>3</div><div>2</div><div>1</div><div>2</div><div>3</div><div>2</div><div>1</div><div>2</div><div>3</div><div>2</div><div>1</div><div>2</div><div>3</div><div>2</div><div>1</div><div>2</div><div>3</div><div>2</div><div>1</div><div>2</div><div>3</div><div>2</div><div>1</div>
                </div>
            </div>
        </div>

        <div class="arrow">&darr;</div>

        <div class="crypto-step reveal-step railfence-wide-step">
            <div class="step-title">Step 3 - Rail Diagram</div>
            <div class="step-content railfence-diagram">
                <div>Rail 1: W . . . E . . . C . . . R . . . L . . . T . . . E</div>
                <div>Rail 2: . E . R . D . S . O . E . E . F . E . A . O . C .</div>
                <div>Rail 3: . . A . . . I . . . V . . . D . . . E . . . N . . .</div>
            </div>
        </div>

        <div class="arrow">&darr;</div>

        <div class="crypto-step reveal-step">
            <div class="step-title">Step 4 - Read Rail 1</div>
            <div class="step-content">
                Rail 1 letters:
                <br>
                W E C R L T E
                <br>
                Rail 1 output = WECRLTE
            </div>
        </div>

        <div class="arrow">&darr;</div>

        <div class="crypto-step reveal-step">
            <div class="step-title">Step 5 - Read Rail 2</div>
            <div class="step-content">
                Rail 2 letters:
                <br>
                E R D S O E E F E A O C
                <br>
                Rail 2 output = ERDSOEEFEAOC
            </div>
        </div>

        <div class="arrow">&darr;</div>

        <div class="crypto-step reveal-step">
            <div class="step-title">Step 6 - Read Rail 3</div>
            <div class="step-content">
                Rail 3 letters:
                <br>
                A I V D E N
                <br>
                Rail 3 output = AIVDEN
            </div>
        </div>

        <div class="arrow">&darr;</div>

        <div class="crypto-step final-step reveal-step">
            <div class="step-title">Final Ciphertext</div>
            <div class="step-content">
                WECRLTE + ERDSOEEFEAOC + AIVDEN
                <br><br>
                Ciphertext = WECRLTEERDSOEEFEAOCAIVDEN
            </div>
        </div>
    </div>
</div>

<div class="content-section railfence-section">
    <h3>Step-by-Step Decryption Example</h3>

    <div class="crypto-flow">
        <div class="crypto-step reveal-step">
            <div class="step-title">Input</div>
            <div class="step-content">
                Ciphertext = WECRLTEERDSOEEFEAOCAIVDEN
                <br>
                Key = 3 rails
                <br>
                Total letters = 25
            </div>
        </div>

        <div class="arrow">&darr;</div>

        <div class="crypto-step reveal-step">
            <div class="step-title">Step 1 - Rebuild the Rail Pattern</div>
            <div class="step-content">
                Use the same route:
                <br>
                1, 2, 3, 2, 1, 2, 3, 2, ...
                <br><br>
                Count positions for each rail:
                <br>
                Rail 1 = 7 letters
                <br>
                Rail 2 = 12 letters
                <br>
                Rail 3 = 6 letters
            </div>
        </div>

        <div class="arrow">&darr;</div>

        <div class="crypto-step reveal-step">
            <div class="step-title">Step 2 - Split Ciphertext by Rail Lengths</div>
            <div class="step-content">
                First 7 letters go to Rail 1:
                <br>
                WECRLTE
                <br><br>
                Next 12 letters go to Rail 2:
                <br>
                ERDSOEEFEAOC
                <br><br>
                Last 6 letters go to Rail 3:
                <br>
                AIVDEN
            </div>
        </div>

        <div class="arrow">&darr;</div>

        <div class="crypto-step reveal-step railfence-wide-step">
            <div class="step-title">Step 3 - Refill the Rails</div>
            <div class="step-content railfence-diagram">
                <div>Rail 1: W . . . E . . . C . . . R . . . L . . . T . . . E</div>
                <div>Rail 2: . E . R . D . S . O . E . E . F . E . A . O . C .</div>
                <div>Rail 3: . . A . . . I . . . V . . . D . . . E . . . N . . .</div>
            </div>
        </div>

        <div class="arrow">&darr;</div>

        <div class="crypto-step reveal-step railfence-wide-step">
            <div class="step-title">Step 4 - Read Along the Zigzag Path</div>
            <div class="step-content">
                Read positions in this rail order:
                <br>
                1 &rarr; 2 &rarr; 3 &rarr; 2 &rarr; 1 &rarr; 2 &rarr; 3 &rarr; 2 ...
                <br><br>
                Letters recovered:
                <br>
                W E A R E D I S C O V E R E D F L E E A T O N C E
            </div>
        </div>

        <div class="arrow">&darr;</div>

        <div class="crypto-step final-step reveal-step">
            <div class="step-title">Final Plaintext</div>
            <div class="step-content">
                Without spaces:
                <br>
                WEAREDISCOVEREDFLEEATONCE
                <br><br>
                Readable message:
                <br>
                WE ARE DISCOVERED FLEE AT ONCE
            </div>
        </div>
    </div>
</div>

`: ""}

${algo === "diffie" ? `

<div class="content-section diffie-section">
    <h3>Step-by-Step Key Exchange Example</h3>

    <div class="crypto-flow">
        <div class="crypto-step reveal-step">
            <div class="step-title">Public Setup</div>
            <div class="step-content">
                Alice and Bob agree publicly on:
                <br>
                Prime number p = 23
                <br>
                Generator g = 5
                <br><br>
                These values are not secret.
            </div>
        </div>

        <div class="arrow">&darr;</div>

        <div class="crypto-step reveal-step">
            <div class="step-title">Private Secrets</div>
            <div class="step-content">
                Alice chooses private key a = 6
                <br>
                Bob chooses private key b = 15
                <br><br>
                These values must never be sent.
            </div>
        </div>

        <div class="arrow">&darr;</div>

        <div class="crypto-step reveal-step diffie-wide-step">
            <div class="step-title">Alice Calculates Public Key</div>
            <div class="step-content">
                Formula:
                <br>
                A = g^a mod p
                <br><br>
                A = 5^6 mod 23
                <br>
                5^6 = 15625
                <br>
                15625 mod 23 = 8
                <br><br>
                Alice sends public key A = 8
            </div>
        </div>

        <div class="arrow">&darr;</div>

        <div class="crypto-step reveal-step diffie-wide-step">
            <div class="step-title">Bob Calculates Public Key</div>
            <div class="step-content">
                Formula:
                <br>
                B = g^b mod p
                <br><br>
                B = 5^15 mod 23
                <br>
                5^15 mod 23 = 19
                <br><br>
                Bob sends public key B = 19
            </div>
        </div>

        <div class="arrow">&darr;</div>

        <div class="crypto-step reveal-step">
            <div class="step-title">Public Values Sent</div>
            <div class="step-content">
                Anyone can see:
                <br>
                p = 23
                <br>
                g = 5
                <br>
                Alice public key A = 8
                <br>
                Bob public key B = 19
                <br><br>
                But a = 6 and b = 15 stay private.
            </div>
        </div>

        <div class="arrow">&darr;</div>

        <div class="crypto-step reveal-step diffie-wide-step">
            <div class="step-title">Alice Calculates Shared Secret</div>
            <div class="step-content">
                Alice uses Bob's public key B and her private key a:
                <br><br>
                S = B^a mod p
                <br>
                S = 19^6 mod 23
                <br>
                S = 2
            </div>
        </div>

        <div class="arrow">&darr;</div>

        <div class="crypto-step reveal-step diffie-wide-step">
            <div class="step-title">Bob Calculates Shared Secret</div>
            <div class="step-content">
                Bob uses Alice's public key A and his private key b:
                <br><br>
                S = A^b mod p
                <br>
                S = 8^15 mod 23
                <br>
                S = 2
            </div>
        </div>

        <div class="arrow">&darr;</div>

        <div class="crypto-step final-step reveal-step">
            <div class="step-title">Key Exchange Result</div>
            <div class="step-content">
                Alice shared secret = 2
                <br>
                Bob shared secret = 2
                <br><br>
                Final shared secret = 2
            </div>
        </div>
    </div>
</div>

<div class="content-section diffie-section">
    <h3>Educational Encryption Using the Shared Secret</h3>
    <p>
        Diffie-Hellman only creates the shared secret. In real systems, that secret is passed through a key derivation function
        and then used with a symmetric cipher such as AES. For a simple classroom example, we will use the shared secret 2
        as a Caesar-style shift to show how both sides can encrypt and decrypt after the exchange.
    </p>

    <div class="crypto-flow">
        <div class="crypto-step reveal-step">
            <div class="step-title">Input</div>
            <div class="step-content">
                Plaintext = HELLO
                <br>
                Shared secret = 2
                <br>
                Educational shift key = 2
            </div>
        </div>

        <div class="arrow">&darr;</div>

        <div class="crypto-step reveal-step">
            <div class="step-title">Encryption Formula</div>
            <div class="step-content">
                C = (P + 2) mod 26
                <br>
                A = 0, B = 1, ..., Z = 25
            </div>
        </div>

        <div class="arrow">&darr;</div>

        <div class="crypto-step reveal-step diffie-wide-step">
            <div class="step-title">Encrypt Each Letter</div>
            <div class="step-content diffie-calc-list">
                <span>H = 7 &rarr; (7 + 2) mod 26 = 9 &rarr; J</span>
                <span>E = 4 &rarr; (4 + 2) mod 26 = 6 &rarr; G</span>
                <span>L = 11 &rarr; (11 + 2) mod 26 = 13 &rarr; N</span>
                <span>L = 11 &rarr; (11 + 2) mod 26 = 13 &rarr; N</span>
                <span>O = 14 &rarr; (14 + 2) mod 26 = 16 &rarr; Q</span>
            </div>
        </div>

        <div class="arrow">&darr;</div>

        <div class="crypto-step final-step reveal-step">
            <div class="step-title">Final Ciphertext</div>
            <div class="step-content">
                HELLO &rarr; JGNNQ
            </div>
        </div>
    </div>
</div>

<div class="content-section diffie-section">
    <h3>Educational Decryption Using the Shared Secret</h3>

    <div class="crypto-flow">
        <div class="crypto-step reveal-step">
            <div class="step-title">Input</div>
            <div class="step-content">
                Ciphertext = JGNNQ
                <br>
                Shared secret = 2
                <br>
                Educational shift key = 2
            </div>
        </div>

        <div class="arrow">&darr;</div>

        <div class="crypto-step reveal-step">
            <div class="step-title">Decryption Formula</div>
            <div class="step-content">
                P = (C - 2 + 26) mod 26
            </div>
        </div>

        <div class="arrow">&darr;</div>

        <div class="crypto-step reveal-step diffie-wide-step">
            <div class="step-title">Decrypt Each Letter</div>
            <div class="step-content diffie-calc-list">
                <span>J = 9 &rarr; (9 - 2 + 26) mod 26 = 7 &rarr; H</span>
                <span>G = 6 &rarr; (6 - 2 + 26) mod 26 = 4 &rarr; E</span>
                <span>N = 13 &rarr; (13 - 2 + 26) mod 26 = 11 &rarr; L</span>
                <span>N = 13 &rarr; (13 - 2 + 26) mod 26 = 11 &rarr; L</span>
                <span>Q = 16 &rarr; (16 - 2 + 26) mod 26 = 14 &rarr; O</span>
            </div>
        </div>

        <div class="arrow">&darr;</div>

        <div class="crypto-step final-step reveal-step">
            <div class="step-title">Final Plaintext</div>
            <div class="step-content">
                JGNNQ &rarr; HELLO
            </div>
        </div>
    </div>
</div>

<div class="content-section diffie-section">
    <h3>Important Correctness Notes</h3>
    <ul class="rules-list">
        <li>Diffie-Hellman is not encryption by itself; it only creates a shared secret.</li>
        <li>The small numbers p = 23 and g = 5 are for learning only. Real systems use much larger parameters.</li>
        <li>The Caesar-style encryption above is educational only. Real applications derive an AES key from the shared secret.</li>
        <li>Diffie-Hellman must be authenticated, otherwise an attacker can sit between Alice and Bob and create separate secrets with each side.</li>
    </ul>
</div>

`: ""}

${algo === "columnar" ? `

<div class="content-section columnar-section">
    <h3>Step-by-Step Encryption Example</h3>

    <div class="crypto-flow">
        <div class="crypto-step reveal-step">
            <div class="step-title">Input</div>
            <div class="step-content">
                Plaintext = WE ARE DISCOVERED FLEE AT ONCE
                <br>
                Remove spaces for this educational grid:
                <br>
                WEAREDISCOVEREDFLEEATONCE
                <br>
                Key = ZEBRAS
            </div>
        </div>

        <div class="arrow">&darr;</div>

        <div class="crypto-step reveal-step columnar-wide-step">
            <div class="step-title">Step 1 - Sort the Key</div>
            <div class="step-content">
                Original key columns:
                <br>
                Z&nbsp;&nbsp;E&nbsp;&nbsp;B&nbsp;&nbsp;R&nbsp;&nbsp;A&nbsp;&nbsp;S
                <br><br>
                Alphabetical order:
                <br>
                A, B, E, R, S, Z
                <br><br>
                Original column indexes to read:
                <br>
                5, 3, 2, 4, 6, 1
            </div>
        </div>

        <div class="arrow">&darr;</div>

        <div class="crypto-step reveal-step columnar-wide-step">
            <div class="step-title">Step 2 - Write Plaintext Under the Key</div>
            <div class="step-content">
                <div class="columnar-grid columnar-grid-6">
                    <div class="columnar-head">Z</div><div class="columnar-head">E</div><div class="columnar-head">B</div><div class="columnar-head">R</div><div class="columnar-head">A</div><div class="columnar-head">S</div>
                    <div>W</div><div>E</div><div>A</div><div>R</div><div>E</div><div>D</div>
                    <div>I</div><div>S</div><div>C</div><div>O</div><div>V</div><div>E</div>
                    <div>R</div><div>E</div><div>D</div><div>F</div><div>L</div><div>E</div>
                    <div>E</div><div>A</div><div>T</div><div>O</div><div>N</div><div>C</div>
                    <div>E</div><div class="columnar-empty"></div><div class="columnar-empty"></div><div class="columnar-empty"></div><div class="columnar-empty"></div><div class="columnar-empty"></div>
                </div>
            </div>
        </div>

        <div class="arrow">&darr;</div>

        <div class="crypto-step reveal-step">
            <div class="step-title">Step 3 - Read Column A</div>
            <div class="step-content">
                Column A is the 5th original column.
                <br>
                Letters: E V L N
                <br>
                Output part = EVLN
            </div>
        </div>

        <div class="arrow">&darr;</div>

        <div class="crypto-step reveal-step">
            <div class="step-title">Step 4 - Read Column B</div>
            <div class="step-content">
                Column B is the 3rd original column.
                <br>
                Letters: A C D T
                <br>
                Output part = ACDT
            </div>
        </div>

        <div class="arrow">&darr;</div>

        <div class="crypto-step reveal-step">
            <div class="step-title">Step 5 - Read Column E</div>
            <div class="step-content">
                Column E is the 2nd original column.
                <br>
                Letters: E S E A
                <br>
                Output part = ESEA
            </div>
        </div>

        <div class="arrow">&darr;</div>

        <div class="crypto-step reveal-step">
            <div class="step-title">Step 6 - Read Remaining Columns</div>
            <div class="step-content">
                Column R = R O F O = ROFO
                <br>
                Column S = D E E C = DEEC
                <br>
                Column Z = W I R E E = WIREE
            </div>
        </div>

        <div class="arrow">&darr;</div>

        <div class="crypto-step final-step reveal-step columnar-wide-step">
            <div class="step-title">Final Ciphertext</div>
            <div class="step-content">
                EVLN + ACDT + ESEA + ROFO + DEEC + WIREE
                <br><br>
                Ciphertext = EVLNACDTESEAROFODEECWIREE
            </div>
        </div>
    </div>
</div>

<div class="content-section columnar-section">
    <h3>Step-by-Step Decryption Example</h3>

    <div class="crypto-flow">
        <div class="crypto-step reveal-step">
            <div class="step-title">Input</div>
            <div class="step-content">
                Ciphertext = EVLNACDTESEAROFODEECWIREE
                <br>
                Key = ZEBRAS
                <br>
                Total letters = 25
                <br>
                Number of columns = 6
                <br>
                Number of rows = 5
            </div>
        </div>

        <div class="arrow">&darr;</div>

        <div class="crypto-step reveal-step columnar-wide-step">
            <div class="step-title">Step 1 - Find Column Lengths</div>
            <div class="step-content">
                A full 5x6 grid can hold 30 letters.
                <br>
                Actual text has 25 letters.
                <br>
                Empty cells = 30 - 25 = 5
                <br><br>
                The last row only contains the first original column,
                so column Z has 5 letters and the other columns have 4 letters.
            </div>
        </div>

        <div class="arrow">&darr;</div>

        <div class="crypto-step reveal-step">
            <div class="step-title">Step 2 - Split Ciphertext by Sorted Key</div>
            <div class="step-content">
                Sorted key order = A, B, E, R, S, Z
                <br><br>
                A = EVLN
                <br>
                B = ACDT
                <br>
                E = ESEA
                <br>
                R = ROFO
                <br>
                S = DEEC
                <br>
                Z = WIREE
            </div>
        </div>

        <div class="arrow">&darr;</div>

        <div class="crypto-step reveal-step columnar-wide-step">
            <div class="step-title">Step 3 - Restore Columns to Original Key Order</div>
            <div class="step-content">
                Original key order is:
                <br>
                Z, E, B, R, A, S
                <br><br>
                So the restored columns are:
                <br>
                Z = WIREE
                <br>
                E = ESEA
                <br>
                B = ACDT
                <br>
                R = ROFO
                <br>
                A = EVLN
                <br>
                S = DEEC
            </div>
        </div>

        <div class="arrow">&darr;</div>

        <div class="crypto-step reveal-step columnar-wide-step">
            <div class="step-title">Step 4 - Rebuild the Grid</div>
            <div class="step-content">
                <div class="columnar-grid columnar-grid-6">
                    <div class="columnar-head">Z</div><div class="columnar-head">E</div><div class="columnar-head">B</div><div class="columnar-head">R</div><div class="columnar-head">A</div><div class="columnar-head">S</div>
                    <div>W</div><div>E</div><div>A</div><div>R</div><div>E</div><div>D</div>
                    <div>I</div><div>S</div><div>C</div><div>O</div><div>V</div><div>E</div>
                    <div>R</div><div>E</div><div>D</div><div>F</div><div>L</div><div>E</div>
                    <div>E</div><div>A</div><div>T</div><div>O</div><div>N</div><div>C</div>
                    <div>E</div><div class="columnar-empty"></div><div class="columnar-empty"></div><div class="columnar-empty"></div><div class="columnar-empty"></div><div class="columnar-empty"></div>
                </div>
            </div>
        </div>

        <div class="arrow">&darr;</div>

        <div class="crypto-step reveal-step">
            <div class="step-title">Step 5 - Read Rows Left to Right</div>
            <div class="step-content">
                Row 1 = WEARED
                <br>
                Row 2 = ISCOVE
                <br>
                Row 3 = REDFLE
                <br>
                Row 4 = EATONC
                <br>
                Row 5 = E
            </div>
        </div>

        <div class="arrow">&darr;</div>

        <div class="crypto-step final-step reveal-step columnar-wide-step">
            <div class="step-title">Final Plaintext</div>
            <div class="step-content">
                Without spaces:
                <br>
                WEAREDISCOVEREDFLEEATONCE
                <br><br>
                Readable message:
                <br>
                WE ARE DISCOVERED FLEE AT ONCE
            </div>
        </div>
    </div>
</div>

<div class="content-section columnar-section">
    <h3>Important Correctness Notes</h3>
    <ul class="rules-list">
        <li>Columnar Transposition changes positions only; the letters themselves do not change.</li>
        <li>The website implementation preserves spaces and symbols if you type them, but this teaching example removes spaces to keep the grid easy to inspect.</li>
        <li>Repeated key letters are sorted left to right, which keeps the column order deterministic.</li>
        <li>This cipher is educational and not secure for modern communication.</li>
    </ul>
</div>

`: ""}

${algo === "hill" ? `

<div class="content-section hill-section">
    <h3>Step-by-Step Encryption Example</h3>

    <div class="crypto-flow">
        <div class="crypto-step reveal-step">
            <div class="step-title">Input</div>
            <div class="step-content">
                Plaintext = HELP
                <br>
                Matrix size = 2x2
                <br>
                Key matrix K =
                <br>
                [3 3]
                <br>
                [2 5]
            </div>
        </div>

        <div class="arrow">&darr;</div>

        <div class="crypto-step reveal-step">
            <div class="step-title">Step 1 - Check the Key Matrix</div>
            <div class="step-content">
                Determinant:
                <br>
                det(K) = (3 x 5) - (3 x 2)
                <br>
                det(K) = 15 - 6 = 9
                <br><br>
                gcd(9, 26) = 1
                <br>
                So the matrix is invertible modulo 26.
            </div>
        </div>

        <div class="arrow">&darr;</div>

        <div class="crypto-step reveal-step">
            <div class="step-title">Step 2 - Convert Letters to Numbers</div>
            <div class="step-content">
                Use A = 0, B = 1, ..., Z = 25
                <br><br>
                H = 7
                <br>
                E = 4
                <br>
                L = 11
                <br>
                P = 15
            </div>
        </div>

        <div class="arrow">&darr;</div>

        <div class="crypto-step reveal-step">
            <div class="step-title">Step 3 - Split into 2-Letter Blocks</div>
            <div class="step-content">
                HELP becomes:
                <br>
                HE and LP
                <br><br>
                Vector HE =
                <br>
                [7, 4]
                <br><br>
                Vector LP =
                <br>
                [11, 15]
            </div>
        </div>

        <div class="arrow">&darr;</div>

        <div class="crypto-step reveal-step hill-wide-step">
            <div class="step-title">Step 4 - Encrypt Block HE</div>
            <div class="step-content">
                K x [H, E] mod 26
                <br><br>
                First output number:
                <br>
                (3 x 7 + 3 x 4) mod 26 = 33 mod 26 = 7 = H
                <br><br>
                Second output number:
                <br>
                (2 x 7 + 5 x 4) mod 26 = 34 mod 26 = 8 = I
                <br><br>
                HE &rarr; HI
            </div>
        </div>

        <div class="arrow">&darr;</div>

        <div class="crypto-step reveal-step hill-wide-step">
            <div class="step-title">Step 5 - Encrypt Block LP</div>
            <div class="step-content">
                K x [L, P] mod 26
                <br><br>
                First output number:
                <br>
                (3 x 11 + 3 x 15) mod 26 = 78 mod 26 = 0 = A
                <br><br>
                Second output number:
                <br>
                (2 x 11 + 5 x 15) mod 26 = 97 mod 26 = 19 = T
                <br><br>
                LP &rarr; AT
            </div>
        </div>

        <div class="arrow">&darr;</div>

        <div class="crypto-step final-step reveal-step">
            <div class="step-title">Final Ciphertext</div>
            <div class="step-content">
                HE &rarr; HI
                <br>
                LP &rarr; AT
                <br><br>
                Ciphertext = HIAT
            </div>
        </div>
    </div>
</div>

<div class="content-section hill-section">
    <h3>Step-by-Step Decryption Example</h3>

    <div class="crypto-flow">
        <div class="crypto-step reveal-step">
            <div class="step-title">Input</div>
            <div class="step-content">
                Ciphertext = HIAT
                <br>
                Original key matrix K =
                <br>
                [3 3]
                <br>
                [2 5]
            </div>
        </div>

        <div class="arrow">&darr;</div>

        <div class="crypto-step reveal-step hill-wide-step">
            <div class="step-title">Step 1 - Find the Inverse Matrix</div>
            <div class="step-content">
                det(K) = 9
                <br>
                The modular inverse of 9 modulo 26 is 3
                <br>
                because 9 x 3 = 27 and 27 mod 26 = 1.
                <br><br>
                K^-1 = 3 x [5 -3; -2 3] mod 26
                <br>
                K^-1 =
                <br>
                [15 17]
                <br>
                [20  9]
            </div>
        </div>

        <div class="arrow">&darr;</div>

        <div class="crypto-step reveal-step">
            <div class="step-title">Step 2 - Convert Ciphertext to Numbers</div>
            <div class="step-content">
                H = 7
                <br>
                I = 8
                <br>
                A = 0
                <br>
                T = 19
                <br><br>
                Blocks:
                <br>
                HI = [7, 8]
                <br>
                AT = [0, 19]
            </div>
        </div>

        <div class="arrow">&darr;</div>

        <div class="crypto-step reveal-step hill-wide-step">
            <div class="step-title">Step 3 - Decrypt Block HI</div>
            <div class="step-content">
                K^-1 x [H, I] mod 26
                <br><br>
                First plaintext number:
                <br>
                (15 x 7 + 17 x 8) mod 26 = 241 mod 26 = 7 = H
                <br><br>
                Second plaintext number:
                <br>
                (20 x 7 + 9 x 8) mod 26 = 212 mod 26 = 4 = E
                <br><br>
                HI &rarr; HE
            </div>
        </div>

        <div class="arrow">&darr;</div>

        <div class="crypto-step reveal-step hill-wide-step">
            <div class="step-title">Step 4 - Decrypt Block AT</div>
            <div class="step-content">
                K^-1 x [A, T] mod 26
                <br><br>
                First plaintext number:
                <br>
                (15 x 0 + 17 x 19) mod 26 = 323 mod 26 = 11 = L
                <br><br>
                Second plaintext number:
                <br>
                (20 x 0 + 9 x 19) mod 26 = 171 mod 26 = 15 = P
                <br><br>
                AT &rarr; LP
            </div>
        </div>

        <div class="arrow">&darr;</div>

        <div class="crypto-step final-step reveal-step">
            <div class="step-title">Final Plaintext</div>
            <div class="step-content">
                HI &rarr; HE
                <br>
                AT &rarr; LP
                <br><br>
                Plaintext = HELP
            </div>
        </div>
    </div>
</div>

<div class="content-section hill-section">
    <h3>Important Correctness Notes</h3>
    <ul class="rules-list">
        <li>The key matrix must be invertible modulo 26, otherwise decryption is impossible.</li>
        <li>The website supports 2x2, 3x3, and 4x4 matrices, but this example uses 2x2 to show every calculation clearly.</li>
        <li>If plaintext length does not match the block size, the tool pads the last block with X.</li>
        <li>Hill Cipher is useful for learning matrix cryptography, but it is not secure for modern real communication.</li>
    </ul>
</div>

`: ""}

${algo === "des" ? `

<div class="content-section des-section">
    <h3>Step-by-Step Encryption Example</h3>

    <div class="crypto-flow">
        <div class="crypto-step reveal-step">
            <div class="step-title">Input</div>
            <div class="step-content">
                Plaintext = HELLODES
                <br>
                Key = DESKEY12
                <br><br>
                DES block size = 8 bytes = 64 bits
                <br>
                This example is exactly one block.
            </div>
        </div>

        <div class="arrow">&darr;</div>

        <div class="crypto-step reveal-step des-wide-step">
            <div class="step-title">Step 1 - Convert to Hex</div>
            <div class="step-content">
                Plaintext bytes:
                <br>
                H E L L O D E S
                <br>
                48 45 4C 4C 4F 44 45 53
                <br><br>
                Key bytes:
                <br>
                D E S K E Y 1 2
                <br>
                44 45 53 4B 45 59 31 32
            </div>
        </div>

        <div class="arrow">&darr;</div>

        <div class="crypto-step reveal-step">
            <div class="step-title">Step 2 - Initial Permutation</div>
            <div class="step-content">
                DES first rearranges the 64 plaintext bits using the Initial Permutation table.
                <br><br>
                Plaintext hex:
                <br>
                48454C4C4F444553
                <br><br>
                After Initial Permutation:
                <br>
                FF807ED200001D90
                <br><br>
                The permuted block is split into two halves:
                <br>
                L0 = FF807ED2
                <br>
                R0 = 00001D90
            </div>
        </div>

        <div class="arrow">&darr;</div>

        <div class="crypto-step reveal-step">
            <div class="step-title">Step 3 - Generate 16 Round Keys</div>
            <div class="step-content">
                The 8-character key is converted to 64 bits.
                <br>
                DES uses 56 effective key bits and 8 parity bits.
                <br><br>
                The key schedule creates:
                <br>
                K1, K2, K3, ..., K16
                <br><br>
                First round key K1:
                <br>
                F092A2003371
            </div>
        </div>

        <div class="arrow">&darr;</div>

        <div class="crypto-step reveal-step des-wide-step">
            <div class="step-title">Step 4 - Round 1 Expansion and XOR</div>
            <div class="step-content">
                DES sends R0 into the round function F.
                <br>
                R0 is 32 bits, so DES expands it to 48 bits before XOR with K1.
                <br><br>
                The XOR rule is simple:
                <br>
                0 XOR 0 = 0
                <br>
                0 XOR 1 = 1
                <br>
                1 XOR 0 = 1
                <br>
                1 XOR 1 = 0
                <br><br>
                Expanded(R0) XOR K1 becomes the input to the S-Boxes.
            </div>
        </div>

        <div class="arrow">&darr;</div>

        <div class="crypto-step reveal-step des-wide-step">
            <div class="step-title">Step 5 - Round 1 S-Boxes and P Permutation</div>
            <div class="step-content">
                The 48-bit XOR result is split into 8 groups.
                <br>
                Each group has 6 bits and enters one S-Box.
                <br><br>
                8 S-Boxes x 4 output bits = 32 bits.
                <br>
                After the P permutation:
                <br>
                F(R0, K1) = 6D58F0B7
            </div>
        </div>

        <div class="arrow">&darr;</div>

        <div class="crypto-step reveal-step des-wide-step">
            <div class="step-title">Step 6 - Round 1 Feistel XOR</div>
            <div class="step-content">
                For each round:
                <br>
                New Left = Previous Right
                <br>
                New Right = Previous Left XOR F(Previous Right, Round Key)
                <br><br>
                Formula:
                <br>
                Li = R(i-1)
                <br>
                Ri = L(i-1) XOR F(R(i-1), Ki)
                <br><br>
                Round 1:
                <br>
                L1 = R0 = 00001D90
                <br>
                R1 = L0 XOR F(R0, K1)
                <br>
                R1 = FF807ED2 XOR 6D58F0B7
                <br>
                R1 = 92D88E65
            </div>
        </div>

        <div class="arrow">&darr;</div>

        <div class="crypto-step reveal-step des-wide-step">
            <div class="step-title">Step 7 - XOR Byte-by-Byte View</div>
            <div class="step-content des-xor-list">
                <span>FF XOR 6D = 92</span>
                <span>80 XOR 58 = D8</span>
                <span>7E XOR F0 = 8E</span>
                <span>D2 XOR B7 = 65</span>
                <span>Result = 92 D8 8E 65</span>
            </div>
        </div>

        <div class="arrow">&darr;</div>

        <div class="crypto-step reveal-step">
            <div class="step-title">Step 8 - Repeat 16 Rounds</div>
            <div class="step-content">
                Repeat the Feistel step with K1 through K16.
                <br>
                Each round creates a new L and R value.
                <br>
                After round 16, swap the halves and apply the Final Permutation.
            </div>
        </div>

        <div class="arrow">&darr;</div>

        <div class="crypto-step final-step reveal-step">
            <div class="step-title">Final Encryption Result</div>
            <div class="step-content">
                Plaintext hex = 48454C4C4F444553
                <br>
                Key hex = 4445534B45593132
                <br><br>
                Ciphertext hex = 75FB886B5D333465
            </div>
        </div>
    </div>
</div>

<div class="content-section des-section">
    <h3>Step-by-Step Decryption Example</h3>

    <div class="crypto-flow">
        <div class="crypto-step reveal-step">
            <div class="step-title">Input</div>
            <div class="step-content">
                Ciphertext hex = 75FB886B5D333465
                <br>
                Key = DESKEY12
            </div>
        </div>

        <div class="arrow">&darr;</div>

        <div class="crypto-step reveal-step">
            <div class="step-title">Step 1 - Use Same Key</div>
            <div class="step-content">
                DES is symmetric.
                <br>
                The same key DESKEY12 is required for decryption.
            </div>
        </div>

        <div class="arrow">&darr;</div>

        <div class="crypto-step reveal-step">
            <div class="step-title">Step 2 - Reverse Round Keys</div>
            <div class="step-content">
                Encryption uses:
                <br>
                K1 &rarr; K2 &rarr; ... &rarr; K16
                <br><br>
                Decryption uses:
                <br>
                K16 &rarr; K15 &rarr; ... &rarr; K1
                <br><br>
                The round function is not inverted manually.
                <br>
                DES works backward because the Feistel structure is reversible when the key order is reversed.
            </div>
        </div>

        <div class="arrow">&darr;</div>

        <div class="crypto-step reveal-step des-wide-step">
            <div class="step-title">Step 3 - First Reverse Round Concept</div>
            <div class="step-content">
                Start from the ciphertext block:
                <br>
                75FB886B5D333465
                <br><br>
                Apply Initial Permutation again, split into left and right halves,
                then use K16 first.
                <br>
                The same XOR rule is used inside each reverse round.
                <br><br>
                Reverse-round formula follows the Feistel undo path:
                <br>
                previous R = current L
                <br>
                previous L = current R XOR F(current L, Ki)
            </div>
        </div>

        <div class="arrow">&darr;</div>

        <div class="crypto-step reveal-step des-wide-step">
            <div class="step-title">Step 4 - Continue Back to K1</div>
            <div class="step-content">
                Repeat the reverse Feistel process:
                <br>
                K16, K15, K14, ..., K1
                <br><br>
                After the last reverse round, DES swaps the halves and applies the Final Permutation.
                <br>
                This returns the original plaintext block.
            </div>
        </div>

        <div class="arrow">&darr;</div>

        <div class="crypto-step final-step reveal-step">
            <div class="step-title">Final Decryption Result</div>
            <div class="step-content">
                Recovered hex = 48454C4C4F444553
                <br>
                Recovered text = HELLODES
            </div>
        </div>
    </div>
</div>

<div class="content-section des-section">
    <h3>Important Correctness Notes</h3>
    <ul class="rules-list">
        <li>This fixed example shows one raw 64-bit DES block for education.</li>
        <li>The website tool uses DES-CBC with a random IV and PKCS#7 padding, so tool output is formatted as DES:IV:ciphertext and changes when the IV changes.</li>
        <li>DES has only 56 effective key bits, so it is obsolete and not secure for new systems.</li>
        <li>Use AES for modern security.</li>
    </ul>
</div>

`: ""}

${algo === "tripledes" ? `

<div class="content-section des-section">
    <h3>Step-by-Step Encryption Example</h3>

    <div class="crypto-flow">
        <div class="crypto-step reveal-step">
            <div class="step-title">Input</div>
            <div class="step-content">
                Plaintext = HELLO3DS
                <br>
                24-character key = KEYONE12KEYTWO34KEYTHR56
                <br><br>
                Split into three DES keys:
                <br>
                K1 = KEYONE12
                <br>
                K2 = KEYTWO34
                <br>
                K3 = KEYTHR56
            </div>
        </div>

        <div class="arrow">&darr;</div>

        <div class="crypto-step reveal-step des-wide-step">
            <div class="step-title">Step 1 - Convert to Hex</div>
            <div class="step-content">
                Plaintext hex = 48454C4C4F334453
                <br><br>
                K1 hex = 4B45594F4E453132
                <br>
                K2 hex = 4B455954574F3334
                <br>
                K3 hex = 4B45595448523536
            </div>
        </div>

        <div class="arrow">&darr;</div>

        <div class="crypto-step reveal-step">
            <div class="step-title">Step 2 - First DES Encryption</div>
            <div class="step-content">
                Apply DES encryption with K1.
                <br>
                Step output = DES-Encrypt(HELLO3DS, K1)
                <br><br>
                This is a full DES operation:
                <br>
                Initial Permutation &rarr; 16 Feistel rounds &rarr; Final Permutation
                <br><br>
                Intermediate output 1:
                <br>
                1EBA43D2FB7C8687
            </div>
        </div>

        <div class="arrow">&darr;</div>

        <div class="crypto-step reveal-step">
            <div class="step-title">Step 3 - DES Decryption</div>
            <div class="step-content">
                Apply DES decryption with K2.
                <br>
                Step output = DES-Decrypt(previous block, K2)
                <br><br>
                This is why the sequence is called EDE.
                <br><br>
                Intermediate output 2:
                <br>
                91EC17CBF3E625FD
            </div>
        </div>

        <div class="arrow">&darr;</div>

        <div class="crypto-step reveal-step">
            <div class="step-title">Step 4 - Final DES Encryption</div>
            <div class="step-content">
                Apply DES encryption with K3.
                <br>
                Final block = DES-Encrypt(previous block, K3)
                <br><br>
                Intermediate output 3:
                <br>
                85AB2CAE295DC91F
            </div>
        </div>

        <div class="arrow">&darr;</div>

        <div class="crypto-step reveal-step des-wide-step">
            <div class="step-title">Step 5 - Layer Summary</div>
            <div class="step-content des-layer-list">
                <span>Start: 48454C4C4F334453 = HELLO3DS</span>
                <span>After Encrypt with K1: 1EBA43D2FB7C8687</span>
                <span>After Decrypt with K2: 91EC17CBF3E625FD</span>
                <span>After Encrypt with K3: 85AB2CAE295DC91F</span>
            </div>
        </div>

        <div class="arrow">&darr;</div>

        <div class="crypto-step final-step reveal-step">
            <div class="step-title">Final Encryption Result</div>
            <div class="step-content">
                EDE sequence:
                <br>
                Encrypt K1 &rarr; Decrypt K2 &rarr; Encrypt K3
                <br><br>
                Ciphertext hex = 85AB2CAE295DC91F
            </div>
        </div>
    </div>
</div>

<div class="content-section des-section">
    <h3>Step-by-Step Decryption Example</h3>

    <div class="crypto-flow">
        <div class="crypto-step reveal-step">
            <div class="step-title">Input</div>
            <div class="step-content">
                Ciphertext hex = 85AB2CAE295DC91F
                <br>
                Key = KEYONE12KEYTWO34KEYTHR56
            </div>
        </div>

        <div class="arrow">&darr;</div>

        <div class="crypto-step reveal-step">
            <div class="step-title">Step 1 - Reverse the EDE Order</div>
            <div class="step-content">
                Encryption:
                <br>
                Encrypt K1 &rarr; Decrypt K2 &rarr; Encrypt K3
                <br><br>
                Decryption:
                <br>
                Decrypt K3 &rarr; Encrypt K2 &rarr; Decrypt K1
            </div>
        </div>

        <div class="arrow">&darr;</div>

        <div class="crypto-step reveal-step">
            <div class="step-title">Step 2 - DES Decrypt with K3</div>
            <div class="step-content">
                The last encryption layer is removed first:
                <br>
                DES-Decrypt(ciphertext, K3)
                <br><br>
                Input = 85AB2CAE295DC91F
                <br>
                Output = 91EC17CBF3E625FD
            </div>
        </div>

        <div class="arrow">&darr;</div>

        <div class="crypto-step reveal-step">
            <div class="step-title">Step 3 - DES Encrypt with K2</div>
            <div class="step-content">
                Undo the middle DES decryption layer:
                <br>
                DES-Encrypt(previous block, K2)
                <br><br>
                Input = 91EC17CBF3E625FD
                <br>
                Output = 1EBA43D2FB7C8687
            </div>
        </div>

        <div class="arrow">&darr;</div>

        <div class="crypto-step reveal-step">
            <div class="step-title">Step 4 - DES Decrypt with K1</div>
            <div class="step-content">
                Remove the first encryption layer:
                <br>
                DES-Decrypt(previous block, K1)
                <br><br>
                Input = 1EBA43D2FB7C8687
                <br>
                Output = 48454C4C4F334453
            </div>
        </div>

        <div class="arrow">&darr;</div>

        <div class="crypto-step reveal-step des-wide-step">
            <div class="step-title">Step 5 - Reverse Layer Summary</div>
            <div class="step-content des-layer-list">
                <span>Start ciphertext: 85AB2CAE295DC91F</span>
                <span>After Decrypt with K3: 91EC17CBF3E625FD</span>
                <span>After Encrypt with K2: 1EBA43D2FB7C8687</span>
                <span>After Decrypt with K1: 48454C4C4F334453</span>
            </div>
        </div>

        <div class="arrow">&darr;</div>

        <div class="crypto-step final-step reveal-step">
            <div class="step-title">Final Decryption Result</div>
            <div class="step-content">
                Recovered hex = 48454C4C4F334453
                <br>
                Recovered text = HELLO3DS
            </div>
        </div>
    </div>
</div>

<div class="content-section des-section">
    <h3>Important Correctness Notes</h3>
    <ul class="rules-list">
        <li>This fixed example shows one raw 64-bit 3DES block for education.</li>
        <li>The website tool uses 3DES-CBC with a random IV and PKCS#7 padding, so tool output is formatted as 3DES:IV:ciphertext and changes when the IV changes.</li>
        <li>3DES is stronger than DES, but it is legacy and not recommended for new encryption.</li>
        <li>Use AES for modern security.</li>
    </ul>
</div>

`: ""}

${algo === "otp" ? `

<div class="content-section otp-section">
    <h3>Step-by-Step Encryption Example</h3>

    <div class="crypto-flow">
        <div class="crypto-step reveal-step">
            <div class="step-title">Input</div>
            <div class="step-content">
                Plaintext = HELLO
                <br>
                One-time key = XMCKL
                <br><br>
                Text length = 5 characters
                <br>
                Key length = 5 characters
                <br>
                Lengths match, so OTP can run.
            </div>
        </div>

        <div class="arrow">&darr;</div>

        <div class="crypto-step reveal-step otp-wide-step">
            <div class="step-title">Step 1 - Convert Characters to ASCII</div>
            <div class="step-content">
                <div class="otp-table otp-table-5">
                    <div class="otp-head">Position</div><div>1</div><div>2</div><div>3</div><div>4</div><div>5</div>
                    <div class="otp-head">Plaintext</div><div>H</div><div>E</div><div>L</div><div>L</div><div>O</div>
                    <div class="otp-head">Plain hex</div><div>48</div><div>45</div><div>4C</div><div>4C</div><div>4F</div>
                    <div class="otp-head">Key</div><div>X</div><div>M</div><div>C</div><div>K</div><div>L</div>
                    <div class="otp-head">Key hex</div><div>58</div><div>4D</div><div>43</div><div>4B</div><div>4C</div>
                </div>
            </div>
        </div>

        <div class="arrow">&darr;</div>

        <div class="crypto-step reveal-step">
            <div class="step-title">Step 2 - Understand XOR</div>
            <div class="step-content">
                XOR compares bits:
                <br>
                0 XOR 0 = 0
                <br>
                0 XOR 1 = 1
                <br>
                1 XOR 0 = 1
                <br>
                1 XOR 1 = 0
                <br><br>
                Same bits become 0, different bits become 1.
            </div>
        </div>

        <div class="arrow">&darr;</div>

        <div class="crypto-step reveal-step otp-wide-step">
            <div class="step-title">Step 3 - XOR Each Character</div>
            <div class="step-content otp-calc-list">
                <span>H 0x48 XOR X 0x58 = 0x10</span>
                <span>E 0x45 XOR M 0x4D = 0x08</span>
                <span>L 0x4C XOR C 0x43 = 0x0F</span>
                <span>L 0x4C XOR K 0x4B = 0x07</span>
                <span>O 0x4F XOR L 0x4C = 0x03</span>
            </div>
        </div>

        <div class="arrow">&darr;</div>

        <div class="crypto-step reveal-step">
            <div class="step-title">Step 4 - Cipher Bytes</div>
            <div class="step-content">
                Encrypted bytes in hex:
                <br>
                10 08 0F 07 03
                <br><br>
                These bytes are binary data, not safe readable text.
            </div>
        </div>

        <div class="arrow">&darr;</div>

        <div class="crypto-step reveal-step">
            <div class="step-title">Step 5 - Encode Bytes as Base64</div>
            <div class="step-content">
                Binary bytes:
                <br>
                10 08 0F 07 03
                <br><br>
                Base64:
                <br>
                EAgPBwM=
            </div>
        </div>

        <div class="arrow">&darr;</div>

        <div class="crypto-step final-step reveal-step">
            <div class="step-title">Final Encryption Result</div>
            <div class="step-content">
                Plaintext = HELLO
                <br>
                Key = XMCKL
                <br>
                Cipher bytes = 10 08 0F 07 03
                <br><br>
                Site output = OTP:EAgPBwM=
            </div>
        </div>
    </div>
</div>

<div class="content-section otp-section">
    <h3>Step-by-Step Decryption Example</h3>

    <div class="crypto-flow">
        <div class="crypto-step reveal-step">
            <div class="step-title">Input</div>
            <div class="step-content">
                Ciphertext = OTP:EAgPBwM=
                <br>
                Same one-time key = XMCKL
            </div>
        </div>

        <div class="arrow">&darr;</div>

        <div class="crypto-step reveal-step">
            <div class="step-title">Step 1 - Remove OTP Prefix</div>
            <div class="step-content">
                The site format is:
                <br>
                OTP:Base64CipherBytes
                <br><br>
                Base64 part = EAgPBwM=
            </div>
        </div>

        <div class="arrow">&darr;</div>

        <div class="crypto-step reveal-step">
            <div class="step-title">Step 2 - Decode Base64</div>
            <div class="step-content">
                EAgPBwM= decodes back to bytes:
                <br>
                10 08 0F 07 03
            </div>
        </div>

        <div class="arrow">&darr;</div>

        <div class="crypto-step reveal-step otp-wide-step">
            <div class="step-title">Step 3 - XOR Cipher Bytes with Same Key</div>
            <div class="step-content otp-calc-list">
                <span>0x10 XOR X 0x58 = 0x48 = H</span>
                <span>0x08 XOR M 0x4D = 0x45 = E</span>
                <span>0x0F XOR C 0x43 = 0x4C = L</span>
                <span>0x07 XOR K 0x4B = 0x4C = L</span>
                <span>0x03 XOR L 0x4C = 0x4F = O</span>
            </div>
        </div>

        <div class="arrow">&darr;</div>

        <div class="crypto-step reveal-step">
            <div class="step-title">Step 4 - Why XOR Decrypts</div>
            <div class="step-content">
                Encryption:
                <br>
                Cipher = Plaintext XOR Key
                <br><br>
                Decryption:
                <br>
                Plaintext = Cipher XOR Key
                <br><br>
                Because:
                <br>
                (Plaintext XOR Key) XOR Key = Plaintext
            </div>
        </div>

        <div class="arrow">&darr;</div>

        <div class="crypto-step final-step reveal-step">
            <div class="step-title">Final Decryption Result</div>
            <div class="step-content">
                Recovered hex:
                <br>
                48 45 4C 4C 4F
                <br><br>
                Recovered text = HELLO
            </div>
        </div>
    </div>
</div>

<div class="content-section otp-section">
    <h3>Important Correctness Notes</h3>
    <ul class="rules-list">
        <li>This example uses readable characters so the XOR steps are easy to inspect. A real OTP key should come from a truly random source.</li>
        <li>The key must be exactly the same length as the message.</li>
        <li>The key must never be reused. Reusing an OTP key can reveal information about both messages.</li>
        <li>The tool returns OTP:Base64 because raw XOR bytes may include non-printable characters.</li>
    </ul>
</div>

`: ""}


    ${
        algo === "caesar" ? `
       <div class="content-section">
       <h3>Encryption Formula</h3>

    <div class="formula-box">
        E(x) = (x + n) mod 26
    </div>

    <br>

    <p>
        Where:
        <br><br>

        x = plaintext letter number
        <br>

        n = shift value (key)
    </p>

</div>


<div class="content-section">

    <h3>Decryption Formula</h3>

    <div class="formula-box">
        D(x) = (x - n) mod 26
    </div>

    <br>

    <p>
        Where:
        <br><br>

        x = ciphertext letter number
        <br>

        n = shift value (key)
    </p>

</div>
<div class="content-section">

    <h3>Step-by-Step Encryption Example</h3>

    <div class="crypto-flow">

        <!-- FORMULA -->
        <div class="crypto-step reveal-step">
            <div class="step-title">Encryption Formula</div>
            <div class="step-content">
                E(x) = (x + n) mod 26
                <br><br>
                n = 3
            </div>
        </div>

        <div class="arrow">↓</div>

        <!-- STEP 1 -->
        <div class="crypto-step reveal-step">
            <div class="step-title">Step 1</div>
            <div class="step-content">
                H = 7
            </div>
        </div>

        <div class="arrow">↓</div>

        <div class="crypto-step reveal-step">
            <div class="step-content">
                E(7) = (7 + 3) mod 26 = 10 → K
            </div>
        </div>

        <div class="arrow">↓</div>

        <!-- STEP 2 -->
        <div class="crypto-step reveal-step">
            <div class="step-title">Step 2</div>
            <div class="step-content">
                E = 4
            </div>
        </div>

        <div class="arrow">↓</div>

        <div class="crypto-step reveal-step">
            <div class="step-content">
                E(4) = (4 + 3) mod 26 = 7 → H
            </div>
        </div>

        <div class="arrow">↓</div>

        <!-- STEP 3 -->
        <div class="crypto-step reveal-step">
            <div class="step-title">Step 3</div>
            <div class="step-content">
                L = 11
            </div>
        </div>

        <div class="arrow">↓</div>

        <div class="crypto-step reveal-step">
            <div class="step-content">
                E(11) = (11 + 3) mod 26 = 14 → O
            </div>
        </div>

        <div class="arrow">↓</div>

        <!-- STEP 4 -->
        <div class="crypto-step reveal-step">
            <div class="step-title">Step 4</div>
            <div class="step-content">
                L = 11
            </div>
        </div>

        <div class="arrow">↓</div>

        <div class="crypto-step reveal-step">
            <div class="step-content">
                E(11) = (11 + 3) mod 26 = 14 → O
            </div>
        </div>

        <div class="arrow">↓</div>

        <!-- STEP 5 -->
        <div class="crypto-step reveal-step">
            <div class="step-title">Step 5</div>
            <div class="step-content">
                O = 14
            </div>
        </div>

        <div class="arrow">↓</div>

        <div class="crypto-step reveal-step">
            <div class="step-content">
                E(14) = (14 + 3) mod 26 = 17 → R
            </div>
        </div>

        <div class="arrow">↓</div>

        <div class="crypto-step final-step reveal-step">
            <div class="step-title">Encrypted Result</div>
            <div class="step-content">
                KHOOR
            </div>
        </div>

    </div>
</div>



<div class="content-section">

    <h3>Step-by-Step Decryption Example</h3>

    <div class="crypto-flow">

        <!-- FORMULA -->
        <div class="crypto-step reveal-step">
            <div class="step-title">Decryption Formula</div>
            <div class="step-content">
                D(x) = (x - n) mod 26
                <br><br>
                n = 3
            </div>
        </div>

        <div class="arrow">↓</div>

        <!-- STEP 1 -->
        <div class="crypto-step reveal-step">
            <div class="step-title">Step 1</div>
            <div class="step-content">
                K = 10
            </div>
        </div>

        <div class="arrow">↓</div>

        <div class="crypto-step reveal-step">
            <div class="step-content">
                D(10) = (10 - 3) mod 26 = 7 → H
            </div>
        </div>

        <div class="arrow">↓</div>

        <!-- STEP 2 -->
        <div class="crypto-step reveal-step">
            <div class="step-title">Step 2</div>
            <div class="step-content">
                H = 7
            </div>
        </div>

        <div class="arrow">↓</div>

        <div class="crypto-step reveal-step">
            <div class="step-content">
                D(7) = (7 - 3) mod 26 = 4 → E
            </div>
        </div>

        <div class="arrow">↓</div>

        <!-- STEP 3 -->
        <div class="crypto-step reveal-step">
            <div class="step-title">Step 3</div>
            <div class="step-content">
                O = 14
            </div>
        </div>

        <div class="arrow">↓</div>

        <div class="crypto-step reveal-step">
            <div class="step-content">
                D(14) = (14 - 3) mod 26 = 11 → L
            </div>
        </div>

        <div class="arrow">↓</div>

        <!-- STEP 4 -->
        <div class="crypto-step reveal-step">
            <div class="step-title">Step 4</div>
            <div class="step-content">
                O = 14
            </div>
        </div>

        <div class="arrow">↓</div>

        <div class="crypto-step reveal-step">
            <div class="step-content">
                D(14) = (14 - 3) mod 26 = 11 → L
            </div>
        </div>

        <div class="arrow">↓</div>

        <!-- STEP 5 -->
        <div class="crypto-step reveal-step">
            <div class="step-title">Step 5</div>
            <div class="step-content">
                R = 17
            </div>
        </div>

        <div class="arrow">↓</div>

        <div class="crypto-step reveal-step">
            <div class="step-content">
                D(17) = (17 - 3) mod 26 = 14 → O
            </div>
        </div>

        <div class="arrow">↓</div>

        <div class="crypto-step final-step reveal-step">
            <div class="step-title">Decrypted Result</div>
            <div class="step-content">
                HELLO
            </div>
        </div>

    </div>
</div>

`: ""}
${algo === "vigenere" ? `

<div class="content-section">
    <h3>Define</h3>
    <p>
        Vigenere Cipher uses multiple substitution alphabets to encrypt alphabetic text with a keyword.
        Unlike Caesar Cipher, which uses one fixed shift, Vigenere uses many shifts based on the repeated keyword letters.
    </p>
</div>

<div class="content-section">
    <h3>History</h3>
    <p>
        The Vigenere Cipher became popular during the 16th century and is one of the most famous classical encryption techniques in cryptography history.
    </p>
</div>

<div class="content-section">
    <h3>Encryption Formula</h3>

    <div class="formula-box">
        Ei = (Pi + Ki) mod 26
    </div>

    <br>

    <p>
        Where:
        <br><br>
        Ei = ciphertext letter value
        <br>
        Pi = plaintext letter value
        <br>
        Ki = key letter value
    </p>
</div>

<div class="content-section">
    <h3>Decryption Formula</h3>

    <div class="formula-box">
        Di = (Ei - Ki + 26) mod 26
    </div>

    <br>

    <p>
        Where:
        <br><br>
        Di = plaintext letter value
        <br>
        Ei = ciphertext letter value
        <br>
        Ki = key letter value
    </p>
</div>

<div class="content-section">
    <h3>How Vigenere Cipher Works</h3>

    <div class="crypto-flow">

        <div class="crypto-step reveal-step">
            <div class="step-title">Step 1 - Choose a Keyword</div>
            <div class="step-content">
                Keyword = AYUSH
            </div>
        </div>

        <div class="arrow">↓</div>

        <div class="crypto-step reveal-step">
            <div class="step-title">Step 2 - Repeat the Keyword</div>
            <div class="step-content">
                Plaintext = GEEKSFORGEEKS
                <br><br>
                Generated Key = AYUSHAYUSHAYU
            </div>
        </div>

        <div class="arrow">↓</div>

        <div class="crypto-step reveal-step">
            <div class="step-title">Step 3 - Convert Letters</div>
            <div class="step-content">
                A = 0, B = 1, C = 2, ... Z = 25
                <br><br>
                G = 6, E = 4, K = 10, S = 18
            </div>
        </div>

    </div>
</div>

<div class="content-section">
    <h3>Step-by-Step Encryption Example</h3>

    <div class="crypto-flow">

        <div class="crypto-step reveal-step">
            <div class="step-title">Input</div>
            <div class="step-content">
                Plaintext = GEEKSFORGEEKS
                <br>
                Keyword = AYUSH
                <br>
                Generated Key = AYUSHAYUSHAYU
            </div>
        </div>

        <div class="arrow">↓</div>

        <div class="crypto-step reveal-step">
            <div class="step-title">Formula</div>
            <div class="step-content">
                Ei = (Pi + Ki) mod 26
            </div>
        </div>

        <div class="arrow">↓</div>

        <div class="crypto-step reveal-step">
            <div class="step-title">Step 1</div>
            <div class="step-content">
                Plaintext Letter: G = 6
                <br>
                Key Letter: A = 0
                <br><br>
                E = (6 + 0) mod 26 = 6
                <br>
                6 = G
            </div>
        </div>

        <div class="arrow">↓</div>

        <div class="crypto-step reveal-step">
            <div class="step-title">Step 2</div>
            <div class="step-content">
                Plaintext Letter: E = 4
                <br>
                Key Letter: Y = 24
                <br><br>
                E = (4 + 24) mod 26 = 2
                <br>
                2 = C
            </div>
        </div>

        <div class="arrow">↓</div>

        <div class="crypto-step reveal-step">
            <div class="step-title">Step 3</div>
            <div class="step-content">
                Plaintext Letter: E = 4
                <br>
                Key Letter: U = 20
                <br><br>
                E = (4 + 20) mod 26 = 24
                <br>
                24 = Y
            </div>
        </div>

        <div class="arrow">↓</div>

        <div class="crypto-step reveal-step">
            <div class="step-title">Step 4</div>
            <div class="step-content">
                Plaintext Letter: K = 10
                <br>
                Key Letter: S = 18
                <br><br>
                E = (10 + 18) mod 26 = 2
                <br>
                2 = C
            </div>
        </div>

        <div class="arrow">↓</div>

        <div class="crypto-step reveal-step">
            <div class="step-title">Step 5</div>
            <div class="step-content">
                Plaintext Letter: S = 18
                <br>
                Key Letter: H = 7
                <br><br>
                E = (18 + 7) mod 26 = 25
                <br>
                25 = Z
            </div>
        </div>

        <div class="arrow">↓</div>

        <div class="crypto-step reveal-step">
            <div class="step-title">Remaining Letters</div>
            <div class="step-content">
                F + A = F
                <br>
                O + Y = M
                <br>
                R + U = L
                <br>
                G + S = Y
                <br>
                E + H = L
                <br>
                E + A = E
                <br>
                K + Y = I
                <br>
                S + U = M
            </div>
        </div>

        <div class="arrow">↓</div>

        <div class="crypto-step final-step reveal-step">
            <div class="step-title">Final Ciphertext</div>
            <div class="step-content">
                GCYCZFMLYLEIM
            </div>
        </div>

    </div>
</div>

<div class="content-section">
    <h3>Step-by-Step Decryption Example</h3>

    <div class="crypto-flow">

        <div class="crypto-step reveal-step">
            <div class="step-title">Input</div>
            <div class="step-content">
                Ciphertext = GCYCZFMLYLEIM
                <br>
                Keyword = AYUSH
                <br>
                Generated Key = AYUSHAYUSHAYU
            </div>
        </div>

        <div class="arrow">↓</div>

        <div class="crypto-step reveal-step">
            <div class="step-title">Formula</div>
            <div class="step-content">
                Di = (Ei - Ki + 26) mod 26
            </div>
        </div>

        <div class="arrow">↓</div>

        <div class="crypto-step reveal-step">
            <div class="step-title">Step 1</div>
            <div class="step-content">
                Ciphertext Letter: G = 6
                <br>
                Key Letter: A = 0
                <br><br>
                D = (6 - 0 + 26) mod 26 = 6
                <br>
                6 = G
            </div>
        </div>

        <div class="arrow">↓</div>

        <div class="crypto-step reveal-step">
            <div class="step-title">Step 2</div>
            <div class="step-content">
                Ciphertext Letter: C = 2
                <br>
                Key Letter: Y = 24
                <br><br>
                D = (2 - 24 + 26) mod 26 = 4
                <br>
                4 = E
            </div>
        </div>

        <div class="arrow">↓</div>

        <div class="crypto-step reveal-step">
            <div class="step-title">Step 3</div>
            <div class="step-content">
                Ciphertext Letter: Y = 24
                <br>
                Key Letter: U = 20
                <br><br>
                D = (24 - 20 + 26) mod 26 = 4
                <br>
                4 = E
            </div>
        </div>

        <div class="arrow">↓</div>

        <div class="crypto-step reveal-step">
            <div class="step-title">Step 4</div>
            <div class="step-content">
                Ciphertext Letter: C = 2
                <br>
                Key Letter: S = 18
                <br><br>
                D = (2 - 18 + 26) mod 26 = 10
                <br>
                10 = K
            </div>
        </div>

        <div class="arrow">↓</div>

        <div class="crypto-step reveal-step">
            <div class="step-title">Step 5</div>
            <div class="step-content">
                Ciphertext Letter: Z = 25
                <br>
                Key Letter: H = 7
                <br><br>
                D = (25 - 7 + 26) mod 26 = 18
                <br>
                18 = S
            </div>
        </div>

        <div class="arrow">↓</div>

        <div class="crypto-step final-step reveal-step">
            <div class="step-title">Final Plaintext</div>
            <div class="step-content">
                GEEKSFORGEEKS
            </div>
        </div>

    </div>
</div>

<div class="content-section">
    <h3>Applications</h3>
    <ul class="rules-list">
        <li>Learning classical cryptography</li>
        <li>Educational cybersecurity projects</li>
        <li>Understanding polyalphabetic encryption methods</li>
        <li>Teaching encryption fundamentals</li>
    </ul>
</div>

<div class="content-section">
    <h3>Comparison with Caesar Cipher</h3>
    <div class="crypto-flow">
        <div class="crypto-step reveal-step">
            <div class="step-title">Caesar Cipher</div>
            <div class="step-content">
                Uses one shift
                <br>
                Monoalphabetic
                <br>
                Low security
                <br>
                Easy to break
            </div>
        </div>

        <div class="arrow">↓</div>

        <div class="crypto-step reveal-step">
            <div class="step-title">Vigenere Cipher</div>
            <div class="step-content">
                Uses multiple shifts
                <br>
                Polyalphabetic
                <br>
                Medium security
                <br>
                Harder to break
            </div>
        </div>
    </div>
</div>

`: ""}
${algo === "rsa" ? `

<div class="content-section">
    <h3>Definition</h3>
    <p>
        RSA Algorithm is an asymmetric encryption algorithm that uses two different keys:
        a public key for encryption and a private key for decryption. It is one of the most widely used cryptographic systems in modern secure communication.
    </p>
</div>

<div class="content-section">
    <h3>What is RSA?</h3>
    <p>
        RSA stands for Rivest-Shamir-Adleman. It was developed in 1977 and works because multiplying large prime numbers is easy,
        but factoring their product is extremely hard when the numbers are large enough.
    </p>
</div>

<div class="content-section">
    <h3>Key Concept</h3>
    <ul class="rules-list">
        <li>Public Key is used for encryption.</li>
        <li>Private Key is used for decryption.</li>
        <li>Only the receiver knows the private key.</li>
        <li>The public key can be shared with anyone.</li>
    </ul>
</div>

<div class="content-section">
    <h3>Key Generation Formula</h3>

    <div class="formula-box">
        n = p x q
        <br>
        phi(n) = (p - 1)(q - 1)
        <br>
        d = e^-1 mod phi(n)
    </div>

    <br>

    <p>
        Public Key = (e, n)
        <br>
        Private Key = (d, n)
    </p>
</div>

<div class="content-section">
    <h3>Step-by-Step Key Generation</h3>

    <div class="crypto-flow">

        <div class="crypto-step reveal-step">
            <div class="step-title">Step 1 - Choose Prime Numbers</div>
            <div class="step-content">
                p = 1009
                <br>
                q = 7919
            </div>
        </div>

        <div class="arrow">↓</div>

        <div class="crypto-step reveal-step">
            <div class="step-title">Step 2 - Compute n</div>
            <div class="step-content">
                n = p x q
                <br><br>
                n = 1009 x 7919
                <br>
                n = 7990271
            </div>
        </div>

        <div class="arrow">↓</div>

        <div class="crypto-step reveal-step">
            <div class="step-title">Step 3 - Compute phi(n)</div>
            <div class="step-content">
                phi(n) = (p - 1)(q - 1)
                <br><br>
                phi(n) = 1008 x 7918
                <br>
                phi(n) = 7981344
            </div>
        </div>

        <div class="arrow">↓</div>

        <div class="crypto-step reveal-step">
            <div class="step-title">Step 4 - Choose e</div>
            <div class="step-content">
                Choose e so:
                <br>
                1 &lt; e &lt; phi(n)
                <br>
                gcd(e, phi(n)) = 1
                <br><br>
                e = 5
                <br>
                gcd(5, 7981344) = 1
            </div>
        </div>

        <div class="arrow">↓</div>

        <div class="crypto-step reveal-step">
            <div class="step-title">Step 5 - Compute d</div>
            <div class="step-content">
                d = e^-1 mod phi(n)
                <br><br>
                d = 5^-1 mod 7981344
                <br>
                d = 1596269
                <br><br>
                Check:
                <br>
                (5 x 1596269) mod 7981344 = 1
            </div>
        </div>

        <div class="arrow">↓</div>

        <div class="crypto-step final-step reveal-step">
            <div class="step-title">Final Keys</div>
            <div class="step-content">
                Public Key = (5, 7990271)
                <br>
                Private Key = (1596269, 7990271)
            </div>
        </div>

    </div>
</div>

<div class="content-section">
    <h3>Encryption Formula</h3>

    <div class="formula-box">
        C = M^e mod n
    </div>

    <br>

    <p>
        M = original message
        <br>
        C = ciphertext
        <br>
        e, n = public key values
    </p>
</div>

<div class="content-section">
    <h3>Step-by-Step Encryption Example</h3>

    <div class="crypto-flow">

        <div class="crypto-step reveal-step">
            <div class="step-title">Given</div>
            <div class="step-content">
                Message M = 123
                <br>
                Public Key = (5, 7990271)
            </div>
        </div>

        <div class="arrow">↓</div>

        <div class="crypto-step reveal-step">
            <div class="step-title">Step 1 - Substitute</div>
            <div class="step-content">
                C = M^e mod n
                <br><br>
                C = 123^5 mod 7990271
            </div>
        </div>

        <div class="arrow">↓</div>

        <div class="crypto-step reveal-step">
            <div class="step-title">Step 2 - Expand Power</div>
            <div class="step-content">
                123^5 = 123 x 123 x 123 x 123 x 123
            </div>
        </div>

        <div class="arrow">↓</div>

        <div class="crypto-step reveal-step">
            <div class="step-title">Step 3 - Modular Exponentiation</div>
            <div class="step-content">
                123^2 mod 7990271 = 15129
                <br>
                123^4 mod 7990271 = 5159053
                <br>
                123^5 mod 7990271 = (5159053 x 123) mod 7990271
            </div>
        </div>

        <div class="arrow">↓</div>

        <div class="crypto-step final-step reveal-step">
            <div class="step-title">Final Ciphertext</div>
            <div class="step-content">
                C = 3332110
            </div>
        </div>

    </div>
</div>

<div class="content-section">
    <h3>Decryption Formula</h3>

    <div class="formula-box">
        M = C^d mod n
    </div>

    <br>

    <p>
        C = ciphertext
        <br>
        M = recovered message
        <br>
        d, n = private key values
    </p>
</div>

<div class="content-section">
    <h3>Step-by-Step Decryption Example</h3>

    <div class="crypto-flow">

        <div class="crypto-step reveal-step">
            <div class="step-title">Given</div>
            <div class="step-content">
                Ciphertext C = 3332110
                <br>
                Private Key = (1596269, 7990271)
            </div>
        </div>

        <div class="arrow">↓</div>

        <div class="crypto-step reveal-step">
            <div class="step-title">Step 1 - Substitute</div>
            <div class="step-content">
                M = C^d mod n
                <br><br>
                M = 3332110^1596269 mod 7990271
            </div>
        </div>

        <div class="arrow">↓</div>

        <div class="crypto-step reveal-step">
            <div class="step-title">Step 2 - Binary Exponent</div>
            <div class="step-content">
                1596269 in binary:
                <br>
                110000101101101101101
                <br><br>
                Use repeated squaring and reduce mod n at every step.
            </div>
        </div>

        <div class="arrow">↓</div>

        <div class="crypto-step reveal-step">
            <div class="step-title">Step 3 - Multiply Needed Powers</div>
            <div class="step-content">
                Running result after selected powers:
                <br>
                bit 0 -> 3332110
                <br>
                bit 2 -> 2527666
                <br>
                bit 3 -> 2970969
                <br>
                bit 5 -> 3047262
                <br>
                bit 6 -> 660642
                <br>
                bit 8 -> 1245233
            </div>
        </div>

        <div class="arrow">↓</div>

        <div class="crypto-step reveal-step">
            <div class="step-title">Step 4 - Complete Reduction</div>
            <div class="step-content">
                Continue the same modular multiplication:
                <br>
                bit 9 -> 589569
                <br>
                bit 11 -> 920194
                <br>
                bit 12 -> 3344386
                <br>
                bit 14 -> 200474
                <br>
                bit 19 -> 3070714
                <br>
                bit 20 -> 123
            </div>
        </div>

        <div class="arrow">↓</div>

        <div class="crypto-step final-step reveal-step">
            <div class="step-title">Recovered Message</div>
            <div class="step-content">
                M = 123
            </div>
        </div>

    </div>
</div>

<div class="content-section">
    <h3>Why RSA is Secure?</h3>
    <p>
        RSA security depends on the fact that factoring very large numbers is computationally difficult.
        If p and q are large enough, breaking RSA becomes practically impossible with current classical computers.
    </p>
</div>

<div class="content-section">
    <h3>Applications</h3>
    <ul class="rules-list">
        <li>HTTPS / SSL certificates</li>
        <li>Digital signatures</li>
        <li>Secure email systems such as PGP</li>
        <li>Secure key exchange</li>
        <li>Blockchain systems</li>
    </ul>
</div>

<div class="content-section">
    <h3>Comparison with Symmetric Encryption</h3>
    <div class="crypto-flow">
        <div class="crypto-step reveal-step">
            <div class="step-title">RSA</div>
            <div class="step-content">
                Keys: 2
                <br>
                Speed: Slow
                <br>
                Security: High
                <br>
                Usage: Key exchange and signatures
            </div>
        </div>

        <div class="arrow">↓</div>

        <div class="crypto-step reveal-step">
            <div class="step-title">Symmetric Encryption</div>
            <div class="step-content">
                Keys: 1
                <br>
                Speed: Fast
                <br>
                Security: Medium-High
                <br>
                Usage: Data encryption
            </div>
        </div>
    </div>
</div>

<div class="content-section">
    <h3>Final Summary</h3>
    <p>
        RSA is a cornerstone of modern cryptography. It is widely used in secure communication systems because of its strong mathematical foundation
        and the difficulty of breaking large prime factorization.
    </p>
</div>

`: ""}
${algo === "hash" ? `

<div class="content-section">
    <h3>Define</h3>
    <p>
        A Cryptographic Hash Function is a one-way mathematical function that converts input data of any size
        into a fixed-size output called a hash value or digest.
    </p>
</div>

<div class="content-section">
    <h3>What is Hashing?</h3>
    <p>
        Hashing takes input data and produces a fixed-length string. The same input produces the same output,
        a small change produces a completely different output, and the process cannot be reversed.
    </p>
</div>

<div class="content-section">
    <h3>General Properties</h3>
    <ul class="rules-list">
        <li>Fixed output size</li>
        <li>Deterministic result</li>
        <li>One-way function</li>
        <li>Collision resistant when the algorithm is strong</li>
        <li>Avalanche effect: tiny changes create very different digests</li>
    </ul>
</div>

<div class="content-section">
    <h3>Important Concept: No Decryption</h3>

    <div class="formula-box">
        Hash(M) cannot be reversed back to M
    </div>

    <br>

    <p>
        Hashing is not encryption. It does not hide a message so it can be decrypted later.
        It creates a one-way fingerprint used for verification.
    </p>
</div>

<div class="content-section">
    <h3>Main Hash Algorithms</h3>

    <div class="crypto-flow">

        <div class="crypto-step reveal-step">
            <div class="step-title">MD5</div>
            <div class="step-content">
                Output: 128-bit hash
                <br>
                Status: old and insecure
                <br>
                Example MD5(HELLO):
                <br>
                EB61EEAD90E3B899C6BCBE27AC581660
            </div>
        </div>

        <div class="arrow">↓</div>

        <div class="crypto-step reveal-step">
            <div class="step-title">SHA-1</div>
            <div class="step-content">
                Output: 160-bit hash
                <br>
                Status: deprecated
                <br>
                Example SHA-1(HELLO):
                <br>
                C65F99F8C5376ADADDDC46D5CBCF5762F9E55EB7
            </div>
        </div>

        <div class="arrow">↓</div>

        <div class="crypto-step reveal-step">
            <div class="step-title">SHA-256</div>
            <div class="step-content">
                Output: 256-bit hash
                <br>
                Status: modern standard
                <br>
                Used in integrity checks, signatures, and blockchain systems.
            </div>
        </div>

        <div class="arrow">↓</div>

        <div class="crypto-step reveal-step">
            <div class="step-title">SHA-3</div>
            <div class="step-content">
                Output: 224 / 256 / 384 / 512-bit variants
                <br>
                Status: newest standardized family
                <br>
                Structure: Keccak sponge construction.
            </div>
        </div>

    </div>
</div>

<div class="content-section">
    <h3>MD5 Educational Workflow</h3>

    <div class="crypto-flow">

        <div class="crypto-step reveal-step">
            <div class="step-title">Step 1 - Input</div>
            <div class="step-content">Message = HELLO</div>
        </div>

        <div class="arrow">↓</div>

        <div class="crypto-step reveal-step">
            <div class="step-title">Step 2 - Padding</div>
            <div class="step-content">
                Add 1 bit, then zeros until message length is congruent to 448 mod 512.
            </div>
        </div>

        <div class="arrow">↓</div>

        <div class="crypto-step reveal-step">
            <div class="step-title">Step 3 - Append Length</div>
            <div class="step-content">
                Append the original message length as a 64-bit value.
            </div>
        </div>

        <div class="arrow">↓</div>

        <div class="crypto-step reveal-step">
            <div class="step-title">Step 4 - Initialize Buffers</div>
            <div class="step-content">
                Start with four internal buffers:
                <br>
                A, B, C, D
            </div>
        </div>

        <div class="arrow">↓</div>

        <div class="crypto-step reveal-step">
            <div class="step-title">Step 5 - Process Blocks</div>
            <div class="step-content">
                Each 512-bit block passes through 4 rounds using XOR, AND, OR, NOT, and modular addition.
            </div>
        </div>

        <div class="arrow">↓</div>

        <div class="crypto-step final-step reveal-step">
            <div class="step-title">Step 6 - Output</div>
            <div class="step-content">128-bit digest</div>
        </div>

    </div>
</div>

<div class="content-section">
    <h3>SHA-1 Educational Workflow</h3>

    <div class="crypto-flow">

        <div class="crypto-step reveal-step">
            <div class="step-title">Step 1 - Input</div>
            <div class="step-content">Message = HELLO</div>
        </div>

        <div class="arrow">↓</div>

        <div class="crypto-step reveal-step">
            <div class="step-title">Step 2 - Padding</div>
            <div class="step-content">Make message length congruent to 448 mod 512.</div>
        </div>

        <div class="arrow">↓</div>

        <div class="crypto-step reveal-step">
            <div class="step-title">Step 3 - Append Length</div>
            <div class="step-content">Append original length as a 64-bit value.</div>
        </div>

        <div class="arrow">↓</div>

        <div class="crypto-step reveal-step">
            <div class="step-title">Step 4 - Initialize Registers</div>
            <div class="step-content">A, B, C, D, E</div>
        </div>

        <div class="arrow">↓</div>

        <div class="crypto-step reveal-step">
            <div class="step-title">Step 5 - Process 80 Rounds</div>
            <div class="step-content">
                Each round uses bitwise operations, circular shifts, and logical functions.
            </div>
        </div>

        <div class="arrow">↓</div>

        <div class="crypto-step final-step reveal-step">
            <div class="step-title">Step 6 - Output</div>
            <div class="step-content">160-bit digest</div>
        </div>

    </div>
</div>

<div class="content-section">
    <h3>SHA-256 Educational Workflow</h3>

    <div class="crypto-flow">

        <div class="crypto-step reveal-step">
            <div class="step-title">Step 1 - Input</div>
            <div class="step-content">Message = HELLO</div>
        </div>

        <div class="arrow">↓</div>

        <div class="crypto-step reveal-step">
            <div class="step-title">Step 2 - Padding</div>
            <div class="step-content">
                Add 1 bit, then zeros until length is congruent to 448 mod 512.
            </div>
        </div>

        <div class="arrow">↓</div>

        <div class="crypto-step reveal-step">
            <div class="step-title">Step 3 - Split Blocks</div>
            <div class="step-content">Create 512-bit message blocks.</div>
        </div>

        <div class="arrow">↓</div>

        <div class="crypto-step reveal-step">
            <div class="step-title">Step 4 - Initialize Values</div>
            <div class="step-content">Load H0 through H7 constants.</div>
        </div>

        <div class="arrow">↓</div>

        <div class="crypto-step reveal-step">
            <div class="step-title">Step 5 - 64 Rounds</div>
            <div class="step-content">
                Use Sigma functions, Ch, Maj, ROTR, and modular addition.
            </div>
        </div>

        <div class="arrow">↓</div>

        <div class="crypto-step final-step reveal-step">
            <div class="step-title">Step 6 - Output</div>
            <div class="step-content">256-bit digest</div>
        </div>

    </div>
</div>

<div class="content-section">
    <h3>SHA-3 Educational Workflow</h3>

    <div class="crypto-flow">

        <div class="crypto-step reveal-step">
            <div class="step-title">Step 1 - Input</div>
            <div class="step-content">Message = HELLO</div>
        </div>

        <div class="arrow">↓</div>

        <div class="crypto-step reveal-step">
            <div class="step-title">Step 2 - Absorbing Phase</div>
            <div class="step-content">Absorb the message into the internal state matrix.</div>
        </div>

        <div class="arrow">↓</div>

        <div class="crypto-step reveal-step">
            <div class="step-title">Step 3 - Permutation Rounds</div>
            <div class="step-content">
                Apply Keccak-f using Theta, Rho, Pi, Chi, and Iota steps.
            </div>
        </div>

        <div class="arrow">↓</div>

        <div class="crypto-step reveal-step">
            <div class="step-title">Step 4 - Squeezing Phase</div>
            <div class="step-content">Extract the final hash output from the state.</div>
        </div>

        <div class="arrow">↓</div>

        <div class="crypto-step final-step reveal-step">
            <div class="step-title">Step 5 - Output</div>
            <div class="step-content">224 / 256 / 384 / 512-bit digest</div>
        </div>

    </div>
</div>

<div class="content-section">
    <h3>Full Step-by-Step Example: SHA-256</h3>

    <div class="crypto-flow">

        <div class="crypto-step reveal-step">
            <div class="step-title">Input</div>
            <div class="step-content">HELLO</div>
        </div>

        <div class="arrow">↓</div>

        <div class="crypto-step reveal-step">
            <div class="step-title">Step 1 - Convert to Binary</div>
            <div class="step-content">
                H = 01001000
                <br>
                E = 01000101
                <br>
                L = 01001100
                <br>
                L = 01001100
                <br>
                O = 01001111
            </div>
        </div>

        <div class="arrow">↓</div>

        <div class="crypto-step reveal-step">
            <div class="step-title">Step 2 - Message Length</div>
            <div class="step-content">
                Original length = 5 bytes = 40 bits
                <br>
                SHA-256 stores this length at the end of the padded block.
            </div>
        </div>

        <div class="arrow">↓</div>

        <div class="crypto-step reveal-step">
            <div class="step-title">Step 3 - Add Padding Bit</div>
            <div class="step-content">
                Add one 1 bit after the message.
                <br><br>
                In hex:
                <br>
                HELLO = 48 45 4C 4C 4F
                <br>
                Padding starts with 80
            </div>
        </div>

        <div class="arrow">↓</div>

        <div class="crypto-step reveal-step">
            <div class="step-title">Step 4 - Add Zeros</div>
            <div class="step-content">
                Add zeros until the block has space for the 64-bit length.
                <br><br>
                The message is now prepared to become one 512-bit block.
            </div>
        </div>

        <div class="arrow">↓</div>

        <div class="crypto-step reveal-step">
            <div class="step-title">Step 5 - Append Length</div>
            <div class="step-content">
                Original length = 40 bits.
                <br><br>
                Last 64 bits:
                <br>
                0000000000000028
            </div>
        </div>

        <div class="arrow">↓</div>

        <div class="crypto-step reveal-step">
            <div class="step-title">Step 6 - Create 512-bit Block</div>
            <div class="step-content">
                The padded message forms one 512-bit block.
                <br><br>
                First words:
                <br>
                W0 = 48454C4C
                <br>
                W1 = 4F800000
                <br>
                W2 to W14 = 00000000
                <br>
                W15 = 00000028
            </div>
        </div>

        <div class="arrow">↓</div>

        <div class="crypto-step reveal-step">
            <div class="step-title">Step 7 - Expand Message Schedule</div>
            <div class="step-content">
                SHA-256 expands W0-W15 into W0-W63.
                <br><br>
                For i = 16 to 63:
                <br>
                Wi = sigma1(Wi-2) + Wi-7 + sigma0(Wi-15) + Wi-16
            </div>
        </div>

        <div class="arrow">↓</div>

        <div class="crypto-step reveal-step">
            <div class="step-title">Step 8 - Initialize H Values</div>
            <div class="step-content">
                H0-H7 are loaded with SHA-256 initial constants.
                <br><br>
                H0 = 6A09E667
                <br>
                H1 = BB67AE85
                <br>
                H2 = 3C6EF372
                <br>
                H3 = A54FF53A
                <br>
                H4 = 510E527F
                <br>
                H5 = 9B05688C
                <br>
                H6 = 1F83D9AB
                <br>
                H7 = 5BE0CD19
            </div>
        </div>

        <div class="arrow">↓</div>

        <div class="crypto-step reveal-step">
            <div class="step-title">Step 9 - Set Working Variables</div>
            <div class="step-content">
                A = H0 = 6A09E667
                <br>
                B = H1 = BB67AE85
                <br>
                C = H2 = 3C6EF372
                <br>
                D = H3 = A54FF53A
                <br>
                E = H4 = 510E527F
                <br>
                F = H5 = 9B05688C
                <br>
                G = H6 = 1F83D9AB
                <br>
                H = H7 = 5BE0CD19
            </div>
        </div>

        <div class="arrow">↓</div>

        <div class="crypto-step reveal-step">
            <div class="step-title">Step 10 - Round 1 Inputs</div>
            <div class="step-content">
                Use the first round constant and message word:
                <br><br>
                K0 = 428A2F98
                <br>
                W0 = 48454C4C
                <br>
                A = 6A09E667
                <br>
                E = 510E527F
                <br>
                H = 5BE0CD19
            </div>
        </div>

        <div class="arrow">↓</div>

        <div class="crypto-step reveal-step">
            <div class="step-title">Step 11 - Calculate Sigma1(E)</div>
            <div class="step-content">
                Sigma1(E) = ROTR6(E) xor ROTR11(E) xor ROTR25(E)
                <br><br>
                Sigma1(510E527F) = 3587272B
            </div>
        </div>

        <div class="arrow">↓</div>

        <div class="crypto-step reveal-step">
            <div class="step-title">Step 12 - Calculate Ch(E,F,G)</div>
            <div class="step-content">
                Ch(E,F,G) = (E AND F) xor ((NOT E) AND G)
                <br><br>
                Ch(510E527F, 9B05688C, 1F83D9AB) = 1F85C98C
            </div>
        </div>

        <div class="arrow">↓</div>

        <div class="crypto-step reveal-step">
            <div class="step-title">Step 13 - Calculate T1</div>
            <div class="step-content">
                T1 = H + Sigma1(E) + Ch(E,F,G) + K0 + W0
                <br><br>
                T1 = 5BE0CD19 + 3587272B + 1F85C98C + 428A2F98 + 48454C4C
                <br>
                T1 = 3BBD39B4
                <br><br>
                All additions are modulo 2^32.
            </div>
        </div>

        <div class="arrow">↓</div>

        <div class="crypto-step reveal-step">
            <div class="step-title">Step 14 - Calculate Sigma0(A)</div>
            <div class="step-content">
                Sigma0(A) = ROTR2(A) xor ROTR13(A) xor ROTR22(A)
                <br><br>
                Sigma0(6A09E667) = CE20B47E
            </div>
        </div>

        <div class="arrow">↓</div>

        <div class="crypto-step reveal-step">
            <div class="step-title">Step 15 - Calculate Maj(A,B,C)</div>
            <div class="step-content">
                Maj(A,B,C) = (A AND B) xor (A AND C) xor (B AND C)
                <br><br>
                Maj(6A09E667, BB67AE85, 3C6EF372) = 3A6FE667
            </div>
        </div>

        <div class="arrow">↓</div>

        <div class="crypto-step reveal-step">
            <div class="step-title">Step 16 - Calculate T2</div>
            <div class="step-content">
                T2 = Sigma0(A) + Maj(A,B,C)
                <br><br>
                T2 = CE20B47E + 3A6FE667
                <br>
                T2 = 08909AE5
                <br><br>
                Again, addition is modulo 2^32.
            </div>
        </div>

        <div class="arrow">↓</div>

        <div class="crypto-step reveal-step">
            <div class="step-title">Step 17 - Update Registers</div>
            <div class="step-content">
                New A = T1 + T2 = 444DD499
                <br>
                New B = A_old = 6A09E667
                <br>
                New C = B_old = BB67AE85
                <br>
                New D = C_old = 3C6EF372
                <br>
                New E = D_old + T1 = E10D2EEE
                <br>
                New F = E_old = 510E527F
                <br>
                New G = F_old = 9B05688C
                <br>
                New H = G_old = 1F83D9AB
            </div>
        </div>

        <div class="arrow">↓</div>

        <div class="crypto-step reveal-step">
            <div class="step-title">Step 18 - Rounds 2 to 64</div>
            <div class="step-content">
                The remaining rounds repeat the exact same learning pattern:
                <br><br>
                1. Take the current A-H values.
                <br>
                2. Take the next Ki constant.
                <br>
                3. Take the next Wi message word.
                <br>
                4. Compute Sigma1(E).
                <br>
                5. Compute Ch(E,F,G).
                <br>
                6. Compute T1.
                <br>
                7. Compute Sigma0(A).
                <br>
                8. Compute Maj(A,B,C).
                <br>
                9. Compute T2.
                <br>
                10. Shift and update A-H.
            </div>
        </div>

        <div class="arrow">↓</div>

        <div class="crypto-step reveal-step">
            <div class="step-title">Step 19 - Add Back to H0-H7</div>
            <div class="step-content">
                After round 64, the final working variables are added back to H0-H7.
                <br><br>
                This produces the final 256-bit digest.
            </div>
        </div>

        <div class="arrow">↓</div>

        <div class="crypto-step final-step reveal-step">
            <div class="step-title">Step 20 - Final SHA-256 Output</div>
            <div class="step-content">
                3733CD977FF8EB18B987357E22CED99F46097F31ECB239E878AE63760E83E4D5
            </div>
        </div>

    </div>
</div>

<div class="content-section">
    <h3>Hash Applications</h3>
    <ul class="rules-list">
        <li>Password storage with salts and slow password hashing schemes</li>
        <li>Blockchain and transaction integrity</li>
        <li>Digital signatures</li>
        <li>File integrity checking</li>
        <li>Data verification</li>
    </ul>
</div>

<div class="content-section">
    <h3>Security Note</h3>
    <div class="crypto-flow">
        <div class="crypto-step reveal-step">
            <div class="step-title">Broken / Deprecated</div>
            <div class="step-content">
                MD5 is insecure.
                <br>
                SHA-1 is deprecated.
            </div>
        </div>

        <div class="arrow">↓</div>

        <div class="crypto-step reveal-step">
            <div class="step-title">Modern Choices</div>
            <div class="step-content">
                SHA-256 is secure for modern integrity use.
                <br>
                SHA-3 is the most modern standardized hash family.
            </div>
        </div>
    </div>
</div>

<div class="content-section">
    <h3>Final Summary</h3>
    <p>
        Hashing is a one-way cryptographic process used to ensure data integrity and security.
        Different algorithms use different internal structures, but all produce fixed-length irreversible outputs.
    </p>
</div>

`: ""}
${algo === "aes" ? `

<div class="content-section aes-section">
    <h3>Define</h3>
    <p>
        AES (Advanced Encryption Standard) is a symmetric block cipher used to encrypt data in fixed-size 128-bit blocks.
        It applies substitution and permutation operations across multiple rounds, and it is the global standard for secure encryption today.
    </p>
</div>

<div class="content-section aes-section">
    <h3>AES Structure</h3>
    <div class="aes-table-wrap">
        <table class="aes-table">
            <thead>
                <tr>
                    <th>Key Size</th>
                    <th>Key Length</th>
                    <th>Rounds</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>AES-128</td>
                    <td>128 bits / 16 bytes</td>
                    <td>10 rounds</td>
                </tr>
                <tr>
                    <td>AES-192</td>
                    <td>192 bits / 24 bytes</td>
                    <td>12 rounds</td>
                </tr>
                <tr>
                    <td>AES-256</td>
                    <td>256 bits / 32 bytes</td>
                    <td>14 rounds</td>
                </tr>
            </tbody>
        </table>
    </div>
</div>

<div class="content-section aes-section">
    <h3>Core Round Idea</h3>
    <div class="formula-box">
        State = SubBytes &rarr; ShiftRows &rarr; MixColumns &rarr; AddRoundKey
    </div>
    <br>
    <p>
        The final AES round is almost the same, but it skips MixColumns.
        Decryption applies the inverse operations in reverse order.
    </p>
</div>

<div class="content-section aes-section">
    <h3>128-bit State Matrix</h3>
    <p>
        AES stores one block as 16 bytes in a 4x4 state matrix. The example text below is expanded for learning because
        the original sample HELLOAES is only 8 bytes, while a real AES block is 16 bytes.
    </p>

    <div class="aes-matrix-grid">
        <div class="aes-matrix-card">
            <div class="step-title">Educational Plaintext Block</div>
            <div class="aes-matrix">
                <span>H</span><span>E</span><span>L</span><span>L</span>
                <span>O</span><span>A</span><span>E</span><span>S</span>
                <span>0</span><span>0</span><span>0</span><span>0</span>
                <span>0</span><span>0</span><span>0</span><span>0</span>
            </div>
        </div>

        <div class="aes-matrix-card">
            <div class="step-title">Educational Key Block</div>
            <div class="aes-matrix">
                <span>A</span><span>E</span><span>S</span><span>K</span>
                <span>E</span><span>Y</span><span>1</span><span>2</span>
                <span>A</span><span>E</span><span>S</span><span>K</span>
                <span>E</span><span>Y</span><span>1</span><span>2</span>
            </div>
        </div>
    </div>
</div>

<div class="content-section aes-section">
    <h3>Detailed Encryption Example</h3>

    <div class="crypto-flow">
        <div class="crypto-step reveal-step">
            <div class="step-title">Input</div>
            <div class="step-content">
                Plaintext sample = HELLOAES
                <br>
                Key sample = AESKEY12
                <br>
                For real AES-128 in this site, use 16 key characters.
            </div>
        </div>

        <div class="arrow">&darr;</div>

        <div class="crypto-step reveal-step">
            <div class="step-title">Step 1 - Build 16-byte Block</div>
            <div class="step-content">
                HELLOAES is 8 bytes.
                <br>
                Educational block = HELLOAES00000000
                <br>
                Educational key = AESKEY12AESKEY12
                <br><br>
                Plaintext hex = 48454C4C4F4145533030303030303030
                <br>
                Key hex = 4145534B455931324145534B45593132
            </div>
        </div>

        <div class="arrow">&darr;</div>

        <div class="crypto-step reveal-step aes-wide-step">
            <div class="step-title">Step 2 - Initial AddRoundKey</div>
            <div class="step-content aes-xor-list">
                <span>H 0x48 &oplus; A 0x41 = 0x09</span>
                <span>E 0x45 &oplus; E 0x45 = 0x00</span>
                <span>L 0x4C &oplus; S 0x53 = 0x1F</span>
                <span>L 0x4C &oplus; K 0x4B = 0x07</span>
                <span>O 0x4F &oplus; E 0x45 = 0x0A</span>
                <span>A 0x41 &oplus; Y 0x59 = 0x18</span>
                <span>E 0x45 &oplus; 1 0x31 = 0x74</span>
                <span>S 0x53 &oplus; 2 0x32 = 0x61</span>
                <span>0 0x30 &oplus; A 0x41 = 0x71</span>
                <span>0 0x30 &oplus; E 0x45 = 0x75</span>
                <span>0 0x30 &oplus; S 0x53 = 0x63</span>
                <span>0 0x30 &oplus; K 0x4B = 0x7B</span>
                <span>0 0x30 &oplus; E 0x45 = 0x75</span>
                <span>0 0x30 &oplus; Y 0x59 = 0x69</span>
                <span>0 0x30 &oplus; 1 0x31 = 0x01</span>
                <span>0 0x30 &oplus; 2 0x32 = 0x02</span>
            </div>
        </div>

        <div class="arrow">&darr;</div>

        <div class="crypto-step reveal-step aes-wide-step">
            <div class="step-title">Initial XOR State</div>
            <div class="step-content">
                After AddRoundKey:
                <br>
                09 00 1F 07 0A 18 74 61 71 75 63 7B 75 69 01 02
            </div>
        </div>

        <div class="arrow">&darr;</div>

        <div class="crypto-step reveal-step">
            <div class="step-title">Step 3 - SubBytes</div>
            <div class="step-content">
                Every byte is replaced using the AES S-Box.
                <br>
                This adds non-linearity, so byte patterns become difficult to predict.
                <br><br>
                Example idea: each byte is used as an index into the S-Box table,
                then replaced with the mapped byte.
            </div>
        </div>

        <div class="arrow">&darr;</div>

        <div class="crypto-step reveal-step">
            <div class="step-title">Step 4 - ShiftRows</div>
            <div class="step-content">
                Row 1: no shift
                <br>
                Row 2: shift left by 1
                <br>
                Row 3: shift left by 2
                <br>
                Row 4: shift left by 3
                <br><br>
                This moves bytes across columns so the next MixColumns step spreads them further.
            </div>
        </div>

        <div class="arrow">&darr;</div>

        <div class="crypto-step reveal-step aes-wide-step">
            <div class="step-title">Step 5 - MixColumns</div>
            <div class="step-content">
                Each column is mixed with finite-field matrix multiplication:
                <br><br>
                <span class="aes-math">[02 03 01 01; 01 02 03 01; 01 01 02 03; 03 01 01 02] x Column</span>
                <br><br>
                This spreads one byte change across the whole column.
                <br>
                Multiplication is done in AES finite field GF(2^8), not normal decimal arithmetic.
            </div>
        </div>

        <div class="arrow">&darr;</div>

        <div class="crypto-step reveal-step">
            <div class="step-title">Step 6 - AddRoundKey</div>
            <div class="step-content">
                The mixed state is XORed with RoundKey 1.
                <br>
                State &oplus; RoundKey1 = RoundState1
                <br><br>
                A new round key is generated from the original key by the AES key schedule.
            </div>
        </div>

        <div class="arrow">&darr;</div>

        <div class="crypto-step reveal-step">
            <div class="step-title">Rounds 2 to 9</div>
            <div class="step-content">
                Repeat:
                <br>
                SubBytes &rarr; ShiftRows &rarr; MixColumns &rarr; AddRoundKey
                <br><br>
                These repeated rounds create diffusion and confusion:
                one small input change spreads through the full block.
            </div>
        </div>

        <div class="arrow">&darr;</div>

        <div class="crypto-step reveal-step">
            <div class="step-title">Final Round 10</div>
            <div class="step-content">
                SubBytes &rarr; ShiftRows &rarr; AddRoundKey
                <br>
                MixColumns is skipped in the final round.
            </div>
        </div>

        <div class="arrow">&darr;</div>

        <div class="crypto-step final-step reveal-step">
            <div class="step-title">Final Ciphertext</div>
            <div class="step-content">
                Educational AES-128 block ciphertext:
                <br>
                AB3FA49170530F651B0A7DD2F70E278E
                <br><br>
                This result is for the fixed teaching block HELLOAES00000000
                and fixed key AESKEY12AESKEY12.
            </div>
        </div>
    </div>
</div>

<div class="content-section aes-section">
    <h3>Detailed Decryption Example</h3>

    <div class="crypto-flow">
        <div class="crypto-step reveal-step">
            <div class="step-title">Step 1 - Start From Ciphertext</div>
            <div class="step-content">
                Ciphertext hex:
                <br>
                AB3FA49170530F651B0A7DD2F70E278E
                <br><br>
                AES receives the ciphertext and the same secret key.
                <br>
                For the website tool, AES-GCM also needs the IV from the encrypted output.
            </div>
        </div>

        <div class="arrow">&darr;</div>

        <div class="crypto-step reveal-step">
            <div class="step-title">Step 2 - Reverse Key Order</div>
            <div class="step-content">
                Start with the last round key.
                <br>
                State &oplus; RoundKey10
                <br><br>
                Decryption uses the round keys backward:
                RoundKey10, RoundKey9, ..., RoundKey0.
            </div>
        </div>

        <div class="arrow">&darr;</div>

        <div class="crypto-step reveal-step">
            <div class="step-title">Step 3 - Inverse ShiftRows</div>
            <div class="step-content">
                Rows shift right instead of left.
                <br>
                This restores the row positions.
                <br><br>
                Row 1: no shift
                <br>
                Row 2: shift right by 1
                <br>
                Row 3: shift right by 2
                <br>
                Row 4: shift right by 3
            </div>
        </div>

        <div class="arrow">&darr;</div>

        <div class="crypto-step reveal-step">
            <div class="step-title">Step 4 - Inverse SubBytes</div>
            <div class="step-content">
                Each byte is mapped back through the inverse AES S-Box.
                <br>
                This undoes the substitution from encryption.
            </div>
        </div>

        <div class="arrow">&darr;</div>

        <div class="crypto-step reveal-step">
            <div class="step-title">Step 5 - Inverse MixColumns</div>
            <div class="step-content">
                The inverse matrix is applied to undo column mixing.
                <br>
                This step is skipped for the first reversed final round.
                <br><br>
                Inverse matrix:
                <br>
                <span class="aes-math">[0E 0B 0D 09; 09 0E 0B 0D; 0D 09 0E 0B; 0B 0D 09 0E]</span>
            </div>
        </div>

        <div class="arrow">&darr;</div>

        <div class="crypto-step reveal-step">
            <div class="step-title">Repeat Backward</div>
            <div class="step-content">
                Continue from Round 10 back to Round 1:
                <br>
                AddRoundKey &rarr; InvMixColumns &rarr; InvShiftRows &rarr; InvSubBytes
                <br><br>
                At the end, the initial AddRoundKey is undone with RoundKey0.
            </div>
        </div>

        <div class="arrow">&darr;</div>

        <div class="crypto-step final-step reveal-step">
            <div class="step-title">Recovered Plaintext</div>
            <div class="step-content">
                Recovered 16-byte block:
                <br>
                HELLOAES00000000
                <br><br>
                Remove the educational filler zeros:
                <br>
                Final plaintext = HELLOAES
            </div>
        </div>
    </div>
</div>

<div class="content-section aes-section">
    <h3>Example Final Results</h3>
    <div class="crypto-flow">
        <div class="crypto-step reveal-step aes-wide-step">
            <div class="step-title">Encryption Result</div>
            <div class="step-content">
                Plaintext = HELLOAES00000000
                <br>
                Key = AESKEY12AESKEY12
                <br>
                Ciphertext hex = AB3FA49170530F651B0A7DD2F70E278E
            </div>
        </div>

        <div class="arrow">&darr;</div>

        <div class="crypto-step final-step reveal-step aes-wide-step">
            <div class="step-title">Decryption Result</div>
            <div class="step-content">
                Ciphertext hex = AB3FA49170530F651B0A7DD2F70E278E
                <br>
                Key = AESKEY12AESKEY12
                <br>
                Recovered plaintext = HELLOAES00000000
                <br>
                Final readable message = HELLOAES
            </div>
        </div>
    </div>
</div>

<div class="content-section aes-section">
    <h3>Important Correctness Notes</h3>
    <ul class="rules-list">
        <li>HELLOAES and AESKEY12 are useful for explanation, but they are not complete real AES block/key sizes by themselves.</li>
        <li>Real AES needs a 16-byte block internally. Longer messages are split into blocks by the mode of operation.</li>
        <li>The encryption tool uses AES-GCM, which adds authentication and a random IV, so the same text can produce different ciphertext each time.</li>
        <li>The fixed result AB3FA49170530F651B0A7DD2F70E278E is for this educational AES-128 single-block example with no extra padding beyond the visible filler characters.</li>
    </ul>
</div>

<div class="content-section aes-section">
    <h3>Final Summary</h3>
    <p>
        AES is a modern symmetric encryption standard that transforms 128-bit blocks through repeated substitution,
        row shifting, column mixing, and XOR with round keys. It is fast, widely trusted, and secure for practical use
        when implemented with strong keys, unique IVs, and a safe mode such as GCM.
    </p>
</div>

`: ""}
${algo === "rotator" ? `

<div class="content-section">
    <h3>Define</h3>
    <p>
        Rotor Cipher is an advanced substitution cipher that uses multiple rotation keys applied cyclically to each character in the plaintext.
        Each character is shifted using a different key from a repeating key list.
    </p>
</div>

<div class="content-section">
    <h3>What is Rotor Cipher?</h3>
    <p>
        Rotor Cipher extends simple rotation encryption. Instead of using one shift value for the whole message,
        it uses multiple shift values in a key array, and each character gets the next shift in the cycle.
    </p>
</div>

<div class="content-section">
    <h3>Key Concept</h3>

    <div class="formula-box">
        Ki = K[i mod n]
    </div>

    <br>

    <p>
        Ki = current shift value
        <br>
        K = key array
        <br>
        i = character position
        <br>
        n = key length
    </p>
</div>

<div class="content-section">
    <h3>Encryption Formula</h3>

    <div class="formula-box">
        Ci = (Pi + Ki) mod 26
    </div>

    <br>

    <p>
        Pi = plaintext letter value
        <br>
        Ki = current cyclic shift
        <br>
        Ci = ciphertext letter value
    </p>
</div>

<div class="content-section">
    <h3>How Encryption Works</h3>

    <div class="crypto-flow">

        <div class="crypto-step reveal-step">
            <div class="step-title">Step 1 - Input Text</div>
            <div class="step-content">
                Plaintext = HELLO
            </div>
        </div>

        <div class="arrow">↓</div>

        <div class="crypto-step reveal-step">
            <div class="step-title">Step 2 - Choose Key</div>
            <div class="step-content">
                Key = [3, 7, 12]
            </div>
        </div>

        <div class="arrow">↓</div>

        <div class="crypto-step reveal-step">
            <div class="step-title">Step 3 - Assign Shifts Cyclically</div>
            <div class="step-content">
                Characters: H, E, L, L, O
                <br>
                Shifts: 3, 7, 12, 3, 7
                <br><br>
                Because the key repeats:
                <br>
                3, 7, 12, 3, 7, 12, ...
            </div>
        </div>

        <div class="arrow">↓</div>

        <div class="crypto-step reveal-step">
            <div class="step-title">Step 4 - Apply Formula</div>
            <div class="step-content">
                Ci = (Pi + Ki) mod 26
                <br><br>
                Use A = 0, B = 1, ... Z = 25
            </div>
        </div>

    </div>
</div>

<div class="content-section">
    <h3>Step-by-Step Encryption Example</h3>

    <div class="crypto-flow">

        <div class="crypto-step reveal-step">
            <div class="step-title">Input</div>
            <div class="step-content">
                Plaintext = HELLO
                <br>
                Key = [3, 7, 12]
                <br>
                Assigned shifts = [3, 7, 12, 3, 7]
            </div>
        </div>

        <div class="arrow">↓</div>

        <div class="crypto-step reveal-step">
            <div class="step-title">Step 1 - H with shift 3</div>
            <div class="step-content">
                H = 7
                <br>
                C = (7 + 3) mod 26 = 10
                <br>
                10 = K
            </div>
        </div>

        <div class="arrow">↓</div>

        <div class="crypto-step reveal-step">
            <div class="step-title">Step 2 - E with shift 7</div>
            <div class="step-content">
                E = 4
                <br>
                C = (4 + 7) mod 26 = 11
                <br>
                11 = L
            </div>
        </div>

        <div class="arrow">↓</div>

        <div class="crypto-step reveal-step">
            <div class="step-title">Step 3 - L with shift 12</div>
            <div class="step-content">
                L = 11
                <br>
                C = (11 + 12) mod 26 = 23
                <br>
                23 = X
            </div>
        </div>

        <div class="arrow">↓</div>

        <div class="crypto-step reveal-step">
            <div class="step-title">Step 4 - L with shift 3</div>
            <div class="step-content">
                L = 11
                <br>
                C = (11 + 3) mod 26 = 14
                <br>
                14 = O
            </div>
        </div>

        <div class="arrow">↓</div>

        <div class="crypto-step reveal-step">
            <div class="step-title">Step 5 - O with shift 7</div>
            <div class="step-content">
                O = 14
                <br>
                C = (14 + 7) mod 26 = 21
                <br>
                21 = V
            </div>
        </div>

        <div class="arrow">↓</div>

        <div class="crypto-step final-step reveal-step">
            <div class="step-title">Final Ciphertext</div>
            <div class="step-content">
                KLXOV
            </div>
        </div>

    </div>
</div>

<div class="content-section">
    <h3>Decryption Formula</h3>

    <div class="formula-box">
        Pi = (Ci - Ki + 26) mod 26
    </div>

    <br>

    <p>
        Ci = ciphertext letter value
        <br>
        Ki = current cyclic shift
        <br>
        Pi = plaintext letter value
    </p>
</div>

<div class="content-section">
    <h3>Step-by-Step Decryption Example</h3>

    <div class="crypto-flow">

        <div class="crypto-step reveal-step">
            <div class="step-title">Input</div>
            <div class="step-content">
                Ciphertext = KLXOV
                <br>
                Key = [3, 7, 12]
                <br>
                Assigned shifts = [3, 7, 12, 3, 7]
            </div>
        </div>

        <div class="arrow">↓</div>

        <div class="crypto-step reveal-step">
            <div class="step-title">Step 1 - K with shift 3</div>
            <div class="step-content">
                K = 10
                <br>
                P = (10 - 3 + 26) mod 26 = 7
                <br>
                7 = H
            </div>
        </div>

        <div class="arrow">↓</div>

        <div class="crypto-step reveal-step">
            <div class="step-title">Step 2 - L with shift 7</div>
            <div class="step-content">
                L = 11
                <br>
                P = (11 - 7 + 26) mod 26 = 4
                <br>
                4 = E
            </div>
        </div>

        <div class="arrow">↓</div>

        <div class="crypto-step reveal-step">
            <div class="step-title">Step 3 - X with shift 12</div>
            <div class="step-content">
                X = 23
                <br>
                P = (23 - 12 + 26) mod 26 = 11
                <br>
                11 = L
            </div>
        </div>

        <div class="arrow">↓</div>

        <div class="crypto-step reveal-step">
            <div class="step-title">Step 4 - O with shift 3</div>
            <div class="step-content">
                O = 14
                <br>
                P = (14 - 3 + 26) mod 26 = 11
                <br>
                11 = L
            </div>
        </div>

        <div class="arrow">↓</div>

        <div class="crypto-step reveal-step">
            <div class="step-title">Step 5 - V with shift 7</div>
            <div class="step-content">
                V = 21
                <br>
                P = (21 - 7 + 26) mod 26 = 14
                <br>
                14 = O
            </div>
        </div>

        <div class="arrow">↓</div>

        <div class="crypto-step final-step reveal-step">
            <div class="step-title">Final Plaintext</div>
            <div class="step-content">
                HELLO
            </div>
        </div>

    </div>
</div>

<div class="content-section">
    <h3>Comparison</h3>
    <div class="crypto-flow">
        <div class="crypto-step reveal-step">
            <div class="step-title">Simple Rotation</div>
            <div class="step-content">
                Uses one key
                <br>
                Easy complexity
                <br>
                Weak security
                <br>
                Predictable pattern
            </div>
        </div>

        <div class="arrow">↓</div>

        <div class="crypto-step reveal-step">
            <div class="step-title">Rotor Cipher (Advanced)</div>
            <div class="step-content">
                Uses multiple keys
                <br>
                Medium complexity
                <br>
                Stronger than simple rotation
                <br>
                Less predictable pattern
            </div>
        </div>
    </div>
</div>

<div class="content-section">
    <h3>Final Summary</h3>
    <p>
        Rotor Cipher is a polyalphabetic rotation system where each character is shifted using a cyclic key array,
        making it more secure than simple rotation but still not suitable for modern cryptography.
    </p>
</div>

`: ""}
${algo === "rotatorbasic" ? `

<div class="content-section">
    <h3>Define</h3>
    <p>
        Rotator Cipher (Basic) is a simple substitution cipher that shifts every alphabetic character using one numeric key.
        It supports uppercase letters, lowercase letters, and leaves symbols unchanged.
    </p>
</div>

<div class="content-section">
    <h3>What is Rotator Cipher (Basic)?</h3>
    <p>
        Rotator Cipher (Basic) uses one shift value for the whole message. If the key is 2, every letter moves two positions forward in the alphabet.
    </p>
</div>

<div class="content-section">
    <h3>Encryption Formula</h3>

    <div class="formula-box">
        C = (P + key) mod 26
    </div>

    <br>

    <p>
        P = plaintext letter value
        <br>
        key = one numeric shift
        <br>
        C = ciphertext letter value
    </p>
</div>

<div class="content-section">
    <h3>Decryption Formula</h3>

    <div class="formula-box">
        P = (C - key + 26) mod 26
    </div>

    <br>

    <p>
        C = ciphertext letter value
        <br>
        key = the same numeric shift
        <br>
        P = plaintext letter value
    </p>
</div>

<div class="content-section">
    <h3>Step-by-Step Encryption Example</h3>

    <div class="crypto-flow">

        <div class="crypto-step reveal-step">
            <div class="step-title">Input</div>
            <div class="step-content">
                Plaintext = HELLO
                <br>
                Key = 2
            </div>
        </div>

        <div class="arrow">↓</div>

        <div class="crypto-step reveal-step">
            <div class="step-title">Step 1</div>
            <div class="step-content">
                H = 7
                <br>
                C = (7 + 2) mod 26 = 9
                <br>
                9 = J
            </div>
        </div>

        <div class="arrow">↓</div>

        <div class="crypto-step reveal-step">
            <div class="step-title">Step 2</div>
            <div class="step-content">
                E = 4
                <br>
                C = (4 + 2) mod 26 = 6
                <br>
                6 = G
            </div>
        </div>

        <div class="arrow">↓</div>

        <div class="crypto-step reveal-step">
            <div class="step-title">Step 3</div>
            <div class="step-content">
                L = 11
                <br>
                C = (11 + 2) mod 26 = 13
                <br>
                13 = N
            </div>
        </div>

        <div class="arrow">↓</div>

        <div class="crypto-step reveal-step">
            <div class="step-title">Step 4</div>
            <div class="step-content">
                L = 11
                <br>
                C = (11 + 2) mod 26 = 13
                <br>
                13 = N
            </div>
        </div>

        <div class="arrow">↓</div>

        <div class="crypto-step reveal-step">
            <div class="step-title">Step 5</div>
            <div class="step-content">
                O = 14
                <br>
                C = (14 + 2) mod 26 = 16
                <br>
                16 = Q
            </div>
        </div>

        <div class="arrow">↓</div>

        <div class="crypto-step final-step reveal-step">
            <div class="step-title">Final Ciphertext</div>
            <div class="step-content">
                JGNNQ
            </div>
        </div>

    </div>
</div>

<div class="content-section">
    <h3>Step-by-Step Decryption Example</h3>

    <div class="crypto-flow">

        <div class="crypto-step reveal-step">
            <div class="step-title">Input</div>
            <div class="step-content">
                Ciphertext = JGNNQ
                <br>
                Key = 2
            </div>
        </div>

        <div class="arrow">↓</div>

        <div class="crypto-step reveal-step">
            <div class="step-title">Step 1</div>
            <div class="step-content">
                J = 9
                <br>
                P = (9 - 2 + 26) mod 26 = 7
                <br>
                7 = H
            </div>
        </div>

        <div class="arrow">↓</div>

        <div class="crypto-step reveal-step">
            <div class="step-title">Step 2</div>
            <div class="step-content">
                G = 6
                <br>
                P = (6 - 2 + 26) mod 26 = 4
                <br>
                4 = E
            </div>
        </div>

        <div class="arrow">↓</div>

        <div class="crypto-step reveal-step">
            <div class="step-title">Step 3</div>
            <div class="step-content">
                N = 13
                <br>
                P = (13 - 2 + 26) mod 26 = 11
                <br>
                11 = L
            </div>
        </div>

        <div class="arrow">↓</div>

        <div class="crypto-step reveal-step">
            <div class="step-title">Step 4</div>
            <div class="step-content">
                N = 13
                <br>
                P = (13 - 2 + 26) mod 26 = 11
                <br>
                11 = L
            </div>
        </div>

        <div class="arrow">↓</div>

        <div class="crypto-step reveal-step">
            <div class="step-title">Step 5</div>
            <div class="step-content">
                Q = 16
                <br>
                P = (16 - 2 + 26) mod 26 = 14
                <br>
                14 = O
            </div>
        </div>

        <div class="arrow">↓</div>

        <div class="crypto-step final-step reveal-step">
            <div class="step-title">Final Plaintext</div>
            <div class="step-content">
                HELLO
            </div>
        </div>

    </div>
</div>

<div class="content-section">
    <h3>Comparison</h3>
    <div class="crypto-flow">
        <div class="crypto-step reveal-step">
            <div class="step-title">Rotator Cipher (Basic)</div>
            <div class="step-content">
                Uses one numeric key
                <br>
                Simple complexity
                <br>
                Same shift for every letter
                <br>
                Easier to break
            </div>
        </div>

        <div class="arrow">↓</div>

        <div class="crypto-step reveal-step">
            <div class="step-title">Rotor Cipher (Advanced)</div>
            <div class="step-content">
                Uses multiple numeric keys
                <br>
                Medium complexity
                <br>
                Cyclic shifts per character
                <br>
                Harder than basic rotation
            </div>
        </div>
    </div>
</div>

<div class="content-section">
    <h3>Final Summary</h3>
    <p>
        Rotator Cipher (Basic) is a single-key rotation system. It is useful for learning modular alphabet shifts,
        but it is not suitable for modern cryptography.
    </p>
</div>

`: ""}
${algo === "affine" ? `

<div class="content-section">
    <h3>Encryption Formula</h3>

    <div class="formula-box">
        E(x) = (a x + b) mod 26
    </div>

    <br>

    <p>
        x = plaintext letter value
        <br>
        a = multiplication key
        <br>
        b = shift key
        <br>
        E(x) = ciphertext letter value
    </p>
</div>

<div class="content-section">
    <h3>Decryption Formula</h3>

    <div class="formula-box">
        D(x) = a^-1(x - b) mod 26
    </div>

    <br>

    <p>
        a^-1 is the modular inverse of a.
        <br>
        It must satisfy:
        <br>
        a x a^-1 = 1 mod 26
    </p>
</div>

<div class="content-section">
    <h3>Letter Mapping</h3>

    <div class="crypto-flow">
        <div class="crypto-step reveal-step">
            <div class="step-title">Alphabet Values</div>
            <div class="step-content">
                A = 0
                <br>
                B = 1
                <br>
                C = 2
                <br>
                ...
                <br>
                Z = 25
            </div>
        </div>
    </div>
</div>

<div class="content-section">
    <h3>Step-by-Step Encryption Example</h3>

    <div class="crypto-flow">

        <div class="crypto-step reveal-step">
            <div class="step-title">Given</div>
            <div class="step-content">
                Plaintext = HELLO
                <br>
                Key: a = 5, b = 8
                <br>
                gcd(5, 26) = 1
            </div>
        </div>

        <div class="arrow">↓</div>

        <div class="crypto-step reveal-step">
            <div class="step-title">Convert Letters</div>
            <div class="step-content">
                H = 7
                <br>
                E = 4
                <br>
                L = 11
                <br>
                L = 11
                <br>
                O = 14
            </div>
        </div>

        <div class="arrow">↓</div>

        <div class="crypto-step reveal-step">
            <div class="step-title">Step 1 - H</div>
            <div class="step-content">
                E(x) = (a x + b) mod 26
                <br>
                E(7) = (5 x 7 + 8) mod 26
                <br>
                E(7) = (35 + 8) mod 26 = 43 mod 26 = 17
                <br>
                17 = R
            </div>
        </div>

        <div class="arrow">↓</div>

        <div class="crypto-step reveal-step">
            <div class="step-title">Step 2 - E</div>
            <div class="step-content">
                E(4) = (5 x 4 + 8) mod 26
                <br>
                E(4) = 28 mod 26 = 2
                <br>
                2 = C
            </div>
        </div>

        <div class="arrow">↓</div>

        <div class="crypto-step reveal-step">
            <div class="step-title">Step 3 - L</div>
            <div class="step-content">
                E(11) = (5 x 11 + 8) mod 26
                <br>
                E(11) = 63 mod 26 = 11
                <br>
                11 = L
            </div>
        </div>

        <div class="arrow">↓</div>

        <div class="crypto-step reveal-step">
            <div class="step-title">Step 4 - L Again</div>
            <div class="step-content">
                E(11) = (5 x 11 + 8) mod 26
                <br>
                E(11) = 63 mod 26 = 11
                <br>
                11 = L
            </div>
        </div>

        <div class="arrow">↓</div>

        <div class="crypto-step reveal-step">
            <div class="step-title">Step 5 - O</div>
            <div class="step-content">
                E(14) = (5 x 14 + 8) mod 26
                <br>
                E(14) = 78 mod 26 = 0
                <br>
                0 = A
            </div>
        </div>

        <div class="arrow">↓</div>

        <div class="crypto-step final-step reveal-step">
            <div class="step-title">Final Ciphertext</div>
            <div class="step-content">
                RCLLA
            </div>
        </div>

    </div>
</div>

<div class="content-section">
    <h3>Step-by-Step Decryption Example</h3>

    <div class="crypto-flow">

        <div class="crypto-step reveal-step">
            <div class="step-title">Given</div>
            <div class="step-content">
                Ciphertext = RCLLA
                <br>
                Key: a = 5, b = 8
                <br>
                a^-1 = 21 mod 26
                <br>
                Check: 5 x 21 = 105, and 105 mod 26 = 1
            </div>
        </div>

        <div class="arrow">↓</div>

        <div class="crypto-step reveal-step">
            <div class="step-title">Step 1 - R</div>
            <div class="step-content">
                R = 17
                <br>
                D(x) = 21(x - 8) mod 26
                <br>
                D(17) = 21(17 - 8) mod 26
                <br>
                D(17) = 21 x 9 = 189 mod 26 = 7
                <br>
                7 = H
            </div>
        </div>

        <div class="arrow">↓</div>

        <div class="crypto-step reveal-step">
            <div class="step-title">Step 2 - C</div>
            <div class="step-content">
                C = 2
                <br>
                D(2) = 21(2 - 8) mod 26
                <br>
                D(2) = 21 x -6 = -126 mod 26 = 4
                <br>
                4 = E
            </div>
        </div>

        <div class="arrow">↓</div>

        <div class="crypto-step reveal-step">
            <div class="step-title">Step 3 - L</div>
            <div class="step-content">
                L = 11
                <br>
                D(11) = 21(11 - 8) mod 26
                <br>
                D(11) = 21 x 3 = 63 mod 26 = 11
                <br>
                11 = L
            </div>
        </div>

        <div class="arrow">↓</div>

        <div class="crypto-step reveal-step">
            <div class="step-title">Step 4 - L Again</div>
            <div class="step-content">
                L = 11
                <br>
                D(11) = 21(11 - 8) mod 26
                <br>
                D(11) = 63 mod 26 = 11
                <br>
                11 = L
            </div>
        </div>

        <div class="arrow">↓</div>

        <div class="crypto-step reveal-step">
            <div class="step-title">Step 5 - A</div>
            <div class="step-content">
                A = 0
                <br>
                D(0) = 21(0 - 8) mod 26
                <br>
                D(0) = 21 x -8 = -168 mod 26 = 14
                <br>
                14 = O
            </div>
        </div>

        <div class="arrow">↓</div>

        <div class="crypto-step final-step reveal-step">
            <div class="step-title">Final Plaintext</div>
            <div class="step-content">
                HELLO
            </div>
        </div>

    </div>
</div>

<div class="content-section">
    <h3>Final Summary</h3>
    <p>
        Affine Cipher is a mathematical substitution cipher that uses linear functions to encrypt letters.
        It demonstrates modular arithmetic but is not suitable for real-world secure communication.
    </p>
</div>

`: ""}
${algo === "substitution" ?`

<div class="content-section">

    <h3>Step-by-Step Encryption Example</h3>

    <div class="crypto-flow">

        <div class="crypto-step reveal-step">
            <div class="step-title">Step 1</div>
            <div class="step-content">
                Plain Text = HELLO
            </div>
        </div>

         <div class="arrow">↓</div>

        <div class="crypto-step reveal-step">

            <div class="step-title">
                Step 2 — Substitution Key
            </div>

            <div class="step-content">

                <strong>Key Used:</strong>
                <br><br>

                QWERTYUIOPASDFGHJKLZXCVBNM

                <br><br><br>

                <strong>Letter Mapping:</strong>

                <br><br>

                ABCDEFGHIJKLMNOPQRSTUVWXYZ

                <br>

                ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓

                <br>

                QWERTYUIOPASDFGHJKLZXCVBNM
            </div>
        </div>

        <div class="arrow">↓</div>

        <div class="crypto-step">
            <div class="step-content">
                H → I
            </div>
        </div>

        <div class="arrow">↓</div>

        <div class="crypto-step reveal-step">
            <div class="step-content">
                E → T
            </div>
        </div>

        <div class="arrow">↓</div>

        <div class="crypto-step reveal-step">
            <div class="step-content">
                L → S
            </div>
        </div>

        <div class="arrow">↓</div>

        <div class="crypto-step reveal-step">
            <div class="step-content">
                O → G
            </div>
        </div>

        <div class="arrow">↓</div>

        <div class="crypto-step final-step reveal-step">
            <div class="step-title">Encrypted Result</div>
            <div class="step-content">
                ITSSG
            </div>
        </div>

    </div>

</div>



<div class="content-section">

    <h3>Step-by-Step Decryption Example</h3>

    <div class="crypto-flow">

        <div class="crypto-step reveal-step">
            <div class="step-title">Cipher Text</div>
            <div class="step-content">
                ITSSG
            </div>
        </div>

        <div class="arrow">↓</div>

        <div class="crypto-step reveal-step">

            <div class="step-title">
                Step 2 — Reverse Substitution Key
            </div>

            <div class="step-content">

                <strong>Key Used:</strong>

                <br><br>

                QWERTYUIOPASDFGHJKLZXCVBNM

                <br><br><br>

                <strong>Reverse Letter Mapping:</strong>

                <br><br>

                QWERTYUIOPASDFGHJKLZXCVBNM

                <br>

                ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓

                <br>

                ABCDEFGHIJKLMNOPQRSTUVWXYZ

            </div>
        </div>

        <div class="arrow">↓</div>

        <div class="crypto-step reveal-step">
            <div class="step-content">
                I → H
            </div>
        </div>

        <div class="arrow">↓</div>

        <div class="crypto-step reveal-step">
            <div class="step-content">
                T → E
            </div>
        </div>

        <div class="arrow">↓</div>

        <div class="crypto-step reveal-step">
            <div class="step-content">
                S → L
            </div>
        </div>

        <div class="arrow">↓</div>

        <div class="crypto-step reveal-step">
            <div class="step-content">
                G → O
            </div>
        </div>

        <div class="arrow">↓</div>

        <div class="crypto-step final-step reveal-step">
            <div class="step-title">Decrypted Result</div>
            <div class="step-content">
                HELLO
            </div>
        </div>

    </div>

</div>

`
    : ""}


    <div class="content-section">

        <h3>FAQ</h3>

        <ul class="faq-list">
            ${data.faq.map(item => `<li>${item}</li>`).join("")}
        </ul>

    </div>

    `;

}

function toggleMenu() {
    document.querySelector(".nav-links").classList.toggle("active");
}

renderAlgorithm("caesar");
selector.addEventListener("change", () => {
    renderAlgorithm(selector.value);
});

const algorithmSearch = document.getElementById("algorithmSearch");

if (algorithmSearch && selector) {
    algorithmSearch.addEventListener("input", () => {
        const query = algorithmSearch.value.trim().toLowerCase();
        let firstVisibleValue = "";

        Array.from(selector.options).forEach(option => {
            const isMatch = option.textContent.toLowerCase().includes(query);
            option.hidden = !isMatch;

            if (isMatch && !firstVisibleValue) {
                firstVisibleValue = option.value;
            }
        });

        if (query && selector.selectedOptions[0]?.hidden && firstVisibleValue) {
            selector.value = firstVisibleValue;
            renderAlgorithm(firstVisibleValue);
        }
    });
}

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
