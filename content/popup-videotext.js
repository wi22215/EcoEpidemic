/**
Skript für die Erstellung von Video oder Text-Popups
**/

let currentContentIndex = 1;


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
    let videoKey = mapAllContentsOrder.get(id);
    video.src = mapAllContents.get(videoKey)._path;
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
            overallContentIndex++;
            setDefaultEnemySpeed();
            showNextContent();
        });
    });
}

// Methode, um ein Video-Popup per Timer zu triggern
function createVideoPopupWithDelay(id, delayInSeconds, width, height, ){
    setTimeout(function () {
        createVideoPopup(id, width, height);
    }, delayInSeconds * 1000);
}

function createTextDiv(overlay, width, height) {
    // HTML-Div für den Text
    var textDiv = document.createElement("div");
    textDiv.style.width = width + "px";
    textDiv.style.height = height + "px";
    textDiv.style.position = "relative";
    textDiv.style.backgroundColor = "white";
    textDiv.style.overflowY = "auto"; // Scrollbar
    textDiv.style.padding = "20px";


    return textDiv;
}

// Methode, um ein Text-Popup zu erzeugen
function createTextPopup(key, width, height) {

    let overlay = createOverlay();
    let textDiv = createTextDiv(overlay, width, height);

    // HTML-Text dem Div hinzufügen
    let currentContentKey = mapAllContentsOrder.get(key);
    if(mapAllContents.has(currentContentKey)){

        let content = mapAllContents.get(currentContentKey);
        //let contentWithCSS = content.generateHTMLByCSSPath();
        //let contentWithPureCSS = content.generateHTML();
        let htmlContent = content._htmlContent;
        textDiv.innerHTML = htmlContent;
    }

    addCloseButton(textDiv);

    // Dann auch dem Overlay
    overlay.appendChild(textDiv);

    // Zuletzt dann das Overlay dem Body hinzugefügt
    document.body.appendChild(overlay);


}

function createTextPopupWithDelay(key, width, height, delayInSeconds){
    setTimeout(function () {
        createTextPopup(key, width, height);
        setEnemySpeedToZero();
    }, delayInSeconds * 1000);
}


function addCloseButton(textDiv){
    // Schließen-Button erzeugen
    var closeButton = document.createElement("button");
    closeButton.innerText = "Weiter";
    closeButton.style.position = "relative";
    closeButton.style.bottom = "10px";
    closeButton.style.right = "10px";
    closeButton.style.float = "right";
    closeButton.style.padding = "10px";
    closeButton.style.backgroundColor = "#ccc";
    closeButton.style.border = "none";
    closeButton.style.cursor = "pointer";
    

    // Lerninhalt kann per Schließen-Button unten rechts geschlossen werden
    closeButton.addEventListener("click", function () {
        document.body.removeChild(overlay);
        currentContentIndex++;
        overallContentIndex++;
        setDefaultEnemySpeed();
        showNextContent();

        /*
        if(currentContentIndex<4)
        createTextPopupWithDelay(currentContentIndex, 600, 400, 10);
         */
        /*
        switch(overallContentIndex){
            case 2: showQuizPopup1WithDelay(5);
            case 3: showUeberblickContent2WithDelay(5);
            //case 4: showQuizPopup2WithDelay(5);
        }
        */
    });

    // Close Button wird dem Text-Div hinzugefügt
    textDiv.appendChild(closeButton);
}




function showLevel1Content(){
    createTextPopup("Ueberblick Content 1", 600, 400);
}

function showQuizPopup1WithDelay(delayInSeconds) {
    setTimeout(function () {
        showQuizPopup("Quiz Ueberblick 1");
    }, delayInSeconds * 1000);

}

function showQuizPopup2WithDelay(delayInSeconds) {
    setTimeout(function () {
        showQuizPopup("Quiz Ueberblick 2");
    }, delayInSeconds * 1000);

}



function showUeberblickContent2WithDelay(delayInSeconds){
    setTimeout(function () {
        createTextPopup("Ueberblick Content 2")
    }, delayInSeconds * 1000);
}