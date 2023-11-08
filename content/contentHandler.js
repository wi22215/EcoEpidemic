
let overallContentIndex = 1; // Index für aktuellen Content
let levelIndex = 1; // Index für aktuelles Level

// Diese Variablen werden genutzt, um die Anzahl der Popups für jedes Level zu steuern
let level1ContentAnzahl = 4;
let level2ContentAnzahl = 8;
let level3ContentAnzahl = 12;
let level4ContentAnzahl = 17;
let level5ContentAnzahl = 21;

let popupwidth = window.innerWidth*0.7;
let popupheight = window.innerHeight*0.7;

// Delay zwischen den Popups
let popupdelay = 10; // in Sekunden

function getContent(key){
    if(mapAllContentsOrder.has(key)){
        let contentKey = mapAllContentsOrder.get(key);
        return mapAllContents.get(contentKey);
    }
}

function showContent(){
    let currentContent = getContent(overallContentIndex);
    setEnemySpeedToZero();

            if(currentContent instanceof ContentTemplate){
                createTextPopup(overallContentIndex, popupwidth, popupheight);
            } else if (currentContent instanceof QuizTemplate){
                showQuizPopup(overallContentIndex);
            } else if (currentContent instanceof VideoTemplate){
                createVideoPopup(overallContentIndex);
            }


}

function showNextContent(){
    let currentContent = getContent(overallContentIndex);
    //setEnemySpeedToZero();
    if(levelIndex===1){
        if(overallContentIndex<=level1ContentAnzahl){

            if(currentContent instanceof ContentTemplate){
                createTextPopupWithDelay(overallContentIndex, popupwidth, popupheight, popupdelay);
            } else if (currentContent instanceof QuizTemplate){
                showQuizPopupWithDelay(overallContentIndex, popupdelay);
            } else if (currentContent instanceof VideoTemplate){
                createVideoPopup(overallContentIndex);
            }

        }
    }

    if(levelIndex === 2){
        if(overallContentIndex<=level2ContentAnzahl){

            if(currentContent instanceof ContentTemplate){
                createTextPopupWithDelay(overallContentIndex, popupwidth, popupheight, popupdelay);
            } else if (currentContent instanceof QuizTemplate){
                showQuizPopupWithDelay(overallContentIndex, popupdelay);
            } else if (currentContent instanceof VideoTemplate){
                createVideoPopup(overallContentIndex);
            }

        }
    }

    if(levelIndex === 3){
        if(overallContentIndex<=level3ContentAnzahl){

            if(currentContent instanceof ContentTemplate){
                createTextPopupWithDelay(overallContentIndex, popupwidth, popupheight, popupdelay);
            } else if (currentContent instanceof QuizTemplate){
                showQuizPopupWithDelay(overallContentIndex, popupdelay);
            } else if (currentContent instanceof VideoTemplate){
                createVideoPopup(overallContentIndex);
            }

        }
    }
    if(levelIndex === 4){
        if(overallContentIndex<=level4ContentAnzahl){

            if(currentContent instanceof ContentTemplate){
                createTextPopupWithDelay(overallContentIndex, popupwidth, popupheight, popupdelay);
            } else if (currentContent instanceof QuizTemplate){
                showQuizPopupWithDelay(overallContentIndex, popupdelay);
            } else if (currentContent instanceof VideoTemplate){
                createVideoPopup(overallContentIndex);
            }

        }
    }

    if(levelIndex === 5){
        if(overallContentIndex<=level5ContentAnzahl){

            if(currentContent instanceof ContentTemplate){
                createTextPopupWithDelay(overallContentIndex, popupwidth, popupheight, popupdelay);
            } else if (currentContent instanceof QuizTemplate){
                showQuizPopupWithDelay(overallContentIndex, popupdelay);
            } else if (currentContent instanceof VideoTemplate){
                createVideoPopup(overallContentIndex);
            }

        }
    }

}


function setEnemySpeedToZero(){
    sideWaysSpeed = 0.0;
    blockedInput = true;
}

function setDefaultEnemySpeed(){
    sideWaysSpeed = defaultSpeed;
    blockedInput = false;
}
