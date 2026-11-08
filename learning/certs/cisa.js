/* ISACA CISA : cours. Contenu original rédigé pour la révision ; il ne reproduit pas le manuel officiel ISACA (CRM). */
(function(){
const T = (head, rows) => '<div class="tablewrap"><table><thead><tr>' + head.map(h => '<th>' + h + '</th>').join('') + '</tr></thead><tbody>' + rows.map(r => '<tr>' + r.map(c => '<td>' + c + '</td>').join('') + '</tr>').join('') + '</tbody></table></div>';
const D = (n, name, w) => '<p class="eyebrow">Domaine ' + n + ' · ' + name + ' · ' + w + ' % de l\'examen</p>';

const modules = [
{ id:"c1", day:"Domaine 1", title:"Planifier un audit des SI fondé sur les risques", html: D(1,"Processus d'audit des SI",18) + `
<p class="lead">Le CISA teste d'abord ton raisonnement d'auditeur : indépendance, approche par les risques, preuves suffisantes. C'est le réflexe à garder pour toutes les questions.</p>
<h2>Normes et éthique ISACA</h2>
<p>ISACA publie le <b>cadre ITAF</b> (normes, lignes directrices, outils et techniques d'audit des SI) et un <b>code de déontologie</b>. Les normes générales couvrent la charte d'audit, l'indépendance, l'objectivité, la diligence professionnelle, la compétence et l'assertion. Les normes de performance couvrent la planification, les preuves, l'usage du travail d'autrui, la supervision. Les normes de rapport couvrent le rapport et le suivi.</p>
<h2>La charte d'audit</h2>
<p>Document approuvé au plus haut niveau (conseil d'administration ou comité d'audit) qui fixe la mission, l'<b>autorité</b>, les <b>responsabilités</b> et l'<b>indépendance</b> de la fonction d'audit, ainsi que son droit d'accès aux informations et aux personnes. La lettre de mission (engagement letter) joue ce rôle pour un auditeur externe.</p>
<div class="box key"><h4>Indépendance</h4><p>L'auditeur rend compte au <b>comité d'audit</b>, pas à la DSI qu'il audite. Il ne conçoit ni n'exploite les contrôles qu'il audite. S'il a participé à un projet, il doit le déclarer et ne pas auditer ce qu'il a conçu. Il peut conseiller, mais pas décider à la place de la direction.</p></div>
<h2>Le plan d'audit fondé sur les risques</h2>
<ol><li>Comprendre l'activité, les objectifs et l'univers d'audit (tous les processus et systèmes auditables).</li><li>Évaluer les risques de chaque entité.</li><li>Prioriser : les zones à risque élevé sont auditées plus souvent.</li><li>Construire le plan annuel, le faire approuver par le comité d'audit.</li></ol>
<h2>Le risque d'audit</h2>
${T(["Composante","Définition","Qui agit dessus ?"],[
["Risque inhérent","Risque d'erreur significative avant tout contrôle","Personne : il dépend de l'activité"],
["Risque de contrôle","Risque que les contrôles internes ne préviennent ni ne détectent l'erreur","L'audité, par ses contrôles"],
["Risque de non-détection","Risque que les procédures de l'auditeur ne détectent pas l'erreur","L'auditeur, par l'étendue de ses tests"]])}
<p>Risque d'audit = inhérent × contrôle × non-détection. Si les risques inhérent et de contrôle sont élevés, l'auditeur réduit le risque de non-détection en augmentant les tests de substance.</p>
<h2>Types de contrôles</h2>
${T(["Type","Exemple"],[["Préventif","Séparation des tâches, validation des saisies"],["Détectif","Rapprochement bancaire, revue des journaux"],["Correctif","Restauration, procédure de reprise"],["Compensatoire","Revue renforcée quand la séparation des tâches est impossible"]])}
<p><b>Contrôles généraux informatiques</b> (ITGC) : accès, changements, exploitation, développement. <b>Contrôles applicatifs</b> (ITAC) : saisie, traitement, sortie. Si les ITGC sont faibles, on ne peut pas s'appuyer sur les contrôles applicatifs automatisés.</p>
<h2>Types d'audits</h2>
<p>Conformité, financier, opérationnel, intégré (financier + opérationnel + SI), administratif, spécialisé (tiers, fraude, investigation), informatique. Évaluation des contrôles par l'audité lui-même : <b>auto-évaluation des contrôles</b> (CSA), qui complète l'audit sans le remplacer.</p>
`},

{ id:"c2", day:"Domaine 1", title:"Exécuter l'audit : preuves, échantillonnage et rapport", html: D(1,"Processus d'audit des SI",18) + `
<h2>Les tests</h2>
${T(["Test","But","Exemple"],[
["Test de conformité (contrôle)","Vérifier qu'un contrôle existe et fonctionne","Les demandes d'accès sont-elles toutes approuvées ?"],
["Test de substance","Vérifier l'exactitude des données et des soldes","Recalculer les intérêts d'un échantillon de prêts"]])}
<p>Ordre logique : on teste d'abord les contrôles. S'ils sont efficaces, on réduit les tests de substance.</p>
<h2>Les preuves</h2>
<p>Une preuve doit être <b>suffisante</b> (quantité), <b>pertinente</b> et <b>fiable</b>. La fiabilité est meilleure quand la preuve :</p>
<ul><li>vient d'une source <b>indépendante</b> externe (confirmation bancaire) plutôt qu'interne ;</li><li>est obtenue <b>directement</b> par l'auditeur (observation, ré-exécution) plutôt que rapportée ;</li><li>est <b>écrite</b> plutôt qu'orale ;</li><li>est produite par un système dont les contrôles sont bons.</li></ul>
<p>Techniques : examen de documents, entretiens, observation, ré-exécution, confirmation, analyse de données, <b>CAAT</b> (techniques d'audit assistées par ordinateur : ACL, IDEA, Python, SQL).</p>
<h2>L'échantillonnage</h2>
${T(["Méthode","Usage"],[
["Échantillonnage par attributs","Tests de conformité : taux d'écart (approuvé / non approuvé)"],
["Échantillonnage de variables","Tests de substance : montants"],
["Stop-or-go","Arrêter tôt si aucun écart (population à faible erreur attendue)"],
["Découverte (discovery)","Trouver au moins une occurrence d'une fraude rare"],
["Statistique","Sélection aléatoire, risque mesurable, résultats extrapolables"],
["Non statistique (jugement)","Choix de l'auditeur, non extrapolable"]])}
<p>Le <b>coefficient de confiance</b> : plus il est élevé, plus l'échantillon est grand. Un contrôle interne fort permet un coefficient plus faible.</p>
<h2>Audit continu</h2><p>Modules intégrés (EAM), fichiers d'examen SCARF, crochets d'audit, données de test intégrées (ITF), instantanés. Utile pour les systèmes en ligne sans piste papier.</p>
<h2>Le rapport</h2>
<ol><li>Réunion de clôture : valider les constats avec l'audité.</li><li>Rapport : objectifs, périmètre, période, méthode, constats (condition, critère, cause, conséquence), recommandations, opinion, réponses de la direction.</li><li>Suivi : l'auditeur vérifie que les actions ont été mises en œuvre.</li></ol>
<div class="box tip"><h4>Pièges classiques</h4><ul><li>L'auditeur recommande, la direction décide et corrige.</li><li>Si la direction refuse de corriger un risque grave, l'auditeur le signale au comité d'audit.</li><li>Une faiblesse trouvée pendant l'audit est d'abord discutée avec l'audité avant d'aller dans le rapport final.</li></ul></div>
`},

{ id:"c3", day:"Domaine 2", title:"Gouvernance des SI", html: D(2,"Gouvernance et management des SI",18) + `
<h2>Gouvernance et management</h2>
<p>La <b>gouvernance</b> (conseil d'administration) fixe la direction, évalue et surveille. Le <b>management</b> (direction exécutive) planifie, construit, exécute et contrôle. COBIT 2019 formalise cette distinction avec 40 objectifs de gouvernance et de management.</p>
<h2>Structures</h2>
${T(["Instance","Rôle"],[["Conseil d'administration","Responsable final de la gouvernance des SI"],["Comité stratégique IT","Conseille le conseil sur l'alignement stratégique"],["Comité de pilotage IT","Direction : priorise les projets, alloue les ressources"],["Comité d'audit","Supervise l'audit interne et externe"],["DSI / CIO","Exécute la stratégie IT"],["RSSI / CISO","Pilote la sécurité"]])}
<h2>Stratégie et alignement</h2>
<p>La stratégie IT découle de la stratégie de l'entreprise. Outils : <b>tableau de bord prospectif</b> (balanced scorecard IT : contribution métier, orientation utilisateur, excellence opérationnelle, orientation future), architecture d'entreprise (TOGAF, Zachman), gestion du portefeuille.</p>
<h2>Politiques et procédures</h2>
<p>Approche descendante (top-down) : les politiques découlent de la stratégie, plus cohérentes. Approche ascendante (bottom-up) : à partir des risques opérationnels, plus pragmatique. L'auditeur vérifie l'approbation, la diffusion, la revue et l'application.</p>
<h2>Cadres de référence</h2>
${T(["Cadre","Usage"],[["COBIT 2019","Gouvernance et management de l'IT"],["ISO/IEC 27001","Système de management de la sécurité"],["ITIL 4","Gestion des services IT"],["COSO","Contrôle interne (5 composantes)"],["ISO 38500","Gouvernance de l'IT par le conseil"],["NIST CSF 2.0","Cybersécurité (gouverner, identifier, protéger, détecter, répondre, rétablir)"]])}
<h2>Conformité et données</h2>
<p>Lois et règlements (en Côte d'Ivoire : loi 2013-450 sur les données personnelles, loi sur la cybercriminalité, instructions BCEAO pour les banques), contrats, normes du secteur. Gouvernance des données : propriété, qualité, classification, cycle de vie.</p>
`},

{ id:"c4", day:"Domaine 2", title:"Management des SI : risques, ressources, tiers et performance", html: D(2,"Gouvernance et management des SI",18) + `
<h2>Gestion des risques d'entreprise</h2>
<p>Identifier les actifs, les menaces et les vulnérabilités, évaluer l'impact et la probabilité, puis traiter : réduire, transférer, éviter, accepter. L'<b>appétit pour le risque</b> est fixé par le conseil. Le risque résiduel doit rester dans cet appétit.</p>
<h2>Ressources humaines</h2>
<p>Contrôles RH : vérification des antécédents, contrat avec clauses de confidentialité, formation, <b>congés obligatoires</b> et <b>rotation des postes</b> (pour détecter les fraudes), procédure de départ (retrait immédiat des accès).</p>
<h2>Séparation des tâches</h2>
<p>Séparer : autorisation, enregistrement, garde des actifs, et rapprochement. En IT : développement / exploitation / administration de la sécurité / saisie des données. Si la séparation est impossible (petite structure), mettre des contrôles compensatoires : revue des journaux, supervision, rapprochements indépendants.</p>
<h2>Externalisation et tiers</h2>
<ul><li>La responsabilité ne s'externalise pas : l'entreprise reste responsable.</li><li>Contrat : SLA, droit d'audit, confidentialité, réversibilité, localisation des données, sous-traitance.</li><li>Assurance : rapports <b>SOC 1</b> (contrôles pertinents pour l'information financière), <b>SOC 2</b> (sécurité, disponibilité, intégrité, confidentialité, vie privée) ; <b>type I</b> = conception à une date, <b>type II</b> = efficacité sur une période.</li></ul>
<h2>Gestion de la performance</h2>
<p>KPI (performance), KRI (risque), KGI (atteinte des objectifs). Modèles de maturité : COBIT utilise des niveaux de capacité de 0 à 5.</p>
<h2>Gestion de la qualité</h2><p>ISO 9001, amélioration continue, satisfaction des utilisateurs.</p>
`},

{ id:"c5", day:"Domaine 3", title:"Acquisition et gestion de projets", html: D(3,"Acquisition, développement et mise en œuvre des SI",12) + `
<h2>Le dossier d'opportunité (business case)</h2>
<p>Justifie l'investissement : besoin métier, options, coûts, bénéfices, risques. Il doit être revu à chaque étape clé du projet : si les hypothèses changent, le projet peut être arrêté.</p>
<p>Indicateurs financiers : retour sur investissement (ROI), valeur actuelle nette (VAN), délai de récupération, coût total de possession (TCO).</p>
<h2>Gestion de projet</h2>
${T(["Rôle","Responsabilité"],[["Sponsor","Finance le projet, responsable des bénéfices"],["Comité de pilotage","Décisions majeures, arbitrages"],["Chef de projet","Pilotage au quotidien"],["Utilisateurs clés","Expriment les besoins, réalisent la recette"],["Assurance qualité","Vérifie le respect des normes"],["Auditeur","Conseille sur les contrôles, reste indépendant"]])}
<p>Outils : WBS (découpage), Gantt, PERT, <b>chemin critique</b> (suite des tâches sans marge : tout retard retarde le projet), <b>méthode de la valeur acquise</b> (EVA), points de fonction pour estimer la taille d'un logiciel.</p>
<h2>Acquisition de logiciels</h2>
<ol><li>Étude de faisabilité.</li><li>Définition des exigences (fonctionnelles, sécurité, contrôle).</li><li>Appel d'offres (RFP) et grille d'évaluation.</li><li>Visites et références clients.</li><li>Contrat : licences, maintenance, <b>séquestre du code source</b> (escrow) pour se protéger de la faillite de l'éditeur.</li></ol>
<div class="box tip"><h4>Moment clé pour l'auditeur</h4><p>Les contrôles et les exigences de sécurité doivent être définis dès la phase de <b>conception</b> (exigences). Les ajouter après coût beaucoup plus cher.</p></div>
`},

{ id:"c6", day:"Domaine 3", title:"Développement, tests et mise en production", html: D(3,"Acquisition, développement et mise en œuvre des SI",12) + `
<h2>Les approches de développement</h2>
${T(["Approche","Caractéristique","Point de vigilance pour l'audit"],[
["Cascade (SDLC classique)","Phases séquentielles, documentation forte","Rigide, découverte tardive des problèmes"],
["Agile (Scrum)","Itérations courtes (sprints), backlog, retours fréquents","Documentation légère, contrôles à intégrer à la « définition de terminé »"],
["Prototypage","Maquettes rapides","Le prototype ne doit pas devenir la production sans contrôles"],
["RAD","Développement rapide","Qualité et sécurité sacrifiées"],
["DevOps / DevSecOps","Intégration et déploiement continus, automatisation","Séparation des tâches à compenser par des contrôles automatisés et la traçabilité"]])}
<h2>Les tests</h2>
${T(["Test","Objet"],[["Unitaire","Un module isolé"],["D'intégration","Les interfaces entre modules"],["Système","Tout le système : performance, sécurité, charge, reprise"],["De recette (UAT)","Les utilisateurs valident que le besoin est couvert"],["De non-régression","Une modification n'a rien cassé ailleurs"],["Pilote","Déploiement limité à un site"],["Parallèle","Ancien et nouveau systèmes tournent ensemble et on compare"]])}
<p>Boîte blanche (logique interne) et boîte noire (fonctionnalités). Tests <b>bottom-up</b> (modules d'abord) et <b>top-down</b> (interfaces d'abord, erreurs critiques trouvées tôt).</p>
<h2>Migration et bascule</h2>
<p>Conversion des données : rapprochement des totaux de contrôle, nombre d'enregistrements, sommes, échantillons. Stratégies de bascule : parallèle (sûre, coûteuse), progressive, directe (« big bang », risquée). Prévoir un retour arrière.</p>
<h2>Revue post-implémentation</h2>
<p>Quelques semaines ou mois après : les bénéfices du business case sont-ils atteints ? Les contrôles fonctionnent-ils ? Leçons pour les projets suivants.</p>
<h2>Contrôles applicatifs (ITAC)</h2>
${T(["Phase","Contrôles"],[
["Saisie","Contrôle de format, de plage, de vraisemblance, existence, clé de contrôle (check digit), totaux de lot, saisie en double"],
["Traitement","Totaux de contrôle (run-to-run), rapprochements, gestion des erreurs, pistes d'audit"],
["Sortie","Distribution contrôlée, rapprochement des totaux, protection des états sensibles"]])}
`},

{ id:"c7", day:"Domaine 4", title:"Exploitation des SI et gestion des services", html: D(4,"Exploitation des SI et résilience de l'activité",26) + `
<h2>Gestion des services (ITIL)</h2>
${T(["Processus","À retenir"],[
["Gestion des incidents","Rétablir le service au plus vite"],
["Gestion des problèmes","Trouver la cause racine des incidents récurrents"],
["Gestion des changements","Demande, évaluation, approbation (CAB), test, déploiement, revue ; procédure d'urgence documentée et approuvée après coup"],
["Gestion des mises en production","Regrouper et déployer les changements approuvés"],
["Gestion des configurations","CMDB : éléments de configuration et leurs relations"],
["Gestion des niveaux de service","SLA avec le métier, OLA en interne, contrats de sous-traitance"],
["Gestion des capacités","Anticiper les besoins de ressources"]])}
<div class="box key"><h4>Séparation des tâches dans les changements</h4><p>Le développeur ne doit pas mettre lui-même son code en production. Un tiers (équipe d'exploitation, outil automatisé contrôlé) déplace le code approuvé. L'auditeur compare la liste des changements en production avec les demandes approuvées.</p></div>
<h2>Exploitation</h2>
<p>Ordonnancement des traitements (batch), surveillance, gestion des journaux, gestion des correctifs, gestion des actifs et des licences, contrôle des utilitaires puissants, gestion des bases de données (DBA : droits très élevés à surveiller).</p>
<h2>Matériel et réseaux</h2>
<p>Maintenance préventive, surveillance des capacités, rapports d'anomalies. Réseau : modèle OSI, LAN/WAN, cloud, virtualisation. L'auditeur vérifie la documentation, la surveillance et la sécurité des équipements.</p>
<h2>Shadow IT et applications utilisateur</h2>
<p>Les tableurs critiques développés par les utilisateurs (EUC) échappent souvent aux contrôles : inventaire, protection, validation des formules, sauvegarde.</p>
`},

{ id:"c8", day:"Domaine 4", title:"Résilience : continuité et reprise", html: D(4,"Exploitation des SI et résilience de l'activité",26) + `
<h2>Les étapes du plan de continuité</h2>
<ol><li><b>Analyse d'impact sur l'activité (BIA)</b> : processus critiques, impacts d'une interruption, RTO, RPO. C'est la première étape et la plus importante.</li><li>Stratégie de continuité et de reprise.</li><li>Rédaction du PCA (continuité d'activité) et du PRA (reprise informatique).</li><li>Formation et sensibilisation.</li><li>Tests.</li><li>Maintenance du plan.</li></ol>
${T(["Indicateur","Sens"],[["RTO","Durée maximale d'arrêt tolérée"],["RPO","Perte de données maximale tolérée"],["SDO","Niveau de service minimal pendant la crise"],["MTO / MTD","Durée maximale avant dommages irréversibles"]])}
<p>Plus le RTO et le RPO sont courts, plus la solution est chère.</p>
<h2>Sites de secours</h2>
${T(["Site","Délai","Coût"],[["Miroir (mirrored)","Quasi immédiat","Très élevé"],["Chaud (hot)","Heures","Élevé"],["Tiède (warm)","Jours","Moyen"],["Froid (cold)","Semaines","Faible"],["Accord de réciprocité","Variable","Faible mais peu fiable"]])}
<h2>Sauvegardes</h2>
<p>Complète, incrémentale, différentielle ; rotation (grand-père / père / fils) ; copie hors site ; tests de restauration réguliers ; journalisation électronique et mise en miroir pour les RPO très courts. RAID : disponibilité, pas sauvegarde.</p>
<h2>Les tests de plan</h2>
${T(["Test","Description"],[["Revue documentaire (checklist)","Relire le plan"],["Sur table / walkthrough","Dérouler un scénario en réunion"],["Simulation","Jouer un scénario sans couper la production"],["Parallèle","Démarrer le site de secours sans arrêter la production"],["Interruption complète","Arrêt réel de la production : le plus réaliste et le plus risqué"]])}
<div class="box tip"><h4>Ce que l'auditeur vérifie en premier</h4><p>Que le plan repose sur une BIA à jour, qu'il a été testé récemment, que les résultats des tests ont donné lieu à des corrections, et que des copies du plan existent hors site.</p></div>
<h2>Gestion des incidents de sécurité</h2>
<p>Préparation, détection, confinement, éradication, reprise, retour d'expérience. Distinguer incident, problème et crise ; prévoir la communication de crise.</p>
`},

{ id:"c9", day:"Domaine 5", title:"Protection des actifs : accès et identités", html: D(5,"Protection des actifs informationnels",26) + `
<h2>Cadre de sécurité</h2>
<p>Politique de sécurité, classification des informations par le <b>propriétaire</b>, rôles (propriétaire, dépositaire, utilisateur, administrateur de la sécurité), sensibilisation, conformité à la vie privée (principes : finalité, minimisation, consentement, conservation limitée).</p>
<h2>Contrôle d'accès logique</h2>
<ul><li><b>Identification</b> (qui dit-on être), <b>authentification</b> (le prouver), <b>autorisation</b> (ce qu'on peut faire), <b>traçabilité</b>.</li><li>Facteurs : connaissance, possession, caractéristique (biométrie).</li><li>Biométrie : <b>FAR</b> (taux de fausse acceptation), <b>FRR</b> (faux rejet), <b>CER/EER</b> (point de croisement : plus il est bas, meilleur est le système). Pour un site sensible, on réduit le FAR.</li><li>Moindre privilège, besoin d'en connaître, revues périodiques des accès.</li><li>Comptes à privilèges et comptes génériques : à limiter, surveiller, nominatifs si possible.</li></ul>
<div class="box key"><h4>Audit des accès : le test type</h4><p>Prendre la liste des départs de la période (source RH, indépendante) et vérifier que les comptes ont été désactivés à temps. Prendre un échantillon d'accès et vérifier l'approbation et la cohérence avec le poste.</p></div>
<h2>Sécurité physique et environnementale</h2>
<p>Contrôles d'accès (badges, sas anti-talonnage), surveillance, détection et extinction incendie (gaz inertes pour les salles serveurs, sprinklers à préaction), climatisation, détection d'eau, onduleurs, groupes électrogènes, plancher surélevé.</p>
<h2>Sécurité des réseaux et des postes</h2>
<p>Pare-feu (filtrage de paquets, à état, applicatif, NGFW), DMZ, IDS/IPS, VPN, segmentation, Wi-Fi WPA3, durcissement des postes, antimalware, EDR, gestion des correctifs, gestion des appareils mobiles.</p>
`},

{ id:"c10", day:"Domaine 5", title:"Protection des actifs : données, cryptographie et surveillance", html: D(5,"Protection des actifs informationnels",26) + `
<h2>Cryptographie</h2>
${T(["Outil","Apporte"],[["Chiffrement symétrique (AES)","Confidentialité, rapide"],["Chiffrement asymétrique (RSA, ECC)","Échange de clés, signatures"],["Hachage (SHA-256)","Intégrité"],["Signature numérique","Intégrité, authentification, non-répudiation"],["PKI","Confiance dans les clés publiques via des certificats"]])}
<p>L'auditeur vérifie surtout la <b>gestion des clés</b> : génération, stockage (HSM), rotation, révocation, séparation des rôles.</p>
<h2>Protection des données</h2>
<p>Classification, DLP, masquage et anonymisation des données de test, chiffrement au repos et en transit, effacement sécurisé et destruction des supports, conservation selon les règles légales.</p>
<h2>Cloud et tiers</h2>
<p>Responsabilité partagée (IaaS, PaaS, SaaS), localisation des données, droit d'audit, rapports SOC 2, réversibilité, chiffrement avec clés maîtrisées par le client.</p>
<h2>Surveillance et tests</h2>
<ul><li>Journalisation et SIEM : journaux protégés contre la modification, horloges synchronisées, revue régulière.</li><li>Scans de vulnérabilités et tests d'intrusion autorisés.</li><li>Gestion des incidents et investigation numérique : chaîne de possession, copie bit à bit, hachage.</li></ul>
<h2>Menaces actuelles</h2><p>Rançongiciel, hameçonnage, fraude au président, attaques sur la chaîne d'approvisionnement, menaces internes, risques liés à l'IA (fuite de données dans des outils publics, décisions automatisées non contrôlées).</p>
`}
];

const exam = `
<p class="lead">Le CISA (Certified Information Systems Auditor) d'ISACA est la référence mondiale pour les auditeurs des SI. Il colle directement à ton métier d'auditeur IT. Vérifie les informations à jour sur isaca.org avant de t'inscrire.</p>
<div class="grid">
<div class="card"><span class="stat">150</span><span class="t">questions à choix multiple</span><span class="d">4 réponses, une seule bonne</span></div>
<div class="card"><span class="stat">4 h</span><span class="t">de durée</span><span class="d">Environ 1 minute 30 par question</span></div>
<div class="card"><span class="stat">450</span><span class="t">sur 800 pour réussir</span><span class="d">Score pondéré de 200 à 800</span></div>
</div>
<p>L'examen se passe en centre PSI ou en ligne surveillé. Il est proposé en plusieurs langues, dont le français. Le score pondéré n'est pas un pourcentage : sur ce site, vise au moins 75 % aux examens blancs pour avoir de la marge.</p>
<h2>Les 5 domaines</h2>
<div class="tablewrap"><table><thead><tr><th>Domaine</th><th>Poids</th><th>Modules</th></tr></thead><tbody>
<tr><td>1. Processus d'audit des SI</td><td class="num">18 %</td><td>1, 2</td></tr>
<tr><td>2. Gouvernance et management des SI</td><td class="num">18 %</td><td>3, 4</td></tr>
<tr><td>3. Acquisition, développement et mise en œuvre des SI</td><td class="num">12 %</td><td>5, 6</td></tr>
<tr><td>4. Exploitation des SI et résilience de l'activité</td><td class="num">26 %</td><td>7, 8</td></tr>
<tr><td>5. Protection des actifs informationnels</td><td class="num">26 %</td><td>9, 10</td></tr>
</tbody></table></div>
<h2>Après l'examen</h2>
<p>Pour obtenir le titre, il faut demander la certification dans les 5 ans suivant la réussite, avec <b>5 ans d'expérience</b> en audit, contrôle, assurance ou sécurité des SI. Des équivalences réduisent cette durée jusqu'à 3 ans (diplôme universitaire, autres certifications). Le maintien exige 20 heures de formation continue (CPE) par an et 120 heures sur 3 ans, plus une cotisation annuelle.</p>
<h2>Penser comme ISACA</h2>
<ol><li>Tu es l'auditeur : tu identifies, évalues et recommandes. Tu ne corriges pas toi-même et tu ne décides pas à la place de la direction.</li><li>Le risque d'abord : la bonne réponse traite souvent du risque le plus élevé ou de la cause plutôt que du symptôme.</li><li>Les mots clés « FIRST », « BEST », « MOST important » changent tout : plusieurs réponses peuvent être vraies.</li><li>Une réponse qui commence par comprendre ou évaluer (revoir la politique, faire une BIA, identifier les risques) est souvent la première étape.</li><li>L'indépendance et le comité d'audit sont la réponse quand la question porte sur un conflit.</li></ol>
<h2>Plan de révision sur 8 semaines</h2>
<div class="tablewrap"><table><thead><tr><th>Semaine</th><th>Travail</th></tr></thead><tbody>
<tr><td>1 et 2</td><td>Modules 1 et 2, quiz domaine 1</td></tr><tr><td>3</td><td>Modules 3 et 4</td></tr><tr><td>4</td><td>Modules 5 et 6</td></tr><tr><td>5</td><td>Modules 7 et 8</td></tr><tr><td>6</td><td>Modules 9 et 10</td></tr><tr><td>7 et 8</td><td>Examens blancs, banque de questions officielle ISACA (QAE), révision des erreurs</td></tr>
</tbody></table></div>
`;

CERTS.push({
  id:"cisa", title:"CISA", org:"ISACA",
  intro:"La certification de référence pour l'audit des systèmes d'information : processus d'audit, gouvernance, projets, exploitation, résilience et protection des actifs.",
  examMinutes:240, examQuestions:150, passMark:75,
  modules, exam, questions:[]
});
})();
