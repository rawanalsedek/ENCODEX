const algorithmData = {

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


    <div class="content-section">

        <h3>Interactive Step Visualizer</h3>

        <div class="visualizer">

            ${data.steps.map(step => `
                <div class="step-box">${step}</div>
            `).join("")}

        </div>

    </div>


    <div class="content-section">

        <h3>Interactive Demo</h3>

        <div class="demo-box">
            <div class="demo-row">
                <span>Input:</span> HELLO
            </div>

            <div class="demo-row">
                <span>Output:</span>
                ${data.steps[data.steps.length - 1]}
            </div>
        </div>

    </div>


    <div class="content-section">

        <h3>FAQ</h3>

        <ul class="faq-list">
            ${data.faq.map(item => `<li>${item}</li>`).join("")}
        </ul>

    </div>

    `;

}


renderAlgorithm("substitution");