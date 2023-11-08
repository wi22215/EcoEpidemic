
const mapOfQuiz = new Map();
const mapQuizOrder = new Map();

//------------------------------------- QUESTIONS ---------------------------------//

const questionUeber1 = new QuestionTemplate(
    "Welches Thema wird im Folgenden nicht naeher beleuchtet?",
    ["Anpassung des Menschens","Planetary Health", "Verringerung der Treibhausgase", "Zunehmende Hitzegefahr"],
    "Zunehmende Hitzegefahr",
    `
    <div style=\"font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f0f0f0; padding: 5px; border-radius: 5px; text-align: left;\">
    <h2 style=\"font-size: 2.2em; color: #93C5CC; font-weight: bold; margin-bottom: 20px;\">Welches Thema wird im Folgenden nicht n&auml;her beleuchtet?</h2>
    <input type="radio" name="answer" value="Anpassung des Menschens"> <span style=\"font-size: 1.1em;\">Anpassung des Menschens</span> <br>
    <input type="radio" name="answer" value="Planetary Health"> <span style=\"font-size: 1.1em;\">Planetary Health</span> <br>
    <input type="radio" name="answer" value="Verringerung der Treibhausgase"> <span style=\"font-size: 1.1em;\">Verringerung der Treibhausgase</span><br>
    <input type="radio" name="answer" value="Zunehmende Hitzegefahr"> <span style=\"font-size: 1.1em;\">Zunehmende Hitzegefahr</span><br>
    <br>
    <button class="AbsendenButtonClass" onclick="checkAnswer()">Absenden</button><br>
    <button style="display: none;"  onclick="showNextQuestion()">N&auml;chste Frage</button>
    </div>
    <div id="result"></div>
  `
);

const questionUeber2 = new QuestionTemplate(
    "In welche Kategorie kann Luftverschmutzung eingeordnet werden?",
    ["Erhoehte CO2-Level","Steigender Meeresspiegel", "Vermehrte Extremwetterevents", "Steigende Temperaturen"],
    "Erhoehte CO2-Level",
    `
    <div style=\"font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f0f0f0; padding: 5px; border-radius: 5px; text-align: left;\">
    <h2 style=\"font-size: 2.2em; color: #93C5CC; font-weight: bold; margin-bottom: 20px;\">In welche Kategorie kann Luftverschmutzung eingeordnet werden?</h2>
    <input type="radio" name="answer" value="Erhoehte CO2-Level"> <span style=\"font-size: 1.1em;\">Erh&ouml;hte CO2-Level</span> <br>
    <input type="radio" name="answer" value="Steigender Meeresspiegel"> <span style=\"font-size: 1.1em;\">Steigender Meeresspiegel</span> <br>
    <input type="radio" name="answer" value="Vermehrte Extremwetterevents"> <span style=\"font-size: 1.1em;\">Vermehrte Extremwetterevents</span><br>
    <input type="radio" name="answer" value="Steigende Temperaturen"> <span style=\"font-size: 1.1em;\">Steigende Temperaturen</span><br>
    <br>
    <button class="AbsendenButtonClass" onclick="checkAnswer()">Absenden</button><br>
    <button style="display: none;"  onclick="showNextQuestion()">N&auml;chste Frage</button>
    </div>
    <div id="result"></div> <!-- Hier wird das Ergebnis angezeigt -->
  `
);


const questionPH1 = new QuestionTemplate(
    "Was sind Hauptursachen der Luftverschmutzung neben industriellen Prozessen?",
    ["Die Belastung urbaner Gebiete durch steigende Bevoelkerungszahlen und die allgemeine Nutzung von Elektrogeraeten.","Die Verbrennung fossiler Brennstoffe, vor allem in Kraftwerken und Autos, der Einsatz von Duengemitteln und Pestiziden in der Landwirtschaft und die Emissionen aus Abfallentsorgungsprozessen.", "Die uebermaessige Nutzung von Internet und digitalen Medien sowie der Bau von Infrastrukturen wie Strassen und Bruecken", "Die Produktion und der Verbrauch von Lebensmitteln, vor allem in Grosskuechen und Restaurants, sowie der Einsatz von erneuerbaren Energien"],
    "Die Verbrennung fossiler Brennstoffe, vor allem in Kraftwerken und Autos, der Einsatz von Duengemitteln und Pestiziden in der Landwirtschaft und die Emissionen aus Abfallentsorgungsprozessen.",
    `
    <div style=\"font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f0f0f0; padding: 5px; border-radius: 5px; text-align: left;\">
    <h2 style=\"font-size: 2.2em; color: #93C5CC; font-weight: bold; margin-bottom: 20px;\">Was sind Hauptursachen der Luftverschmutzung neben industriellen Prozessen?</h2>
    <input type="radio" name="answer" value="Die Belastung urbaner Gebiete durch steigende Bevoelkerungszahlen und die allgemeine Nutzung von Elektrogeraeten">   <span style=\"font-size: 1.1em;\">Die Belastung urbaner Gebiete durch steigende Bev&ouml;lkerungszahlen und die allgemeine Nutzung von Elektroger&auml;ten</span><br>
    <input type="radio" name="answer" value="Die Verbrennung fossiler Brennstoffe, vor allem in Kraftwerken und Autos, der Einsatz von Duengemitteln und Pestiziden in der Landwirtschaft und die Emissionen aus Abfallentsorgungsprozessen.">  <span style=\"font-size: 1.1em;\">Die Verbrennung fossiler Brennstoffe, vor allem in Kraftwerken und Autos, der Einsatz von D&uuml;ngemitteln und Pestiziden in der Landwirtschaft und die Emissionen aus Abfallentsorgungsprozessen.</span><br>
    <input type="radio" name="answer" value="Die uebermaessige Nutzung von Internet und digitalen Medien sowie der Bau von Infrastrukturen wie Strassen und Bruecken.">   <span style=\"font-size: 1.1em;\">Die &uuml;berm&auml;&szlig;ige Nutzung von Internet und digitalen Medien, sowie der Bau von Infrastrukturen wie Stra&szlig;en und Br&uuml;cken.</span><br>
    <input type="radio" name="answer" value="Die Produktion und der Verbrauch von Lebensmitteln, vor allem in Grosskuechen und Restaurants, sowie der Einsatz von erneuerbaren Energien."> <span style=\"font-size: 1.1em;\">Die Produktion und der Verbrauch von Lebensmitteln, vor allem in Gro&szlig;k&uuml;chen und Restaurants, sowie der Einsatz von erneuerbaren Energien.</span><br>
    <br>
    <button class="AbsendenButtonClass" onclick="checkAnswer()">Absenden</button><br>
    <button style="display: none;"  onclick="showNextQuestion()">N&auml;chste Frage</button>
    </div>
    <div id="result"></div> <!-- Hier wird das Ergebnis angezeigt -->
  `
);

