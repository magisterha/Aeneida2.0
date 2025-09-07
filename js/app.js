window.registerChapterData = (index, data) => {
    if (AENEIS_DATA && AENEIS_DATA.chapters[index]) {
        AENEIS_DATA.chapters[index].corpus = data;
    }
};

document.addEventListener('DOMContentLoaded', () => {
    let currentLang = 'es';
    const loadedScripts = new Set();
    let activeChapterIndex = -1;

    const indexView = document.getElementById('index-view');
    const analysisView = document.getElementById('analysis-view');
    const chapterGrid = document.querySelector('.chapter-grid');

    const loadScript = (url) => {
        return new Promise((resolve, reject) => {
            if (loadedScripts.has(url)) {
                resolve();
                return;
            }
            const script = document.createElement('script');
            script.src = url;
            script.onload = () => {
                loadedScripts.add(url);
                resolve();
            };
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
        const langSwitcherIndex = document.getElementById('language-switcher-index');
        const mainTitleIndex = document.getElementById('main-title-index');
        const subtitleIndex = document.getElementById('subtitle-index');
        
        buildLangSwitcher(langSwitcherIndex);
        mainTitleIndex.textContent = AENEIS_DATA.mainTitle[currentLang];
        subtitleIndex.textContent = AENEIS_DATA.subtitle[currentLang];
        
        chapterGrid.innerHTML = '';
        AENEIS_DATA.chapters.forEach((chapter, index) => {
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
        const chapter = AENEIS_DATA.chapters[chapterIndex];
        const corpusData = chapter.corpus;

        const langSwitcherAnalysis = document.getElementById('language-switcher-analysis');
        const authorElem = document.getElementById('author');
        const mainTitleAnalysis = document.getElementById('main-title-analysis');
        const subtitleAnalysis = document.getElementById('subtitle-analysis');
        const contextTitleElem = document.getElementById('context-title');
        const contextContentElem = document.getElementById('context-content');
        const textTitleElem = document.getElementById('text-title');
        const analysisTitleElem = document.getElementById('analysis-title');
        
        buildLangSwitcher(langSwitcherAnalysis);
        authorElem.textContent = AENEIS_DATA.author;
        mainTitleAnalysis.textContent = AENEIS_DATA.mainTitle[currentLang];
        subtitleAnalysis.textContent = chapter.title[currentLang];
        
        if (corpusData && corpusData.context) {
            contextTitleElem.textContent = corpusData.context[currentLang]?.title || '';
            contextContentElem.textContent = corpusData.context[currentLang]?.content || '';
        }

        textTitleElem.textContent = currentLang === 'es' ? 'Texto y Análisis' : (currentLang === 'en' ? 'Text and Analysis' : '文本與分析');
        analysisTitleElem.textContent = currentLang === 'es' ? 'Análisis' : (currentLang === 'en' ? 'Analysis' : '分析');

        buildLatinText(corpusData);
        document.getElementById('marginalia-contentus').innerHTML = `<p class="text-[#6d4c35] font-['IM_Fell_English']">Haz clic en una palabra para ver su análisis.</p>`;
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
                sententia.original_lat.split(/(\s+)/).forEach(word => {
                    if (!word.trim()) { p.appendChild(document.createTextNode(word)); return; }
                    const cleanWord = word.replace(/[,.;:?]/g, '');
                    const verbumData = sententia.verba.find(v => v.textus.replace(/[,.;:?]/g, '') === cleanWord);
                    if (verbumData) {
                        const span = document.createElement('span');
                        span.textContent = word + ' ';
                        span.className = 'verbum';
                        span.dataset.versusIndex = versusIndex;
                        span.dataset.sententiaIndex = sententiaIndex;
                        span.dataset.verbumTextus = verbumData.textus;
                        p.appendChild(span);
                    } else {
                        p.appendChild(document.createTextNode(word + ' '));
                    }
                });
            });
            paragrafusContentusElem.appendChild(p);
        });
    };

    const showAnalysis = (clickedSpan) => {
        const { versusIndex, sententiaIndex, verbumTextus } = clickedSpan.dataset;
        const chapterData = AENEIS_DATA.chapters[activeChapterIndex].corpus;
        const sententiaData = chapterData.textus.capitula[versusIndex].orationes[sententiaIndex];
        const verbumData = sententiaData.verba.find(v => v.textus.replace(/[,.;:?]/g, '') === verbumTextus.replace(/[,.;:?]/g, ''));
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
                    <summary class="font-semibold">Traducción del Verso</summary>
                    <div class="details-content mt-2 text-sm"><p>${oratioTraducida}</p></div>
                </details>
            </div>`;
    };

    const handleLanguageChange = (newLang) => {
        if (newLang !== currentLang) {
            currentLang = newLang;
            if (!indexView.classList.contains('hidden')) {
                renderIndexView();
            } else {
                if (activeChapterIndex !== -1) {
                    renderAnalysisView(activeChapterIndex);
                    const activeWord = document.querySelector('.verbum.activus');
                    if (activeWord) showAnalysis(activeWord);
                }
            }
        }
    };
    
    document.querySelector('.page-container').addEventListener('click', e => {
        const langBtn = e.target.closest('.lang-btn');
        if (langBtn) {
            handleLanguageChange(langBtn.dataset.lang);
        }

        const chapterLink = e.target.closest('.chapter-grid a');
        if (chapterLink && chapterLink.dataset.index) {
            e.preventDefault();
            const index = parseInt(chapterLink.dataset.index, 10);
            const chapter = AENEIS_DATA.chapters[index];

            if (chapter.corpus) {
                renderAnalysisView(index);
                indexView.classList.add('hidden');
                analysisView.classList.remove('hidden');
            } else if (chapter.corpusFile) {
                chapterLink.innerHTML += ' <span class="loading">(Cargando...)</span>';
                loadScript(chapter.corpusFile)
                    .then(() => {
                        renderAnalysisView(index);
                        indexView.classList.add('hidden');
                        analysisView.classList.remove('hidden');
                    })
                    .catch(error => {
                        console.error(error);
                        const loadingSpan = chapterLink.querySelector('.loading');
                        if(loadingSpan) loadingSpan.textContent = ' (Error de carga)';
                    });
            }
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
            document.querySelectorAll('.verbum').forEach(el => el.classList.remove('activus'));
            verbum.classList.add('activus');
            showAnalysis(verbum);
        }
    });

    renderIndexView();
});
