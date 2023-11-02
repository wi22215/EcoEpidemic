

const mapOfQuiz = new Map();
const mapQuizOrder = new Map();

//------------------------------------- QUESTIONS ---------------------------------//

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
    <button class="AbsendenButtonClass" onclick="checkAnswer()">Absenden</button><br>
    <button style="display: none;"  onclick="showNextQuestion()">N&auml;chste Frage</button>
    <div id="result"></div>
  `
);

const question2 = new QuestionTemplate(
    "Welches Element hat das chemische Symbol H?",
    ["Helium", "Kohlenstoff", "Sauerstoff", "Wasserstoff"],
    "Wasserstoff",
    `
    <h2>Welches Element hat das chemische Symbol H?</h2>
    <input type="radio" name="answer" value="Helium"> Helium<br>
    <input type="radio" name="answer" value="Kohlenstoff"> Kohlenstoff<br>
    <input type="radio" name="answer" value="Sauerstoff"> Sauerstoff<br>
    <input type="radio" name="answer" value="Wasserstoff"> Wasserstoff<br>
    <button class="AbsendenButtonClass" onclick="checkAnswer()">Absenden</button><br>
    <button style="display: none;"  onclick="showNextQuestion()">N&auml;chste Frage</button>
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
    <button class="AbsendenButtonClass" onclick="checkAnswer()">Absenden</button><br>
    <button style="display: none;"  onclick="showNextQuestion()">N&auml;chste Frage</button>
    <div id="result"></div> <!-- Hier wird das Ergebnis angezeigt -->
  `
);

const question4 = new QuestionTemplate(
    "Was ist die Hauptfarbe des Himmels an einem klaren Tag?",
    ["Rot", "Blau", "Gruen", "Gelb"],
    "Blau",
    `
    <h2>Was ist die Hauptfarbe des Himmels an einem klaren Tag?</h2>
    <input type="radio" name="answer" value="Rot"> Rot<br>
    <input type="radio" name="answer" value="Blau"> Blau<br>
    <input type="radio" name="answer" value="Gruen"> Gr&uuml;n<br>
    <input type="radio" name="answer" value="Gelb"> Gelb<br>
    <button class="AbsendenButtonClass" onclick="checkAnswer()">Absenden</button><br>
    <button style="display: none;"  onclick="showNextQuestion()">N&auml;chste Frage</button>
    <div id="result"></div> <!-- Hier wird das Ergebnis angezeigt -->
  `
);

const question5 = new QuestionTemplate(
    "Was ist die Hauptstadt von Frankreich?",
    ["Berlin", "Madrid", "Paris", "Rom"],
    "Paris",
    `
    <h2>Was ist die Hauptstadt von Frankreich?</h2>
    <input type="radio" name="answer" value="Paris"> Paris<br>
    <input type="radio" name="answer" value="Berlin"> Berlin<br>
    <input type="radio" name="answer" value="London"> London<br>
    <input type="radio" name="answer" value="Madrid"> Madrid<br>
    <button class="AbsendenButtonClass" onclick="checkAnswer()">Absenden</button><br>
    <button style="display: none;"  onclick="showNextQuestion()">N&auml;chste Frage</button>
    <div id="result"></div>
  `
);

const question6 = new QuestionTemplate(
    "Welches Element hat das chemische Symbol H?",
    ["Helium", "Kohlenstoff", "Sauerstoff", "Wasserstoff"],
    "Wasserstoff",
    `
    <h2>Welches Element hat das chemische Symbol H?</h2>
    <input type="radio" name="answer" value="Helium"> Helium<br>
    <input type="radio" name="answer" value="Kohlenstoff"> Kohlenstoff<br>
    <input type="radio" name="answer" value="Sauerstoff"> Sauerstoff<br>
    <input type="radio" name="answer" value="Wasserstoff"> Wasserstoff<br>
    <button class="AbsendenButtonClass" onclick="checkAnswer()">Absenden</button><br>
    <button style="display: none;"  onclick="showNextQuestion()">N&auml;chste Frage</button>
    <div id="result"></div> <!-- Hier wird das Ergebnis angezeigt -->
  `
);

const question7 = new QuestionTemplate(
    "Wie viele Kontinente gibt es auf der Erde?",
    ["5", "6", "7", "8"],
    "7",
    `
    <h2>Wie viele Kontinente gibt es auf der Erde?</h2>
    <input type="radio" name="answer" value="5"> 5<br>
    <input type="radio" name="answer" value="6"> 6<br>
    <input type="radio" name="answer" value="7"> 7<br>
    <input type="radio" name="answer" value="8"> 8<br>
    <button class="AbsendenButtonClass" onclick="checkAnswer()">Absenden</button><br>
    <button style="display: none;"  onclick="showNextQuestion()">N&auml;chste Frage</button>
    <div id="result"></div> <!-- Hier wird das Ergebnis angezeigt -->
  `
);

const question8 = new QuestionTemplate(
    "Was ist die Hauptfarbe des Himmels an einem klaren Tag?",
    ["Rot", "Blau", "Gruen", "Gelb"],
    "Blau",
    `
    <h2>Was ist die Hauptfarbe des Himmels an einem klaren Tag?</h2>
    <input type="radio" name="answer" value="Rot"> Rot<br>
    <input type="radio" name="answer" value="Blau"> Blau<br>
    <input type="radio" name="answer" value="Gruen"> Gr&uuml;n<br>
    <input type="radio" name="answer" value="Gelb"> Gelb<br>
    <button class="AbsendenButtonClass" onclick="checkAnswer()">Absenden</button><br>
    <button style="display: none;"  onclick="showNextQuestion()">N&auml;chste Frage</button>
    <div id="result"></div> <!-- Hier wird das Ergebnis angezeigt -->
  `
);

const question9 = new QuestionTemplate(
    "Was ist die Hauptstadt von Frankreich?",
    ["Berlin", "Madrid", "Paris", "Rom"],
    "Paris",
    `
    <h2>Was ist die Hauptstadt von Frankreich?</h2>
    <input type="radio" name="answer" value="Paris"> Paris<br>
    <input type="radio" name="answer" value="Berlin"> Berlin<br>
    <input type="radio" name="answer" value="London"> London<br>
    <input type="radio" name="answer" value="Madrid"> Madrid<br>
    <button class="AbsendenButtonClass" onclick="checkAnswer()">Absenden</button><br>
    <button style="display: none;"  onclick="showNextQuestion()">N&auml;chste Frage</button>
    <div id="result"></div>
  `
);

const question10 = new QuestionTemplate(
    "Welches Element hat das chemische Symbol H?",
    ["Helium", "Kohlenstoff", "Sauerstoff", "Wasserstoff"],
    "Wasserstoff",
    `
    <h2>Welches Element hat das chemische Symbol H?</h2>
    <input type="radio" name="answer" value="Helium"> Helium<br>
    <input type="radio" name="answer" value="Kohlenstoff"> Kohlenstoff<br>
    <input type="radio" name="answer" value="Sauerstoff"> Sauerstoff<br>
    <input type="radio" name="answer" value="Wasserstoff"> Wasserstoff<br>
    <button class="AbsendenButtonClass" onclick="checkAnswer()">Absenden</button><br>
    <button style="display: none;"  onclick="showNextQuestion()">N&auml;chste Frage</button>
    <div id="result"></div> <!-- Hier wird das Ergebnis angezeigt -->
  `
);

const question11 = new QuestionTemplate(
    "Wie viele Kontinente gibt es auf der Erde?",
    ["5", "6", "7", "8"],
    "7",
    `
    <h2>Wie viele Kontinente gibt es auf der Erde?</h2>
    <input type="radio" name="answer" value="5"> 5<br>
    <input type="radio" name="answer" value="6"> 6<br>
    <input type="radio" name="answer" value="7"> 7<br>
    <input type="radio" name="answer" value="8"> 8<br>
    <button class="AbsendenButtonClass" onclick="checkAnswer()">Absenden</button><br>
    <button style="display: none;"  onclick="showNextQuestion()">N&auml;chste Frage</button>
    <div id="result"></div> <!-- Hier wird das Ergebnis angezeigt -->
  `
);

const question12 = new QuestionTemplate(
    "Was ist die Hauptfarbe des Himmels an einem klaren Tag?",
    ["Rot", "Blau", "Gruen", "Gelb"],
    "Blau",
    `
    <h2>Was ist die Hauptfarbe des Himmels an einem klaren Tag?</h2>
    <input type="radio" name="answer" value="Rot"> Rot<br>
    <input type="radio" name="answer" value="Blau"> Blau<br>
    <input type="radio" name="answer" value="Gruen"> Gr&uuml;n<br>
    <input type="radio" name="answer" value="Gelb"> Gelb<br>
    <button class="AbsendenButtonClass" onclick="checkAnswer()">Absenden</button><br>
    <button style="display: none;"  onclick="showNextQuestion()">N&auml;chste Frage</button>
    <div id="result"></div> <!-- Hier wird das Ergebnis angezeigt -->
  `
);

const questionPH1 = new QuestionTemplate(
    "Was sind Hauptursachen der Luftverschmutzung neben industriellen Prozessen?",
    ["Die Belastung urbaner Gebiete durch steigende Bevoelkerungszahlen und die allgemeine Nutzung von Elektrogeraeten.","Die Verbrennung fossiler Brennstoffe, vor allem in Kraftwerken und Autos, der Einsatz von Duengemitteln und Pestiziden in der Landwirtschaft und die Emissionen aus Abfallentsorgungsprozessen.", "Die uebermaeßige Nutzung von Internet und digitalen Medien sowie der Bau von Infrastrukturen wie Straßen und Bruecken", "Die Produktion und der Verbrauch von Lebensmitteln, vor allem in Großkuechen und Restaurants, sowie der Einsatz von erneuerbaren Energien"],
    "Die Verbrennung fossiler Brennstoffe, vor allem in Kraftwerken und Autos, der Einsatz von Duengemitteln und Pestiziden in der Landwirtschaft und die Emissionen aus Abfallentsorgungsprozessen.",
    `
    <h2>Was sind Hauptursachen der Luftverschmutzung neben industriellen Prozessen?</h2>
    <input type="radio" name="answer" value="Die Belastung urbaner Gebiete durch steigende Bevoelkerungszahlen und die allgemeine Nutzung von Elektrogeraeten">   Die Belastung urbaner Gebiete durch steigende Bev&ouml;lkerungszahlen und die allgemeine Nutzung von Elektroger&auml;ten<br>
    <input type="radio" name="answer" value="Die Verbrennung fossiler Brennstoffe, vor allem in Kraftwerken und Autos, der Einsatz von Duengemitteln und Pestiziden in der Landwirtschaft und die Emissionen aus Abfallentsorgungsprozessen.">  Die Verbrennung fossiler Brennstoffe, vor allem in Kraftwerken und Autos, der Einsatz von Duengemitteln und Pestiziden in der Landwirtschaft und die Emissionen aus Abfallentsorgungsprozessen. <br>
    <input type="radio" name="answer" value="Die uebermaeßige Nutzung von Internet und digitalen Medien sowie der Bau von Infrastrukturen wie Straßen und Bruecken.">   Die ueberm&auml;&szlig;ige Nutzung von Internet und digitalen Medien sowie der Bau von Infrastrukturen wie Stra&szlig;en und Bruecken. <br>
    <input type="radio" name="answer" value="Die Produktion und der Verbrauch von Lebensmitteln, vor allem in Großkuechen und Restaurants, sowie der Einsatz von erneuerbaren Energien.">  Die Produktion und der Verbrauch von Lebensmitteln, vor allem in Gro&szlig;kuechen und Restaurants, sowie der Einsatz von erneuerbaren Energien. <br>
    <button class="AbsendenButtonClass" onclick="checkAnswer()">Absenden</button><br>
    <button style="display: none;"  onclick="showNextQuestion()">N&auml;chste Frage</button>
    <div id="result"></div> <!-- Hier wird das Ergebnis angezeigt -->
  `
);

const questionPH2 = new QuestionTemplate(
    "Was verursacht Luftverschmutzung?",
    ["Die Anwesenheit von Buechern in der Bibliothek","Das Vorhandensein von Fremd- oder Schadstoffen in der Luft", "Die uebermaeßige Nutzung von elektrischen Geraeten", "Die Zunahme von Autos auf den Straßen, unabhaengig von ihrer Emission"],
    "Das Vorhandensein von Fremd- oder Schadstoffen in der Luft",
    `
    <h2>Was verursacht Luftverschmutzung?</h2>
    <input type="radio" name="answer" value="Die Anwesenheit von Buechern in der Bibliothek">  Die Anwesenheit von Buechern in der Bibliothek <br>
    <input type="radio" name="answer" value="Das Vorhandensein von Fremd- oder Schadstoffen in der Luft">  Das Vorhandensein von Fremd- oder Schadstoffen in der Luft <br>
    <input type="radio" name="answer" value="Die uebermaeßige Nutzung von elektrischen Geraeten">   Die ueberm&auml;&szlig;ige Nutzung von elektrischen Ger&auml;ten <br>
    <input type="radio" name="answer" value="Die Zunahme von Autos auf den Straßen, unabhaengig von ihrer Emission">  Die Zunahme von Autos auf den Stra&szlig;en, unabh&auml;ngig von ihrer Emission <br>
    <button class="AbsendenButtonClass" onclick="checkAnswer()">Absenden</button><br>
    <button style="display: none;"  onclick="showNextQuestion()">N&auml;chste Frage</button>
    <div id="result"></div> <!-- Hier wird das Ergebnis angezeigt -->
  `
);

const questionPH3 = new QuestionTemplate(
    "Welcher natuerliche Vorgang ist KEINE Ursache fuer Luftverschmutzung?",
    ["Vulkanausbrueche","Waldbraende", "Staubstuerme", "Gezeitenwechsel in den Ozeanen"],
    "Gezeitenwechsel in den Ozeanen",
    `
    <h2>Welcher natuerliche Vorgang ist KEINE Ursache fuer Luftverschmutzung?</h2>
    <input type="radio" name="answer" value="Vulkanausbrueche">  Vulkanausbrueche <br>
    <input type="radio" name="answer" value="Waldbraende">  Waldbr&auml;nde <br>
    <input type="radio" name="answer" value="Staubstuerme">   Staubstuerme <br>
    <input type="radio" name="answer" value="Gezeitenwechsel in den Ozeanen">  Gezeitenwechsel in den Ozeanen <br><button onclick="checkAnswer()">Absenden</button><br>
    <button class="AbsendenButtonClass" onclick="checkAnswer()">Absenden</button><br>
    <button style="display: none;"  onclick="showNextQuestion()">N&auml;chste Frage</button>
    <div id="result"></div> <!-- Hier wird das Ergebnis angezeigt -->
  `
);

const questionPH4 = new QuestionTemplate(
    "Wie kann Luftverschmutzung entgegengewirkt werden?",
    ["Durch die Intensivierung von Forschung und Entwicklung in der Kernfusion als sauberere Energiequelle."," Durch die Integration vertikaler Gaerten in staedtischen Gebaeuden zur Verbesserung der staedtischen Luftqualitaet.", "Durch staatliche Regulierungen, den Einsatz von Technologien wie emissionsarmen Fahrzeugen, verstaerktem Einsatz erneuerbarer Energien und bewusste Entscheidungen der Einzelpersonen.", "Durch die Einrichtung globaler `Luftreinigungsstationen´, die kontinuierlich schaedliche Partikel aus der Atmosphaere filtern."],
    "Durch staatliche Regulierungen, den Einsatz von Technologien wie emissionsarmen Fahrzeugen, verstaerktem Einsatz erneuerbarer Energien und bewusste Entscheidungen der Einzelpersonen.",
    `
    <h2>Wie kann Luftverschmutzung entgegengewirkt werden?</h2>
    <input type="radio" name="answer" value="Durch die Intensivierung von Forschung und Entwicklung in der Kernfusion als sauberere Energiequelle.">  Durch die Intensivierung von Forschung und Entwicklung in der Kernfusion als sauberere Energiequelle. <br>
    <input type="radio" name="answer" value="Durch die Integration vertikaler Gaerten in staedtischen Gebaeuden zur Verbesserung der staedtischen Luftqualitaet.">   Durch die Integration vertikaler G&auml;rten in st&auml;dtischen Geb&auml;uden zur Verbesserung der st&auml;dtischen Luftqualit&auml;t. <br>
    <input type="radio" name="answer" value="Durch staatliche Regulierungen, den Einsatz von Technologien wie emissionsarmen Fahrzeugen, verstaerktem Einsatz erneuerbarer Energien und bewusste Entscheidungen der Einzelpersonen.">   Durch staatliche Regulierungen, den Einsatz von Technologien wie emissionsarmen Fahrzeugen, verst&auml;rktem Einsatz erneuerbarer Energien und bewusste Entscheidungen der Einzelpersonen. <br>
    <input type="radio" name="answer" value="Durch die Einrichtung globaler Luftreinigungsstationen, die kontinuierlich schaedliche Partikel aus der Atmosphaere filtern.">  Durch die Einrichtung globaler "Luftreinigungsstationen", die kontinuierlich sch&auml;dliche Partikel aus der Atmosph&auml;re filtern. <br>
    <button class="AbsendenButtonClass" onclick="checkAnswer()">Absenden</button><br>
    <button style="display: none;"  onclick="showNextQuestion()">N&auml;chste Frage</button>
    <div id="result"></div> <!-- Hier wird das Ergebnis angezeigt -->
  `
);