const questionPH2 = new QuestionTemplate(
    "Was verursacht Luftverschmutzung?",
    ["Die Anwesenheit von Buechern in der Bibliothek","Das Vorhandensein von Fremd- oder Schadstoffen in der Luft", "Die uebermaessige Nutzung von elektrischen Geraeten", "Die Zunahme von Autos auf den Strassen, unabhaengig von ihrer Emission"],
    "Das Vorhandensein von Fremd- oder Schadstoffen in der Luft",
    `
    <div style=\"font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f0f0f0; padding: 5px; border-radius: 5px; text-align: left;\">
    <h2 style=\"font-size: 2.2em; color: #93C5CC; font-weight: bold; margin-bottom: 20px;\">Was verursacht Luftverschmutzung?</h2>
    <input type="radio" name="answer" value="Die Anwesenheit von Buechern in der Bibliothek">  <span style=\"font-size: 1.1em;\">Die Anwesenheit von B&uuml;chern in der Bibliothek</span><br>
    <input type="radio" name="answer" value="Das Vorhandensein von Fremd- oder Schadstoffen in der Luft">  <span style=\"font-size: 1.1em;\">Das Vorhandensein von Fremd- oder Schadstoffen in der Luft</span><br>
    <input type="radio" name="answer" value="Die uebermaessige Nutzung von elektrischen Geraeten">   <span style=\"font-size: 1.1em;\">Die &uuml;berm&auml;&szlig;ige Nutzung von elektrischen Ger&auml;ten</span><br>
    <input type="radio" name="answer" value="Die Zunahme von Autos auf den Strassen, unabhaengig von ihrer Emission">  <span style=\"font-size: 1.1em;\">Die Zunahme von Autos auf den Stra&szlig;en, unabh&auml;ngig von ihrer Emission <br>
    <br>
    <button class="AbsendenButtonClass" onclick="checkAnswer()">Absenden</button><br>
    <button style="display: none;"  onclick="showNextQuestion()">N&auml;chste Frage</button>
    </div>
    <div id="result"></div> <!-- Hier wird das Ergebnis angezeigt -->
  `
);

const questionPH3 = new QuestionTemplate(
    "Welcher natuerliche Vorgang ist KEINE Ursache fuer Luftverschmutzung?",
    ["Vulkanausbrueche","Waldbraende", "Staubstuerme", "Gezeitenwechsel in den Ozeanen"],
    "Gezeitenwechsel in den Ozeanen",
    `
    <div style=\"font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f0f0f0; padding: 5px; border-radius: 5px; text-align: left;\">
    <h2 style=\"font-size: 2.2em; color: #93C5CC; font-weight: bold; margin-bottom: 20px;\">Welcher nat&uuml;rliche Vorgang ist KEINE Ursache f&uuml;r Luftverschmutzung?</h2>
    <input type="radio" name="answer" value="Vulkanausbrueche">  <span style=\"font-size: 1.1em;\">Vulkanausbr&uuml;che</span><br>
    <input type="radio" name="answer" value="Waldbraende">  <span style=\"font-size: 1.1em;\">Waldbr&auml;nde</span><br>
    <input type="radio" name="answer" value="Staubstuerme">   <span style=\"font-size: 1.1em;\">Staubst&uuml;rme</span><br>
    <input type="radio" name="answer" value="Gezeitenwechsel in den Ozeanen"> <span style=\"font-size: 1.1em;\">Gezeitenwechsel in den Ozeanen</span><br>
    <br>
    <button class="AbsendenButtonClass" onclick="checkAnswer()">Absenden</button><br>
    <button style="display: none;"  onclick="showNextQuestion()">N&auml;chste Frage</button>
    </div>
    <div id="result"></div> <!-- Hier wird das Ergebnis angezeigt -->
  `
);

