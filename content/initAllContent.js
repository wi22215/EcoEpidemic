
// Erzeugen der Maps für die chronologisch korrekte Darstellung
// Diese werden unten mit Content und Quiz gefüllt
const mapAllContents = new Map();
const mapAllContentsOrder = new Map();
const mapContentOrder = new Map();
var style = document.createElement('style');
  // Füge CSS-Regeln zum <style>-Element hinzu
  style.type = 'text/css';
  style.innerHTML = `
  

  .AbsendenButtonClass {
    appearance: none;
    background-color: #6D9EA5; 
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
  .AbsendenButtonClass:focus:not(:focus-visible):not(.focus-visible) {
    box-shadow: none;
    outline: none;
  }

  .AbsendenButtonClass:hover {
    background-color: #93C5CC;
  }
  .AbsendenButtonClass:focus {
    box-shadow: rgba(46, 164, 79, .4) 0 0 0 3px;
    outline: none;
  }

  .AbsendenButtonClass:disabled {
    background-color: #93C5CC;
    border-color: rgba(27, 31, 35, .1);
    color: rgba(255, 255, 255, .8);
    cursor: default;
  }
  
  .AbsendenButtonClass:active {
    background-color: #93C5CC;
    box-shadow: rgba(20, 70, 32, .2) 0 1px 0 inset;
  }`
  ;
  // Füge das <style>-Element zum <head> hinzu
  document.getElementsByTagName('head')[0].appendChild(style);

// ------------------------------------------ INHALTE --------------------------------------------------- //

// ------------------------------------ LEVEL 1 ---------------------------------- //

const content1 = new VideoTemplate("Ueberblick Content 1", "lerninhalte/Level1/level1_intro_video.mp4"
, 1);
const content2 = new ContentTemplate("Ueberblick Content 2", "<article style=\"font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color:#E6F7EF; line-height:1.6;\">" + "<h1 style=\"font-size:2.2em;color: #007A64; margin-bottom:20px;\">Zusammenhang Klimawandel und Gesundheit</h1>\n" + "\n" + "<p style=\"font-size:1em; margin-bottom:20px;\">Der Klimawandel hat auch Auswirkungen auf die Gesundheit des Menschens. Durch den h&ouml;heren CO2-Gehalt in der Atmosph&auml;re, die steigenden Meereslevel, steigende Temperaturen und mehr Extremwetterevents \n" + "werden verschiedene Vorg&auml;nge und Ph&auml;nomene beeinflusst. Diese k&ouml;nnen im folgenden Bild genauer betrachtet werden. Das Bild ist eine gute Zusammenfassung, um zu verstehen, wie der Klimawandel die \n" + "Gesundheit des Menschens beeinflussen kann und wie vielseitig dieser ist.\n" + "</p>\n" + "<div style=\"text-align:center;\">\n" + "<img src=\"lerninhalte/Level1/impactclimatechangehealth.png\" height=70% width=90%>" + "<p style=\"font-size:0.9em; color: #4D774E; margin-top:5px; font-style:italic; \">Einfluss des Klimawandels auf die Gesundheit [1]</p>\n" + "</div>\n" + "\n" + "<a href=\"https://www.cdc.gov/climateandhealth/effects/default.htm\">[1] Climate and Health Effects</a> <br>" +
    "<a href=\"https://unfccc.int/climate-action/un-global-climate-action-awards/planetary-health\">[2] Planetary Health</a>" + "</article>", 3);

const content3 = new ContentTemplate("Ueberblick Content 3", "<body> <article style=\"font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #E6F7EF; line-height: 1.6;\"> <h1 style=\"font-size: 2.2em; color: #007A64; margin-bottom: 20px;\">Was kommt als n&auml;chstes?</h1> <p style=\"font-size: 1em; margin-bottom: 20px;\">Nach der Erkl&auml;rung des Klimawandels und dem Zusammenhang zur Gesundheit, wird im Folgenden kurz auf die drei Hauptthemen eingegangen. Diese sind: <ul style=\"margin: 20px 0; padding-left: 20px; color: #4D774E; \"> <li style=\"margin-bottom: 5px;\">Planetary Health</li> <li style=\"margin-bottom: 5px;\">Adaption</li> <li style=\"margin-bottom: 5px;\">Mitigation</li> </ul>Des Weiteren gibt es am Ende einen kleinen Exkurs zu Infektionskrankheiten und wie der Klimawandel diese ver&auml;ndert. </p> <h2 style='font-size: 1.5em; color: #2E598C; margin-top: 20px; margin-bottom: 10px;'>Planetary Health</h2> <p style=\"font-size: 1em; margin-bottom: 20px;\">Planetary Health kann als planetare Gesundheit ins Deutsche &uuml;bersetzt werden. Das hei&szlig;t, die Gesundheit der Erde steht im Vordergrund. Durch den menschlichen Eingriff in die Natur hat die Erde sich stark ver&auml;ndert. Sie ist durch die Abf&auml;lle des Menschens, Ver&auml;nderungen der Landschaft und Ausbreitung der Menschheit weniger gesund geworden. Planetary Health soll dazu beitragen diese Effekte des Menschens r&uuml;ckg&auml;ngig zu machen oder mindestens einzud&auml;mmen. Denn die Gesundheit der Erde ist wichtig f&uuml;r die Gesundheit der Menschen. </p> <h2 style='font-size: 1.5em; color: #2E598C; margin-top: 20px; margin-bottom: 10px;'>Adaption</h2> <p style=\"font-size: 1em; margin-bottom: 20px;\">Adaption ist die Anpassung des Menschens an die neuen Gegebenheiten des Klimawandels. Da der Klimawandel schon Auswirkungen auf unser Leben hat und in Zukunft noch pr&auml;senter wird, m&uuml;ssen sich die Menschen anpassen. Das Klima ver&auml;ndert sich, es wird insgesamt w&auml;rmer auf der Erde. Neue Getreidearten m&uuml;ssen angebaut werden, die hitzeresistenter sind oder die Architektur von St&auml;dten muss f&uuml;r mehr Extremereignisse angepasst werden. Besonders betroffen sind k&uuml;stennahe St&auml;dte. Es muss mit Wasserknappheit umgegangen werden und die Migration von Menschen aus unbewohnbaren Gebieten durch Zerst&ouml;rung von Extremwetterereignissen oder Hungersn&ouml;ten, die oft durch D&uuml;rre hervorgerufen werden. </p> <h2 style='font-size: 1.5em; color: #2E598C; margin-top: 20px; margin-bottom: 10px;'>Mitigation</h2> <p style=\"font-size: 1em; margin-bottom: 20px;\">Mitigation ist ein Verfahren der Menschen, um gegen den Klimawandel und die Erderw&auml;rmung anzuk&auml;mpfen. Bei der Mitigation stehen die Treibhausgase im Vordergrund. Betrachtet wird, wie diese verringert werden k&ouml;nnen. Diese Verringerung kann bei der Produktion von Treibhausgasen stattfinden oder versuchen den Treibhausgasgehalt der Atmosph&auml;re zu verringern. Auch andere Ma&szlig;nahmen fallen unter diesen Punkt, um die Erderw&auml;rmung zu verlangsamen. Wichtig ist anzumerken, dass der Klimawandel und die Erderw&auml;rmung nicht mehr r&uuml;ckg&auml;ngig gemacht werden k&ouml;nnen. Daher liegt der Fokus auf dem Minimieren der Erderw&auml;rmung und Verringerung der Auswirkungen auf den Planeten und Menschen. </p><h2 style='font-size: 1.5em; color: #2E598C; margin-top: 20px; margin-bottom: 10px;'>Use Case: Infektionskrankheiten</h2> <p style=\"font-size: 1em; margin-bottom: 20px;\">In dem Use Case wird &uuml;ber Infektionskrankheiten berichtet. Es wird auf die verschiedenen Arten eingeganen, deren Bezug zum Klimawandel und wie sich die Ausbreitung dadurch ver&auml;ndert. Einige Beispiele werden ebenfalls angeschnitten.<br><br>Quellen werden in den beschriebenen Themengebieten separat nochmals aufgelistet.</p></article> </body>", 2);
// --------------------------------- LEVEL 2 ----------------------------------------- //