const questionPH5 = new QuestionTemplate(
    "Was sind Hauptursachen der Luftverschmutzung neben industriellen Prozessen?",
    ["Die Belastung urbaner Gebiete durch steigende Bevoelkerungszahlen und die allgemeine Nutzung von Elektrogeraeten.","Die Verbrennung fossiler Brennstoffe, vor allem in Kraftwerken und Autos, der Einsatz von Duengemitteln und Pestiziden in der Landwirtschaft und die Emissionen aus Abfallentsorgungsprozessen.", "Die uebermaeßige Nutzung von Internet und digitalen Medien sowie der Bau von Infrastrukturen wie Straßen und Bruecken", "Die Produktion und der Verbrauch von Lebensmitteln, vor allem in Großkuechen und Restaurants, sowie der Einsatz von erneuerbaren Energien"],
    "Die Verbrennung fossiler Brennstoffe, vor allem in Kraftwerken und Autos, der Einsatz von Duengemitteln und Pestiziden in der Landwirtschaft und die Emissionen aus Abfallentsorgungsprozessen.",
    `
    <h2>Was sind Hauptursachen der Luftverschmutzung neben industriellen Prozessen?</h2>
    <input type="radio" name="answer" value="Die Belastung urbaner Gebiete durch steigende Bevoelkerungszahlen und die allgemeine Nutzung von Elektrogeraeten">   Die Belastung urbaner Gebiete durch steigende Bev&ouml;lkerungszahlen und die allgemeine Nutzung von Elektroger&auml;ten<br>
    <input type="radio" name="answer" value="Die Verbrennung fossiler Brennstoffe, vor allem in Kraftwerken und Autos, der Einsatz von Duengemitteln und Pestiziden in der Landwirtschaft und die Emissionen aus Abfallentsorgungsprozessen.">  Die Verbrennung fossiler Brennstoffe, vor allem in Kraftwerken und Autos, der Einsatz von Duengemitteln und Pestiziden in der Landwirtschaft und die Emissionen aus Abfallentsorgungsprozessen. <br>
    <input type="radio" name="answer" value="Die uebermaeßige Nutzung von Internet und digitalen Medien sowie der Bau von Infrastrukturen wie Straßen und Bruecken.">   Die ueberm&auml;&szlig;ige Nutzung von Internet und digitalen Medien sowie der Bau von Infrastrukturen wie Stra&szlig;en und Bruecken. <br>
    <input type="radio" name="answer" value="Die Produktion und der Verbrauch von Lebensmitteln, vor allem in Großkuechen und Restaurants, sowie der Einsatz von erneuerbaren Energien.">  Die Produktion und der Verbrauch von Lebensmitteln, vor allem in Gro&szlig;kuechen und Restaurants, sowie der Einsatz von erneuerbaren Energien. <br>
    <button class="AbsendenButtonClass" onclick="checkAnswer()">Absenden</button><br>
    <button style="display: none;"  onclick="showNextQuestion()">N&auml;chste Frage</button>
    <div id="result"></div> <!-- Hier wird das Ergebnis angezeigt -->
  `
);

