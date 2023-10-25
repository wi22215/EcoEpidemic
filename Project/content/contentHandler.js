
let overallContentIndex = 1;
let levelIndex = 1;

function getContent(key){
    if(mapAllContentsOrder.has(key)){
        let contentKey = mapAllContentsOrder.get(key);
        return mapAllContents.get(contentKey);
    }
}

function showContent(){
    let currentContent = getContent(overallContentIndex);

            if(currentContent instanceof ContentTemplate){
                createTextPopup(overallContentIndex, 600, 400);
            } else if (currentContent instanceof QuizTemplate){
                showQuizPopup(overallContentIndex);
            }






}

function showNextContent(){
    let currentContent = getContent(overallContentIndex);

    if(levelIndex===1){
        if(overallContentIndex<=6){

            if(currentContent instanceof ContentTemplate){
                createTextPopupWithDelay(overallContentIndex, 600, 400, 5);
            } else if (currentContent instanceof QuizTemplate){
                showQuizPopupWithDelay(overallContentIndex, 5);
            }

        }
    }

    if(levelIndex === 2){
        if(overallContentIndex<=12){

            if(currentContent instanceof ContentTemplate){
                createTextPopupWithDelay(overallContentIndex, 600, 400, 5);
            } else if (currentContent instanceof QuizTemplate){
                showQuizPopupWithDelay(overallContentIndex, 5);
            }

        }
    }

    if(levelIndex === 3){
        if(overallContentIndex<=18){

            if(currentContent instanceof ContentTemplate){
                createTextPopupWithDelay(overallContentIndex, 600, 400, 5);
            } else if (currentContent instanceof QuizTemplate){
                showQuizPopupWithDelay(overallContentIndex, 5);
            }

        }
    }
    if(levelIndex === 4){
        if(overallContentIndex<=24){

            if(currentContent instanceof ContentTemplate){
                createTextPopupWithDelay(overallContentIndex, 600, 400, 5);
            } else if (currentContent instanceof QuizTemplate){
                showQuizPopupWithDelay(overallContentIndex, 5);
            }

        }
    }

    if(levelIndex === 5){
        if(overallContentIndex<=26){

            if(currentContent instanceof ContentTemplate){
                createTextPopupWithDelay(overallContentIndex, 600, 400, 5);
            } else if (currentContent instanceof QuizTemplate){
                showQuizPopupWithDelay(overallContentIndex, 5);
            }

        }
    }

}


