const gameData = {
    playerName: "",
    score: 0,
    currentScenario: 0,
    completedScenarios: [],
    highScores: [],
    scenarios: [],
  };
  
function initGame() {
  const playerNameInput = document.getElementById('player-name');
  const startButton = document.getElementById('start-game');
  const gameIntro = document.getElementById('game-intro');
  const gameScreen = document.getElementById('game-screen');
  
  startButton.classList.add('pulse-animation');
  
  createConfettiEffect();
  
  loadScenarios()
    .then(() => {
      startButton.addEventListener('click', () => {
        if (playerNameInput.value.trim() !== "") {
          gameData.playerName = playerNameInput.value.trim();
          gameData.score = 0;
          gameData.currentScenario = 0;
          gameData.completedScenarios = [];
          
          const typingEffect = document.createElement('div');
          typingEffect.className = 'typing-effect';
          typingEffect.textContent = `Welkom, ${gameData.playerName}!`;
          gameIntro.appendChild(typingEffect);
          
          gameIntro.style.opacity = '0';
          setTimeout(() => {
            gameIntro.style.display = 'none';
            gameScreen.style.display = 'block';
            setTimeout(() => {
              gameScreen.style.opacity = '1';
            }, 50);
          }, 800);
          
          loadScenario();
        } else {
          alert("Voer je naam in om het spel te starten.");
          
          playerNameInput.classList.add('shake');
          setTimeout(() => {
            playerNameInput.classList.remove('shake');
          }, 500);
        }
      });
    })
    .catch(error => {
      console.error("Fout bij het laden van scenario's:", error);
      alert("Er is een fout opgetreden bij het laden van het spel. Vernieuw de pagina en probeer het opnieuw.");
    });
  
  const optionButtons = document.querySelectorAll('.option-btn');
  optionButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
      selectOption(index);
    });
  });
  
  document.getElementById('next-scenario').addEventListener('click', () => {
    nextScenario();
  });
  
  document.getElementById('play-again').addEventListener('click', () => {
    restartGame();
  });
  
  const allButtons = document.querySelectorAll('button');
  allButtons.forEach(button => {
    button.addEventListener('mouseenter', () => {
      if (button.disabled) return;
      button.style.transform = 'scale(1.03)';
    });
    
    button.addEventListener('mouseleave', () => {
      if (button.disabled) return;
      button.style.transform = '';
    });
  });
  
  loadHighScores();
  addSnapchatStyleAnimations();
  
  const actionIcons = document.querySelectorAll('.action-icon');
  actionIcons.forEach(icon => {
    icon.addEventListener('click', () => {
      icon.classList.add('icon-clicked');
      setTimeout(() => {
        icon.classList.remove('icon-clicked');
      }, 300);
    });
  });
}

function createConfettiEffect() {
  const style = document.createElement('style');
  style.textContent = `
    .confetti {
      position: absolute;
      width: 10px;
      height: 10px;
      background-color: #FFFC00;
      z-index: 1000;
      animation: confetti-fall 4s ease-in-out forwards;
    }
    
    @keyframes confetti-fall {
      0% { transform: translateY(-10px) rotate(0deg); opacity: 1; }
      100% { transform: translateY(100vh) rotate(720deg); opacity: 0; }
    }
  `;
  document.head.appendChild(style);
}

function showConfetti() {
  const container = document.querySelector('.app-container');
  const colors = ['#FFFC00', '#FF5252', '#1eb980', '#8c52ff', '#ff9500'];
  
  for (let i = 0; i < 100; i++) {
    setTimeout(() => {
      const confetti = document.createElement('div');
      confetti.className = 'confetti';
      confetti.style.left = `${Math.random() * 100}%`;
      confetti.style.width = `${Math.random() * 10 + 5}px`;
      confetti.style.height = `${Math.random() * 10 + 5}px`;
      confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
      
      container.appendChild(confetti);
      
      // Remove after animation completes
      setTimeout(() => {
        confetti.remove();
      }, 4000);
    }, i * 40);
  }
}