const questionPH6 = new QuestionTemplate(
    "Was verursacht Luftverschmutzung?",
    ["Die Anwesenheit von Buechern in der Bibliothek","Das Vorhandensein von Fremd- oder Schadstoffen in der Luft", "Die uebermaeßige Nutzung von elektrischen Geraeten", "Die Zunahme von Autos auf den Straßen, unabhaengig von ihrer Emission"],
    "Das Vorhandensein von Fremd- oder Schadstoffen in der Luft",
    `
    <h2>Was verursacht Luftverschmutzung?</h2>
    <input type="radio" name="answer" value="Die Anwesenheit von Buechern in der Bibliothek">  Die Anwesenheit von Buechern in der Bibliothek <br>
    <input type="radio" name="answer" value="Das Vorhandensein von Fremd- oder Schadstoffen in der Luft">  Das Vorhandensein von Fremd- oder Schadstoffen in der Luft <br>
    <input type="radio" name="answer" value="Die uebermaeßige Nutzung von elektrischen Geraeten">   Die ueberm&auml;&szlig;ige Nutzung von elektrischen Ger&auml;ten <br>
    <input type="radio" name="answer" value="Die Zunahme von Autos auf den Straßen, unabhaengig von ihrer Emission">  Die Zunahme von Autos auf den Stra&szlig;en, unabh&auml;ngig von ihrer Emission <br>
    <button class="AbsendenButtonClass" onclick="checkAnswer()">Absenden</button><br>
    <button style="display: none;"  onclick="showNextQuestion()">N&auml;chste Frage</button>
    <div id="result"></div> <!-- Hier wird das Ergebnis angezeigt -->
  `
);

const questionPH7 = new QuestionTemplate(
    "Welcher natuerliche Vorgang ist KEINE Ursache fuer Luftverschmutzung?",
    ["Vulkanausbrueche","Waldbraende", "Staubstuerme", "Gezeitenwechsel in den Ozeanen"],
    "Gezeitenwechsel in den Ozeanen",
    `
    <h2>Welcher natuerliche Vorgang ist KEINE Ursache fuer Luftverschmutzung?</h2>
    <input type="radio" name="answer" value="Vulkanausbrueche">  Vulkanausbrueche <br>
    <input type="radio" name="answer" value="Waldbraende">  Waldbr&auml;nde <br>
    <input type="radio" name="answer" value="Staubstuerme">   Staubstuerme <br>
    <input type="radio" name="answer" value="Gezeitenwechsel in den Ozeanen">  Gezeitenwechsel in den Ozeanen <br><button onclick="checkAnswer()">Absenden</button><br>
    <button class="AbsendenButtonClass" onclick="checkAnswer()">Absenden</button><br>
    <button style="display: none;"  onclick="showNextQuestion()">N&auml;chste Frage</button>
    <div id="result"></div> <!-- Hier wird das Ergebnis angezeigt -->
  `
);

