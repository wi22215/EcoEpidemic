

let currentQuestionIndex = 1;
let currentQuizIndex = 1;
//let currentQuestionKey = "Frage 1";

//const mapOfQuiz = new Map();
//const mapQuizOrder = new Map();
/*
function initAllQuiz(){


  const question1 = new QuestionTemplate(
      "Was ist die Hauptstadt von Frankreich?",
      ["Berlin", "Madrid", "Paris", "Rom"],
      2,
      `
    <h2>Was ist die Hauptstadt von Frankreich?</h2>
    <input type="radio" name="answer" value="Paris"> Paris<br>
    <input type="radio" name="answer" value="Berlin"> Berlin<br>
    <input type="radio" name="answer" value="London"> London<br>
    <input type="radio" name="answer" value="Madrid"> Madrid<br>
    <button onclick="checkAnswer()">Absenden</button><br>
    <button style="display: none;" id="nextButton" onclick="showNextQuestion()">Nächste Frage</button>
    <div id="result"></div> <!-- Hier wird das Ergebnis angezeigt -->
  `
  );

  const question2 = new QuestionTemplate(
      "Welches Element hat das chemische Symbol 'H'?",
      ["Helium", "Kohlenstoff", "Sauerstoff", "Wasserstoff"],
      3,
      `
    <h2>Welches Element hat das ?</h2>
    <input type="radio" name="answer" value="Heli"> Paris<br>
    <input type="radio" name="answer" value="Berlin"> Berlin<br>
    <input type="radio" name="answer" value="London"> London<br>
    <input type="radio" name="answer" value="Madrid"> Madrid<br>
    <button onclick="checkAnswer()">Absenden</button><br>
    <button style="display: none;" id="nextButton" onclick="showNextQuestion()">Nächste Frage</button>
    <div id="result"></div> <!-- Hier wird das Ergebnis angezeigt -->
  `
  );

  const question3 = new QuestionTemplate(
      "Wie viele Kontinente gibt es auf der Erde?",
      ["5", "6", "7", "8"],
      2,
      `
    <h2>Was ist die Hauptstadt von Frankreich?</h2>
    <input type="radio" name="answer" value="Paris"> Paris<br>
    <input type="radio" name="answer" value="Berlin"> Berlin<br>
    <input type="radio" name="answer" value="London"> London<br>
    <input type="radio" name="answer" value="Madrid"> Madrid<br>
    <button onclick="checkAnswer()">Absenden</button><br>
    <button style="display: none;" id="nextButton" onclick="showNextQuestion()">Nächste Frage</button>
    <div id="result"></div> <!-- Hier wird das Ergebnis angezeigt -->
  `
  );

  const question4 = new QuestionTemplate(
      "Was ist die Hauptfarbe des Himmels an einem klaren Tag?",
      ["Rot", "Blau", "Grün", "Gelb"],
      1,
      `
    <h2>Was ist die Hauptstadt von Frankreich?</h2>
    <input type="radio" name="answer" value="Paris"> Paris<br>
    <input type="radio" name="answer" value="Berlin"> Berlin<br>
    <input type="radio" name="answer" value="London"> London<br>
    <input type="radio" name="answer" value="Madrid"> Madrid<br>
    <button onclick="checkAnswer()">Absenden</button><br>
    <button style="display: none;" id="nextButton" onclick="showNextQuestion()">Nächste Frage</button>
    <div id="result"></div> <!-- Hier wird das Ergebnis angezeigt -->
  `
  );

  const quiz1 = new QuizTemplate();
  quiz1.addQuestion(question1);
  quiz1.addQuestion(question2);
  quiz1.addQuestion(question3);
  quiz1.addQuestion(question4);

  mapOfQuiz.set("Quiz Ueberblick", quiz1);
//mapOfQuiz.set("Quiz Planetary Health", quiz2);
//mapOfQuiz.set("Quiz Adaption", quiz3);
//mapOfQuiz.set("Quiz Mitigation", quiz4);
//mapOfQuiz.set("Quiz Use Case", quiz5);

  mapQuizOrder.set(1, "Quiz Ueberblick");
  mapQuizOrder.set(2, "Quiz Planetary Health");
  mapQuizOrder.set(3, "Quiz Adaption");
  mapQuizOrder.set(4, "Quiz Mitigation");
  mapQuizOrder.set(5, "Quiz Use Case");
}
*/

function showQuizPopup(key) {
  //console.log("ShowQuizPopup kommt an");
  let overlay = createOverlay();
  let questionsAsHTML = getQuestionData(key);
  // todo: für jede question das popup erzeugen, wichtig: zum nächsten Popup darf erst wenn auf Nächste Frage geklickt wird
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

  if(mapOfQuiz.has(key)){

    /*
    // Gib den Inhalt von mapOfQuiz und seinen Objekten aus
    mapOfQuiz.forEach((quiz, key) => {
      console.log(`Schlüssel: ${key}`);
      console.log(quiz); // Gib das Quiz-Objekt aus

      // Um auf die Fragen eines Quiz zuzugreifen, kannst du auch hier eine Schleife verwenden
      quiz.questions.forEach((question, questionKey) => {
        console.log(`Frage Schlüssel: ${questionKey}`);
        console.log(question); // Gib das Frage-Objekt aus
      });
    });
  */

    const quiz = mapOfQuiz.get(key);
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
  if (currentQuestionIndex < questionsAsHTML.length) {
    // Es gibt weitere Fragen
    var questionHTML = questionsAsHTML[currentQuestionIndex-1];
    popupDiv.innerHTML = questionHTML;

    // Erstelle einen Button "Nächste Frage"
    var nextButton = document.createElement("button");
    nextButton.textContent = "Nächste Frage";
    nextButton.addEventListener("click", function () {
      currentQuestionIndex++;
      updatePopupContent(popupDiv, questionsAsHTML, overlay);
    });

    popupDiv.appendChild(nextButton);
  } else {
    // Es gibt keine weiteren Fragen, ändere den Button in "Abschließen"
    popupDiv.innerHTML = "Alle Fragen wurden beantwortet.";

    var finishButton = document.createElement("button");
    finishButton.textContent = "Fertig";
    finishButton.addEventListener("click", function () {
      document.body.removeChild(overlay);
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
  /*
  if (questionKey > 0 && questionKey <= currentQuiz.questions.length) {
    return currentQuiz.questions[questionKey];
  } else {
    return null; // Index ist ungültig
  }

   */
}

function getQuizByIndex(quizIndex){
  let quizName;
  if (quizIndex > 0 && quizIndex <= mapQuizOrder.size) {
    quizName = mapQuizOrder.get(quizIndex);
    return mapOfQuiz.get(quizName);
  }

  /*
  if (quizIndex > 0 && quizIndex <= mapOfQuiz.size) {
    return mapOfQuiz[quizIndex - 1];
  } else {
    return null; // Index ist ungültig
  }

   */
}

function getQuizByKey(key){
  if(mapOfQuiz.has(key)){
    return mapOfQuiz.get(key);
  } else {
    return "Ungültiger Quiz Key!"
  }
}