const contentPH1 = new ContentTemplate("Planetary Health Content 1", "<article style=\"font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #E6F7EF; line-height: 1.6;\"> <h1 style=\"font-size: 2.2em; color: #007A64; margin-bottom: 20px;\">Luftverschmutzung</h1>" +
"<h2 style='font-size: 1.5em; color: #2E598C; margin-top: 20px; margin-bottom: 10px;'>Was versteht man &uuml;berhaupt unter Luftverschmutzung?</h2>" +
"<p style=\"font-size: 1em; margin-bottom: 20px;\">Luftverschmutzung ist ein allgegenw&auml;rtiges Problem, das jeden von uns in vielf&auml;ltiger Weise beeinflusst. Egal ob wir es direkt sp&uuml;ren, indem wir die belastete Luft einatmen, oder ob wir indirekt durch deren Auswirkungen auf unsere gesamte Umwelt betroffen sind. Aber was genau verursacht diese Art von Verschmutzung und warum sollte sie uns Sorgen bereiten?[1] </p>" +
"<h2 style='font-size: 1.5em; color: #2E598C; margin-top: 20px; margin-bottom: 10px;'>Wie entsteht Luftverschmutzung?</h2>" +
"<p style=\"font-size: 1em; margin-bottom: 20px;\">Luftverschmutzung entsteht durch das Vorhandensein von Fremd- oder Schadstoffen in der Luft. Diese Stoffe k&ouml;nnen in Konzentrationen vorliegen, die sch&auml;dlich f&uuml;r Menschen, Tiere und Pflanzen sind. Dar&uuml;ber hinaus haben sie das Potenzial, das empfindliche Gleichgewicht unserer Atmosph&auml;re zu st&ouml;ren, was wiederum das Klima und die Umweltbedingungen beeinflussen kann.[2] </p>" +
"<p style=\"font-size: 1em; margin-bottom: 20px;\">Die Hauptursachen der Luftverschmutzung sind vielf&auml;ltig und stammen aus unterschiedlichen Quellen. Ein erheblicher Teil der Verschmutzung entsteht durch menschliche Aktivit&auml;ten. So sind beispielsweise industrielle Prozesse, bei denen gro&szlig;e Mengen an Schadstoffen freigesetzt werden, Hauptverursacher. Die Verbrennung fossiler Brennstoffe, sei es in gro&szlig;en Kraftwerken oder in den Motoren unserer Autos, tr&auml;gt ebenfalls signifikant zur Verschmutzung bei.[3] Aber auch die Landwirtschaft, insbesondere durch den Einsatz von D&uuml;ngemitteln und Pestiziden, sowie die Abfallentsorgung setzen sch&auml;dliche Substanzen frei. Nat&uuml;rliche Ereignisse wie Vulkanausbr&uuml;che, Waldbr&auml;nde und Staubst&uuml;rme spielen ebenso eine Rolle bei der Entstehung von Luftverschmutzung. Typische Schadstoffe sind Gase wie Kohlenstoffdioxid, Stickstoffoxide und Schwefeldioxid, aber auch feine Partikel und Aerosole.[4] </p>" +
"<h2 style='font-size: 1.5em; color: #2E598C; margin-top: 20px; margin-bottom: 10px;'>M&ouml;gliche Folgen der Luftverschmutzung</h2>" +
"<p style=\"font-size: 1em; margin-bottom: 20px;\">Die gesundheitlichen und &ouml;kologischen Auswirkungen sind tiefgreifend. Eine kurzfristige Exposition gegen&uuml;ber hohen Verschmutzungswerten kann zu Symptomen wie Atemwegsbeschwerden, Augenreizungen und allgemeiner Ersch&ouml;pfung f&uuml;hren.[5] Eine langanhaltende Belastung erh&ouml;ht das Risiko f&uuml;r chronische Atemwegserkrankungen, Herz-Kreislauf-Probleme und kann sogar zu einem vorzeitigen Tod beitragen. Es ist jedoch nicht nur die menschliche Gesundheit, die leidet. Sondern die gesamte Natur ist betroffen. Ein gutes Beispiel hierf&uuml;r ist der saure Regen, der durch Schwefeldioxid und Stickstoffoxide entsteht und die Gesundheit von B&ouml;den, W&auml;ldern und Gew&auml;ssern ernsthaft beeintr&auml;chtigt.[6] </p>" +
"<h2 style='font-size: 1.5em; color: #2E598C; margin-top: 20px; margin-bottom: 10px;'>M&ouml;glichkeiten Luftverschmutzung entgegenzuwirken</h2>" +
"<p style=\"font-size: 1em; margin-bottom: 20px;\">Um dieser weitverbreiteten Verschmutzung entgegenzuwirken sind konzentrierte Anstrengungen auf verschiedenen Ebenen erforderlich. Staatliche Regulierungen und Gesetze k&ouml;nnen helfen, die Emissionen zu begrenzen. Technologische Innovationen, wie beispielsweise emissionsarme Fahrzeuge oder der verst&auml;rkte Einsatz erneuerbarer Energien, bieten L&ouml;sungsans&auml;tze. Aber auch jeder Einzelne kann durch bewusste Entscheidungen, wie die Nutzung &ouml;ffentlicher Verkehrsmittel, das Fahrradfahren oder den bewussten Konsum, dazu beitragen, die Luftverschmutzung zu verringern und somit einen Beitrag zu einer saubereren und ges&uuml;nderen Zukunft leisten.[7] </p>"
    +  "<section style=\"padding: 20px;\">\n" +
    "<h2 style='font-size: 1.5em; color: #2E598C; margin-top: 20px; margin-bottom: 10px;'>Literaturverweise</h2>\n <br>" +
    "<p class=\"reference\" style=\"font-style: italic; margin-top: 20px;\">\n <br>" +
    "[1]Woodruff, T J; Grillo, J; Schoendorf, K C 1997.The relationship between selected causes of postneonatal infant mortality and particulate air pollution in the United States in Environmental Health Perspectives 105, 6, S. 608,612.</a>\n <br>"+
    "[2]ScienceDirect.com | Science, health and medical journals, full text articles and books</a>\n <br>" +
    "[3]D&auml;mmgen, Ulrich. mit dem Regen stimmt was nicht mehr</a>\n <br>" +
    "[4]Wellburn, Alan R. 2013. Luftverschmutzung und Klima&auml;nderung: Auswirkungen auf Flora, Fauna und Mensch. Springer-Verlag.</a>\n <br>"+
    "[5]Bert Brunekreef. Air pollution and health.</a>\n <br>" +
    "[6]Landrigan, Philip J 2017. Air pollution and health, in The Lancet Public Health 2, 1, S. e4,e5.</a>\n <br>" +
    "[7]World Health Organization. Air pollution https://www.who.int/health-topics/air-pollution</a>\n" +
    "</p>\n" +
    "</section>\n" +"</article>", 4);
const contentPH2 = new ContentTemplate("Planetary Health Content 2", "<article style=\"font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #E6F7EF; line-height: 1.6;\"> <h1 style=\"font-size: 2.2em; color: #007A64; margin-bottom: 20px;\">Wasser und Gesundheit</h1>" +
"<h2 style='font-size: 1.5em; color: #2E598C; margin-top: 20px; margin-bottom: 10px;'>Wie h&auml;ngt Planetary Health mit Wasser und der menschlichen Gesundheit zusammen?</h2>" +
"<p style=\"font-size: 1em; margin-bottom: 20px;\">Planetary Health befasst sich mit dem komplexen Wechselspiel zwischen dem Wohlergehen unseres Planeten und der Gesundheit der auf ihm lebenden Menschen. Wasser als lebenswichtige Ressource spielt dabei eine zentrale Rolle. Verschmutztes Wasser kann erhebliche negative Auswirkungen auf die menschliche Gesundheit haben und spiegelt den Zustand unseres Planeten wieder.[1]</p>" +
"<h2 style='font-size: 1.5em; color: #2E598C; margin-top: 20px; margin-bottom: 10px;'>Wie beeinflussen menschliche Aktivit&auml;ten die Wasserqualit&auml;t auf unserem Planeten?</h2>" +
"<p style=\"font-size: 1em; margin-bottom: 20px;\">Wasser, das Element, das das Leben auf der Erde erm&ouml;glicht, ist in vielen Regionen unseres Planeten durch menschliche Aktivit&auml;ten bedroht. Industrieabw&auml;sser beispielsweise f&uuml;hren h&auml;ufig dazu, dass Chemikalien und andere Abfallprodukte unzul&auml;ssigerweise in Fl&uuml;sse und Meere gelangen. Diese Verschmutzung hat nicht nur direkte negative Auswirkungen auf die Wasserqualit&auml;t, sondern sch&auml;digt auch die &Ouml;kosysteme und das Leben im Wasser. Aber nicht nur die Industrie ist f&uuml;r die Verschmutzung unserer Wasserquellen verantwortlich.[2] Auch die Landwirtschaft, die auf den Einsatz von D&uuml;ngemitteln und Pestiziden angewiesen ist, kann zu einer Verschmutzung f&uuml;hren, wenn diese Chemikalien in nahe gelegene Fl&uuml;sse, Seen oder das Grundwasser gelangen. Dar&uuml;ber hinaus tragen auch h&auml;usliche Abw&auml;sser zur Verschmutzung bei, insbesondere in Gebieten ohne angemessene Abwasserbehandlung.[3]</p>" +
"<h2 style='font-size: 1.5em; color: #2E598C; margin-top: 20px; margin-bottom: 10px;'>Welche gesundheitlichen und &ouml;kologischen Risiken birgt verschmutztes Wasser?</h2>" +
"<p style=\"font-size: 1em; margin-bottom: 20px;\">Die gesundheitlichen Folgen einer solchen Verunreinigung sind alarmierend. Menschen, die verschmutztes Wasser zu sich nehmen, k&ouml;nnen an Krankheiten wie Cholera oder Durchfall leiden. Ebenso k&ouml;nnen sch&auml;dliche Mikroorganismen und Chemikalien Hautkrankheiten verursachen oder das Immunsystem beeintr&auml;chtigen. Neben den direkten gesundheitlichen Auswirkungen hat verschmutztes Wasser auch sekund&auml;re Folgen: Es sch&auml;digt &Ouml;kosysteme, beeintr&auml;chtigt die Nahrungskette und kann letztlich unsere Lebensmittelversorgung gef&auml;hrden.[4]</p>" +
"<h2 style='font-size: 1.5em; color: #2E598C; margin-top: 20px; margin-bottom: 10px;'>Wie k&ouml;nnen wir die Wasserverschmutzung effektiv minimieren und bek&auml;mpfen?</h2>" +
"<p style=\"font-size: 1em; margin-bottom: 20px;\">Um die Wasserverschmutzung zu minimieren, erfordert es mehrere Ma&szlig;nahmen. Zun&auml;chst einmal sind die Modernisierung und der Ausbau von Kl&auml;ranlagen von zentraler Bedeutung. Durch den Einsatz fortschrittlicher Reinigungstechnologien k&ouml;nnen Abw&auml;sser effektiver von Schadstoffen befreit werden. Industrieabw&auml;sser sollten durch eine strengere Umweltgesetzgebung und eine regelm&auml;&szlig;ige &Uuml;berwachung der Emissionsquellen kontrolliert werden.[5] In der Landwirtschaft kann der Einsatz von biologischem Management und effizienten Bew&auml;sserungsmethoden dazu beitragen, den Abfluss von Chemikalien in die Wasserquellen zu verringern. Die Sensibilisierung der Bev&ouml;lkerung durch Aufkl&auml;rungskampagnen ist ebenfalls wichtig, um sicherzustellen, dass jeder seinen Teil zur L&ouml;sung des Problems beitr&auml;gt.[6] Die Reduzierung von Plastikm&uuml;ll und die Einf&uuml;hrung von Pfandsystemen k&ouml;nnen den Eintrag von Abf&auml;llen in die Gew&auml;sser weiter minimieren. Schlie&szlig;lich sollte die internationale Zusammenarbeit genutzt werden, um gemeinsame L&ouml;sungen f&uuml;r dieses globale Problem zu finden. Insgesamt ist ein integrierter Ansatz erforderlich, um die Wasserverschmutzung wirksam zu bek&auml;mpfen.[7]</p></h1> "
+ "<section style=\"padding: 20px;\">\n" +
"<h2 style='font-size: 1.5em; color: #2E598C; margin-top: 20px; margin-bottom: 10px;'>Literaturverweise</h2>\n <br>" +
"<p class=\"reference\" style=\"font-style: italic; margin-top: 20px;\">\n <br>" +
"[1]Jenkins, Aaron et al. 2018. Watersheds in planetary health research and action, in The Lancet Planetary Health 2, 12, S. e510,e511.</a>\n <br>"+
"[2]Qadri, Rizwana; Faiq, Muneeb A. 2020. Freshwater Pollution: Effects on Aquatic Life and Human Health, in Fresh Water Pollution Dynamics and Remediation, hrsg. v. Qadri, Humaira et al., S. 15,26. Singapore: Springer.</a>\n <br>" +
"[3]Goel, P. K. 2006. Water Pollution: Causes, Effects and Control. New Age International.</a>\n <br>" +
"[4]Department of Environmental Engineering , Sangji University , Republic of Korea et al. 2015. Water Pollution and its Impact on the Human Health, in Journal of Environment and Human 2, 1, S. 36,46.</a>\n <br>"+
"[5]Lin, Li; Yang, Haoran; Xu, Xiaocang 2022. Effects of Water Pollution on Human Health and Disease Heterogeneity: A Review in Frontiers in Environmental Science 10, S. 880246.</a>\n <br>" +
"[6]Siddiqua, Ayesha; Hahladakis, John N.; Al-Attiya, Wadha Ahmed K A 2022. An overview of the environmental pollution and health effects associated with waste landfilling and open dumping, in Environmental Science and Pollution Research 29, 39, S. 58514,58536.</a>\n <br>" +
"[7]F&ouml;rstner, U.; M&uuml;ller, G. 2013. Schwermetalle in Fl&uuml;ssen und Seen als Ausdruck der Umweltverschmutzung. Springer-Verlag.</a>\n" +
"</p>\n" +
"</section>\n" +"</article>", 5);
const contentPH3 = new ContentTemplate("Planetary Health Content 3", "<h1 style=\"font-size: 2.2em; color: #007A64; margin-bottom: 20px;\">Hier steht bald der 3. Inhalt zum Thema Planetary Health!</h1>", 6);

