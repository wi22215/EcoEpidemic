
let overallContentIndex = 1;
let levelIndex = 1;
let level1ContentAnzahl = 6;
let level2ContentAnzahl = 12;
let level3ContentAnzahl = 18;
let level4ContentAnzahl = 24;
let level5ContentAnzahl = 27;


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
                createTextPopup(overallContentIndex, 600, 400);
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
                createTextPopupWithDelay(overallContentIndex, 600, 400, 10);
            } else if (currentContent instanceof QuizTemplate){
                showQuizPopupWithDelay(overallContentIndex, 10);
            } else if (currentContent instanceof VideoTemplate){
                createVideoPopup(overallContentIndex);
            }

        }
    }

    if(levelIndex === 2){
        if(overallContentIndex<=level2ContentAnzahl){

            if(currentContent instanceof ContentTemplate){
                createTextPopupWithDelay(overallContentIndex, 600, 400, 10);
            } else if (currentContent instanceof QuizTemplate){
                showQuizPopupWithDelay(overallContentIndex, 10);
            } else if (currentContent instanceof VideoTemplate){
                createVideoPopup(overallContentIndex);
            }

        }
    }

    if(levelIndex === 3){
        if(overallContentIndex<=level3ContentAnzahl){

            if(currentContent instanceof ContentTemplate){
                createTextPopupWithDelay(overallContentIndex, 600, 400, 10);
            } else if (currentContent instanceof QuizTemplate){
                showQuizPopupWithDelay(overallContentIndex, 10);
            } else if (currentContent instanceof VideoTemplate){
                createVideoPopup(overallContentIndex);
            }

        }
    }
    if(levelIndex === 4){
        if(overallContentIndex<=level4ContentAnzahl){

            if(currentContent instanceof ContentTemplate){
                createTextPopupWithDelay(overallContentIndex, 600, 400, 10);
            } else if (currentContent instanceof QuizTemplate){
                showQuizPopupWithDelay(overallContentIndex, 10);
            } else if (currentContent instanceof VideoTemplate){
                createVideoPopup(overallContentIndex);
            }

        }
    }

    if(levelIndex === 5){
        if(overallContentIndex<=level5ContentAnzahl){

            if(currentContent instanceof ContentTemplate){
                createTextPopupWithDelay(overallContentIndex, 600, 400, 10);
            } else if (currentContent instanceof QuizTemplate){
                showQuizPopupWithDelay(overallContentIndex, 10);
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