function addSnapchatStyleAnimations() {
  const styleElement = document.createElement('style');
  styleElement.textContent = `
    @keyframes pulse-animation {
      0% { transform: scale(1); }
      50% { transform: scale(1.05); }
      100% { transform: scale(1); }
    }
    
    .pulse-animation {
      animation: pulse-animation 2s infinite;
    }
    
    .app-content, #game-intro, #game-screen, #game-over {
      transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
    }
    
    #game-screen, #game-over {
      opacity: 0;
      transform: translateY(20px);
    }
    
    .message-bubble {
      animation: fade-in 0.5s ease-out;
    }
    
    @keyframes fade-in {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
    }
    
    .option-btn {
      transition: transform 0.2s, background-color 0.3s;
    }
    
    .option-btn:active {
      transform: scale(0.98);
    }
    
    .option-btn.correct, .option-btn.incorrect {
      transition: background-color 0.5s ease;
    }
    
    @keyframes typing {
      from { width: 0 }
      to { width: 100% }
    }
    
    @keyframes blink-caret {
      from, to { border-color: transparent }
      50% { border-color: #FFFC00; }
    }
    
    .shake {
      animation: input-shake 0.5s linear;
    }
    
    @keyframes input-shake {
      0% { transform: translateX(0); }
      25% { transform: translateX(-5px); }
      50% { transform: translateX(5px); }
      75% { transform: translateX(-5px); }
      100% { transform: translateX(0); }
    }
    
    .icon-clicked {
      animation: icon-pop 0.3s ease;
    }
    
    @keyframes icon-pop {
      0% { transform: scale(1); }
      50% { transform: scale(1.3); }
      100% { transform: scale(1); }
    }
  `;
  document.head.appendChild(styleElement);
}

function loadScenarios() {
  return fetch('scenarios.json')
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      gameData.scenarios = data;
      console.log("Scenario's succesvol geladen:", gameData.scenarios.length);
    });
}
  
function loadScenario() {
  if (gameData.currentScenario >= gameData.scenarios.length) {
    endGame();
    return;
  }
  
  const scenario = gameData.scenarios[gameData.currentScenario];
  
  const groomerMessage = document.getElementById('groomer-message');
  groomerMessage.textContent = scenario.message;
  
  groomerMessage.style.opacity = '0';
  groomerMessage.style.transform = 'translateY(10px)';
  setTimeout(() => {
    groomerMessage.style.opacity = '1';
    groomerMessage.style.transform = 'translateY(0)';
  }, 300);
  
  const optionButtons = document.querySelectorAll('.option-btn');
  optionButtons.forEach((button, index) => {
    button.textContent = scenario.options[index].text;
    button.disabled = false;
    button.classList.remove('correct', 'incorrect');
    
    button.style.opacity = '0';
    button.style.transform = 'translateY(10px)';
    setTimeout(() => {
      button.style.opacity = '1';
      button.style.transform = 'translateY(0)';
    }, 500 + (index * 150));
  });
  
  document.getElementById('feedback-container').style.display = 'none';
  document.getElementById('next-scenario').style.display = 'none';
  
  document.getElementById('progress').textContent = `Scenario ${gameData.currentScenario + 1} van ${gameData.scenarios.length}`;
  document.getElementById('score').textContent = `Score: ${gameData.score}`;
}
  
function selectOption(optionIndex) {
  const scenario = gameData.scenarios[gameData.currentScenario];
  const selectedOption = scenario.options[optionIndex];
  const feedbackContainer = document.getElementById('feedback-container');
  const feedbackText = document.getElementById('feedback-text');
  
  const optionButtons = document.querySelectorAll('.option-btn');
  optionButtons.forEach(button => {
    button.disabled = true;
  });
  
  optionButtons[optionIndex].classList.add(selectedOption.correct ? 'correct' : 'incorrect');
    
  feedbackText.textContent = selectedOption.feedback;
  feedbackContainer.style.opacity = '0';
  feedbackContainer.style.display = 'block';
  setTimeout(() => {
    feedbackContainer.style.opacity = '1';
  }, 100);
  
  const prevScore = gameData.score;
  
  if (selectedOption.correct) {
    gameData.score += 10;
    const scoreDisplay = document.getElementById('score');
    scoreDisplay.classList.add('pulse-animation');
    setTimeout(() => {
      scoreDisplay.classList.remove('pulse-animation');
    }, 1000);
    
    // Add floating +10 points indicator
    const pointsIndicator = document.createElement('div');
    pointsIndicator.className = 'points-indicator';
    pointsIndicator.textContent = '+10';
    optionButtons[optionIndex].appendChild(pointsIndicator);
    setTimeout(() => {
      pointsIndicator.remove();
    }, 1500);
  } else {
    gameData.score -= 5;
    if (gameData.score < 0) gameData.score = 0;
    
    // Add floating -5 points indicator if score changed
    if (prevScore !== gameData.score) {
      const pointsIndicator = document.createElement('div');
      pointsIndicator.className = 'points-indicator negative';
      pointsIndicator.textContent = '-5';
      optionButtons[optionIndex].appendChild(pointsIndicator);
      setTimeout(() => {
        pointsIndicator.remove();
      }, 1500);
    }
  }
  
  // Update score with animation
  const scoreElement = document.getElementById('score');
  const currentDisplayedScore = parseInt(scoreElement.textContent.replace('Score: ', ''));
  
  // Animate score change
  animateScoreChange(currentDisplayedScore, gameData.score);
  
  const nextButton = document.getElementById('next-scenario');
  nextButton.style.opacity = '0';
  nextButton.style.display = 'block';
  setTimeout(() => {
    nextButton.style.opacity = '1';
    nextButton.style.transform = 'translateY(0)';
  }, 300);
  
  gameData.completedScenarios.push({
    scenario: gameData.currentScenario,
    selectedOption: optionIndex,
    correct: selectedOption.correct,
    score: gameData.score
  });
}

