//Document ready function ensures page loads fully before any javascript is run

$(document).ready(function () {

    // This function takes the player's entered name and adds it to the welcome and end screen
    // It then hides the welcome screen and opens up the main game screen when the start game button is clicked

    $("#start-game").click(function () {
        const playerName = $("#player-name").val();
        if (playerName == null || playerName == "") {
            alert ('Name not entered!')
        } else {
        const welcomeGreeting = `Welcome, ${playerName}`;
        const endMessage = `You have done well in your quest, ${playerName}`;
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

    //The function below reloads the page.  It is used at the end of the game to go back to the very beginning.

    $("#reload").click(function () {
        location.reload();
    });

    // Declaring the variables which will determine which image, question and answer options appear on the screen.

    const imageElement = document.getElementById("question-image");
    const questionElement = document.getElementById("question");
    const answerButtonsElement = document.getElementById("answer-options");


    // Declaring the variable which will determine if they player has the correct item to make the correct answer options appear.

    let items = {};

    // The function which makes the first question appear.  It takes the ID number from the questionNodes object.

    function playGame() {
        showQuestion(1);
    }

    // The function which determines which image, question and answer options come up on the screen.
    // It creates the variable questionNode. To do this it looks in the questionNodes array to find the question ID and then creates the variable based on this.
    // It then loads the image element from the image and question information in the variable.
    // It then removes all the children from the answer button element by seeing that it initially has a child then removing this information.
    // Then it creates buttons for the answer elements and a click listener which triggers the pickedAnswer function.
    // This also removes the initial welcome screen from the display.

    function showQuestion(questionNodeIndex) {
        const questionNode = questionNodes.find((questionNode) => questionNode.id === questionNodeIndex);
        imageElement.innerHTML = questionNode.image;
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

    // This function shows the answer options based on whether the answer has a items required to view them.

    function showAnswer(answer) {
         return answer.itemRequired == null || answer.itemRequired(items);
     }


    // The function below creates the questionNodeIndex variable from the answer from showQuestion function.
    // it then checks the answer id to see if the character picks up any items and adds them to the items variable.
    // it also checks the answer and if it is answer 19 the function will take the user to the end screen.
    // if the answer is less than or equal to zero the game restarts.

    function pickedAnswer(answer) {
        const questionNodeIndex = answer.nextAnswer;
        items = Object.assign(items, answer.addItem);
        if (questionNodeIndex > questionNodes.length) {
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

    playGame();
});