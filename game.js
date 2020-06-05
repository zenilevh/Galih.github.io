// Create audio background during gameplay
let bgm = new Audio();
bgm.src = "DragonMusic.mp3";
bgm.loop = true;
let dead = new Audio();
dead.src = "OpeningWeb.mp3";

//create wrong or right audio
let wrong = new Audio();
wrong.src = "denied.mp3";

//Tutorial nya di pencet baru game nya di mulai
let tutorialCLick = document.getElementById("tutorial");

// function dragonDamage() {
//     //bikin Dulu hp nya
const dragonHP = document.getElementById("dragonHP");
// variable asset
let stringTimer = document.getElementById("stringTimer");
let optionSurrender = document.getElementById("surrender");
let warning = document.getElementById("dragonWarning");

tutorialCLick.addEventListener("click", function() {
    countDownTimer();
    showCard();
    randomCard();
    // bgm.play();
    dragonHP.innerHTML = "FULL HEALTH";
    alert(
        "You have to pick one from many card, and only the right card to get you win"
    );
});

//untuk munculin kartu dan random kartunya
let cards = document.getElementsByClassName("card");

function showCard() {
    for (let i = 0; i < cards.length; i++) {
        cards[
            i
        ].innerHTML = `<img src="https://i.ya-webdesign.com/images/pixel-knight-png-19.gif">`;
    }
}
let name = document.getElementsByClassName("dataName");

//random kartu dan assign waktu

let seconds;
let truecard;

function randomCard() {
    let cardIndex = Math.ceil(Math.random() * 7);
    for (let i = 0; i < cards.length; i++) {
        cards[i].dataset.correct = false;
    }
    truecard = document.getElementsByClassName(cardIndex.toString())[0];
    truecard.dataset.correct = true;
    console.log(truecard);
}

document.getElementById("trap").addEventListener("click", function(event) {
    console.log(event.target);
});
let trueCounter = 0;
let falseCounter = 0;

for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener("click", function(event) {
        if (cards[i].dataset.correct === "true") {
            //kalo kondisi card yang di klik itu true
            console.log("ini kartu bener", truecard);
            showCard();
            randomCard();
            trueCounter++;
            console.log(trueCounter);
            if (trueCounter === 1) {
                dragonHP.innerHTML = "50% HEALTH";
            }
            if (trueCounter == 2 && dragonHP.innerHTML == "50% HEALTH") {
                dragonHP.innerHTML = "10% HEALTH";
            }
            if (trueCounter == 3 && dragonHP.innerHTML == "10% HEALTH") {
                stringTimer.innerHTML = "DRAGON DEATH";
                optionSurrender.innerHTML = "DRAGON DEATH";
                warning.innerHTML = "DRAGON DEATH";
                alert("YOU WIN, PLEASE GO TO THE GOLD CHAMBER");
                window.location.href = `./tamat.html`;
            }
        } else {
            console.log("ini kartu salah");
            //kalo kondisi nya false

            alert("YOU PICK WRONG CARD, YOU ARE DEAD");
            window.location.href = `./index.html`;
            seconds = 0;
            falseCounter++;
        }
    });
}

//untuk timer nya dan kondisi

function countDownTimer() {
    let seconds = 30;
    var id = setInterval(function() {
        seconds--;
        document.getElementById("timer").innerHTML = `${seconds} s`;
        console.log(seconds);

        if (seconds == 0) {
            clearInterval(id);
            seconds = 0;
            // kondisi tambahan jika waktu sentuh angka 0
            warning.innerHTML = "YOU ARE SO WEAK HUMAN, GIVE ME ANOTHER CHALLENGER!!";
            stringTimer.innerHTML = "`YOU ARE DEAD, INSANT KILL FROM DRAGON`";
            stringTimer.style.color = "#ff6e6e";
            optionSurrender.innerHTML = "YOU ARE DEAD, PLEASE GIMME NEW CHALLENGER";
            tutorialCLick.innerHTML = "";
            document.getElementById("timer").innerHTML = ` `;
            bgm.pause();
            bgm.remove();
            dead.play();
            for (let i = 0; i < cards.length; i++) {
                cards[i].innerHTML = ``;
            }
        }
    }, 1000);
}