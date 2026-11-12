const store = {
  get(k, d){ try{ const v = localStorage.getItem('campus:' + k); return v ? JSON.parse(v) : d; }catch(e){ return d; } },
  set(k, v){ try{ localStorage.setItem('campus:' + k, JSON.stringify(v)); }catch(e){} }
};
let LANG = store.get('lang', null) || ((navigator.language || 'fr').toLowerCase().startsWith('fr') ? 'fr' : 'en');

/* ===== Libellés de l'interface. Les textes du site (accueil, services, CV, contact, glossaire) sont dans data/*.json. ===== */
const T = {
  fr:{ nav:{accueil:"Accueil",cv:"CV",services:"Services",learning:"Learning",outils:"Outils",contact:"Contact"},
    title:"Georges Alain Cabo · Audit IT et sécurité de l'information",
    eyebrow:"AUDIT IT · SÉCURITÉ DE L'INFORMATION · GOUVERNANCE",
    h1:"Rendre la sécurité de l'information mesurable, auditable et utile au métier.",
    lead:"Auditeur des systèmes d'information, je travaille sur la gouvernance IT, les contrôles généraux informatiques et les systèmes de management de la sécurité (ISO/IEC 27001). Ce site réunit mon CV, mes cours de certification et des outils pratiques.",
    seeCv:"Voir mon CV", goLearning:"Accéder aux cours",
    modules:"Sur ce site",
    m:[
      ["cv","CV","Parcours, compétences et certifications, en français et en anglais.",""],
      ["services","Compétences et services","Ce que je sais faire et ce que je propose : audit IT, ISO 27001, surveillance de sécurité avec Wazuh, formation.",""],
      ["learning","Learning","Cours et QCM corrigés : ISO 27001 Lead Implementer, Security+, CISA, CISM, CISSP. Tous les cours et QCM existent en français et en anglais.",""],
      ["outils","Outils","Calculatrice de risque (ALE) et glossaire bilingue de l'audit et de la sécurité.",""],
      ["contact","Contact","Me joindre pour une mission d'audit, un accompagnement ISO 27001 ou une formation.",""],
      [null,"Portfolio d'audit","Cas d'audit anonymisés : contexte, démarche, constats et recommandations.","soon"],
      [null,"Boîte à outils","Modèles téléchargeables : DdA, matrice de risques, check-list ITGC.","soon"],
      [null,"Blog et veille","Notes sur les normes, la réglementation et l'actualité cyber.","soon"]
    ],
    soon:"Bientôt", open:"Ouvrir",
    cvTitle:"Curriculum vitæ", print:"Imprimer / PDF",
    cvNote:"",
    toolsTitle:"Outils",
    aleTitle:"Calculatrice de perte annuelle attendue (ALE)",
    aleLead:"SLE = valeur de l'actif × facteur d'exposition ; ALE = SLE × ARO (fréquence annuelle). Utile pour comparer le coût d'une mesure à la perte qu'elle évite.",
    av:"Valeur de l'actif", ef:"Facteur d'exposition (%)", aro:"Occurrences par an (ARO)", cost:"Coût annuel de la mesure (facultatif)", cur:"FCFA",
    sle:"SLE", ale:"ALE", worth:"La mesure coûte moins que la perte annuelle attendue : elle se justifie financièrement.", notWorth:"La mesure coûte plus que la perte annuelle attendue : à justifier autrement (exigence légale, image…).",
    gloTitle:"Glossaire bilingue",
    contactTitle:"Contact",
    contactLead:"Pour une mission d'audit, un accompagnement à la mise en œuvre d'un SMSI ou une session de formation.",
    contactNote:"Coordonnées à compléter : indique-moi l'adresse électronique et le profil LinkedIn que tu veux afficher publiquement.",
    foot:"© 2026 Georges Alain Cabo · georgilearning.academy" },
  en:{ nav:{accueil:"Home",cv:"Resume",services:"Services",learning:"Learning",outils:"Tools",contact:"Contact"},
    title:"Georges Alain Cabo · IT audit and information security",
    eyebrow:"IT AUDIT · INFORMATION SECURITY · GOVERNANCE",
    h1:"Making information security measurable, auditable and useful to the business.",
    lead:"As an information systems auditor, I work on IT governance, IT general controls and information security management systems (ISO/IEC 27001). This site brings together my resume, my certification courses and practical tools.",
    seeCv:"View my resume", goLearning:"Go to the courses",
    modules:"On this site",
    m:[
      ["cv","Resume","Background, skills and certifications, in English and French.",""],
      ["services","Skills and services","What I do and what I offer: IT audit, ISO 27001, security monitoring with Wazuh, training.",""],
      ["learning","Learning","Courses and practice questions: ISO 27001 Lead Implementer, Security+, CISA, CISM, CISSP. All courses and practice questions are available in English and French.",""],
      ["outils","Tools","Risk calculator (ALE) and bilingual audit and security glossary.",""],
      ["contact","Contact","Reach me for an audit engagement, ISO 27001 support or training.",""],
      [null,"Audit portfolio","Anonymized audit cases: context, approach, findings and recommendations.","soon"],
      [null,"Toolkit","Downloadable templates: SoA, risk matrix, ITGC checklist.","soon"],
      [null,"Blog and news","Notes on standards, regulation and cyber news.","soon"]
    ],
    soon:"Coming soon", open:"Open",
    cvTitle:"Resume", print:"Print / PDF",
    cvNote:"",
    toolsTitle:"Tools",
    aleTitle:"Annualized loss expectancy (ALE) calculator",
    aleLead:"SLE = asset value × exposure factor; ALE = SLE × ARO (annual rate of occurrence). Useful to compare the cost of a control with the loss it prevents.",
    av:"Asset value", ef:"Exposure factor (%)", aro:"Occurrences per year (ARO)", cost:"Annual cost of the control (optional)", cur:"XOF",
    sle:"SLE", ale:"ALE", worth:"The control costs less than the expected annual loss: it is financially justified.", notWorth:"The control costs more than the expected annual loss: justify it otherwise (legal requirement, reputation…).",
    gloTitle:"Bilingual glossary",
    contactTitle:"Contact",
    contactLead:"For an audit engagement, support implementing an ISMS or a training session.",
    contactNote:"Contact details to be added.",
    foot:"© 2026 Georges Alain Cabo · georgilearning.academy" }
};

