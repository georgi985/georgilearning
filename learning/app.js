(function(){
const $page = document.getElementById('page');
const $side = document.getElementById('side');
const store = {
  get(k, d){ try{ const v = localStorage.getItem('campus:' + k); return v ? JSON.parse(v) : d; }catch(e){ return d; } },
  set(k, v){ try{ localStorage.setItem('campus:' + k, JSON.stringify(v)); }catch(e){} }
};
const esc = s => String(s).replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const LET = i => 'ABCDEFGH'[i];
let timer = null;

/* ---------- Langue ---------- */
let LANG = store.get('lang', null) || ((navigator.language || 'fr').toLowerCase().startsWith('fr') ? 'fr' : 'en');
const UI = {
  fr:{hub:"← Accueil du site",brand:"Georgi Learning",brandSub:"Cours, certifications et secteurs d'activité",all:"Tous les cours",overview:"Présentation",format:"Format de l'examen",course:"Cours",resources:"Ressources",practice:"Entraînement",quiz:"Questions corrigées",exam:"Examen blanc chronométré",read:"lu",
    homeEyebrow:"Campus",homeTitle:"Apprendre l'audit, la cybersécurité et les secteurs d'activité",homeLead:"Des cours pas à pas, des questions corrigées et un examen blanc pour chaque sujet, regroupés par rubrique. Votre progression reste enregistrée dans ce navigateur.",available:"Disponible",soon:"En préparation",formatLbl:"Format",best:"meilleur examen blanc",howTitle:"Comment travailler",howText:"Lisez un module, faites ses questions juste après, puis passez à la suite. Gardez les examens blancs pour la fin : ils servent à mesurer votre niveau dans les conditions réelles.",
    modulesRead:"modules lus",questions:"questions corrigées",bestExam:"meilleur examen blanc",passMark:"Seuil de réussite",program:"Programme",thModule:"Module",thDay:"Partie",thQ:"Questions",start1:"Commencer le module 1",takeExam:"Passer un examen blanc",
    check:"Vérifiez vos acquis",doQ:n=>"Faire les "+n+" questions de ce module",qcmTitle:"Espace QCM",qcmLead:"Toutes les questions corrigées du campus, rangées par certification puis par module. Chaque module propose plusieurs séries différentes : faites-les l'une après l'autre, chaque réponse (bonne ou mauvaise) est expliquée.",qcmOpen:"Voir les séries →",qcmSeries:"séries",qcmAllQ:"Toutes les questions de ce cours",qcmBack:"← Espace QCM",series:"Série",allSeries:"Toutes les séries",seriesLead:"Chaque série est un questionnaire différent sur le même module : faites-les l'une après l'autre pour consolider vos acquis.",seriesBtn:(s,n)=>"Série "+s+" · "+n+" questions",toExam:"Passer à l'examen blanc →",
    quizLead:"Choisissez une réponse : la correction et l'explication s'affichent tout de suite.",filterAll:"Tous",right:"justes",left:"restantes",shuffle:"Mélanger",reset:"Recommencer",showAll:"Toutes les questions",reviewWrong:n=>"Revoir mes erreurs ("+n+")",noWrong:"Aucune erreur enregistrée pour ce filtre. Bravo.",noQ:"Aucune question pour ce filtre.",question:"Question",good:"Bonne réponse",expected:"Réponse attendue",
    examLead:(n,m,p)=>n+" questions tirées au hasard, "+m+" minutes, sans correction pendant l'épreuve. Seuil de réussite : "+p+" %.",examText:"Mettez-vous dans les conditions de l'examen. À la fin, vous verrez votre score par module et la correction de chaque question.",examStart:"Commencer l'examen",examPractice:"Plutôt s'entraîner avec correction",examRunning:"Examen blanc en cours",answered:"répondues",finish:"Terminer et corriger",
    result:"Résultat de l'examen blanc",passed:"Réussi",notYet:"Pas encore",goodOf:(g,t)=>g+" bonnes réponses sur "+t,timeUsed:"Temps utilisé",threshold:"Seuil",thScore:"Score",thReview:"À revoir",reread:"Relire le module",again:"Nouvel examen blanc",reviewMine:"Revoir mes erreurs",detail:"Correction détaillée",noAnswer:"Sans réponse",yours:"Votre réponse",exp:"attendue",formatTitle:"Format de l'examen et stratégie",whyTitle:"Pourquoi les autres réponses sont fausses",
    notTranslated:"Ce contenu n'existe pas encore dans cette langue : il est affiché en français.",menu:"Plan du cours",langLabel:"Langue"},
  en:{hub:"← Site home",brand:"Georgi Learning",brandSub:"Courses, certifications and industries",all:"All courses",overview:"Overview",format:"Exam format",course:"Course",resources:"Resources",practice:"Practice",quiz:"Practice questions",exam:"Timed mock exam",read:"read",
    homeEyebrow:"Campus",homeTitle:"Learn audit, cybersecurity and industries",homeLead:"Step-by-step courses, practice questions with explanations and a mock exam for each topic, grouped by section. Your progress is saved in this browser.",available:"Available",soon:"Coming soon",formatLbl:"Format",best:"best mock exam",howTitle:"How to study",howText:"Read a module, do its questions right after, then move on. Keep the mock exams for the end: they measure your level in real exam conditions.",
    modulesRead:"modules read",questions:"practice questions",bestExam:"best mock exam",passMark:"Pass mark",program:"Syllabus",thModule:"Module",thDay:"Part",thQ:"Questions",start1:"Start module 1",takeExam:"Take a mock exam",
    check:"Check your knowledge",doQ:n=>"Answer the "+n+" questions for this module",qcmTitle:"Quiz area",qcmLead:"All the campus practice questions, sorted by certification then by module. Each module offers several different sets: take them one after another; every answer, right or wrong, is explained.",qcmOpen:"See the sets →",qcmSeries:"sets",qcmAllQ:"All questions for this course",qcmBack:"← Quiz area",series:"Set",allSeries:"All sets",seriesLead:"Each set is a different quiz on the same module: take them one after another to consolidate what you have learned.",seriesBtn:(s,n)=>"Set "+s+" · "+n+" questions",toExam:"Go to the mock exam →",
    quizLead:"Pick an answer: the correction and explanation appear immediately.",filterAll:"All",right:"correct",left:"remaining",shuffle:"Shuffle",reset:"Start over",showAll:"All questions",reviewWrong:n=>"Review my mistakes ("+n+")",noWrong:"No mistakes recorded for this filter. Well done.",noQ:"No questions for this filter.",question:"Question",good:"Correct",expected:"Expected answer",
    examLead:(n,m,p)=>n+" random questions, "+m+" minutes, no feedback during the exam. Pass mark: "+p+"%.",examText:"Put yourself in real exam conditions. At the end you will see your score per module and the explanation for every question.",examStart:"Start the exam",examPractice:"Practise with feedback instead",examRunning:"Mock exam in progress",answered:"answered",finish:"Finish and mark",
    result:"Mock exam result",passed:"Passed",notYet:"Not yet",goodOf:(g,t)=>g+" correct answers out of "+t,timeUsed:"Time used",threshold:"Pass mark",thScore:"Score",thReview:"Review",reread:"Re-read the module",again:"New mock exam",reviewMine:"Review my mistakes",detail:"Detailed corrections",noAnswer:"No answer",yours:"Your answer",exp:"expected",formatTitle:"Exam format and strategy",whyTitle:"Why the other answers are wrong",
    notTranslated:"This content is not yet available in English: it is shown in French for now.",menu:"Course menu",langLabel:"Language"}
};
const t = k => UI[LANG][k];

/* Vue d'une certification dans la langue choisie (repli sur le français). */
function V(c){
  const en = LANG === 'en' && c.en ? c.en : null;
  return {
    id:c.id, org:(en && en.org) || c.org, passMark:c.passMark, examMinutes:c.examMinutes, examQuestions:c.examQuestions,
    title:(en && en.title) || c.title, intro:(en && en.intro) || c.intro, exam:(en && en.exam) || c.exam,
    translated: LANG === 'fr' || !!en,
    modules:c.modules.map((m, i) => { const e = en && en.modules && en.modules[i]; return {id:m.id, day:(e && e.day) || m.day, title:(e && e.title) || m.title, html:((e && e.html) || m.html) + ((LANG === 'en' && m.pasEn) || m.pas || ''), tr:!!e || LANG === 'fr'}; }),
    pages:(c.pages || []).map((p, i) => { const e = en && en.pages && en.pages[i]; return {id:p.id, title:(e && e.title) || (LANG === 'en' && p.titleEn) || p.title, html:(e && e.html) || (LANG === 'en' && p.htmlEn) || p.html}; }),
    questions:c.questions
  };
}
/* Mélange stable de l'ordre des réponses pour la session. */
CERTS.forEach(c => c.questions.forEach(q => { q.p = q.o.map((_, i) => i).sort(() => Math.random() - .5); }));
function Q(c, q, idx){
  const e = LANG === 'en' && c.enQuestions && c.enQuestions[idx];
  const src = e || q;
  const w = (e && e.w) || q.w;
  return { m:q.m, q:src.q, e:src.e, o:q.p.map(i => src.o[i]), a:q.p.indexOf(q.a), w: w ? q.p.map(i => w[i] || '') : null };
}
/* Explication de chaque mauvaise réponse (champ w, aligné sur les options). */
function why(q, chosen){
  if(!q.w || !q.w.some(x => x)) return '';
  let h = '<div class="why"><p class="whyT">' + t('whyTitle') + '</p><ul>';
  q.o.forEach((o, j) => { if(j === q.a || !q.w[j]) return; h += '<li' + (j === chosen ? ' class="mine"' : '') + '><b>' + LET(j) + '. ' + esc(o) + '</b> : ' + esc(q.w[j]) + '</li>'; });
  return h + '</ul></div>';
}

function certById(id){ return CERTS.find(c => c.id === id); }
function parseHash(){
  const h = decodeURIComponent(location.hash.replace(/^#/, ''));
  if(!h || h === 'accueil') return {view:'home'};
  if(h === 'sigles' || h.startsWith('sigles-')) return {view:'sigles', q:h.slice(7)};
  if(h === 'qcm') return {view:'qcm'};
  if(h.startsWith('qcm-')){ const qc = certById(h.slice(4)); return qc ? {view:'qcmCert', qc} : {view:'qcm'}; }
  const cert = CERTS.slice().sort((a,b) => b.id.length - a.id.length).find(c => h === c.id || h.startsWith(c.id + '-'));
  if(!cert) return {view:'home'};
  const rest = h === cert.id ? '' : h.slice(cert.id.length + 1);
  if(!rest) return {view:'cert', cert};
  if(rest === 'format') return {view:'format', cert};
  if(rest === 'examen-blanc') return {view:'exam', cert};
  if(rest === 'quiz') return {view:'quiz', cert, filter:'all'};
  if(rest.startsWith('quiz-')){ const f = rest.slice(5).split('-serie'); return {view:'quiz', cert, filter:f[0], series:f[1] ? +f[1] : null}; }
  const mi = cert.modules.findIndex(m => m.id === rest);
  if(mi >= 0) return {view:'module', cert, mi};
  const pi = (cert.pages || []).findIndex(p => p.id === rest);
  if(pi >= 0) return {view:'page', cert, pi};
  return {view:'cert', cert};
}
const notice = () => '<div class="box tip"><p>' + t('notTranslated') + '</p></div>';

function renderSide(r){
  let h = '<p style="margin:0 0 14px;font-size:.85rem"><a href="../" style="padding:0;display:inline">' + t('hub') + '</a></p><p class="brand">' + t('brand') + '</p><p class="brand-sub">' + t('brandSub') + '</p>';
  h += '<div class="filters" role="group" aria-label="' + t('langLabel') + '"><button type="button" class="chip" data-lang="fr" aria-pressed="' + (LANG === 'fr') + '">Français</button><button type="button" class="chip" data-lang="en" aria-pressed="' + (LANG === 'en') + '">English</button></div>';
  h += '<a href="#accueil"' + (r.view === 'home' ? ' class="active"' : '') + '><span class="n">⌂</span>' + t('all') + '</a>';
  h += '<a href="#sigles"' + (r.view === 'sigles' ? ' class="active"' : '') + '><span class="n">Aa</span>' + SL().title + '</a>';
  h += '<a href="#qcm"' + (r.view === 'qcm' || r.view === 'qcmCert' ? ' class="active"' : '') + '><span class="n">?</span>' + t('qcmTitle') + '</a>';
  if(r.cert){
    const c = V(r.cert), seen = store.get(c.id + ':seen', {});
    const a = (hash, label, n, active, done) => '<a href="#' + hash + '"' + (active ? ' class="active" aria-current="page"' : '') + '><span class="n">' + n + '</span><span>' + label + '</span>' + (done ? '<span class="done" aria-label="' + t('read') + '">✓</span>' : '') + '</a>';
    h += '<p class="navgroup">' + esc(c.title) + '</p>';
    h += a(c.id, t('overview'), '·', r.view === 'cert');
    if(c.exam) h += a(c.id + '-format', t('format'), '·', r.view === 'format');
    h += '<p class="navgroup">' + t('course') + '</p>';
    c.modules.forEach((m, i) => { h += a(c.id + '-' + m.id, esc(m.title), i + 1, r.mi === i, seen[m.id]); });
    if(c.pages.length){ h += '<p class="navgroup">' + t('resources') + '</p>'; c.pages.forEach((p, i) => { h += a(c.id + '-' + p.id, esc(p.title), '·', r.pi === i); }); }
    h += '<p class="navgroup">' + t('practice') + '</p>';
    h += a(c.id + '-quiz', t('quiz'), '?', r.view === 'quiz');
    h += a(c.id + '-examen-blanc', t('exam'), '⏱', r.view === 'exam');
  }
  $side.innerHTML = h;
}
$side.addEventListener('click', ev => {
  const b = ev.target.closest('[data-lang]'); if(!b) return;
  LANG = b.dataset.lang; store.set('lang', LANG); route();
});

function home(){
  let h = '<p class="eyebrow">' + t('homeEyebrow') + '</p><h1>' + t('homeTitle') + '</h1><p class="lead">' + t('homeLead') + '</p>';
  const cats = CATEGORIES.length ? CATEGORIES : [{id:null, title:''}];
  cats.forEach(cat => {
  const items = CATALOG.filter(k => !cat.id || k.cat === cat.id);
  if(!items.length) return;
  const ce = (LANG === 'en' && cat.en) || {};
  if(cat.id) h += '<h2 id="rubrique-' + cat.id + '">' + esc(ce.title || cat.title) + '</h2><p>' + esc(ce.lead || cat.lead) + '</p>';
  h += '<div class="grid">';
  items.forEach(k => {
    const raw = certById(k.id), ke = (LANG === 'en' && k.en) || {};
    const title = ke.title || k.title, domain = ke.domain || k.domain, kind = ke.kind || k.kind, org = ke.org || k.org;
    if(raw){
      const best = store.get(raw.id + ':best', null);
      h += '<a class="card" href="#' + raw.id + '"><span class="pill ok" style="align-self:flex-start">' + t('available') + '</span><span class="t">' + esc(title) + '</span><span class="d">' + esc(org) + ' · ' + esc(domain) + '</span><span class="d">' + raw.modules.length + ' modules · ' + raw.questions.length + ' questions' + (best !== null ? ' · ' + t('best') + ' ' + best + ' %' : '') + '</span></a>';
    } else {
      h += '<div class="card" aria-disabled="true"><span class="pill" style="align-self:flex-start;background:var(--line);color:var(--muted)">' + t('soon') + '</span><span class="t">' + esc(title) + '</span><span class="d">' + esc(org) + ' · ' + esc(domain) + '</span><span class="d">' + t('formatLbl') + ' : ' + esc(kind) + '</span></div>';
    }
  });
  h += '</div>';
  });
  h += '<h2>' + t('qcmTitle') + '</h2><p>' + t('qcmLead') + '</p><p><a class="btn" href="#qcm">' + t('qcmTitle') + ' →</a></p>';
  h += '<h2>' + SL().title + '</h2><p>' + SL().lead + '</p><p><a class="btn" href="#sigles">' + SL().title + ' (' + new Set(Object.values(SIGLES)).size + ') →</a></p>';
  return h + '<div class="box"><h4>' + t('howTitle') + '</h4><p>' + t('howText') + '</p></div>';
}

function certPage(raw){
  const c = V(raw), seen = store.get(c.id + ':seen', {}), best = store.get(c.id + ':best', null);
  const nSeen = c.modules.filter(m => seen[m.id]).length;
  let h = (c.translated ? '' : notice()) + '<p class="eyebrow">' + esc(c.org) + '</p><h1>' + esc(c.title) + '</h1><p class="lead">' + esc(c.intro) + '</p>';
  h += '<div class="grid"><div class="card"><span class="stat">' + nSeen + '/' + c.modules.length + '</span><span class="t">' + t('modulesRead') + '</span></div>';
  h += '<div class="card"><span class="stat">' + c.questions.length + '</span><span class="t">' + t('questions') + '</span></div>';
  h += '<div class="card"><span class="stat">' + (best === null ? '–' : best + ' %') + '</span><span class="t">' + t('bestExam') + '</span><span class="d">' + t('passMark') + ' : ' + c.passMark + ' %</span></div></div>';
  h += '<h2>' + t('program') + '</h2><div class="tablewrap"><table><thead><tr><th>#</th><th>' + t('thModule') + '</th><th>' + t('thDay') + '</th><th>' + t('thQ') + '</th></tr></thead><tbody>';
  c.modules.forEach((m, i) => {
    const nq = c.questions.filter(q => q.m === m.id).length;
    h += '<tr><td class="num">' + (i + 1) + '</td><td><a href="#' + c.id + '-' + m.id + '">' + esc(m.title) + '</a>' + (seen[m.id] ? ' <span class="pill ok">' + t('read') + '</span>' : '') + '</td><td>' + esc(m.day || '') + '</td><td class="num"><a href="#' + c.id + '-quiz-' + m.id + '">' + nq + '</a></td></tr>';
  });
  h += '</tbody></table></div><div class="pager"><a class="btn" href="#' + c.id + '-' + c.modules[0].id + '">' + t('start1') + '</a><a class="btn ghost" href="#' + c.id + '-examen-blanc">' + t('takeExam') + '</a></div>';
  return h;
}

function modulePage(raw, i){
  const c = V(raw), m = c.modules[i];
  const seen = store.get(c.id + ':seen', {}); seen[m.id] = 1; store.set(c.id + ':seen', seen);
  const prev = c.modules[i - 1], next = c.modules[i + 1];
  const nq = c.questions.filter(q => q.m === m.id).length;
  let h = (m.tr ? '' : notice()) + '<p class="eyebrow">Module ' + (i + 1) + (m.day ? ' · ' + esc(m.day) : '') + '</p><h1>' + esc(m.title) + '</h1>' + m.html;
  const ser = seriesOf(c.questions, m.id);
  if(ser.length > 1){ const sc = store.get(c.id + ':series', {});
    h += '<div class="box key"><h4>' + t('check') + '</h4><p>' + t('seriesLead') + '</p><p class="series-btns">' + ser.map(s => { const n = c.questions.filter(q => q.m === m.id && (q.s || 1) === s).length, r = sc[m.id + '-' + s]; return '<a class="btn' + (s > 1 ? ' ghost' : '') + '" href="#' + c.id + '-quiz-' + m.id + '-serie' + s + '">' + t('seriesBtn')(s, n) + (r ? ' · ✓ ' + r : '') + '</a>'; }).join(' ') + '</p></div>'; }
  else if(nq) h += '<div class="box key"><h4>' + t('check') + '</h4><p><a class="btn" href="#' + c.id + '-quiz-' + m.id + '">' + t('doQ')(nq) + '</a></p></div>';
  h += '<div class="pager">' + (prev ? '<a class="btn ghost" href="#' + c.id + '-' + prev.id + '">← ' + esc(prev.title) + '</a>' : '<span></span>') + (next ? '<a class="btn" href="#' + c.id + '-' + next.id + '">' + esc(next.title) + ' →</a>' : '<a class="btn" href="#' + c.id + '-examen-blanc">' + t('toExam') + '</a>') + '</div>';
  return h;
}

/* ---------- Espace QCM : certifications → modules → séries ---------- */
function qcmHome(){
  let h = '<p class="eyebrow">' + t('practice') + '</p><h1>' + t('qcmTitle') + '</h1><p class="lead">' + t('qcmLead') + '</p>';
  CATEGORIES.forEach(cat => {
    const items = CATALOG.filter(k => k.cat === cat.id && certById(k.id)); if(!items.length) return;
    const ce = (LANG === 'en' && cat.en) || {};
    h += '<h2>' + esc(ce.title || cat.title) + '</h2><div class="grid">';
    items.forEach(k => { const raw = certById(k.id), c = V(raw), ns = seriesOf(raw.questions, 'all').length, sc = store.get(raw.id + ':series', {}), done = Object.keys(sc).length;
      let slots = 0; raw.modules.forEach(m => { slots += seriesOf(raw.questions, m.id).length; });
      h += '<a class="card" href="#qcm-' + raw.id + '"><span class="t">' + esc(c.title) + '</span><span class="d">' + raw.modules.length + ' modules · ' + (ns > 1 ? ns + ' ' + t('qcmSeries') + ' · ' : '') + raw.questions.length + ' questions</span>' + (ns > 1 && done ? '<span class="d">✓ ' + done + ' / ' + slots + '</span>' : '') + '<span class="d">' + t('qcmOpen') + '</span></a>'; });
    h += '</div>';
  });
  return h;
}
function qcmCert(raw){
  const c = V(raw), sc = store.get(raw.id + ':series', {});
  let h = '<p style="margin:0 0 8px"><a href="#qcm">' + t('qcmBack') + '</a></p><p class="eyebrow">' + t('qcmTitle') + '</p><h1>' + esc(c.title) + '</h1><p class="lead">' + t('seriesLead') + '</p>';
  h += '<div class="tablewrap"><table><thead><tr><th>#</th><th>' + t('thModule') + '</th><th>' + t('series') + '</th></tr></thead><tbody>';
  c.modules.forEach((m, i) => { const ser = seriesOf(raw.questions, m.id); if(!raw.questions.some(q => q.m === m.id)) return;
    h += '<tr><td class="num">' + (i + 1) + '</td><td><a href="#' + c.id + '-' + m.id + '">' + esc(m.title) + '</a></td><td><span class="series-btns">' + ser.map(s => { const n = raw.questions.filter(q => q.m === m.id && (q.s || 1) === s).length, r = sc[m.id + '-' + s];
      return '<a class="chip" style="text-decoration:none" href="#' + c.id + '-quiz-' + m.id + (ser.length > 1 ? '-serie' + s : '') + '">' + (ser.length > 1 ? t('series') + ' ' + s : 'Questions') + ' (' + n + ')' + (r ? ' ✓ ' + r : '') + '</a>'; }).join('') + '</span></td></tr>'; });
  h += '</tbody></table></div><div class="pager"><a class="btn" href="#' + c.id + '-quiz">' + t('qcmAllQ') + ' (' + raw.questions.length + ')</a><a class="btn ghost" href="#' + c.id + '-examen-blanc">' + t('takeExam') + '</a></div>';
  return h;
}

/* ---------- Questions corrigées ---------- */
/* Numéros de série présents pour un module (ou tous les modules si mid vaut 'all'). */
function seriesOf(qs, mid){ const s = {}; qs.forEach(q => { if(mid === 'all' || q.m === mid) s[q.s || 1] = 1; }); return Object.keys(s).map(Number).sort((a, b) => a - b); }
function quizPage(raw, filter, series){
  const c = V(raw), modIndex = {}; c.modules.forEach((m, i) => modIndex[m.id] = i + 1);
  const qTranslated = LANG === 'fr' || !!raw.enQuestions;
  const defSeries = f => (f !== 'all' && seriesOf(c.questions, f).length > 1) ? 1 : 0;
  let state = { filter, series: series || defSeries(filter), onlyWrong:false, order:null, answers:{} };
  const wrongs = () => store.get(c.id + ':wrong', {});
  function list(){
    let qs = c.questions.map((q, idx) => idx);
    if(state.filter !== 'all') qs = qs.filter(i => c.questions[i].m === state.filter);
    if(state.series) qs = qs.filter(i => (c.questions[i].s || 1) === state.series);
    if(state.onlyWrong){ const w = wrongs(); qs = qs.filter(i => w[i]); }
    if(state.order) qs.sort((a, b) => state.order[a] - state.order[b]);
    return qs;
  }
  function draw(){
    const ids = list();
    const answered = ids.filter(i => state.answers[i] !== undefined);
    const good = answered.filter(i => state.answers[i] === Q(raw, c.questions[i], i).a).length;
    let h = (qTranslated ? '' : notice()) + '<p class="eyebrow">' + esc(c.title) + '</p><h1>' + t('quiz') + '</h1><p class="lead">' + t('quizLead') + '</p>';
    h += '<div class="filters" role="group"><button type="button" class="chip" data-f="all" aria-pressed="' + (state.filter === 'all') + '">' + t('filterAll') + ' (' + c.questions.length + ')</button>';
    c.modules.forEach((m, i) => { const n = c.questions.filter(q => q.m === m.id).length; if(n) h += '<button type="button" class="chip" data-f="' + m.id + '" aria-pressed="' + (state.filter === m.id) + '" title="' + esc(m.title) + '">M' + (i + 1) + ' (' + n + ')</button>'; });
    h += '</div>';
    const ser = seriesOf(c.questions, state.filter);
    if(ser.length > 1){ const sc = store.get(c.id + ':series', {});
      h += '<div class="filters" role="group" aria-label="' + t('series') + '"><button type="button" class="chip" data-s="0" aria-pressed="' + (state.series === 0) + '">' + t('allSeries') + '</button>';
      ser.forEach(s => { const n = c.questions.filter(q => (state.filter === 'all' || q.m === state.filter) && (q.s || 1) === s).length, r = state.filter !== 'all' && sc[state.filter + '-' + s];
        h += '<button type="button" class="chip" data-s="' + s + '" aria-pressed="' + (state.series === s) + '">' + t('series') + ' ' + s + ' (' + n + ')' + (r ? ' ✓ ' + r : '') + '</button>'; });
      h += '</div>'; }
    h += '<div class="scorebar"><span class="s">' + good + ' / ' + answered.length + ' ' + t('right') + ' · ' + (ids.length - answered.length) + ' ' + t('left') + '</span>';
    h += '<button type="button" class="btn ghost" id="qShuffle">' + t('shuffle') + '</button><button type="button" class="btn ghost" id="qReset">' + t('reset') + '</button>';
    h += '<button type="button" class="btn ghost" id="qWrong" aria-pressed="' + state.onlyWrong + '">' + (state.onlyWrong ? t('showAll') : t('reviewWrong')(Object.keys(wrongs()).length)) + '</button></div>';
    if(state.filter !== 'all'){ const m = c.modules.find(x => x.id === state.filter); if(m) h += '<p>Module ' + modIndex[m.id] + ' : <a href="#' + c.id + '-' + m.id + '">' + esc(m.title) + '</a></p>'; }
    if(!ids.length) h += '<div class="box">' + (state.onlyWrong ? t('noWrong') : t('noQ')) + '</div>';
    ids.forEach((idx, n) => {
      const q = Q(raw, c.questions[idx], idx), ans = state.answers[idx];
      h += '<div class="q"><div class="meta"><span>' + t('question') + ' ' + (n + 1) + '</span><span>Module ' + modIndex[q.m] + (ser.length > 1 ? ' · ' + t('series') + ' ' + (c.questions[idx].s || 1) : '') + '</span></div><p class="stem">' + esc(q.q) + '</p>';
      q.o.forEach((o, j) => {
        let cls = 'opt';
        if(ans !== undefined){ if(j === q.a) cls += ' right'; else if(j === ans) cls += ' wrong'; }
        h += '<button type="button" class="' + cls + '" data-q="' + idx + '" data-o="' + j + '"' + (ans !== undefined ? ' disabled' : '') + '><span class="l">' + LET(j) + '</span>' + esc(o) + '</button>';
      });
      if(ans !== undefined) h += '<div class="expl"><strong>' + (ans === q.a ? '<span class="pill ok">' + t('good') + '</span>' : '<span class="pill bad">' + t('expected') + ' : ' + LET(q.a) + '</span>') + '</strong>' + esc(q.e) + why(q, ans) + '</div>';
      h += '</div>';
    });
    $page.innerHTML = h;
  }
  $page.onclick = ev => {
    const b = ev.target.closest('button'); if(!b) return;
    if(b.dataset.f){ state.filter = b.dataset.f; state.series = defSeries(state.filter); state.answers = {}; draw(); return; }
    if(b.dataset.s !== undefined){ state.series = +b.dataset.s; state.answers = {}; state.order = null; draw(); return; }
    if(b.id === 'qShuffle'){ state.order = {}; c.questions.forEach((q, i) => state.order[i] = Math.random()); state.answers = {}; draw(); return; }
    if(b.id === 'qReset'){ state.answers = {}; state.order = null; draw(); return; }
    if(b.id === 'qWrong'){ state.onlyWrong = !state.onlyWrong; state.answers = {}; draw(); return; }
    if(b.dataset.q !== undefined){
      const qi = +b.dataset.q, oi = +b.dataset.o, q = Q(raw, c.questions[qi], qi);
      state.answers[qi] = oi;
      const w = wrongs(); if(oi === q.a) delete w[qi]; else w[qi] = 1; store.set(c.id + ':wrong', w);
      if(state.filter !== 'all' && state.series && !state.onlyWrong){ const ids = list(); if(ids.every(i => state.answers[i] !== undefined)){
        const sc = store.get(c.id + ':series', {}); sc[state.filter + '-' + state.series] = ids.filter(i => state.answers[i] === Q(raw, c.questions[i], i).a).length + '/' + ids.length; store.set(c.id + ':series', sc); } }
      const y = window.scrollY; draw(); window.scrollTo(0, y);
    }
  };
  draw();
}

/* ---------- Examen blanc ---------- */
function examPage(raw){
  const c = V(raw);
  const total = Math.min(c.examQuestions, c.questions.length);
  const minutes = Math.round(c.examMinutes * total / c.examQuestions);
  let h = '<p class="eyebrow">' + esc(c.title) + '</p><h1>' + t('exam') + '</h1><p class="lead">' + t('examLead')(total, minutes, c.passMark) + '</p><p>' + t('examText') + '</p>';
  h += '<div class="pager"><button type="button" class="btn" id="exStart">' + t('examStart') + '</button><a class="btn ghost" href="#' + c.id + '-quiz">' + t('examPractice') + '</a></div>';
  $page.innerHTML = h;
  document.getElementById('exStart').onclick = () => runExam(raw, total, minutes);
}
function runExam(raw, total, minutes){
  const c = V(raw);
  const pick = c.questions.map((q, i) => i).sort(() => Math.random() - .5).slice(0, total);
  const ans = {}; let left = minutes * 60, done = false;
  const modIndex = {}; c.modules.forEach((m, i) => modIndex[m.id] = i + 1);
  const fmt = s => Math.floor(s / 60) + ':' + String(s % 60).padStart(2, '0');
  function draw(){
    let h = '<p class="eyebrow">' + t('examRunning') + '</p><h1>' + esc(c.title) + '</h1>';
    h += '<div class="scorebar"><span class="s" id="exClock">⏱ ' + fmt(left) + '</span><span class="s" id="exCount">' + Object.keys(ans).length + ' / ' + total + ' ' + t('answered') + '</span><button type="button" class="btn" id="exEnd">' + t('finish') + '</button></div>';
    pick.forEach((qi, n) => {
      const q = Q(raw, c.questions[qi], qi);
      h += '<div class="q"><div class="meta"><span>' + t('question') + ' ' + (n + 1) + ' / ' + total + '</span></div><p class="stem">' + esc(q.q) + '</p>';
      q.o.forEach((o, j) => { h += '<button type="button" class="opt' + (ans[qi] === j ? ' chosen' : '') + '" data-q="' + qi + '" data-o="' + j + '" aria-pressed="' + (ans[qi] === j) + '"><span class="l">' + LET(j) + '</span>' + esc(o) + '</button>'; });
      h += '</div>';
    });
    $page.innerHTML = h + '<div class="pager"><span></span><button type="button" class="btn" id="exEnd2">' + t('finish') + '</button></div>';
  }
  function finish(){
    if(done) return; done = true; clearInterval(timer); timer = null;
    const isGood = qi => ans[qi] === Q(raw, c.questions[qi], qi).a;
    const good = pick.filter(isGood).length;
    const pct = Math.round(100 * good / total), pass = pct >= c.passMark;
    const best = store.get(c.id + ':best', null); if(best === null || pct > best) store.set(c.id + ':best', pct);
    const w = store.get(c.id + ':wrong', {}); pick.forEach(qi => { if(!isGood(qi)) w[qi] = 1; else delete w[qi]; }); store.set(c.id + ':wrong', w);
    const per = {}; pick.forEach(qi => { const m = c.questions[qi].m; per[m] = per[m] || [0, 0]; per[m][1]++; if(isGood(qi)) per[m][0]++; });
    let h = '<p class="eyebrow">' + t('result') + '</p><h1>' + pct + ' % <span class="pill ' + (pass ? 'ok">' + t('passed') : 'bad">' + t('notYet')) + '</span></h1>';
    h += '<div class="result"><p><b>' + t('goodOf')(good, total) + '</b>. ' + t('timeUsed') + ' : ' + fmt(minutes * 60 - left) + '. ' + t('threshold') + ' : ' + c.passMark + ' %.</p>';
    h += '<div class="tablewrap"><table><thead><tr><th>' + t('thModule') + '</th><th>' + t('thScore') + '</th><th>' + t('thReview') + '</th></tr></thead><tbody>';
    c.modules.forEach((m, i) => { const p = per[m.id]; if(!p) return; const r = Math.round(100 * p[0] / p[1]); h += '<tr><td>' + (i + 1) + '. ' + esc(m.title) + '</td><td class="num">' + p[0] + '/' + p[1] + ' (' + r + ' %)</td><td>' + (r < c.passMark ? '<a href="#' + c.id + '-' + m.id + '">' + t('reread') + '</a>' : '<span class="pill ok">OK</span>') + '</td></tr>'; });
    h += '</tbody></table></div><div class="pager"><button type="button" class="btn" id="exAgain">' + t('again') + '</button><a class="btn ghost" href="#' + c.id + '-quiz">' + t('reviewMine') + '</a></div></div><h2>' + t('detail') + '</h2>';
    pick.forEach((qi, n) => {
      const q = Q(raw, c.questions[qi], qi), a = ans[qi];
      h += '<div class="q"><div class="meta"><span>' + t('question') + ' ' + (n + 1) + '</span><span>Module ' + modIndex[q.m] + '</span></div><p class="stem">' + esc(q.q) + '</p>';
      q.o.forEach((o, j) => { let cls = 'opt'; if(j === q.a) cls += ' right'; else if(j === a) cls += ' wrong'; h += '<button type="button" class="' + cls + '" disabled><span class="l">' + LET(j) + '</span>' + esc(o) + '</button>'; });
      h += '<div class="expl"><strong>' + (a === q.a ? '<span class="pill ok">' + t('good') + '</span>' : '<span class="pill bad">' + (a === undefined ? t('noAnswer') : t('yours') + ' : ' + LET(a)) + ' · ' + t('exp') + ' : ' + LET(q.a) + '</span>') + '</strong>' + esc(q.e) + why(q, a) + '</div></div>';
    });
    $page.innerHTML = h; window.scrollTo(0, 0);
    document.getElementById('exAgain').onclick = () => runExam(raw, total, minutes);
  }
  $page.onclick = ev => {
    const b = ev.target.closest('button'); if(!b || done) return;
    if(b.id === 'exEnd' || b.id === 'exEnd2'){ finish(); return; }
    if(b.dataset.q !== undefined){
      const qi = +b.dataset.q; ans[qi] = +b.dataset.o;
      b.parentNode.querySelectorAll('.opt').forEach(x => { const on = x === b; x.classList.toggle('chosen', on); x.setAttribute('aria-pressed', on); });
      const ct = document.getElementById('exCount'); if(ct) ct.textContent = Object.keys(ans).length + ' / ' + total + ' ' + t('answered');
    }
  };
  draw(); window.scrollTo(0, 0);
  timer = setInterval(() => { left--; const el = document.getElementById('exClock'); if(el) el.textContent = '⏱ ' + fmt(left); if(left <= 0) finish(); }, 1000);
}


/* ---- Sigles : repérage dans le texte, fiche au clic, encadré par module, glossaire ---- */
const SL = () => LANG === 'en' ? {mod:'Acronyms in this module', page:'Acronyms on this page', d:'What it is', x:'Example', all:'All acronyms', title:'Acronym glossary', lead:'Every acronym used in the courses, with its full form, what it means and an example. Click an underlined acronym in any course to see its card. ', search:'Search an acronym or a word…', none:'No match.'}
  : {mod:'Sigles de ce module', page:'Sigles de cette page', d:'Ce que c\'est', x:'Exemple', all:'Tous les sigles', title:'Glossaire des sigles', lead:'Tous les sigles utilisés dans les cours, avec leur forme développée, leur signification et un exemple. Dans un cours, clique sur un sigle souligné pour voir sa fiche.', search:'Chercher un sigle ou un mot…', none:'Aucun résultat.'};
const SV = e => LANG === 'en' && e.en ? {s:e.en.s || e.s, f:e.en.f, d:e.en.d, x:e.en.x} : e;
const SVK = (e, k) => { const v = SV(e); if(e.kf && e.kf[k]) return Object.assign({}, v, {f:e.kf[k][LANG === 'en' ? 1 : 0]}); return LANG === 'en' && e.en && e.en.al && e.en.al.includes(k) ? Object.assign({}, v, {f:e.en.fa}) : v; };
let SIGRE = null;
function sigRe(){ if(!SIGRE){ const ks = Object.keys(SIGLES).sort((a, b) => b.length - a.length).map(k => k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')); SIGRE = new RegExp('(?<![A-Za-z0-9À-ÿ\\-])(' + ks.join('|') + ')(?![A-Za-z0-9À-ÿ\\-])', 'g'); } SIGRE.lastIndex = 0; return SIGRE; }
const SIGSKIP = 'SCRIPT,STYLE,ABBR,A,BUTTON,LABEL,INPUT,TEXTAREA,SELECT,CODE,PRE,H1,OPTION'.split(',');
function sigWrap(root){
  if(!Object.keys(SIGLES).length) return;
  const w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {acceptNode(n){
    for(let p = n.parentNode; p && p !== root.parentNode; p = p.parentNode){ if(SIGSKIP.includes(p.nodeName) || (p.classList && (p.classList.contains('sigcard') || p.classList.contains('nosig') || p.classList.contains('eyebrow')))) return NodeFilter.FILTER_REJECT; }
    const re = sigRe(); return re.test(n.nodeValue) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP; }});
  const nodes = []; while(w.nextNode()) nodes.push(w.currentNode);
  nodes.forEach(n => { const frag = document.createDocumentFragment(), txt = n.nodeValue, re = sigRe(); let last = 0, m;
    while((m = re.exec(txt))){ frag.appendChild(document.createTextNode(txt.slice(last, m.index))); const a = document.createElement('abbr'); a.className = 'sig'; a.tabIndex = 0; a.dataset.k = m[1]; a.title = SVK(SIGLES[m[1]], m[1]).f; a.textContent = m[1]; frag.appendChild(a); last = m.index + m[1].length; }
    frag.appendChild(document.createTextNode(txt.slice(last))); n.parentNode.replaceChild(frag, n); });
}
/* Explication intégrée : à la première apparition d'un sigle dans la page, forme développée entre parenthèses
   et encadré d'explication juste après le paragraphe, l'élément de liste ou le tableau qui le contient. */
function sigInline(){
  const seen = new Set(), seenK = new Set(), after = new Map();
  $page.querySelectorAll('abbr.sig').forEach(a => {
    const k = a.dataset.k, e0 = SIGLES[k]; if(!e0 || seenK.has(k)) return; seenK.add(k); const again = seen.has(e0); if(again && !(e0.kf && e0.kf[k])) return; seen.add(e0); const e = SVK(e0, k);
    const inHead = a.closest('h2,h3,h4,summary,th');
    const prev = a.previousSibling, before = prev && prev.nodeType === 3 ? prev.nodeValue : '';
    const already = /\(\s*$/.test(before);
    if(!inHead && !already){ const sp = document.createElement('span'); sp.className = 'sigexp nosig'; sp.textContent = ' (' + e.f.replace(/\s*\(([^()]*)\)\s*$/, ', $1') + ')'; a.after(sp); }
    if(again) return;
    const blk = a.closest('summary') || a.closest('.tablewrap') || a.closest('li,dd,dt,p,h2,h3,h4,.box,blockquote') || a.parentElement;
    const box = document.createElement('div'); box.className = 'sigbox nosig';
    box.innerHTML = '<b>' + esc(a.dataset.k) + '</b> <span class="f">(' + esc(e.f.replace(/\s*\(([^()]*)\)\s*$/, ', $1')) + ')</span> : ' + esc(e.d) + ' <span class="x"><b>' + SL().x + ' :</b> ' + esc(e.x) + '</span>';
    const prevBox = after.get(blk);
    if(prevBox) prevBox.after(box); else if(/^(LI|DD|DT)$/.test(blk.tagName)) blk.appendChild(box); else blk.after(box);
    after.set(blk, box);
  });
}
function sigCard(e0, tag){ const L = SL(), e = SV(e0); return '<' + (tag || 'div') + ' class="sigcard"><div class="k">' + esc(e.s) + '</div><div class="f">' + esc(e.f) + '</div><p><span class="lbl">' + L.d + ' : </span>' + esc(e.d) + '</p><p><span class="lbl">' + L.x + ' : </span>' + esc(e.x) + '</p></' + (tag || 'div') + '>'; }
function sigList(view){
  const seen = []; $page.querySelectorAll('abbr.sig').forEach(a => { const e = SIGLES[a.dataset.k]; if(e && !seen.includes(e)) seen.push(e); });
  if(!seen.length) return; seen.sort((a, b) => a.s.localeCompare(b.s));
  const L = SL(), d = document.createElement('section'); d.className = 'siglist nosig';
  d.innerHTML = '<h2>' + (view === 'module' ? L.mod : L.page) + ' (' + seen.length + ')</h2>' + seen.map(e => sigCard(e)).join('') + '<p><a href="#sigles">' + L.all + ' →</a></p>';
  $page.appendChild(d);
}
function siglesPage(q){
  const L = SL(), n = new Set(Object.values(SIGLES)).size;
  let h = '<p class="eyebrow">Campus</p><h1>' + L.title + ' (' + n + ')</h1><p class="lead">' + L.lead + '</p><input type="search" class="sigsearch" id="sigQ" placeholder="' + L.search + '" value="' + esc(decodeURIComponent(q || '')) + '"><div id="sigRes" class="nosig"></div>';
  $page.innerHTML = h;
  const draw = () => { const v = document.getElementById('sigQ').value.trim().toLowerCase(); let out = '';
    SIGCATS.forEach(c => { const it = c.items.filter(e => !v || (SV(e).s + ' ' + SV(e).f + ' ' + SV(e).d + ' ' + e.s + ' ' + e.f).toLowerCase().includes(v)).sort((a, b) => SV(a).s.localeCompare(SV(b).s)); if(it.length) out += '<h2>' + esc(LANG === 'en' && SIGCATEN[c.title] || c.title) + ' (' + it.length + ')</h2>' + it.map(e => sigCard(e)).join(''); });
    document.getElementById('sigRes').innerHTML = out || '<p>' + L.none + '</p>'; };
  document.getElementById('sigQ').oninput = draw; draw();
}
let $pop = null;
function sigClose(){ if($pop){ $pop.remove(); $pop = null; } }
function sigOpen(a){
  sigClose(); const e0 = SIGLES[a.dataset.k]; if(!e0) return; const L = SL(), e = SVK(e0, a.dataset.k);
  $pop = document.createElement('div'); $pop.id = 'sigpop'; $pop.setAttribute('role', 'dialog');
  $pop.innerHTML = '<div class="k">' + esc(e0.kf && e0.kf[a.dataset.k] ? a.dataset.k : e.s) + '</div><div class="f">' + esc(e.f) + '</div><p><span class="lbl">' + L.d + ' : </span>' + esc(e.d) + '</p><p><span class="lbl">' + L.x + ' : </span>' + esc(e.x) + '</p><a href="#sigles">' + L.all + ' →</a>';
  document.body.appendChild($pop);
  const r = a.getBoundingClientRect(), pw = $pop.offsetWidth, ph = $pop.offsetHeight;
  let left = Math.max(8, Math.min(window.scrollX + r.left, window.scrollX + document.documentElement.clientWidth - pw - 8));
  let top = window.scrollY + r.bottom + 6; if(r.bottom + ph + 12 > window.innerHeight && r.top > ph + 12) top = window.scrollY + r.top - ph - 6;
  $pop.style.left = left + 'px'; $pop.style.top = top + 'px';
}
document.addEventListener('click', ev => { const a = ev.target.closest && ev.target.closest('abbr.sig'); if(a){ ev.preventDefault(); ev.stopPropagation(); sigOpen(a); return; } if(!(ev.target.closest && ev.target.closest('#sigpop'))) sigClose(); }, true);
document.addEventListener('keydown', ev => { if(ev.key === 'Escape') sigClose(); else if(ev.key === 'Enter' && document.activeElement && document.activeElement.matches && document.activeElement.matches('abbr.sig')) sigOpen(document.activeElement); });
let sigTimer = null;
new MutationObserver(() => { clearTimeout(sigTimer); sigTimer = setTimeout(() => sigWrap($page), 30); }).observe(document.getElementById('page'), {childList:true, subtree:true});
function route(){
  if(timer){ clearInterval(timer); timer = null; }
  $page.onclick = null;
  document.documentElement.lang = LANG;
  document.getElementById('menuBtn').textContent = t('menu');
  const r = parseHash();
  if(r.view === 'home') $page.innerHTML = home();
  else if(r.view === 'cert') $page.innerHTML = certPage(r.cert);
  else if(r.view === 'format'){ const c = V(r.cert); $page.innerHTML = (c.translated ? '' : notice()) + '<p class="eyebrow">' + esc(c.title) + '</p><h1>' + t('formatTitle') + '</h1>' + c.exam; }
  else if(r.view === 'module') $page.innerHTML = modulePage(r.cert, r.mi);
  else if(r.view === 'page'){ const c = V(r.cert), p = c.pages[r.pi]; $page.innerHTML = (c.translated ? '' : notice()) + '<p class="eyebrow">' + esc(c.title) + '</p><h1>' + esc(p.title) + '</h1>' + p.html; }
  else if(r.view === 'quiz') quizPage(r.cert, r.filter, r.series);
  else if(r.view === 'exam') examPage(r.cert);
  else if(r.view === 'sigles') siglesPage(r.q);
  else if(r.view === 'qcm') $page.innerHTML = qcmHome();
  else if(r.view === 'qcmCert') $page.innerHTML = qcmCert(r.qc);
  sigClose();
  /* Sigles : soulignés seulement ; la définition et l'exemple s'ouvrent au clic (sigInline n'est plus appelé). */
  if(r.view !== 'sigles') sigWrap($page);
  renderSide(r);
  if(r.view !== 'quiz' || !location.hash.includes('quiz-')) window.scrollTo(0, 0);
  $side.classList.remove('open');
  document.getElementById('menuBtn').setAttribute('aria-expanded', 'false');
}
document.getElementById('menuBtn').onclick = function(){ const o = $side.classList.toggle('open'); this.setAttribute('aria-expanded', o); };
window.addEventListener('hashchange', route);
route();
})();
