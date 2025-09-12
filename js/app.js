
window.registerChapterData = (id, data) => {
    if (!AENEIS_DATA) return;
    for (const bookKey in AENEIS_DATA.books) {
        const chapter = AENEIS_DATA.books[bookKey].chapters.find(ch => ch.corpusFile && ch.corpusFile.includes(id));
        if (chapter) {
            chapter.corpus = data;
            return;
        }
    }
    console.error(`No se pudo encontrar el capítulo para el ID: ${id}`);
};

document.addEventListener('DOMContentLoaded', () => {
    let currentLang = 'es';
    let currentBookKey = 'book1';
    const loadedScripts = new Set();
    let activeChapterIndex = -1;

    const indexView = document.getElementById('index-view');
    const analysisView = document.getElementById('analysis-view');
    const chapterGrid = document.querySelector('.chapter-grid');

    const loadScript = (url) => {
        return new Promise((resolve, reject) => {
            if (loadedScripts.has(url)) { resolve(); return; }
            const script = document.createElement('script');
            script.src = url;
            script.onload = () => { loadedScripts.add(url); resolve(); };
            script.onerror = () => reject(new Error(`Error al cargar el script ${url}`));
            document.head.appendChild(script);
        });
    };

    const buildLangSwitcher = (container) => {
        container.innerHTML = `
            <button data-lang="es" class="lang-btn ${currentLang === 'es' ? 'active-lang' : ''}">Español</button>
            <button data-lang="en" class="lang-btn ${currentLang === 'en' ? 'active-lang' : ''}">English</button>
            <button data-lang="zh" class="lang-btn ${currentLang === 'zh' ? 'active-lang' : ''}">中文 (繁體)</button>
        `;
    };

    const renderIndexView = () => {
        const mainTitleIndex = document.getElementById('main-title-index');
        const subtitleIndex = document.getElementById('subtitle-index');
        const bookSelector = document.getElementById('book-selector');

        mainTitleIndex.textContent = AENEIS_DATA.mainTitle[currentLang];

        bookSelector.innerHTML = '';
        Object.keys(AENEIS_DATA.books).forEach(bookKey => {
            const book = AENEIS_DATA.books[bookKey];
            const button = document.createElement('button');
            button.className = `book-btn ${bookKey === currentBookKey ? 'active-book' : ''}`;
            button.dataset.bookKey = bookKey;
            button.textContent = book.title[currentLang];
            bookSelector.appendChild(button);
        });

        const currentBook = AENEIS_DATA.books[currentBookKey];
        subtitleIndex.textContent = currentBook.title[currentLang];
        chapterGrid.innerHTML = '';

        // --- SOLUCIÓN DEFINITIVA AQUÍ ---
        // 1. Creamos una función para extraer el número inicial del verso desde el nombre del archivo.
        const getStartVerse = (corpusFile) => {
            const match = corpusFile.match(/-(\d+)-/);
            return match ? parseInt(match[1], 10) : 0;
        };

        // 2. Ordenamos la lista de capítulos ANTES de mostrarla.
        currentBook.chapters.sort((a, b) => getStartVerse(a.corpusFile) - getStartVerse(b.corpusFile));

        // 3. Ahora el bucle forEach procesará la lista ya ordenada.
        currentBook.chapters.forEach((chapter, index) => {
            const [title, description] = chapter.title[currentLang].split(': ');
            const listItem = document.createElement('li');
            const link = document.createElement('a');
            link.dataset.index = index;
            link.innerHTML = `${title}<span class="chapter-title">${description || ''}</span>`;
            if (!chapter.corpusFile) {
                link.style.opacity = '0.5';
                link.style.cursor = 'not-allowed';
                link.innerHTML += `<span class="chapter-title" style="color:#9a3412;"> (No disponible)</span>`;
            }
            listItem.appendChild(link);
            chapterGrid.appendChild(listItem);
        });
    };

    const renderAnalysisView = (chapterIndex) => {
        activeChapterIndex = chapterIndex;
        const currentBook = AENEIS_DATA.books[currentBookKey];
        // Asegurarse de que la lista está ordenada también antes de acceder por índice
        const getStartVerse = (corpusFile) => {
            const match = corpusFile.match(/-(\d+)-/);
            return match ? parseInt(match[1], 10) : 0;
        };
        currentBook.chapters.sort((a, b) => getStartVerse(a.corpusFile) - getStartVerse(b.corpusFile));
        
        const chapter = currentBook.chapters[chapterIndex];
        const corpusData = chapter.corpus;

        const authorElem = document.getElementById('author');
        const mainTitleAnalysis = document.getElementById('main-title-analysis');
        const subtitleAnalysis = document.getElementById('subtitle-analysis');
        const contextTitleElem = document.getElementById('context-title');
        const contextContentElem = document.getElementById('context-content');
        
        buildLangSwitcher(document.getElementById('language-switcher-analysis'));
        authorElem.textContent = AENEIS_DATA.author;
        mainTitleAnalysis.textContent = AENEIS_DATA.mainTitle[currentLang] + " - " + currentBook.title[currentLang];
        subtitleAnalysis.textContent = chapter.title[currentLang];
        
        contextTitleElem.textContent = corpusData?.context?.[currentLang]?.title || '';
        contextContentElem.textContent = corpusData?.context?.[currentLang]?.content || '';

        document.getElementById('text-title').textContent = currentLang === 'es' ? 'Texto y Análisis' : (currentLang === 'en' ? 'Text and Analysis' : '文本與分析');
        document.getElementById('analysis-title').textContent = currentLang === 'es' ? 'Análisis' : (currentLang === 'en' ? 'Analysis' : '分析');

        buildLatinText(corpusData);
        document.getElementById('marginalia-contentus').innerHTML = `<p class="text-[#6d4c35] font-['IM_Fell_English']">${currentLang === 'es' ? 'Haz clic en una palabra para ver su análisis.' : 'Click on a word to see its analysis.'}</p>`;

        const prevBtn = document.getElementById('btn-prev-chapter');
        const nextBtn = document.getElementById('btn-next-chapter');
        
        if (chapterIndex > 0) {
            prevBtn.style.visibility = 'visible';
            prevBtn.dataset.targetIndex = chapterIndex - 1;
        } else {
            prevBtn.style.visibility = 'hidden';
        }
        if (chapterIndex < currentBook.chapters.length - 1) {
            nextBtn.style.visibility = 'visible';
            nextBtn.dataset.targetIndex = chapterIndex + 1;
        } else {
            nextBtn.style.visibility = 'hidden';
        }
    };

    const buildLatinText = (corpus) => {
        const paragrafusContentusElem = document.getElementById('paragrafus-contentus');
        paragrafusContentusElem.innerHTML = '';
        if (!corpus || !corpus.textus) return;
        corpus.textus.capitula.forEach((versus, versusIndex) => {
            const p = document.createElement('p');
            p.className = "mb-6 textum-classicum";
            p.innerHTML = `<span class="verse-number mr-2">${versus.numerus}. </span>`;
            versus.orationes.forEach((sententia, sententiaIndex) => {
                const wordsAndSpaces = sententia.original_lat.split(/(\s+)/);
                wordsAndSpaces.forEach((word, index) => {
                    if (!word.trim()) { p.appendChild(document.createTextNode(word)); return; }
                    const cleanWord = word.replace(/[.,;:?!—]/g, '');
                    const verbumData = sententia.verba.find(v => v.textus.replace(/[.,;:?!—]/g, '') === cleanWord);
                    const span = document.createElement('span');
                    span.textContent = word;
                    if (verbumData) {
                        span.className = 'verbum';
                        span.dataset.versusIndex = versusIndex;
                        span.dataset.sententiaIndex = sententiaIndex;
                        span.dataset.verbumTextus = verbumData.textus;
                    }
                    p.appendChild(span);
                    if (index < wordsAndSpaces.length - 1 && !/^\s+$/.test(wordsAndSpaces[index + 1])) {
                        p.appendChild(document.createTextNode(' '));
                    }
                });
            });
            paragrafusContentusElem.appendChild(p);
        });
    };

    const showAnalysis = (clickedSpan) => {
        const { versusIndex, sententiaIndex, verbumTextus } = clickedSpan.dataset;
        const chapterData = AENEIS_DATA.books[currentBookKey].chapters[activeChapterIndex].corpus;
        const sententiaData = chapterData.textus.capitula[versusIndex].orationes[sententiaIndex];
        const verbumData = sententiaData.verba.find(v => v.textus.replace(/[.,;:?!—]/g, '') === verbumTextus.replace(/[.,;:?!—]/g, ''));
        if (!verbumData) return;
        const palabraTraducida = verbumData.translatio ? verbumData.translatio[currentLang] : 'N/A';
        const oratioTraducida = sententiaData.translationes[currentLang] || 'N/A';
        document.getElementById('marginalia-contentus').innerHTML = `
            <div class="space-y-4">
                <div>
                    <p class="text-2xl textum-classicum font-bold">${verbumData.textus}</p>
                    <p class="text-lg font-semibold mb-2">${palabraTraducida}</p>
                    <p class="text-sm"><b>Lema:</b> <i>${verbumData.lemma}</i></p>
                    <p class="text-sm"><b>Morfología:</b> ${verbumData.morphologia}</p>
                    <p class="text-sm"><b>Sintaxis:</b> ${verbumData.syntaxis}</p>
                </div>
                <hr class="divider" style="margin: 1rem 0;">
                <details open>
                    <summary class="font-semibold">${currentLang === 'es' ? 'Traducción del Verso' : 'Verse Translation'}</summary>
                    <div class="details-content mt-2 text-sm"><p>${oratioTraducida}</p></div>
                </details>
            </div>`;
    };
    
    const handleLanguageChange = (newLang) => {
        if (newLang !== currentLang) {
            currentLang = newLang;
            if (!analysisView.classList.contains('hidden')) {
                renderAnalysisView(activeChapterIndex);
                const activeWord = document.querySelector('.verbum.activus');
                if (activeWord) {
                    showAnalysis(activeWord);
                }
            } else {
                renderIndexView();
            }
        }
    };
    
    const navigateToChapter = (index) => {
        const chapter = AENEIS_DATA.books[currentBookKey].chapters[index];
        if (!chapter || !chapter.corpusFile) return;
        const displayChapter = () => {
            renderAnalysisView(index);
            indexView.classList.add('hidden');
            analysisView.classList.remove('hidden');
            window.scrollTo({ top: 0, behavior: 'auto' });
        };
        if (chapter.corpus) {
            displayChapter();
        } else {
            loadScript(chapter.corpusFile).then(displayChapter).catch(console.error);
        }
    };

    document.querySelector('.page-container').addEventListener('click', e => {
        const bookBtn = e.target.closest('.book-btn');
        if (bookBtn && bookBtn.dataset.bookKey !== currentBookKey) {
            currentBookKey = bookBtn.dataset.bookKey;
            renderIndexView();
        }
        
        const langBtn = e.target.closest('.lang-btn');
        if (langBtn) handleLanguageChange(langBtn.dataset.lang);

        const chapterLink = e.target.closest('.chapter-grid a');
        if (chapterLink?.dataset.index) {
            e.preventDefault();
            navigateToChapter(parseInt(chapterLink.dataset.index, 10));
        }

        const navLink = e.target.closest('#btn-prev-chapter, #btn-next-chapter');
        if (navLink?.dataset.targetIndex) {
            e.preventDefault();
            navigateToChapter(parseInt(navLink.dataset.targetIndex, 10));
        }

        const backButton = e.target.closest('#btn-back-to-index');
        if (backButton) {
            analysisView.classList.add('hidden');
            indexView.classList.remove('hidden');
            activeChapterIndex = -1;
            renderIndexView();
        }

        const verbum = e.target.closest('.verbum');
        if (verbum) {
            document.querySelectorAll('.verbum.activus').forEach(el => el.classList.remove('activus'));
            verbum.classList.add('activus');
            showAnalysis(verbum);
        }
    });

    renderIndexView();
});
