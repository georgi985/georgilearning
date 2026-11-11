/* CISM : parcours débutant ajouté à chaque module (ordre des modules de cism.js). Contenu original ; entreprises fictives. */
PAS("cism", [
/* g1 Gouvernance : culture, stratégie et rôles */
{voc:[
["Gouvernance","Le fait de <b>diriger et contrôler</b>. La direction fixe le cap (ce qu'on veut protéger, jusqu'où on accepte le risque) et vérifie que c'est respecté. La gestion (le management) exécute au quotidien."],
["Appétit pour le risque","La quantité de risque que l'entreprise accepte de prendre pour atteindre ses objectifs. Exemple : « aucune interruption du paiement mobile de plus de 4 heures »."],
["Tolérance au risque","L'écart acceptable autour de l'appétit : par exemple, une interruption de 5 heures est tolérée une fois par an."],
["Propriétaire du risque","La personne métier qui subira les conséquences et qui a l'autorité pour décider : accepter, réduire, transférer ou éviter."],
["Partie prenante","Toute personne ou entité concernée : actionnaires, clients, régulateur (BCEAO, ARTCI), salariés, partenaires."],
["Feuille de route","Plan daté qui fait passer l'organisation de l'état actuel à l'état cible, avec budget et responsables."]],
ex:`<p>La banque fictive <b>Banque Lagune</b> lance une application mobile. Le directeur général veut l'ouvrir dans 3 mois. Le RSSI constate que les tests de sécurité ne seront pas finis.</p>
<ul><li><b>Mauvais réflexe technique</b> : le RSSI bloque seul le lancement.</li>
<li><b>Réflexe CISM</b> : le RSSI présente le risque au comité de pilotage, en langage métier (fraude possible, sanction du régulateur, image), avec des options : décaler de 3 semaines, lancer avec des plafonds de transaction réduits, ou accepter le risque. Le <b>propriétaire du risque</b> (directeur de la banque digitale) décide et signe.</li></ul>
<p>La sécurité ne dit pas « non » : elle éclaire la décision de ceux qui ont l'autorité.</p>`,
steps:[
"Lire la stratégie de l'entreprise : quels sont ses objectifs à 3 ans ? (croissance, nouveaux produits, conformité).",
"Identifier les parties prenantes et ce qu'elles attendent de la sécurité.",
"Mesurer l'état actuel : maturité, incidents passés, résultats d'audit.",
"Définir l'état cible qui soutient ces objectifs, dans l'appétit pour le risque fixé par le conseil.",
"Lister les écarts, les chiffrer et les classer par priorité.",
"Présenter la feuille de route à la direction pour obtenir son approbation et un budget."],
exo:[
["le nouveau RSSI d'une compagnie d'assurance arrive. Quelle est sa toute première action ?","<p>Comprendre l'organisation : sa stratégie, ses objectifs métier, sa culture et ses parties prenantes. On ne peut pas aligner la sécurité sur des objectifs qu'on ne connaît pas. Acheter un outil ou rédiger une politique vient après.</p>"],
["un responsable métier refuse de corriger une faiblesse et dit « j'accepte ce risque ». Le RSSI pense que c'est dangereux. Que fait-il ?","<p>Il vérifie que le risque reste dans l'appétit fixé par la direction. Si oui, il documente l'acceptation (registre des risques, signature). Si le risque dépasse l'appétit, il remonte au niveau de direction supérieur ou au comité. Il ne corrige pas de force.</p>"]],
piege:[
"Une réponse où le RSSI « décide » ou « accepte » le risque est presque toujours fausse.",
"Le soutien de la direction vient avant tout le reste : sans lui, le programme échoue.",
"Entre une réponse technique et une réponse d'alignement métier, choisis l'alignement."]},

/* g2 Politiques, cadres et indicateurs */
{voc:[
["Politique","Document court, approuvé par la direction, qui dit <b>quoi</b> et <b>pourquoi</b>. Elle change rarement."],
["Norme (standard interne)","Règle obligatoire et mesurable qui précise la politique. Exemple : « mots de passe de 12 caractères minimum »."],
["Procédure","Mode opératoire pas à pas : <b>comment</b> faire."],
["Ligne directrice (guideline)","Conseil non obligatoire."],
["Cadre de référence","Modèle reconnu pour structurer le programme : ISO 27001, COBIT, NIST CSF."],
["KGI, KPI, KRI","KGI : l'objectif est-il atteint ? KPI : le processus fonctionne-t-il bien ? KRI : le risque augmente-t-il ? (indicateur d'alerte)."]],
ex:`<p>L'opérateur télécom fictif <b>SavaneTel</b> organise sa documentation en pyramide :</p>
${'<div class="tablewrap"><table><thead><tr><th>Niveau</th><th>Exemple</th><th>Approuvé par</th></tr></thead><tbody><tr><td>Politique</td><td>« Les accès sont attribués selon le besoin d\'en connaître. »</td><td>Direction générale</td></tr><tr><td>Norme</td><td>« Revue des droits tous les 6 mois ; MFA pour tout accès distant. »</td><td>RSSI / comité</td></tr><tr><td>Procédure</td><td>« Étape 1 : le manager remplit la demande dans l\'outil… »</td><td>Responsable du processus</td></tr><tr><td>Guide</td><td>« Astuce : utiliser une phrase de passe. »</td><td>Équipe sécurité</td></tr></tbody></table></div>'}
<p>Indicateurs : <b>KGI</b> = 100 % des applications critiques couvertes par la revue des accès ; <b>KPI</b> = délai moyen de retrait des droits d'un partant (objectif : 24 h) ; <b>KRI</b> = nombre de comptes actifs de personnes parties (alerte au-delà de 5).</p>`,
steps:[
"Partir des exigences : lois, régulateur, contrats, risques majeurs.",
"Rédiger une politique courte, signée par la direction.",
"La décliner en normes mesurables puis en procédures.",
"Choisir des indicateurs qui parlent à la direction (risque, coût, conformité), pas seulement des chiffres techniques.",
"Revoir les documents au moins une fois par an ou après un changement majeur."],
exo:[
["« Tout ordinateur portable doit être chiffré avec un algorithme AES 256 bits » : politique, norme ou procédure ?","<p>C'est une <b>norme</b> : elle est obligatoire et précise, mesurable. Une politique dirait seulement « les données sur les équipements mobiles doivent être protégées ».</p>"],
["quel indicateur montrer au conseil d'administration : le nombre de virus bloqués ou le pourcentage de systèmes critiques non corrigés au-delà de 30 jours ?","<p>Le second. Il est lié au risque et à une décision possible (moyens, priorités). Le nombre de virus bloqués est un chiffre opérationnel sans signification pour le conseil.</p>"]],
piege:[
"Une politique ne contient pas de détails techniques ; si la technique change, seule la norme change.",
"Le meilleur indicateur est celui qui aide la direction à décider.",
"Une exception à une politique doit être documentée, approuvée par le propriétaire du risque et limitée dans le temps."]},

/* g3 Appréciation des risques */
{voc:[
["Actif","Tout ce qui a de la valeur : données clients, application de paiement, serveurs, réputation, personnes clés."],
["Menace","Ce qui peut causer un dommage : fraudeur, rançongiciel, incendie, erreur humaine."],
["Vulnérabilité","La faiblesse exploitable : mot de passe faible, logiciel non corrigé, absence de sauvegarde."],
["Risque","La combinaison de la <b>probabilité</b> qu'une menace exploite une vulnérabilité et de l'<b>impact</b> sur l'activité."],
["Risque inhérent / résiduel","Inhérent : avant les mesures. Résiduel : ce qui reste après les mesures."],
["BIA (bilan d'impact sur l'activité)","Étude qui mesure les conséquences d'un arrêt de chaque processus dans le temps, pour fixer les priorités de reprise."],
["SLE, ARO, ALE","Analyse quantitative : perte par événement (SLE) × nombre d'occurrences par an (ARO) = perte annuelle attendue (ALE)."]],
ex:`<p>Un émetteur de monnaie électronique fictif, <b>FlashPay</b>, étudie le risque « fraude par échange de carte SIM » sur les comptes clients.</p>
<ul><li>Actif : les portefeuilles clients.</li><li>Menace : fraudeurs qui obtiennent un duplicata de SIM.</li><li>Vulnérabilité : validation des transactions par SMS uniquement.</li>
<li>Probabilité : 3 sur 5 (cas déjà vus sur le marché). Impact : 4 sur 5 (pertes, plaintes, régulateur). Score : 12 sur 25, risque élevé.</li>
<li>Quantitatif : perte moyenne par fraude 2 M FCFA (SLE) ; 15 cas par an (ARO) ; ALE = 30 M FCFA par an. Une mesure qui coûte 10 M FCFA par an et divise les cas par 3 est rentable.</li></ul>`,
steps:[
"Définir le périmètre et la méthode (échelles, critères d'acceptation) avant de commencer.",
"Identifier les actifs et leurs propriétaires.",
"Pour chaque actif, identifier les menaces et les vulnérabilités.",
"Évaluer la probabilité et l'impact (qualitatif ou quantitatif).",
"Comparer chaque niveau de risque à l'appétit pour le risque.",
"Inscrire le résultat dans le registre des risques avec un propriétaire."],
exo:[
["SLE = 5 M FCFA ; ARO = 0,5. Calcule l'ALE.","<p>ALE = 5 M × 0,5 = <b>2,5 M FCFA par an</b>. Une mesure qui coûte plus de 2,5 M FCFA par an pour supprimer ce risque n'est pas justifiée sur le plan financier seul.</p>"],
["le RSSI veut commencer l'appréciation des risques en installant un scanner de vulnérabilités. Bonne idée ?","<p>Non, pas en premier. On commence par identifier les actifs et les processus critiques (avec le BIA) : sinon, on ne sait pas quelles vulnérabilités comptent vraiment pour l'activité.</p>"]],
piege:[
"Une vulnérabilité sans menace ni impact n'est pas un risque prioritaire.",
"Le BIA mesure l'impact sur l'activité ; il ne mesure pas la probabilité.",
"L'appréciation des risques est un processus continu, pas un exercice fait une fois."]},

/* g4 Traitement et suivi des risques */
{voc:[
["Réduire (atténuer)","Mettre en place des mesures pour baisser la probabilité ou l'impact."],
["Transférer (partager)","Faire porter une partie de l'impact financier par un tiers : assurance, contrat. La responsabilité reste à l'entreprise."],
["Éviter","Arrêter l'activité qui crée le risque."],
["Accepter","Décider en connaissance de cause de ne rien faire de plus, parce que le risque est dans l'appétit."],
["Mesure (contrôle) préventive, détective, corrective","Empêcher, repérer, réparer. Exemples : MFA, journalisation avec alerte, restauration de sauvegarde."],
["Registre des risques","Tableau qui liste chaque risque, son niveau, son propriétaire, le traitement choisi et son avancement."]],
ex:`<p>Suite du cas FlashPay (fraude par échange de SIM, ALE 30 M FCFA) :</p>
${'<div class="tablewrap"><table><thead><tr><th>Option</th><th>Ce qu\'on fait</th><th>Coût annuel</th><th>Risque résiduel</th></tr></thead><tbody><tr><td>Réduire</td><td>Code PIN applicatif + blocage 48 h après un changement de SIM</td><td>8 M</td><td>ALE ≈ 6 M</td></tr><tr><td>Transférer</td><td>Assurance fraude</td><td>12 M</td><td>Pertes remboursées, mais image et régulateur restent</td></tr><tr><td>Éviter</td><td>Supprimer les retraits par SMS</td><td>Perte de clients</td><td>Nul pour ce scénario</td></tr><tr><td>Accepter</td><td>Rien</td><td>0</td><td>30 M</td></tr></tbody></table></div>'}
<p>Le propriétaire du risque choisit « réduire » : 8 M dépensés pour éviter 24 M de pertes. Le choix est noté au registre, avec une date de mise en œuvre.</p>`,
steps:[
"Pour chaque risque hors appétit, étudier les quatre options.",
"Comparer coût de la mesure et réduction du risque (analyse coût-bénéfice).",
"Faire choisir et signer l'option par le propriétaire du risque.",
"Mettre la mesure en œuvre et vérifier qu'elle fonctionne.",
"Suivre les indicateurs de risque (KRI) et revoir le registre régulièrement."],
exo:[
["une entreprise souscrit une cyber-assurance. Le risque a-t-il disparu ?","<p>Non. Le risque est <b>transféré</b> pour sa partie financière. L'interruption d'activité, l'atteinte à l'image et les obligations envers le régulateur restent. Et l'assureur peut refuser de payer si les mesures promises n'étaient pas en place.</p>"],
["une mesure coûte 20 M par an pour réduire un risque dont l'ALE est de 15 M. Que conseille le RSSI ?","<p>Ne pas la retenir sur le seul critère financier : elle coûte plus qu'elle n'évite. Il cherche une mesure moins chère ou propose d'accepter le risque, sauf obligation légale ou impact non financier majeur.</p>"]],
piege:[
"Transférer ne transfère jamais la responsabilité.",
"Le risque résiduel doit lui aussi être accepté formellement.",
"Une mesure ne doit pas coûter plus que la perte qu'elle évite, sauf exigence réglementaire."]},

/* g5 Construire le programme de sécurité */
{voc:[
["Programme de sécurité","L'ensemble organisé des projets, processus, personnes et outils qui met en œuvre la stratégie."],
["Architecture de sécurité","Le plan d'ensemble qui montre comment les mesures s'articulent (réseau, identités, données, applications)."],
["Défense en profondeur","Plusieurs couches de protection : si l'une cède, la suivante protège encore."],
["Sécurité dès la conception","Intégrer les exigences de sécurité au début de chaque projet, pas à la fin."],
["Gestion des tiers","Évaluer et suivre la sécurité des fournisseurs : contrat, questionnaire, droit d'audit, suivi."]],
ex:`<p>L'assureur fictif <b>Assur'Ivoire</b> construit son programme sur 2 ans :</p>
<ol><li>Charte du programme signée par le DG : objectifs, périmètre, budget, gouvernance.</li>
<li>Inventaire des actifs et classification des données.</li>
<li>Projets prioritaires : MFA, sauvegardes hors ligne, sensibilisation, gestion des correctifs.</li>
<li>Clause sécurité dans tous les nouveaux contrats (droit d'audit, notification des incidents sous 24 h).</li>
<li>Revue sécurité obligatoire à chaque nouveau projet informatique.</li></ol>`,
steps:[
"Partir de la stratégie approuvée et de l'analyse d'écart.",
"Rédiger une charte du programme et la faire signer.",
"Choisir un cadre de référence pour structurer les mesures.",
"Définir les projets, les ressources et le calendrier.",
"Intégrer la sécurité dans les processus existants : achats, projets, RH, changement.",
"Suivre l'avancement avec des indicateurs."],
exo:[
["un fournisseur cloud refuse le droit d'audit dans le contrat. Que fait le responsable sécurité ?","<p>Il demande une alternative : rapport d'audit indépendant (par exemple ISAE 3402 ou SOC 2), certification ISO 27001 avec son périmètre. Il évalue le risque résiduel et le fait accepter par le propriétaire métier si aucune alternative n'est possible.</p>"],
["à quel moment d'un projet faut-il intégrer les exigences de sécurité ?","<p>Dès le début, à l'étude des besoins. Corriger une faiblesse après la mise en production coûte beaucoup plus cher.</p>"]],
piege:[
"Le programme sert la stratégie ; il ne la remplace pas.",
"La sécurité des tiers commence au contrat, avant la signature.",
"Un outil ne remplace pas un processus."]},

/* g6 Gérer le programme : ressources, sensibilisation et mesure */
{voc:[
["Sensibilisation","Faire connaître les risques et les bons gestes à tous (affiches, e-mails, campagnes)."],
["Formation","Donner des compétences à un public précis (développeurs, administrateurs)."],
["Simulation d'hameçonnage","Faux e-mail piégé envoyé pour mesurer et améliorer les réflexes."],
["Budget opérationnel / d'investissement","Opex : dépenses récurrentes (licences, salaires). Capex : achats durables (équipements)."],
["Modèle de maturité","Échelle (souvent de 0 à 5) qui mesure le niveau d'organisation d'un processus."]],
ex:`<p>À <b>SavaneTel</b>, 28 % des employés cliquent lors de la première simulation d'hameçonnage. Le RSSI :</p>
<ul><li>lance une formation courte (15 min) pour ceux qui ont cliqué, sans sanction ;</li><li>ajoute un bouton « signaler » dans la messagerie ;</li><li>répète la simulation chaque trimestre.</li></ul>
<p>Six mois plus tard : 9 % de clics et 45 % de signalements. Il présente ces deux chiffres à la direction : la baisse du risque est visible.</p>`,
steps:[
"Identifier les publics (direction, utilisateurs, informatique, développeurs) et leurs besoins.",
"Adapter le message et le format à chaque public.",
"Mesurer avant et après (taux de clic, taux de signalement, incidents).",
"Rendre compte à la direction de l'efficacité, pas seulement de l'activité.",
"Ajuster le programme et le budget selon les résultats."],
exo:[
["quelle mesure prouve le mieux l'efficacité d'un programme de sensibilisation : le nombre de personnes formées ou l'évolution du taux de signalement des e-mails suspects ?","<p>L'évolution du taux de signalement : elle mesure un changement de comportement. Le nombre de personnes formées mesure seulement une activité.</p>"]],
piege:[
"La sensibilisation concerne aussi la direction.",
"Un résultat (moins d'incidents, plus de signalements) vaut mieux qu'un volume d'activité.",
"Le budget se justifie par la réduction du risque, en langage métier."]},

/* g7 Préparer la gestion des incidents et la continuité */
{voc:[
["Événement / incident","Événement : fait observable (une alerte). Incident : événement qui menace réellement la confidentialité, l'intégrité ou la disponibilité."],
["Plan de réponse aux incidents","Document qui dit qui fait quoi, comment on qualifie la gravité et qui on prévient."],
["PCA / PRA","Plan de continuité d'activité (faire fonctionner les métiers en mode dégradé) et plan de reprise informatique (rétablir les systèmes)."],
["RTO","Durée maximale d'arrêt acceptable avant la reprise."],
["RPO","Perte de données maximale acceptable, exprimée en temps (par exemple 1 heure de transactions)."],
["MTD (durée maximale tolérable)","Au-delà, l'entreprise subit un dommage grave. Le RTO doit être inférieur au MTD."]],
ex:`<p>Le BIA de <b>Banque Lagune</b> pour le virement en ligne donne : MTD 8 h, RTO 4 h, RPO 15 min. Conséquences :</p>
<ul><li>réplication des données toutes les 15 minutes vers un second site ;</li><li>site de secours prêt à démarrer en moins de 4 h ;</li><li>procédure manuelle pour les virements urgents pendant l'arrêt ;</li><li>test complet du plan une fois par an, avec un rapport à la direction.</li></ul>`,
steps:[
"Faire le BIA : processus critiques, MTD, RTO, RPO.",
"Choisir les stratégies de reprise adaptées (site de secours, sauvegardes, contrats).",
"Rédiger les plans et constituer l'équipe de réponse (rôles, contacts, astreinte).",
"Former les équipes et tester : lecture, simulation sur table, test réel.",
"Mettre à jour après chaque test, changement ou incident."],
exo:[
["RPO de 1 heure, sauvegarde toutes les 24 heures. Est-ce conforme ?","<p>Non. En cas de panne juste avant la sauvegarde, on perd jusqu'à 24 heures de données, alors que l'activité n'accepte que 1 heure. Il faut une sauvegarde ou une réplication au moins toutes les heures.</p>"],
["qui fixe le RTO : l'informatique ou le métier ?","<p>Le <b>métier</b>, à partir du BIA. L'informatique propose ensuite les solutions techniques et leur coût.</p>"]],
piege:[
"RTO = temps d'arrêt ; RPO = perte de données. Ne pas les inverser.",
"Un plan non testé ne peut pas être considéré comme fiable.",
"La préparation (plan, équipe, outils) vient avant l'incident."]},

/* g8 Répondre aux incidents et en tirer les leçons */
{voc:[
["Triage","Qualifier rapidement l'alerte : faux positif ou incident ? Quelle gravité ?"],
["Confinement","Limiter la propagation : isoler une machine, bloquer un compte."],
["Éradication","Supprimer la cause : logiciel malveillant, compte créé par l'attaquant, faille."],
["Rétablissement","Remettre en service de façon sûre et surveiller."],
["Chaîne de possession","Trace écrite de qui a manipulé une preuve, quand et comment, pour qu'elle reste recevable."],
["Retour d'expérience","Réunion après l'incident pour comprendre les causes et améliorer les mesures."]],
ex:`<p>Un lundi matin, les fichiers d'un service de <b>Assur'Ivoire</b> sont chiffrés par un rançongiciel.</p>
<ol><li><b>Détection et triage</b> : alerte de l'antivirus, confirmation par l'équipe : incident grave.</li>
<li><b>Escalade</b> : activation du plan, information de la direction selon le circuit prévu.</li>
<li><b>Confinement</b> : les postes touchés sont débranchés du réseau ; les comptes administrateurs sont réinitialisés.</li>
<li><b>Preuves</b> : copie de la mémoire et des journaux avant toute réinstallation.</li>
<li><b>Éradication et rétablissement</b> : réinstallation, restauration depuis les sauvegardes hors ligne, surveillance renforcée.</li>
<li><b>Notifications</b> : régulateur et clients concernés, selon les obligations légales et les délais.</li>
<li><b>Retour d'expérience</b> : la porte d'entrée était un accès distant sans MFA. Action : MFA généralisé sous 30 jours.</li></ol>`,
steps:[
"Détecter et qualifier l'incident selon les critères du plan.",
"Escalader et communiquer selon le circuit prévu.",
"Confiner, en préservant les preuves.",
"Éradiquer la cause et rétablir les services.",
"Notifier les autorités et les personnes concernées si la loi l'exige.",
"Tirer les leçons et mettre à jour plans et mesures."],
exo:[
["un administrateur veut réinstaller tout de suite le serveur infecté. Que lui répondre ?","<p>D'abord confiner (isoler du réseau) et préserver les preuves (images, journaux). Réinstaller immédiatement détruit les preuves et empêche de comprendre comment l'attaquant est entré, donc il pourrait revenir.</p>"],
["qui décide de communiquer à la presse pendant un incident ?","<p>La direction, via le circuit de communication prévu dans le plan (communication, juridique). Jamais un technicien de sa propre initiative.</p>"]],
piege:[
"L'objectif premier de la réponse est de limiter l'impact sur l'activité.",
"Le retour d'expérience fait partie de la réponse ; il n'est pas facultatif.",
"Ne pas oublier les obligations de notification légales et contractuelles."]}
]);
