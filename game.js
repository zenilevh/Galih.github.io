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
//     const dragonHP = document.getElementById("dragonHP");
//     const dragonFullHP = dragonHP.innerHTML("FULL HEALTH");
//     const dragonHalfHP = dragonHP.innerHTML("50% HEALTH");
//     const dragonLowHP = dragonHP.innerHTML("10% HEALTH");
// }

tutorialCLick.addEventListener("click", function() {
    countDownTimer();
    showCard();
    bgm.play();
    randomCard();
    alert(
        "You have to pick one from many card, and only the right card to get you win"
    );
});
//untuk munculin kartu dan random kartunya
let card = document.getElementsByClassName("card");

function showCard() {
    for (let i = 0; i < card.length; i++) {
        card[
            i
        ].innerHTML = `<img src="https://i.ya-webdesign.com/images/pixel-knight-png-19.gif">`;
    }
}

//random kartu
function randomCard() {
    let cardIndex = Math.ceil(Math.random() * 10);
    let randomcard = document.getElementsByClassName(cardIndex.toString());
}

let name = document.getElementsByClassName("dataName");
console.log(name);

document.getElementById(
    "trap".addEventListener("click", function(event) {
        let selectedElement = event.target;
    })
);

//     randomcard[0].innerHTML = `<a href='tamat.html'><img src="https://i.ya-webdesign.com/images/pixel-knight-png-19.gif"></a>`;
//     // randomcard[0].dataset.correct = true;
//     // let selectedElement;
//     // randomcard[0].dataset.correct = true;
//     // if (selectedElement.dataset.correct === "true") {
//     //     dragonFullHP;
//     // }
// }

//untuk timer nya

function countDownTimer() {
    var seconds = 10;

    var id = setInterval(function() {
        seconds--;
        document.getElementById("timer").innerHTML = `${seconds} s`;
        let stringTimer = document.getElementById("stringTimer");
        stringTimer.style =

            if (seconds == 0) {
                clearInterval(id);
                seconds = 0;
                stringTimer.innerHTML = "`YOU ARE DEAD, INSANT KILL FROM DRAGON`";
                document.getElementById("timer").innerHTML = ` `;
                bgm.pause();
                randomcard();
                for (let i = 0; i < card.length; i++) {
                    card[i].innerHTML = ` `;
                }
            }
    }, 1000);
}

function heroGetDamage() {}