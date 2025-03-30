const container = document.getElementById("cardloader")

const sampleCards = [{
    image: "./assets/nieuws 5.png",  
    info: "De site was de officiele NOS pagina, je kan dit artikel ook online vinden.",
    info1: "www.stedendriehoek.nl",
    nr: "1.",
    antwoord: "true",
    button: "Waar",
    button1: "Fake"}, 
{
    image: "./assets/fake 5.png", 
    info: "nos.com is niet van de nieuws site NOS, de juiste site zou nos.nl zijn.",
    info1: "www.nos.com",
    nr: "2.",
    antwoord: "false",
    button: "Waar",
    button1: "Fake"}, 
{
    image: "./assets/nieuws2.png", 
    info: "De site was de officiele NOS pagina, je kan dit artikel ook online vinden.",
    info1: "www.nos.nl",
    nr: "3.",
    antwoord: "true",
    button: "Waar",
    button1: "Fake"},
{    
    image: "./assets/nieuws1.png", 
    info: "De site was de officiele NOS pagina, je kan dit artikel ook online vinden.",
    info1: "www.nu.nl",
    nr: "4.",
    antwoord: "true",
    button: "Waar",
    button1: "Fake"},
{
    image: "./assets/fake 2.png", 
    info: "Deze webiste bestaat niet.",
    info1: "www.nieuwtjesonline.nl",
    nr: "5.",
    antwoord: "false",
    button: "Waar",
    button1: "Fake"},
{
    image: "./assets/nieuws 4.png", 
    info: "De site was de officiele NOS pagina, je kan dit artikel ook online vinden.",
    info1: "www.nos.nl",
    nr: "6.",
    antwoord: "true",
    button: "Waar",
    button1: "Fake"},
{
    image: "./assets/nieuws 3.png", 
    info: "Bron was de officiele NOS pagina, je kan dit artikel ook online vinden.",
    info1: "www.nos.nl",
    nr: "7.",
    antwoord: "true",
    button: "Waar",
    button1: "Fake"},
{
    image: "./assets/fake 1.png", 
    info: "De '.ru' afkorting komt van rusland, niet van nederland, het is dus niet de echte nu.nl.",
    info1: "www.nu.ru",
    nr: "8.",
    antwoord: "false",
    button: "Waar",
    button1: "Fake"},
{
    image: "./assets/fake 3.png", 
    info: "Deze webiste bestaat niet.",
    info1: "www.allesnieuws.com",
    nr: "9.",
    antwoord: "false",
    button: "Waar",
    button1: "Fake"},
{
    image: "./assets/fake 4.png", 
    info: "nos.com is niet van de nieuws site NOS, de juiste site zou nos.nl zijn.",
    info1: "www.nos.com",
    nr: "10.",
    antwoord: "false",
    button: "Waar",
    button1: "Fake"
}]

var count = 0;
var points = 0; 

function loadCards() {
    container.innerHTML = '';
    const result = sampleCards[count];
  
    const card = document.createElement("div");
    card.classList = "card-body";

    const content = `
        <div class="card">
            <div class="card-body">
                <h1>Is dit fake news, of is het waar?</h1>
                <p>${result.nr}</p>
                <img src="${result.image}" class="cardImage" alt="Fake news Image">
                <p>${result.info1}</p>
                <button class="true">${result.button}</button>
                <button class="false">${result.button1}</button>
            </div>
        </div>
    `;

    card.innerHTML = content;
    container.appendChild(card);

    const trueButton = card.querySelector(".true");
    const falseButton = card.querySelector(".false");

    trueButton.addEventListener("click", function() {
        checkAnswer("true");
    });
    falseButton.addEventListener("click", function() {
        checkAnswer("false");
    });
}

function checkAnswer(antwoord) {
    const gantwoord = sampleCards[count].antwoord;
    const result = sampleCards[count];
    
    if (antwoord === gantwoord) {
      points++;
      alert("Goed! Punten: " + points);
    } else {
        alert("Helaas. " + result.info + " Punten: " + points);
    }
  
    count++;
    if (count < sampleCards.length) {
      loadCards();
    } else {
      alert("Game Over! You scored " + points + " points.");
    }
}
  
loadCards();

function toggleInfo(button) {
    const itoggle = button.nextElementSibling;
    if (itoggle.style.display === "block") {
        itoggle.style.display = "none";
    } else {
        itoggle.style.display = "block";
    }
}