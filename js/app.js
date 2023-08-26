function generateNumbers() {
    const resultBox = document.querySelector("#result");
    if (!resultBox) {
        console.warn("Az #result elem nem található.");
        return;
    }

    resultBox.innerHTML = "";
    for (let i = 0; i < 10; i++) {
        const randomNumber = Math.floor(Math.random() * 41) + 5;
        resultBox.innerHTML += `${randomNumber}<br>`;
    }
}

const generateButton = document.querySelector("#generate");
generateButton.addEventListener("click", generateNumbers);

function detectNumbers(id) {
    const resultBox = document.querySelector(`#${id}`);
    if (!resultBox) {
        console.warn(`Az #${id} elem nem található.`);
        return false;
    }

    const numbers = resultBox.innerText.split("\n").map(Number);
    return numbers;
}

function szabadonVálasztottNév(tömb) {
    const detectedNumbers = detectNumbers("result");
    if (Array.isArray(detectedNumbers)) {
        const evenNumbers = detectedNumbers.filter(num => num % 2 === 0);
        console.log("Páros számok:", evenNumbers);
        return evenNumbers;
    } else {
        console.log("Nem található elemek vagy hibás visszatérés.");
        return [];
    }
}