function calculate() {
    // 1. Get values from the DOM
    const n1 = parseFloat(document.getElementById("num1").value);
    const n2 = parseFloat(document.getElementById("num2").value);
    const op = document.getElementById("operator").value;
    const resultBox = document.getElementById("result-box");
    const resultText = document.getElementById("result-text");

    // 2. Validation: Check if inputs are empty
    if (isNaN(n1) || isNaN(n2)) {
        resultText.innerText = "Please enter both numbers!";
        resultBox.style.backgroundColor = "#ffcc00"; // Warning yellow
        return;
    }

    let finalResult = 0;

    // 3. Conditional logic for operations
    if (op === "add") {
        finalResult = n1 + n2;
    } else if (op === "subtract") {
        finalResult = n1 - n2;
    } else if (op === "multiply") {
        finalResult = n1 * n2;
    } else if (op === "divide") {
       
        if (n2 === 0) {
            resultText.innerText = "Error: Cannot divide by zero!";
            resultBox.style.backgroundColor = "#f44336"; // Red for error
            return;
        }
        finalResult = n1 / n2;
    }

    
    resultText.innerText = "Result: " + finalResult;

    if (finalResult > 0) {
        resultBox.style.backgroundColor = "#d4edda"; // Light Green for positive
        resultBox.style.color = "#155724";
    } else if (finalResult < 0) {
        resultBox.style.backgroundColor = "#f8d7da"; // Light Red for negative
        resultBox.style.color = "#721c24";
    } else {
        resultBox.style.backgroundColor = "#e2e3e5"; // Grey for zero
        resultBox.style.color = "#383d41";
    }
}