const questionPH8 = new QuestionTemplate(
    "Wie kann Luftverschmutzung entgegengewirkt werden?",
    ["Durch die Intensivierung von Forschung und Entwicklung in der Kernfusion als sauberere Energiequelle."," Durch die Integration vertikaler Gaerten in staedtischen Gebaeuden zur Verbesserung der staedtischen Luftqualitaet.", "Durch staatliche Regulierungen, den Einsatz von Technologien wie emissionsarmen Fahrzeugen, verstaerktem Einsatz erneuerbarer Energien und bewusste Entscheidungen der Einzelpersonen.", "Durch die Einrichtung globaler `Luftreinigungsstationen´, die kontinuierlich schaedliche Partikel aus der Atmosphaere filtern."],
    "Durch staatliche Regulierungen, den Einsatz von Technologien wie emissionsarmen Fahrzeugen, verstaerktem Einsatz erneuerbarer Energien und bewusste Entscheidungen der Einzelpersonen.",
    `
    <h2>Wie kann Luftverschmutzung entgegengewirkt werden?</h2>
    <input type="radio" name="answer" value="Durch die Intensivierung von Forschung und Entwicklung in der Kernfusion als sauberere Energiequelle.">  Durch die Intensivierung von Forschung und Entwicklung in der Kernfusion als sauberere Energiequelle. <br>
    <input type="radio" name="answer" value="Durch die Integration vertikaler Gaerten in staedtischen Gebaeuden zur Verbesserung der staedtischen Luftqualitaet.">   Durch die Integration vertikaler G&auml;rten in st&auml;dtischen Geb&auml;uden zur Verbesserung der st&auml;dtischen Luftqualit&auml;t. <br>
    <input type="radio" name="answer" value="Durch staatliche Regulierungen, den Einsatz von Technologien wie emissionsarmen Fahrzeugen, verstaerktem Einsatz erneuerbarer Energien und bewusste Entscheidungen der Einzelpersonen.">   Durch staatliche Regulierungen, den Einsatz von Technologien wie emissionsarmen Fahrzeugen, verst&auml;rktem Einsatz erneuerbarer Energien und bewusste Entscheidungen der Einzelpersonen. <br>
    <input type="radio" name="answer" value="Durch die Einrichtung globaler Luftreinigungsstationen, die kontinuierlich schaedliche Partikel aus der Atmosphaere filtern.">  Durch die Einrichtung globaler "Luftreinigungsstationen", die kontinuierlich sch&auml;dliche Partikel aus der Atmosph&auml;re filtern. <br>
    <button class="AbsendenButtonClass" onclick="checkAnswer()">Absenden</button><br>
    <button style="display: none;"  onclick="showNextQuestion()">N&auml;chste Frage</button>
    <div id="result"></div> <!-- Hier wird das Ergebnis angezeigt -->
  `
);

const questionPH9 = new QuestionTemplate(
    "Was sind Hauptursachen der Luftverschmutzung neben industriellen Prozessen?",
    ["Die Belastung urbaner Gebiete durch steigende Bevoelkerungszahlen und die allgemeine Nutzung von Elektrogeraeten.","Die Verbrennung fossiler Brennstoffe, vor allem in Kraftwerken und Autos, der Einsatz von Duengemitteln und Pestiziden in der Landwirtschaft und die Emissionen aus Abfallentsorgungsprozessen.", "Die uebermaeßige Nutzung von Internet und digitalen Medien sowie der Bau von Infrastrukturen wie Straßen und Bruecken", "Die Produktion und der Verbrauch von Lebensmitteln, vor allem in Großkuechen und Restaurants, sowie der Einsatz von erneuerbaren Energien"],
    "Die Verbrennung fossiler Brennstoffe, vor allem in Kraftwerken und Autos, der Einsatz von Duengemitteln und Pestiziden in der Landwirtschaft und die Emissionen aus Abfallentsorgungsprozessen.",
    `
    <h2>Was sind Hauptursachen der Luftverschmutzung neben industriellen Prozessen?</h2>
    <input type="radio" name="answer" value="Die Belastung urbaner Gebiete durch steigende Bevoelkerungszahlen und die allgemeine Nutzung von Elektrogeraeten">   Die Belastung urbaner Gebiete durch steigende Bev&ouml;lkerungszahlen und die allgemeine Nutzung von Elektroger&auml;ten<br>
    <input type="radio" name="answer" value="Die Verbrennung fossiler Brennstoffe, vor allem in Kraftwerken und Autos, der Einsatz von Duengemitteln und Pestiziden in der Landwirtschaft und die Emissionen aus Abfallentsorgungsprozessen.">  Die Verbrennung fossiler Brennstoffe, vor allem in Kraftwerken und Autos, der Einsatz von Duengemitteln und Pestiziden in der Landwirtschaft und die Emissionen aus Abfallentsorgungsprozessen. <br>
    <input type="radio" name="answer" value="Die uebermaeßige Nutzung von Internet und digitalen Medien sowie der Bau von Infrastrukturen wie Straßen und Bruecken.">   Die ueberm&auml;&szlig;ige Nutzung von Internet und digitalen Medien sowie der Bau von Infrastrukturen wie Stra&szlig;en und Bruecken. <br>
    <input type="radio" name="answer" value="Die Produktion und der Verbrauch von Lebensmitteln, vor allem in Großkuechen und Restaurants, sowie der Einsatz von erneuerbaren Energien.">  Die Produktion und der Verbrauch von Lebensmitteln, vor allem in Gro&szlig;kuechen und Restaurants, sowie der Einsatz von erneuerbaren Energien. <br>
    <button class="AbsendenButtonClass" onclick="checkAnswer()">Absenden</button><br>
    <button style="display: none;"  onclick="showNextQuestion()">N&auml;chste Frage</button>
    <div id="result"></div> <!-- Hier wird das Ergebnis angezeigt -->
  `
);

const questionPH10 = new QuestionTemplate(
    "Was verursacht Luftverschmutzung?",
    ["Die Anwesenheit von Buechern in der Bibliothek","Das Vorhandensein von Fremd- oder Schadstoffen in der Luft", "Die uebermaeßige Nutzung von elektrischen Geraeten", "Die Zunahme von Autos auf den Straßen, unabhaengig von ihrer Emission"],
    "Das Vorhandensein von Fremd- oder Schadstoffen in der Luft",
    `
    <h2>Was verursacht Luftverschmutzung?</h2>
    <input type="radio" name="answer" value="Die Anwesenheit von Buechern in der Bibliothek">  Die Anwesenheit von Buechern in der Bibliothek <br>
    <input type="radio" name="answer" value="Das Vorhandensein von Fremd- oder Schadstoffen in der Luft">  Das Vorhandensein von Fremd- oder Schadstoffen in der Luft <br>
    <input type="radio" name="answer" value="Die uebermaeßige Nutzung von elektrischen Geraeten">   Die ueberm&auml;&szlig;ige Nutzung von elektrischen Ger&auml;ten <br>
    <input type="radio" name="answer" value="Die Zunahme von Autos auf den Straßen, unabhaengig von ihrer Emission">  Die Zunahme von Autos auf den Stra&szlig;en, unabh&auml;ngig von ihrer Emission <br>
    <button class="AbsendenButtonClass" onclick="checkAnswer()">Absenden</button><br>
    <button style="display: none;"  onclick="showNextQuestion()">N&auml;chste Frage</button>
    <div id="result"></div> <!-- Hier wird das Ergebnis angezeigt -->
  `
);