const questionPH4 = new QuestionTemplate(
    "Wie kann Luftverschmutzung entgegengewirkt werden?",
    ["Durch die Intensivierung von Forschung und Entwicklung in der Kernfusion als sauberere Energiequelle."," Durch die Integration vertikaler Gaerten in staedtischen Gebaeuden zur Verbesserung der staedtischen Luftqualitaet.", "Durch staatliche Regulierungen, den Einsatz von Technologien wie emissionsarmen Fahrzeugen, verstaerktem Einsatz erneuerbarer Energien und bewusste Entscheidungen der Einzelpersonen.", "Durch die Einrichtung globaler `Luftreinigungsstationen´, die kontinuierlich schaedliche Partikel aus der Atmosphaere filtern."],
    "Durch staatliche Regulierungen, den Einsatz von Technologien wie emissionsarmen Fahrzeugen, verstaerktem Einsatz erneuerbarer Energien und bewusste Entscheidungen der Einzelpersonen.",
    `
    <div style=\"font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f0f0f0; padding: 5px; border-radius: 5px; text-align: left;\">
    <h2 style=\"font-size: 2.2em; color: #93C5CC; font-weight: bold; margin-bottom: 20px;\">Wie kann Luftverschmutzung entgegengewirkt werden?</h2>
    <input type="radio" name="answer" value="Durch die Intensivierung von Forschung und Entwicklung in der Kernfusion als sauberere Energiequelle.">  <span style=\"font-size: 1.1em;\">Durch die Intensivierung von Forschung und Entwicklung in der Kernfusion als sauberere Energiequelle.</span><br>
    <input type="radio" name="answer" value="Durch die Integration vertikaler Gaerten in staedtischen Gebaeuden zur Verbesserung der staedtischen Luftqualitaet.">   <span style=\"font-size: 1.1em;\">Durch die Integration vertikaler G&auml;rten in st&auml;dtischen Geb&auml;uden zur Verbesserung der st&auml;dtischen Luftqualit&auml;t.</span><br>
    <input type="radio" name="answer" value="Durch staatliche Regulierungen, den Einsatz von Technologien wie emissionsarmen Fahrzeugen, verstaerktem Einsatz erneuerbarer Energien und bewusste Entscheidungen der Einzelpersonen.">   <span style=\"font-size: 1.1em;\">Durch staatliche Regulierungen, den Einsatz von Technologien wie emissionsarmen Fahrzeugen, verst&auml;rktem Einsatz erneuerbarer Energien und bewusste Entscheidungen der Einzelpersonen.</span><br>
    <input type="radio" name="answer" value="Durch die Einrichtung globaler Luftreinigungsstationen, die kontinuierlich schaedliche Partikel aus der Atmosphaere filtern.">  <span style=\"font-size: 1.1em;\">Durch die Einrichtung globaler "Luftreinigungsstationen", die kontinuierlich sch&auml;dliche Partikel aus der Atmosph&auml;re filtern.</span><br>
    <br>
    <button class="AbsendenButtonClass" onclick="checkAnswer()">Absenden</button><br>
    <button style="display: none;"  onclick="showNextQuestion()">N&auml;chste Frage</button>
    </div>
    <div id="result"></div> <!-- Hier wird das Ergebnis angezeigt -->
  `
);



const questionMiti1 = new QuestionTemplate(
    "Zu welcher Mitigationsstrategie gehoert Mineralkarbonisierung?",
    ["Veraenderung der Strahlungsbilanz der Erde", "Reduktion von Treibhausgasausstossen", "Negative Emissionstechnologien"],
    "Negative Emissionstechnologien",
    `
    <div style=\"font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f0f0f0; padding: 5px; border-radius: 5px; text-align: left;\">
    <h2 style=\"font-size: 2.2em; color: #93C5CC; font-weight: bold; margin-bottom: 20px;\">Zu welcher Mitigationsstrategie geh&ouml;rt Mineralkarbonisierung?</h2>
    <input type="radio" name="answer" value="Veraenderung der Strahlungsbilanz der Erde"> <span style=\"font-size: 1.1em;\">Ver&auml;nderung der Strahlungsbilanz der Erde</span><br>
    <input type="radio" name="answer" value="Reduktion von Treibhausgasausstossen"> <span style=\"font-size: 1.1em;\">Reduktion von Treibhausgasaussto&szlig;en</span><br>
    <input type="radio" name="answer" value="Negative Emissionstechnologien"> <span style=\"font-size: 1.1em;\">Negative Emissionstechnologien</span><br>
    <br>
    <button class="AbsendenButtonClass" onclick="checkAnswer()">Absenden</button><br>
    <button style="display: none;"  onclick="showNextQuestion()">N&auml;chste Frage</button>
    </div>
    <div id="result"></div> <!-- Hier wird das Ergebnis angezeigt -->
  `
);

