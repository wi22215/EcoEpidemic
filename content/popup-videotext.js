/**
Skript für die Erstellung von Video oder Text-Popups
**/

let currentContentIndex = 1; // Index der nur die Contents (keine Quiz) hochzählt, wird bisher nicht genutzt


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
    var closeButton = document.createElement("button");
    closeButton.innerText = "Weiter";
    closeButton.className = "button-weiter";
    closeButton.style.position = "relative";
    closeButton.style.bottom = "10px";
    closeButton.style.right = "10px";
    closeButton.style.float = "right";
    closeButton.style.padding = "10px";
    closeButton.style.border = "none";
    closeButton.style.cursor = "pointer";
    var style = document.createElement('style');
    // Füge CSS-Regeln zum <style>-Element hinzu
    style.type = 'text/css';
    style.innerHTML = `
    

    .button-weiter {
        appearance: none;
        background-color: #4D774E; 
        border: 1px solid rgba(27, 31, 35, .15);
        border-radius: 6px;
        box-shadow: rgba(27, 31, 35, .1) 0 1px 0;
        box-sizing: border-box;
        color: #fff;
        cursor: pointer;
        display: inline-block;
        font-family: -apple-system,system-ui,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji";
        font-size: 14px;
        font-weight: 600;
        line-height: 20px;
        padding: 6px 16px;
        position: relative;
        text-align: center;
        text-decoration: none;
        user-select: none;
        -webkit-user-select: none;
        touch-action: manipulation;
        vertical-align: middle;
        white-space: nowrap;
    }
    .button-weiter:focus:not(:focus-visible):not(.focus-visible) {
        box-shadow: none;
        outline: none;
    }

    .button-weiter:hover {
        background-color: #007A64;
    }
    .button-weiter:focus {
        box-shadow: rgba(46, 164, 79, .4) 0 0 0 3px;
        outline: none;
    }

    .button-weiter:disabled {
        background-color: #007A64;
        border-color: rgba(27, 31, 35, .1);
        color: rgba(255, 255, 255, .8);
        cursor: default;
    }
    
    .button-weiter:active {
        background-color: #007A64;
        box-shadow: rgba(20, 70, 32, .2) 0 1px 0 inset;
    }`
    ;
    // Füge das <style>-Element zum <head> hinzu
    document.getElementsByTagName('head')[0].appendChild(style);
    // Schließen-Button
    

    // Wenn Lerninhalt geschlossen wird...
    closeButton.addEventListener("click", function () {
        document.body.removeChild(overlay);
        currentContentIndex++;
        overallContentIndex++;
        setDefaultEnemySpeed();
        showNextContent();

    });

    // Close Button wird dem Text-Div hinzugefügt
    textDiv.appendChild(closeButton);
}