const questionPH11 = new QuestionTemplate(
    "Welcher natuerliche Vorgang ist KEINE Ursache fuer Luftverschmutzung?",
    ["Vulkanausbrueche","Waldbraende", "Staubstuerme", "Gezeitenwechsel in den Ozeanen"],
    "Gezeitenwechsel in den Ozeanen",
    `
    <h2>Welcher natuerliche Vorgang ist KEINE Ursache fuer Luftverschmutzung?</h2>
    <input type="radio" name="answer" value="Vulkanausbrueche">  Vulkanausbrueche <br>
    <input type="radio" name="answer" value="Waldbraende">  Waldbr&auml;nde <br>
    <input type="radio" name="answer" value="Staubstuerme">   Staubstuerme <br>
    <input type="radio" name="answer" value="Gezeitenwechsel in den Ozeanen">  Gezeitenwechsel in den Ozeanen <br><button onclick="checkAnswer()">Absenden</button><br>
    <button class="AbsendenButtonClass" onclick="checkAnswer()">Absenden</button><br>
    <button style="display: none;"  onclick="showNextQuestion()">N&auml;chste Frage</button>
    <div id="result"></div> <!-- Hier wird das Ergebnis angezeigt -->
  `
);

const questionPH12 = new QuestionTemplate(
    "Wie kann Luftverschmutzung entgegengewirkt werden?",
    ["Durch die Intensivierung von Forschung und Entwicklung in der Kernfusion als sauberere Energiequelle."," Durch die Integration vertikaler Gaerten in staedtischen Gebaeuden zur Verbesserung der staedtischen Luftqualitaet.", "Durch staatliche Regulierungen, den Einsatz von Technologien wie emissionsarmen Fahrzeugen, verstaerktem Einsatz erneuerbarer Energien und bewusste Entscheidungen der Einzelpersonen.", "Durch die Einrichtung globaler `Luftreinigungsstationen´, die kontinuierlich schaedliche Partikel aus der Atmosphaere filtern."],
    "Durch staatliche Regulierungen, den Einsatz von Technologien wie emissionsarmen Fahrzeugen, verstaerktem Einsatz erneuerbarer Energien und bewusste Entscheidungen der Einzelpersonen.",
    `
    <h2>Wie kann Luftverschmutzung entgegengewirkt werden?</h2>
    <input type="radio" name="answer" value="Durch die Intensivierung von Forschung und Entwicklung in der Kernfusion als sauberere Energiequelle.">  Durch die Intensivierung von Forschung und Entwicklung in der Kernfusion als sauberere Energiequelle. <br>
    <input type="radio" name="answer" value="Durch die Integration vertikaler Gaerten in staedtischen Gebaeuden zur Verbesserung der staedtischen Luftqualitaet.">   Durch die Integration vertikaler G&auml;rten in st&auml;dtischen Geb&auml;uden zur Verbesserung der st&auml;dtischen Luftqualit&auml;t. <br>
    <input type="radio" name="answer" value="Durch staatliche Regulierungen, den Einsatz von Technologien wie emissionsarmen Fahrzeugen, verstaerktem Einsatz erneuerbarer Energien und bewusste Entscheidungen der Einzelpersonen.">   Durch staatliche Regulierungen, den Einsatz von Technologien wie emissionsarmen Fahrzeugen, verst&auml;rktem Einsatz erneuerbarer Energien und bewusste Entscheidungen der Einzelpersonen. <br>
    <input type="radio" name="answer" value="Durch die Einrichtung globaler Luftreinigungsstationen, die kontinuierlich schaedliche Partikel aus der Atmosphaere filtern.">  Durch die Einrichtung globaler "Luftreinigungsstationen", die kontinuierlich sch&auml;dliche Partikel aus der Atmosph&auml;re filtern. <br>
    <button class="AbsendenButtonClass" onclick="checkAnswer()">Absenden</button><br>
    <button style="display: none;"  onclick="showNextQuestion()">N&auml;chste Frage</button>
    <div id="result"></div> <!-- Hier wird das Ergebnis angezeigt -->
  `
);

const questionMiti1 = new QuestionTemplate(
    "Zu welcher Mitigationsstrategie gehoert Mineralkarbonisierung?",
    ["Veraenderung der Strahlungsbilanz der Erde", "Reduktion von Treibhausgasausstoßen", "Negative Emissionstechnologien"],
    "Negative Emissionstechnologien",
    `
    <h2>Zu welcher Mitigationsstrategie geh&ouml;rt Mineralkarbonisierung?</h2>
    <input type="radio" name="answer" value="Veraenderung der Strahlungsbilanz der Erde"> Ver&auml;nderung der Strahlungsbilanz der Erde <br>
    <input type="radio" name="answer" value="Reduktion von Treibhausgasausstoßen"> Reduktion von Treibhausgasaussto&szlig;en <br>
    <input type="radio" name="answer" value="Negative Emissionstechnologien"> Negative Emissionstechnologien <br>
    <button class="AbsendenButtonClass" onclick="checkAnswer()">Absenden</button><br>
    <button style="display: none;"  onclick="showNextQuestion()">N&auml;chste Frage</button>
    <div id="result"></div> <!-- Hier wird das Ergebnis angezeigt -->
  `
);

const questionMiti2 = new QuestionTemplate(
    "Was ist kein Treibhausgas laut dem Kyotoprotokoll?",
    ["CH4", "H2Se", "SF6", "N2O"],
    "H2Se",
    `
    <h2>Was ist kein Treibhausgas laut dem Kyotoprotokoll?</h2>
    <input type="radio" name="answer" value="CH4"> CH4 <br>
    <input type="radio" name="answer" value="H2Se"> H2Se <br>
    <input type="radio" name="answer" value="SF6"> SF6 <br>
    <input type="radio" name="answer" value="N2O"> N2O <br>
    <button class="AbsendenButtonClass" onclick="checkAnswer()">Absenden</button><br>
    <button style="display: none;"  onclick="showNextQuestion()">N&auml;chste Frage</button>
    <div id="result"></div> <!-- Hier wird das Ergebnis angezeigt -->
  `
);

const questionMiti3 = new QuestionTemplate(
    "Negative Emissionstechnologien sind ein Ersatz fuer konventionelle Dekarbonisierung.",
    ["wahr", "falsch"],
    "falsch",
    `
    <h2>Negative Emissionstechnologien sind ein Ersatz fuer konventionelle Dekarbonisierung.</h2>
    <input type="radio" name="answer" value="wahr"> wahr <br>
    <input type="radio" name="answer" value="falsch"> falsch <br>
    <button class="AbsendenButtonClass" onclick="checkAnswer()">Absenden</button><br>
    <button style="display: none;"  onclick="showNextQuestion()">N&auml;chste Frage</button>
    <div id="result"></div> <!-- Hier wird das Ergebnis angezeigt -->
  `
);

const questionMiti4 = new QuestionTemplate(
    "Welcher Sektor hatte 2020 die groeßten Treibhausgasemissionen?",
    ["Energie", "Gebaeude", "Transport", "Industrie"],
    "Industrie",
    `
    <h2>Welcher Sektor hatte 2020 die gr&ouml;&szlig;ten Treibhausgasemissionen?</h2>
    <input type="radio" name="answer" value="Energie"> Energie <br>
    <input type="radio" name="answer" value="Gebaeude"> Geb&auml;ude <br>
    <input type="radio" name="answer" value="Transport"> Transport <br>
    <input type="radio" name="answer" value="Industrie"> Industrie <br>
    <button class="AbsendenButtonClass" onclick="checkAnswer()">Absenden</button><br>
    <button style="display: none;"  onclick="showNextQuestion()">N&auml;chste Frage</button>
    <div id="result"></div> <!-- Hier wird das Ergebnis angezeigt -->
  `
);

const questionMiti5 = new QuestionTemplate(
    "Zu welcher Mitigationsstrategie gehoert Mineralkarbonisierung?",
    ["Veraenderung der Strahlungsbilanz der Erde", "Reduktion von Treibhausgasausstoßen", "Negative Emissionstechnologien"],
    "Negative Emissionstechnologien",
    `
    <h2>Zu welcher Mitigationsstrategie geh&ouml;rt Mineralkarbonisierung?</h2>
    <input type="radio" name="answer" value="Veraenderung der Strahlungsbilanz der Erde"> Ver&auml;nderung der Strahlungsbilanz der Erde <br>
    <input type="radio" name="answer" value="Reduktion von Treibhausgasausstoßen"> Reduktion von Treibhausgasaussto&szlig;en <br>
    <input type="radio" name="answer" value="Negative Emissionstechnologien"> Negative Emissionstechnologien <br>
    <button class="AbsendenButtonClass" onclick="checkAnswer()">Absenden</button><br>
    <button style="display: none;"  onclick="showNextQuestion()">N&auml;chste Frage</button>
    <div id="result"></div> <!-- Hier wird das Ergebnis angezeigt -->
  `
);

