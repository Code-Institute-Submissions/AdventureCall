$(document).ready(function () {
    $("#start-game").click(function () {
        $("#welcome-screen").removeClass("show");
        $("#welcome-screen").addClass("hide");
        $("#game-screen").removeClass("hide");
        $("#game-screen").addClass("show");
    });

    const questionElement = document.getElementById("question");
    const answerButtonsElement = document.getElementById("answer-options");
    let playerName;

    function getPlayerName() {
        playerName = document.getElementById("player-name").value;
    };

    console.log(playerName);

    let gameState = {};

    function playGame() {
        items: {
        }
        showQuestion(1);
    }

    function showQuestion(questionNodeIndex) {
        const questionNode = questionNodes.find((questionNode) => questionNode.id === questionNodeIndex);
        questionElement.innerText = questionNode.question;
        while (answerButtonsElement.firstChild) {
            answerButtonsElement.removeChild(answerButtonsElement.firstChild);
        }

        questionNode.answers.forEach((answer) => {
            if (showAnswer(answer)) {
                const button = document.createElement("button");
                button.innerText = answer.text;
                button.classList.add("button-style");
                button.addEventListener("click", () => pickedAnswer(answer));
                answerButtonsElement.appendChild(button);
            }
        });
    }

    function showAnswer(answer) {
        return answer.stateRequired == null || answer.stateRequired(gameState);
    }

    function pickedAnswer(answer) {
        const questionNodeIndex = answer.nextAnswer;
        gameState = Object.assign(gameState, answer.addState);
        if (questionNodeIndex <= 0) {
            return playGame();
        }
        showQuestion(questionNodeIndex);
    }

    const questionNodes = [
        {
            id: 1,
            question: "You awake in a moonlit meadow.  On the ground is a boulder, to the north is a witches coven",
            answers: [
                {
                    text: "Roll Boulder",
                    nextAnswer: 2,
                },
                {
                    text: "Go North",
                    nextAnswer: 3,
                },
            ],
        },
        {
            id: 2,
            question: "You roll the boulder which reveals a secret entranceway to a catacomb.  In the catacomb is a sarcophagus and passageway to the east",
            answers: [
                {
                    text: "Open Sarcophagus",
                    nextAnswer: 4,
                },
                {
                    text: "Explore the eastern passagway",
                    nextAnswer: 5,
                    addState: { noItems: true },
                },
            ],
        },
        {
            id: 3,
            question: "The witches attack you.  You are Dead.",
            answers: [
                {
                    text: "Start Again?",
                    nextAnswer: -1,
                },
            ],
        },
        {
            id: 4,
            question: "Inside the Sarcophagus is a skeleton and around its neck is a golden amulet!",
            answers: [
                {
                    text: "Take Amulet and travel along the eastern passageway",
                    addState: { amulet: true },
                    nextAnswer: 5,
                },
                {
                    text: "Take Finger from skeleton and travel along the eastern passageway",
                    addState: { skeletonFinger: true },
                    nextAnswer: 5,
                },
                {
                    text: "Ignore skeleton and travel along the eastern passageway",
                    nextAnswer: 5,
                    addState: { noItems: true },
                },
            ],
        },
        {
            id: 5,
            question: "As you come out of the passageway the tunnel caves in behind you and now you stand before you is a locked Gate of Bones with impassable cliff to either side",
            answers: [
                {
                    text: "Use skeleton finger as a key on the locked gate",
                    stateRequired: (currentGameState) => currentGameState.skeletonFinger,
                    stateChange: { skeletonFinger: false },
                    nextAnswer: 6,
                },
                {
                    text: "You have no way back and no items and so are stuck.  You waste away.  Would you like to restart?",
                    stateRequired: (currentGameState) => currentGameState.noItems || currentGameState.amulet,
                    nextAnswer: -1,
                },
            ],
        },
    ];

    playGame();
});