let playerName;

$(document).ready(function() {
    $("#start-game").click(function() {
        $("#welcome-screen").removeClass("show");
        $("#welcome-screen").addClass("hide");
        $("#game-screen").removeClass("hide");
        $("#game-screen").addClass("show");
        let playerName = $("#player-name").val();
    })
});

console.log(playerName);