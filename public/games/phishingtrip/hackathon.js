const correctSound = new Audio('./Sounds/correct.mp3');
const wrongSound = new Audio('./Sounds/wrong.mp3');

const cards = document.querySelectorAll('.link-card');
const scoreDisplay = document.getElementById('score');
let score = 0;
let clicks = 0;
let correct = 0;
let phishingCount = 0;

cards.forEach(card => {
  if (card.getAttribute('data-real') === 'false') {
    phishingCount++;
    console.log("phishingCount: " + phishingCount);
  }
});

  cards.forEach(card => {
    card.addEventListener('click', () => {
      if (card.classList.contains('correct') || card.classList.contains('wrong')) return;

      const isReal = card.getAttribute('data-real') === 'true';
      if (!isReal) {
        card.classList.add('correct');
        correctSound.play();
        console.log("Correct! this link is fake.");
        card.style.backgroundColor = '#93ff8e'; // Change color to green for correct
        score++;
        correct++;
      
      } else {
        card.classList.add('wrong');
        wrongSound.play();
        card.style.backgroundColor = '#fe8a8a'; // Change color to red for wrong
        console.log("Wrong! this link is real.");
        score--;
      }

      if (correct === phishingCount) {
        alert("You have spotted all phishing links! Your score is: " + score);
      }
      
    });
  });

  function goHome() {
    window.location.href = "index.html";
  }