function animateScoreChange(fromScore, toScore, element = document.getElementById('score')) {
  const duration = 1000; // ms
  const stepTime = 20; // ms
  const steps = duration / stepTime;
  const scoreStep = (toScore - fromScore) / steps;
  let currentStep = 0;
  let currentScore = fromScore;
  
  const interval = setInterval(() => {
    currentStep++;
    currentScore += scoreStep;
    
    if (currentStep >= steps) {
      clearInterval(interval);
      currentScore = toScore; // Ensure we end at exact score
    }
    
    // Check if we're animating the main score or final score
    if (element.id === 'score') {
      element.textContent = `Score: ${Math.round(currentScore)}`;
    } else {
      element.textContent = `${Math.round(currentScore)}`;
    }
    
    if (currentStep >= steps) {
      // Animation complete
      if (toScore > fromScore) {
        element.classList.add('score-updated');
        setTimeout(() => {
          element.classList.remove('score-updated');
        }, 500);
      }
    }
  }, stepTime);
}
  
function nextScenario() {
  gameData.currentScenario++;
  
  const gameScreen = document.getElementById('game-screen');
  gameScreen.style.opacity = '0';
  gameScreen.style.transform = 'translateY(-20px)';
  setTimeout(() => {
    loadScenario();
    setTimeout(() => {
      gameScreen.style.opacity = '1';
      gameScreen.style.transform = 'translateY(0)';
    }, 100);
  }, 300);
}
  
function endGame() {
  const gameScreen = document.getElementById('game-screen');
  const gameOver = document.getElementById('game-over');
  
  gameScreen.style.opacity = '0';
  gameScreen.style.transform = 'translateY(-20px)';
  setTimeout(() => {
    gameScreen.style.display = 'none';
    gameOver.style.display = 'block';
    
    if (gameData.score > 50) {
      showConfetti();
    }
    
    setTimeout(() => {
      gameOver.style.opacity = '1';
      gameOver.style.transform = 'translateY(0)';
    }, 50);
  }, 500);
  
  document.getElementById('player-name-display').textContent = gameData.playerName;
  
  const finalScoreElement = document.getElementById('final-score');
  finalScoreElement.textContent = '0';
  setTimeout(() => {
    animateScoreChange(0, gameData.score, finalScoreElement);
  }, 800);
  
  addHighScore(gameData.playerName, gameData.score);
  displayHighScores();
}
  
function restartGame() {
  const gameOver = document.getElementById('game-over');
  const gameIntro = document.getElementById('game-intro');
  
  // Snapchat stijl overgang
  gameOver.style.opacity = '0';
  gameOver.style.transform = 'translateY(-20px)';
  setTimeout(() => {
    gameOver.style.display = 'none';
    gameIntro.style.display = 'block';
    document.getElementById('player-name').value = "";
    setTimeout(() => {
      gameIntro.style.opacity = '1';
      gameIntro.style.transform = 'translateY(0)';
    }, 50);
  }, 500);
}
  
// Highscore beheer
function addHighScore(name, score) {
  gameData.highScores.push({ name, score, date: new Date().toISOString() });
  
  gameData.highScores.sort((a, b) => b.score - a.score);
  
  if (gameData.highScores.length > 10) {
    gameData.highScores = gameData.highScores.slice(0, 10);
  }
  
  localStorage.setItem('safetyGameHighScores', JSON.stringify(gameData.highScores));
}
  
function loadHighScores() {
  const savedScores = localStorage.getItem('safetyGameHighScores');
  if (savedScores) {
    gameData.highScores = JSON.parse(savedScores);
  }
}
  
function displayHighScores() {
  const highScoresList = document.getElementById('high-scores-list');
  highScoresList.innerHTML = '';
  
  gameData.highScores.forEach((score, index) => {
    const listItem = document.createElement('li');
    listItem.textContent = `${index + 1}. ${score.name}: ${score.score} punten`;
    
    listItem.style.opacity = '0';
    highScoresList.appendChild(listItem);
    
    setTimeout(() => {
      listItem.style.opacity = '1';
      listItem.style.transition = 'opacity 0.3s ease-in-out';
    }, 100 + (index * 100));
  });
}
  
document.addEventListener('DOMContentLoaded', initGame);