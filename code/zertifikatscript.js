
window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const playerName = urlParams.get('playerName');

    if(playerName != null) {
        console.log("Willkommen, " + playerName + "!");
        document.getElementById("welcomeMessage").innerText = "Glückwunsch, " + playerName + "!";
    }

    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();


    // Hintergrundfarbe
    doc.setFillColor(230, 230, 250); // Ein leichter lila Ton für den Hintergrund
    doc.rect(10, 10, 190, 277, 'F');  // Zeichnet ein Rechteck als Hintergrund

    // Rahmen
    doc.setLineWidth(3);
    doc.rect(20, 20, 170, 257);  // Zeichnet einen Rahmen um das Zertifikat

    // Überschrift des Zertifikats
    doc.setFont("helvetica");  // Schriftart ändern (abhängig von den unterstützten Schriftarten in jsPDF)
    doc.setFontSize(30);
    doc.setTextColor(50, 50, 150);  // Ein dunkler lila Ton für die Überschrift
    doc.text("Zertifikat", 105, 40, { align: 'center' });

    // Begrüßungsnachricht
    doc.setFontSize(20);
    doc.setTextColor(50, 50, 50);  // Eine dunklere Farbe für den Haupttext
    doc.text(`Glückwunsch, ${playerName}!`, 105, 80, { align: 'center' });

    // Platzhalter für den Haupttext
    doc.setFontSize(16);
    doc.text(
        "Urkunde der EcoEpidemic Meisterer\n" +
        "\n" +
        "Durch das Bezwingen des ultimativen Lernabenteuers \n"  +
        "mit atemberaubenden Quests und der  \n" +
        "verzwickten Rätsel, können wir feierlich verkünden:\n" +
        playerName + " ist nun offiziell zertifiziert, \n" +
        "in gutem Gewissen sein Wissen an die Welt weiterzugeben, \n" +
        "insbesondere zu den spannenden Themen:\n" +
        "- Klimawandel und Gesundheit\n" +
        "- Planetary Health (Ja, unser Planet hat auch Gesundheit! )\n" +
        "- Adaption und Mitigation (schwierige Worte, \n" +
        "aber du hast's drauf!)\n" +
        "- Und den mysteriösen neuen Infektionskrankheiten, \n" +
        "die durch den Klimawandel auf uns zukommen\n" +
        "\n" +
        "Mit diesem Zertifikat in der Tasche, bist du nun berechtigt, \n" +
        "das erlangte Wissen in alle Winde zu streuen, \n" +
        "Meinungen nachhaltig zu prägen \n" +
        "und im Namen unserer Erde für das Richtige einzutreten!\n" +
        "\n" +
        "Unterzeichnet von Code4You\n"
        , 105, 120, { align: 'center' });

    // PDF anzeigen
    doc.output("dataurlnewwindow");
};




