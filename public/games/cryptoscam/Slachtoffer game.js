document
  .getElementById("victim-app")
  .addEventListener("click", startVictimGame);

const messages = [
  {
    text: "Gefeliciteerd! Je hebt 1 BTC gewonnen! Klik hier om te claimen!",
    scam: true,
  },
  {
    text: "Een onbekende heeft je 0.5 ETH gestuurd. Open je wallet om te bevestigen!",
    scam: true,
  },
  {
    text: "Uw bank vraagt om een verificatie. Klik hier om in te loggen!",
    scam: true,
  },
  {
    text: "Hey, ik ben een investeerder! Ik kan je helpen je geld te verdubbelen!",
    scam: true,
  },
  {
    text: "Je vriend heeft je 50 USDT gestuurd. Open je wallet om te controleren!",
    scam: false,
  },
  {
    text: "Beveiligingswaarschuwing! Iemand probeert in te loggen op je account. Verifieer nu!",
    scam: true,
  },
  { text: "Je salaris is ontvangen! Bekijk je accountoverzicht.", scam: false },
];

let score = 0;

function startVictimGame() {
  score = 0;
  showMessage();
}

function showMessage() {
  const message = messages[Math.floor(Math.random() * messages.length)];
  const resultText = document.getElementById("result-text");

  resultText.innerHTML = message.text;

  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = `<p>${message.text}</p>
    <button onclick="handleChoice(true, ${message.scam})">Accepteren</button>
    <button onclick="handleChoice(false, ${message.scam})">Negeren</button>`;
}

function handleChoice(chosenAccept, isScam) {
  if (chosenAccept && isScam) {
    document.getElementById("result-text").innerHTML =
      "Je bent opgelicht! Game over.";
  } else if (!chosenAccept && isScam) {
    score++;
    document.getElementById("result-text").innerHTML =
      "Goed gedaan! Dit was een scam.";
    setTimeout(showMessage, 1500);
  } else if (chosenAccept && !isScam) {
    score++;
    document.getElementById("result-text").innerHTML =
      "Alles is in orde! Dit was geen scam.";
    setTimeout(showMessage, 1500);
  } else {
    document.getElementById("result-text").innerHTML =
      "Je hebt een legitieme transactie genegeerd! Oppassen!";
    setTimeout(showMessage, 1500);
  }
}

