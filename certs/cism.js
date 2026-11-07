/* ISACA CISM : cours. Contenu original rédigé pour la révision ; il ne reproduit pas le manuel officiel ISACA. */
(function(){
const T = (head, rows) => '<div class="tablewrap"><table><thead><tr>' + head.map(h => '<th>' + h + '</th>').join('') + '</tr></thead><tbody>' + rows.map(r => '<tr>' + r.map(c => '<td>' + c + '</td>').join('') + '</tr>').join('') + '</tbody></table></div>';
const D = (n, name, w) => '<p class="eyebrow">Domaine ' + n + ' · ' + name + ' · ' + w + ' % de l\'examen</p>';

const modules = [
{ id:"g1", day:"Domaine 1", title:"Gouvernance : culture, stratégie et rôles", html: D(1,"Gouvernance de la sécurité de l'information",17) + `
<p class="lead">Le CISM forme des managers. La bonne réponse est presque toujours celle qui sert les objectifs métier, avec le soutien de la direction, et non la meilleure solution technique.</p>
<h2>Pourquoi gouverner la sécurité</h2>
<p>La gouvernance de la sécurité fait partie de la gouvernance d'entreprise. Ses résultats attendus : <b>alignement stratégique</b> avec l'activité, <b>gestion des risques</b> à un niveau acceptable, <b>création de valeur</b> (investissements optimisés), <b>gestion des ressources</b>, <b>mesure de la performance</b> et <b>intégration</b> des fonctions d'assurance (audit, juridique, RH, risques, continuité).</p>
<h2>Culture de sécurité</h2>
<p>Une culture saine se voit quand les employés signalent les incidents, appliquent les règles sans contrainte permanente et que la sécurité est prise en compte dans les projets dès le début. Elle se construit par l'exemple de la direction, la sensibilisation, la communication et la responsabilisation.</p>
<h2>Les rôles</h2>
${T(["Acteur","Rôle"],[
["Conseil d'administration","Responsable final ; fixe l'appétit pour le risque, surveille"],
["Direction générale","Approuve la stratégie et les ressources, donne l'exemple"],
["Comité de pilotage sécurité","Représentants des métiers ; arbitrages, priorités, alignement"],
["RSSI / responsable de la sécurité","Élabore et pilote le programme, conseille la direction"],
["Propriétaires des informations et des risques","Décident de la classification et de l'acceptation des risques"],
["Dépositaires (IT)","Mettent en œuvre les mesures"],
["Utilisateurs","Appliquent les politiques"]])}
<div class="box key"><h4>Qui accepte le risque ?</h4><p>Le propriétaire du risque, en général un responsable métier, dans la limite de l'appétit fixé par la direction. Jamais le RSSI seul : il conseille et rend visible le risque.</p></div>
<h2>La stratégie de sécurité</h2>
<ol><li>Comprendre la stratégie, les objectifs et la culture de l'entreprise.</li><li>Évaluer l'<b>état actuel</b> (maturité, risques, contrôles).</li><li>Définir l'<b>état cible</b> en lien avec les objectifs métier et l'appétit pour le risque.</li><li>Analyser l'écart et bâtir une <b>feuille de route</b>.</li><li>Obtenir l'approbation et les ressources.</li></ol>
<p>Contraintes à prendre en compte : lois et règlements, culture, budget, compétences, temps, technologies existantes. Outils : modèles de maturité (CMMI, COBIT), tableaux de bord prospectifs, architecture d'entreprise (SABSA, TOGAF).</p>
`},

{ id:"g2", day:"Domaine 1", title:"Gouvernance : politiques, cadres et indicateurs", html: D(1,"Gouvernance de la sécurité de l'information",17) + `
<h2>La pyramide documentaire</h2>
${T(["Niveau","Contenu","Change souvent ?"],[["Politique","Intention et règles générales de la direction","Rarement"],["Normes (standards)","Exigences obligatoires précises (longueur de mot de passe, algorithmes)","Parfois"],["Procédures","Étapes détaillées","Souvent"],["Lignes directrices","Conseils non obligatoires","Souvent"]])}
<p>Une politique doit être courte, approuvée par la direction, communiquée, revue périodiquement et appuyée par des normes et procédures.</p>
<h2>Cadres de référence</h2>
<p>COBIT 2019, ISO/IEC 27001 et 27002, NIST CSF 2.0, NIST SP 800-53, CIS Controls. Choisir un cadre adapté au secteur et aux exigences réglementaires, puis l'adapter à l'entreprise.</p>
<h2>Obligations légales et contractuelles</h2>
<p>Protection des données personnelles, règles sectorielles (banques, télécoms, santé), notification des incidents, conservation des données, contrats clients. Le juridique et la conformité sont des partenaires du RSSI.</p>
<h2>Les indicateurs pour la direction</h2>
<p>La direction veut savoir si les risques sont maîtrisés et si l'argent est bien dépensé. Les bons indicateurs sont liés aux objectifs métier.</p>
${T(["Type","Exemple"],[["KGI (but)","Aucun arrêt du service de paiement mobile supérieur à 4 h"],["KPI (performance)","95 % des correctifs critiques appliqués sous 15 jours"],["KRI (risque)","Nombre de comptes à privilèges sans MFA"]])}
<div class="box tip"><h4>Piège classique</h4><p>Le nombre de virus bloqués ou de paquets filtrés n'intéresse pas un conseil d'administration. Préfère des indicateurs qui parlent d'impact métier et de niveau de risque.</p></div>
<h2>Business case de la sécurité</h2>
<p>Présenter un investissement de sécurité en termes de réduction de risque, de conformité, de continuité et de rentabilité (ROSI, coût total), pas en termes techniques.</p>
`},

{ id:"g3", day:"Domaine 2", title:"Appréciation des risques", html: D(2,"Gestion des risques de sécurité de l'information",20) + `
<h2>Le cadre de gestion des risques</h2>
<p>Établir le contexte, identifier, analyser, évaluer, traiter, surveiller, communiquer. Références : ISO 31000, ISO/IEC 27005, NIST SP 800-30 et 800-37, COBIT et Risk IT.</p>
<h2>Appétit, tolérance et capacité</h2>
${T(["Notion","Sens"],[["Appétit pour le risque","Niveau de risque que l'entreprise accepte pour atteindre ses objectifs"],["Tolérance","Écart acceptable autour de l'appétit"],["Capacité","Risque maximal que l'entreprise peut supporter sans mettre sa survie en jeu"]])}
<h2>Identifier les risques</h2>
<p>Actifs et leur valeur, menaces (internes, externes, naturelles, techniques), vulnérabilités, scénarios de risque. Sources : inventaires, BIA, audits, renseignement sur les menaces, incidents passés, tests.</p>
<h2>Analyser et évaluer</h2>
<p>Qualitative (échelles), semi-quantitative, quantitative (ALE = SLE × ARO). Le <b>registre des risques</b> rassemble pour chaque risque : description, propriétaire, niveau inhérent, contrôles, niveau résiduel, décision de traitement, échéances.</p>
<div class="box key"><h4>Risque inhérent et résiduel</h4><p>Inhérent : avant les contrôles. Résiduel : après. Si le résiduel dépasse l'appétit, il faut un traitement supplémentaire ou une acceptation formelle par le niveau de direction adéquat.</p></div>
<h2>Évaluer la valeur des actifs</h2>
<p>La valeur d'un actif informationnel dépend de l'impact de sa perte sur l'activité (chiffre d'affaires, réputation, sanctions), pas du prix du matériel. C'est la <b>BIA</b> qui la mesure le mieux.</p>
`},

{ id:"g4", day:"Domaine 2", title:"Traitement et suivi des risques", html: D(2,"Gestion des risques de sécurité de l'information",20) + `
<h2>Les options</h2>
${T(["Option","Exemple"],[["Atténuer","Ajouter le MFA"],["Transférer / partager","Assurance, externalisation avec clauses"],["Éviter","Arrêter un service trop risqué"],["Accepter","Décision formelle du propriétaire du risque, documentée et revue"]])}
<p>Choisir le traitement qui ramène le risque dans l'appétit au coût le plus raisonnable. Le coût d'un contrôle ne doit pas dépasser la valeur qu'il protège.</p>
<h2>Choisir les contrôles</h2>
<p>Préventifs, détectifs, correctifs, compensatoires, dissuasifs ; techniques, administratifs, physiques. Viser la <b>défense en profondeur</b>. Tenir compte de l'impact sur l'activité et de l'acceptation par les utilisateurs.</p>
<h2>Risques liés aux tiers</h2>
<p>Évaluer avant de contracter, exiger des clauses de sécurité et un droit d'audit, surveiller pendant le contrat (rapports SOC 2, questionnaires, indicateurs), prévoir la fin du contrat (restitution et destruction des données).</p>
<h2>Surveillance et communication</h2>
<ul><li>Revoir les risques régulièrement et lors de tout changement important (nouveau projet, fusion, nouvelle réglementation).</li><li>Suivre les KRI et alerter quand un seuil est dépassé.</li><li>Rendre compte à la direction sous une forme compréhensible : cartographie des risques, tendances, décisions attendues.</li></ul>
<h2>Gestion des risques dans les projets et les changements</h2>
<p>Intégrer la sécurité dans le cycle de vie des projets, des achats et des changements, pour éviter de corriger après coup.</p>
`},

{ id:"g5", day:"Domaine 3", title:"Construire le programme de sécurité", html: D(3,"Programme de sécurité de l'information",33) + `
<p class="lead">C'est le plus gros domaine. Le programme transforme la stratégie en actions concrètes et mesurables.</p>
<h2>Les éléments du programme</h2>
<ul><li>Charte ou mandat du programme, approuvé par la direction.</li><li>Feuille de route issue de la stratégie.</li><li>Ressources : budget, personnel, compétences, outils, prestataires.</li><li>Cadre de contrôles et architecture de sécurité.</li><li>Politiques, normes, procédures.</li><li>Gestion des actifs et classification.</li><li>Sensibilisation et formation.</li><li>Gestion des identités et des accès.</li><li>Gestion des vulnérabilités et des correctifs.</li><li>Sécurité des opérations, des réseaux et du cloud.</li><li>Gestion des tiers.</li><li>Réponse aux incidents et continuité.</li><li>Indicateurs et rapports.</li></ul>
<h2>Gestion des actifs et classification</h2>
<p>Inventaire des actifs informationnels avec un propriétaire, classification selon l'impact (confidentialité, intégrité, disponibilité), règles de manipulation pour chaque niveau. Sans inventaire, on ne peut pas protéger ce qu'on ne connaît pas.</p>
<h2>Architecture de sécurité</h2>
<p>Défense en profondeur, Zero Trust, segmentation, sécurité dès la conception (security by design), principes de moindre privilège et de séparation des tâches.</p>
<h2>Intégration avec les autres fonctions</h2>
<p>RH (arrivées, départs, sanctions), achats (clauses fournisseurs), juridique, gestion des changements, gestion de projets, audit interne, gestion des risques d'entreprise, continuité d'activité.</p>
`},

{ id:"g6", day:"Domaine 3", title:"Gérer le programme : ressources, sensibilisation et mesure", html: D(3,"Programme de sécurité de l'information",33) + `
<h2>Budget et ressources</h2>
<p>Justifier le budget par les risques et les objectifs métier. Arbitrer entre ressources internes et externalisées. Suivre le coût total des contrôles.</p>
<h2>Sensibilisation et formation</h2>
${T(["Public","Contenu"],[["Tous les employés","Hameçonnage, mots de passe, signalement, classification"],["Managers","Responsabilités, gestion des accès de l'équipe, risques métier"],["IT et développeurs","Codage sécurisé, durcissement, gestion des changements"],["Direction","Risques stratégiques, rôle dans la crise"]])}
<p>Mesurer l'efficacité : taux de clic aux campagnes simulées, taux de signalement, résultats des quiz, incidents liés à l'erreur humaine.</p>
<h2>Gestion des tiers et du cloud</h2>
<p>Due diligence avant contrat, clauses (sécurité, audit, notification des incidents, localisation, réversibilité), surveillance continue, responsabilité partagée dans le cloud.</p>
<h2>Mesurer le programme</h2>
<ul><li>Indicateurs de conformité aux politiques.</li><li>Indicateurs de maturité (progression vers l'état cible).</li><li>Indicateurs de risque (KRI).</li><li>Indicateurs opérationnels (délai de correction, couverture EDR).</li><li>Résultats d'audits et de tests.</li></ul>
<p>Rapporter à la direction ce qui l'aide à décider ; garder les indicateurs techniques pour les équipes.</p>
<h2>Gérer les exceptions</h2>
<p>Une dérogation à une politique doit être demandée, justifiée par le métier, évaluée en risque, approuvée par le propriétaire du risque, limitée dans le temps et revue.</p>
`},

{ id:"g7", day:"Domaine 4", title:"Préparer la gestion des incidents et la continuité", html: D(4,"Gestion des incidents",30) + `
<h2>Les plans</h2>
${T(["Plan","Objet"],[["Plan de réponse aux incidents (IRP)","Détecter, contenir, éradiquer, rétablir après un incident de sécurité"],["Plan de continuité d'activité (PCA)","Maintenir les processus métier critiques"],["Plan de reprise informatique (PRA)","Restaurer les systèmes et les données"],["Plan de communication de crise","Messages internes, clients, régulateur, presse"]])}
<p>Tous s'appuient sur la <b>BIA</b> qui fixe la criticité, le RTO, le RPO et le niveau de service minimal (SDO).</p>
<h2>Construire la capacité de réponse</h2>
<ul><li>Mandat approuvé par la direction et définition de ce qu'est un incident.</li><li>Équipe de réponse (CSIRT) avec rôles clairs, y compris juridique, communication, RH, métiers.</li><li>Classification et priorisation selon l'impact métier.</li><li>Procédures d'escalade et de notification (régulateur, clients, CERT national).</li><li>Outils : SIEM, EDR, outils d'investigation, contacts hors bande.</li><li>Contrats avec des prestataires de réponse et assurance.</li></ul>
<h2>Tester</h2>
<p>Revue documentaire, exercice sur table, simulation, test parallèle, test d'interruption complète. Les résultats des tests alimentent l'amélioration des plans.</p>
<div class="box key"><h4>Le facteur décisif</h4><p>Un plan d'incident efficace est approuvé par la direction, connu des personnes concernées, testé régulièrement et mis à jour après chaque test et chaque incident.</p></div>
`},

{ id:"g8", day:"Domaine 4", title:"Répondre aux incidents et en tirer les leçons", html: D(4,"Gestion des incidents",30) + `
<h2>Le cycle de réponse</h2>
<ol><li><b>Préparation</b>.</li><li><b>Détection et identification</b> : qualifier l'événement, déterminer s'il s'agit d'un incident et sa gravité.</li><li><b>Confinement</b> : limiter les dégâts en préservant les preuves.</li><li><b>Éradication</b> : supprimer la cause.</li><li><b>Rétablissement</b> : remettre en service selon les priorités métier et surveiller.</li><li><b>Retour d'expérience</b> : causes, efficacité de la réponse, améliorations.</li></ol>
<h2>Escalade et communication</h2>
<p>Suivre la matrice d'escalade selon la gravité. Informer la direction tôt pour les incidents graves. Les communications externes passent par les personnes désignées (communication, juridique). Respecter les délais de notification légaux.</p>
<h2>Preuves et aspects juridiques</h2>
<p>Préserver les preuves (chaîne de possession, copies bit à bit, hachage), impliquer le juridique avant de contacter les forces de l'ordre, documenter toutes les actions et décisions.</p>
<h2>Après l'incident</h2>
<ul><li>Analyse des causes racines.</li><li>Mise à jour des risques, des contrôles et des plans.</li><li>Rapport à la direction : impact, coût, décisions nécessaires.</li><li>Suivi des actions jusqu'à leur clôture.</li></ul>
<div class="box tip"><h4>Pièges classiques</h4><ul><li>Le premier objectif d'une réponse est de limiter l'impact sur l'activité, pas de trouver le coupable.</li><li>Rétablir avant d'avoir éradiqué la cause expose à une réinfection.</li><li>La priorité de reprise suit la criticité métier définie dans la BIA.</li></ul></div>
`}
];

const exam = `
<p class="lead">Le CISM (Certified Information Security Manager) d'ISACA s'adresse à ceux qui pilotent la sécurité : RSSI, responsables sécurité, consultants en gouvernance. Vérifie les informations à jour sur isaca.org avant de t'inscrire.</p>
<div class="grid">
<div class="card"><span class="stat">150</span><span class="t">questions à choix multiple</span><span class="d">4 réponses, une seule bonne</span></div>
<div class="card"><span class="stat">4 h</span><span class="t">de durée</span><span class="d">Environ 1 minute 30 par question</span></div>
<div class="card"><span class="stat">450</span><span class="t">sur 800 pour réussir</span><span class="d">Score pondéré de 200 à 800</span></div>
</div>
<p>Examen en centre PSI ou en ligne surveillé, proposé en plusieurs langues. Vise au moins 75 % aux examens blancs de ce site pour avoir de la marge.</p>
<h2>Les 4 domaines</h2>
<div class="tablewrap"><table><thead><tr><th>Domaine</th><th>Poids</th><th>Modules</th></tr></thead><tbody>
<tr><td>1. Gouvernance de la sécurité de l'information</td><td class="num">17 %</td><td>1, 2</td></tr>
<tr><td>2. Gestion des risques de sécurité de l'information</td><td class="num">20 %</td><td>3, 4</td></tr>
<tr><td>3. Programme de sécurité de l'information</td><td class="num">33 %</td><td>5, 6</td></tr>
<tr><td>4. Gestion des incidents</td><td class="num">30 %</td><td>7, 8</td></tr>
</tbody></table></div>
<h2>Après l'examen</h2>
<p>Pour obtenir le titre : <b>5 ans d'expérience</b> en sécurité de l'information, dont 3 ans en management de la sécurité, acquis dans les 10 ans précédant la demande. Certaines certifications ou diplômes donnent jusqu'à 2 ans d'équivalence. Le maintien exige 20 CPE par an, 120 sur 3 ans, et une cotisation annuelle.</p>
<h2>Penser comme un manager CISM</h2>
<ol><li>Les objectifs métier passent avant la technique.</li><li>Le soutien de la direction est la condition de réussite de tout programme.</li><li>Le propriétaire du risque décide ; le responsable sécurité conseille.</li><li>Avant d'agir, on évalue : BIA, appréciation des risques, analyse d'écart.</li><li>Entre plusieurs bonnes réponses, choisis celle qui est la plus stratégique et la plus durable.</li></ol>
<h2>Plan de révision sur 6 semaines</h2>
<div class="tablewrap"><table><thead><tr><th>Semaine</th><th>Travail</th></tr></thead><tbody>
<tr><td>1</td><td>Modules 1 et 2</td></tr><tr><td>2</td><td>Modules 3 et 4</td></tr><tr><td>3</td><td>Modules 5 et 6</td></tr><tr><td>4</td><td>Modules 7 et 8</td></tr><tr><td>5 et 6</td><td>Examens blancs, banque officielle ISACA (QAE), révision des erreurs</td></tr>
</tbody></table></div>
`;

CERTS.push({
  id:"cism", title:"CISM", org:"ISACA",
  intro:"La certification des managers de la sécurité : gouvernance, gestion des risques, programme de sécurité et gestion des incidents, vus du côté de la direction.",
  examMinutes:240, examQuestions:150, passMark:75,
  modules, exam, questions:[]
});
})();