// --------------------------------- LEVEL 3 ----------------------------------------- //

const contentAd1 = new ContentTemplate("Adaption Content 1", "<body style=\"font-family: Arial, sans-serif; line-height: 1.6; margin: 0; padding: 0; color: #333;\">" + "<article style=\"font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #E6F7EF; line-height: 1.6;\">\n" +
"<h1 style=\"font-size: 2.2em; color: #007A64; margin-bottom: 20px;\">Klimawandel und st&auml;dtische Gebiete</h1>\n" +
"<section style=\"padding: 20px;\">\n" +
"<h2 style='font-size: 1.5em; color: #2E598C; margin-top: 20px; margin-bottom: 10px;'>Globale Urbanisierung</h2>\n" +
"<p style=\"font-size: 1em; margin-bottom: 20px;\">Die Urbanisierungsrate stieg von 13% (1900) auf 52% (2011). Mehr Menschen ziehen in die St&auml;dte, weil innerhalb\n" +
"des letzen Jahrhunderts ein gesellschaftlicher Wandel stattfand. Zukunftsperspektiven auf dem Land werden immer weniger und\n" +
"die jungen Leute ziehen deswegen in die St&auml;dte. Dort k&ouml;nnen sie studieren, arbeiten und ein Leben weitestgehend ohne Auto f&uuml;hren, wenn sie dies m&ouml;chten.\n" +
"Allerdings sind st&auml;dtische Gebiete Hauptbestimmungsfaktoren f&uuml;r globale Treibhausgasemissionen. Wieso ist das so?</p>\n" +
"</section>\n" +
"<section style=\"padding: 20px;\">\n" +
"<h2 style='font-size: 1.5em; color: #2E598C; margin-top: 20px; margin-bottom: 10px;'>Treiber des Klimawandels in St&auml;dten</h2>\n" +
"<p style=\"font-size: 1em; margin-bottom: 20px;\">Einerseits sind die demografischen Strukturen mit verantwortlich. St&auml;dte sind Ballungsgebiete mit einem stetigen\n" +
"Bev&ouml;lkerungswachstum und einer hohen Bev&ouml;lkerungsdichte. St&auml;dte wachsen in L&auml;ndern unterschiedlich, die Millionenmetropolen\n" +
"dieser Welt, wie New York, Mumbai oder Shanghai wachsen zu anderen Raten als Kleinst&auml;dte in Deutschland. Diese haben auch\n" +
"von vorne herein unterschiedliche Bev&ouml;lkerungsdichten.</p>\n" +
"<p style=\"font-size: 1em; margin-bottom: 20px;\">Das Wirtschaftswachstum ist ein weiterer Faktor. Mehr Unternehmen siedeln sich in den st&auml;dtischen R&auml;umen an.\n" +
"Deswegen erh&ouml;ht sich der Energieverbrauch und die Treibhausgasemissionen steigen. Da noch &uuml;berwiegend mit fossilem Brennstoff\n" +
"dieser Energiebedarf gedeckt wird. Dieser ist einer der Hauptverursacher von CO2-Emissionen. In Schwellenl&auml;nder ist\n" +
"dies ein gr&ouml;&szlig;erer Faktor als in den etablierten Industriel&auml;ndern. Die Schwellenl&auml;nder haben oft weniger strikte Gesetze, welche\n" +
"den Klimawandel angehen, um attraktiver f&uuml;r Unternehmen zu wirken. Etablierte Industriel&auml;nder k&ouml;nnen dagegen durch Inlandsinvestitionen\n" +
"klimafreundliche und energieffiziente L&ouml;sungen entwickeln, sowie sich auf Klimaziele mithilfe von Gesetzen fokusieren.</p>\n" +
"<p style=\"font-size: 1em; margin-bottom: 20px;\">Auch das individuelle Einkommen und der Lebensstil beeinflussen den Energieverbrauch. Reichere Menschen haben meist einen h&ouml;heren CO2-Fu&szlig;abdruck.\n" +
"Meist weil sie mehr Reisen (mit dem Flugzeug) im Jahr bet&auml;tigen oder mehrere Autos besitzen. Dies ist nat&uuml;rlich nicht immer der Fall,\n" +
"aber kann gut am Beispiel von verschiedenen ber&uuml;hmten Pers&ouml;nlichkeiten dargestellt werden. Es muss auch angemerkt werden, dass es St&auml;dte gibt, \n" +
"die einen sehr hohen Lebensstandard bieten mit einer sehr geringen Treibhausgasemission.\n" +
"</p>\n" +
"<p style=\"font-size: 1em; margin-bottom: 20px;\">Geb&auml;ude sind verantwortlich f&uuml;r 28% der weltweiten energiebezogenen CO2-Emissionen (2017).</p>\n" +
"</section>\n" +
"<section style=\"padding: 20px;\">\n" +
"<h2 style='font-size: 1.5em; color: #2E598C; margin-top: 20px; margin-bottom: 10px;'>Energieverbrauch in st&auml;dtischen Gebieten</h2>\n" +
"<p style=\"font-size: 1em; margin-bottom: 20px;\">Die Energieverbrauchsrate von st&auml;dtischen Gebieten ist doppelt so hoch wie in l&auml;ndlichen Gebieten. Da auf kleinerem Raum\n" +
"mehr Menschen leben und st&auml;ndig eine Ver&auml;nderung in der Stadt stattfindet, wie Neubauten von B&uuml;rogeb&auml;uden oder der\n" +
"Ausbau der Verkehrswege. All das hat einen hohen Energiebedarf.</p>\n" +
"<p style=\"font-size: 1em; margin-bottom: 20px;\">Der Energieverbrauch in st&auml;dtischen Gebieten ist eng mit dem Pro-Kopf-Einkommen verbunden. Es ist m&ouml;glich, dass\n" +
"das Wirtschaftswachstum in Entwicklungsl&auml;ndern emissionsorientierter ist als in entwickelten L&auml;ndern.\n" +
"Zwischen 1992 und 2007 trugen urbane Entwicklungen und Lebensstil&auml;nderungen in China zu einem Anstieg der\n" +
"energiebedingten Kohlendioxidemissionen bei.</p>\n" +
"<p style=\"font-size: 1em; margin-bottom: 20px;\">Der Lebensstil h&auml;ngt weitgehend vom Haushaltseinkommen ab, das die Hausgr&ouml;&szlig;e und die thermischen\n" +
"Komfortschwellentemperaturen des Wohnviertels beeinflusst. Wohnviertel mit durchschnittlich geringerem Einkommen\n" +
"haben eine schlechtere Isolierung und so m&uuml;ssen die Bewohner mehr Energie verwenden, um den Wohnraum auf eine angenehme\n" +
"Temperatur zu bringen. </p>\n" +
"<p style=\"font-size: 1em; margin-bottom: 20px;\">Urbane Systeme tragen aufgrund ihrer verschiedenen Funktionen, einschlie&szlig;lich r&auml;umlicher, transport- und\n" +
"versorgungsbezogener Funktionen, die gro&szlig;e Mengen fossiler Brennstoffe erfordern, zum Klimawandel bei.\n" +
"Wie oben aufegf&uuml;hrt ist die Energieverbrauchsrate von st&auml;dtischen Gebieten doppelt so hoch wie in l&auml;ndlichen\n" +
"Gebieten, aber sie sind\n" +
"f&uuml;r fast drei Viertel der globalen CO2-Emissionen verantwortlich.</p>\n" +
"</section>\n" +
"<section style=\"padding: 20px;\">\n" +
"<h2 style='font-size: 1.5em; color: #2E598C; margin-top: 20px; margin-bottom: 10px;'>Geografische Einfl&uuml;sse</h2>\n" +
"<p style=\"font-size: 1em; margin-bottom: 20px;\">Die geografische Lage einer Stadt beeinflusst stark ihre Treibhausgasemissionen. Der Energiebedarf zum Heizen von\n" +
"st&auml;dtischen Geb&auml;uden wird stark vom Klima der Region beeinflusst, insbesondere an sehr warmen und sehr kalten Tagen.\n" +
"In den USA haben St&auml;dte mit k&auml;lteren Wintern im Januar h&ouml;here\n" +
"Emissionen durch Heizung, w&auml;hrend St&auml;dte mit hei&szlig;eren\n" +
"Sommern im Juli einen h&ouml;heren Energieverbrauch durch K&uuml;hlung haben.</p>\n" +
"<p style=\"font-size: 1em; margin-bottom: 20px;\">Der Zugang zu Wasserkraft zur Stromerzeugung in St&auml;dten wie Genf, Toronto und Rio de Janeiro verringert erheblich\n" +
"die Konzentration von Treibhausgasemissionen. Dies zeigt, dass erneuerbare Energien einen weitreichenden Effekt zur Reduzierung\n" +
"von Treibhausgasemissionen auf Grund von Energieverbrauch in St&auml;dten haben.</p>\n" +
"</section>\n" +
"<section style=\"padding: 20px;\">\n" +
"<h2 style='font-size: 1.5em; color: #2E598C; margin-top: 20px; margin-bottom: 10px;'>Anf&auml;lligkeit von St&auml;dten</h2>\n" +
"<p style=\"font-size: 1em; margin-bottom: 20px;\">St&auml;dte sind anf&auml;llig f&uuml;r Wasserknappheit, gesundheitliche Auswirkungen und extreme Wetterereignisse. Diese\n" +
"Anf&auml;lligkeit kann durch Faktoren, wie Bev&ouml;lkerungsdichte und Infrastruktur erh&ouml;ht werden. Da z.B. eine z&uuml;gige Evakuierung\n" +
"ohne Panik in einer Stadt schwieriger ist.</p>\n" +
"<p style=\"font-size: 1em; margin-bottom: 20px;\">Klimabedingte Verwundbarkeiten in St&auml;dten k&ouml;nnen fehlendes Trinkwasser, gesundheitliche Auswirkungen und schwere\n" +
"und intensive Extremereignisse wie &Uuml;berschwemmungen, Zyklone, Sturmfluten und Hitzewellen umfassen. </p>\n" +
"</section>\n" +
"<section style=\"padding: 20px;\">\n" +
"<h2 style='font-size: 1.5em; color: #2E598C; margin-top: 20px; margin-bottom: 10px;'>Ma&szlig;nahmen gegen den Klimawandel</h2>\n" +
"<ul style=\"margin: 20px 0; padding-left: 20px; color: #4D774E; \">\n" +
"<li style=\"margin-bottom: 5px;\">Effizienterer Energieverbrauch</li>\n" +
"<li style=\"margin-bottom: 5px;\">F&ouml;rderung von multimodalem und hydroelektrisch betriebenem Verkehr</li>\n" +
"<li style=\"margin-bottom: 5px;\">Entwicklung gr&uuml;ner Infrastrukturen</li>\n" +
"<li style=\"margin-bottom: 5px;\">Priorisierung von Raumplanung und nachhaltiger Architektur</li>\n" +
"</ul>\n" +
"</section>\n" +
"<section style=\"padding: 20px;\">\n" +
"<h2 style='font-size: 1.5em; color: #2E598C; margin-top: 20px; margin-bottom: 10px;'>Literaturverweise</h2>\n" +
"<p class=\"reference\" style=\"font-style: italic; margin-top: 20px;\">\n" +
"Siddik, M. A., Hasan, M. M., Islam, M. T., & Zaman, A. K. M. M. (2022). Climate Change Drivers, Effects, and Mitigation-Adaptation Measures for Cities. <em>Asian Journal of Social Sciences and Legal Studies, 4(5), 160-177.</em> Verf&uuml;gbar unter: <a href=\"https://doi.org/10.34104/ajssls.022.01600177\" target=\"_blank\">https://doi.org/10.34104/ajssls.022.01600177</a>\n" +
"</p>\n" +
"</section>\n" + "</article>\n"+
"</body>", 7);