const questionMiti6 = new QuestionTemplate(
    "Was ist kein Treibhausgas laut dem Kyotoprotokoll?",
    ["CH4", "H2Se", "SF6", "N2O"],
    "H2Se",
    `
    <h2>Was ist kein Treibhausgas laut dem Kyotoprotokoll?</h2>
    <input type="radio" name="answer" value="CH4"> CH4 <br>
    <input type="radio" name="answer" value="H2Se"> H2Se <br>
    <input type="radio" name="answer" value="SF6"> SF6 <br>
    <input type="radio" name="answer" value="N2O"> N2O <br>
    <button class="AbsendenButtonClass" onclick="checkAnswer()">Absenden</button><br>
    <button style="display: none;"  onclick="showNextQuestion()">N&auml;chste Frage</button>
    <div id="result"></div> <!-- Hier wird das Ergebnis angezeigt -->
  `
);

const questionMiti7 = new QuestionTemplate(
    "Negative Emissionstechnologien sind ein Ersatz fuer konventionelle Dekarbonisierung.",
    ["wahr", "falsch"],
    "falsch",
    `
    <h2>Negative Emissionstechnologien sind ein Ersatz fuer konventionelle Dekarbonisierung.</h2>
    <input type="radio" name="answer" value="wahr"> wahr <br>
    <input type="radio" name="answer" value="falsch"> falsch <br>
    <button class="AbsendenButtonClass" onclick="checkAnswer()">Absenden</button><br>
    <button style="display: none;"  onclick="showNextQuestion()">N&auml;chste Frage</button>
    <div id="result"></div> <!-- Hier wird das Ergebnis angezeigt -->
  `
);

const questionMiti8 = new QuestionTemplate(
    "Welcher Sektor hatte 2020 die groeßten Treibhausgasemissionen?",
    ["Energie", "Gebaeude", "Transport", "Industrie"],
    "Industrie",
    `
    <h2>Welcher Sektor hatte 2020 die gr&ouml;&szlig;ten Treibhausgasemissionen?</h2>
    <input type="radio" name="answer" value="Energie"> Energie <br>
    <input type="radio" name="answer" value="Gebaeude"> Geb&auml;ude <br>
    <input type="radio" name="answer" value="Transport"> Transport <br>
    <input type="radio" name="answer" value="Industrie"> Industrie <br>
    <button class="AbsendenButtonClass" onclick="checkAnswer()">Absenden</button><br>
    <button style="display: none;"  onclick="showNextQuestion()">N&auml;chste Frage</button>
    <div id="result"></div> <!-- Hier wird das Ergebnis angezeigt -->
  `
);

const questionMiti9 = new QuestionTemplate(
    "Zu welcher Mitigationsstrategie gehoert Mineralkarbonisierung?",
    ["Veraenderung der Strahlungsbilanz der Erde", "Reduktion von Treibhausgasausstoßen", "Negative Emissionstechnologien"],
    "Negative Emissionstechnologien",
    `
    <h2>Zu welcher Mitigationsstrategie geh&ouml;rt Mineralkarbonisierung?</h2>
    <input type="radio" name="answer" value="Veraenderung der Strahlungsbilanz der Erde"> Ver&auml;nderung der Strahlungsbilanz der Erde <br>
    <input type="radio" name="answer" value="Reduktion von Treibhausgasausstoßen"> Reduktion von Treibhausgasaussto&szlig;en <br>
    <input type="radio" name="answer" value="Negative Emissionstechnologien"> Negative Emissionstechnologien <br>
    <button class="AbsendenButtonClass" onclick="checkAnswer()">Absenden</button><br>
    <button style="display: none;"  onclick="showNextQuestion()">N&auml;chste Frage</button>
    <div id="result"></div> <!-- Hier wird das Ergebnis angezeigt -->
  `
);

const questionMiti10 = new QuestionTemplate(
    "Was ist kein Treibhausgas laut dem Kyotoprotokoll?",
    ["CH4", "H2Se", "SF6", "N2O"],
    "H2Se",
    `
    <h2>Was ist kein Treibhausgas laut dem Kyotoprotokoll?</h2>
    <input type="radio" name="answer" value="CH4"> CH4 <br>
    <input type="radio" name="answer" value="H2Se"> H2Se <br>
    <input type="radio" name="answer" value="SF6"> SF6 <br>
    <input type="radio" name="answer" value="N2O"> N2O <br>
    <button class="AbsendenButtonClass" onclick="checkAnswer()">Absenden</button><br>
    <button style="display: none;"  onclick="showNextQuestion()">N&auml;chste Frage</button>
    <div id="result"></div> <!-- Hier wird das Ergebnis angezeigt -->
  `
);

const questionMiti11 = new QuestionTemplate(
    "Negative Emissionstechnologien sind ein Ersatz fuer konventionelle Dekarbonisierung.",
    ["wahr", "falsch"],
    "falsch",
    `
    <h2>Negative Emissionstechnologien sind ein Ersatz fuer konventionelle Dekarbonisierung.</h2>
    <input type="radio" name="answer" value="wahr"> wahr <br>
    <input type="radio" name="answer" value="falsch"> falsch <br>
    <button class="AbsendenButtonClass" onclick="checkAnswer()">Absenden</button><br>
    <button style="display: none;"  onclick="showNextQuestion()">N&auml;chste Frage</button>
    <div id="result"></div> <!-- Hier wird das Ergebnis angezeigt -->
  `
);

const questionMiti12 = new QuestionTemplate(
    "Welcher Sektor hatte 2020 die groeßten Treibhausgasemissionen?",
    ["Energie", "Gebaeude", "Transport", "Industrie"],
    "Industrie",
    `
    <h2>Welcher Sektor hatte 2020 die gr&ouml;&szlig;ten Treibhausgasemissionen?</h2>
    <input type="radio" name="answer" value="Energie"> Energie <br>
    <input type="radio" name="answer" value="Gebaeude"> Geb&auml;ude <br>
    <input type="radio" name="answer" value="Transport"> Transport <br>
    <input type="radio" name="answer" value="Industrie"> Industrie <br>
    <button class="AbsendenButtonClass" onclick="checkAnswer()">Absenden</button><br>
    <button style="display: none;"  onclick="showNextQuestion()">N&auml;chste Frage</button>
    <div id="result"></div> <!-- Hier wird das Ergebnis angezeigt -->
  `
);

const questionAdap1 = new QuestionTemplate(
    "Was sind die Haupttreiber des Klimawandels in staedtischen Gebieten?",
    ["Niedrige Bevoelkerungsdichte und geringer Energieverbrauch", "Hohe Anzahl an Gruenflaechen und Parks", "Demografische Struktur, Wirtschaftswachstum, individuelles Einkommen und Lebensstil, Gebaeude", "Geringe Anzahl an Gebaeuden und Infrastrukturen"],
    "Demografische Struktur, Wirtschaftswachstum, individuelles Einkommen und Lebensstil, Gebaeude",
    `
    <h2>Was sind die Haupttreiber des Klimawandels in st&auml;dtischen Gebieten?</h2>
    <input type="radio" name="answer" value="Niedrige Bevoelkerungsdichte und geringer Energieverbrauch"> Niedrige Bev&ouml;lkerungsdichte und geringer Energieverbrauch <br>
    <input type="radio" name="answer" value="Hohe Anzahl an Gruenflaechen und Parks"> Hohe Anzahl an Gr&uuml;nfl&auml;chen und Parks <br>
    <input type="radio" name="answer" value="Demografische Struktur, Wirtschaftswachstum, individuelles Einkommen und Lebensstil, Gebaeude"> Demografische Struktur, Wirtschaftswachstum, individuelles Einkommen und Lebensstil, Geb&auml;ude <br>
    <input type="radio" name="answer" value="Geringe Anzahl an Gebaeuden und Infrastrukturen"> Geringe Anzahl an Geb&auml;uden und Infrastrukturen <br>
    <button class="AbsendenButtonClass" onclick="checkAnswer()">Absenden</button><br>
    <button style="display: none;"  onclick="showNextQuestion()">N&auml;chste Frage</button>
    <div id="result"></div> <!-- Hier wird das Ergebnis angezeigt -->
  `
);

