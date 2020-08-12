// The inspiration for this project came form this game https://github.com/WebDevSimplified/JavaScript-Text-Adventure/blob/master/game.js
// It was found at the  Web Dev Simplified Youtube Channel https://www.youtube.com/channel/UCFbNIlppjAuEX4znoulh0Cw

$(document).ready(function () {
    const imageElement = document.getElementById("question-image");
    const questionElement = document.getElementById("question");
    const answerButtonsElement = document.getElementById("answer-options");

    let playerName = "";
    let items = {};
    let questionNode = 0;

    // This function takes account of the player's name.
    // It also checks to see if a name has actually been entered.
    // It runs the Welcome Screen if a name is entered.
    // and goes to the no name screen if there's nothing entered.

    $("#start-game").click(function () {
        playerName = $("#player-name").val();
        if (!playerName || playerName.charAt(0) == " ") {
            $("#welcome-screen").removeClass("show");
            $("#welcome-screen").addClass("hide");
            $("#no-name-screen").removeClass("hide");
            $("#no-name-screen").addClass("show");
        } else {
            runWelcomeScreen();
        }
    });

    // This function sends the player back to the welcome screen from the no name screen.

    $("#go-back").click(function () {
        $("#no-name-screen").removeClass("show");
        $("#no-name-screen").addClass("hide");
        $("#welcome-screen").removeClass("hide");
        $("#welcome-screen").addClass("show");
    });

    // This function displays the welcome with a greeting for the player a the top of the first question.
    // It adds the player's name to the end screen to so that it's there is the player gets that far.
    // It also starts the game.

    function runWelcomeScreen() {
        playGame();
        const welcomeGreeting = `Welcome, ${playerName}`;
        const endMessage = `You have done well in your quest, ${playerName}`;
        $("#welcome").removeClass("hide");
        $("#welcome").addClass("show");
        $("#welcome").text(welcomeGreeting);
        $("#welcome-screen").removeClass("question-container");
        $("#welcome-screen").removeClass("show");
        $("#welcome-screen").addClass("hide");
        $("#game-screen").removeClass("hide");
        $("#game-screen").addClass("show");
        $("#end-message").text(endMessage);
    }


    //  This function starts the game and shows the first question.

    function playGame() {
        showQuestion(1);
    }

    // This function displays the image and question text from the questionNodes varaible based on which answer parameter has been passed in.

    function showQuestion(questionNodeIndex) {
        questionNode = questionNodes.find((questionNode) => questionNode.id === questionNodeIndex);
        imageElement.innerHTML = questionNode.image;
        questionElement.innerText = questionNode.question;
        while (answerButtonsElement.firstChild) {
            answerButtonsElement.removeChild(answerButtonsElement.firstChild);
        }
        showAnswerOptions();
    }

    //  This function checks to see if the character is holding any items that are required.

    function checkItems(answer) {
        return answer.itemRequired == null || answer.itemRequired(items);
    }

    // This function displays the answer options available to the character based on the items being carried.
    // It also hide the initial welcome screen.

    function showAnswerOptions() {
        questionNode.answers.forEach((answer) => {
            if (checkItems(answer)) {
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

    //  This function moves the character on to the next question based on which answer parameter is passed in by the player.
    //  It also assigns any items picked up to the character.
    //  If the player reaches the end of the game this function moves them on to the End Game Screen.
    //  If the player dies it resets the items the player carries to zero and puts them back to the first question.

    function pickedAnswer(answer) {
        const questionNodeIndex = answer.nextAnswer;
        items = Object.assign(items, answer.addItem);
        if (questionNodeIndex > questionNodes.length) {
            $("#game-screen").addClass("hide");
            $("#end-screen").removeClass("hide");
            $("#end-screen").addClass("show");
            return;
        } else if (questionNodeIndex < 1) {
            items = {};
            return playGame();
        }
        showQuestion(questionNodeIndex);
    }

    // This function reloads the page if the player wants to go back to the very start once the end of the game has been reached.

    $("#reload").click(function () {
        location.reload();
    });
});