/**
Skript für die Erstellung von Video oder Text-Popups
**/



/**
 Methode, um die Datei-Pfade der Level-Lerninhalte zu definieren
**/
function getVideoURL(id){
    // Die ID muss dem LevelCounter entsprechen
    switch(id){
        case 1: return "videos/nature.mp4"
        case 2: return "test"
        case 3: return "test"
    }
}
/**
 Methode, um ein Video-Popup zu erstellen
**/
function createVideoPopup(id, width, height) {
    // Hier wird das HTML-Div für den Overlay, also den Popup, erstellt
    var overlay = document.createElement("div");
    overlay.style.position = "fixed";
    overlay.style.top = "0";
    overlay.style.left = "0";
    overlay.style.width = "100%";
    overlay.style.height = "100%";
    overlay.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
    overlay.style.display = "flex";
    overlay.style.alignItems = "center";
    overlay.style.justifyContent = "center";
    overlay.style.zIndex = "9999";

    // Hier wird ein HTML-Div für das Video selber erstellt
    var videoDiv = document.createElement("div");
    videoDiv.style.width = width + "px";
    videoDiv.style.height = height + "px";
    videoDiv.style.position = "relative";

    // Hier wird das Video in HTML erstellt und abgespielt
    var video = document.createElement("video");
    video.src = getVideoURL(id);
    video.controls = true;
    video.style.width = "100%";
    video.style.height = "100%";
    video.play();

    // Video wird dem HTML-Div hinzugefügt
    videoDiv.appendChild(video);

    // Das komplette Div wird dann dem Overlay-Div hinzugefügt
    overlay.appendChild(videoDiv);

    // Und dann noch dem HTML-Body
    document.body.appendChild(overlay);

    // Methode, um abzusichern, dass das Video fertig geschaut wurde, bevor es weggeklickt werden kann
    video.addEventListener("ended", function () {
        overlay.addEventListener("click", function () {
            document.body.removeChild(overlay);
            //createVideoPopupWithDelay(1, 10); // Hier wird ein Timer für den nächsten Lerninhalt getriggert
        });
    });
}

// Methode, um ein Video-Popup per Timer zu triggern
function createVideoPopupWithDelay(id, delayInSeconds, width, height, ){
    setTimeout(function () {
        createVideoPopup(id, width, height);
    }, delayInSeconds * 1000);
}

// Methode, um ein Text-Popup zu erzeugen
function createTextPopup(textHtml, width, height) {
    // Popup als HTML-Div wird erzeugt
    var overlay = document.createElement("div");
    overlay.style.position = "fixed";
    overlay.style.top = "0";
    overlay.style.left = "0";
    overlay.style.width = "100%";
    overlay.style.height = "100%";
    overlay.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
    overlay.style.display = "flex";
    overlay.style.alignItems = "center";
    overlay.style.justifyContent = "center";
    overlay.style.zIndex = "9999";

    // HTML-Div für den Text
    var textDiv = document.createElement("div");
    textDiv.style.width = width + "px";
    textDiv.style.height = height + "px";
    textDiv.style.position = "relative";
    textDiv.style.backgroundColor = "white";
    textDiv.style.overflowY = "auto"; // Scrollbar
    textDiv.style.padding = "20px";

    // HTML-Text dem Div hinzufügen
    textDiv.innerHTML = textHtml;

    // Dann auch dem Overlay
    overlay.appendChild(textDiv);

    // Schließen-Button erzeugen
    var closeButton = document.createElement("button");
    closeButton.innerText = "Weiter";
    closeButton.style.position = "absolute";
    closeButton.style.bottom = "10px";
    closeButton.style.right = "10px";
    closeButton.style.padding = "10px";
    closeButton.style.backgroundColor = "#ccc";
    closeButton.style.border = "none";
    closeButton.style.cursor = "pointer";

    // Lerninhalt kann per Schließen-Button unten rechts geschlossen werden
    closeButton.addEventListener("click", function () {
        document.body.removeChild(overlay);
    });

    // Close Button wird dem Text-Div hinzugefügt
    textDiv.appendChild(closeButton);

    // Zuletzt dann das Overlay dem Body hinzugefügt
    document.body.appendChild(overlay);
}