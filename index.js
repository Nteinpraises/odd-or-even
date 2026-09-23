const numberInput = document.getElementById("numberInput");
const checkBtn = document.getElementById("checkBtn");
const result = document.getElementById("result");

checkBtn.addEventListener("click", checkOddOrEven);

numberInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        checkOddOrEven();
    }
});

function checkOddOrEven() {
    const value = numberInput.value.trim();

    if (value === "" || isNaN(value)) {
        result.textContent = "Please enter a valid number.";
        result.className = "result error";
        return;
    }

    const number = Number(value);

    if (number % 2 === 0) {
        result.textContent = number + " is an even number.";
        result.className = "result even";
    } else {
        result.textContent = number + " is an odd number.";
        result.className = "result odd";
    }
}
