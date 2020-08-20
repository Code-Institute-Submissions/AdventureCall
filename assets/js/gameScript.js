// The inspiration for this project came form this game https://github.com/WebDevSimplified/JavaScript-Text-Adventure/blob/master/game.js
// It was found at the  Web Dev Simplified Youtube Channel https://www.youtube.com/channel/UCFbNIlppjAuEX4znoulh0Cw

$(document).ready(function () {
    const imageElement = document.getElementById("question-image");
    const questionElement = document.getElementById("question");
    const answerButtonsElement = document.getElementById("answer-options");
    const timerElement = document.getElementById("time");

    let playerName = "";
    let emptyName;
    let items = {};
    let questionNode = 0;
    let timeInSeconds = 0;
    let endTime = 0;

    // This function takes account of the player's name.
    // It also checks to see if a name has actually been entered.
    // It runs the Welcome Screen if a name is entered.
    // and goes to the no name screen if there's nothing entered.

    $("#start-game").click(function () {
        playerName = $("#player-name").val();
        emptyName = !playerName || playerName.charAt(0) == " ";
        if (emptyName) {
            $("#welcome-screen").removeClass("show");
            $("#welcome-screen").addClass("hide");
            $("#no-name-screen").removeClass("hide");
            $("#no-name-screen").addClass("show");
            return;
        }
        runWelcomeScreen();
    });

    // Function to recognise if enter key is hit to move game onto questions.

    $(document).keypress(function (event) {
        if (event.key === "Enter") {
            playerName = $("#player-name").val();
            emptyName = !playerName || playerName.charAt(0) == " ";
            if (emptyName) {
                $("#welcome-screen").removeClass("show");
                $("#welcome-screen").addClass("hide");
                $("#no-name-screen").removeClass("hide");
                $("#no-name-screen").addClass("show");
                return;
            }
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
        $("#welcome").removeClass("hide");
        $("#welcome").addClass("show");
        $("#welcome").text(welcomeGreeting);
        $("#welcome-screen").removeClass("question-container");
        $("#welcome-screen").removeClass("show");
        $("#welcome-screen").addClass("hide");
        $("#game-screen").removeClass("hide");
        $("#game-screen").addClass("show");
    }

    //  This function starts the game, starts the timer and shows the first question.

    function playGame() {
        $("#answer-options").addClass("buttons");
        showQuestion(1);
        timer.start();
    }

    // This function displays the image and question text from the questionNodes varaible based on which answer parameter has been passed in.

    function showQuestion(questionNodeIndex) {
        questionNode = questionNodes.find((questionNode) => questionNode.id === questionNodeIndex);
        imageElement.innerHTML = questionNode.image;
        const deathScreen = '<img src="assets/images/skull.png" alt="A skull" width="265" height="200" />';
        if (questionNode.image == deathScreen) {
            $("#answer-options").removeClass("buttons");
            timer.stop();
        } else if (questionNode.image == deathScreen) {
            $("#answer-options").removeClass("buttons");
        }
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
    // It also hides the initial welcome screen.

    function showAnswerOptions() {
        questionNode.answers.forEach((answer) => {
            if (checkItems(answer)) {
                const button = document.createElement("button");
                button.innerText = answer.text;
                button.classList.add("button-style");
                $(button).click(function () {
                    pickedAnswer(answer);
                });
                answerButtonsElement.appendChild(button);
                $("#welcome").removeClass("show");
                $("#welcome").addClass("hide");
            }
        });
    }

    //  This function moves the character on to the next question based on which answer parameter is passed in by the player.
    //  It also assigns any items picked up to the character.
    //  If the player reaches the end of the game this function moves them on to the End Game Screen and stops the timer.
    //  If the player dies it stops the timer based on recognising the death image.
    //  If the player restarts the game it resets the items the player carries to zero, resets the timer and puts them back to the first question.

    function pickedAnswer(answer) {
        const questionNodeIndex = answer.nextAnswer;
        items = Object.assign(items, answer.addItem);
        if (questionNodeIndex > questionNodes.length + 1) {
            timer.stop();
            endTime = timeInSeconds;
            $("#game-screen").addClass("hide");
            const endMessage = `You have done well in your quest, ${playerName}.  You have completed the game in ${endTime} seconds!`;
            $("#end-message").text(endMessage);
            $("#end-screen").removeClass("hide");
            $("#end-screen").addClass("show");
            return;
        } else if (questionNodeIndex < 1) {
            timer.reset();
            items = {};
            return playGame();
        }
        showQuestion(questionNodeIndex);
    }

    // This function reloads the page if the player wants to go back to the very start once the end of the game has been reached.

    $("#reload").click(function () {
        location.reload();
    });

    // Timer js below from https://stackoverflow.com/questions/29971898/how-to-create-an-accurate-timer-in-javascript user Tomasz Bubała to create
    // an accurate timer for the game using setinterval.

    class Timer {
        constructor() {
            this.isRunning = false;
            this.startTime = 0;
            this.overallTime = 0;
        }

        getTimeElapsedSinceLastStart() {
            if (!this.startTime) {
                return 0;
            }

            return Date.now() - this.startTime;
        }

        start() {
            if (this.isRunning) {
                return console.error("Timer is already running");
            }

            this.isRunning = true;

            this.startTime = Date.now();
        }

        stop() {
            if (!this.isRunning) {
                return console.error("Timer is already stopped");
            }

            this.isRunning = false;

            this.overallTime = this.overallTime + this.getTimeElapsedSinceLastStart();
            return;
        }

        reset() {
            this.overallTime = 0;

            if (this.isRunning) {
                this.startTime = Date.now();
                return;
            }

            this.startTime = 0;
        }

        getTime() {
            if (!this.startTime) {
                return 0;
            }

            if (this.isRunning) {
                return this.overallTime + this.getTimeElapsedSinceLastStart();
            }

            return this.overallTime;
        }
    }

    const timer = new Timer();
    setInterval(() => {
        timeInSeconds = Math.round(timer.getTime() / 1000);
        timerElement.innerText = timeInSeconds;
    }, 100);
});
