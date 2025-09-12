const AENEIS_DATA = {
    mainTitle: { es: "Eneida", en: "Aeneid", zh: "埃涅阿斯紀" },
    author: "Publius Vergilius Maro",
    books: {
        book1: {
            title: { es: "Libro Primero", en: "Book One", zh: "第一卷" },
            chapters: [
                { title: { es: "Versos 1-11: Proemio (Invocación a la Musa)", en: "Verses 1-11: Proem (Invocation to the Muse)", zh: "第 1-11 行：序言（呼喚繆斯）" }, corpusFile: "js/data/libro1-versos-1-11.js" },
                { title: { es: "Versos 12-33: La ira de Juno", en: "Verses 12-33: The wrath of Juno", zh: "第 12-33 行：朱諾的憤怒" }, corpusFile: "js/data/libro1-versos-12-33.js" },
                { title: { es: "Versos 34-63: La profecía del destino de Troya", en: "Verses 34-63: The prophecy of Troy's destiny", zh: "第 34-63 行：特洛伊命運的預言" }, corpusFile: "js/data/libro1-versos-34-63.js" },
                { title: { es: "Versos 64-80: Eolo y la tormenta", en: "Verses 64-80: Aeolus and the storm", zh: "第 64-80 行：埃奧羅斯與風暴" }, corpusFile: "js/data/libro1-versos-64-80.js" },
                { title: { es: "Versos 81-123: La tempestad en el mar", en: "Verses 81-123: The tempest at sea", zh: "第 81-123 行：海上的暴風雨" }, corpusFile: "js/data/libro1-versos-81-123.js" },
                { title: { es: "Versos 124-156: Neptuno calma la tormenta", en: "Verses 124-156: Neptune calms the storm", zh: "第 124-156 行：海王星平息風暴" }, corpusFile: "js/data/libro1-versos-124-156.js" },
                { title: { es: "Versos 157-209: Eneas y la llegada a Libia", en: "Verses 157-209: Aeneas and the arrival in Libya", zh: "第 157-209 行：埃涅阿斯抵達利比亞" }, corpusFile: "js/data/libro1-versos-157-209.js" },
                { title: { es: "Versos 210-222: El banquete y el ánimo de los troyanos", en: "Verses 210-222: The feast and the Trojans' morale", zh: "第 210-222 行：宴會與特洛伊人的士氣" }, corpusFile: "js/data/libro1-versos-210-222.js" },
                { title: { es: "Versos 223-253: La súplica de Venus a Júpiter", en: "Verses 223-253: Venus' plea to Jupiter", zh: "第 223-253 行：維納斯向朱庇特求情" }, corpusFile: "js/data/libro1-versos-223-253.js" },
                { title: { es: "Versos 254-296: La profecía de Júpiter sobre el destino de Roma", en: "Verses 254-296: Jupiter's prophecy about the destiny of Rome", zh: "第 254-296 行：朱庇特關於羅馬命運的預言" }, corpusFile: "js/data/libro1-versos-254-296.js" },
                { title: { es: "Versos 297-304: Mercurio es enviado a Cartago", en: "Verses 297-304: Mercury is sent to Carthage", zh: "第 297-304 行：墨丘利被派往迦太基" }, corpusFile: "js/data/libro1-versos-297-304.js" },
                { title: { es: "Versos 305-320: Eneas explora la tierra", en: "Verses 305-320: Aeneas explores the land", zh: "第 305-320 行：埃涅阿斯探查陸地" }, corpusFile: "js/data/libro1-versos-305-320.js" },
                { title: { es: "Versos 321-350: Aparición de Venus como cazadora", en: "Verses 321-350: Appearance of Venus as a huntress", zh: "第 321-350 行：維納斯化身女獵人顯現" }, corpusFile: "js/data/libro1-versos-321-350.js" },
                { title: { es: "Versos 351-380: Venus relata el crimen de Pigmalión", en: "Verses 351-380: Venus recounts the crime of Pygmalion", zh: "第 351-380 行：維納斯講述皮格馬利翁的罪行" }, corpusFile: "js/data/libro1-versos-351-380.js" },
                { title: { es: "Versos 381-410: La huida de Dido y el augurio de los cisnes", en: "Verses 381-410: Dido's flight and the omen of the swans", zh: "第 381-410 行：狄多的逃亡與天鵝的預兆" }, corpusFile: "js/data/libro1-versos-381-410.js" },
                { title: { es: "Versos 411-417: Venus se revela y protege a Eneas", en: "Verses 411-417: Venus reveals herself and protects Aeneas", zh: "第 411-417 行：維納斯現出真身並保護埃涅阿斯" }, corpusFile: "js/data/libro1-versos-411-417.js" },
                { title: { es: "Verses 418-450: La construcción de Cartago", en: "Verses 418-450: The founding of Carthage", zh: "第 418-450 行：迦太基的建設" }, corpusFile: "js/data/libro1-versos-418-450.js" },
                { title: { es: "Versos 451-493: Los troyanos se asombran ante los frescos del templo de Juno", en: "Verses 451-493: The Trojans marvel at the frescoes in Juno's temple", zh: "第 451-493 行：特洛伊人驚嘆朱諾神殿的壁畫" }, corpusFile: "js/data/libro1-versos-451-493.js" },
                { title: { es: "Versos 494-519: La llegada de Dido y los compañeros de Eneas", en: "Verses 494-519: The arrival of Dido and Aeneas' companions", zh: "第 494-519 行：狄多和埃涅阿斯同伴的到來" }, corpusFile: "js/data/libro1-versos-494-519.js" },
                { title: { es: "Verses 520-560: Ilioneo se presenta ante Dido", en: "Verses 520-560: Ilioneus presents himself to Dido", zh: "第 520-560 行：伊利奧紐斯在狄多面前陳述" }, corpusFile: "js/data/libro1-versos-520-560.js" },
                { title: { es: "Verses 561-578: Dido se compadece de los troyanos", en: "Verses 561-578: Dido pities the Trojans", zh: "第 561-578 行：狄多憐憫特洛伊人" }, corpusFile: "js/data/libro1-versos-561-578.js" },
                { title: { es: "Verses 579-593: Eneas se revela a Dido", en: "Verses 579-593: Aeneas reveals himself to Dido", zh: "第 579-593 行：埃涅阿斯向狄多現身" }, corpusFile: "js/data/libro1-versos-579-593.js" },
                { title: { es: "Verses 594-612: La gratitud de Eneas", en: "Verses 594-612: Aeneas' gratitude", zh: "第 594-612 行：埃涅阿斯的感激" }, corpusFile: "js/data/libro1-versos-594-612.js" },
                { title: { es: "Versos 613-642: El banquete de bienvenida", en: "Verses 613-642: The welcome banquet", zh: "第 613-642 行：歡迎宴會" }, corpusFile: "js/data/libro1-versos-613-642.js" },
                { title: { es: "Versos 643-694: Venus prepara el engaño de Cupido", en: "Verses 643-694: Venus prepares Cupid's deception", zh: "第 643-694 行：維納斯準備丘比特的欺騙" }, corpusFile: "js/data/libro1-versos-643-694.js" },
                { title: { es: "Verses 695-722: La llegada de Ascanius (Cupido) al palacio", en: "Verses 695-722: The arrival of Ascanius (Cupid) at the palace", zh: "第 695-722 行：阿斯卡尼烏斯（丘比特）抵達宮殿" }, corpusFile: "js/data/libro1-versos-695-722.js" },
                { title: { es: "Versos 723-756: El banquete y el canto de Iopas", en: "Verses 723-756: The banquet and the song of Iopas", zh: "第 723-756 行：宴會與伊俄帕斯的歌唱" }, corpusFile: "js/data/libro1-versos-723-756.js" }
            ]
        }
    }
};
