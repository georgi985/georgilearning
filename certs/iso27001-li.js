/* ISO/IEC 27001 Lead Implementer (PECB) : cours.
   Contenu original rédigé pour la révision. Il ne reproduit ni le texte de la norme ni les supports PECB :
   les exigences sont reformulées et citées par numéro de clause. Gardez la norme officielle à portée de main. */
(function(){
const C = s => '<span class="clause">' + s + '</span>';
const N = '<span class="new">nouveau 2022</span>';

/* Annexe A de l'ISO/IEC 27001:2022 : numéro, intitulé reformulé, idée clé, nouveau ? */
const annexA = [
["5.1","Politiques de sécurité de l'information","Politique générale + politiques thématiques, approuvées et revues"],
["5.2","Rôles et responsabilités en sécurité","Qui fait quoi, formalisé et attribué"],
["5.3","Séparation des tâches","Éviter qu'une seule personne contrôle tout un processus sensible"],
["5.4","Responsabilités de la direction","Les managers exigent l'application des règles"],
["5.5","Relations avec les autorités","Contacts établis (police, régulateur, CERT national)"],
["5.6","Relations avec des groupes d'intérêt","Forums, associations, CERT sectoriels"],
["5.7","Renseignement sur les menaces","Collecter et analyser l'information sur les menaces",1],
["5.8","Sécurité dans la gestion de projet","Exigences de sécurité dès le lancement de chaque projet"],
["5.9","Inventaire des informations et actifs associés","Inventaire tenu à jour avec un propriétaire"],
["5.10","Utilisation acceptable des actifs","Charte d'utilisation"],
["5.11","Restitution des actifs","Récupérer matériel et badges au départ"],
["5.12","Classification de l'information","Niveaux selon les besoins C, I, D et les exigences légales"],
["5.13","Marquage de l'information","Étiqueter selon le schéma de classification"],
["5.14","Transfert de l'information","Règles pour tout transfert : courriel, support, oral"],
["5.15","Contrôle d'accès","Politique fondée sur le besoin d'en connaître"],
["5.16","Gestion des identités","Cycle de vie complet des identités"],
["5.17","Informations d'authentification","Attribution et gestion des secrets (mots de passe…)"],
["5.18","Droits d'accès","Attribution, revue périodique, retrait"],
["5.19","Sécurité dans les relations fournisseurs","Gérer les risques liés aux fournisseurs"],
["5.20","Sécurité dans les accords fournisseurs","Clauses de sécurité dans les contrats"],
["5.21","Chaîne d'approvisionnement TIC","Risques des produits et services TIC en cascade"],
["5.22","Surveillance des services fournisseurs","Suivi, revue et gestion des changements des prestations"],
["5.23","Sécurité des services cloud","Acquisition, utilisation, gestion et sortie du cloud",1],
["5.24","Planification de la gestion des incidents","Processus, rôles, procédures prêts à l'avance"],
["5.25","Appréciation des événements","Décider si un événement est un incident"],
["5.26","Réponse aux incidents","Traiter selon les procédures documentées"],
["5.27","Tirer les leçons des incidents","Retour d'expérience pour renforcer les mesures"],
["5.28","Collecte de preuves","Identifier, recueillir et préserver les preuves"],
["5.29","Sécurité pendant une perturbation","Maintenir la sécurité en situation de crise"],
["5.30","Préparation des TIC à la continuité","Les TIC prêtes selon les objectifs de continuité",1],
["5.31","Exigences légales et contractuelles","Identifier et tenir à jour les obligations"],
["5.32","Droits de propriété intellectuelle","Licences, droits d'auteur"],
["5.33","Protection des enregistrements","Contre perte, destruction, falsification"],
["5.34","Vie privée et données personnelles","Respect des lois sur les données personnelles"],
["5.35","Revue indépendante de la sécurité","Revue indépendante planifiée ou lors de changements majeurs"],
["5.36","Conformité aux politiques et normes","Vérifier régulièrement l'application"],
["5.37","Procédures d'exploitation documentées","Procédures écrites et accessibles"],
["6.1","Sélection des candidats","Vérification des antécédents avant embauche"],
["6.2","Conditions d'emploi","Responsabilités sécurité dans le contrat"],
["6.3","Sensibilisation, éducation, formation","Programme adapté aux rôles"],
["6.4","Processus disciplinaire","Formalisé et communiqué"],
["6.5","Responsabilités après départ ou mutation","Obligations qui restent valables après le départ"],
["6.6","Accords de confidentialité","NDA identifiés, signés, revus"],
["6.7","Travail à distance","Mesures pour le télétravail"],
["6.8","Signalement des événements","Canal simple et connu de tous"],
["7.1","Périmètres de sécurité physique","Zones définies et protégées"],
["7.2","Contrôles d'accès physique","Entrées contrôlées"],
["7.3","Sécurisation des bureaux et locaux","Conception sécurisée des locaux"],
["7.4","Surveillance de la sécurité physique","Détection d'intrusion, vidéosurveillance",1],
["7.5","Menaces physiques et environnementales","Incendie, inondation, séisme…"],
["7.6","Travail en zones sécurisées","Règles propres aux zones sensibles"],
["7.7","Bureau propre et écran verrouillé","Rien de sensible laissé visible"],
["7.8","Emplacement et protection du matériel","Implantation sûre des équipements"],
["7.9","Actifs hors des locaux","Portables et matériel en déplacement"],
["7.10","Supports de stockage","Cycle de vie : usage, transport, destruction"],
["7.11","Services généraux","Électricité, climatisation, télécoms"],
["7.12","Sécurité du câblage","Protection des câbles électriques et réseau"],
["7.13","Maintenance du matériel","Maintenance correcte et maîtrisée"],
["7.14","Mise au rebut ou réutilisation","Effacement sûr avant élimination"],
["8.1","Terminaux utilisateurs","Protection des postes et mobiles"],
["8.2","Droits d'accès à privilèges","Restreints et gérés"],
["8.3","Restriction d'accès à l'information","Selon la politique de contrôle d'accès"],
["8.4","Accès au code source","Lecture et écriture contrôlées"],
["8.5","Authentification sécurisée","MFA, verrouillage, etc. selon le risque"],
["8.6","Dimensionnement","Capacités surveillées et anticipées"],
["8.7","Protection contre les logiciels malveillants","Antimalware + sensibilisation"],
["8.8","Vulnérabilités techniques","Veille, évaluation, correctifs"],
["8.9","Gestion des configurations","Configurations de référence établies et surveillées",1],
["8.10","Suppression de l'information","Supprimer quand ce n'est plus nécessaire",1],
["8.11","Masquage des données","Pseudonymisation, anonymisation, masquage",1],
["8.12","Prévention des fuites de données","DLP sur systèmes, réseaux, terminaux",1],
["8.13","Sauvegarde de l'information","Copies testées selon une politique"],
["8.14","Redondance des moyens de traitement","Disponibilité suffisante"],
["8.15","Journalisation","Journaux produits, protégés, analysés"],
["8.16","Activités de surveillance","Détecter les comportements anormaux",1],
["8.17","Synchronisation des horloges","Source de temps commune"],
["8.18","Programmes utilitaires à privilèges","Usage restreint et contrôlé"],
["8.19","Installation de logiciels en production","Procédures maîtrisées"],
["8.20","Sécurité des réseaux","Réseaux protégés et gérés"],
["8.21","Sécurité des services réseau","Exigences pour les services réseau"],
["8.22","Cloisonnement des réseaux","Segmentation"],
["8.23","Filtrage web","Bloquer les sites malveillants",1],
["8.24","Usage de la cryptographie","Règles et gestion des clés"],
["8.25","Cycle de développement sécurisé","Sécurité à chaque étape du développement"],
["8.26","Exigences de sécurité des applications","Définies avant le développement ou l'achat"],
["8.27","Architecture et ingénierie sécurisées","Principes appliqués aux systèmes"],
["8.28","Codage sécurisé","Bonnes pratiques de programmation",1],
["8.29","Tests de sécurité","Pendant le développement et la recette"],
["8.30","Développement externalisé","Encadrer et surveiller le prestataire"],
["8.31","Séparation des environnements","Développement, test, production séparés"],
["8.32","Gestion des changements","Changements soumis à une procédure"],
["8.33","Informations de test","Choisir et protéger les données de test"],
["8.34","Protection pendant les tests d'audit","Planifier les tests d'audit pour ne pas perturber"]
];

function annexTable(prefix){
  const rows = annexA.filter(r => r[0].split('.')[0] === prefix)
    .map(r => '<tr><td class="num">A.' + r[0] + '</td><td>' + r[1] + (r[3] ? N : '') + '</td><td>' + r[2] + '</td></tr>').join('');
  return '<div class="tablewrap"><table><thead><tr><th>Mesure</th><th>Intitulé (reformulé)</th><th>Idée clé</th></tr></thead><tbody>' + rows + '</tbody></table></div>';
}

const modules = [
{ id:"m1", day:"Jour 1", title:"Fondamentaux de la sécurité de l'information", html:`
<p class="lead">Avant de mettre en œuvre un SMSI, il faut parler le même langage que la norme et que l'examinateur. Ce module pose le vocabulaire.</p>
<h2>La triade CID</h2>
<div class="tablewrap"><table><thead><tr><th>Propriété</th><th>Définition simple</th><th>Exemple d'atteinte</th></tr></thead><tbody>
<tr><td><b>Confidentialité</b></td><td>L'information n'est accessible qu'aux personnes, entités ou processus autorisés.</td><td>Fuite de la base clients d'une banque.</td></tr>
<tr><td><b>Intégrité</b></td><td>L'information est exacte et complète, et n'a pas été modifiée sans autorisation.</td><td>Un RIB fournisseur modifié dans l'ERP.</td></tr>
<tr><td><b>Disponibilité</b></td><td>L'information est accessible et utilisable quand une entité autorisée en a besoin.</td><td>Rançongiciel qui bloque la facturation.</td></tr>
</tbody></table></div>
<p>On ajoute souvent l'authenticité, la non-répudiation, la responsabilité (imputabilité) et la fiabilité. La norme ISO/IEC 27000 donne les définitions de référence.</p>
<h2>Vocabulaire du risque</h2>
<ul>
<li><b>Actif</b> : tout ce qui a de la valeur pour l'organisme (information, logiciel, matériel, personnes, réputation…). La version 2022 parle d'« informations et autres actifs associés ».</li>
<li><b>Menace</b> : cause potentielle d'un incident (pirate, incendie, erreur humaine).</li>
<li><b>Vulnérabilité</b> : faiblesse d'un actif ou d'une mesure qu'une menace peut exploiter (correctif absent, mot de passe faible).</li>
<li><b>Risque</b> : effet de l'incertitude sur les objectifs. En pratique : combinaison de la vraisemblance d'un événement et de ses conséquences.</li>
<li><b>Mesure de sécurité</b> (contrôle) : moyen qui maintient ou modifie le risque. Elle peut être préventive, détective ou corrective.</li>
<li><b>Événement</b> de sécurité : occurrence qui indique une possible violation. <b>Incident</b> : un ou plusieurs événements indésirables avec une probabilité importante de compromettre l'activité.</li>
<li><b>Risque résiduel</b> : risque qui reste après traitement.</li>
</ul>
<div class="box key"><h4>Retenir pour l'examen</h4><p>Menace + vulnérabilité + actif = scénario de risque. La mesure agit sur la vraisemblance (préventive), sur la détection (détective) ou sur l'impact (corrective).</p></div>
<h2>Types de mesures</h2>
<div class="tablewrap"><table><thead><tr><th>Par nature</th><th>Exemples</th></tr></thead><tbody>
<tr><td>Organisationnelles / administratives</td><td>Politiques, procédures, revues des droits, contrats</td></tr>
<tr><td>Techniques</td><td>Pare-feu, chiffrement, MFA, journalisation</td></tr>
<tr><td>Physiques</td><td>Badges, vidéosurveillance, salle serveur fermée</td></tr>
<tr><td>Liées aux personnes</td><td>Sélection des candidats, sensibilisation, NDA</td></tr>
<tr><td>Juridiques</td><td>Clauses contractuelles, conformité légale</td></tr>
</tbody></table></div>
<h2>Qu'est-ce qu'un système de management ?</h2>
<p>Un système de management est l'ensemble des éléments liés d'un organisme (politiques, objectifs, processus, rôles) qui permettent d'atteindre des objectifs. Le <b>SMSI</b> (système de management de la sécurité de l'information, ISMS en anglais) applique cette logique à la sécurité de l'information, en partant des risques.</p>
<p>Le SMSI n'est pas un projet informatique. Il touche la direction, les RH, les achats, le juridique, les services généraux et l'informatique.</p>
<h2>Le cycle PDCA</h2>
<div class="tablewrap"><table><thead><tr><th>Phase</th><th>Clauses ISO 27001</th><th>Ce qu'on fait</th></tr></thead><tbody>
<tr><td><b>Plan</b> (planifier)</td><td>4, 5, 6, 7</td><td>Contexte, périmètre, politique, risques, objectifs, ressources</td></tr>
<tr><td><b>Do</b> (réaliser)</td><td>8</td><td>Mettre en œuvre le plan de traitement et les processus</td></tr>
<tr><td><b>Check</b> (vérifier)</td><td>9</td><td>Mesurer, auditer, revue de direction</td></tr>
<tr><td><b>Act</b> (agir)</td><td>10</td><td>Corriger les non-conformités, améliorer en continu</td></tr>
</tbody></table></div>
<p>La norme 2022 ne cite plus le PDCA explicitement, mais toute la logique y reste. Les formateurs et l'examen PECB l'utilisent toujours.</p>
<h2>La famille ISO/IEC 27000</h2>
<div class="tablewrap"><table><thead><tr><th>Norme</th><th>Rôle</th><th>Certifiable ?</th></tr></thead><tbody>
<tr><td>ISO/IEC 27000</td><td>Vue d'ensemble et vocabulaire</td><td>Non</td></tr>
<tr><td><b>ISO/IEC 27001</b></td><td>Exigences du SMSI (le « doit »)</td><td><b>Oui</b></td></tr>
<tr><td>ISO/IEC 27002</td><td>Guide détaillé des 93 mesures de l'Annexe A</td><td>Non</td></tr>
<tr><td>ISO/IEC 27003</td><td>Lignes directrices pour mettre en œuvre le SMSI</td><td>Non</td></tr>
<tr><td>ISO/IEC 27004</td><td>Surveillance, mesure, analyse, évaluation</td><td>Non</td></tr>
<tr><td>ISO/IEC 27005</td><td>Gestion des risques de sécurité de l'information</td><td>Non</td></tr>
<tr><td>ISO/IEC 27006</td><td>Exigences pour les organismes qui certifient les SMSI</td><td>Pour les organismes de certification</td></tr>
<tr><td>ISO/IEC 27007</td><td>Audit de SMSI (complète l'ISO 19011)</td><td>Non</td></tr>
<tr><td>ISO/IEC 27017 / 27018</td><td>Sécurité du cloud / données personnelles dans le cloud public</td><td>Non (s'ajoutent au SMSI)</td></tr>
<tr><td>ISO/IEC 27701</td><td>Management de la protection de la vie privée (PIMS)</td><td>Oui (édition 2025 autonome)</td></tr>
<tr><td>ISO/IEC 27035</td><td>Gestion des incidents</td><td>Non</td></tr>
<tr><td>ISO 22301</td><td>Continuité d'activité</td><td>Oui</td></tr>
<tr><td>ISO 31000</td><td>Management du risque (générique)</td><td>Non</td></tr>
<tr><td>ISO 19011</td><td>Lignes directrices pour l'audit des systèmes de management</td><td>Non</td></tr>
</tbody></table></div>
<div class="box tip"><h4>Piège classique</h4><p>On ne se certifie <b>jamais</b> ISO 27002. Un organisme est certifié ISO/IEC 27001 ; l'ISO 27002 est un guide de bonnes pratiques.</p></div>
<h2>Exigence, recommandation, possibilité</h2>
<ul><li><b>doit</b> (shall) : exigence obligatoire, auditable ;</li><li><b>il convient de</b> (should) : recommandation ;</li><li><b>peut</b> (may) : permission ; <b>peut / est en mesure de</b> (can) : possibilité.</li></ul>
<p>Les clauses 4 à 10 de l'ISO 27001 contiennent des « doit ». L'ISO 27002 contient des « il convient de ».</p>
`},

{ id:"m2", day:"Jour 1", title:"La norme ISO/IEC 27001:2022 et son architecture", html:`
<h2>Historique</h2>
<ul><li>1995 : BS 7799 (Royaume-Uni) ;</li><li>2005 : première ISO/IEC 27001 ;</li><li>2013 : refonte selon la structure commune des normes de management ;</li><li>octobre 2022 : édition actuelle, avec une Annexe A ramenée de 114 à 93 mesures ;</li><li>février 2024 : <b>Amendement 1</b> sur le changement climatique.</li></ul>
<p>Les certificats 2013 ont dû être migrés vers la version 2022 avant le <b>31 octobre 2025</b>. Aujourd'hui, seuls les certificats 2022 sont valides.</p>
<h2>La structure harmonisée (HS)</h2>
<p>Toutes les normes de systèmes de management récentes (ISO 9001, 14001, 22301, 27001, 42001…) partagent la même structure en 10 clauses, appelée autrefois « Annexe SL » et aujourd'hui « structure harmonisée ». Cela facilite les systèmes de management intégrés.</p>
<div class="tablewrap"><table><thead><tr><th>Clause</th><th>Titre</th><th>Contenu principal</th></tr></thead><tbody>
<tr><td class="num">0–3</td><td>Introduction, domaine d'application, références, termes</td><td>Pas d'exigences</td></tr>
<tr><td class="num">4</td><td>Contexte de l'organisme</td><td>Enjeux, parties intéressées, périmètre, SMSI</td></tr>
<tr><td class="num">5</td><td>Leadership</td><td>Engagement de la direction, politique, rôles</td></tr>
<tr><td class="num">6</td><td>Planification</td><td>Risques et opportunités, objectifs, changements</td></tr>
<tr><td class="num">7</td><td>Support</td><td>Ressources, compétences, sensibilisation, communication, documentation</td></tr>
<tr><td class="num">8</td><td>Fonctionnement</td><td>Maîtrise opérationnelle, appréciation et traitement des risques</td></tr>
<tr><td class="num">9</td><td>Évaluation des performances</td><td>Mesure, audit interne, revue de direction</td></tr>
<tr><td class="num">10</td><td>Amélioration</td><td>Amélioration continue, non-conformités, actions correctives</td></tr>
<tr><td class="num">Annexe A</td><td>Référentiel de mesures</td><td>93 mesures en 4 thèmes</td></tr>
</tbody></table></div>
<div class="box key"><h4>Retenir</h4><p>Pour être certifié, l'organisme doit satisfaire <b>toutes</b> les exigences des clauses 4 à 10. Aucune exclusion n'est possible dans ces clauses. Seules des mesures de l'Annexe A peuvent être exclues, avec une justification dans la Déclaration d'applicabilité.</p></div>
<h2>Ce qui a changé en 2022</h2>
<ul>
<li>${C("4.2")} : il faut déterminer quelles exigences des parties intéressées seront traitées par le SMSI.</li>
<li>${C("4.4")} : le SMSI inclut les processus nécessaires et leurs interactions.</li>
<li>${C("6.2")} : les objectifs doivent être surveillés et disponibles sous forme d'information documentée.</li>
<li>${C("6.3")} ${N} : les modifications du SMSI doivent être planifiées.</li>
<li>${C("8.1")} : critères pour les processus et maîtrise des processus, produits ou services fournis par l'extérieur.</li>
<li>${C("9.3.2")} : la revue de direction examine aussi les changements dans les besoins et attentes des parties intéressées.</li>
<li>${C("10")} : les sous-clauses sont inversées (10.1 amélioration continue, 10.2 non-conformité).</li>
<li>Annexe A : 93 mesures en 4 thèmes, dont 11 nouvelles, et des attributs dans l'ISO 27002.</li>
</ul>
<h2>Amendement 1:2024 (climat)</h2>
<p>Deux ajouts courts : en ${C("4.1")}, l'organisme doit déterminer si le changement climatique est un enjeu pertinent ; en ${C("4.2")}, une note rappelle que des parties intéressées peuvent avoir des exigences liées au climat. Un auditeur peut demander la preuve que la question a été examinée, même si la réponse est « non pertinent ».</p>
<h2>Les informations documentées exigées</h2>
<p>La norme exige de « conserver » ou « tenir à jour » des informations documentées. Voici la liste minimale à connaître par cœur.</p>
<div class="tablewrap"><table><thead><tr><th>Clause</th><th>Information documentée</th></tr></thead><tbody>
<tr><td class="num">4.3</td><td>Périmètre (domaine d'application) du SMSI</td></tr>
<tr><td class="num">5.2</td><td>Politique de sécurité de l'information</td></tr>
<tr><td class="num">6.1.2</td><td>Processus d'appréciation des risques</td></tr>
<tr><td class="num">6.1.3</td><td>Processus de traitement des risques</td></tr>
<tr><td class="num">6.1.3 d)</td><td>Déclaration d'applicabilité (DdA / SoA)</td></tr>
<tr><td class="num">6.2</td><td>Objectifs de sécurité de l'information</td></tr>
<tr><td class="num">7.2</td><td>Preuves de compétence</td></tr>
<tr><td class="num">7.5.1 b)</td><td>Toute information jugée nécessaire par l'organisme</td></tr>
<tr><td class="num">8.1</td><td>Informations prouvant que les processus sont menés comme prévu</td></tr>
<tr><td class="num">8.2</td><td>Résultats des appréciations des risques</td></tr>
<tr><td class="num">8.3</td><td>Résultats du traitement des risques</td></tr>
<tr><td class="num">9.1</td><td>Résultats de la surveillance et de la mesure</td></tr>
<tr><td class="num">9.2.2</td><td>Programme d'audit et résultats des audits</td></tr>
<tr><td class="num">9.3.3</td><td>Résultats des revues de direction</td></tr>
<tr><td class="num">10.2</td><td>Nature des non-conformités, actions menées et résultats des actions correctives</td></tr>
</tbody></table></div>
<p>Le plan de traitement des risques est exigé en ${C("6.1.3 e)")} ; en pratique il est toujours documenté. Les politiques et procédures de l'Annexe A deviennent obligatoires dès qu'une mesure retenue les demande (par exemple A.5.1 pour les politiques thématiques, A.5.37 pour les procédures d'exploitation).</p>
`},

{ id:"m3", day:"Jour 1", title:"Initier le projet : contexte, parties intéressées et périmètre", html:`
<p class="lead">Le Lead Implementer pilote le projet. Ce module couvre le lancement et la clause 4.</p>
<h2>Avant la norme : préparer le projet</h2>
<ol>
<li><b>Comprendre l'organisme</b> : mission, processus métier, organigramme, système d'information, obligations légales (en Côte d'Ivoire par exemple la loi n° 2013-450 sur la protection des données personnelles, contrôlée par l'ARTCI, et les exigences de la BCEAO pour les banques).</li>
<li><b>Analyse d'écart</b> (gap analysis) : comparer l'existant aux exigences 4 à 10 et à l'Annexe A pour mesurer l'effort.</li>
<li><b>Dossier d'opportunité</b> (business case) : bénéfices (confiance des clients, appels d'offres, conformité, réduction des incidents), coûts, durée, risques du projet.</li>
<li><b>Approbation de la direction</b> : sans engagement formel de la direction, le projet échoue. C'est aussi une exigence de la clause 5.</li>
<li><b>Organisation du projet</b> : sponsor, chef de projet (souvent le Lead Implementer), RSSI, comité de pilotage, correspondants métiers ; planning et budget.</li>
</ol>
<h2>${C("4.1")} Enjeux internes et externes</h2>
<p>L'organisme identifie les enjeux qui influencent sa capacité à atteindre les résultats attendus du SMSI. Outils pratiques : <b>PESTEL</b> pour l'externe (politique, économique, social, technologique, environnemental, légal), <b>SWOT</b> et analyse de la culture et de la structure pour l'interne. Depuis l'Amendement 1, on examine le changement climatique.</p>
<h2>${C("4.2")} Parties intéressées</h2>
<p>Trois étapes : déterminer les parties intéressées pertinentes, leurs exigences pertinentes, puis lesquelles de ces exigences seront traitées par le SMSI.</p>
<div class="tablewrap"><table><thead><tr><th>Partie intéressée</th><th>Exigence possible</th></tr></thead><tbody>
<tr><td>Clients</td><td>Confidentialité de leurs données, disponibilité du service</td></tr>
<tr><td>Régulateur (ARTCI, BCEAO, commission bancaire)</td><td>Conformité, déclaration des incidents</td></tr>
<tr><td>Actionnaires</td><td>Protection de la valeur et de la réputation</td></tr>
<tr><td>Employés</td><td>Protection de leurs données RH, règles claires</td></tr>
<tr><td>Fournisseurs, hébergeurs</td><td>Clauses contractuelles</td></tr>
</tbody></table></div>
<h2>${C("4.3")} Périmètre du SMSI</h2>
<p>Le périmètre tient compte des enjeux (4.1), des exigences (4.2) et des <b>interfaces et dépendances</b> avec les activités réalisées par d'autres organismes. Il est documenté. On le décrit selon plusieurs axes :</p>
<ul><li>organisationnel (entités, directions) ;</li><li>processus et activités ;</li><li>physique (sites) ;</li><li>système d'information (réseaux, applications, hébergement, cloud) ;</li><li>exclusions et interfaces justifiées.</li></ul>
<div class="box tip"><h4>Piège classique</h4><p>Le périmètre peut être limité (un datacenter, un service), mais il doit être cohérent. Exclure une partie qui traite clairement des informations du périmètre, ou une interface critique sans la maîtriser, est une faiblesse que l'auditeur relèvera.</p></div>
<h2>${C("4.4")} Le SMSI</h2>
<p>L'organisme établit, met en œuvre, tient à jour et améliore en continu le SMSI, avec ses processus et leurs interactions. Une cartographie des processus du SMSI est la meilleure preuve.</p>
`},

{ id:"m4", day:"Jour 2", title:"Leadership, politique et rôles", html:`
<h2>${C("5.1")} Leadership et engagement</h2>
<p>La direction doit démontrer son engagement, notamment en :</p>
<ul><li>établissant la politique et les objectifs, compatibles avec la stratégie ;</li><li>intégrant les exigences du SMSI dans les processus métier ;</li><li>fournissant les ressources ;</li><li>communiquant sur l'importance de la sécurité et de la conformité ;</li><li>s'assurant que le SMSI atteint ses résultats ;</li><li>orientant et soutenant les personnes ;</li><li>promouvant l'amélioration continue ;</li><li>soutenant les autres managers dans leur domaine.</li></ul>
<p>Preuves typiques : politique signée, budget alloué, participation aux revues de direction, comité de sécurité présidé par un membre de la direction.</p>
<h2>${C("5.2")} Politique de sécurité de l'information</h2>
<p>Elle doit être adaptée à la mission, fournir un cadre pour fixer les objectifs, contenir un engagement à satisfaire les exigences applicables et un engagement d'amélioration continue. Elle est documentée, communiquée en interne et mise à disposition des parties intéressées si approprié.</p>
<h3>Politique générale et politiques thématiques</h3>
<p>La politique de la clause 5.2 est le document de haut niveau. La mesure A.5.1 ajoute des <b>politiques thématiques</b> (contrôle d'accès, sauvegarde, cryptographie, télétravail, fournisseurs…) approuvées par la direction et revues à intervalles planifiés.</p>
<div class="tablewrap"><table><thead><tr><th>Niveau</th><th>Document</th><th>Question</th></tr></thead><tbody>
<tr><td>1</td><td>Politique générale</td><td>Pourquoi ?</td></tr>
<tr><td>2</td><td>Politiques thématiques</td><td>Quoi ?</td></tr>
<tr><td>3</td><td>Procédures</td><td>Comment, qui, quand ?</td></tr>
<tr><td>4</td><td>Modes opératoires, formulaires, enregistrements</td><td>Détail et preuves</td></tr>
</tbody></table></div>
<h2>${C("5.3")} Rôles, responsabilités et autorités</h2>
<p>La direction attribue et communique les responsabilités, en particulier pour assurer la conformité du SMSI et rendre compte de sa performance à la direction.</p>
<ul><li><b>Direction générale</b> : responsable en dernier ressort, approuve la politique et les risques résiduels majeurs.</li><li><b>Comité sécurité / pilotage</b> : arbitrages, suivi.</li><li><b>RSSI</b> : pilote le SMSI au quotidien.</li><li><b>Propriétaires des risques</b> : acceptent le plan de traitement et les risques résiduels.</li><li><b>Propriétaires des actifs</b> : classification, droits d'accès.</li><li><b>Utilisateurs</b> : appliquent les règles et signalent les événements.</li></ul>
<p>Une matrice <b>RACI</b> (Réalise, Approuve, Consulté, Informé) est l'outil habituel. Pensez aussi à la séparation des tâches (A.5.3) : celui qui administre un système ne devrait pas l'auditer.</p>
`},

{ id:"m5", day:"Jour 2", title:"Appréciation des risques", html:`
<p class="lead">C'est le cœur du SMSI et une grosse partie de l'examen. La norme impose un processus, pas une méthode.</p>
<h2>${C("6.1.1")} Actions face aux risques et opportunités</h2>
<p>En tenant compte de 4.1 et 4.2, l'organisme détermine les risques et opportunités à traiter pour que le SMSI atteigne ses résultats, prévienne les effets indésirables et s'améliore. Ce sont les risques <i>du SMSI</i> (par exemple : manque de soutien, turnover) ; la sécurité de l'information elle-même est traitée en 6.1.2 et 6.1.3.</p>
<h2>${C("6.1.2")} Le processus d'appréciation</h2>
<p>L'organisme définit et applique un processus qui :</p>
<ol type="a">
<li>établit et tient à jour des <b>critères</b> : critères d'acceptation des risques et critères pour réaliser les appréciations ;</li>
<li>produit des résultats <b>cohérents, valides et comparables</b> quand on le répète ;</li>
<li><b>identifie</b> les risques liés à la perte de confidentialité, d'intégrité et de disponibilité dans le périmètre, et leurs <b>propriétaires</b> ;</li>
<li><b>analyse</b> les risques : conséquences potentielles, vraisemblance réaliste, niveaux de risque ;</li>
<li><b>évalue</b> les risques : comparaison aux critères et priorisation pour le traitement.</li>
</ol>
<p>Le processus est documenté (6.1.2) et les résultats de chaque appréciation sont conservés (8.2). Les appréciations sont refaites à intervalles planifiés ou lors de changements importants (8.2).</p>
<h2>ISO/IEC 27005 et les méthodes</h2>
<p>L'ISO/IEC 27005:2022 donne le cadre : établissement du contexte, appréciation (identification, analyse, évaluation), traitement, acceptation, communication et concertation, surveillance et revue. Elle propose deux approches d'identification :</p>
<ul><li><b>par les actifs</b> : actifs → menaces → vulnérabilités → conséquences ;</li><li><b>par les événements</b> (scénarios stratégiques) : sources de risque, objectifs visés, chemins d'attaque.</li></ul>
<p>Méthodes connues : <b>EBIOS Risk Manager</b> (ANSSI, très utilisée en Afrique francophone), MEHARI (CLUSIF), OCTAVE, NIST SP 800-30, CRAMM. Toutes sont acceptables si elles respectent 6.1.2.</p>
<h2>Analyse qualitative ou quantitative</h2>
<div class="tablewrap"><table><thead><tr><th>Approche</th><th>Principe</th><th>Avantage</th><th>Limite</th></tr></thead><tbody>
<tr><td>Qualitative</td><td>Échelles (faible, moyen, élevé)</td><td>Simple, rapide, compréhensible</td><td>Subjective</td></tr>
<tr><td>Semi-quantitative</td><td>Échelles chiffrées 1 à 4, risque = V × I</td><td>Permet de trier</td><td>Les chiffres restent conventionnels</td></tr>
<tr><td>Quantitative</td><td>Valeurs monétaires : ALE = SLE × ARO</td><td>Parle aux financiers</td><td>Données rarement disponibles</td></tr>
</tbody></table></div>
<h3>Exemple de matrice 4 × 4</h3>
<div class="tablewrap"><table><thead><tr><th>Vraisemblance \\ Impact</th><th>1 Mineur</th><th>2 Significatif</th><th>3 Grave</th><th>4 Critique</th></tr></thead><tbody>
<tr><td>4 Quasi certaine</td><td class="num">4</td><td class="num">8</td><td class="num">12</td><td class="num">16</td></tr>
<tr><td>3 Probable</td><td class="num">3</td><td class="num">6</td><td class="num">9</td><td class="num">12</td></tr>
<tr><td>2 Possible</td><td class="num">2</td><td class="num">4</td><td class="num">6</td><td class="num">8</td></tr>
<tr><td>1 Rare</td><td class="num">1</td><td class="num">2</td><td class="num">3</td><td class="num">4</td></tr>
</tbody></table></div>
<p>Exemple de critère d'acceptation : un risque ≤ 4 est acceptable ; de 6 à 8, il est traité sous 6 mois ; ≥ 9, traitement prioritaire et validation par la direction.</p>
<div class="box"><h4>Calcul quantitatif</h4><p>Un serveur vaut 20 000 000 FCFA. Une inondation en détruirait 50 % (facteur d'exposition). SLE = 10 000 000 FCFA. Une inondation tous les 5 ans : ARO = 0,2. ALE = 2 000 000 FCFA par an. Une mesure qui coûte plus que cela chaque année n'est pas rentable sur ce seul risque.</p></div>
<div class="box tip"><h4>Piège classique</h4><p>Le propriétaire du risque n'est pas forcément le propriétaire de l'actif, ni le RSSI. C'est la personne qui a l'autorité et la responsabilité de gérer le risque, en général un responsable métier.</p></div>
`},

{ id:"m6", day:"Jour 2", title:"Traitement des risques et Déclaration d'applicabilité", html:`
<h2>${C("6.1.3")} Le processus de traitement</h2>
<p>Les six étapes, à connaître dans l'ordre :</p>
<ol type="a">
<li>choisir les <b>options de traitement</b> adaptées ;</li>
<li>déterminer <b>toutes les mesures</b> nécessaires pour mettre en œuvre ces options (de n'importe quelle source) ;</li>
<li><b>comparer</b> ces mesures avec l'Annexe A pour vérifier qu'aucune mesure nécessaire n'a été oubliée ;</li>
<li>produire la <b>Déclaration d'applicabilité</b> ;</li>
<li>formuler un <b>plan de traitement des risques</b> ;</li>
<li>obtenir l'<b>approbation des propriétaires des risques</b> pour le plan et leur <b>acceptation des risques résiduels</b>.</li>
</ol>
<div class="box key"><h4>Point essentiel</h4><p>L'Annexe A n'est pas le point de départ : on part des risques, on choisit des mesures, puis on vérifie avec l'Annexe A. L'organisme peut aussi concevoir ses propres mesures ou en prendre dans d'autres référentiels (NIST, PCI DSS, CIS).</p></div>
<h2>Les quatre options (ISO 27005)</h2>
<div class="tablewrap"><table><thead><tr><th>Option</th><th>Principe</th><th>Exemple</th></tr></thead><tbody>
<tr><td><b>Modifier</b> (réduire)</td><td>Ajouter ou renforcer des mesures</td><td>MFA sur la messagerie</td></tr>
<tr><td><b>Conserver</b> (accepter)</td><td>Décision éclairée de garder le risque</td><td>Risque faible, coût de la mesure trop élevé</td></tr>
<tr><td><b>Éviter</b></td><td>Supprimer l'activité ou la source</td><td>Arrêter un service web obsolète</td></tr>
<tr><td><b>Partager</b> (transférer)</td><td>Répartir avec un tiers</td><td>Cyber-assurance, externalisation</td></tr>
</tbody></table></div>
<p>On ne transfère jamais la <b>responsabilité</b> : en cas de fuite chez un sous-traitant, l'organisme reste responsable vis-à-vis de ses clients et du régulateur.</p>
<h2>La Déclaration d'applicabilité (DdA, SoA)</h2>
<p>Document obligatoire et pièce centrale de l'audit de certification. Elle contient :</p>
<ul><li>les mesures nécessaires (y compris hors Annexe A) ;</li><li>la justification de leur inclusion ;</li><li>leur statut de mise en œuvre (oui, non, partiel) ;</li><li>la justification de l'exclusion de toute mesure de l'Annexe A.</li></ul>
<div class="tablewrap"><table><thead><tr><th>Mesure</th><th>Applicable</th><th>Justification</th><th>Statut</th><th>Référence</th></tr></thead><tbody>
<tr><td class="num">A.5.23</td><td>Oui</td><td>Messagerie et stockage en SaaS (risques R-07, R-12)</td><td>Partiel</td><td>POL-CLOUD v1</td></tr>
<tr><td class="num">A.8.4</td><td>Non</td><td>Aucun développement interne ni code source détenu</td><td>s.o.</td><td>Périmètre §3</td></tr>
<tr><td class="num">A.7.4</td><td>Oui</td><td>Salle serveur sur site (R-03) ; contrat de gardiennage</td><td>Oui</td><td>PRO-PHY-02</td></tr>
</tbody></table></div>
<p>Une justification d'inclusion peut venir d'un risque, d'une exigence légale ou contractuelle, ou d'une décision de bonne pratique.</p>
<h2>Le plan de traitement des risques</h2>
<p>Pour chaque risque à traiter : mesures à mettre en œuvre, responsable, ressources, échéance, priorité, risque résiduel visé, mode de vérification. Il est approuvé par les propriétaires des risques (6.1.3 f) et ses résultats sont conservés (8.3).</p>
<h2>Acceptation du risque</h2>
<p>Un risque peut être accepté au-dessus du seuil seulement par une décision formelle et tracée d'une personne habilitée, avec un suivi. C'est une question fréquente à l'examen.</p>
`},

{ id:"m7", day:"Jour 2–3", title:"Annexe A : les 93 mesures", html:`
<p class="lead">L'Annexe A de l'ISO 27001:2022 liste 93 mesures en 4 thèmes. L'ISO 27002:2022 explique chacune (objectif, recommandations, informations complémentaires).</p>
<div class="grid">
<div class="card"><span class="stat">37</span><span class="t">Organisationnelles</span><span class="d">A.5.1 à A.5.37</span></div>
<div class="card"><span class="stat">8</span><span class="t">Liées aux personnes</span><span class="d">A.6.1 à A.6.8</span></div>
<div class="card"><span class="stat">14</span><span class="t">Physiques</span><span class="d">A.7.1 à A.7.14</span></div>
<div class="card"><span class="stat">34</span><span class="t">Technologiques</span><span class="d">A.8.1 à A.8.34</span></div>
</div>
<p>Avant 2022 : 114 mesures en 14 domaines (A.5 à A.18). Les mesures ont été fusionnées : 58 révisées, 24 fusionnées, 11 nouvelles.</p>
<h2>Les 11 nouvelles mesures</h2>
<p>A.5.7 renseignement sur les menaces · A.5.23 services cloud · A.5.30 préparation des TIC à la continuité · A.7.4 surveillance physique · A.8.9 gestion des configurations · A.8.10 suppression de l'information · A.8.11 masquage des données · A.8.12 prévention des fuites · A.8.16 activités de surveillance · A.8.23 filtrage web · A.8.28 codage sécurisé.</p>
<h2>Les attributs (ISO 27002)</h2>
<div class="tablewrap"><table><thead><tr><th>Attribut</th><th>Valeurs</th></tr></thead><tbody>
<tr><td>Type de mesure</td><td>Préventive, détective, corrective</td></tr>
<tr><td>Propriétés de sécurité</td><td>Confidentialité, intégrité, disponibilité</td></tr>
<tr><td>Concepts de cybersécurité</td><td>Identifier, protéger, détecter, répondre, rétablir (alignés sur le NIST CSF)</td></tr>
<tr><td>Capacités opérationnelles</td><td>Gouvernance, gestion des actifs, protection de l'information, sécurité RH, sécurité physique, etc.</td></tr>
<tr><td>Domaines de sécurité</td><td>Gouvernance et écosystème, protection, défense, résilience</td></tr>
</tbody></table></div>
<p>Les attributs permettent de filtrer et de présenter les mesures selon le besoin. Ils sont dans l'ISO 27002 seulement, pas dans l'ISO 27001.</p>
<h2>A.5 Mesures organisationnelles (37)</h2>
${annexTable("5")}
<h2>A.6 Mesures liées aux personnes (8)</h2>
${annexTable("6")}
<h2>A.7 Mesures physiques (14)</h2>
${annexTable("7")}
<h2>A.8 Mesures technologiques (34)</h2>
${annexTable("8")}
<div class="box tip"><h4>Astuce mémoire</h4><p>Personnes = 6 et 8 mesures ; physique = 7 et 14 (le double) ; puis 37 et 34 pour les deux gros thèmes. 37 + 8 + 14 + 34 = 93.</p></div>
`},

{ id:"m8", day:"Jour 3", title:"Objectifs, support et informations documentées", html:`
<h2>${C("6.2")} Objectifs de sécurité</h2>
<p>Les objectifs sont cohérents avec la politique, mesurables si possible, tiennent compte des exigences et des résultats des risques, sont surveillés, communiqués, mis à jour et documentés. Pour chaque objectif, l'organisme détermine : ce qui sera fait, les ressources, le responsable, l'échéance et la manière d'évaluer les résultats.</p>
<div class="box"><h4>Objectif SMART</h4><p>« D'ici le 30 juin 2027, 95 % des comptes à privilèges sont protégés par MFA, mesuré chaque mois par l'équipe IAM. »</p></div>
<h2>${C("6.3")} Planification des modifications ${N}</h2>
<p>Quand le SMSI doit changer (nouveau site, fusion, nouveau périmètre), la modification est réalisée de manière planifiée. À ne pas confondre avec la mesure A.8.32 (gestion des changements techniques).</p>
<h2>${C("7.1")} Ressources</h2>
<p>Humaines, financières, techniques, temps. Preuve : budget et effectifs prévus.</p>
<h2>${C("7.2")} Compétences</h2>
<p>Déterminer les compétences nécessaires, s'assurer que les personnes sont compétentes (formation, expérience), agir si besoin (formation, tutorat, recrutement) et évaluer l'efficacité des actions. Les <b>preuves de compétence</b> sont conservées : diplômes, certificats, attestations.</p>
<h2>${C("7.3")} Sensibilisation</h2>
<p>Toutes les personnes sous le contrôle de l'organisme doivent connaître la politique, leur contribution à l'efficacité du SMSI et les conséquences d'un non-respect. Ne pas confondre : la <b>compétence</b> concerne les rôles qui ont un impact sur la sécurité ; la <b>sensibilisation</b> concerne tout le monde.</p>
<h2>${C("7.4")} Communication</h2>
<p>Déterminer quoi, quand, avec qui et comment communiquer (interne et externe). Une matrice de communication suffit.</p>
<h2>${C("7.5")} Informations documentées</h2>
<ul><li>${C("7.5.1")} : celles exigées par la norme et celles jugées nécessaires par l'organisme. Leur volume dépend de la taille, de la complexité et des compétences.</li>
<li>${C("7.5.2")} : à la création et à la mise à jour : identification (titre, date, auteur, référence), format et support, revue et approbation.</li>
<li>${C("7.5.3")} : maîtrise : disponibilité, protection, diffusion, accès, stockage, conservation, gestion des versions, élimination ; y compris les documents d'origine externe.</li></ul>
<p>Vocabulaire hérité : les « documents » sont <i>tenus à jour</i> (procédures, politiques), les « enregistrements » sont <i>conservés</i> (preuves).</p>
`},

{ id:"m9", day:"Jour 3", title:"Mise en œuvre opérationnelle", html:`
<h2>${C("8.1")} Planification et maîtrise opérationnelles</h2>
<p>L'organisme planifie, met en œuvre et maîtrise les processus nécessaires : il fixe des critères, maîtrise les processus selon ces critères, garde la preuve qu'ils fonctionnent comme prévu, maîtrise les changements planifiés et les conséquences des changements imprévus, et maîtrise les processus, produits ou services fournis par l'extérieur (prestataires, cloud).</p>
<h2>${C("8.2")} et ${C("8.3")}</h2>
<p>Réaliser les appréciations des risques à intervalles planifiés ou lors de changements significatifs, et mettre en œuvre le plan de traitement, en conservant les résultats.</p>
<h2>Les chantiers typiques du Lead Implementer</h2>
<h3>1. Rédiger le système documentaire</h3><p>Politique, politiques thématiques, procédures. Règle d'or : écrire ce que l'on fait réellement et ce que l'on peut prouver.</p>
<h3>2. Gérer les actifs</h3><p>Inventaire (A.5.9), propriétaires, classification (A.5.12), marquage (A.5.13).</p>
<h3>3. Mettre en œuvre les mesures du plan de traitement</h3><p>Par lots priorisés selon le niveau de risque.</p>
<h3>4. Sensibiliser et former</h3><p>Plan de sensibilisation : accueil des nouveaux, campagnes d'hameçonnage simulé, rappels périodiques, formation spécifique des administrateurs. Mesurer : taux de participation, taux de clic.</p>
<h3>5. Gérer les incidents (A.5.24 à A.5.28, A.6.8)</h3>
<div class="tablewrap"><table><thead><tr><th>Étape</th><th>Mesure</th></tr></thead><tbody>
<tr><td>Préparer (rôles, procédures, contacts, outils)</td><td>A.5.24</td></tr>
<tr><td>Signaler (canal simple)</td><td>A.6.8</td></tr>
<tr><td>Qualifier l'événement</td><td>A.5.25</td></tr>
<tr><td>Répondre (contenir, éradiquer, rétablir)</td><td>A.5.26</td></tr>
<tr><td>Retour d'expérience</td><td>A.5.27</td></tr>
<tr><td>Préserver les preuves</td><td>A.5.28</td></tr>
</tbody></table></div>
<p>Référence détaillée : ISO/IEC 27035.</p>
<h3>6. Gérer les changements (A.8.32)</h3><p>Demande, analyse d'impact, approbation, test, retour arrière prévu, communication.</p>
<h3>7. Conduite du changement humain</h3><p>Le SMSI modifie les habitudes. Identifier les résistances, impliquer les métiers, communiquer sur le « pourquoi », obtenir des relais.</p>
<h3>8. Gérer les opérations</h3><p>Sauvegardes testées (A.8.13), vulnérabilités (A.8.8), journaux (A.8.15), surveillance (A.8.16), revues d'accès (A.5.18), fournisseurs (A.5.19 à A.5.22).</p>
`},

{ id:"m10", day:"Jour 4", title:"Surveillance, mesure, analyse et évaluation", html:`
<h2>${C("9.1")} Ce que la norme demande</h2>
<p>L'organisme détermine : <b>quoi</b> surveiller et mesurer, <b>les méthodes</b> (pour des résultats comparables et reproductibles), <b>quand</b> surveiller, <b>qui</b> surveille, <b>quand</b> analyser et évaluer, et <b>qui</b> analyse. Il évalue la performance et l'efficacité du SMSI. Les résultats sont conservés.</p>
<h2>ISO/IEC 27004 : construire un indicateur</h2>
<ul><li><b>Indicateur de performance</b> (efficience, activité) : a-t-on fait ce qui était prévu ? (taux de postes à jour) ;</li><li><b>Indicateur d'efficacité</b> : a-t-on obtenu le résultat ? (nombre d'incidents dus à des correctifs manquants).</li></ul>
<div class="tablewrap"><table><thead><tr><th>Indicateur</th><th>Formule</th><th>Cible</th><th>Fréquence</th></tr></thead><tbody>
<tr><td>Correctifs critiques appliqués sous 15 jours</td><td>correctifs appliqués ≤ 15 j / correctifs critiques publiés</td><td>≥ 95 %</td><td>Mensuelle</td></tr>
<tr><td>Comptes de partants désactivés à J+1</td><td>comptes désactivés ≤ 24 h / départs</td><td>100 %</td><td>Mensuelle</td></tr>
<tr><td>Taux de clic à l'hameçonnage simulé</td><td>clics / destinataires</td><td>&lt; 5 %</td><td>Trimestrielle</td></tr>
<tr><td>Restaurations de sauvegarde réussies</td><td>tests réussis / tests réalisés</td><td>100 %</td><td>Trimestrielle</td></tr>
</tbody></table></div>
<p>Une fiche d'indicateur précise : objectif lié, formule, source des données, collecteur, analyste, fréquence, cible, seuils d'alerte, destinataire.</p>
<h2>Tableau de bord</h2>
<p>Synthèse pour la direction : peu d'indicateurs, tendance, code couleur, actions décidées. Il alimente la revue de direction (9.3).</p>
`},

{ id:"m11", day:"Jour 4", title:"Audit interne et revue de direction", html:`
<h2>${C("9.2")} Audit interne</h2>
<p>Des audits internes sont réalisés à intervalles planifiés pour vérifier que le SMSI est conforme aux exigences de l'organisme et de la norme, et qu'il est efficacement mis en œuvre et tenu à jour.</p>
<p>${C("9.2.2")} Le <b>programme d'audit</b> fixe la fréquence, les méthodes, les responsabilités, les exigences de planification et le compte rendu. Il tient compte de l'importance des processus et des résultats des audits précédents. Pour chaque audit : critères et périmètre définis, auditeurs choisis pour garantir l'<b>objectivité et l'impartialité</b>, résultats remontés à la direction concernée. Programme et résultats sont conservés.</p>
<div class="box tip"><h4>Piège classique</h4><p>Un auditeur ne doit pas auditer son propre travail. Le RSSI qui a rédigé les procédures ne peut pas les auditer lui-même. Solutions : auditeur d'un autre service, auditeur externe, audit croisé entre filiales.</p></div>
<h3>Déroulé d'un audit (ISO 19011)</h3>
<ol><li>Lancement et préparation (plan d'audit, listes de vérification) ;</li><li>Réunion d'ouverture ;</li><li>Collecte des preuves : entretiens, observation, examen de documents, échantillonnage ;</li><li>Constats : conformité, non-conformité, opportunité d'amélioration ;</li><li>Réunion de clôture ;</li><li>Rapport ;</li><li>Suivi des actions.</li></ol>
<h3>Classer les constats</h3>
<div class="tablewrap"><table><thead><tr><th>Type</th><th>Définition pratique</th><th>Exemple</th></tr></thead><tbody>
<tr><td><b>NC majeure</b></td><td>Absence ou défaillance totale d'une exigence ; doute sérieux sur la capacité du SMSI à atteindre ses résultats</td><td>Aucune revue de direction depuis la mise en place ; pas de DdA</td></tr>
<tr><td><b>NC mineure</b></td><td>Manquement isolé qui ne remet pas en cause le système</td><td>2 comptes de partants actifs sur 25 échantillonnés</td></tr>
<tr><td><b>Opportunité d'amélioration</b> / observation</td><td>Pas de manquement, mais un risque de dérive</td><td>Procédure exacte mais peu lisible</td></tr>
</tbody></table></div>
<h2>${C("9.3")} Revue de direction</h2>
<p>La direction revoit le SMSI à intervalles planifiés pour s'assurer qu'il reste approprié, adéquat et efficace.</p>
<h3>${C("9.3.2")} Éléments d'entrée</h3>
<ol type="a"><li>suivi des actions des revues précédentes ;</li><li>changements des enjeux externes et internes ;</li><li>changements des besoins et attentes des parties intéressées ${N} ;</li><li>retours sur la performance : non-conformités et actions correctives, résultats de surveillance et de mesure, résultats d'audit, atteinte des objectifs ;</li><li>retours des parties intéressées ;</li><li>résultats de l'appréciation des risques et état du plan de traitement ;</li><li>opportunités d'amélioration continue.</li></ol>
<h3>${C("9.3.3")} Éléments de sortie</h3>
<p>Décisions sur les opportunités d'amélioration et sur tout besoin de modifier le SMSI. Les résultats sont conservés (compte rendu signé).</p>
`},

{ id:"m12", day:"Jour 4", title:"Amélioration continue et actions correctives", html:`
<h2>${C("10.1")} Amélioration continue</h2>
<p>L'organisme améliore en continu la pertinence, l'adéquation et l'efficacité du SMSI. Sources : audits, indicateurs, incidents, revue de direction, veille, suggestions.</p>
<h2>${C("10.2")} Non-conformité et action corrective</h2>
<p>Quand une non-conformité survient, l'organisme :</p>
<ol type="a"><li><b>réagit</b> : agit pour la maîtriser et la corriger, et traite les conséquences ;</li><li><b>évalue</b> s'il faut agir sur les causes pour éviter qu'elle ne se reproduise ou ne survienne ailleurs : revue, recherche des causes, recherche de non-conformités similaires ;</li><li>met en œuvre les actions nécessaires ;</li><li>vérifie l'<b>efficacité</b> des actions correctives ;</li><li>modifie le SMSI si nécessaire.</li></ol>
<div class="tablewrap"><table><thead><tr><th>Notion</th><th>Cible</th><th>Exemple (compte d'un partant encore actif)</th></tr></thead><tbody>
<tr><td><b>Correction</b></td><td>Le symptôme</td><td>Désactiver le compte aujourd'hui</td></tr>
<tr><td><b>Action corrective</b></td><td>La cause, pour éviter la récurrence</td><td>Notification automatique RH vers IT à chaque départ</td></tr>
<tr><td>Action préventive (ancienne notion)</td><td>Une cause potentielle</td><td>Remplacée dans la norme par l'approche par les risques (6.1)</td></tr>
</tbody></table></div>
<h2>Analyse des causes</h2>
<ul><li><b>5 pourquoi</b> : demander « pourquoi ? » jusqu'à la cause racine ;</li><li><b>Ishikawa</b> (5M) : main-d'œuvre, méthodes, matériel, milieu, matière ;</li><li><b>Pareto</b> : traiter d'abord les 20 % de causes qui produisent 80 % des effets.</li></ul>
<div class="box"><h4>Exemple de 5 pourquoi</h4><p>Le compte d'un partant est actif. Pourquoi ? L'IT n'a pas été informée. Pourquoi ? Le formulaire RH est papier. Pourquoi ? Pas d'outil commun. Cause racine : processus de départ non outillé. Action corrective : flux automatique RH → annuaire.</p></div>
`},

{ id:"m13", day:"Jour 4", title:"Préparer et réussir l'audit de certification", html:`
<h2>Les acteurs</h2>
<ul><li><b>Organisme de certification</b> : réalise l'audit et délivre le certificat. Il est accrédité selon l'ISO/IEC 17021-1 et l'ISO/IEC 27006.</li><li><b>Organisme d'accréditation</b> : vérifie la compétence des certificateurs (COFRAC en France, UKAS au Royaume-Uni, SOAC pour l'espace UEMOA).</li><li><b>L'organisme audité</b> : prépare les preuves et accompagne les auditeurs.</li></ul>
<p>Un consultant qui a aidé à mettre en place le SMSI ne peut pas certifier ce même SMSI (conflit d'intérêts).</p>
<h2>Prérequis avant l'audit</h2>
<ul><li>SMSI en fonctionnement depuis quelques mois avec des enregistrements ;</li><li>au moins un cycle d'audit interne complet ;</li><li>au moins une revue de direction ;</li><li>DdA, appréciation et plan de traitement à jour ;</li><li>actions correctives en cours sur les constats internes.</li></ul>
<p>Un <b>pré-audit</b> (audit à blanc) est facultatif mais recommandé.</p>
<h2>Le cycle de certification (3 ans)</h2>
<div class="tablewrap"><table><thead><tr><th>Étape</th><th>Objet</th></tr></thead><tbody>
<tr><td><b>Étape 1</b> (stage 1)</td><td>Revue documentaire et préparation : périmètre, DdA, risques, audit interne, revue de direction. Vérifie que l'organisme est prêt pour l'étape 2. Souvent en partie sur site.</td></tr>
<tr><td><b>Étape 2</b> (stage 2)</td><td>Sur site : évalue la mise en œuvre et l'efficacité du SMSI par entretiens, observations et échantillons.</td></tr>
<tr><td>Décision de certification</td><td>Prise par l'organisme de certification (pas par l'auditeur seul) après traitement des non-conformités.</td></tr>
<tr><td>Audits de surveillance</td><td>Au moins un par an (années 1 et 2).</td></tr>
<tr><td>Audit de renouvellement</td><td>Avant la fin des 3 ans.</td></tr>
</tbody></table></div>
<h2>Traiter les non-conformités de l'audit</h2>
<ul><li><b>NC majeure</b> : bloque la certification. Correction et action corrective, souvent vérifiées par un audit complémentaire.</li><li><b>NC mineure</b> : plan d'action accepté par l'auditeur, vérifié au prochain audit.</li><li>Pour chaque NC : correction, analyse des causes, action corrective, preuve de mise en œuvre.</li></ul>
<h2>Le jour J</h2>
<ul><li>Désigner un guide pour chaque auditeur ;</li><li>préparer une salle et l'accès aux preuves ;</li><li>répondre précisément, sans inventer : « je vous apporte la preuve » vaut mieux qu'une supposition ;</li><li>noter les constats en réunion de clôture.</li></ul>
<h2>Après la certification</h2>
<p>Le SMSI continue : indicateurs, audits internes, revues de direction, mise à jour des risques. Un certificat peut être suspendu ou retiré si le SMSI n'est plus maintenu.</p>
`}
];

const exam = `
<p class="lead">Ces informations résument ce que PECB publie sur la certification. Vérifiez toujours la version à jour sur pecb.com avant de vous inscrire, car le format évolue.</p>
<h2>La formation PECB</h2>
<p>Le cours officiel dure 5 jours : jour 1 introduction et initiation du SMSI ; jour 2 planification ; jour 3 mise en œuvre ; jour 4 surveillance, amélioration et préparation à la certification ; jour 5 examen. Ce site suit ce découpage.</p>
<h2>L'examen</h2>
<div class="grid">
<div class="card"><span class="stat">180</span><span class="t">minutes</span><span class="d">Durée habituelle (3 heures)</span></div>
<div class="card"><span class="stat">80</span><span class="t">questions à choix multiple</span><span class="d">Beaucoup sont fondées sur des scénarios</span></div>
<div class="card"><span class="stat">70 %</span><span class="t">pour réussir</span><span class="d">Score minimal habituel</span></div>
</div>
<p>L'examen est en général à <b>livre ouvert</b> : on peut consulter la norme et les supports de cours imprimés, mais pas d'appareil connecté. Il est disponible en ligne (surveillé à distance) ou en salle, en plusieurs langues dont le français. En cas d'échec, une reprise gratuite est souvent possible dans les 12 mois.</p>
<h2>Les 7 domaines de compétence</h2>
<div class="tablewrap"><table><thead><tr><th>Domaine</th><th>Modules du site</th></tr></thead><tbody>
<tr><td>1. Principes et concepts fondamentaux d'un SMSI</td><td>1, 2</td></tr>
<tr><td>2. Exigences du SMSI</td><td>2, 3, 4</td></tr>
<tr><td>3. Planification de la mise en œuvre</td><td>3, 5, 6, 7, 8</td></tr>
<tr><td>4. Mise en œuvre du SMSI</td><td>7, 8, 9</td></tr>
<tr><td>5. Surveillance et mesure</td><td>10, 11</td></tr>
<tr><td>6. Amélioration continue</td><td>12</td></tr>
<tr><td>7. Préparation à l'audit de certification</td><td>13</td></tr>
</tbody></table></div>
<h2>Après l'examen : les niveaux de certification</h2>
<div class="tablewrap"><table><thead><tr><th>Titre</th><th>Expérience professionnelle</th><th>Expérience en SMSI</th></tr></thead><tbody>
<tr><td>Provisional Implementer</td><td>Aucune</td><td>Aucune</td></tr>
<tr><td>Implementer</td><td>2 ans (dont 1 en sécurité de l'information)</td><td>200 heures</td></tr>
<tr><td><b>Lead Implementer</b></td><td>5 ans (dont 2 en sécurité de l'information)</td><td>300 heures</td></tr>
<tr><td>Senior Lead Implementer</td><td>10 ans (dont 7 en sécurité de l'information)</td><td>1 000 heures</td></tr>
</tbody></table></div>
<p>Réussir l'examen ne suffit pas : on demande ensuite la certification sur le compte PECB en déclarant son expérience, avec des références. Une redevance annuelle et des heures de formation continue (CPD) maintiennent le titre.</p>
<h2>Méthode pour les questions sur scénarios</h2>
<ol><li>Lisez d'abord la question, puis le scénario : vous saurez quoi chercher.</li><li>Repérez la clause concernée et ouvrez la norme à ce numéro.</li><li>Éliminez les réponses qui citent une exigence inexistante ou une mauvaise étape.</li><li>Préférez la réponse qui respecte l'ordre logique (risques avant mesures, cause avant action).</li><li>Méfiez-vous des réponses absolues (« toujours », « obligatoirement ») sauf si la norme dit « doit ».</li><li>Gérez le temps : un peu plus de 2 minutes par question.</li></ol>
<div class="box tip"><h4>Préparez votre norme</h4><p>Puisque l'examen est à livre ouvert, placez des onglets sur les clauses 4.3, 6.1.2, 6.1.3, 7.5, 9.2, 9.3 et 10.2, et sur le début de chaque thème de l'Annexe A. Le gain de temps est important.</p></div>
<h2>Plan de révision sur 4 semaines</h2>
<div class="tablewrap"><table><thead><tr><th>Semaine</th><th>Travail</th></tr></thead><tbody>
<tr><td>1</td><td>Modules 1 à 4 + quiz par module ; lire les clauses 4 et 5 de la norme</td></tr>
<tr><td>2</td><td>Modules 5 à 7 ; refaire la matrice de risques sur un cas réel de votre travail</td></tr>
<tr><td>3</td><td>Modules 8 à 13 + quiz par module</td></tr>
<tr><td>4</td><td>Deux examens blancs chronométrés ; revoir chaque erreur avec l'explication et la clause</td></tr>
</tbody></table></div>
`;

CERTS.push({
  id:"iso27001-li",
  title:"ISO/IEC 27001 Lead Implementer",
  org:"PECB",
  intro:"Préparation complète à la certification PECB Certified ISO/IEC 27001 Lead Implementer, sur la version 2022 de la norme (avec l'Amendement 1:2024).",
  examMinutes:180, examQuestions:80, passMark:70,
  modules, exam, questions:[]
});
})();