const questionMiti2 = new QuestionTemplate(
    "Was ist kein Treibhausgas laut dem Kyotoprotokoll?",
    ["CH4", "H2Se", "SF6", "N2O"],
    "H2Se",
    `
    <div style=\"font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f0f0f0; padding: 5px; border-radius: 5px; text-align: left;\">
    <h2 style=\"font-size: 2.2em; color: #93C5CC; font-weight: bold; margin-bottom: 20px;\">Was ist kein Treibhausgas laut dem Kyotoprotokoll?</h2>
    <input type="radio" name="answer" value="CH4"> <span style=\"font-size: 1.1em;\">CH4</span><br>
    <input type="radio" name="answer" value="H2Se"> <span style=\"font-size: 1.1em;\">H2Se</span><br>
    <input type="radio" name="answer" value="SF6"> <span style=\"font-size: 1.1em;\">SF6</span><br>
    <input type="radio" name="answer" value="N2O"> <span style=\"font-size: 1.1em;\">N2O</span><br>
    <br>
    <button class="AbsendenButtonClass" onclick="checkAnswer()">Absenden</button><br>
    <button style="display: none;"  onclick="showNextQuestion()">N&auml;chste Frage</button>
    </div>
    <div id="result"></div> <!-- Hier wird das Ergebnis angezeigt -->
  `
);

const questionMiti3 = new QuestionTemplate(
    "Negative Emissionstechnologien sind ein Ersatz fuer konventionelle Dekarbonisierung.",
    ["wahr", "falsch"],
    "falsch",
    `
    <div style=\"font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f0f0f0; padding: 5px; border-radius: 5px; text-align: left;\">
    <h2 style=\"font-size: 2.2em; color: #93C5CC; font-weight: bold; margin-bottom: 20px;\">Negative Emissionstechnologien sind ein Ersatz f&uuml;r konventionelle Dekarbonisierung.</h2>
    <input type="radio" name="answer" value="wahr"> <span style=\"font-size: 1.1em;\">wahr</span><br>
    <input type="radio" name="answer" value="falsch"> <span style=\"font-size: 1.1em;\">falsch</span><br>
    <br>
    <button class="AbsendenButtonClass" onclick="checkAnswer()">Absenden</button><br>
    <button style="display: none;"  onclick="showNextQuestion()">N&auml;chste Frage</button>
    </div>
    <div id="result"></div> <!-- Hier wird das Ergebnis angezeigt -->
  `
);

const questionMiti4 = new QuestionTemplate(
    "Welcher Sektor hatte 2020 die groessten Treibhausgasemissionen?",
    ["Energie", "Gebaeude", "Transport", "Industrie"],
    "Industrie",
    `
    <div style=\"font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f0f0f0; padding: 5px; border-radius: 5px; text-align: left;\">
    <h2 style=\"font-size: 2.2em; color: #93C5CC; font-weight: bold; margin-bottom: 20px;\">Welcher Sektor hatte 2020 die gr&ouml;&szlig;ten Treibhausgasemissionen?</h2>
    <input type="radio" name="answer" value="Energie"> <span style=\"font-size: 1.1em;\">Energie</span><br>
    <input type="radio" name="answer" value="Gebaeude"> <span style=\"font-size: 1.1em;\">Geb&auml;ude</span><br>
    <input type="radio" name="answer" value="Transport"> <span style=\"font-size: 1.1em;\">Transport</span><br>
    <input type="radio" name="answer" value="Industrie"> <span style=\"font-size: 1.1em;\">Industrie</span><br>
    <br>
    <button class="AbsendenButtonClass" onclick="checkAnswer()">Absenden</button><br>
    <button style="display: none;"  onclick="showNextQuestion()">N&auml;chste Frage</button>
    </div>
    <div id="result"></div> <!-- Hier wird das Ergebnis angezeigt -->
  `
);

const questionMiti5 = new QuestionTemplate(
    "Welches der folgenden hat den hoechsten Albedo Wert?",
    ["Terracottafarbene Haeuserdaecher", "Indischer Ozean", "Groenlaendisches Eisschild", "Regenwaelder im Kongo-Becken"],
    "Groenlaendisches Eisschild",
    `
    <div style=\"font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f0f0f0; padding: 5px; border-radius: 5px; text-align: left;\">
    <h2 style=\"font-size: 2.2em; color: #93C5CC; font-weight: bold; margin-bottom: 20px;\">Welches der folgenden hat den h&ouml;chsten Albedo Wert?</h2>
    <input type="radio" name="answer" value="Terracottafarbene Haeuserdaecher"> <span style=\"font-size: 1.1em;\">Terracottafarbene H&auml;userd&auml;cher</span> <br>
    <input type="radio" name="answer" value="Indischer Ozean"> <span style=\"font-size: 1.1em;\">Indischer Ozean</span> <br>
    <input type="radio" name="answer" value="Groenlaendisches Eisschild"> <span style=\"font-size: 1.1em;\">Gr&ouml;nl&auml;ndisches Eisschild</span> <br>
    <input type="radio" name="answer" value="Regenwaelder im Kongo-Becken"> <span style=\"font-size: 1.1em;\">Regenw&auml;lder im Kongo-Becken</span> <br>
    <br>
    <button class="AbsendenButtonClass" onclick="checkAnswer()">Absenden</button><br>
    <button style="display: none;" id="nextButton" onclick="showNextQuestion()">N&auml;chste Frage</button>
    </div>
    <div id="result"></div> <!-- Hier wird das Ergebnis angezeigt -->
  `
);