/* Contenu modifiable : fichiers data/*.json (espace d'administration Pages CMS). Chargés par loadData() puis convertis par applyData(). */
const CV = {fr:{}, en:{}};
let GLOSSARY = [], PROFIL = {};

const SECTIONS = ['accueil','cv','services','learning','outils','contact'];
const esc = s => String(s).replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const fmt = n => isFinite(n) ? Math.round(n).toLocaleString(LANG === 'fr' ? 'fr-FR' : 'en-US') : '–';

/* ===== Icônes (traits simples) ===== */
const ICON = (() => { const p = {
  audit:'<circle cx="11" cy="11" r="6.5"/><path d="M20 20l-4.2-4.2M8.5 11l1.8 1.8 3.4-3.6"/>',
  shield:'<path d="M12 3l7.5 3v5.5c0 4.6-3.2 8.3-7.5 9.5-4.3-1.2-7.5-4.9-7.5-9.5V6z"/><path d="M8.8 12l2.2 2.2 4.2-4.4"/>',
  radar:'<path d="M3 12h3l2.5-6 4 13 3-9 1.8 2H21"/>',
  grad:'<path d="M2.5 9L12 4.5 21.5 9 12 13.5z"/><path d="M6.5 11v4.5c1.6 1.6 3.4 2.4 5.5 2.4s3.9-.8 5.5-2.4V11M21.5 9v5"/>',
  bank:'<path d="M3 9.5L12 4l9 5.5M4.5 10v8M9 10v8M15 10v8M19.5 10v8M3 20h18"/>',
  phone:'<path d="M5 3.5h3.5l1.7 4.5-2.2 1.4a11 11 0 005.6 5.6l1.4-2.2 4.5 1.7V18a2.5 2.5 0 01-2.7 2.5C9.6 20 4 14.4 3.5 6.2A2.5 2.5 0 015 3.5z"/>',
  mail:'<rect x="3" y="5" width="18" height="14" rx="2.5"/><path d="M3.5 6.5L12 13l8.5-6.5"/>',
  in:'<rect x="3" y="3" width="18" height="18" rx="3"/><path d="M7.5 10.5v6M7.5 7.5v.01M11.5 16.5v-6M11.5 13c0-1.6 1-2.6 2.4-2.6s2.1 1 2.1 2.6v3.5"/>',
  pin:'<path d="M12 21s-6.5-6-6.5-11a6.5 6.5 0 0113 0c0 5-6.5 11-6.5 11z"/><circle cx="12" cy="10" r="2.3"/>',
  arrow:'<path d="M5 12h14M13 6l6 6-6 6"/>',
  check:'<path d="M5 12.5l4.5 4.5L19 7.5"/>',
  doc:'<path d="M7 3h7l5 5v13H7z"/><path d="M14 3v5h5M10 13h6M10 17h6"/>',
  mobile:'<rect x="6.5" y="2.5" width="11" height="19" rx="2.5"/><path d="M11 18.5h2"/>',
  umbrella:'<path d="M3 12a9 9 0 0118 0z"/><path d="M12 12v6.5a2 2 0 01-4 0"/>',
  signal:'<path d="M12 20v-7M8.5 9.5a5 5 0 017 0M5.5 6.5a9.2 9.2 0 0113 0"/><circle cx="12" cy="12.5" r="1"/>',
  drop:'<path d="M12 3.5s6 6.6 6 11a6 6 0 01-12 0c0-4.4 6-11 6-11z"/>',
  factory:'<path d="M3 20V10l5 3V10l5 3V6h4l1 14z"/><path d="M3 20h18"/>',
  building:'<path d="M4 20V7l8-4 8 4v13M9 20v-5h6v5M8 10h.01M12 10h.01M16 10h.01"/>',
  book:'<path d="M4 5.5A2.5 2.5 0 016.5 3H20v15H6.5A2.5 2.5 0 004 20.5z"/><path d="M4 20.5A2.5 2.5 0 016.5 18H20v3H6.5"/>',
  menu:'<path d="M4 7h16M4 12h16M4 17h16"/>',
  close:'<path d="M6 6l12 12M18 6L6 18"/>',
  download:'<path d="M12 4v11M7 10.5l5 5 5-5M5 20h14"/>'};
  return n => '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + (p[n] || '') + '</svg>'; })();

/* ===== Page d'accueil : textes ===== */
const HOME = {
  fr:{ more:"En savoir plus", hire:"Me contacter", menu:"Menu", foot:{nav:"Navigation", contact:"Contact"}, contactLabels:{tel:"Téléphone", mail:"E-mail", in:"LinkedIn", pin:"Localisation"} },
  en:{ more:"Learn more", hire:"Contact me", menu:"Menu", foot:{nav:"Navigation", contact:"Contact"}, contactLabels:{tel:"Phone", mail:"Email", in:"LinkedIn", pin:"Location"} }
};
const asset = u => String(u || '').replace(/^\//, '');
const mark = x => esc(x).replace(/\*([^*]+)\*/g, '<em>$1</em>');
/* Convertit les fichiers de données (champs nommés) vers les structures utilisées par l'affichage. */
function applyData(d){
  PROFIL = d.profil;
  const mails = (PROFIL.emails || []).map(m => m.identifiant + String.fromCharCode(64) + m.domaine);
  ['fr','en'].forEach(l => {
    const A = d.accueil[l], H = HOME[l], V = d.services[l], C = d.cv[l];
    Object.assign(H, { eyebrow:A.eyebrow, h1:mark(A.titre), lead:A.intro, ctaMain:A.bouton_contact, ctaSvc:A.bouton_services, cv:A.bouton_cv, trust:A.atouts || [],
      f1:[A.badge_1.titre, A.badge_1.texte], f2:[A.badge_2.titre, A.badge_2.texte], stats:(A.chiffres || []).map(x => [x.chiffre, x.texte]),
      svcEyebrow:A.services.surtitre, svcTitle:A.services.titre, svcLead:A.services.intro, more:A.services.lien || H.more, svc:(A.services.cartes || []).map(x => [x.icone, x.titre, x.texte]),
      howEyebrow:A.demarche.surtitre, howTitle:A.demarche.titre, how:(A.demarche.etapes || []).map(x => [x.titre, x.texte]),
      secEyebrow:A.secteurs.surtitre, secTitle:A.secteurs.titre, secLead:A.secteurs.intro, sectors:(A.secteurs.liste || []).map(x => [x.icone, x.nom]),
      proofEyebrow:A.preuves.surtitre, proofTitle:A.preuves.titre,
      lab:[A.preuves.labo.titre, A.preuves.labo.texte, A.preuves.labo.points || [], A.preuves.labo.bouton],
      campus:[A.preuves.campus.titre, A.preuves.campus.texte, A.preuves.campus.points || [], A.preuves.campus.bouton],
      ctaTitle:A.appel.titre, ctaText:A.appel.texte, ctaMail:A.appel.bouton_mail, ctaCall:A.appel.bouton_appel, mailSubject:A.appel.objet_mail });
    H.foot.about = A.pied_de_page.presentation; H.foot.legal = A.pied_de_page.mention;
    T[l].title = A.titre_onglet; T[l].contactTitle = A.contact.titre; T[l].contactLead = A.contact.texte;
    T[l].svc = { eyebrow:V.surtitre, title:V.titre, lead:V.intro, offersTitle:V.offres_titre, offers:(V.offres || []).map(x => [x.titre, x.texte, x.points || []]),
      skillsTitle:V.competences_titre, skills:(V.competences || []).map(x => [x.titre, x.texte]), demoTitle:V.labo_titre, demoLead:V.labo_intro,
      labs:(V.labs || []).map(x => [x.titre, x.texte]), demoNote:V.labo_note || '', ctaTitle:V.appel_titre, ctaText:V.appel_texte, cta:V.bouton_contact };
    const contact = ['<a href="tel:' + String(PROFIL.telephone || '').replace(/[^+\d]/g, '') + '">' + esc(PROFIL.telephone || '') + '</a>']
      .concat(mails.map(m => '<a href="mailto:' + m + '">' + m + '</a>'))
      .concat(PROFIL.linkedin ? ['<a href="' + esc(PROFIL.linkedin) + '" rel="noopener" target="_blank">LinkedIn</a>'] : [])
      .concat([esc(l === 'en' ? PROFIL.lieu_en : PROFIL.lieu_fr)]);
    Object.assign(CV[l], { name:C.nom, role:C.poste, place:C.lieu, summary:C.resume,
      side:[[l === 'en' ? 'Contact' : 'Contact', contact]].concat((C.colonne || []).map(x => [x.titre, x.elements || []])),
      expTitle:C.experience_titre, jobs:(C.experiences || []).map(x => [x.periode, x.poste, x.taches || []]),
      certTitle:C.certifications_titre, certs:(C.certifications || []).map(x => [x.groupe, x.elements || [], (x.badges || []).length ? x.badges : null]),
      eduTitle:C.formation_titre, edu:(C.formation || []).map(x => [x.periode, x.diplome]) });
  });
  GLOSSARY = (d.glossaire.termes || []).map(x => [x.terme_fr, x.terme_en, x.definition_fr, x.definition_en]);
}
function loadData(){
  const files = ['accueil','services','cv','profil','glossaire'];
  return Promise.all(files.map(f => fetch('data/' + f + '.json', {cache:'no-cache'}).then(r => { if(!r.ok) throw new Error(f); return r.json(); })))
    .then(arr => { const d = {}; files.forEach((f, i) => d[f] = arr[i]); applyData(d); });
}
function contactItems(){
  return CV[LANG].side[0][1].map(x => { const m = x.match(/href="([^"]+)"[^>]*>([^<]+)</), href = m ? m[1] : '', label = m ? m[2] : x.replace(/<[^>]+>/g, '');
    const type = href.startsWith('tel:') ? 'tel' : href.startsWith('mailto:') ? 'mail' : /linkedin/.test(href) ? 'in' : 'pin';
    return {type, label: type === 'in' ? (href.split('/in/')[1] || 'LinkedIn').replace(/\/$/, '').replace(/-\d+$/, '') : label, href}; });
}
const cvPdf = () => asset(LANG === 'en' ? PROFIL.cv_pdf_en : PROFIL.cv_pdf_fr);
const mailHref = () => { const m = contactItems().find(c => c.type === 'mail'); return m ? m.href + '?subject=' + encodeURIComponent(HOME[LANG].mailSubject) : '#contact'; };
const telHref = () => { const m = contactItems().find(c => c.type === 'tel'); return m ? m.href : '#contact'; };

function pHome(t){
  const H = HOME[LANG];
  let h = '<section class="hero"><div class="wrap"><div><p class="eyebrow">' + H.eyebrow + '</p><h1>' + H.h1 + '</h1><p class="lead">' + H.lead + '</p>'
    + '<div class="actions"><a class="btn" href="#contact">' + H.ctaMain + ICON('arrow') + '</a><a class="btn outline-light" href="#services">' + H.ctaSvc + '</a><a class="btn outline-light" href="' + cvPdf() + '" download>' + ICON('download') + H.cv + '</a></div>'
    + '<div class="trust">' + H.trust.map(x => '<span>' + ICON('check') + x + '</span>').join('') + '</div></div>'
    + '<div class="portrait"><div class="frame"><img src="' + esc(asset(PROFIL.photo)) + '" alt="Georges Alain Cabo" width="900" height="990"></div>'
    + (H.f1[0] ? '<div class="float f1"><span class="ic">' + ICON('audit') + '</span><span><b>' + H.f1[0] + '</b>' + H.f1[1] + '</span></div>' : '')
    + (H.f2[0] ? '<div class="float f2"><span class="ic">' + ICON('shield') + '</span><span><b>' + H.f2[0] + '</b>' + H.f2[1] + '</span></div>' : '') + '</div></div></section>';
  h += '<div class="stats"><div class="wrap"><div class="grid4">' + H.stats.map(([b, s]) => '<div class="stat"><b>' + b + '</b><span>' + s + '</span></div>').join('') + '</div></div></div>';
  h += '<section class="band"><div class="wrap"><div class="head rv"><p class="eyebrow">' + H.svcEyebrow + '</p><h2>' + H.svcTitle + '</h2><p>' + H.svcLead + '</p></div><div class="grid">'
    + H.svc.map(([ic, n, d]) => '<a class="card rv" href="#services"><span class="ic">' + ICON(ic) + '</span><h3>' + n + '</h3><span class="d">' + d + '</span><span class="more">' + H.more + ICON('arrow') + '</span></a>').join('') + '</div></div></section>';
  h += '<section class="band alt"><div class="wrap"><div class="head rv"><p class="eyebrow">' + H.howEyebrow + '</p><h2>' + H.howTitle + '</h2></div><div class="steps">'
    + H.how.map(([n, d]) => '<div class="step rv"><h3>' + n + '</h3><p>' + d + '</p></div>').join('') + '</div></div></section>';
  h += '<section class="band"><div class="wrap"><div class="head rv"><p class="eyebrow">' + H.secEyebrow + '</p><h2>' + H.secTitle + '</h2><p>' + H.secLead + '</p></div><div class="sectors rv">'
    + H.sectors.map(([ic, n]) => '<span class="sector">' + ICON(ic) + n + '</span>').join('') + '</div></div></section>';
  const feat = (f, href, cls) => '<div class="feature rv' + cls + '"><h3>' + f[0] + '</h3><p>' + f[1] + '</p><div class="kpis">' + f[2].map(k => '<span>' + k + '</span>').join('') + '</div><a class="btn light" href="' + href + '">' + f[3] + ICON('arrow') + '</a></div>';
  h += '<section class="band alt"><div class="wrap"><div class="head rv"><p class="eyebrow">' + H.proofEyebrow + '</p><h2>' + H.proofTitle + '</h2></div><div class="features">'
    + feat(H.lab, '#services', '') + feat(H.campus, 'learning/', ' gold') + '</div></div></section>';
  h += '<section class="band"><div class="wrap"><div class="cta rv"><div><h2>' + H.ctaTitle + '</h2><p>' + H.ctaText + '</p></div><div class="actions"><a class="btn light" href="' + mailHref() + '">' + ICON('mail') + H.ctaMail + '</a><a class="btn outline-light" href="' + telHref() + '">' + ICON('phone') + H.ctaCall + '</a></div></div></div></section>';
  return h;
}
function pageHead(eyebrow, title, lead, actions){
  return '<section class="pagehead"><div class="wrap"><p class="eyebrow">' + eyebrow + '</p><h1>' + title + '</h1>' + (lead ? '<p class="lead">' + lead + '</p>' : '') + (actions ? '<div class="actions">' + actions + '</div>' : '') + '</div></section>';
}
function footerHtml(t){
  const H = HOME[LANG];
  return '<div class="fgrid"><div><p class="brand">Georges Alain Cabo</p><p style="margin:0;max-width:44ch">' + H.foot.about + '</p></div>'
    + '<div><h4>' + H.foot.nav + '</h4><ul>' + SECTIONS.map(k => '<li><a href="' + (k === 'learning' ? 'learning/' : '#' + k) + '">' + t.nav[k] + '</a></li>').join('') + '</ul></div>'
    + '<div><h4>' + H.foot.contact + '</h4><ul>' + contactItems().map(c => '<li>' + (c.href ? '<a href="' + c.href + '"' + (c.type === 'in' ? ' target="_blank" rel="noopener"' : '') + '>' + esc(c.label) + '</a>' : esc(c.label)) + '</li>').join('') + '</ul></div></div>'
    + '<div class="legal">' + H.foot.legal + '</div>';
}
function reveal(){
  const els = document.querySelectorAll('.rv');
  if(!('IntersectionObserver' in window)){ els.forEach(e => e.classList.add('in')); return; }
  const io = new IntersectionObserver(es => es.forEach(e => { if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); } }), {rootMargin:'0px 0px -40px 0px', threshold:.08});
  els.forEach(e => io.observe(e));
}