const contentAd2 = new ContentTemplate("Adaption Content 2", "<h1 style=\"font-size: 2.2em; color: #007A64; margin-bottom: 20px;\">Hier steht bald der 2. Inhalt zum Thema Adaption</h1>", 8);
const contentAd3 = new ContentTemplate("Adaption Content 3", "<h1 style=\"font-size: 2.2em; color: #007A64; margin-bottom: 20px;\">Hier steht bald der 3. Inhalt zum Thema Adaption</h1>", 9);

// --------------------------------- LEVEL 4 ----------------------------------------- //

const contentMit1 = new ContentTemplate("Mitigation Content 1",
"<article style=\"font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #E6F7EF; line-height: 1.6;\">\n" + "<h1 style=\"font-size: 2.2em; color: #007A64; margin-bottom: 20px;\">Mitigation und Gesundheit</h1><h2 style='font-size: 1.5em; color: #2E598C; margin-top: 20px; margin-bottom: 10px;'>Was ist Mitigation?</h2> <p style=\"font-size: 1em; margin-bottom: 20px;\">Im ersten Level wurde kurz &uuml;ber Mitigation informiert. Nun geht es darum einen genaueren Einblick in das Thema zu bekommen. Mitigation ist die Verringerung von Treibhausgasen, um den Klimawandel abzuschw&auml;chen. Treibhausgase sind Kohlenstoffdioxid (CO2), Methan (CH4), Distickstoffmonoxid (N2O), fluorierte Kohlenwasserstoffe (FKW) und Schwefelhexafluorid (SF6). Es werden die Emissionen aus Verbrennungen und fl&uuml;chtiger Emission von Brennstoffen, Produktionsprozessen, Landwirtschaft und Abfallwirtschaft betrachtet. [3]</p>"
+"<table style=\"width: 50%; border-collapse: collapse; margin-bottom: 20px; border: 2px solid #4D774E;\">" +
"<tr>" +
"<th style=\"padding: 10px; text-align: left; border: 1px solid #4D774E; background-color: #4D774E; color: white; \">Treibhausgas</th>" +
"<th style=\"padding: 10px; text-align: left; border: 1px solid #4D774E; background-color: #4D774E; color: white; \">Abk&uuml;rzung</th>" +
"<th style=\"padding: 10px; text-align: left; border: 1px solid #4D774E; background-color: #4D774E; color: white; \">Beispiel f&uuml;r Aussto&szlig; [8]</th>" +
"</tr>" +
"<tr>" +
"<td style=\"padding: 10px; text-align: left; border: 1px solid #4D774E;\">Kohlenstoffdioxid</td>" +
"<td style=\"padding: 10px; text-align: left; border: 1px solid #4D774E;\">CO2</td>" +
"<td style=\"padding: 10px; text-align: left; border: 1px solid #4D774E;\">Verbrennung von Er&ouml;l, -gas, Kohle</td>" +
"</tr>" +
"<tr>" +
"<td style=\"padding: 10px; text-align: left; border: 1px solid #4D774E;\">Methan</td>" +
"<td style=\"padding: 10px; text-align: left; border: 1px solid #4D774E;\">CH4</td>" +
"<td style=\"padding: 10px; text-align: left; border: 1px solid #4D774E;\">Massentierhaltung, Kl&auml;rwerke, M&uuml;lldeponien</td>" +
"</tr>" +
"<tr>" +
"<td style=\"padding: 10px; text-align: left; border: 1px solid #4D774E;\">Distickstoffmonoxid</td>" +
"<td style=\"padding: 10px; text-align: left; border: 1px solid #4D774E;\">N2O</td>" +
"<td style=\"padding: 10px; text-align: left; border: 1px solid #4D774E;\">D&uuml;ngemittelproduktion, Kunstoffherstellung</td>" +
"</tr>" +
"<tr>" +
"<td style=\"padding: 10px; text-align: left; border: 1px solid #4D774E;\">fluorierte Kohlenwasserstoffe</td>" +
"<td style=\"padding: 10px; text-align: left; border: 1px solid #4D774E;\">FKW (HFC/PFC)</td>" +
"<td style=\"padding: 10px; text-align: left; border: 1px solid #4D774E;\">K&uuml;hl-, L&ouml;sungsmittel</td>" +
"</tr>" +
"<tr>" +
"<td style=\"padding: 10px; text-align: left; border: 1px solid #4D774E;\">Schwefelhexafluorid</td>" +
"<td style=\"padding: 10px; text-align: left; border: 1px solid #4D774E;\">SF6</td>" +
"<td style=\"padding: 10px; text-align: left; border: 1px solid #4D774E;\">Bestandteil von Schallschutzscheiben</td>" +
"</tr>" +
"</table>"
+
"<p style=\"font-size: 1em; margin-bottom: 20px;\">" +
"Durch verschiedene Methoden und Technologien wird versucht die Emissionen zu reduzieren und die Erderw&auml;rmung auf maximal 2 Grad Celcius" +
"bis 2100 zu limitieren laut dem Pariser Klimaabkommen. Eine Methode ist die Reduzierung des Aussto&szlig;es von Treibhausgasen, oft" +
"als die 'traditionelle' Methode bezeichnet. Dies passiert durch das Nutzen von erneuerbaren Energien, Aufforstungsprojekte, " +
"Energieeffizienz, Atomenergie und industrielle Dekarbonisierung. Viele dieser Methoden sind heutzutage etabliert und tragen" +
"ein akzeptables Risikolevel." +
"</p>"
+
"<p style=\"font-size: 1em; margin-bottom: 20px;\">Eine andere Methode sind neueren Technologien, sogenannte negative Emissionstechnologien. Sie fangen CO2 aus der Atmosph&auml;re" +
"ein und speichern dieses. Sowohl nat&uuml;rliche als auch technische Verfahren werden eingesetzt, wie Aufforstung, Erh&ouml;hung der " +
"ozeanischen Alkalit&auml;t und Mineralkarbonisierung." +
"</p>" +
"<p style=\"font-size: 1em; margin-bottom: 20px;\">Die dritte Methode ist die Ver&auml;nderung der Strahlungsbilanz der Erde. Dies wird versucht durch das Management von solaren und" +
"terrestrischen Strahlungen. Das Ziel dieser Methoden ist die Stabilisierung der Temperatur oder vielleicht das Senken der" +
"globalen Temperatur. Es wird keine Ver&auml;nderungen an der Konzentration von den Treibhausgasen in der Atmosph&auml;re vorgenommen." +
"Alle Konzepte sind zu diesem Zeitpunkt theoretisch oder in den ersten Versuchsphasen. Eine Idee ist die Aufhellung der Meereswolken [1].</p>" +
        "<a href=\"https://link.springer.com/article/10.1007/s10311-020-01059-w\">[1]Strategies for mitigation of climate change: a review</a><br>"+
    "<a href=\"https://unfccc.int/resource/docs/convkp/kpger.pdf\">[3]ekyoto protokoll</a><br>"+
    "<a href=\"https://www.umweltbundesamt.de/themen/klima-energie/klimaschutz-energiepolitik-in-deutschland/treibhausgas-emissionen/die-treibhausgase\">[8]Die Treibhausgase</a><br>"
    , 10);

