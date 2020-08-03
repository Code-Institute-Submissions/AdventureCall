$(document).ready(function() {
    $("#start-game").click(function() {
        $("#welcome-screen").removeClass("show");
        $("#welcome-screen").addClass("hide");
        $("#game-screen").removeClass("hide");
        $("#game-screen").addClass("show");
    })
});