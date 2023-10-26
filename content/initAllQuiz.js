

const mapOfQuiz = new Map();
const mapQuizOrder = new Map();


const question1 = new QuestionTemplate(
    "Was ist die Hauptstadt von Frankreich?",
    ["Berlin", "Madrid", "Paris", "Rom"],
    "Paris",
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
    "Welches Element hat das chemische Symbol H?",
    ["Helium", "Kohlenstoff", "Sauerstoff", "Wasserstoff"],
    "Wasserstoff",
    `
    <h2>Welches Element hat das chemische Symbol H?</h2>
    <input type="radio" name="answer" value="f"> f<br>
    <input type="radio" name="answer" value="f"> f<br>
    <input type="radio" name="answer" value="f"> f<br>
    <input type="radio" name="answer" value="Wasserstoff"> Wasserstoff<br>
    <button onclick="checkAnswer()">Absenden</button><br>
    <button style="display: none;" id="nextButton" onclick="showNextQuestion()">Nächste Frage</button>
    <div id="result"></div> <!-- Hier wird das Ergebnis angezeigt -->
  `
);

const question3 = new QuestionTemplate(
    "Wie viele Kontinente gibt es auf der Erde?",
    ["5", "6", "7", "8"],
    "7",
    `
    <h2>Wie viele Kontinente gibt es auf der Erde?</h2>
    <input type="radio" name="answer" value="5"> 5<br>
    <input type="radio" name="answer" value="6"> 6<br>
    <input type="radio" name="answer" value="7"> 7<br>
    <input type="radio" name="answer" value="8"> 8<br>
    <button onclick="checkAnswer()">Absenden</button><br>
    <button style="display: none;" id="nextButton" onclick="showNextQuestion()">Nächste Frage</button>
    <div id="result"></div> <!-- Hier wird das Ergebnis angezeigt -->
  `
);

const question4 = new QuestionTemplate(
    "Was ist die Hauptfarbe des Himmels an einem klaren Tag?",
    ["Rot", "Blau", "Grün", "Gelb"],
    "Blau",
    `
    <h2>Was ist die Hauptfarbe des Himmels an einem klaren Tag?</h2>
    <input type="radio" name="answer" value="f"> Paris<br>
    <input type="radio" name="answer" value="Blau"> Berlin<br>
    <input type="radio" name="answer" value="f"> London<br>
    <input type="radio" name="answer" value="f"> Madrid<br>
    <button onclick="checkAnswer()">Absenden</button><br>
    <button style="display: none;" id="nextButton" onclick="showNextQuestion()">Nächste Frage</button>
    <div id="result"></div> <!-- Hier wird das Ergebnis angezeigt -->
  `
);

const quiz1 = new QuizTemplate();
quiz1.addQuestion(1 ,question1);
quiz1.addQuestion(2 ,question2);
quiz1.addQuestion(3, question3);
quiz1.addQuestion(4 ,question4);

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

/*
// Exportiere die Maps
export { mapOfQuiz, mapQuizOrder };
*/