const questionMiti6 = new QuestionTemplate(
    "Von wie vielen Laendern wurde das Pariser Klimaabkommen unterschrieben?",
    ["ca. 50", "ca. 100", "ca. 150", "ca. 200"],
    "ca. 200",
    `
    <div style=\"font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f0f0f0; padding: 5px; border-radius: 5px; text-align: left;\">
    <h2 style=\"font-size: 2.2em; color: #93C5CC; font-weight: bold; margin-bottom: 20px;\">Von wie vielen L&auml;ndern wurde das Pariser Klimaabkommen unterschrieben?</h2>
    <input type="radio" name="answer" value="ca. 50"> <span style=\"font-size: 1.1em;\">ca. 50</span> <br>
    <input type="radio" name="answer" value="ca. 100"> <span style=\"font-size: 1.1em;\">ca. 100</span> <br>
    <input type="radio" name="answer" value="ca. 150"> <span style=\"font-size: 1.1em;\">ca. 150</span> <br>
    <input type="radio" name="answer" value="ca. 200"> <span style=\"font-size: 1.1em;\">ca. 200</span> <br>
    <br>
    <button class="AbsendenButtonClass" onclick="checkAnswer()">Absenden</button><br>
    <button style="display: none;" id="nextButton" onclick="showNextQuestion()">N&auml;chste Frage</button>
    </div>
    <div id="result"></div> <!-- Hier wird das Ergebnis angezeigt -->
  `
);

const questionMiti7 = new QuestionTemplate(
    "Die BRICS-Laender reduzieren ihren CO2 Ausstoss, waehrend die OECD-Laender ihren CO2 Ausstoss erhoehen.",
    ["wahr", "falsch"],
    "falsch",
    `
    <div style=\"font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f0f0f0; padding: 5px; border-radius: 5px; text-align: left;\">
    <h2 style=\"font-size: 2.2em; color: #93C5CC; font-weight: bold; margin-bottom: 20px;\">Die BRICS-L&auml;nder reduzieren ihren CO2 Aussto&szlig;, w&auml;hrend die OECD-L&auml;nder ihren CO2 Aussto&szlig; erh&ouml;hen.</h2>
    <input type="radio" name="answer" value="wahr"> <span style=\"font-size: 1.1em;\">wahr</span> <br>
    <input type="radio" name="answer" value="falsch"> <span style=\"font-size: 1.1em;\">falsch</span> <br>
    <br>
    <button class="AbsendenButtonClass" onclick="checkAnswer()">Absenden</button><br>
    <button style="display: none;" id="nextButton" onclick="showNextQuestion()">N&auml;chste Frage</button>
    </div>
    <div id="result"></div> <!-- Hier wird das Ergebnis angezeigt -->
  `
);

const questionMiti8 = new QuestionTemplate(
    "Welches dieser Klimaziele von Deutschland gibt es nicht?",
    ["2045: Reduktion von Treibhausgasemissionen um 65%", "Ausbau erneuerbarer Energien", "CO2-abhaengige LKW-Maut", "Foerderung energetisches Sanieren"],
      "2045: Reduktion von Treibhausgasemissionen um 65%",
    `
    <div style=\"font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f0f0f0; padding: 5px; border-radius: 5px; text-align: left;\">
    <h2 style=\"font-size: 2.2em; color: #93C5CC; font-weight: bold; margin-bottom: 20px;\">Welches dieser Klimaziele von Deutschland gibt es nicht?</h2>
    <input type="radio" name="answer" value="2045: Reduktion von Treibhausgasemissionen um 65%"> <span style=\"font-size: 1.1em;\">2045: Reduktion von Treibhausgasemissionen um 65%</span> <br>
    <input type="radio" name="answer" value="Ausbau erneuerbarer Energien"> <span style=\"font-size: 1.1em;\">Ausbau erneuerbarer Energien</span> <br>
    <input type="radio" name="answer" value="CO2-abhaengige LKW-Maut"> <span style=\"font-size: 1.1em;\">CO2-abh&auml;ngige LKW-Maut</span> <br>
    <input type="radio" name="answer" value="Foerderung energetisches Sanieren"> <span style=\"font-size: 1.1em;\">F&ouml;rderung energetisches Sanieren</span> <br>
    <br>
    <button class="AbsendenButtonClass" onclick="checkAnswer()">Absenden</button><br>
    <button style="display: none;" id="nextButton" onclick="showNextQuestion()">N&auml;chste Frage</button>
    </div>
    <div id="result"></div> <!-- Hier wird das Ergebnis angezeigt -->
  `
);