const contentMit2 = new ContentTemplate("Mitigation Content 2", "<article style=\"font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;background-color:#E6F7EF;line-height:1.6;\">"
    +"<h1 style=\"font-size: 2.2em; color: #007A64; margin-bottom: 20px;\">Mitigationsstrategien</h2>"
    + "<h2 style=\"font-size: 1.5em; color: #2E598C; margin-top: 20px; margin-bottom: 10px;\">Reduktion von Treibhausgasaussto&szlig;en</h2>"
+ "<p style=\"font-size:1em;margin-bottom:20px\">" +
"Einer der Hauptverursacher des Klimawandels sind die Treibhausgasemissionen. Es ist naheliegend diese Emission zu" +
"reduzieren. Eine einfache Methode ist Alternativen zu finden, die weniger oder keine Emissionen aussto&szlig;en. Dabei wird der" +
"Fokus auf vier Sektoren gelegt: Energie, Industrie, Transport und Geb&auml;ude. [1] In der folgenden Grafik ist die Verteilung der" +
"Treibhausgasemissionen auf die verschiedenen Sektoren im Jahre 2020 zu sehen. Der Industriesektor hat mit 31% den gr&ouml;&szlig;ten" +
"Aussto&szlig; von Treibhausgasen. [5]" +
"</p>" +
"<div style=\"text-align:center;\">" +
"<img src=\"lerninhalte/Level4/inhalt1/2020emissionen.png\" height=90% width=100%>" +
"<p style=\"font-size:0.9em;color: #4D774E;margin-top:5px;font-style:italic; \">Treibhausgasemissionen 2020 [5]</p>" +
"</div>" +
"<p style=\"font-size:1em;margin-bottom:20px;\">" +
"Zur Reduzierung werden die Energiequellen ge&auml;ndert von fossilem Brennstoff auf erneuerbare Energien, Atomkraft oder" +
"Brennstoff mit geringeren Emissionen, wie Erdgas oder erneuerbare Brennstoffe. [1] Energiequellen ohne direkte" +
"Treibhausgasemissionen sollten denen mit geringeren Emissionen vorgezogen werden. Erneuerbare Energien beinhalten:" +
"</p>" +
"<ul style=\"margin: 20px;padding-left:20px;color: #4D774E; \">" +
"<li style=\"margi-bottom:5px;\">Solarenergie</li>" +
"<li style=\"margin-bottom:5px;\">Windenergie</li>" +
"<li style=\"margin-bottom:5px;\">Wasserkraft</li>" +
"<li style=\"margin-bottom:5px;\">Erdw&auml;rme</li>" +
"<li style=\"margin-bottom:5px;\">Bioenergie</li>" +
"</ul>" +
"<p style=\"font-size:1em;margin-bottom:20px;\">Zur Reduzierung werden die Energiequellen ge&auml;ndert von fossilem Brennstoff auf erneuerbare Energien, Atomkraft oder" +
"Brennstoff mit geringeren Emissionen, wie Erdgas oder erneuerbare Brennstoffe. [1] Energiequellen ohne direkte" +
"Treibhausgasemissionen sollten denen mit geringeren Emissionen vorgezogen werden. Erneuerbare Energien beinhalten" +
"Solarenergie, Windenergie, Wasserkraft, Erdw&auml;rme, Bioenergie. [4] Bei den Endkunden wird Diesel durch Biodiesel ersetzt" +
"oder Elektroautos attraktiver zum Kauf angeboten, um die Zahl der Verbrennerautos zu reduzieren. Dennoch haben diese" +
"Technologien Nachteile.</p> <p style=\"font-size:1em;margin-bottom:20px;\">E-Autos haben noch nicht die Reichweite von Verbrenner bzw. ist das Auftanken (Aufladen) schwieriger," +
"da die Infrastruktur in den L&auml;ndern ausbauf&auml;hig ist. Durch intensive Batterieforschung erh&ouml;ht sich die Reichweite von E-Autos" +
"stetig und kann mit Verbrennern fast mithalten. [6] Speicher f&uuml;r erneuerbare Energiequellen sind ebenfalls ausbauf&auml;hig, um ein" +
"fl&auml;chendeckendes Versorgen mit erneuerbaren Energien zu gew&auml;hrleisten meist auf Grund von Kosten oder verf&uuml;gbarem Platz.</p>" +
"<p style=\"font-size:1em;margin-bottom:20px;\">In der Industrie wird das CO2 aus der Produktion direkt abgefangen und gespeichert. Das Gas wird in geologischen Reservoirs" +
"gespeichert f&uuml;r eine unbestimmte, lange Zeit. Einige Nachteile dieser Methode sind die Sicherheit des Ortes, in dem es" +
"gespeichert wird und potenzielle Undichte durch die das Gas wieder entweichen k&ouml;nnte. Der Prozess der Extraktion und des" +
"Einfanges von CO2 ist je nach verwendeter Technologie unterschiedlich. Verwendete Technologien sind vor, nach der Verbrennung" +
"oder Oxykraftstoffverbrennung einsetzbar. [1] Diese Verfahren geh&ouml;ren zu der industriellen Dekarbonisierung, allerdings sind" +
"viele Verfahren auch Teil der negativen Emissionstechnologien. Daher gibt es einige &Uuml;berschneidungen zwischen den zwei" +
"Strategien. Ein anderes Beispiel daf&uuml;r ist die Aufforstung.</p>" +
"<h2 style=\"font-size: 1.5em; color: #2E598C; margin-top: 20px; margin-bottom: 10px;\">Negative Emissionstechnologien</h2>" +
"<p style=\"font-size:1em;margin-bottom:20px;\">Negative Emissionstechnologien versuchen CO2 aus der Atmosph&auml;re einzufangen und zu speichern. Diese Technologien werden h&auml;ufig mit" +
"den 'traditionellen' Methoden eingesetzt. Diese m&uuml;ssen mit eingesetzt werden, um eine Chance zu haben das 2-Grad-Ziel" +
"einzuhalten. Allerdings stehen diese Technologien erst am Anfang und die Reduzierung des Treibhausgasaussto&szlig;en darf nicht" +
"vernachl&auml;ssigt werden. Negative Emissionstechnologien sind ein Zusatz und keine Substitution f&uuml;r konventionelle Dekarbonisierung.</p>" +
"<p style=\"font-size:1em;margin-bottom:20px;\">Aufforstung, Ozeane d&uuml;ngen und die Wiederherstellung von Feuchtgebieten k&ouml;nnen zusammengefasst werden. Das Prinzip ist bei" +
"allen gleich: durch Photosynthese der Pflanzen wird das CO2 eingefangen und in Sauerstoff umgewandelt. Aufforstung kann dabei" +
"das Entstehen von neuen W&auml;ldern oder die Wiederherstellung von bestehenden W&auml;ldern sein. [1] Dies kommt auch der Gesundheit" +
"des Menschen zugute. Je nachdem wo die W&auml;lder entstehen k&ouml;nnen sie einen positiven Effekt auf Menschen haben, da sie ihn f&uuml;r" +
"Freizeitaktivit&auml;ten benutzen k&ouml;nnen. Durch sportliches Bet&auml;tigen werden Menschen ges&uuml;nder und bewegen sich im Freien, was" +
"einen positiven Effekt auf die mentale Gesundheit haben kann. [7] Aufforstung ist eine Langzeitstrategie, da B&auml;ume einige" +
"Zeit zum Wachsen ben&ouml;tigen. Allerdings kann durch nat&uuml;rliche Katastrophen, wie Waldbr&auml;nde oder den Menschen das CO2 wieder" +
"freigesetzt werden. [1]</p>" +
"<h2 style=\"font-size: 1.5em; color: #2E598C; margin-top: 20px; margin-bottom: 10px;\">Ver&auml;nderung der Strahlungsbilanz der Erde</h2>" +
"<p style=\"font-size:1em;margin-bottom:20px;\">Bei diesen Verfahren wird versucht die Reflektivit&auml;t der Erde zu Erh&ouml;hen. Dies ist m&ouml;glich durch die Erh&ouml;hung der" +
"Reflektion von kurzwelliger Sonnenstrahlung in den Weltraum oder das Erh&ouml;hen der langwelligen Strahlung von der" +
"Erdoberfl&auml;che in den Weltraum. Diese Methoden sind theoretisch oder in den ersten Versuchsphasen. Methoden daf&uuml;r" +
"sind die Aufhellung der Meereswolken, Spiegel im Weltraum und stratosph&auml;rische Aerosolinjektion. Man ist sich &uuml;ber" +
"potenzielle Nebenwirkungen nicht bewusst und die sch&auml;dlichen Konsequenzen des Entsendens bei der stratosph&auml;rischen " +
"Aerosolinjektion. [1] Diese Ans&auml;tze werden noch erforscht und k&ouml;nnen im Moment nicht eingesetzt werden, um gegen" +
"die Erderw&auml;rmung und den Klimawandel zu helfen. Sie werden f&uuml;r die Vollst&auml;ndigkeit aufgez&auml;hlt.</p>"+
    "<a href=\"https://link.springer.com/article/10.1007/s10311-020-01059-w\">[1]Strategies for mitigation of climate change: a review</a><br>"+
    "<a href=\"https://volker-quaschning.de/downloads/Klimaschutz-Leseprobe.pdf\">[4]Klimaschutz Leseprobe</a><br>"+
    "<a href=\"https://rhg.com/research/global-greenhouse-gas-emissions-2021\">[5]Bild Emissionen 2020</a><br>"+
    "<a href=\"https://link.springer.com/chapter/10.1007/978-3-662-57787-5_5\">[6]Bild Emissionen 2020</a><br>"+
    "<a href=\"https://www.science.org/doi/full/10.1126/sciadv.aax0903\">[7]Bild Emissionen 2020</a><br>"
    , 11);
