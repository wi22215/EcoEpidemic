

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
    <div id="result"></div>
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

const quiz1 = new QuizTemplate("Quiz Ueberblick 1");
quiz1.addQuestion(1 ,question1);
quiz1.addQuestion(2 ,question2);
quiz1.addQuestion(3, question3);
quiz1.addQuestion(4 ,question4);

mapOfQuiz.set("Quiz Ueberblick 1", quiz1);
//mapOfQuiz.set("Quiz Ueberblick 2", quiz2);
//mapOfQuiz.set("Quiz Ueberblick 3", quiz3);
//mapOfQuiz.set("Quiz Planetary Health 1", quiz4);
//mapOfQuiz.set("Quiz Planetary Health 2", quiz5);
//mapOfQuiz.set("Quiz Planetary Health 3", quiz6);
//mapOfQuiz.set("Quiz Adaption 1", quiz7);
//mapOfQuiz.set("Quiz Adaption 2", quiz8);
//mapOfQuiz.set("Quiz Adaption 3", quiz9);
//mapOfQuiz.set("Quiz Mitigation 1", quiz10);
//mapOfQuiz.set("Quiz Mitigation 2", quiz11);
//mapOfQuiz.set("Quiz Mitigation 3", quiz12);
//mapOfQuiz.set("Quiz Use Case", quiz13);


mapQuizOrder.set(1, "Quiz Ueberblick 1");
mapQuizOrder.set(2, "Quiz Ueberblick 2");
mapQuizOrder.set(3, "Quiz Ueberblick 3");
mapQuizOrder.set(4, "Quiz Planetary Health 1");
mapQuizOrder.set(5, "Quiz Planetary Health 2");
mapQuizOrder.set(6, "Quiz Planetary Health 3");
mapQuizOrder.set(7, "Quiz Adaption 1");
mapQuizOrder.set(8, "Quiz Adaption 2");
mapQuizOrder.set(9, "Quiz Adaption 3");
mapQuizOrder.set(10, "Quiz Mitigation 1");
mapQuizOrder.set(11, "Quiz Mitigation 2");
mapQuizOrder.set(12, "Quiz Mitigation 3");
mapQuizOrder.set(13, "Quiz Use Case");
