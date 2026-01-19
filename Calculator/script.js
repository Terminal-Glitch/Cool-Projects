// Display function
function render() {
    document.getElementById("output").textContent = screen;
}

let screen = "";
let operator;

// Handles all input
function press(value) {
    const lastChar = screen[screen.length - 1] || "";

    // Block invalid operators
    if (["+", "-", "*", "/"].includes(value)) {
        if (screen === "" || ["+", "-", "*", "/"].includes(lastChar)) return;
        operator = value;
    }

    screen += value;
    render();
}

// Calculate based on operator
function calculate() {
    if (!operator || !screen.includes(operator)) return;

    const parts = screen.split(operator);

    // Safety: only allow 2 parts
    if (parts.length !== 2) return;

    const a = Number(parts[0]);
    const b = Number(parts[1]);

    if (operator === "+") screen = String(a + b);
    if (operator === "-") screen = String(a - b);
    if (operator === "*") screen = String(a * b);
    if (operator === "/") screen = b === 0 ? "Error" : String(a / b);

    // Reset operator after calculation
    operator = undefined;
    render();
}

// Main Function
function main() {
    const buttonDigits = document.querySelectorAll(".digits");
    const buttonAdd = document.querySelector(".add");
    const buttonSub = document.querySelector(".subtract");
    const buttonMul = document.querySelector(".multiply");
    const buttonDiv = document.querySelector(".divide");
    const buttonEquals = document.querySelector(".result-trigger");
    const buttonClearAll = document.querySelector(".c");
    const buttonClearEntry = document.querySelector(".ce");

    // Digits
    buttonDigits.forEach(btn => {
        btn.addEventListener("click", () => {
            press(btn.textContent.trim());
        });
    });

    // Operators
    buttonAdd.addEventListener("click", () => press("+"));
    buttonSub.addEventListener("click", () => press("-"));
    buttonMul.addEventListener("click", () => press("*"));
    buttonDiv.addEventListener("click", () => press("/"));

    // Equals
    buttonEquals.addEventListener("click", () => calculate());

    // Clear All
    buttonClearAll.addEventListener("click", () => {
        screen = "";
        operator = undefined;
        render();
    });

    // Clear Entry
    buttonClearEntry.addEventListener("click", () => {
        const lastChar = screen[screen.length - 1];
        if (["+", "-", "*", "/"].includes(lastChar)) operator = undefined;
        screen = screen.slice(0, -1);
        render();
    });
}

main();