const contentMit3 = new ContentTemplate("Mitigation Content 3", "<embed src=\"lerninhalte/Level4/Inhalt2/Praesentation1.pdf\" width=\"800\" height=\"600\" type=\"application/pdf\"><p style=\"font-size:1em;margin-bottom:20px;\"></p>", 12);

// --------------------------------- LEVEL 5 ----------------------------------------- //

const contentUC1 = new ContentTemplate("Use Case Content 1",
"<article style=\"font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #E6F7EF; line-height: 1.6;\">"+"<h1 style=\"font-size: 2.2em; color: #007A64; margin-bottom: 20px;\">Zusammenspiel von Krankheiten und Klimawandel</h1>\n" +
"\n" +
"\n" +
"<p style=\"font-size: 1em; margin-bottom: 20px;\">Der Klimawandel ver&auml;ndert viele Aspekte des Lebens und der Umwelt. \n" +
"Ein weniger bekannter und nicht direkt offensichtlicher Faktor sind Krankheiten, im Besonderen Infektionskrankheiten. \n" +
"Deren Verbreitung wird durch den Klimawandel ver&auml;ndert und treten in Gebieten auf in denen sie vorher nicht zu finden waren. \n" +
"[1]\n" +
"Diese vom Klimawandel betroffenen Infektionskrankheiten k&ouml;nnen in drei Kategorien unterteilt werden: \n" +
"Zoonose, vektor&uuml;bertragene Krankheiten und wasserb&uuml;rtige Infektionen.\n" +
"</p>" + "<section style=\"padding: 20px;\">\n" +
"<h2 style='font-size: 1.5em; color: #2E598C; margin-top: 20px; margin-bottom: 10px;'>Literaturverweise</h2>\n" +
"<p class=\"reference\" style=\"font-style: italic; margin-top: 20px;\">\n" +
"<a href=\"https://www.bund.net/themen/aktuelles/detail-aktuelles/news/klimawandel-bringt-uebertraeger-von-krankheiten-nach-deutschland/?gclid=CjwKCAjwgsqoBhBNEiwAwe5w0zFBy94TcBkCKbAH51-p4z1OWIjm2JlFMUQ8T05j2Yt5FpX_tZE6ehoCWdsQAvD_BwE\">[1] Klimawandel bringt &Uuml;bertr&auml;ger von Krankheiten nach Deutschland</a>" +
"</p>\n" +
"</section>\n" +"</article>", 13);

