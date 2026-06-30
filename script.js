// ===========================
// النقاط
// ===========================

let totalScore = Number(localStorage.getItem("totalScore")) || 0;

const totalScoreElement = document.getElementById("totalScore");

function updateTotalScore(){

    totalScoreElement.textContent = totalScore;

    localStorage.setItem("totalScore", totalScore);

}

updateTotalScore();


// ===========================
// عناصر الصفحات
// ===========================

const home = document.getElementById("home");

const games = {

    balloon: document.getElementById("balloonGame"),

    fish: document.getElementById("fishGame"),

    memory: document.getElementById("memoryGame"),

    box: document.getElementById("boxGame"),

    color: document.getElementById("colorGame"),

    cup: document.getElementById("cupGame")

};


// ===========================
// إخفاء جميع الألعاب
// ===========================

function hideGames(){

    Object.values(games).forEach(game=>{

        game.style.display="none";

    });

}


// ===========================
// الرجوع للرئيسية
// ===========================

function goHome(){

    hideGames();

    home.style.display="block";

}


// ===========================
// فتح لعبة
// ===========================

function openGame(gameName){

    hideGames();

    home.style.display="none";

    games[gameName].style.display="block";


    switch(gameName){

        case "balloon":

            startBalloon();

            break;

        case "fish":

            startFish();

            break;

        case "memory":

            startMemory();

            break;

        case "box":

            startBox();

            break;

        case "color":

            startColor();

            break;

        case "cup":

            startCup();

            break;

    }

}