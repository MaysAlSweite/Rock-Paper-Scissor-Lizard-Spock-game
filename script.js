const body = document.getElementById("body");
var score = 0;

const choices = ["scissor", "paper", "rock", "lizard", "spock"];

document.getElementById("rulesBtn").addEventListener("click", () => {
    document.getElementById("rulesScreen").classList.add("display");
});

document.getElementById("closeBtn").addEventListener("click", () => {
    document.getElementById("rulesScreen").classList.remove("display");
}
);


const select = (userChoice) => {
    const pcChoice = computerChoice();
    const result = compareChoices(userChoice, pcChoice);
    if (result == "YOU WIN!!!")
        score++;
    else if (result == "YOU LOSE!!!" && score > 0)
        score--;
    resultScreen(userChoice, pcChoice, result);
}

const computerChoice = () => {
    const randomInteger = Math.floor(Math.random() * 50) + 1;
    return choices[randomInteger % 5];
}

const compareChoices = (usr, pc) => {
    const userChoice = choices.indexOf(usr);
    const pcChoice = choices.indexOf(pc);
    if (userChoice == pcChoice)
        return "points tied";
    else {
        const ch = userChoice - pcChoice;
        if (ch == -1 || ch == 4)
            return "YOU WIN!!!";
        else
            return "YOU LOSE!!!";
    }
}