const contentUC2 = new ContentTemplate("Use Case Content 2",
"<article style=\"font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #E6F7EF; line-height: 1.6;\">\n" +
"<h1 style=\"font-size: 2.2em; color: #007A64; margin-bottom: 20px;\">Zoonose</h1>\n" +
"\n" +
"\n" +
"<p style=\"font-size: 1em; margin-bottom: 20px;\">Infektionskrankheiten, die von Tieren auf den Menschen &uuml;bertragen werden hei&szlig;en Zoonose. Es werden immer wieder neue Infektionskrankheiten \n" +
"entdeckt oder es entwickeln sich neue, durch neu auftretende Interaktionen zwischen Menschen und Tieren. Krankheiten k&ouml;nnen \n" +
"schon fr&uuml;her aufgetreten sein und sind mittlerweile abgeschw&auml;cht. Aber durch eine Zunahme der Inzidenz oder Ausbreitungen in \n" +
"einem neuen geografischen, Wirts- oder Vektorenbereich, k&ouml;nnen diese erneut ausbrechen. [4] Dieses vermehrte Auftreten und Wiederauftreten von Zoonose hat \n" +
"verschieden Faktoren.</p> <p style=\"font-size:1em;margin-bottom:20px;\">Eine wachsende menschliche Population hat Auswirkungen auf die umgebene Natur und es kommt zu einem \n" +
"verst&auml;rkten Kontakt mit Wildtieren oder deren Produkten [4] und durch den Klimawandel k&ouml;nnen Wildtiere in die menschliche \n" +
"Zivilisation vordringen. Somit steigt die Gefahr von tierischen Angriffen auf den Menschen, [5] oder m&ouml;gliche &Uuml;bertragung \n" +
"von Krankheitserregern durch die Konsumierung von Fleisch, Milchprodukten oder Eiern. Viele der heutigen Krankheiten des Menschen \n" +
"sind auf Zoonose zur&uuml;ckzuf&uuml;hren. [6]</p> <p style=\"font-size:1em;margin-bottom:20px;\">Ein weiterer Faktor ist die Ver&auml;nderung des &Ouml;kosystems, diese Ver&auml;nderung kann nat&uuml;rlich \n" +
"oder menschlichen Ursprungs sein. [4] Eine menschliche Ver&auml;nderung des &Ouml;kosystems ist die Anpassung der Landschaft an den \n" +
"Menschen durch Abholzung, Stra&szlig;en-/Stadtbau und Ansiedelung oder das Verschleppen von Tierarten, wie Amphibien in Regionen, \n" +
"die nicht ihrem Lebensraum entsprechen. Somit entsteht eine Verbreitung der Erreger in der neuen Region und k&ouml;nnen mit den passenden Verh&auml;ltnissen auf den \n" +
"Menschen &uuml;bertragen werden. Tiere k&ouml;nnen ihren Lebensraum nat&uuml;rlich expandieren und somit in den neuangesiedelten Gebieten \n" +
"auf Menschen sto&szlig;en und Erreger &uuml;bertragen. [7] Klimatische und geografische Faktoren haben Einfl&uuml;sse auf Krankheitserreger \n" +
"und Vektoren, wie z.B. die &Uuml;berwinterung der Erreger in den Wirten oder das Ausbreitungsgebiet. [4]</p> <p style=\"font-size:1em;margin-bottom:20px;\">Ein weiterer Grund ist \n" +
"die zunehmende vom Menschen unterst&uuml;tzte Verbreitung von Tieren und tierischen Erzeugnissen. Die Verbreitung der asiatischen \n" +
"Tigerm&uuml;cke ist eines der bekanntesten Beispiele, welche durch Transport auf Schiffen, LKWs und Flugzeugen von \n" +
"S&uuml;dostasien nach Afrika, Nord- und S&uuml;damerika sowie S&uuml;deuropa gelangte. In diesen neuen Regionen verbreitete sich die Tigerm&uuml;cke &auml;u&szlig;erst schnell. \n" +
"In manchen L&auml;ndern f&uuml;hrte es zu einem Ausbruch des \n" +
"Dengue-Fiebers. [8] In der Massentierhaltung dringen wildtier-assoziierte Mikroben leichter ein und k&ouml;nnen sich schneller \n" +
"verbreiten. Die intensivere Zucht von wildlebenden Arten tr&auml;gt dazu bei, dass Zoonose entstehen kann und eine leichtere und \n" +
"schnellere &Uuml;bertragung m&ouml;glich ist. Eine Ver&auml;nderung in den Mikroben selbst durch Weiterentwicklung oder Anpassung kann \n" +
"zu einer ver&auml;nderten &Uuml;bertragung kommen oder das Wirtsspektrum diversifiziert sich durch z.B. das &Uuml;berschreiten der Artengrenze. \n" +
"Darunter versteht man, dass eine neue Art die passenden Faktoren hat, um als Wirt zu fungieren. Durch eine \n" +
"Ver&auml;nderung des &Ouml;kosystems oder der klimatischen Verh&auml;ltnisse, muss es sich an neue Umst&auml;nde anpassen. [4] Die &Uuml;bertragung von Zoonose verst&auml;rkt sich ebenfalls \n" +
"durch das erh&ouml;hte nationale und internationale Reisen. Damit ist die Verbreitung auf andere Kontinente, in andere L&auml;nder \n" +
"und Regionen von Krankheitserregern und Wirten einfacher. Das vermehrte Neuerkennen von den &uuml;bertragbaren Krankheiten kommt \n" +
"von der verbesserten technischen Diagnose und epidemiologischen Techniken. Diese helfen bei der fr&uuml;hzeitigen Erkennung von \n" +
"bestehenden oder neuauftretenden Krankheitserregern. [4]</p>\n" +
"<div style=\"text-align: center;\">\n" +
"<img src=\"lerninhalte/Level5/inhalt 1/zoonosen_allgemein.JPG\" height=90% width=100%>" +
"<p style=\"font-size: 0.9em; color: #4D774E; margin-top: 5px; font-style: italic; \">&Uuml;bertragung von Tier auf Mensch</p>\n" +
"</div>\n" +
"\n" +
"<p style=\"font-size: 1em; margin-bottom: 20px;\">Basierend auf dem &Uuml;bertragungsweg, kann Zoonose in zwei Kategorien aufgeteilt werden. Die erste Kategorie ist, dass \n" +
"die Krankheit tierischen Ursprungs ist und nur in sehr seltenen F&auml;llen auf den Menschen &uuml;bertragen wird. Wenn dies \n" +
"allerdings passiert, ist die Verbreitung von Mensch zu Mensch einfach und erh&auml;lt den Infektionszyklus f&uuml;r einige Zeit \n" +
"aufrecht. Bekannte Erkrankungen sind HIV/AIDS, Ebola und die SARS-Viren. [4]\n" +
"\n" +
"</p><p style=\"font-size: 1em; margin-bottom: 20px;\">Die zweite Kategorie ist, dass die Krankheit tierischem Ursprungs direkt vom Tier oder &uuml;ber Vektoren zum Menschen &uuml;bertragen \n" +
"wird. Dabei ist die Tierwelt das Hauptreservoir des Erregers und eine Mensch-zu-Mensch &Uuml;bertragung ist eher selten. \n" +
"Beispiele sind das West-Nil-Virus und Lyme Borreliosis. [4]</p>\n" +
"\n" +
"<p style=\"font-size: 1em; margin-bottom: 20px;\">Nicht alle &Uuml;bertragungsfaktoren sind abh&auml;ngig vom Klimawandel. Einige sind abh&auml;ngig von der Globalisierung und ansteigenden \n" +
"menschlichen Population sowie das Vordringen in wilde Gebiete (Gebiete ohne menschliches Eingreifen). Klimatische und geografische \n" +
"Faktoren k&ouml;nnen vom Klimawandel beeinflusst werden. Eine erh&ouml;hte Temperatur oder die Ver&auml;nderung klimatischer Verh&auml;ltnisse \n" +
"k&ouml;nnen Tiere in Gebiete vordringen lassen, in denen sie vorher nicht angesiedelt waren. Durch diese Ver&auml;nderung k&ouml;nnen Krankheitserreger \n" +
"einen neuen Wirt finden. Dieser Wirt kann es dem Erreger erm&ouml;glichen einen Menschen zu infizieren, wenn es sich bei dem neuen \n" +
"Wirt um z.B. einen Vektor handelt. Der Klimawandel ver&auml;ndert das Verh&auml;ltniss von Wirten, Vektoren und Krankheitserregern. [9] \n" +
"In diesem Level werden einige Beispiele folgen in denen der Klimawandel die Ausbreitung der Zoonose ver&auml;ndert hat.\n" +
"\n" +
"</p>\n" +"<section style=\"padding: 20px;\">\n" +
"<h2 style='font-size: 1.5em; color: #2E598C; margin-top: 20px; margin-bottom: 10px;'>Literaturverweise</h2>\n" +
"<p class=\"reference\" style=\"font-style: italic; margin-top: 20px;\">\n" +
"<a href=\"https://citeseerx.ist.psu.edu/document?repid=rep1&type=pdf&doi=1de835d8169d6954d39e7888d92856343e47c568\">[4] Einfluss des Klimawandels auf Krankheitsvektoren und &Uuml;bertr&auml;ger</a><br>\n" +
"<a href=\"https://www.washington.edu/news/2023/02/27/hw-conflict-climate-change/\">[5] Konflikt und Klimawandel: Eine komplexe Beziehung</a><br>\n" +
"<a href=\"https://jech.bmj.com/content/jech/53/9/514.full.pdf\">[6] Gesundheitsrisiken durch Klimawandel</a><br>\n" +
"<a href=\"https://pubmed.ncbi.nlm.nih.gov/11974625/\">[7] Klimawandel und &ouml;ffentliche Gesundheit</a><br>\n" +
"<a href=\"https://archiv.ub.uni-heidelberg.de/volltextserver/12938/1/Pluskota.pdf\">[8] Klimawandel und seine Auswirkungen auf die Verbreitung von Krankheiten</a><br>\n" +
"<a href=\"https://www.zoonosen.net/zoonosenforschung/zoonose-des-monats\">[9] Zoonose des Monats</a>\n" +
"</p>\n" +
"</section>\n" +
"</article>", 14);

