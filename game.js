// Create audio background during gameplay
let bgm = new Audio();
bgm.src = "DragonMusic.mp3";
bgm.loop = true;

//Tutorial nya di pencet baru game nya di mulai
let tutorialCLick = document.getElementById("tutorial");

tutorialCLick.addEventListener("click", function() {
    countDownTimer();
    showCard();
    alert(
        "You have to pick one from many card, and only the right card to get you win"
    );
    dragonFullHP.innerHTML = `FULL HEALTH`;
});

//untuk munculin kartu dan random kartunya
let card = document.getElementsByClassName("card");

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

//bikin Dulu hp nya
const dragonFullHP = document.getElementById("dragonHP");
const dragonHalfHP = document.getElementById("dragonHP");
const dragonLowHP = document.getElementById("dragonHP");

function dragonHpDamage() {
    dragonHalfHP.innerHTML = `DRAGON HP : 50 / 100`;
}

//untuk timer nya
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

function heroGetDamage() {
    // // If there is no more question in the array or we have used max counter, stop the game
    // if (availableQuestions.length === 0 || questionCounter >= maxQuestions) {
    // Clear interval of the timer
    // clearInterval(timer);
    //     // Save the score to local storage
    //     localStorage.setItem("mostRecentScore", score);
    //     // Go to the end page
    //     return window.location.assign("end.html");
    // }
    // questionCounter++;
    // // Display questionCounter in HUD
    // progressText.innerText = `Question ${questionCounter}/${maxQuestions}`;
    // // Update the progress bar
    // progressBarFull.style.width = `${(questionCounter / maxQuestions) * 100}%`;
    // // Set the counterTimer to 5s again
    // questionTime = 5;
    // // To make the questions randomize
    // const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    // currentQuestion = availableQuestions[questionIndex];
    // question.innerText = currentQuestion.question;
    // // Get the choices for that selected question
    // choices.forEach((choice) => {
    //     const number = choice.dataset["number"];
    //     choice.innerText = currentQuestion["choice" + number];
    // });
    // // Remove the selected question from the list of available questions array
    // availableQuestions.splice(questionIndex, 1);
    // // After loading the questions, then the player can start to give the answer
    // acceptingAnswers = true;
}