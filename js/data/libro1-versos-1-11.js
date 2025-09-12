registerChapterData('libro1-versos-1-11', {
    context: {
        es: {
            title: "Proemio: Invocación a la Musa",
            content: "La Eneida comienza con el proemio clásico, donde el poeta Virgilio declara su tema: las armas y el hombre (Eneas) que, por designio del destino, viajó desde las costas de Troya hasta Italia para fundar la estirpe romana. Se destaca el inmenso sufrimiento del héroe, tanto en tierra como en mar, a causa de la ira implacable de la diosa Juno. Virgilio concluye la introducción con una pregunta retórica sobre la causa de tal ensañamiento divino e invoca a la Musa para que le revele los orígenes de la cólera de la reina de los dioses."
        },
        en: {
            title: "Proem: Invocation to the Muse",
            content: "The Aeneid opens with the classic proem, where the poet Virgil declares his theme: arms and the man (Aeneas) who, by fate's design, traveled from the shores of Troy to Italy to found the Roman race. The hero's immense suffering is emphasized, both on land and at sea, due to the unyielding wrath of the goddess Juno. Virgil concludes the introduction with a rhetorical question about the cause of such divine cruelty and invokes the Muse to reveal to him the origins of the queen of the gods' anger."
        },
        zh: {
            title: "序言：呼喚繆斯",
            content: "《埃涅阿斯紀》以經典的序言開篇，詩人維吉爾在其中宣告了他的主題：戰爭與英雄（埃涅阿斯），這位英雄因命運的安排，從特洛伊的海岸遠行至義大利，建立了羅馬民族。詩中強調了英雄在陸地與海上所遭受的巨大苦難，這一切都源於女神朱諾無情的憤怒。維吉爾在引言的結尾提出了一個修辭性問題，探究如此神聖的殘酷之原因，並呼喚繆斯女神向他揭示這位眾神之后憤怒的根源。"
        }
    },
    textus: {
        capitula: [
            {
                "numerus": 1,
                "orationes": [{
                    "original_lat": "Arma uirumque cano, Troiae qui primus ab oris",
                    "translationes": { "es": "Canto a las armas y al hombre que, primero desde las costas de Troya,", "en": "I sing of arms and the man who, first from the shores of Troy,", "zh": "我歌頌戰爭與英雄，他首先從特洛伊的海岸" },
                    "verba": [
                        { "textus": "Arma", "lemma": "arma", "morphologia": "Sustantivo, Acusativo, Plural, Neutro", "syntaxis": "Objeto Directo", "translatio": { "es": "a las armas", "en": "of arms", "zh": "戰爭" } },
                        { "textus": "uirumque", "lemma": "uirque", "morphologia": "Sustantivo + Conjunción, Acusativo, Singular, Masculino", "syntaxis": "Objeto Directo", "translatio": { "es": "y al hombre", "en": "and the man", "zh": "與英雄" } },
                        { "textus": "cano,", "lemma": "cano", "morphologia": "Verbo, 1ª pers. sing., Presente Indicativo Activo", "syntaxis": "Verbo principal", "translatio": { "es": "canto", "en": "I sing", "zh": "我歌頌" } },
                        { "textus": "Troiae", "lemma": "Troia", "morphologia": "Sustantivo, Genitivo, Singular, Femenino", "syntaxis": "Complemento de 'oris'", "translatio": { "es": "de Troya", "en": "of Troy", "zh": "特洛伊的" } },
                        { "textus": "qui", "lemma": "qui", "morphologia": "Pronombre relativo, Nominativo, Singular, Masculino", "syntaxis": "Sujeto", "translatio": { "es": "que", "en": "who", "zh": "他" } },
                        { "textus": "primus", "lemma": "primus", "morphologia": "Adjetivo, Nominativo, Singular, Masculino", "syntaxis": "Predicativo", "translatio": { "es": "primero", "en": "first", "zh": "首先" } },
                        { "textus": "ab", "lemma": "ab", "morphologia": "Preposición (con Ablativo)", "syntaxis": "Introduce 'oris'", "translatio": { "es": "desde", "en": "from", "zh": "從" } },
                        { "textus": "oris", "lemma": "ora", "morphologia": "Sustantivo, Ablativo, Plural, Femenino", "syntaxis": "C. C. de Lugar (de donde)", "translatio": { "es": "las costas", "en": "the shores", "zh": "海岸" } }
                    ]
                }]
            },
            {
                "numerus": 2,
                "orationes": [{
                    "original_lat": "Italiam, fato profugus, Lauiniaque uenit",
                    "translationes": { "es": "a Italia, prófugo por el hado, y a las costas de Lavinia llegó", "en": "to Italy, an exile by fate, and came to the Lavinian", "zh": "因命運而流亡，來到義大利和拉維尼亞的" },
                    "verba": [
                        { "textus": "Italiam,", "lemma": "Italia", "morphologia": "Sustantivo, Acusativo, Singular, Femenino", "syntaxis": "C. C. de Lugar (a donde)", "translatio": { "es": "a Italia", "en": "to Italy", "zh": "到義大利" } },
                        { "textus": "fato", "lemma": "fatum", "morphologia": "Sustantivo, Ablativo, Singular, Neutro", "syntaxis": "Ablativo de causa", "translatio": { "es": "por el hado", "en": "by fate", "zh": "因命運" } },
                        { "textus": "profugus,", "lemma": "profugus", "morphologia": "Adjetivo, Nominativo, Singular, Masculino", "syntaxis": "Aposición al sujeto ('qui')", "translatio": { "es": "prófugo", "en": "an exile", "zh": "流亡者" } },
                        { "textus": "Lauiniaque", "lemma": "Lauiniusque", "morphologia": "Adjetivo + Conjunción, Acusativo, Plural, Neutro", "syntaxis": "Modificador de 'litora' (v. 3)", "translatio": { "es": "y de Lavinia", "en": "and Lavinian", "zh": "和拉維尼亞的" } },
                        { "textus": "uenit", "lemma": "uenio", "morphologia": "Verbo, 3ª pers. sing., Perfecto Indicativo Activo", "syntaxis": "Verbo principal de la oración de relativo", "translatio": { "es": "llegó", "en": "he came", "zh": "來到" } }
                    ]
                }]
            },
            {
                "numerus": 3,
                "orationes": [{
                    "original_lat": "litora, multum ille et terris iactatus et alto",
                    "translationes": { "es": "costas, él, zarandeado mucho tanto en tierras como en el mar profundo,", "en": "shores, he, much tossed both on lands and on the deep,", "zh": "海岸，他曾在陸地與深海中被猛烈地拋擲，" },
                    "verba": [
                        { "textus": "litora,", "lemma": "litus", "morphologia": "Sustantivo, Acusativo, Plural, Neutro", "syntaxis": "C. C. de Lugar (a donde)", "translatio": { "es": "a las costas", "en": "to the shores", "zh": "到海岸" } },
                        { "textus": "multum", "lemma": "multum", "morphologia": "Adverbio", "syntaxis": "Adverbio que modifica a 'iactatus'", "translatio": { "es": "mucho", "en": "much", "zh": "猛烈地" } },
                        { "textus": "ille", "lemma": "ille", "morphologia": "Pronombre, Nominativo, Singular, Masculino", "syntaxis": "Sujeto enfático (refiere a 'qui')", "translatio": { "es": "él", "en": "he", "zh": "他" } },
                        { "textus": "et", "lemma": "et", "morphologia": "Conjunción correlativa", "syntaxis": "Conjunción 'tanto...'", "translatio": { "es": "tanto", "en": "both", "zh": "既" } },
                        { "textus": "terris", "lemma": "terra", "morphologia": "Sustantivo, Ablativo, Plural, Femenino", "syntaxis": "Ablativo de lugar 'en donde'", "translatio": { "es": "en tierras", "en": "on lands", "zh": "在陸地" } },
                        { "textus": "iactatus", "lemma": "iacto", "morphologia": "Participio, m., sg., nom., pf. pas.", "syntaxis": "Participio concertado con 'ille'", "translatio": { "es": "zarandeado", "en": "tossed", "zh": "被拋擲" } },
                        { "textus": "et", "lemma": "et", "morphologia": "Conjunción correlativa", "syntaxis": "Conjunción '...como'", "translatio": { "es": "como", "en": "and", "zh": "也" } },
                        { "textus": "alto", "lemma": "altum", "morphologia": "Sustantivo, n., sg., abl.", "syntaxis": "Ablativo de lugar 'en donde'", "translatio": { "es": "en el profundo (mar)", "en": "on the deep (sea)", "zh": "在深海" } }
                    ]
                }]
            },
            {
                "numerus": 4,
                "orationes": [{
                    "original_lat": "ui superum saeuae memorem Iunonis ob iram;",
                    "translationes": { "es": "por la fuerza de los dioses, por la memoriosa ira de la cruel Juno;", "en": "by the force of the gods above, on account of the mindful wrath of cruel Juno;", "zh": "因眾神之力，為了朱諾那殘酷而念念不忘的憤怒；" },
                    "verba": [
                        { "textus": "ui", "lemma": "uis", "morphologia": "Sustantivo, f., sg., abl.", "syntaxis": "Ablativo de causa/instrumento", "translatio": { "es": "por la fuerza", "en": "by the force", "zh": "因力量" } },
                        { "textus": "superum", "lemma": "superus", "morphologia": "Adjetivo, m., pl., gen.", "syntaxis": "Genitivo (síncopa de superorum)", "translatio": { "es": "de los de arriba", "en": "of the (gods) above", "zh": "的眾神" } },
                        { "textus": "saeuae", "lemma": "saeuus", "morphologia": "Adjetivo, f., sg., gen.", "syntaxis": "Modificador de 'Iunonis'", "translatio": { "es": "de la cruel", "en": "of cruel", "zh": "殘酷的" } },
                        { "textus": "memorem", "lemma": "memor", "morphologia": "Adjetivo, f., sg., acc.", "syntaxis": "Modificador de 'iram'", "translatio": { "es": "memoriosa", "en": "mindful", "zh": "念念不忘的" } },
                        { "textus": "Iunonis", "lemma": "Iuno", "morphologia": "Sustantivo, f., sg., gen.", "syntaxis": "CN de 'iram'", "translatio": { "es": "de Juno", "en": "of Juno", "zh": "朱諾的" } },
                        { "textus": "ob", "lemma": "ob", "morphologia": "Preposición + acc.", "syntaxis": "Preposición que rige 'iram'", "translatio": { "es": "a causa de", "en": "on account of", "zh": "因為" } },
                        { "textus": "iram;", "lemma": "ira", "morphologia": "Sustantivo, f., sg., acc.", "syntaxis": "Término de la preposición 'ob'", "translatio": { "es": "la ira", "en": "the wrath", "zh": "憤怒" } }
                    ]
                }]
            },
            {
                "numerus": 5,
                "orationes": [{
                    "original_lat": "multa quoque et bello passus, dum conderet urbem,",
                    "translationes": { "es": "y habiendo padecido también mucho en la guerra, hasta que fundara la ciudad,", "en": "and also having suffered many things in war, until he might found a city,", "zh": "並且在戰爭中也遭受許多苦難，直到他建立那座城市，" },
                    "verba": [
                        { "textus": "multa", "lemma": "multus", "morphologia": "Adjetivo sustantivado, n., pl., acc.", "syntaxis": "Objeto directo de 'passus'", "translatio": { "es": "muchas cosas", "en": "many things", "zh": "許多" } },
                        { "textus": "quoque", "lemma": "quoque", "morphologia": "Adverbio", "syntaxis": "Adverbio", "translatio": { "es": "también", "en": "also", "zh": "也" } },
                        { "textus": "et", "lemma": "et", "morphologia": "Conjunción", "syntaxis": "Conjunción", "translatio": { "es": "y", "en": "and", "zh": "並且" } },
                        { "textus": "bello", "lemma": "bellum", "morphologia": "Sustantivo, n., sg., abl.", "syntaxis": "Ablativo de tiempo o lugar", "translatio": { "es": "en la guerra", "en": "in war", "zh": "在戰爭中" } },
                        { "textus": "passus,", "lemma": "patior", "morphologia": "Participio deponente, m., sg., nom., pf.", "syntaxis": "Participio concertado con sujeto ('ille')", "translatio": { "es": "habiendo padecido", "en": "having suffered", "zh": "遭受了" } },
                        { "textus": "dum", "lemma": "dum", "morphologia": "Conjunción", "syntaxis": "Conjunción subordinante + subjuntivo", "translatio": { "es": "hasta que", "en": "until", "zh": "直到" } },
                        { "textus": "conderet", "lemma": "condo", "morphologia": "Verbo, 3ª pers., sg., imperf., subj.", "syntaxis": "Verbo de la subordinada con 'dum'", "translatio": { "es": "fundara", "en": "he might found", "zh": "他建立" } },
                        { "textus": "urbem,", "lemma": "urbs", "morphologia": "Sustantivo, f., sg., acc.", "syntaxis": "Objeto directo de 'conderet'", "translatio": { "es": "la ciudad", "en": "the city", "zh": "那座城市" } }
                    ]
                }]
            },
            {
                "numerus": 6,
                "orationes": [{
                    "original_lat": "inferretque deos Latio; genus unde Latinum",
                    "translationes": { "es": "e introdujera los dioses en el Lacio; de donde (proceden) el linaje latino,", "en": "and bring the gods to Latium; whence the Latin race,", "zh": "並將諸神帶入拉提姆；拉丁民族便由此而來，" },
                    "verba": [
                        { "textus": "inferretque", "lemma": "infero", "morphologia": "Verbo, 3ª pers., sg., imperf., subj. (+ -que)", "syntaxis": "Verbo coordinado con 'conderet'", "translatio": { "es": "e introdujera", "en": "and bring", "zh": "並帶來" } },
                        { "textus": "deos", "lemma": "deus", "morphologia": "Sustantivo, m., pl., acc.", "syntaxis": "Objeto directo de 'inferret'", "translatio": { "es": "los dioses", "en": "the gods", "zh": "諸神" } },
                        { "textus": "Latio;", "lemma": "Latium", "morphologia": "Sustantivo, n., sg., dat.", "syntaxis": "Dativo de dirección (poético)", "translatio": { "es": "al Lacio", "en": "to Latium", "zh": "進入拉提姆" } },
                        { "textus": "genus", "lemma": "genus", "morphologia": "Sustantivo, n., sg., nom.", "syntaxis": "Sujeto", "translatio": { "es": "el linaje", "en": "the race", "zh": "民族" } },
                        { "textus": "unde", "lemma": "unde", "morphologia": "Adverbio relativo", "syntaxis": "Adverbio relativo de origen", "translatio": { "es": "de donde", "en": "whence", "zh": "由此" } },
                        { "textus": "Latinum", "lemma": "Latinus", "morphologia": "Adjetivo, n., sg., nom.", "syntaxis": "Modificador de 'genus'", "translatio": { "es": "latino", "en": "Latin", "zh": "拉丁的" } }
                    ]
                }]
            },
            {
                "numerus": 7,
                "orationes": [{
                    "original_lat": "Albanique patres atque altae moenia Romae.",
                    "translationes": { "es": "y los padres albanos y las murallas de la alta Roma.", "en": "and the Alban fathers and the walls of high Rome.", "zh": "阿爾巴的父老以及高聳的羅馬城牆。" },
                    "verba": [
                        { "textus": "Albanique", "lemma": "Albanus", "morphologia": "Adjetivo, m., pl., nom. (+ -que)", "syntaxis": "Modificador de 'patres'", "translatio": { "es": "y los albanos", "en": "and the Alban", "zh": "與阿爾巴的" } },
                        { "textus": "patres", "lemma": "pater", "morphologia": "Sustantivo, m., pl., nom.", "syntaxis": "Sujeto, coordinado con 'genus'", "translatio": { "es": "padres", "en": "fathers", "zh": "父老" } },
                        { "textus": "atque", "lemma": "atque", "morphologia": "Conjunción", "syntaxis": "Conjunción copulativa", "translatio": { "es": "y", "en": "and", "zh": "以及" } },
                        { "textus": "altae", "lemma": "altus", "morphologia": "Adjetivo, f., sg., gen.", "syntaxis": "Modificador de 'Romae'", "translatio": { "es": "de la alta", "en": "of high", "zh": "高聳的" } },
                        { "textus": "moenia", "lemma": "moenia", "morphologia": "Sustantivo, n., pl., nom.", "syntaxis": "Sujeto, coordinado con 'patres'", "translatio": { "es": "las murallas", "en": "the walls", "zh": "城牆" } },
                        { "textus": "Romae.", "lemma": "Roma", "morphologia": "Sustantivo, f., sg., gen.", "syntaxis": "CN de 'moenia'", "translatio": { "es": "de Roma", "en": "of Rome", "zh": "羅馬的" } }
                    ]
                }]
            },
            {
                "numerus": 8,
                "orationes": [{
                    "original_lat": "Musa, mihi causas memora, quo numine laeso",
                    "translationes": { "es": "Musa, recuérdame las causas, por qué numen ofendido", "en": "Muse, recall to me the causes, by what divine will having been harmed,", "zh": "繆斯，請為我憶起那緣由，是因何神威受損，" },
                    "verba": [
                        { "textus": "Musa,", "lemma": "Musa", "morphologia": "Sustantivo, f., sg., voc.", "syntaxis": "Vocativo", "translatio": { "es": "Musa", "en": "Muse", "zh": "繆斯" } },
                        { "textus": "mihi", "lemma": "ego", "morphologia": "Pronombre, dat.", "syntaxis": "Dativo de interés", "translatio": { "es": "a mí", "en": "to me", "zh": "為我" } },
                        { "textus": "causas", "lemma": "causa", "morphologia": "Sustantivo, f., pl., acc.", "syntaxis": "Objeto directo de 'memora'", "translatio": { "es": "las causas", "en": "the causes", "zh": "那緣由" } },
                        { "textus": "memora,", "lemma": "memoro", "morphologia": "Verbo, 2ª pers., sg., pres., imp.", "syntaxis": "Verbo principal (imperativo)", "translatio": { "es": "recuerda", "en": "recall", "zh": "請憶起" } },
                        { "textus": "quo", "lemma": "qui", "morphologia": "Adjetivo interrogativo, n., sg., abl.", "syntaxis": "Modificador de 'numine'", "translatio": { "es": "por qué", "en": "by what", "zh": "因何" } },
                        { "textus": "numine", "lemma": "numen", "morphologia": "Sustantivo, n., sg., abl.", "syntaxis": "Ablativo Absoluto (parte 1)", "translatio": { "es": "numen", "en": "divine will", "zh": "神威" } },
                        { "textus": "laeso", "lemma": "laedo", "morphologia": "Participio, n., sg., abl., pf. pas.", "syntaxis": "Ablativo Absoluto (parte 2)", "translatio": { "es": "ofendido", "en": "having been harmed", "zh": "受損" } }
                    ]
                }]
            },
            {
                "numerus": 9,
                "orationes": [{
                    "original_lat": "quidve dolens regina deum tot uoluere casus",
                    "translationes": { "es": "o doliéndose de qué, la reina de los dioses (le impulsó) a un varón... a arrostrar tantos azares", "en": "or grieving what, the queen of the gods compelled a man... to undergo so many misfortunes", "zh": "或為何悲痛，眾神之后竟驅使一位...經歷如此多的變故" },
                    "verba": [
                        { "textus": "quidve", "lemma": "quis", "morphologia": "Pronombre, n., sg., acc. (+ -ve)", "syntaxis": "Acusativo de relación con 'dolens'", "translatio": { "es": "o de qué", "en": "or what", "zh": "或為何" } },
                        { "textus": "dolens", "lemma": "doleo", "morphologia": "Participio, f., sg., nom., pres.", "syntaxis": "Participio concertado con 'regina'", "translatio": { "es": "doliéndose", "en": "grieving", "zh": "悲痛" } },
                        { "textus": "regina", "lemma": "regina", "morphologia": "Sustantivo, f., sg., nom.", "syntaxis": "Sujeto de 'impulerit' (v. 11)", "translatio": { "es": "la reina", "en": "the queen", "zh": "之后" } },
                        { "textus": "deum", "lemma": "deus", "morphologia": "Sustantivo, m., pl., gen.", "syntaxis": "CN de 'regina' (síncopa de deorum)", "translatio": { "es": "de los dioses", "en": "of the gods", "zh": "眾神的" } },
                        { "textus": "tot", "lemma": "tot", "morphologia": "Adjetivo, indecl.", "syntaxis": "Modificador de 'casus'", "translatio": { "es": "tantos", "en": "so many", "zh": "如此多" } },
                        { "textus": "uoluere", "lemma": "uoluo", "morphologia": "Verbo, inf., pres.", "syntaxis": "Infinitivo (Ac. + Inf. con 'impulerit')", "translatio": { "es": "a arrostrar", "en": "to undergo", "zh": "經歷" } },
                        { "textus": "casus", "lemma": "casus", "morphologia": "Sustantivo, m., pl., acc.", "syntaxis": "Objeto directo de 'volvere'", "translatio": { "es": "azares", "en": "misfortunes", "zh": "變故" } }
                    ]
                }]
            },
            {
                "numerus": 10,
                "orationes": [{
                    "original_lat": "insignem pietate uirum, tot adire labores",
                    "translationes": { "es": "a un varón insigne por su piedad, a afrontar tantas fatigas", "en": "a man distinguished for his piety, to approach so many labors", "zh": "以其虔誠著稱的英雄，去面對如此多的苦難" },
                    "verba": [
                        { "textus": "insignem", "lemma": "insignis", "morphologia": "Adjetivo, m., sg., acc.", "syntaxis": "Modificador de 'virum'", "translatio": { "es": "insigne", "en": "distinguished", "zh": "著稱的" } },
                        { "textus": "pietate", "lemma": "pietas", "morphologia": "Sustantivo, f., sg., abl.", "syntaxis": "Ablativo de causa/respecto", "translatio": { "es": "por su piedad", "en": "for his piety", "zh": "以其虔誠" } },
                        { "textus": "uirum,", "lemma": "uir", "morphologia": "Sustantivo, m., sg., acc.", "syntaxis": "Sujeto (acusativo) de los infinitivos", "translatio": { "es": "a un varón", "en": "a man", "zh": "一位英雄" } },
                        { "textus": "tot", "lemma": "tot", "morphologia": "Adjetivo, indecl.", "syntaxis": "Modificador de 'labores'", "translatio": { "es": "tantas", "en": "so many", "zh": "如此多" } },
                        { "textus": "adire", "lemma": "adeo", "morphologia": "Verbo, inf., pres.", "syntaxis": "Infinitivo coordinado con 'volvere'", "translatio": { "es": "a afrontar", "en": "to approach", "zh": "去面對" } },
                        { "textus": "labores", "lemma": "labor", "morphologia": "Sustantivo, m., pl., acc.", "syntaxis": "Objeto directo de 'adire'", "translatio": { "es": "fatigas", "en": "labors", "zh": "苦難" } }
                    ]
                }]
            },
            {
                "numerus": 11,
                "orationes": [{
                    "original_lat": "impulerit. Tantaene animis caelestibus irae?",
                    "translationes": { "es": "impulsó. ¡Tan grandes iras (hay) en los ánimos celestiales?", "en": "she compelled. Are there such great angers in heavenly spirits?", "zh": "竟驅使如此。天神的胸中竟有如此大的憤怒嗎？" },
                    "verba": [
                        { "textus": "impulerit.", "lemma": "impello", "morphologia": "Verbo, 3ª pers., sg., perf., subj.", "syntaxis": "Verbo de la interrogativa indirecta", "translatio": { "es": "impulsó", "en": "she compelled", "zh": "竟驅使如此" } },
                        { "textus": "Tantaene", "lemma": "tantus", "morphologia": "Adjetivo, f., pl., nom. (+ -ne)", "syntaxis": "Atributo de 'irae'", "translatio": { "es": "¿Tan grandes?", "en": "Are there such great?", "zh": "竟有如此大的嗎" } },
                        { "textus": "animis", "lemma": "animus", "morphologia": "Sustantivo, m., pl., dat.", "syntaxis": "Dativo de posesión", "translatio": { "es": "en los ánimos", "en": "in the spirits", "zh": "在胸中" } },
                        { "textus": "caelestibus", "lemma": "caelestis", "morphologia": "Adjetivo, m., pl., dat.", "syntaxis": "Modificador de 'animis'", "translatio": { "es": "celestiales", "en": "heavenly", "zh": "天神的" } },
                        { "textus": "irae?", "lemma": "ira", "morphologia": "Sustantivo, f., pl., nom.", "syntaxis": "Sujeto (de 'sunt' omitido)", "translatio": { "es": "iras", "en": "angers", "zh": "憤怒" } }
                    ]
                }]
            }
        ]
    }
});
