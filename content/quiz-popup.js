
let currentQuestionIndex = 1;
let currentQuizIndex = 1;

function showQuizPopup(key) {

  let overlay = createOverlay();
  let questionsAsHTML = getQuestionData(key);
  let popupDiv = createPopupDiv();
  updatePopupContent(popupDiv, questionsAsHTML, overlay);

  // Das Popup-Element zum Overlay hinzufügen
  overlay.appendChild(popupDiv);

  // Das Overlay zum Body hinzufügen
  document.body.appendChild(overlay);


}

function createOverlay(){
  var overlay = document.createElement("div");
  overlay.id = "overlay";
  overlay.className = "overlay"; // Klasse hinzufügen, um das Overlay leichter zu entfernen
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

  return overlay;
}

function getQuestionData(key){

  if(mapAllContentsOrder.has(key)){

    const quiz = getContent(key);
    const mapOfQuestions = quiz.questions;
    const htmlContentList = [];

    mapOfQuestions.forEach((question) => {
      htmlContentList.push(question.htmlContent);
    });
    return htmlContentList;


  } else {
    return "Kein Quiz mit dem Key gefunden";
  }

}

function createPopupDiv(){
  // Den Inhalt des Popups erstellen
  var popupContent = document.createElement("div");
  popupContent.style.backgroundColor = "#fff";
  popupContent.style.padding = "20px";
  popupContent.style.borderRadius = "5px";

  return popupContent;
}

function updatePopupContent(popupDiv, questionsAsHTML, overlay) {
  if (currentQuestionIndex <= questionsAsHTML.length) {
    // Es gibt weitere Fragen
    var questionHTML = questionsAsHTML[currentQuestionIndex-1];
    popupDiv.innerHTML = questionHTML;

    // Erstelle einen Button "Nächste Frage"
    var nextButton = document.createElement("button");
    nextButton.textContent = "N\u00e4chste Frage";
    nextButton.className = "nextButtonClass";
    var style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = `
    

    .nextButtonClass {
      appearance: none;
      background-color: #93C5CC;
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
    .nextButtonClass:focus:not(:focus-visible):not(.focus-visible) {
      box-shadow: none;
      outline: none;
    }

    .nextButtonClass:hover {
      background-color: #6D9EA5;
    }
    .nextButtonClass:focus {
      box-shadow: rgba(46, 164, 79, .4) 0 0 0 3px;
      outline: none;
    }

    .nextButtonClass:disabled {
      background-color: #6D9EA5;
      border-color: rgba(27, 31, 35, .1);
      color: rgba(255, 255, 255, .8);
      cursor: default;
    }
    
    .nextButtonClass:active {
      background-color: #6D9EA5;
      box-shadow: rgba(20, 70, 32, .2) 0 1px 0 inset;
    }`
    ;
    // Füge das <style>-Element zum <head> hinzu
    document.getElementsByTagName('head')[0].appendChild(style);
    nextButton.disabled = true;
    nextButton.addEventListener("click", function () {
      currentQuestionIndex++;
      updatePopupContent(popupDiv, questionsAsHTML, overlay);
    });

    popupDiv.appendChild(nextButton);
  } else {
    // Es gibt keine weiteren Fragen, ändere den Button in "Abschließen"
    popupDiv.innerHTML = "<span style=\"font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;font-size:2.2em; color:#2E598C;\"><b>Du hast alle Fragen beantwortet!</b></span> <br> <br>";
    // Erstelle ein <style>-Element
    var style = document.createElement('style');
    // Füge CSS-Regeln zum <style>-Element hinzu
    style.type = 'text/css';
    style.innerHTML = `
    

    .button-finish {
      appearance: none;
      background-color: #2ea44f;
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
    .button-finish:focus:not(:focus-visible):not(.focus-visible) {
      box-shadow: none;
      outline: none;
    }

    .button-finish:hover {
      background-color: #6D9EA5;
    }
    .button-finish:focus {
      box-shadow: rgba(46, 164, 79, .4) 0 0 0 3px;
      outline: none;
    }

    .button-finish:disabled {
      background-color: #6D9EA5;
      border-color: rgba(27, 31, 35, .1);
      color: rgba(255, 255, 255, .8);
      cursor: default;
    }
    
    .button-finish:active {
      background-color: #6D9EA5;
      box-shadow: rgba(20, 70, 32, .2) 0 1px 0 inset;
    }`
    ;
    // Füge das <style>-Element zum <head> hinzu
    document.getElementsByTagName('head')[0].appendChild(style);

    var finishButton = document.createElement("button");
    finishButton.textContent = "Fertig";
    finishButton.className = "button-finish";
    finishButton.addEventListener("click", function () {
      document.body.removeChild(overlay);
      currentQuestionIndex = 1;
      overallContentIndex++;
      currentQuizIndex++;
      setDefaultEnemySpeed();
      showNextContent();
    });

    popupDiv.appendChild(finishButton);
  }
}





function checkAnswer() {
  const answerButton = document.querySelector('input[name="answer"]:checked');
  const answer = answerButton.value;
  

  //let currentQuiz = getQuizByIndex(currentQuizIndex);
  let currentQuiz = getQuizByIndex(currentQuizIndex);
  let currentQuestion = getQuestionByKey(currentQuiz, currentQuestionIndex);

  if(answer === currentQuestion.correctAnswer){
    showAnswer(currentQuestion, true);
  } else {
    showAnswer(currentQuestion, false);
  }

  // Logik für Deaktivieren der Absende und Nächste Frage Button
  const nextQuestionButton = document.querySelector(".nextButtonClass");
  nextQuestionButton.disabled = false;
  const absendenButton = document.querySelector(".AbsendenButtonClass");
  absendenButton.disabled = true;

}

function showAnswer(currentQuestion, correct){
  var resultDiv = document.getElementById("result");
  if(correct === true){
    resultDiv.textContent = "Richtig!"
    resultDiv.style.color = "green";
  } else {
    resultDiv.textContent = "Falsch! Die richtige Antwort ist: " + currentQuestion.correctAnswer;
    resultDiv.style.color = "red";
  }


}

function showNextQuestion(){
  currentQuestionIndex++;
  document.getElementById("nextButton").style.display = "none";
}


function getQuestionByKey(currentQuiz, currentQuestionIndex){
  let allQuestionsOfQuiz = currentQuiz.questions;
  let currentQuestion;
  if(allQuestionsOfQuiz.has(currentQuestionIndex)){
    currentQuestion = allQuestionsOfQuiz.get(currentQuestionIndex);
    return currentQuestion;
  } else {
    return "Ungültiger Question Key bei getQuestionByKey()!"
  }

}

function getQuizByIndex(quizIndex){
  let quizName;
  if (quizIndex > 0 && quizIndex <= mapQuizOrder.size) {
    quizName = mapQuizOrder.get(quizIndex);
    return mapOfQuiz.get(quizName);
  }
}

function getQuizByKey(key){
  if(mapOfQuiz.has(key)){
    return mapOfQuiz.get(key);
  } else {
    return "Ungültiger Quiz Key!"
  }
}


function showQuizPopupWithDelay(key, delayInSeconds){
  setTimeout(function () {
    showQuizPopup(key);
    setEnemySpeedToZero();
  }, delayInSeconds * 1000);
}

