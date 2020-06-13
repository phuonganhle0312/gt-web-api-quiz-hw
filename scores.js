//declares variables
var highscore = document.querySelector("#highscore");
var clear= document.querySelector("#clear");
//retieve scores from local storage
var newScore = localStorage.getItem("newScore");
newScore= JSON.parse(newScore);

if (newScore !== null){
    for (var i= 0; i < newScore.length; i++) {
        var list = document.createElement("li");
        list.textContent = newScore[i].initials + " "+ newScore[i].score
        highscore.appendChild(list);
    }
}
//event listener to clear score
clear.addEventListener("click", function () {
    localStorage.clear();
    location.reload();
});