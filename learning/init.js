window.CERTS=[];window.CATALOG=[];window.CATEGORIES=[];
/* SIG(rubrique, liste) : dictionnaire des sigles [sigle, forme développée, définition, exemple]. « A / B » crée deux entrées liées ; 5e élément facultatif : autres graphies. */
window.SIGLES={};window.SIGCATS=[];
window.SIG=function(cat, list){ let c = SIGCATS.find(x => x.title === cat); if(!c){ c = {title:cat, items:[]}; SIGCATS.push(c); }
  list.forEach(r => { const e = {s:r[0], f:r[1], d:r[2], x:r[3], cat:cat}; c.items.push(e); r[0].split(' / ').concat(r[4] || []).forEach(k => { SIGLES[k.trim()] = e; }); }); };
/* SIGEN(liste) : version anglaise d'une fiche [clé, full form, definition, example, sigle anglais facultatif]. Le sigle anglais devient aussi une clé reconnue dans le texte. */
window.SIGEN=function(list){ list.forEach(r => { const e = SIGLES[r[0]] || SIGLES[r[0].split(' / ')[0].trim()]; if(!e){ console.warn('SIGEN: unknown key', r[0]); return; } e.en = {f:r[1], d:r[2], x:r[3]}; if(r[4]){ e.en.s = r[4] + ' (' + e.s + ')'; const m = r[1].match(/^(.+?) \((?:French for )?(.+?)(?:, [A-Z][A-Za-z\/]*)?\)$/); e.en.fa = m ? m[2] + '; in French ' + e.s + ', ' + m[1] : r[1]; e.en.al = []; r[4].split(' / ').forEach(k => { k = k.trim(); if(!SIGLES[k]){ SIGLES[k] = e; e.en.al.push(k); } }); } }); };
/* SIGK({clé:[fr, en]}) : forme développée propre à un sigle d'une fiche groupée (IaaS / PaaS / SaaS…). */
window.SIGK=function(map){ Object.keys(map).forEach(k => { const e = SIGLES[k]; if(!e){ console.warn('SIGK: unknown key', k); return; } (e.kf = e.kf || {})[k] = map[k]; }); };
window.SIGCATEN={"Cybersécurité, réseaux et systèmes":"Cybersecurity, networks and systems","Audit, normes, organismes et certifications":"Audit, standards, bodies and certifications","Comptabilité et finance":"Accounting and finance","Banque et monnaie électronique":"Banking and electronic money","Assurance, télécoms et pétrole":"Insurance, telecoms and oil"};
/* WHY(id, liste) : pour chaque question (dans l'ordre), explications des mauvaises réponses dans l'ordre des options, sans la bonne. en=true pour la version anglaise. */
window.WHY=function(id, list, en){ const c = CERTS.find(x => x.id === id); if(!c) return; const qs = en ? c.enQuestions : c.questions; if(!qs) return;
  list.forEach((w, i) => { const q = c.questions[i], t = qs[i]; if(!q || !t || !w) return; const full = w.slice(); full.splice(q.a, 0, ''); if(full.length !== q.o.length) console.error('WHY', id, i); t.w = full; }); };
/* PAS(id, liste) : complète chaque module (dans l'ordre) par un parcours débutant : vocabulaire, exemple, méthode, exercices, pièges. */
window.PAS=function(id, list, en){ const c = CERTS.find(x => x.id === id); if(!c) return;
  const L = en ? ['Step by step for beginners','Key terms','A concrete example','The method, step by step','Practice','Worked exercise: ','Exam traps']
               : ['Pas à pas pour débutant','Les mots à connaître','Un exemple concret','La méthode, étape par étape','Entraîne-toi','Exercice corrigé : ','Pièges à l\'examen'];
  list.forEach((b, i) => { const m = c.modules[i]; if(!m || !b) return; let h = '<section class="pas"><h2>' + L[0] + '</h2>';
    if(b.voc) h += '<h3>' + L[1] + '</h3><dl class="voc">' + b.voc.map(v => '<dt>' + v[0] + '</dt><dd>' + v[1] + '</dd>').join('') + '</dl>';
    if(b.ex) h += '<h3>' + L[2] + '</h3>' + b.ex;
    if(b.steps) h += '<h3>' + L[3] + '</h3><ol>' + b.steps.map(s => '<li>' + s + '</li>').join('') + '</ol>';
    if(b.exo) h += '<h3>' + L[4] + '</h3>' + b.exo.map(x => '<details><summary>' + L[5] + x[0] + '</summary>' + x[1] + '</details>').join('');
    if(b.piege) h += '<div class="box tip"><h4>' + L[6] + '</h4><ul>' + b.piege.map(p => '<li>' + p + '</li>').join('') + '</ul></div>';
    if(en) m.pasEn = h + '</section>'; else m.pas = h + '</section>'; }); };
