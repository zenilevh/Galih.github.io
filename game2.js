// Create audio background during gameplay
let bgm = new Audio();
bgm.src = "DragonMusic2.mp3";
bgm.loop = true;

//Tutorial nya di pencet

let tutorialCLick2 = document.getElementById("tutorial2");

tutorialCLick2.addEventListener("click", function() {
    countDownTimer();
    showCard();
    alert(
        "You have to pick one from many card, and only the right card to get you win"
    );
    dragonFullHP.innerHTML = `FULL HEALTH`;
});

//munculin Card nya
let card = document.getElementsByClassName("card");

//untuk munculin kartu dan random kartunya
function showCard() {
    bgm.play();
    for (let i = 0; i < card.length; i++) {
        card[
            i
        ].innerHTML = `<img src="https://i.ya-webdesign.com/images/pixel-knight-png-19.gif">`;
    }
    //random kartu
    let cardIndex = Math.ceil(Math.random() * 10);
    let truecard = document.getElementsByClassName(cardIndex.toString());
    truecard[0].innerHTML = `<a href='tamat.html'><img src="https://i.ya-webdesign.com/images/pixel-knight-png-19.gif"></a>`;
}

// Variables for counter render
let questionTime = 30; // 5 secs for every question
let timer = null;

//bikin Dulu hp nya
const dragonFullHP = document.getElementById("dragonHP");
const dragonHalfHP = document.getElementById("dragonHP");
const dragonLowHP = document.getElementById("dragonHP");

function dragonHpDamage() {
    dragonHalfHP.innerHTML = `DRAGON HP : 50 / 100`;
}

function startGame() {
    // Set up everything to default
    // dragonHpDamage();
    // timer = setInterval(counterRender, 1000);
}

function countDownTimer() {
    var seconds = 5;

    var id = setInterval(function() {
        seconds--;
        document.getElementById("timer").innerHTML = `${seconds} s`;

        if (seconds == 0) {
            clearInterval(id);
            alert("Total Time: " + seconds + " seconds");
        }
    }, 1000);
}