const questionAdap1 = new QuestionTemplate(
    "Was sind die Haupttreiber des Klimawandels in staedtischen Gebieten?",
    ["Niedrige Bevoelkerungsdichte und geringer Energieverbrauch", "Hohe Anzahl an Gruenflaechen und Parks", "Demografische Struktur, Wirtschaftswachstum, individuelles Einkommen und Lebensstil, Gebaeude", "Geringe Anzahl an Gebaeuden und Infrastrukturen"],
    "Demografische Struktur, Wirtschaftswachstum, individuelles Einkommen und Lebensstil, Gebaeude",
    `
    <div style=\"font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f0f0f0; padding: 5px; border-radius: 5px; text-align: left;\">
    <h2 style=\"font-size: 2.2em; color: #93C5CC; font-weight: bold; margin-bottom: 20px;\">Was sind die Haupttreiber des Klimawandels in st&auml;dtischen Gebieten?</h2>
    <input type="radio" name="answer" value="Niedrige Bevoelkerungsdichte und geringer Energieverbrauch"> <span style=\"font-size: 1.1em;\">Niedrige Bev&ouml;lkerungsdichte und geringer Energieverbrauch</span><br>
    <input type="radio" name="answer" value="Hohe Anzahl an Gruenflaechen und Parks"> <span style=\"font-size: 1.1em;\">Hohe Anzahl an Gr&uuml;nfl&auml;chen und Parks</span><br>
    <input type="radio" name="answer" value="Demografische Struktur, Wirtschaftswachstum, individuelles Einkommen und Lebensstil, Gebaeude"> <span style=\"font-size: 1.1em;\">Demografische Struktur, Wirtschaftswachstum, individuelles Einkommen und Lebensstil, Geb&auml;ude</span><br>
    <input type="radio" name="answer" value="Geringe Anzahl an Gebaeuden und Infrastrukturen"> <span style=\"font-size: 1.1em;\">Geringe Anzahl an Geb&auml;uden und Infrastrukturen</span><br>
    <br>
    <button class="AbsendenButtonClass" onclick="checkAnswer()">Absenden</button><br>
    <button style="display: none;"  onclick="showNextQuestion()">N&auml;chste Frage</button>
    </div>
    <div id="result"></div> <!-- Hier wird das Ergebnis angezeigt -->
  `
);

const questionAdap2 = new QuestionTemplate(
    "Die Energieverbrauchsrate von staedtischen Gebieten ist doppelt so hoch wie in laendlichen Gebieten.",
    ["wahr", "falsch"],
    "wahr",
    `
    <div style=\"font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f0f0f0; padding: 5px; border-radius: 5px; text-align: left;\">
    <h2 style=\"font-size: 2.2em; color: #93C5CC; font-weight: bold; margin-bottom: 20px;\">Die Energieverbrauchsrate von st&auml;dtischen Gebieten ist doppelt so hoch wie in l&auml;ndlichen Gebieten.</h2>
    <input type="radio" name="answer" value="wahr"> <span style=\"font-size: 1.1em;\">wahr</span><br>
    <input type="radio" name="answer" value="falsch"> <span style=\"font-size: 1.1em;\">falsch</span><br>
    <br>
    <button class="AbsendenButtonClass" onclick="checkAnswer()">Absenden</button><br>
    <button style="display: none;"  onclick="showNextQuestion()">N&auml;chste Frage</button>
    </div>
    <div id="result"></div> <!-- Hier wird das Ergebnis angezeigt -->
  `
    );

const questionAdap3 = new QuestionTemplate(
    "Was ist keine Massnahme gegen den Klimawandel in Staedten?",
    ["Deisolierung der Gebaeude", "Effizienterer Energieverbrauch", "Entwicklung gruener Infrastrukturen", "Foerderung von multimodalem und hydroelektrisch betriebenem Verkehr"],
    "Deisolierung der Gebaeude",
    `
    <div style=\"font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f0f0f0; padding: 5px; border-radius: 5px; text-align: left;\">
    <h2 style=\"font-size: 2.2em; color: #93C5CC; font-weight: bold; margin-bottom: 20px;\">Was ist keine Ma&szlig;nahme gegen den Klimawandel in St&auml;dten?</h2>
    <input type="radio" name="answer" value="Deisolierung der Gebaeude"> <span style=\"font-size: 1.1em;\">Deisolierung der Geb&auml;ude</span><br>
    <input type="radio" name="answer" value="Effizienterer Energieverbrauch"> <span style=\"font-size: 1.1em;\">Effizienterer Energieverbrauch</span><br>
    <input type="radio" name="answer" value="Entwicklung gruener Infrastrukturen"> <span style=\"font-size: 1.1em;\">Entwicklung gr&uuml;ner Infrastrukturen</span><br>
    <input type="radio" name="answer" value="Foerderung von multimodalem und hydroelektrisch betriebenem Verkehr"> <span style=\"font-size: 1.1em;\">F&ouml;rderung von multimodalem und hydroelektrisch betriebenem Verkehr</span><br>
    <br>
    <button class="AbsendenButtonClass" onclick="checkAnswer()">Absenden</button><br>
    <button style="display: none;"  onclick="showNextQuestion()">N&auml;chste Frage</button>
    </div>
    <div id="result"></div> <!-- Hier wird das Ergebnis angezeigt -->
  `
);

