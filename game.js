// Create audio background during gameplay
let bgm = new Audio();
bgm.src = "DragonMusic.mp3";
bgm.loop = true;

//create wrong or right audio
let wrong = new Audio();
wrong.src = "denied.mp3";

//Tutorial nya di pencet baru game nya di mulai
let tutorialCLick = document.getElementById("tutorial");

tutorialCLick.addEventListener("click", function() {
    countDownTimer();
    showCard();
    bgm.play();
    alert(
        "You have to pick one from many card, and only the right card to get you win"
    );
});

let name = document.getElementsByClassName("dataName");
console.log(name);
//munculin Card nya
let card = document.getElementsByClassName("card");

//untuk munculin kartu dan random kartunya
function showCard() {
    for (let i = 0; i < card.length; i++) {
        card[
            i
        ].innerHTML = `<img src="https://i.ya-webdesign.com/images/pixel-knight-png-19.gif">`;
    }
    //random kartu
    let cardIndex = Math.ceil(Math.random() * 10);
    let randomcard = document.getElementsByClassName(cardIndex.toString());
    let truecard;
    truecard = randomcard[0].innerHTML = `<a href='tamat.html'><img src="https://i.ya-webdesign.com/images/pixel-knight-png-19.gif"></a>`;
}

let dragonDamage;

//bikin Dulu hp nya
const dragonFullHP = document.getElementById("dragonHP");
const dragonHalfHP = document.getElementById("dragonHP");
const dragonLowHP = document.getElementById("dragonHP");

function dragonHpDamage() {
    dragonHalfHP.innerHTML = `DRAGON HP : 50 / 100`;
}

//untuk timer nya
function countDownTimer() {
    var seconds = 10;

    var id = setInterval(function() {
        seconds--;
        document.getElementById("timer").innerHTML = `${seconds} s`;

        if (seconds == 0) {
            clearInterval(id);
            alert("Total Time: " + seconds + " seconds");
        }
    }, 1000);
}

function heroGetDamage() {}