function pCv(t){
  const c = CV[LANG];
  let h = '<section class="pagehead"><div class="wrap"><div class="cvhead"><img src="' + esc(asset(PROFIL.photo)) + '" alt="' + c.name + '" width="128" height="128"><div><p class="eyebrow">' + t.cvTitle + '</p><h1>' + c.name + '</h1><p class="lead">' + c.role + ' · ' + c.place + '</p></div></div>';
  h += '<div class="actions"><a class="btn light" href="' + cvPdf() + '" download>' + ICON('download') + (LANG === 'en' ? 'Download resume (PDF)' : 'Télécharger le CV (PDF)') + '</a><button class="btn outline-light" type="button" id="printBtn">' + t.print + '</button><a class="btn outline-light" href="#contact">' + HOME[LANG].hire + '</a></div></div></section><div class="page">';
  if(t.cvNote) h += '<div class="note">' + t.cvNote + '</div>';
  h += '<div class="cv"><aside>' + c.side.map(([k, items]) => '<h3>' + k + '</h3><ul>' + items.map(i => '<li>' + i + '</li>').join('') + '</ul>').join('') + '</aside><div>';
  h += '<p class="summary">' + c.summary + '</p><h2>' + c.expTitle + '</h2>';
  c.jobs.forEach(([when, what, items]) => { h += '<div class="job"><div class="when">' + when + '</div><h3>' + what + '</h3><ul>' + items.map(i => '<li>' + i + '</li>').join('') + '</ul></div>'; });
  h += '<h2>' + c.certTitle + '</h2>';
  c.certs.forEach(([g, items, imgs]) => {
    h += '<div class="job"><h3>' + g + '</h3>';
    if(imgs) h += '<div style="display:flex;gap:12px;margin:8px 0">' + imgs.map(n => '<img src="' + esc(asset(n)) + '" alt="" width="88" height="88" style="object-fit:contain">').join('') + '</div>';
    h += '<ul>' + items.map(i => '<li>' + i + '</li>').join('') + '</ul></div>';
  });
  h += '<h2>' + c.eduTitle + '</h2>';
  c.edu.forEach(([when, what]) => { h += '<div class="job"><div class="when">' + when + '</div><h3>' + what + '</h3></div>'; });
  return h + '</div></div></div>';
}
function pTools(t){
  let h = pageHead(t.toolsTitle, t.toolsTitle, LANG === 'en' ? 'Practical tools for risk analysis and audit vocabulary.' : "Des outils pratiques pour l'analyse de risque et le vocabulaire de l'audit.") + '<div class="page">';
  h += '<h2 style="margin-top:0">' + t.aleTitle + '</h2><p>' + t.aleLead + '</p>';
  h += '<form class="calc" id="ale">'
     + '<label>' + t.av + ' (' + t.cur + ')<input type="number" min="0" id="av" value="40000000"></label>'
     + '<label>' + t.ef + '<input type="number" min="0" max="100" id="ef" value="25"></label>'
     + '<label>' + t.aro + '<input type="number" min="0" step="0.01" id="aro" value="0.1"></label>'
     + '<label>' + t.cost + '<input type="number" min="0" id="cost" value=""></label>'
     + '<div class="out" id="aleOut" aria-live="polite"></div></form>';
  h += '<h2>' + t.gloTitle + '</h2>';
  GLOSSARY.forEach(([fr, en, dfr, den]) => {
    const [a, b, d] = LANG === 'fr' ? [fr, en, dfr] : [en, fr, den];
    h += '<details><summary>' + a + ' <span style="color:var(--muted);font-weight:400">· ' + b + '</span></summary><p>' + d + '</p></details>';
  });
  return h + '</div>';
}
function calcAle(){
  const t = T[LANG], v = id => parseFloat(document.getElementById(id).value);
  const sle = v('av') * v('ef') / 100, ale = sle * v('aro'), cost = v('cost');
  let h = t.sle + ' = ' + fmt(sle) + ' ' + t.cur + '<br>' + t.ale + ' = <strong>' + fmt(ale) + '</strong> ' + t.cur + ' / an';
  if(LANG === 'en') h = h.replace(' / an', ' / year');
  if(isFinite(cost) && isFinite(ale)) h += '<br><span style="font-family:var(--body);font-size:.9rem">' + (cost <= ale ? t.worth : t.notWorth) + '</span>';
  document.getElementById('aleOut').innerHTML = h;
}
function pSvc(t){
  const v = t.svc, H = HOME[LANG], icons = ['audit','shield','radar','building','bank'], oic = ['audit','shield','radar','doc','grad'];
  let h = pageHead(v.eyebrow, v.title, v.lead, '<a class="btn light" href="' + mailHref() + '">' + ICON('mail') + v.cta + '</a><a class="btn outline-light" href="#cv">' + t.seeCv + '</a>') + '<div class="page">';
  h += '<h2 style="margin-top:0">' + v.offersTitle + '</h2><div class="grid g3">' + v.offers.map(([n, d, items], i) => '<div class="card offer lift rv"><span class="ic">' + ICON(oic[i] || 'check') + '</span><span class="n">0' + (i + 1) + '</span><h3>' + n + '</h3><span class="d">' + d + '</span><ul class="svc">' + items.map(x => '<li>' + x + '</li>').join('') + '</ul></div>').join('') + '</div>';
  h += '<h2>' + v.skillsTitle + '</h2><div class="grid">' + v.skills.map(([n, d], i) => '<div class="card rv"><span class="ic">' + ICON(icons[i] || 'check') + '</span><h3>' + n + '</h3><span class="d">' + d + '</span></div>').join('') + '</div>';
  h += '<h2>' + v.demoTitle + '</h2><p class="lead">' + v.demoLead + '</p><div class="grid g3">' + v.labs.map(([n, d]) => '<div class="card lift rv"><span class="tag">Wazuh</span><h3>' + n + '</h3><span class="d">' + d + '</span></div>').join('') + '</div><p style="color:var(--muted);font-size:.9rem">' + v.demoNote + '</p>';
  h += '<div class="cta rv" style="margin-top:56px"><div><h2>' + v.ctaTitle + '</h2><p>' + v.ctaText + '</p></div><div class="actions"><a class="btn light" href="' + mailHref() + '">' + ICON('mail') + H.ctaMail + '</a><a class="btn outline-light" href="' + telHref() + '">' + ICON('phone') + H.ctaCall + '</a></div></div>';
  return h + '</div>';
}
function pContact(t){
  const H = HOME[LANG];
  return pageHead(t.contactTitle, t.contactTitle, t.contactLead) + '<div class="page"><div class="contacts">'
    + contactItems().map(c => (c.href ? '<a class="contact rv" href="' + c.href + '"' + (c.type === 'in' ? ' target="_blank" rel="noopener"' : '') + '>' : '<div class="contact rv">') + '<span class="ic">' + ICON(c.type === 'tel' ? 'phone' : c.type) + '</span><span><small>' + H.contactLabels[c.type] + '</small><b>' + esc(c.label) + '</b></span>' + (c.href ? '</a>' : '</div>')).join('')
    + '</div><div class="cta rv"><div><h2>' + H.ctaTitle + '</h2><p>' + H.ctaText + '</p></div><div class="actions"><a class="btn light" href="' + mailHref() + '">' + ICON('mail') + H.ctaMail + '</a><a class="btn outline-light" href="' + cvPdf() + '" download>' + ICON('download') + H.cv + '</a></div></div></div>';
}
function route(){
  const t = T[LANG];
  let s = location.hash.slice(1) || 'accueil';
  if(s === 'learning'){ location.href = 'learning/'; return; }
  if(!SECTIONS.includes(s)){ location.replace('learning/#' + s); return; }
  document.documentElement.lang = LANG;
  document.title = t.title;
  document.getElementById('nav').innerHTML = SECTIONS.map(k => '<a href="' + (k === 'learning' ? 'learning/' : '#' + k) + '"' + (k === s ? ' class="active" aria-current="page"' : '') + '>' + t.nav[k] + '</a>').join('');
  document.querySelectorAll('[data-lang]').forEach(b => b.setAttribute('aria-pressed', b.dataset.lang === LANG));
  const page = document.getElementById('page');
  page.innerHTML = s === 'cv' ? pCv(t) : s === 'services' ? pSvc(t) : s === 'outils' ? pTools(t) : s === 'contact' ? pContact(t) : pHome(t);
  document.getElementById('foot').innerHTML = footerHtml(t);
  document.getElementById('hire').textContent = HOME[LANG].hire;
  const top = document.getElementById('top'), mb = document.getElementById('menuBtn');
  top.classList.remove('open'); mb.setAttribute('aria-expanded', 'false'); mb.innerHTML = ICON('menu');
  reveal();
  if(s === 'outils'){ const f = document.getElementById('ale'); f.addEventListener('input', calcAle); f.addEventListener('submit', ev => ev.preventDefault()); calcAle(); }
  const pb = document.getElementById('printBtn'); if(pb) pb.addEventListener('click', () => window.print());
  window.scrollTo(0, 0);
}
document.querySelectorAll('[data-lang]').forEach(b => b.addEventListener('click', () => { LANG = b.dataset.lang; store.set('lang', LANG); route(); }));
window.addEventListener('hashchange', route);
document.getElementById('menuBtn').addEventListener('click', () => { const top = document.getElementById('top'), o = top.classList.toggle('open'), mb = document.getElementById('menuBtn'); mb.setAttribute('aria-expanded', o); mb.innerHTML = ICON(o ? 'close' : 'menu'); });
loadData().then(route).catch(err => { document.getElementById('page').innerHTML = '<div class="page"><h1>Oups</h1><p>Le contenu n\'a pas pu être chargé (' + esc(err.message) + '). Recharge la page.</p></div>'; });