const questionUse1 = new QuestionTemplate(
  "Welcher dieser Lebensmittel ist am Besten fuers Klima?",
  ["Avocado", "Rindfleisch", "Linsen"],
  "Linsen",
  `
  <div style=\"font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f0f0f0; padding: 5px; border-radius: 5px; text-align: left;\">
  <h2 style=\"font-size: 2.2em; color: #93C5CC; font-weight: bold; margin-bottom: 20px;\">Welcher dieser Lebensmittel ist am Besten f&uuml;rs Klima?</h2>
  <input type="radio" name="answer" value="Avocado"> <span style=\"font-size: 1.1em;\">Avocado</span><br>
  <input type="radio" name="answer" value="Rindfleisch"> <span style=\"font-size: 1.1em;\">Rindfleisch</span><br>
  <input type="radio" name="answer" value="Linsen"> <span style=\"font-size: 1.1em;\">Linsen</span><br>
  <br>
  <button class="AbsendenButtonClass" onclick="checkAnswer()">Absenden</button><br>
  <button style="display: none;"  onclick="showNextQuestion()">N&auml;chste Frage</button>
  </div>
  <div id="result"></div> <!-- Hier wird das Ergebnis angezeigt -->
`
);

const questionUse2 = new QuestionTemplate(
  "Zoonose Krankheiten werden vom Menschen auf die Tiere uebertragen.",
  ["wahr", "falsch"],
  "falsch",
  `
  <div style=\"font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f0f0f0; padding: 5px; border-radius: 5px; text-align: left;\">
  <h2 style=\"font-size: 2.2em; color: #93C5CC; font-weight: bold; margin-bottom: 20px;\">Zoonose Krankheiten werden vom Menschen auf die Tiere &uuml;bertragen.</h2>
  <input type="radio" name="answer" value="wahr"> <span style=\"font-size: 1.1em;\">wahr</span><br>
  <input type="radio" name="answer" value="falsch"> <span style=\"font-size: 1.1em;\">falsch</span><br>
  <br>
  <button class="AbsendenButtonClass" onclick="checkAnswer()">Absenden</button><br>
  <button style="display: none;"  onclick="showNextQuestion()">N&auml;chste Frage</button>
  </div>
  <div id="result"></div> <!-- Hier wird das Ergebnis angezeigt -->
`
);

const questionUse3 = new QuestionTemplate(
  "Was ist der Treibhauseffekt im Bezug auf den Klimawandel?",
  ["Die Abkuehlung der Erdatmosphaere", "Die Abnahme der globalen Niederschlaege", "Die Erwaermung der Erdoberflaeche durch natuerliche Prozesse", "Die Faehigkeit von Treibhausgasen, Waerme in der Atmosphaere zu speichern"],
  "Die Faehigkeit von Treibhausgasen, Waerme in der Atmosphaere zu speichern",
  `
  <div style=\"font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f0f0f0; padding: 5px; border-radius: 5px; text-align: left;\">
  <h2 style=\"font-size: 2.2em; color: #93C5CC; font-weight: bold; margin-bottom: 20px;\">Was ist der Treibhauseffekt im Bezug auf den Klimawandel?</h2>
  <input type="radio" name="answer" value="Die Abkuehlung der Erdatmosphaere"> <span style=\"font-size: 1.1em;\">Die Abk&uuml;hlung der Erdatmosph&auml;re</span><br>
  <input type="radio" name="answer" value="Die Abnahme der globalen Niederschlaege"> <span style=\"font-size: 1.1em;\">Die Abnahme der globalen Niederschl&auml;ge</span><br>
  <input type="radio" name="answer" value="Die Erwaermung der Erdoberflaeche durch natuerliche Prozesse"> <span style=\"font-size: 1.1em;\">Die Erw&auml;rmung der Erdoberfl&auml;che durch nat&uuml;rliche Prozesse</span><br>
  <input type="radio" name="answer" value="Die Faehigkeit von Treibhausgasen, Waerme in der Atmosphaere zu speichern"> <span style=\"font-size: 1.1em;\">Die F&auml;higkeit von Treibhausgasen, W&auml;rme in der Atmosph&auml;re zu speichern</span><br>
  <br>
  <button class="AbsendenButtonClass" onclick="checkAnswer()">Absenden</button><br>
  <button style="display: none;"  onclick="showNextQuestion()">N&auml;chste Frage</button>
  </div>
  <div id="result"></div> <!-- Hier wird das Ergebnis angezeigt -->
`
);

