window.addEventListener("DOMContentLoaded", () => {
    const computeBtn = document.querySelector(".compute");

    function CalculateBMI() {
        const heightValue = document.getElementsByClassName("height")[0].value / 100;
        const weightValue = document.getElementsByClassName("weight")[0].value;

        const bmiValue = weightValue / (heightValue * heightValue);
        const resultValue = document.querySelector(".result");
        resultValue.value = bmiValue.toFixed(2);

        const weightConditionEl = document.querySelector(".spanCondition");

        if (bmiValue < 18.5) {
            weightConditionEl.innerText = " Underweight";
        } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
            weightConditionEl.innerText = " Normal weight";
        } else if (bmiValue >= 25 && bmiValue <= 29.9) {
            weightConditionEl.innerText = " Overweight";
        } else if (bmiValue >= 30) {
            weightConditionEl.innerText = " Obesity";
        } else {
            weightConditionEl.innerText = "Invalid input";
        }
    }

    computeBtn.addEventListener("click", CalculateBMI);
});
