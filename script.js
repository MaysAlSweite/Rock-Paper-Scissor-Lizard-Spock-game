const body = document.getElementById("body");
var score = 0;
const rules = `<div><button class="rulesBtn"  id="rulesBtn" >RULES</button></div>`;
const choices = ["scissor", "paper", "rock", "lizard", "spock"];

const rulesDetails = ` <div id="rulesScreen" class="rulesScreen ">
        <h4>RULES</h4>
        <button class="closeBtn" id="closeBtn" > <img src="Assets/icon-close.svg"  class="closeImg"></button>
        <div class="rulesImg">
            <img src="Assets/image-rules-bonus.svg" alt="Rules">
        </div>
    </div>`;

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


const resultScreen = (userChoice, pcChoice, result) => {
    body.innerHTML = " ";
    const side1 = ` <div class="${userChoice}" id="userselect"><img src="Assets/icon-${userChoice}.svg" alt="${userChoice}" class="image"></div>`;
    const side2 = ` <div class="${pcChoice}" id="PCselect"><img src="Assets/icon-${pcChoice}.svg" alt="${pcChoice}" class="image"></div>`;

    const header = `<div class="header">
        <div class="logo"><img src="Assets/logo-bonus.svg" alt="logo"></div>
        <div class="score">
            <h5>SCORE</h5>
            <h1>${score}</h1>
        </div>
    </div>`;

    const content = `<div class="user">
            <h5 >YOU PICKED</h5>
          ${side1}
        </div>
        <div class="mid">
            <h1>${result}</h1>
            <div class="playagain">
                <button class="play" onclick="playAgain()">PLAY AGAIN</button>
            </div>
        </div>
        <div class="pc">
            <h5>THE HOUSE PICKED</h5>
            ${side2}
        </div>
        `;

    body.insertAdjacentHTML("beforeend", header);
    body.insertAdjacentHTML("beforeend", content);
    body.insertAdjacentHTML("beforeend", rules);
    body.insertAdjacentHTML("beforeend", rulesDetails);


    if (result == "YOU WIN!!!") {
        switch (userChoice) {
            case "rock": document.getElementById("userselect").classList.add("rockWinner"); break;
            case "paper": document.getElementById("userselect").classList.add("paperWinner"); break;
            case "scissor": document.getElementById("userselect").classList.add("scissorWinner"); break;
            case "lizard": document.getElementById("userselect").classList.add("lizardWinner"); break;
            case "spock": document.getElementById("userselect").classList.add("spockWinner"); break;
            default: console.log("Error");

        }

    }
    else if (result == "YOU LOSE!!!") {
        switch (pcChoice) {
            case "rock": document.getElementById("PCselect").classList.add("rockWinner"); break;
            case "paper": document.getElementById("PCselect").classList.add("paperWinner"); break;
            case "scissor": document.getElementById("PCselect").classList.add("scissorWinner"); break;
            case "lizard": document.getElementById("PCselect").classList.add("lizardWinner"); break;
            case "spock": document.getElementById("PCselect").classList.add("spockWinner"); break;
            default: console.log("Error");

        }
    }


    document.getElementById("rulesBtn").addEventListener("click", () => {
        document.getElementById("rulesScreen").classList.add("display");
    });

    document.getElementById("closeBtn").addEventListener("click", () => {
        document.getElementById("rulesScreen").classList.remove("display");
    }
    );

}

const playAgain = () => {
    body.innerHTML = " ";
    const header = `   <div class="header">
        <div class="logo"><img src="Assets/logo-bonus.svg" alt="logo"></div>
        <div class="score">
            <h5>SCORE</h5>
            <h1>${score}</h1>
        </div>
    </div>`;
    const icons = `<div class="buttons" id="buttons">
        <span class="bg_pantagon"><img src="Assets/bg-pentagon.svg" alt=""></span>
        <div class="paper" id="paper"><button class="btn" onclick="select('paper')"><img src="Assets/icon-paper.svg"
                    alt="Paper" class="image"></button></div>
        <div class="scissor" id="scissor"><button class="btn" onclick="select('scissor')"><img
                    src="Assets/icon-scissor.svg" alt="scissor" class="image"></button></div>
        <div class="rock" id="rock"><button class="btn" onclick="select('rock')"><img src="Assets/icon-rock.svg"
                    alt="rock" class="image"></button></div>
        <div class="lizard" id="lizard"><button class="btn" onclick="select('lizard')"><img src="Assets/icon-lizard.svg"
                    alt="lizard" class="image"></button></div>
        <div class="spock" id="spock"><button class="btn" onclick="select('spock')"><img src="Assets/icon-spock.svg"
                    alt="spock" class="image"></button></div>
    </div>`;
    body.insertAdjacentHTML("afterbegin", header);
    body.insertAdjacentHTML("beforeend", icons);
    body.insertAdjacentHTML("beforeend", rules);
    body.insertAdjacentHTML("beforeend", rulesDetails);

    document.getElementById("rulesBtn").addEventListener("click", () => {
        document.getElementById("rulesScreen").classList.add("display");
    });

    document.getElementById("closeBtn").addEventListener("click", () => {
        document.getElementById("rulesScreen").classList.remove("display");
    }
    );
}

