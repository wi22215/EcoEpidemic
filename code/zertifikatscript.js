// JavaScript auf yourNewPage.html
window.onload = function() {
    var urlParams = new URLSearchParams(window.location.search);
    const playerName = urlParams.get('playerName');

    if(playerName != null) {
        // Verwenden Sie playerName wie gewünscht
        console.log("Willkommen, " + name + "!");
        document.getElementById("welcomeMessage").innerText = "Willkommen, " + playerName + "!";
    }

    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Hintergrundfarbe
    doc.setFillColor(255, 255, 255);

    // Überschrift des Zertifikats
    doc.setFontSize(30);
    doc.text("Zertifikat", 105, 40, { align: 'center' });

    // Begrüßungsnachricht
    doc.setFontSize(20);
    doc.text(`Herzlich Willkommen, ${name}!`, 105, 80, { align: 'center' });

    // PDF anzeigen
    doc.output("dataurlnewwindow");
};