const questionAdap2 = new QuestionTemplate(
    "Die Energieverbrauchsrate von staedtischen Gebieten ist doppelt so hoch wie in laendlichen Gebieten.",
    ["wahr", "falsch"],
    "wahr",
    `
    <h2>Die Energieverbrauchsrate von st&auml;dtischen Gebieten ist doppelt so hoch wie in l&auml;ndlichen Gebieten.</h2>
    <input type="radio" name="answer" value="wahr"> wahr <br>
    <input type="radio" name="answer" value="falsch"> falsch <br>
    <button class="AbsendenButtonClass" onclick="checkAnswer()">Absenden</button><br>
    <button style="display: none;"  onclick="showNextQuestion()">N&auml;chste Frage</button>
    <div id="result"></div> <!-- Hier wird das Ergebnis angezeigt -->
  `
    );

const questionAdap3 = new QuestionTemplate(
    "Was ist keine Maßnahme gegen den Klimawandel in Staedten?",
    ["Deisolierung der Gebaeude", "Effizienterer Energieverbrauch", "Entwicklung gruener Infrastrukturen", "Foerderung von multimodalem und hydroelektrisch betriebenem Verkehr"],
    "Deisolierung der Gebaeude",
    `
    <h2>Was ist keine Ma&szlig;nahme gegen den Klimawandel in St&auml;dten?</h2>
    <input type="radio" name="answer" value="Deisolierung der Gebaeude"> Deisolierung der Geb&auml;ude <br>
    <input type="radio" name="answer" value="Effizienterer Energieverbrauch"> Effizienterer Energieverbrauch <br>
    <input type="radio" name="answer" value="Entwicklung gruener Infrastrukturen"> Entwicklung gr&uuml;ner Infrastrukturen <br>
    <input type="radio" name="answer" value="Foerderung von multimodalem und hydroelektrisch betriebenem Verkehr"> F&ouml;rderung von multimodalem und hydroelektrisch betriebenem Verkehr <br>
    <button class="AbsendenButtonClass" onclick="checkAnswer()">Absenden</button><br>
    <button style="display: none;"  onclick="showNextQuestion()">N&auml;chste Frage</button>
    <div id="result"></div> <!-- Hier wird das Ergebnis angezeigt -->
  `
);

const questionAdap4 = new QuestionTemplate(
    "Was sind die Haupttreiber des Klimawandels in staedtischen Gebieten?",
    ["Niedrige Bevoelkerungsdichte und geringer Energieverbrauch", "Hohe Anzahl an Gruenflaechen und Parks", "Demografische Struktur, Wirtschaftswachstum, individuelles Einkommen und Lebensstil, Gebaeude", "Geringe Anzahl an Gebaeuden und Infrastrukturen"],
    "Demografische Struktur, Wirtschaftswachstum, individuelles Einkommen und Lebensstil, Gebaeude",
    `
    <h2>Was sind die Haupttreiber des Klimawandels in st&auml;dtischen Gebieten?</h2>
    <input type="radio" name="answer" value="Niedrige Bevoelkerungsdichte und geringer Energieverbrauch"> Niedrige Bev&ouml;lkerungsdichte und geringer Energieverbrauch <br>
    <input type="radio" name="answer" value="Hohe Anzahl an Gruenflaechen und Parks"> Hohe Anzahl an Gr&uuml;nfl&auml;chen und Parks <br>
    <input type="radio" name="answer" value="Demografische Struktur, Wirtschaftswachstum, individuelles Einkommen und Lebensstil, Gebaeude"> Demografische Struktur, Wirtschaftswachstum, individuelles Einkommen und Lebensstil, Geb&auml;ude <br>
    <input type="radio" name="answer" value="Geringe Anzahl an Gebaeuden und Infrastrukturen"> Geringe Anzahl an Geb&auml;uden und Infrastrukturen <br>
    <button class="AbsendenButtonClass" onclick="checkAnswer()">Absenden</button><br>
    <button style="display: none;"  onclick="showNextQuestion()">N&auml;chste Frage</button>
    <div id="result"></div> <!-- Hier wird das Ergebnis angezeigt -->
  `
);

const questionAdap5 = new QuestionTemplate(
    "Die Energieverbrauchsrate von staedtischen Gebieten ist doppelt so hoch wie in laendlichen Gebieten.",
    ["wahr", "falsch"],
    "wahr",
    `
    <h2>Die Energieverbrauchsrate von st&auml;dtischen Gebieten ist doppelt so hoch wie in l&auml;ndlichen Gebieten.</h2>
    <input type="radio" name="answer" value="wahr"> wahr <br>
    <input type="radio" name="answer" value="falsch"> falsch <br>
    <button class="AbsendenButtonClass" onclick="checkAnswer()">Absenden</button><br>
    <button style="display: none;"  onclick="showNextQuestion()">N&auml;chste Frage</button>
    <div id="result"></div> <!-- Hier wird das Ergebnis angezeigt -->
  `
);

const questionAdap6 = new QuestionTemplate(
    "Was ist keine Maßnahme gegen den Klimawandel in Staedten?",
    ["Deisolierung der Gebaeude", "Effizienterer Energieverbrauch", "Entwicklung gruener Infrastrukturen", "Foerderung von multimodalem und hydroelektrisch betriebenem Verkehr"],
    "Deisolierung der Gebaeude",
    `
    <h2>Was ist keine Ma&szlig;nahme gegen den Klimawandel in St&auml;dten?</h2>
    <input type="radio" name="answer" value="Deisolierung der Gebaeude"> Deisolierung der Geb&auml;ude <br>
    <input type="radio" name="answer" value="Effizienterer Energieverbrauch"> Effizienterer Energieverbrauch <br>
    <input type="radio" name="answer" value="Entwicklung gruener Infrastrukturen"> Entwicklung gr&uuml;ner Infrastrukturen <br>
    <input type="radio" name="answer" value="Foerderung von multimodalem und hydroelektrisch betriebenem Verkehr"> F&ouml;rderung von multimodalem und hydroelektrisch betriebenem Verkehr <br>
    <button class="AbsendenButtonClass" onclick="checkAnswer()">Absenden</button><br>
    <button style="display: none;"  onclick="showNextQuestion()">N&auml;chste Frage</button>
    <div id="result"></div> <!-- Hier wird das Ergebnis angezeigt -->
  `
);

