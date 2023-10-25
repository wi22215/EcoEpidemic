
const mapOfContent = new Map();
const mapContentOrder = new Map();

const content1 = new ContentTemplate("Ueberblick Content 1", "<h1>Willkommen zum Popup 1</h1><p>Dies ist ein Beispieltext im Popup.</p>", 1);
const content2 = new ContentTemplate("Ueberblick Content 2", "<h1>Willkommen zum Popup 2</h1>", 2);
const content3 = new ContentTemplate("Ueberblick Content 3", "<h1>Willkommen zum Popup 3</h1>", 3);
const contentPH1 = new ContentTemplate("Planetary Health Content 1", "<h1>Willkommen zum Popup PH 1</h1><p>Dies ist ein Beispieltext im Popup.</p>", 4);
const contentPH2 = new ContentTemplate("Planetary Health Content 2", "<h1>Willkommen zum Popup PH 2</h1>", 5);
const contentPH3 = new ContentTemplate("Planetary Health Content 3", "<h1>Willkommen zum Popup PH 3</h1>", 6);
const contentAd1 = new ContentTemplate("Planetary Health Content 1", "<h1>Willkommen zum Popup Ad 1</h1><p>Dies ist ein Beispieltext im Popup.</p>", 7);
const contentAd2 = new ContentTemplate("Planetary Health Content 2", "<h1>Willkommen zum Popup Ad 2</h1>", 8);
const contentAd3 = new ContentTemplate("Planetary Health Content 3", "<h1>Willkommen zum Popup Ad 3</h1>", 9);
const contentMit1 = new ContentTemplate("Mitigation Content 1", "<h1>Willkommen zum Popup Mit 1</h1><p>Dies ist ein Beispieltext im Popup.</p>", 10);
const contentMit2 = new ContentTemplate("Mitigation Content 2", "<h1>Willkommen zum Popup Mit 2</h1>", 11);
const contentMit3 = new ContentTemplate("Mitigation Content 3", "<h1>Willkommen zum Popup Mit 3</h1>", 12);
const contentUC1 = new ContentTemplate("Mitigation Content 1", "<h1>Willkommen zum Popup UC 1</h1><p>Dies ist ein Beispieltext im Popup.</p>", 13);
const contentUC2 = new ContentTemplate("Mitigation Content 2", "<h1>Willkommen zum Popup UC 2</h1>", 14);
const contentUC3 = new ContentTemplate("Mitigation Content 3", "<h1>Willkommen zum Popup UC 3</h1>", 15);



mapOfContent.set("Ueberblick Content 1", content1);
mapOfContent.set("Ueberblick Content 2", content2);
mapOfContent.set("Ueberblick Content 3", content3);
mapOfContent.set("Planetary Health Content 1", contentPH1);
mapOfContent.set("Planetary Health Content 2", contentPH2);
mapOfContent.set("Planetary Health Content 3", contentPH3);
mapOfContent.set("Adaption Content 1", contentAd1);
mapOfContent.set("Adaption Content 2", contentAd2);
mapOfContent.set("Adaption Content 3", contentAd3);
mapOfContent.set("Mitigation Content 1", contentMit1);
mapOfContent.set("Mitigation Content 2", contentMit2);
mapOfContent.set("Mitigation Content 3", contentMit3);
mapOfContent.set("Use Case Content 1", contentUC1);
mapOfContent.set("Use Case Content 2", contentUC2);
mapOfContent.set("Use Case Content 3", contentUC3);

mapContentOrder.set(1, "Ueberblick Content 1");
mapContentOrder.set(2, "Ueberblick Content 2");
mapContentOrder.set(3, "Ueberblick Content 3");
mapContentOrder.set(4, contentPH1);
mapContentOrder.set(5, contentPH2);
mapContentOrder.set(6, contentPH3);
mapContentOrder.set(7, contentAd1);
mapContentOrder.set(8, contentAd2);
mapContentOrder.set(9, contentAd3);
mapContentOrder.set(10, contentMit1);
mapContentOrder.set(11, contentMit2);
mapContentOrder.set(12, contentMit3);
mapContentOrder.set(13, contentUC1);
mapContentOrder.set(14, contentUC2);
mapContentOrder.set(15, contentUC3);



const mapAllContents = new Map();
const mapAllContentsOrder = new Map();

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

mapAllContents.set("Quiz Ueberblick 1", quiz1);
mapAllContents.set("Quiz Ueberblick 2", quiz1);
mapAllContents.set("Quiz Ueberblick 3", quiz1);
mapAllContents.set("Quiz Planetary Health 1", quiz1);
mapAllContents.set("Quiz Planetary Health 2", quiz1);
mapAllContents.set("Quiz Planetary Health 3", quiz1);
mapAllContents.set("Quiz Adaption 1", quiz1);
mapAllContents.set("Quiz Adaption 2", quiz1);
mapAllContents.set("Quiz Adaption 3", quiz1);
mapAllContents.set("Quiz Mitigation 1", quiz1);
mapAllContents.set("Quiz Mitigation 2", quiz1);
mapAllContents.set("Quiz Mitigation 3", quiz1);
mapAllContents.set("Quiz Use Case", quiz1);

mapAllContentsOrder.set(1, "Ueberblick Content 1");
mapAllContentsOrder.set(2, "Quiz Ueberblick 1");
mapAllContentsOrder.set(3, "Ueberblick Content 2");
mapAllContentsOrder.set(4, "Quiz Ueberblick 2");
mapAllContentsOrder.set(5, "Ueberblick Content 3");
mapAllContentsOrder.set(6, "Quiz Ueberblick 3");
mapAllContentsOrder.set(7, "Planetary Health Content 1");
mapAllContentsOrder.set(8, "Quiz Planetary Health 1");
mapAllContentsOrder.set(9, "Planetary Health Content 2");
mapAllContentsOrder.set(10, "Quiz Planetary Health 2");
mapAllContentsOrder.set(11, "Planetary Health Content 3");
mapAllContentsOrder.set(12, "Quiz Planetary Health 3");
mapAllContentsOrder.set(13, "Adaption Content 1");
mapAllContentsOrder.set(14, "Quiz Adaption 1");
mapAllContentsOrder.set(15, "Adaption Content 2");
mapAllContentsOrder.set(16, "Quiz Adaption 2");
mapAllContentsOrder.set(17, "Adaption Content 3");
mapAllContentsOrder.set(18, "Quiz Adaption 3");
mapAllContentsOrder.set(19, "Mitigation Content 1");
mapAllContentsOrder.set(20, "Quiz Mitigation 1");
mapAllContentsOrder.set(21, "Mitigation Content 2");
mapAllContentsOrder.set(22, "Quiz Mitigation 2");
mapAllContentsOrder.set(23, "Mitigation Content 3");
mapAllContentsOrder.set(24, "Quiz Mitigation 3");
mapAllContentsOrder.set(25, "Use Case Content 1");
mapAllContentsOrder.set(26, "Use Case Content 2");
mapAllContentsOrder.set(27, "Use Case Content 3");
mapAllContentsOrder.set(26, "Quiz Use Case");