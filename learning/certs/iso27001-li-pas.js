/* ISO/IEC 27001 Lead Implementer : parcours débutant ajouté à chaque module (ordre des modules de iso27001-li.js).
   Contenu original ; il ne reproduit pas le texte de la norme. Entreprises fictives. */
PAS("iso27001-li", [
/* m1 Fondamentaux */
{voc:[
["Information","Toute donnée qui a de la valeur : fichiers clients, contrats, plans, mais aussi ce qu'un employé sait."],
["Sécurité de l'information","Préserver la confidentialité, l'intégrité et la disponibilité de l'information."],
["SMSI","Système de management de la sécurité de l'information : l'ensemble organisé de règles, de rôles, de processus et de mesures qui pilote la sécurité et l'améliore en continu."],
["Actif","Ce qui a de la valeur pour l'organisme : information, logiciels, matériels, services, personnes, réputation."],
["Mesure de sécurité","Ce qu'on met en place pour réduire un risque (le terme anglais est « control »)."],
["Cycle PDCA","Planifier, réaliser, vérifier, agir : la boucle d'amélioration continue sur laquelle repose tout système de management."]],
ex:`<p>Une PME fictive de transit, <b>Port Logistique</b>, perd l'ordinateur portable de son directeur commercial, contenant la liste de ses clients et leurs tarifs.</p>
<ul><li><b>Confidentialité</b> touchée : un concurrent pourrait lire les tarifs.</li><li><b>Disponibilité</b> touchée : il n'y avait pas de copie.</li></ul>
<p>Sans SMSI, on achète un antivirus et on oublie. Avec un SMSI, on se demande : quels sont nos actifs ? Quels risques ? Quelles mesures (chiffrement, sauvegarde, règle de stockage) ? Qui est responsable ? Comment vérifier que cela marche ? Et on améliore d'année en année.</p>`,
steps:[
"Comprendre que la sécurité concerne l'information sous toutes ses formes (papier, numérique, orale).",
"Retenir les trois objectifs : C, I, D.",
"Voir le SMSI comme un système de management, pas comme un outil technique.",
"Retenir la boucle PDCA : on planifie, on fait, on vérifie, on corrige, et on recommence."],
exo:[
["un employé modifie par erreur les prix dans le fichier de facturation. Quel critère est touché ?","<p>L'<b>intégrité</b> : l'information n'est plus exacte.</p>"],
["un SMSI, est-ce un logiciel qu'on achète ?","<p>Non. C'est une organisation : politique, rôles, appréciation des risques, mesures, contrôles et amélioration. Des outils peuvent l'aider, mais ne le remplacent pas.</p>"]],
piege:[
"ISO 27001 est une norme d'exigences (certifiable) ; ISO 27002 est un guide de mise en œuvre des mesures (non certifiable).",
"Un SMSI couvre les personnes, les processus et la technologie.",
"Le PDCA s'applique à tout le système, pas à un seul projet."]},

/* m2 Architecture de la norme */
{voc:[
["Structure harmonisée","Plan commun à toutes les normes de management ISO (qualité, environnement, sécurité) : mêmes chapitres, même vocabulaire."],
["Chapitres 4 à 10","Les exigences obligatoires : contexte (4), leadership (5), planification (6), support (7), fonctionnement (8), évaluation des performances (9), amélioration (10)."],
["Annexe A","Liste de 93 mesures de référence, réparties en 4 thèmes : organisationnelles (37), liées aux personnes (8), physiques (14), technologiques (34)."],
["Exigence","Ce que l'organisme doit faire (dans le texte de la norme : « doit »)."],
["Information documentée","Document ou enregistrement que l'organisme doit tenir à jour (procédure) ou conserver (preuve)."]],
ex:`<p>Pour retenir les chapitres, associe-les au PDCA :</p>
${'<div class="tablewrap"><table><thead><tr><th>PDCA</th><th>Chapitres</th><th>En clair</th></tr></thead><tbody><tr><td>Planifier</td><td>4, 5, 6, 7</td><td>Qui sommes-nous, qui dirige, quels risques, quels moyens ?</td></tr><tr><td>Réaliser</td><td>8</td><td>On applique le plan et on traite les risques.</td></tr><tr><td>Vérifier</td><td>9</td><td>On mesure, on audite, la direction fait le point.</td></tr><tr><td>Agir</td><td>10</td><td>On corrige les écarts et on s\'améliore.</td></tr></tbody></table></div>'}`,
steps:[
"Retenir que les chapitres 0 à 3 sont informatifs (introduction, domaine, références, termes).",
"Les chapitres 4 à 10 sont obligatoires : on ne peut pas en exclure.",
"Les mesures de l'Annexe A peuvent être exclues si l'exclusion est justifiée dans la Déclaration d'applicabilité.",
"Associer chaque chapitre à une étape du PDCA."],
exo:[
["une entreprise peut-elle exclure le chapitre 9 (évaluation des performances) car elle « n'a pas le temps d'auditer » ?","<p>Non. Les chapitres 4 à 10 sont obligatoires pour la certification. Seules des mesures de l'Annexe A peuvent être exclues, avec justification.</p>"],
["combien de thèmes compte l'Annexe A de la version 2022 ?","<p><b>Quatre</b> : organisationnel, personnes, physique, technologique.</p>"]],
piege:[
"Version 2022 : 93 mesures (et non 114 comme en 2013).",
"« Doit » = exigence ; « il convient de » = recommandation (dans les guides).",
"La structure harmonisée facilite l'intégration avec ISO 9001 ou ISO 14001."]},

/* m3 Contexte, parties intéressées, périmètre */
{voc:[
["Enjeux internes","Ce qui vient de l'organisme : culture, organisation, compétences, systèmes, ressources."],
["Enjeux externes","Ce qui vient de l'extérieur : lois, marché, concurrence, technologie, menaces, situation politique et économique."],
["Partie intéressée","Personne ou organisme qui peut influer sur l'organisme ou être affecté par ses décisions : clients, régulateur, actionnaires, salariés, fournisseurs."],
["Exigences des parties intéressées","Leurs attentes en matière de sécurité, dont les obligations légales et contractuelles."],
["Domaine d'application (périmètre)","Ce que couvre le SMSI : activités, sites, systèmes, et ses interfaces avec ce qui est hors périmètre."]],
ex:`<p><b>FlashPay</b>, émetteur de monnaie électronique, prépare son SMSI :</p>
<ul><li><b>Enjeux externes</b> : exigences de la BCEAO, loi sur les données personnelles, hausse des fraudes par SIM, concurrence forte.</li>
<li><b>Enjeux internes</b> : équipe informatique de 8 personnes, forte croissance, plateforme hébergée par un prestataire.</li>
<li><b>Parties intéressées</b> : clients (protection de leur argent et de leurs données), BCEAO (conformité), banque partenaire (contrat), distributeurs agréés, opérateur télécom.</li>
<li><b>Périmètre</b> : « la plateforme de paiement mobile, son exploitation à Abidjan et les processus support associés ». Interface : le prestataire d'hébergement est hors périmètre mais encadré par contrat.</li></ul>`,
steps:[
"Lister les enjeux internes et externes (méthodes possibles : SWOT, PESTEL).",
"Lister les parties intéressées et leurs exigences.",
"Décider lesquelles de ces exigences le SMSI traitera.",
"Définir le périmètre : activités, lieux, systèmes, interfaces et dépendances.",
"Documenter le périmètre et le faire valider par la direction."],
exo:[
["peut-on exclure du périmètre le centre d'appels qui accède aux données clients, pour simplifier ?","<p>On peut le laisser hors périmètre, mais il faut gérer l'<b>interface</b> : les données du périmètre y circulent, donc des mesures (accès, contrat, règles) doivent les protéger. Un périmètre qui exclut un élément indispensable pour paraître plus simple sera remis en cause par l'auditeur.</p>"],
["la BCEAO est-elle une partie intéressée de FlashPay ?","<p>Oui : régulateur, elle impose des exigences (sécurité, continuité, déclaration d'incidents).</p>"]],
piege:[
"Le périmètre doit être clair, justifié, et documenté.",
"Les exigences légales et contractuelles font partie des exigences des parties intéressées.",
"Le contexte s'analyse avant les risques : il les éclaire."]},

/* m4 Leadership, politique, rôles */
{voc:[
["Direction","Personne ou groupe qui dirige l'organisme au plus haut niveau."],
["Leadership","La direction s'engage de façon visible : objectifs alignés sur la stratégie, ressources, communication, soutien aux responsables."],
["Politique de sécurité","Engagement écrit de la direction : il fixe le cadre des objectifs, l'engagement à respecter les exigences et à s'améliorer."],
["Rôles et responsabilités","Qui fait quoi dans le SMSI, attribué et communiqué par la direction."],
["RACI","Tableau qui précise pour chaque tâche qui Réalise, qui est Approbateur (rend compte), qui est Consulté, qui est Informé."]],
ex:`<p>À <b>Port Logistique</b>, la politique de sécurité tient sur une page, signée par le DG :</p>
<ul><li>« Nous protégeons les informations de nos clients et partenaires. »</li><li>« Nous respectons les lois et contrats applicables. »</li><li>« Nous fixons chaque année des objectifs de sécurité mesurables. »</li><li>« Nous améliorons notre SMSI en continu. »</li></ul>
<p>Le DG nomme une responsable du SMSI, lui donne du temps et un budget, et présente la politique lors de la réunion annuelle du personnel.</p>`,
steps:[
"Obtenir l'engagement de la direction (c'est la condition de réussite).",
"Rédiger la politique et la faire signer par la direction.",
"La communiquer à tout le personnel et la rendre disponible aux parties intéressées si besoin.",
"Définir les rôles (responsable SMSI, propriétaires des risques, comité) et les communiquer.",
"Prévoir les ressources : temps, budget, compétences."],
exo:[
["le responsable informatique rédige et signe seul la politique de sécurité. Conforme ?","<p>Non. La politique doit être <b>établie par la direction</b>. Il peut la rédiger, mais la direction l'approuve et s'engage.</p>"],
["comment l'auditeur vérifie-t-il le leadership ?","<p>Par des preuves : politique signée, comptes rendus de revue de direction, budget accordé, entretien avec la direction, communication interne.</p>"]],
piege:[
"La direction peut déléguer des tâches, pas la responsabilité.",
"La politique contient des engagements, pas des détails techniques.",
"Sans engagement de la direction, le projet est voué à l'échec : c'est souvent la bonne réponse."]},

/* m5 Appréciation des risques */
{voc:[
["Appréciation du risque","Identifier, analyser et évaluer les risques."],
["Propriétaire du risque","Personne qui a l'autorité et la responsabilité de gérer un risque."],
["Critères d'acceptation","Seuil à partir duquel un risque doit être traité. Exemple : tout risque noté 12 ou plus sur 25."],
["Vraisemblance et conséquences","Probabilité que le risque se produise ; impact s'il se produit."],
["Méthode basée sur les actifs ou sur les scénarios","Partir des actifs et de leurs menaces, ou partir d'événements redoutés. ISO 27005 décrit les deux."],
["Résultats reproductibles","Deux appréciations faites avec la même méthode doivent donner des résultats cohérents et comparables."]],
ex:`<p>Méthode de <b>Port Logistique</b> : vraisemblance 1 à 5 × conséquence 1 à 5 ; acceptation si score inférieur à 10.</p>
${'<div class="tablewrap"><table><thead><tr><th>Risque</th><th>Propriétaire</th><th>V</th><th>C</th><th>Score</th><th>Décision</th></tr></thead><tbody><tr><td>Rançongiciel sur le serveur de dédouanement</td><td>Directeur des opérations</td><td>4</td><td>5</td><td>20</td><td>À traiter</td></tr><tr><td>Vol de portable avec données clients</td><td>Directeur commercial</td><td>3</td><td>4</td><td>12</td><td>À traiter</td></tr><tr><td>Panne du site web vitrine</td><td>Responsable marketing</td><td>2</td><td>2</td><td>4</td><td>Accepté</td></tr></tbody></table></div>'}`,
steps:[
"Définir la méthode et les critères avant de commencer (et les faire approuver).",
"Identifier les risques : actifs, menaces, vulnérabilités ou scénarios.",
"Désigner un propriétaire pour chaque risque.",
"Analyser : vraisemblance et conséquences, en tenant compte des mesures existantes.",
"Évaluer : comparer aux critères et classer par priorité.",
"Conserver les résultats comme information documentée et refaire l'appréciation à intervalles planifiés ou après un changement important."],
exo:[
["l'équipe note les risques au feeling, sans échelle écrite. Quelle exigence n'est pas respectée ?","<p>La méthode doit produire des résultats <b>cohérents, valides et comparables</b> : il faut des critères définis et documentés.</p>"],
["V = 2, C = 5, seuil d'acceptation : moins de 10. Le risque est-il accepté ?","<p>Score 10 : il n'est <b>pas</b> inférieur à 10, donc il doit être traité (ou accepté formellement par le propriétaire selon la règle fixée).</p>"]],
piege:[
"La norme n'impose pas de méthode précise, mais impose des critères définis et des résultats reproductibles.",
"Chaque risque doit avoir un propriétaire.",
"Il faut refaire l'appréciation en cas de changement significatif."]},

/* m6 Traitement et DdA */
{voc:[
["Options de traitement","Modifier (réduire) le risque, le conserver (accepter), l'éviter, le partager."],
["Plan de traitement des risques","Qui fait quoi, avec quelles ressources, pour quelle date, pour chaque risque traité."],
["Déclaration d'applicabilité (DdA, SoA en anglais)","Document qui liste les 93 mesures de l'Annexe A, dit si chacune est appliquée ou non, justifie chaque inclusion et exclusion, et indique son état de mise en œuvre."],
["Risque résiduel","Risque restant après traitement ; il doit être accepté par son propriétaire."],
["Mesures complémentaires","On peut ajouter des mesures hors Annexe A (réglementaires, sectorielles)."]],
ex:`<p>Suite du cas <b>Port Logistique</b> :</p>
<ul><li>Rançongiciel (20) → <b>réduire</b> : sauvegarde hors ligne quotidienne (A.8.13), EDR (A.8.7), MFA pour l'accès distant (A.8.5). Responsable : DSI. Échéance : 3 mois. Risque résiduel visé : 8.</li>
<li>Vol de portable (12) → <b>réduire</b> : chiffrement des disques (A.8.24), règles sur les appareils mobiles (A.8.1).</li></ul>
<p>Extrait de la DdA :</p>
${'<div class="tablewrap"><table><thead><tr><th>Mesure</th><th>Applicable</th><th>Justification</th><th>État</th></tr></thead><tbody><tr><td>A.8.13 Sauvegarde</td><td>Oui</td><td>Risque rançongiciel (20)</td><td>En cours</td></tr><tr><td>A.8.28 Codage sécurisé</td><td>Non</td><td>Aucun développement interne ; logiciels achetés</td><td>—</td></tr><tr><td>A.7.4 Surveillance physique</td><td>Oui</td><td>Entrepôt avec documents douaniers</td><td>Mise en œuvre</td></tr></tbody></table></div>'}`,
steps:[
"Pour chaque risque à traiter, choisir une option de traitement.",
"Déterminer les mesures nécessaires, avec l'aide de l'Annexe A.",
"Comparer avec l'Annexe A pour vérifier qu'aucune mesure nécessaire n'a été oubliée.",
"Rédiger la DdA : toutes les mesures, applicables ou non, avec justification.",
"Établir le plan de traitement et le faire approuver.",
"Faire accepter les risques résiduels par les propriétaires."],
exo:[
["une mesure de l'Annexe A est exclue sans explication dans la DdA. Est-ce un écart ?","<p>Oui. Chaque exclusion doit être <b>justifiée</b>. L'auditeur relèvera une non-conformité.</p>"],
["qui approuve le plan de traitement et accepte les risques résiduels ?","<p>Les <b>propriétaires des risques</b>.</p>"]],
piege:[
"La DdA liste les 93 mesures, pas seulement celles appliquées.",
"L'Annexe A sert de liste de vérification : on part des risques, puis on vérifie avec l'Annexe A.",
"Le risque résiduel doit être accepté formellement."]},

/* m7 Annexe A : les 93 mesures */
{voc:[
["Mesures organisationnelles (A.5, 37)","Politiques, rôles, gestion des actifs, des fournisseurs, des incidents, de la continuité, conformité."],
["Mesures liées aux personnes (A.6, 8)","Vérification avant embauche, contrat, sensibilisation, sanction, départ, confidentialité, télétravail, signalement."],
["Mesures physiques (A.7, 14)","Périmètres, entrées, bureaux, surveillance, matériel, bureau propre, supports, câblage, maintenance, mise au rebut."],
["Mesures technologiques (A.8, 34)","Postes, accès privilégiés, authentification, logiciels malveillants, vulnérabilités, sauvegarde, journalisation, réseau, chiffrement, développement."],
["Nouvelles mesures 2022","Renseignement sur les menaces, sécurité du cloud, préparation des TIC pour la continuité, surveillance physique, gestion de la configuration, suppression d'information, masquage, prévention des fuites, surveillance des activités, filtrage web, codage sécurisé."]],
ex:`<p>Astuce pour classer une mesure : <b>qui ou quoi la porte ?</b></p>
<ul><li>Un processus ou une règle d'organisation → organisationnelle (A.5). Exemple : « gestion des incidents ».</li>
<li>Une personne, au cours de son contrat → personnes (A.6). Exemple : « sensibilisation ».</li>
<li>Un lieu, un objet physique → physique (A.7). Exemple : « bureau propre et écran verrouillé ».</li>
<li>Un système informatique → technologique (A.8). Exemple : « journalisation ».</li></ul>
<p>Cas : <b>FlashPay</b> utilise des données de clients pour tester son application. Mesure concernée : A.8.33 (informations de test) avec A.8.11 (masquage des données).</p>`,
steps:[
"Apprendre les 4 thèmes et leur nombre : 37, 8, 14, 34.",
"Pour chaque risque, chercher dans quel thème se trouve la réponse.",
"Lire ISO 27002 pour comprendre l'objectif et la mise en œuvre de chaque mesure.",
"Utiliser les attributs de la 27002 (type de contrôle, propriété de sécurité, concept de cybersécurité) pour filtrer."],
exo:[
["la vérification des antécédents avant l'embauche relève de quel thème ?","<p>Thème <b>personnes</b> (A.6).</p>"],
["la sécurité des services cloud utilisés par l'entreprise relève de quel thème ?","<p>Thème <b>organisationnel</b> (A.5) : c'est un processus d'acquisition, d'utilisation et de sortie des services cloud.</p>"]],
piege:[
"Les mesures de l'Annexe A ne sont pas toutes obligatoires ; elles sont à considérer selon les risques.",
"Le bureau propre est une mesure physique, même s'il concerne le comportement.",
"ISO 27002 donne les recommandations détaillées ; l'Annexe A donne seulement l'énoncé."]},

/* m8 Objectifs, support, documentation */
{voc:[
["Objectif de sécurité","But mesurable, cohérent avec la politique : quoi, quelles ressources, qui, pour quand, comment on évaluera le résultat."],
["Compétence","Capacité prouvée (formation, expérience, diplôme) de faire un travail qui touche à la sécurité."],
["Sensibilisation","Chaque personne connaît la politique, sa contribution et les conséquences d'un manquement."],
["Communication","Ce qu'on communique, quand, à qui, comment, et qui le fait."],
["Maîtrise des documents","Identification, version, approbation, diffusion, accès, conservation, destruction."]],
ex:`<p>Objectifs de <b>Port Logistique</b> pour l'année :</p>
${'<div class="tablewrap"><table><thead><tr><th>Objectif</th><th>Indicateur</th><th>Responsable</th><th>Échéance</th></tr></thead><tbody><tr><td>Réduire le clic sur les e-mails piégés</td><td>Taux de clic &lt; 10 %</td><td>Responsable SMSI</td><td>Décembre</td></tr><tr><td>Rétablir le dédouanement en moins de 4 h</td><td>Test de reprise réussi</td><td>DSI</td><td>Septembre</td></tr><tr><td>Zéro compte actif de partant</td><td>Revue mensuelle</td><td>DRH + DSI</td><td>En continu</td></tr></tbody></table></div>'}
<p>Pour la compétence de l'administrateur réseau : fiche de poste, CV, attestation de formation, conservés au dossier.</p>`,
steps:[
"Fixer des objectifs mesurables et les planifier (quoi, qui, quand, comment mesurer).",
"Prévoir les ressources nécessaires.",
"Définir les compétences requises et conserver les preuves.",
"Organiser la sensibilisation et la communication.",
"Maîtriser les documents : version, approbation, accès, conservation."],
exo:[
["« Améliorer la sécurité » est-il un bon objectif ?","<p>Non : il n'est pas <b>mesurable</b>. Exemple correct : « 100 % des accès distants protégés par MFA d'ici juin ».</p>"],
["quelle preuve l'auditeur demande-t-il pour la compétence ?","<p>Des <b>informations documentées</b> : diplômes, attestations de formation, évaluations, expérience.</p>"]],
piege:[
"Un objectif sans indicateur ni échéance n'est pas conforme.",
"La sensibilisation concerne aussi les sous-traitants qui travaillent pour l'organisme.",
"Un document obsolète en circulation est un écart de maîtrise documentaire."]},

/* m9 Mise en œuvre opérationnelle */
{voc:[
["Planification opérationnelle","Mettre en œuvre les processus et les mesures prévus, et conserver la preuve qu'ils fonctionnent."],
["Changements planifiés","Les changements sont maîtrisés et leurs effets imprévus sont analysés."],
["Processus externalisés","Les activités confiées à l'extérieur restent maîtrisées par l'organisme."],
["Mise en œuvre du plan de traitement","Les mesures choisies sont réellement déployées, avec des preuves."],
["Enregistrement","Preuve qu'une activité a été faite : ticket, journal, compte rendu, formulaire signé."]],
ex:`<p>Mise en œuvre de la sauvegarde chez <b>Port Logistique</b> :</p>
<ol><li>Procédure écrite : quoi sauvegarder, quand, où, qui vérifie.</li><li>Outil configuré : sauvegarde chaque nuit, copie hebdomadaire sur un disque déconnecté rangé hors site.</li><li>Contrôle : rapport quotidien vérifié par le technicien (enregistrement signé).</li><li>Test de restauration mensuel : 3 fichiers au hasard, résultat noté.</li></ol>
<p>Sans ces enregistrements, l'auditeur ne pourra pas vérifier que la mesure fonctionne.</p>`,
steps:[
"Transformer chaque mesure du plan en procédure ou en configuration.",
"Former les personnes qui les appliquent.",
"Conserver des enregistrements qui prouvent l'application.",
"Maîtriser les changements et les prestataires.",
"Refaire l'appréciation des risques à intervalles planifiés ou en cas de changement majeur."],
exo:[
["la procédure de sauvegarde existe, mais aucun test de restauration n'a jamais été fait. Que dira l'auditeur ?","<p>Que l'efficacité de la mesure n'est pas démontrée. C'est un écart ou au minimum une opportunité d'amélioration importante selon les exigences internes : il faut tester et conserver la preuve.</p>"],
["un prestataire gère les pare-feux. L'organisme est-il encore responsable de leur sécurité ?","<p>Oui. Il doit maîtriser ce processus externalisé : contrat, exigences, suivi, rapports.</p>"]],
piege:[
"Pas d'enregistrement = pas de preuve pour l'auditeur.",
"Le chapitre 8 exige aussi de réapprécier et de retraiter les risques.",
"Externaliser n'enlève pas la responsabilité."]},

/* m10 Surveillance et mesure */
{voc:[
["Surveillance","Déterminer l'état d'un système ou d'une activité (observer)."],
["Mesure","Déterminer une valeur (compter, calculer)."],
["Indicateur","Mesure comparée à une cible, qui aide à décider."],
["Efficacité","Le résultat attendu est-il atteint ?"],
["Tableau de bord","Ensemble d'indicateurs présentés régulièrement à la direction."]],
ex:`<p>Le responsable SMSI de <b>Port Logistique</b> définit, pour chaque indicateur : quoi mesurer, comment, quand, qui mesure, quand analyser, qui analyse.</p>
${'<div class="tablewrap"><table><thead><tr><th>Indicateur</th><th>Cible</th><th>T1</th><th>T2</th><th>Analyse</th></tr></thead><tbody><tr><td>Correctifs critiques appliqués sous 15 jours</td><td>95 %</td><td>70 %</td><td>92 %</td><td>Progrès grâce au nouvel outil</td></tr><tr><td>Taux de clic aux simulations</td><td>&lt; 10 %</td><td>25 %</td><td>14 %</td><td>Formation à poursuivre</td></tr></tbody></table></div>'}`,
steps:[
"Choisir ce qu'il faut surveiller : processus et mesures importantes.",
"Définir la méthode, la fréquence et les responsables.",
"Collecter les données et calculer les indicateurs.",
"Analyser les résultats et les écarts à la cible.",
"Présenter à la direction et décider des actions."],
exo:[
["« nombre d'alertes du pare-feu » est-il un bon indicateur d'efficacité ?","<p>Pas seul : il ne dit pas si le résultat est bon ou mauvais. Un indicateur utile a une cible et mesure un résultat (exemple : « incidents graves dus à un accès réseau non autorisé : 0 »).</p>"]],
piege:[
"La norme exige de définir qui mesure et qui analyse.",
"Les résultats doivent être conservés comme preuve.",
"On mesure la performance de la sécurité et l'efficacité du SMSI."]},

/* m11 Audit interne et revue de direction */
{voc:[
["Audit interne","Vérification planifiée et indépendante que le SMSI respecte la norme et les règles internes, et qu'il est appliqué efficacement."],
["Programme d'audit","Plan des audits sur une période (souvent 3 ans) : fréquence, méthodes, responsabilités."],
["Objectivité et impartialité","L'auditeur ne s'audite pas lui-même."],
["Revue de direction","Réunion où la direction examine le SMSI à intervalles planifiés et prend des décisions."],
["Éléments d'entrée de la revue","État des actions précédentes, changements du contexte, retours des parties intéressées, résultats de mesure, d'audits, risques, opportunités d'amélioration."]],
ex:`<p>Programme d'audit de <b>Port Logistique</b> : tout le SMSI audité sur 12 mois, en 3 audits. La responsable du SMSI n'audite pas ses propres processus : un collègue de la qualité, formé à la 27001, s'en charge.</p>
<p>Revue de direction de décembre : le DG examine les indicateurs, les résultats d'audit (2 non-conformités mineures), les incidents de l'année, les changements (nouveau client européen exigeant), et décide : budget pour un EDR, objectif de reprise en 4 h, nouvel audit fournisseur.</p>`,
steps:[
"Établir le programme d'audit selon l'importance des processus et les résultats passés.",
"Choisir des auditeurs objectifs et compétents.",
"Pour chaque audit : critères, périmètre, preuves, rapport à la direction concernée.",
"Organiser la revue de direction avec tous les éléments d'entrée requis.",
"Conserver les preuves (rapports d'audit, compte rendu de revue avec décisions)."],
exo:[
["la responsable du SMSI peut-elle auditer la procédure de gestion des incidents qu'elle a rédigée ?","<p>Non : elle ne serait pas impartiale. Il faut un autre auditeur interne ou un prestataire externe.</p>"],
["la revue de direction s'est tenue mais aucune décision n'est notée. Problème ?","<p>Oui : les <b>éléments de sortie</b> (décisions sur l'amélioration et les changements nécessaires) doivent être documentés.</p>"]],
piege:[
"L'audit interne est obligatoire avant l'audit de certification.",
"L'auditeur interne ne doit pas auditer son propre travail.",
"La revue de direction doit produire des décisions documentées."]},

/* m12 Amélioration et actions correctives */
{voc:[
["Non-conformité","Exigence non satisfaite (de la norme, d'une règle interne, d'une loi, d'un contrat)."],
["Correction","Action immédiate pour supprimer l'écart constaté (réparer)."],
["Action corrective","Action pour supprimer la <b>cause</b> de l'écart, afin qu'il ne se reproduise pas."],
["Analyse des causes","Méthodes : les « 5 pourquoi », le diagramme d'Ishikawa (causes par familles)."],
["Amélioration continue","Rendre le SMSI de plus en plus pertinent, adapté et efficace."]],
ex:`<p>Constat d'audit : 6 comptes de partants encore actifs.</p>
<ul><li><b>Correction</b> : désactiver les 6 comptes aujourd'hui.</li>
<li><b>Analyse des causes</b> (5 pourquoi) : pourquoi actifs ? L'informatique n'a pas été prévenue. Pourquoi ? Les RH envoient un e-mail à une personne. Pourquoi ? Pas de procédure. Pourquoi ? Le processus d'arrivée et de départ n'a pas été formalisé lors de la création du SMSI.</li>
<li><b>Action corrective</b> : procédure de départ avec notification automatique depuis l'outil RH, et contrôle mensuel.</li>
<li><b>Vérification de l'efficacité</b> : 3 mois plus tard, la revue mensuelle ne trouve aucun compte de partant actif.</li></ul>`,
steps:[
"Réagir à la non-conformité : corriger et traiter les conséquences.",
"Analyser la cause et chercher si des écarts similaires existent ailleurs.",
"Mettre en œuvre l'action corrective.",
"Vérifier son efficacité.",
"Mettre à jour le SMSI si besoin et conserver les preuves."],
exo:[
["désactiver les comptes des partants trouvés par l'auditeur : correction ou action corrective ?","<p>C'est une <b>correction</b>. L'action corrective traite la cause (le processus de départ).</p>"]],
piege:[
"Correction ≠ action corrective.",
"On doit vérifier l'efficacité de l'action corrective.",
"L'action corrective doit être proportionnée aux effets de la non-conformité."]},

/* m13 Audit de certification */
{voc:[
["Organisme de certification","Organisme indépendant, accrédité, qui audite et délivre le certificat."],
["Étape 1","Revue documentaire et de préparation : périmètre, DdA, appréciation des risques, audit interne, revue de direction. Elle dit si l'organisme est prêt pour l'étape 2."],
["Étape 2","Audit sur site de la mise en œuvre et de l'efficacité du SMSI."],
["Non-conformité majeure / mineure","Majeure : une exigence n'est pas remplie ou le système ne peut pas atteindre ses résultats ; elle bloque la certification jusqu'à correction. Mineure : écart isolé, qui demande un plan d'action."],
["Cycle de certification","Certificat valable 3 ans, avec des audits de surveillance chaque année, puis un audit de renouvellement."]],
ex:`<p>Calendrier de <b>Port Logistique</b> :</p>
<ol><li>Mois 1 à 8 : mise en œuvre du SMSI.</li><li>Mois 9 : audit interne complet et revue de direction.</li><li>Mois 10 : <b>étape 1</b>. L'auditeur demande de préciser la justification de 3 exclusions de la DdA.</li><li>Mois 11 : <b>étape 2</b>. Une non-conformité mineure : tests de restauration non enregistrés en mars.</li><li>Plan d'action accepté → certificat délivré. Audits de surveillance aux mois 23 et 35, renouvellement au mois 36.</li></ol>`,
steps:[
"Vérifier que tout le cycle PDCA a tourné au moins une fois (audit interne et revue de direction inclus).",
"Préparer les documents et les preuves, et désigner des interlocuteurs.",
"Passer l'étape 1, traiter les points soulevés.",
"Passer l'étape 2 : montrer les preuves de fonctionnement.",
"Répondre aux non-conformités par des corrections et actions correctives dans les délais.",
"Maintenir le SMSI pour les audits de surveillance."],
exo:[
["l'organisme n'a pas fait d'audit interne avant l'étape 1. Conséquence probable ?","<p>Une <b>non-conformité majeure</b> (exigence du chapitre 9 non remplie). La certification ne peut pas être accordée tant que ce n'est pas corrigé.</p>"],
["combien de temps dure un certificat ISO 27001 ?","<p><b>Trois ans</b>, avec des audits de surveillance annuels.</p>"]],
piege:[
"Le consultant qui a mis en œuvre le SMSI ne peut pas faire l'audit de certification (conflit d'intérêts).",
"L'étape 1 n'est pas un audit d'efficacité : c'est une vérification de préparation.",
"Une non-conformité majeure bloque la certification jusqu'à preuve de correction."]}
]);
