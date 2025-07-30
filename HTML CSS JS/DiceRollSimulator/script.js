window.addEventListener("DOMContentLoaded", () => {


    buttonElem = document.getElementById("btn");
    rollHistory = document.getElementById("rollHistory");

    diceEl = document.querySelector(".dice");

    let historyList = [];


       buttonElem.addEventListener("click", () => {

        diceEl.classList.add("roll-animation");
        setTimeout(() => {
            diceEl.classList.remove("roll-animation");
            rollDice();
        }, 1000);

    })

    function rollDice() {
        const rollResult = Math.floor(Math.random() * 6) + 1;
        const diceFace = getDiceFace(rollResult);

        diceEl.innerHTML = diceFace;
        historyList.push(rollResult);
        updateHistory();
    }

    function getDiceFace(rollResult) {
        switch (rollResult) {
            case 1:
                return "&#9856;";
                break;
            case 2:
                return "&#9857;";
                break;
            case 3:
                return "&#9858;";
                break;
            case 4:
                return "&#9859;";
                break;
            case 5:
                return "&#9860;";
                break;
            case 6:
                return "&#9861;";
                break;
            default:
                break;
        }
    }

    function updateHistory() {
        rollHistory.innerHTML = "";
        for (let i = 0; i < historyList.length; i++) {
            const listItem = document.createElement("li");
            listItem.innerHTML = `Roll ${i + 1}: <span>${getDiceFace(historyList[i])}</span>`;
            rollHistory.appendChild(listItem);
        }

    }

});