const questionAdap7 = new QuestionTemplate(
    "Was sind die Haupttreiber des Klimawandels in staedtischen Gebieten?",
    ["Niedrige Bevoelkerungsdichte und geringer Energieverbrauch", "Hohe Anzahl an Gruenflaechen und Parks", "Demografische Struktur, Wirtschaftswachstum, individuelles Einkommen und Lebensstil, Gebaeude", "Geringe Anzahl an Gebaeuden und Infrastrukturen"],
    "Demografische Struktur, Wirtschaftswachstum, individuelles Einkommen und Lebensstil, Gebaeude",
    `
    <h2>Was sind die Haupttreiber des Klimawandels in st&auml;dtischen Gebieten?</h2>
    <input type="radio" name="answer" value="Niedrige Bevoelkerungsdichte und geringer Energieverbrauch"> Niedrige Bev&ouml;lkerungsdichte und geringer Energieverbrauch <br>
    <input type="radio" name="answer" value="Hohe Anzahl an Gruenflaechen und Parks"> Hohe Anzahl an Gr&uuml;nfl&auml;chen und Parks <br>
    <input type="radio" name="answer" value="Demografische Struktur, Wirtschaftswachstum, individuelles Einkommen und Lebensstil, Gebaeude"> Demografische Struktur, Wirtschaftswachstum, individuelles Einkommen und Lebensstil, Geb&auml;ude <br>
    <input type="radio" name="answer" value="Geringe Anzahl an Gebaeuden und Infrastrukturen"> Geringe Anzahl an Geb&auml;uden und Infrastrukturen <br>
    <button class="AbsendenButtonClass" onclick="checkAnswer()">Absenden</button><br>
    <button style="display: none;"  onclick="showNextQuestion()">N&auml;chste Frage</button>
    <div id="result"></div> <!-- Hier wird das Ergebnis angezeigt -->
  `
);

const questionAdap8 = new QuestionTemplate(
    "Die Energieverbrauchsrate von staedtischen Gebieten ist doppelt so hoch wie in laendlichen Gebieten.",
    ["wahr", "falsch"],
    "wahr",
    `
    <h2>Die Energieverbrauchsrate von st&auml;dtischen Gebieten ist doppelt so hoch wie in l&auml;ndlichen Gebieten.</h2>
    <input type="radio" name="answer" value="wahr"> wahr <br>
    <input type="radio" name="answer" value="falsch"> falsch <br>
    <button class="AbsendenButtonClass" onclick="checkAnswer()">Absenden</button><br>
    <button style="display: none;"  onclick="showNextQuestion()">N&auml;chste Frage</button>
    <div id="result"></div> <!-- Hier wird das Ergebnis angezeigt -->
  `
);

const questionAdap9 = new QuestionTemplate(
    "Was ist keine Maßnahme gegen den Klimawandel in Staedten?",
    ["Deisolierung der Gebaeude", "Effizienterer Energieverbrauch", "Entwicklung gruener Infrastrukturen", "Foerderung von multimodalem und hydroelektrisch betriebenem Verkehr"],
    "Deisolierung der Gebaeude",
    `
    <h2>Was ist keine Ma&szlig;nahme gegen den Klimawandel in St&auml;dten?</h2>
    <input type="radio" name="answer" value="Deisolierung der Gebaeude"> Deisolierung der Geb&auml;ude <br>
    <input type="radio" name="answer" value="Effizienterer Energieverbrauch"> Effizienterer Energieverbrauch <br>
    <input type="radio" name="answer" value="Entwicklung gruener Infrastrukturen"> Entwicklung gr&uuml;ner Infrastrukturen <br>
    <input type="radio" name="answer" value="Foerderung von multimodalem und hydroelektrisch betriebenem Verkehr"> F&ouml;rderung von multimodalem und hydroelektrisch betriebenem Verkehr <br>
    <button class="AbsendenButtonClass" onclick="checkAnswer()">Absenden</button><br>
    <button style="display: none;"  onclick="showNextQuestion()">N&auml;chste Frage</button>
    <div id="result"></div> <!-- Hier wird das Ergebnis angezeigt -->
  `
);

// ----------------------------- QUIZ ----------------------------- //

const quizUeber = new QuizTemplate("Quiz Ueberblick 1");
quizUeber.addQuestion(1 ,question1);
quizUeber.addQuestion(2 ,question2);
quizUeber.addQuestion(3, question3);
quizUeber.addQuestion(4 ,question4);

const quizUeber2 = new QuizTemplate("Quiz Ueberblick 2");
quizUeber2.addQuestion(1 ,question5);
quizUeber2.addQuestion(2 ,question6);
quizUeber2.addQuestion(3, question7);
quizUeber2.addQuestion(4 ,question8);

const quizUeber3 = new QuizTemplate("Quiz Ueberblick 3");
quizUeber3.addQuestion(1 ,question9);
quizUeber3.addQuestion(2 ,question10);
quizUeber3.addQuestion(3, question11);
quizUeber3.addQuestion(4 ,question12);

const quizPH = new QuizTemplate("Quiz Planetary Health 1");
quizPH.addQuestion(1, questionPH1);
quizPH.addQuestion(2, questionPH2);
quizPH.addQuestion(3, questionPH3);
quizPH.addQuestion(4, questionPH4);

const quizPH2 = new QuizTemplate("Quiz Planetary Health 2");
quizPH2.addQuestion(1, questionPH5);
quizPH2.addQuestion(2, questionPH6);
quizPH2.addQuestion(3, questionPH7);
quizPH2.addQuestion(4, questionPH8);

const quizPH3 = new QuizTemplate("Quiz Planetary Health 3");
quizPH3.addQuestion(1, questionPH9);
quizPH3.addQuestion(2, questionPH10);
quizPH3.addQuestion(3, questionPH11);
quizPH3.addQuestion(4, questionPH12);

const quizAdap = new QuizTemplate("Quiz Adaption 1");
quizAdap.addQuestion(1, questionAdap1);
quizAdap.addQuestion(2, questionAdap2);
quizAdap.addQuestion(3, questionAdap3);

const quizAdap2 = new QuizTemplate("Quiz Adaption 2");
quizAdap2.addQuestion(1, questionAdap4);
quizAdap2.addQuestion(2, questionAdap5);
quizAdap2.addQuestion(3, questionAdap6);

const quizAdap3 = new QuizTemplate("Quiz Adaption 3");
quizAdap3.addQuestion(1, questionAdap7);
quizAdap3.addQuestion(2, questionAdap8);
quizAdap3.addQuestion(3, questionAdap9);

const quizMiti = new QuizTemplate("Quiz Mitigation 1");
quizMiti.addQuestion(1, questionMiti1);
quizMiti.addQuestion(2, questionMiti2);
quizMiti.addQuestion(3, questionMiti3);
quizMiti.addQuestion(4, questionMiti4);

const quizMiti2 = new QuizTemplate("Quiz Mitigation 2");
quizMiti2.addQuestion(1, questionMiti5);
quizMiti2.addQuestion(2, questionMiti6);
quizMiti2.addQuestion(3, questionMiti7);
quizMiti2.addQuestion(4, questionMiti8);

const quizMiti3 = new QuizTemplate("Quiz Mitigation 3");
quizMiti3.addQuestion(1, questionMiti9);
quizMiti3.addQuestion(2, questionMiti10);
quizMiti3.addQuestion(3, questionMiti11);
quizMiti3.addQuestion(4, questionMiti12);

const quizUC = new QuizTemplate("Quiz Use Case");
quizMiti3.addQuestion(1, questionMiti9);
quizMiti3.addQuestion(2, questionMiti10);
quizMiti3.addQuestion(3, questionMiti11);
quizMiti3.addQuestion(4, questionMiti12);

// --------------------------------------- MAPS SETZEN -------------------------------- //

mapOfQuiz.set("Quiz Ueberblick 1", quizUeber);
mapOfQuiz.set("Quiz Ueberblick 2", quizUeber2);
mapOfQuiz.set("Quiz Ueberblick 3", quizUeber3);
mapOfQuiz.set("Quiz Planetary Health 1", quizPH);
mapOfQuiz.set("Quiz Planetary Health 2", quizPH2);
mapOfQuiz.set("Quiz Planetary Health 3", quizPH3);
mapOfQuiz.set("Quiz Adaption 1", quizAdap);
mapOfQuiz.set("Quiz Adaption 2", quizAdap2);
mapOfQuiz.set("Quiz Adaption 3", quizAdap3);
mapOfQuiz.set("Quiz Mitigation 1", quizMiti);
mapOfQuiz.set("Quiz Mitigation 2", quizMiti2);
mapOfQuiz.set("Quiz Mitigation 3", quizMiti3);
mapOfQuiz.set("Quiz Use Case", quizUC);


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