const questionUse4 = new QuestionTemplate(
  "Welche Massnahme kann dazu beitragen, den Klimawandel zu bekaempfen?",
  ["Reduzierung des Verbrauchs von Einwegplastik", "Erhoehung des Verbrauchs von fossilen Brennstoffen", "Abholzung von Waeldern", "Vergroesserung der Viehbestaende"],
  "Reduzierung des Verbrauchs von Einwegplastik",
  `
  <div style=\"font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f0f0f0; padding: 5px; border-radius: 5px; text-align: left;\">
  <h2 style=\"font-size: 2.2em; color: #93C5CC; font-weight: bold; margin-bottom: 20px;\">Welche Ma&szlig;nahme kann dazu beitragen, den Klimawandel zu bek&auml;mpfen?</h2>
  <input type="radio" name="answer" value="Reduzierung des Verbrauchs von Einwegplastik"> <span style=\"font-size: 1.1em;\">Reduzierung des Verbrauchs von Einwegplastik</span><br>
  <input type="radio" name="answer" value="Erhoehung des Verbrauchs von fossilen Brennstoffen"> <span style=\"font-size: 1.1em;\">Erh&ouml;hung des Verbrauchs von fossilen Brennstoffen</span><br>
  <input type="radio" name="answer" value="Abholzung von Waeldern"> <span style=\"font-size: 1.1em;\">Abholzung von W&auml;ldern</span><br>
  <input type="radio" name="answer" value="Vergroesserung der Viehbestaende"> <span style=\"font-size: 1.1em;\">Vergr&ouml;&szlig;erung der Viehbest&auml;nde</span><br>
  <br>
  <button class="AbsendenButtonClass" onclick="checkAnswer()">Absenden</button><br>
  <button style="display: none;"  onclick="showNextQuestion()">N&auml;chste Frage</button>
  </div>
  <div id="result"></div> <!-- Hier wird das Ergebnis angezeigt -->
`
);


// ----------------------------- QUIZ ----------------------------- //

const quizUeber = new QuizTemplate("Quiz Ueberblick 1");
quizUeber.addQuestion(1 ,questionUeber1);
quizUeber.addQuestion(2 ,questionUeber2);

// Wird nicht genutzt (Content coming)
const quizUeber2 = new QuizTemplate("Quiz Ueberblick 2");
quizUeber2.addQuestion(1 ,questionUeber1);
quizUeber2.addQuestion(2 ,questionUeber2);

// Wird nicht genutzt (Content coming)
const quizUeber3 = new QuizTemplate("Quiz Ueberblick 3");
quizUeber3.addQuestion(1 ,questionUeber1);
quizUeber3.addQuestion(2 ,questionUeber2);

const quizPH = new QuizTemplate("Quiz Planetary Health 1");
quizPH.addQuestion(1, questionPH1);
quizPH.addQuestion(2, questionPH2);
quizPH.addQuestion(3, questionPH3);
quizPH.addQuestion(4, questionPH4);

// Wird nicht genutzt
const quizPH2 = new QuizTemplate("Quiz Planetary Health 2");
quizPH2.addQuestion(1, questionPH1);
quizPH2.addQuestion(2, questionPH2);
quizPH2.addQuestion(3, questionPH3);
quizPH2.addQuestion(4, questionPH4);

// Wird nicht genutzt
const quizPH3 = new QuizTemplate("Quiz Planetary Health 3");
quizPH3.addQuestion(1, questionPH1);
quizPH3.addQuestion(2, questionPH2);
quizPH3.addQuestion(3, questionPH3);
quizPH3.addQuestion(4, questionPH4);

const quizAdap = new QuizTemplate("Quiz Adaption 1");
quizAdap.addQuestion(1, questionAdap1);
quizAdap.addQuestion(2, questionAdap2);
quizAdap.addQuestion(3, questionAdap3);

// Wird nicht genutzt
const quizAdap2 = new QuizTemplate("Quiz Adaption 2");
quizAdap2.addQuestion(1, questionAdap1);
quizAdap2.addQuestion(2, questionAdap2);
quizAdap2.addQuestion(3, questionAdap3);

// Wird nicht genutzt
const quizAdap3 = new QuizTemplate("Quiz Adaption 3");
quizAdap3.addQuestion(1, questionAdap1);
quizAdap3.addQuestion(2, questionAdap2);
quizAdap3.addQuestion(3, questionAdap3);

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

// Wird nicht genutzt
const quizMiti3 = new QuizTemplate("Quiz Mitigation 3");
quizMiti3.addQuestion(1, questionMiti1);
quizMiti3.addQuestion(2, questionMiti2);
quizMiti3.addQuestion(3, questionMiti3);
quizMiti3.addQuestion(4, questionMiti4);

const quizUC = new QuizTemplate("Quiz Use Case");
quizUC.addQuestion(1, questionUse1);
quizUC.addQuestion(2, questionUse2);
quizUC.addQuestion(3, questionUse3);
quizUC.addQuestion(4, questionUse4);

// --------------------------------------- MAPS SETZEN -------------------------------- //

// Map für die Zuweisung der Keys zu den Quiz
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

// Map für die Reihenfolge der Quiz
mapQuizOrder.set(1, "Quiz Ueberblick 1");
//mapQuizOrder.set(2, "Quiz Ueberblick 2");
//mapQuizOrder.set(3, "Quiz Ueberblick 3");
mapQuizOrder.set(2, "Quiz Planetary Health 1");
//mapQuizOrder.set(3, "Quiz Planetary Health 2");
//mapQuizOrder.set(4, "Quiz Planetary Health 3");
mapQuizOrder.set(3, "Quiz Adaption 1");
//mapQuizOrder.set(6, "Quiz Adaption 2");
//mapQuizOrder.set(7, "Quiz Adaption 3");
mapQuizOrder.set(4, "Quiz Mitigation 1");
mapQuizOrder.set(5, "Quiz Mitigation 2");
//mapQuizOrder.set(10, "Quiz Mitigation 3");
mapQuizOrder.set(6, "Quiz Use Case");