const contentUC3 = new ContentTemplate("Use Case Content 3",
"<article style=\"font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #E6F7EF; line-height: 1.6;\">\n" +
"<h1 style=\"font-size: 2.2em; color: #007A64; margin-bottom: 20px;\">Vektoren&uuml;bertragene Erkrankungen</h1>\n" +
"\n" +
"<p style=\"font-size: 1em; margin-bottom: 20px;\">\n" +
"Vektoren&uuml;bertragene Erkrankungen fallen in die zweite Kategorie der Zoonose Krankheiten, da eine &Uuml;bertragung von Vektoren zu \n" +
"Menschen stattfindet und die Krankheit sich nicht unter Menschen weiterverbreitet. Vektoren &uuml;bertragen Krankheiterreger von \n" +
"einem Wirt zum n&auml;chsten und fungieren somit als Krankheits&uuml;bertr&auml;ger. [11] Durch Klimawandel und Globalisierung k&ouml;nnen \n" +
"Vektorenkrankheiten sich einfacher ausbreiten und verschleppt werden. [10] Meist handelt es sich um M&uuml;cken oder Zecken, die \n" +
"die Krankheit mittels einem Stich &uuml;bertragen.</p> \n" +
"\n" +
"<div style=\"text-align: center;\">\n" +
"<img src=\"lerninhalte/Level5/inhalt 1/vektoren.jpeg\" height=50% width=50% >" +
"<p style=\"font-size: 0.9em; color: #4D774E; margin-top: 5px; font-style: italic; \">Vektoren Beispiele</p>\n" +
"</div>\n" +
"\n" +
"<p style=\"font-size: 1em; margin-bottom: 20px;\">Die Temperatur und die H&ouml;he des Niederschlages beeinflussen das &Uuml;berleben der \n" +
"Viren oder Parasiten im Vektor, sowie die Anpassung an die klimatischen Verh&auml;ltnisse im Ursprungsgebiet. Der Einfluss ist auf \n" +
"die verschiedenen Erreger unterschiedlich. M&uuml;cken, die Krankheitserreger besitzen, werden erst ab einer bestimmten Temperatur \n" +
"infekti&ouml;s (k&ouml;nnen die Viren auf den Menschen/andere Tiere &uuml;bertragen). Diese Temperatur ist f&uuml;r verschiedene M&uuml;ckenarten unterschiedlich. \n" +
"Bei M&uuml;ckenarten in gem&auml;&szlig;igten Klimazonen betr&auml;gt diese Temperatur 24-27 Grad Celcius, darauf deuten Experimente hin. [12] Daher wurden \n" +
"bestimmte vektor&uuml;bertragbare Krankheiten in Europa noch nicht festgestellt. Heutzutage kommen in Europa hei&szlig;ere Sommer h&auml;ufiger \n" +
"vor und somit sind bestimmte heimische M&uuml;ckenarten infekti&ouml;s. Sie k&ouml;nnen Krankheitserreger &uuml;bertragen, die vorher keine Gefahr \n" +
"f&uuml;r den Menschen bildeten, da sie nicht &uuml;bertragen werden konnten wegen einer zu niedrigen Inkubationstemperatur. [12]\n" +
"</p>" +
"<p style=\"font-size: 1em; margin-bottom: 20px;\">\n" +
"Das West-Nil-Virus (WNV) ist ein Beispiel f&uuml;r die infekti&ouml;se &Uuml;bertragung dank hoher Temperaturen und feuchten Gebieten. \n" +
"Es ist eine der Infektionskrankheiten, bei denen die Folgen des Klimawandels schon heutzutage feststellbar sind. [10] Ein weiteres \n" +
"Beispiel ist die Migration der Ixodes-Zecken. In Europa sind durch den Klimawandel die Temperaturen gestiegen, deswegen ist die \n" +
"Zecke in h&ouml;here Lagen vorgedrungen. Der Lebensraum von Ixodes-Zecken hat sich durch den Klimawandel erweitert und somit sind die\n" +
"Krankheiten, die die Zecken &uuml;bertragen in Gebiete ohne die Krankheit in Europa vorgedrungen. Die Ixodes- Zecken &uuml;bertragen FSME \n" +
"und Borreliose. [10]\n" +
"\n" +
"</p>\n" +
"\n" +
"<h1 style=\"font-size: 2.2em; color: #007A64; margin-bottom: 20px;\">Wasserb&uuml;rtige Infektionen</h1>\n" +
"<p style=\"font-size: 1em; margin-bottom: 20px;\">\n" +
"Wasserb&uuml;rtige Infektionen haben durch den Klimawandel ein h&ouml;heres Potenzial gesundheitsgef&auml;hrdend zu sein. Dies passiert durch \n" +
"eine Steigerung der Erregerkonzentration in Gew&auml;ssern und die Ansiedelung von neuen Erregern im Wasser oder die Ver&auml;nderung \n" +
"der Eigenschaften zur Anpassung der Erreger an neue Umst&auml;nde. [13] Die Krankheitserreger haben bestimmte Merkmale, um als \n" +
"wasserb&uuml;rtige Erreger klassifiziert zu werden. Ein Merkmal ist die hohe Ansteckbarkeit bei einer niedrigen Konzentration der \n" +
"Erreger. Au&szlig;erdem k&ouml;nnen sie eine lange Zeit in der Umwelt &uuml;berleben und infekti&ouml;s bleiben. Verschiede bakterielle \n" +
"Krankheitserreger k&ouml;nnen sich unter beg&uuml;nstigten Verh&auml;ltnissen au&szlig;erhalb eines Wirts vermehren. [14] Eine Erh&ouml;hung in der \n" +
"Wassertemperatur bedingt die Erregerbildung positiv. In den n&ouml;rdlichen Regionen k&ouml;nnen durch vermehrte l&auml;ngere hei&szlig;e Sommer \n" +
"und w&auml;rmere Herbste die Wassertemperaturen steigen. &Uuml;berschwemmungen und Sturmfluten tragen zu einer Bildung und Verbreitung \n" +
"von wasserb&uuml;rtigen Bakterien und Keimen bei. [13] Durch den Klimawandel h&auml;ufen sich Extremwetter-Vorf&auml;lle und es steigt die \n" +
"Gefahr von Ausbr&uuml;chen wasserb&uuml;rtiger Infektionen. \n" +
"</p>\n" +"<section style=\"padding: 20px;\">\n" +
"<h2 style='font-size: 1.5em; color: #2E598C; margin-top: 20px; margin-bottom: 10px;'>Literaturverweise</h2>\n" +
"<p class=\"reference\" style=\"font-style: italic; margin-top: 20px;\">\n" +
"<a href=\"https://www.sciencedirect.com/science/article/pii/S0001706X21004034?ref=pdf_download&fr=RR-2&rr=8226958aab362c0c\">[10] Climate change and zoonoses: A review of the current status, knowledge gaps, and future trends</a><br>\n" +
"<a href=\"https://flexikon.doccheck.com/de/Vektor\">[11] Vektor in der Biologie</a><br>\n" +
"<a href=\"https://www.rki.de/DE/Content/Gesundheitsmonitoring/Gesundheitsberichterstattung/GBEDownloadsJ/Focus/JHealthMonit_2023_S3_Vektor_Nagetier_Assoziierte_Erkrankungen_Sachstandsbericht_Klimawandel_Gesundheit.pdf?__blob=publicationFile\">[12] Vektor- und Nagetier-assoziierte Erkrankungen im Kontext des Klimawandels</a><br>\n" +
"<a href=\"https://edoc.rki.de/bitstream/handle/176904/11077/JHealthMonit_2023_S3_Wasserbuertige_Infektionen_Intoxikationen_Sachstandsbericht_Klimawandel_Gesundheit.pdf?sequence=1\">[13] Wasserb&uuml;rtige Infektionen und Intoxikationen im Kontext des Klimawandels</a><br>\n" +
"<a href=\"https://www.scielosp.org/article/ssm/content/raw/?resource_ssm_path=/media/assets/aiss/v48n4/a13v48n4.pdf\">[14] Sozialwissenschaftliche und medizinische Perspektiven auf Klimawandel und Gesundheit</a><br>\n" +
"<a href=\"https://www.nature.com/collections/lbfsgzmyns\">[16] Vektoren</a>\n" +
"</p>\n" +
"</section>\n" +
"</article>", 15);



/// ------------------------------------- MAPS SETZEN -------------------------------------- //
// Map für die Zuweisung der Keys zu den Inhalten
mapAllContents.set("Ueberblick Content 1", content1);
mapAllContents.set("Ueberblick Content 2", content2);
mapAllContents.set("Ueberblick Content 3", content3);
mapAllContents.set("Planetary Health Content 1", contentPH1);
mapAllContents.set("Planetary Health Content 2", contentPH2);
mapAllContents.set("Planetary Health Content 3", contentPH3);
mapAllContents.set("Adaption Content 1", contentAd1);
mapAllContents.set("Adaption Content 2", contentAd2);
mapAllContents.set("Adaption Content 3", contentAd3);
mapAllContents.set("Mitigation Content 1", contentMit1);
mapAllContents.set("Mitigation Content 2", contentMit2);
mapAllContents.set("Mitigation Content 3", contentMit3);
mapAllContents.set("Use Case Content 1", contentUC1);
mapAllContents.set("Use Case Content 2", contentUC2);
mapAllContents.set("Use Case Content 3", contentUC3);

mapAllContents.set("Quiz Ueberblick 1", quizUeber);
mapAllContents.set("Quiz Ueberblick 2", quizUeber2);
mapAllContents.set("Quiz Ueberblick 3", quizUeber3);
mapAllContents.set("Quiz Planetary Health 1", quizPH);
mapAllContents.set("Quiz Planetary Health 2", quizPH2);
mapAllContents.set("Quiz Planetary Health 3", quizPH3);
mapAllContents.set("Quiz Adaption 1", quizAdap);
mapAllContents.set("Quiz Adaption 2", quizAdap2);
mapAllContents.set("Quiz Adaption 3", quizAdap3);
mapAllContents.set("Quiz Mitigation 1", quizMiti);
mapAllContents.set("Quiz Mitigation 2", quizMiti2);
mapAllContents.set("Quiz Mitigation 3", quizMiti3);
mapAllContents.set("Quiz Use Case", quizUC);

// Map für die Reihenfolge aller Inhalte (dies ist die entscheidende Map!)
// Level 1
mapAllContentsOrder.set(1, "Ueberblick Content 1");
mapAllContentsOrder.set(2, "Ueberblick Content 2");
mapAllContentsOrder.set(3, "Ueberblick Content 3");
mapAllContentsOrder.set(4, "Quiz Ueberblick 1");
// Level 2
mapAllContentsOrder.set(5, "Planetary Health Content 1");
mapAllContentsOrder.set(6, "Quiz Planetary Health 1");
mapAllContentsOrder.set(7, "Planetary Health Content 2");
//mapAllContentsOrder.set(8, "Quiz Planetary Health 2");
mapAllContentsOrder.set(8, "Planetary Health Content 3");
//mapAllContentsOrder.set(10, "Quiz Planetary Health 3");

// Level 3
mapAllContentsOrder.set(9, "Adaption Content 1");
mapAllContentsOrder.set(10, "Quiz Adaption 1");
mapAllContentsOrder.set(11, "Adaption Content 2");
//mapAllContentsOrder.set(14, "Quiz Adaption 2");
mapAllContentsOrder.set(12, "Adaption Content 3");
//mapAllContentsOrder.set(16, "Quiz Adaption 3");

// Level 4
mapAllContentsOrder.set(13, "Mitigation Content 1");
mapAllContentsOrder.set(14, "Mitigation Content 2");
mapAllContentsOrder.set(15, "Quiz Mitigation 1");
mapAllContentsOrder.set(16, "Mitigation Content 3");
mapAllContentsOrder.set(17, "Quiz Mitigation 2");
//mapAllContentsOrder.set(22, "Quiz Mitigation 3");

// Level 5
mapAllContentsOrder.set(18, "Use Case Content 1");
mapAllContentsOrder.set(19, "Use Case Content 2");
mapAllContentsOrder.set(20, "Use Case Content 3");
mapAllContentsOrder.set(21, "Quiz Use Case");



// Map für Reihenfolge von Inhalten (ohne Quiz)
mapContentOrder.set(1, "Ueberblick Content 1");
mapContentOrder.set(2, "Ueberblick Content 2");
mapContentOrder.set(3, "Ueberblick Content 3");
mapContentOrder.set(4, "Planetary Health Content 1");
mapContentOrder.set(5, "Planetary Health Content 2");
mapContentOrder.set(6, "Planetary Health Content 3");
mapContentOrder.set(7, "Adaption Content 1");
mapContentOrder.set(8, "Adaption Content 2");
mapContentOrder.set(9, "Adaption Content 3");
mapContentOrder.set(10, "Mitigation Content 1");
mapContentOrder.set(11, "Mitigation Content 2");
mapContentOrder.set(12, "Mitigation Content 3");
mapContentOrder.set(13, "Use Case Content 1");
mapContentOrder.set(14, "Use Case Content 2");
mapContentOrder.set(15, "Use Case Content 3");
