$(document).ready(function () {
    $("#start-game").click(function () {
        let playerName = $("#player-name").val();
        if (playerName == null || playerName == "") {
            alert ('Name not entered!')
        } else {
        let welcomeGreeting = `Welcome, ${playerName}`;
        let endMessage = `You have done well in your quest, ${playerName}`;
        $("#welcome").removeClass("hide");
        $("#welcome").addClass("show");
        $("#welcome").text(welcomeGreeting);
        $("#welcome-screen").removeClass("show");
        $("#welcome-screen").addClass("hide");
        $("#game-screen").removeClass("hide");
        $("#game-screen").addClass("show");
        $("#end-message").text(endMessage);
        }
    });

    $("#reload").click(function () {
        location.reload();
    });


    const questionElement = document.getElementById("question");
    const answerButtonsElement = document.getElementById("answer-options");

    let items = {};

    function playGame() {
        items: {}
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
                $("#welcome").removeClass("show");
                $("#welcome").addClass("hide");
            }
        });
    }

    function showAnswer(answer) {
        return answer.stateRequired == null || answer.stateRequired(items);
    }

    function pickedAnswer(answer) {
        const questionNodeIndex = answer.nextAnswer;
        items = Object.assign(items, answer.addState);
        if (questionNodeIndex == 19) {
            $("#game-screen").addClass("hide");
            $("#end-screen").removeClass("hide");
            $("#end-screen").addClass("show");
            return
        }
        else if (questionNodeIndex <= 0) {
            items = {};
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
                    text: "Explore the eastern passageway",
                    nextAnswer: 5,
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
                },
            ],
        },
        {
            id: 5,
            question: "As you come out of the passageway the tunnel caves in behind you and now you stand before you is a locked Gate of Bones with Large cliffs to either side",
            answers: [
                {
                    text: "Use skeleton finger as a key on the locked gate",
                    stateRequired: (currentGameState) => currentGameState.skeletonFinger,
                    addState: {},
                    nextAnswer: 6,
                },
                {
                    text: "Try to scale the cliffs",
                    nextAnswer: 7,
                },
            ],
        },
        {
            id: 6,
            question: "The gate unlocks and a narrow pathway leads you to a Gigantic Castle Tower with and entrance.  Inside the entrance are stairs going up and stairs going down",
            answers: [
                {
                    text: "Go Down the Stairs",
                    nextAnswer: 8,
                },
                {
                    text: "Go Up the Stairs",
                    nextAnswer: 9,
                },
            ],
        },
        {
            id: 7,
            question: "You slip as you climb up the walls and fall to your death",
            answers: [
                {
                    text: "Restart?",
                    nextAnswer: -1,
                },
            ],            
        },
        {
            id: 8,
            question: "In the Dungeon you find a giant troll.  He cuts off your head",
            answers: [
                {
                    text: "Restart?",
                    nextAnswer: -1,
                },
            ],            
        },
        {
            id: 9,
            question: "In an upstairs room you find a troll asleep with a key around his neck and an open door",
            answers: [
                {
                    text: "Punch Troll",
                    nextAnswer: 10,
                },
                {
                    text: "Take key",
                    addState: { trollKey: true },
                    nextAnswer: 11,
                },
                {
                    text: "Ignore troll and walk through open door",
                    nextAnswer: 11,
                },
            ],            
        },
        {
            id: 10,
            question: "The troll wakes up and eats you whole",
            answers: [
                {
                    text: "Restart?",
                    nextAnswer: -1,
                },
            ],            
        },
        {
            id: 11,
            question: "Before you is a chasm but behind you you hear the troll waking up",
            answers: [
                {
                    text: "Try to use key to lock door behind you?",
                    stateRequired: (currentGameState) => currentGameState.trollKey,
                    nextAnswer: 16,
                },
                {
                    text: "Jump the chasm",
                    nextAnswer: 12,
                },
            ],
        },
        {
            id: 12,
            question: "You make it to the other side, just about! Before you is a locked door and beside it a set of ladders",
            answers: [
                {
                    text: "Look on the ground",
                    nextAnswer: 15,
                },
                {
                    text: "Climb up the ladders",
                    nextAnswer: 17,
                },
                {
                    text: "Explore area",
                    nextAnswer: 15,
                },
                {
                    text: "Open Door",
                    stateRequired: (currentGameState) => currentGameState.trollKey,
                    nextAnswer: 14,
                },
            ],
        },
        {
            id: 14,
            question: "You walk into a treasure filled room and a wizard inside bestows upon you magical wizard powers which give you control over all the beasts in the castle. He says, You have a good heart and are a true warrior and disappears in a puff of smoke leaving the treasure and castle to you",
            answers: [
                {
                    text: "End Game",
                    nextAnswer: 19,
                },
            ],
        },
        {
            id: 15,
            question: "A giant spider attacks you.  You die",
            answers: [
                {
                    text: "Restart?",
                    nextAnswer: -1,
                },
            ],
        },
        {
            id: 16,
            question: "The troll is too quick for you and pops your head off like a beer bottle top.  You die",
            answers: [
                {
                    text: "Restart?",
                    nextAnswer: -1,
                },
            ],
        },
        {
            id: 17,
            question: "You alight on the roof of the tower and beside you is a roofer replacing roof tiles",
            answers: [
                {
                    text: "Climb back down?",
                    nextAnswer: 12,
                },
                {
                    text: "Offer to help the roofer",
                    nextAnswer: 18,
                },
            ],
        },
        {
            id: 18,
            question: "The roofer gladly accepts your help and hands you a bucket of nails.  It's very heavy and you overbalance.  A gust of wind whisks you off the roof and you fall to your death",
            answers: [
                {
                    text: "Restart?",
                    nextAnswer: -1,
                },
            ],
        },
    ];
    playGame();
});