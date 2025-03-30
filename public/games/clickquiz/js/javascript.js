document.addEventListener("DOMContentLoaded", function () {
    let tijdOver = 5;
    let timer;
    let speelVeld = document.getElementById("game-area");
    let tijdWeergave = document.getElementById("time");
    let vraagDiv = document.getElementById("question");
    let quizVraag = document.getElementById("quiz-question");
    let antwoordenDiv = document.getElementById("answers");

    const vragen = [
        {
            question: "Wat is de veiligste manier om je wachtwoorden op te slaan?",
            answers: ["In een notitieboekje", "In een wachtwoordmanager", "In een tekstbestand op je computer"],
            correct: 1
        },
        {
            question: "Wat moet je doen als je een onbekend USB-stick vindt?",
            answers: ["Aansluiten op je computer om te controleren", "Weggooien", "Rapporteren aan de IT-afdeling"],
            correct: 2
        },
        {
            question: "Wat is een voorbeeld van tweefactorauthenticatie (2FA)?",
            answers: ["Een wachtwoord en een SMS-code", "Alleen een wachtwoord", "Een gebruikersnaam en een wachtwoord"],
            correct: 0
        },
        {
            question: "Wat is een phishing-aanval?",
            answers: ["Een aanval waarbij je computer wordt gehackt", "Een poging om gevoelige informatie te stelen via misleidende e-mails", "Een aanval op je netwerkverbinding"],
            correct: 1
        },
        {
            question: "Hoe herken je een veilige website?",
            answers: ["De URL begint met 'http'", "De URL begint met 'https' en er is een slotje zichtbaar", "De website heeft een professioneel ontwerp"],
            correct: 1
        },
        {
            question: "Wat is ransomware?",
            answers: ["Een type malware dat je bestanden versleutelt en losgeld vraagt", "Een virus dat je computer vertraagt", "Een programma dat je internetverkeer volgt"],
            correct: 0
        },
        {
            question: "Wat moet je doen als je een verdachte link ontvangt?",
            answers: ["Klikken om te controleren wat het is", "De link negeren en verwijderen", "De link delen met vrienden"],
            correct: 1
        },
        {
            question: "Hoe vaak moet je je wachtwoord wijzigen?",
            answers: ["Nooit", "Elke maand", "Wanneer je vermoedt dat het is gelekt"],
            correct: 2
        },
        {
            question: "Wat is het doel van een firewall?",
            answers: ["Je computer sneller maken", "Ongeautoriseerde toegang tot je netwerk blokkeren", "Je bestanden versleutelen"],
            correct: 1
        },
        {
            question: "Wat moet je doen als je een verdachte e-mail ontvangt van een bekende afzender?",
            answers: ["De e-mail openen en antwoorden", "De afzender bellen om te controleren", "De e-mail direct verwijderen"],
            correct: 1
        }
    ];

    // Maak een kopie van de vragenlijst
    let resterendeVragen = [...vragen];

    function startSpel() {
        speelVeld.innerHTML = "";
        let doelwit = document.createElement("div");
        doelwit.classList.add("target");
        doelwit.style.top = Math.random() * 250 + "px";
        doelwit.style.left = Math.random() * 250 + "px";
        speelVeld.appendChild(doelwit);
        
        timer = setInterval(() => {
            tijdOver--;
            tijdWeergave.innerText = tijdOver;
            if (tijdOver === 0) {
                clearInterval(timer);
                speelVeld.innerHTML = "❌ Tijd is om! Je hebt verloren.";
                setTimeout(startSpel, 2000); // Start het spel opnieuw na 2 seconden
            }
        }, 1000);
        
        doelwit.onclick = function () {
            clearInterval(timer);
            speelVeld.innerHTML = "✅ Je hebt op tijd geklikt! Beantwoord de vraag:";
            stelVraag();
        };
    }
    
    function stelVraag() {
        // Controleer of er nog vragen over zijn
        if (resterendeVragen.length === 0) {
            console.log("Alle vragen zijn gesteld. Lijst wordt opnieuw gevuld.");
            resterendeVragen = [...vragen]; // Vul de lijst opnieuw
        }

        // Kies een willekeurige vraag uit de resterende vragen
        let randomIndex = Math.floor(Math.random() * resterendeVragen.length);
        let vraag = resterendeVragen.splice(randomIndex, 1)[0]; // Verwijder de vraag direct uit de lijst

        console.log("Gestelde vraag:", vraag);

        // Toon de vraag en antwoorden
        quizVraag.innerText = vraag.question;
        antwoordenDiv.innerHTML = "";
        vraagDiv.style.display = "block";

        vraag.answers.forEach((antwoord, index) => {
            let knop = document.createElement("button");
            knop.innerText = antwoord;
            knop.onclick = function () {
                if (index === vraag.correct) {
                    alert("✅ Correct! Goed gedaan!");
                } else {
                    alert("❌ Fout! Het juiste antwoord was: " + vraag.answers[vraag.correct]);
                }
                vraagDiv.style.display = "none";
                tijdOver = 5;
                tijdWeergave.innerText = tijdOver;
                startSpel();
            };
            antwoordenDiv.appendChild(knop);
        });
    }
    
    startSpel();
});

