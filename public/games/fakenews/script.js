let newsData = [];
let availableNews = [];
let currentNews = {};
let score = 0;
let timeLeft = 90;
let timerInterval;

document.addEventListener("DOMContentLoaded", () => {
    fetch("fake-nieuws.json")
        .then(response => response.json())
        .then(data => {
            newsData = data;
            availableNews = [...newsData];
            loadNewNews();
            startTimer();
        });

    document.getElementById("real-btn").addEventListener("click", () => checkAnswer(true));
    document.getElementById("fake-btn").addEventListener("click", () => checkAnswer(false));
});

function startTimer() {
    timerInterval = setInterval(() => {
        timeLeft--;
        document.getElementById("timer").textContent = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            endGame(true);
        }
    }, 1000);
}

function loadNewNews() {
    if (availableNews.length === 0) {
        endGame(false);
        return;
    }

    const randomIndex = Math.floor(Math.random() * availableNews.length);
    currentNews = availableNews.splice(randomIndex, 1)[0];

    document.getElementById("news-title").textContent = currentNews.title;
    document.getElementById("news-text").textContent = currentNews.text;

    const newsImage = document.getElementById("news-image");
    if (currentNews.image) {
        newsImage.src = currentNews.image;
        newsImage.style.display = "block";
    } else {
        newsImage.style.display = "none";
    }
}

function checkAnswer(isReal) {
    const flashOverlay = document.getElementById("flash-overlay");
    const realButton = document.getElementById("real-btn");
    const fakeButton = document.getElementById("fake-btn");
    realButton.disabled = true;
    fakeButton.disabled = true;

    if (isReal === currentNews.real) {
        score++;
        flashOverlay.style.backgroundColor = "rgba(76, 175, 80, 0.7)";
    } else {
        flashOverlay.style.backgroundColor = "rgba(227, 57, 53, 0.7)";
    }

    document.getElementById("score").textContent = score;

    setTimeout(() => {
        flashOverlay.style.backgroundColor = "transparent";
        loadNewNews();
        realButton.disabled = false;
        fakeButton.disabled = false;
    }, 1000);
}

function endGame(timeUp) {
    clearInterval(timerInterval);

    // Haal de bestaande scoreboard data op
    let scoreboard = JSON.parse(localStorage.getItem("scoreboard")) || [];

    // Voeg de nieuwe score toe
    scoreboard.push({ score: score, timeLeft: timeLeft });

    // Sorteer op hoogste score, bij gelijke score op resterende tijd
    scoreboard.sort((a, b) => b.score - a.score || b.timeLeft - a.timeLeft);

    // Behoud alleen de top 5 scores
    scoreboard = scoreboard.slice(0, 5);

    // Sla de bijgewerkte scoreboard op in localStorage
    localStorage.setItem("scoreboard", JSON.stringify(scoreboard));

    // Genereer de scoreboard HTML
    let scoreboardHTML = `<h2>🏆 Scoreboard</h2><table><tr><th>#</th><th>Score</th><th>Resterende Tijd</th></tr>`;
    scoreboard.forEach((entry, index) => {
        scoreboardHTML += `<tr><td>${index + 1}</td><td>${entry.score}</td><td>${entry.timeLeft}s</td></tr>`;
    });
    scoreboardHTML += "</table>";

    document.querySelector(".game-container").innerHTML = `
        <h1>Spel afgelopen!</h1>
        <div class="scoreboard-end">
            <p style="font-size: 30px; font-weight: bold;">${timeUp ? "Tijd is afgelopen!" : "Geen nieuws meer!"}</p>
            <p style="font-size: 25px;">Je eindscore: ${score}</p>
            <p style="font-size: 20px;">Resterende tijd: ${timeLeft} seconden</p>
            ${scoreboardHTML}
        </div>
        <button onclick="restartGame()" class="big-button restart">Opnieuw spelen</button>
        <button onclick="goToStart()" class="big-button stop">Stop</button>
    `;
}

function goToStart() {
    window.location.href = "index.html";
}

function restartGame() {
    window.location.reload();
}