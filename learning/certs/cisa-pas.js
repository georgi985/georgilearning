/* CISA : parcours débutant ajouté à chaque module (ordre des modules de cisa.js). Contenu original ; entreprises fictives. */
PAS("cisa", [
/* c1 Planifier un audit fondé sur les risques */
{voc:[
["Univers d'audit","La liste de tout ce qui pourrait être audité : processus, applications, sites, fournisseurs."],
["Plan d'audit annuel","Choix, dans l'univers, des missions de l'année, selon le risque."],
["Risque inhérent","Risque d'erreur ou de fraude avant tout contrôle (activité complexe, gros montants)."],
["Risque de contrôle","Risque que les contrôles de l'entreprise ne détectent ou n'empêchent pas l'erreur."],
["Risque de non-détection","Risque que l'auditeur lui-même passe à côté. C'est le seul que l'auditeur maîtrise, par l'ampleur de ses tests."],
["Charte d'audit","Document approuvé par le conseil qui donne à l'audit son mandat, son autorité et son indépendance."]],
ex:`<p>L'audit interne de <b>Banque Lagune</b> prépare son plan annuel. Il note chaque domaine de 1 à 5 :</p>
${'<div class="tablewrap"><table><thead><tr><th>Domaine</th><th>Impact</th><th>Probabilité</th><th>Score</th><th>Décision</th></tr></thead><tbody><tr><td>Paiement mobile (nouveau)</td><td>5</td><td>4</td><td>20</td><td>Audit cette année</td></tr><tr><td>Gestion des accès au système bancaire</td><td>5</td><td>3</td><td>15</td><td>Audit cette année</td></tr><tr><td>Messagerie</td><td>3</td><td>2</td><td>6</td><td>Dans 2 ou 3 ans</td></tr><tr><td>Intranet</td><td>1</td><td>2</td><td>2</td><td>Hors plan</td></tr></tbody></table></div>'}
<p>Le plan est soumis au comité d'audit, qui l'approuve.</p>`,
steps:[
"Comprendre l'entreprise, ses objectifs, ses systèmes et ses risques.",
"Construire l'univers d'audit et noter le risque de chaque élément.",
"Retenir les missions prioritaires selon le risque et les ressources.",
"Faire approuver le plan par le comité d'audit.",
"Pour chaque mission : objectifs, périmètre, programme de travail, équipe.",
"Revoir le plan en cours d'année si les risques changent."],
exo:[
["risque inhérent élevé et contrôles faibles. Que fait l'auditeur de son risque de non-détection ?","<p>Il doit le <b>réduire</b> : plus de tests de substance, des échantillons plus grands, des auditeurs plus expérimentés. Le risque d'audit global = inhérent × contrôle × non-détection doit rester acceptable.</p>"],
["un directeur demande à l'audit de ne pas auditer son service cette année. Que fait le responsable de l'audit ?","<p>Il maintient le choix fondé sur le risque. S'il y a une pression, il en informe le comité d'audit. L'indépendance est garantie par la charte.</p>"]],
piege:[
"Le seul risque que l'auditeur contrôle est le risque de non-détection.",
"Le plan d'audit est fondé sur les risques, pas sur la facilité ou la demande des services.",
"L'auditeur ne conçoit pas et n'exploite pas les contrôles qu'il audite (indépendance)."]},

/* c2 Exécuter l'audit : preuves, échantillonnage, rapport */
{voc:[
["Preuve d'audit","Information qui fonde la conclusion. Elle doit être suffisante (quantité) et appropriée (pertinente et fiable)."],
["Fiabilité des preuves","Une preuve obtenue d'un tiers, ou directement par l'auditeur, vaut plus qu'une déclaration orale de l'audité."],
["Test de conformité (des contrôles)","Vérifie qu'un contrôle existe et fonctionne. Exemple : les demandes d'accès sont-elles approuvées ?"],
["Test de substance (de détail)","Vérifie directement l'exactitude des données. Exemple : recalcul des intérêts."],
["Échantillonnage statistique","Sélection aléatoire qui permet de mesurer le risque d'erreur de l'échantillon."],
["Constat","Écart observé, présenté avec : la situation, la référence attendue, la cause, l'effet, la recommandation."]],
ex:`<p>Mission « gestion des accès » chez <b>SavaneTel</b> :</p>
<ol><li>Test de conformité : 25 nouveaux comptes tirés au hasard sur l'année. 4 n'ont pas de demande approuvée.</li>
<li>Test de substance : comparaison de la liste des comptes actifs avec la liste RH des partants : 7 comptes de partants encore actifs, dont 2 utilisés après le départ.</li>
<li>Constat rédigé : <b>situation</b> 7 comptes actifs ; <b>référence</b> la politique exige une désactivation sous 24 h ; <b>cause</b> les RH n'informent pas l'informatique ; <b>effet</b> accès possible à des données clients ; <b>recommandation</b> lien automatique RH-annuaire et revue mensuelle.</li>
<li>Réunion de clôture : le directeur informatique s'engage sur un plan d'action daté.</li></ol>`,
steps:[
"Exécuter le programme de travail : entretiens, observation, inspection, recalcul.",
"Choisir des échantillons représentatifs.",
"Documenter chaque test dans les papiers de travail.",
"Évaluer les écarts et leur gravité.",
"Discuter les constats avec l'audité avant le rapport.",
"Publier le rapport et suivre la mise en œuvre des recommandations."],
exo:[
["quelle preuve est la plus fiable : la déclaration du directeur informatique ou une extraction faite par l'auditeur lui-même dans le système ?","<p>L'extraction faite par l'auditeur : elle est obtenue directement, sans dépendre de la parole de l'audité.</p>"],
["l'audité conteste un constat. L'auditeur doit-il le retirer ?","<p>Non s'il est fondé sur des preuves. Il peut le reformuler, et il mentionne la position de l'audité dans le rapport. Il le retire seulement si l'audité apporte une preuve contraire.</p>"]],
piege:[
"Si les contrôles sont faibles, on augmente les tests de substance.",
"Une fraude soupçonnée se signale au niveau approprié (direction, comité d'audit), sans enquêter seul au-delà de son mandat.",
"Le suivi des recommandations fait partie du travail d'audit."]},

/* c3 Gouvernance des SI */
{voc:[
["Gouvernance des SI","La façon dont la direction s'assure que l'informatique sert la stratégie, maîtrise ses risques et utilise bien ses ressources."],
["Comité stratégique informatique","Conseille le conseil d'administration sur les orientations informatiques."],
["Comité de pilotage informatique","Niveau direction : priorise les projets, suit les budgets et les résultats."],
["COBIT","Cadre de gouvernance et de management de l'informatique."],
["Schéma directeur","Plan informatique pluriannuel aligné sur la stratégie."],
["Séparation des tâches","Une même personne ne doit pas pouvoir initier, approuver et enregistrer une opération."]],
ex:`<p>L'assureur <b>Assur'Ivoire</b> veut vendre ses contrats en ligne. L'auditeur vérifie :</p>
<ul><li>le schéma directeur prévoit-il ce projet et les moyens nécessaires ?</li><li>le comité de pilotage a-t-il arbitré les priorités et suit-il le budget ?</li><li>les politiques informatiques sont-elles approuvées et à jour ?</li><li>le DSI rend-il compte de résultats mesurables à la direction ?</li></ul>
<p>Constat possible : les projets sont lancés par chaque direction sans arbitrage commun ; plusieurs se chevauchent. Recommandation : un comité de pilotage qui priorise selon la stratégie.</p>`,
steps:[
"Lire la stratégie de l'entreprise et le schéma directeur informatique.",
"Vérifier que des comités existent, se réunissent et décident (comptes rendus).",
"Contrôler les politiques : approbation, diffusion, mise à jour.",
"Vérifier les rôles et la séparation des tâches.",
"Examiner les indicateurs de performance informatique remontés à la direction."],
exo:[
["le meilleur indicateur que la gouvernance des SI fonctionne : l'existence d'un comité ou des décisions prises et suivies par ce comité ?","<p>Les décisions prises et suivies. Un comité qui existe sur le papier mais ne décide rien n'apporte pas de gouvernance.</p>"],
["un administrateur de base de données peut aussi saisir des écritures comptables. Risque ?","<p>Oui : séparation des tâches insuffisante. Il pourrait saisir puis modifier les données sans trace. Recommandation : retirer l'un des droits ou, à défaut, mettre un contrôle compensatoire (revue des journaux par une personne indépendante).</p>"]],
piege:[
"La gouvernance relève du conseil et de la direction ; le management relève du DSI.",
"Un contrôle compensatoire est la réponse quand la séparation des tâches est impossible (petite équipe).",
"L'alignement sur la stratégie est le premier critère d'évaluation."]},

/* c4 Management des SI : risques, ressources, tiers, performance */
{voc:[
["Externalisation","Confier une activité informatique à un prestataire. La responsabilité reste à l'entreprise."],
["Accord de niveau de service (SLA)","Engagement mesurable du prestataire : disponibilité, délais de résolution, pénalités."],
["Clause d'audit","Droit, inscrit au contrat, d'auditer le prestataire ou d'obtenir un rapport indépendant."],
["Rapport ISAE 3402 / SOC","Rapport d'un auditeur indépendant sur les contrôles d'un prestataire. Type 1 : conception à une date. Type 2 : efficacité sur une période."],
["Gestion du portefeuille","Choisir et suivre l'ensemble des projets et services selon leur valeur et leur risque."]],
ex:`<p><b>FlashPay</b> héberge sa plateforme chez un prestataire. L'auditeur vérifie le contrat : disponibilité garantie 99,9 %, notification des incidents sous 24 h, localisation des données, réversibilité (récupérer les données en fin de contrat), droit d'audit.</p>
<p>Il demande le rapport ISAE 3402 <b>type 2</b> du prestataire et lit la section « contrôles complémentaires chez le client » : FlashPay doit gérer elle-même les accès de ses employés. Il vérifie donc ce point chez FlashPay.</p>`,
steps:[
"Vérifier qu'une analyse de risque a précédé le choix du prestataire.",
"Lire le contrat : SLA, sécurité, confidentialité, audit, réversibilité, sous-traitance.",
"Vérifier le suivi : tableaux de bord, comités, pénalités appliquées.",
"Obtenir et analyser les rapports indépendants (type, période, réserves, contrôles du client).",
"Contrôler la gestion des ressources et des compétences internes."],
exo:[
["un rapport ISAE 3402 type 1 suffit-il pour conclure que les contrôles du prestataire ont fonctionné toute l'année ?","<p>Non. Le type 1 décrit la conception des contrôles à une date. Il faut un <b>type 2</b>, qui teste leur efficacité sur une période.</p>"],
["le prestataire subit une fuite de données des clients de la banque. Qui est responsable envers les clients et le régulateur ?","<p>La <b>banque</b>. On externalise l'activité, pas la responsabilité.</p>"]],
piege:[
"La réversibilité (sortie du contrat) est souvent oubliée.",
"Le rapport du prestataire liste des contrôles que le client doit faire lui-même : à vérifier.",
"Le SLA doit être mesurable et suivi, sinon il n'a pas d'effet."]},

/* c5 Acquisition et gestion de projets */
{voc:[
["Étude de faisabilité / dossier d'opportunité","Justifie le projet : besoins, options, coûts, bénéfices, risques."],
["Cahier des charges","Description des besoins à satisfaire par la solution."],
["Chemin critique","Suite des tâches qui fixe la durée totale du projet : tout retard sur elles retarde la fin."],
["Gestion de la valeur acquise","Compare le travail prévu, le travail réalisé et le coût réel pour détecter dérives de coût et de délai."],
["Méthodes en cascade / agiles","Étapes successives figées / cycles courts avec livraisons fréquentes."],
["Revue post-implémentation","Vérifie après la mise en service que les bénéfices attendus sont obtenus."]],
ex:`<p>Projet de nouveau logiciel de facturation chez <b>SavaneTel</b> : budget 500 M FCFA, 12 mois. Au 6<sup>e</sup> mois :</p>
<ul><li>travail prévu à ce jour : 250 M ;</li><li>travail réellement réalisé (valeur acquise) : 200 M ;</li><li>coût réel dépensé : 280 M.</li></ul>
<p>Retard : 200 &lt; 250. Dépassement : 280 &gt; 200, soit 80 M de plus que la valeur produite. L'auditeur alerte le comité de pilotage avant qu'il soit trop tard.</p>`,
steps:[
"Vérifier que le projet est justifié et approuvé (dossier d'opportunité).",
"Contrôler la gouvernance : sponsor, chef de projet, comité, jalons.",
"Suivre coûts, délais et qualité ; repérer les dérives tôt.",
"Vérifier que les exigences de sécurité et de contrôle sont dans les besoins.",
"Après la mise en service, vérifier les bénéfices obtenus."],
exo:[
["valeur acquise 300 M ; coût réel 250 M. Le projet est-il au-dessus ou en dessous du budget ?","<p><b>En dessous</b> : il a produit pour 300 M de travail en ne dépensant que 250 M.</p>"],
["quel est le meilleur moment pour que l'auditeur intervienne dans un projet ?","<p>Tout au long du projet, et surtout tôt (besoins, conception), pour s'assurer que les contrôles sont prévus. Un audit seulement après la mise en service arrive trop tard pour corriger à faible coût.</p>"]],
piege:[
"Le sponsor métier porte le projet ; ce n'est pas le DSI seul.",
"L'auditeur conseille sur les contrôles mais ne prend pas les décisions du projet (indépendance).",
"La revue post-implémentation mesure les bénéfices, pas seulement le respect du calendrier."]},

/* c6 Développement, tests et mise en production */
{voc:[
["Tests unitaires, d'intégration, système, d'acceptation","Une fonction ; plusieurs modules ensemble ; le système complet ; validation finale par les utilisateurs."],
["Test de non-régression","Vérifie qu'une modification n'a pas cassé ce qui marchait."],
["Bascule (conversion)","Passage de l'ancien système au nouveau : parallèle, progressive, pilote ou directe."],
["Migration de données","Transfert des données de l'ancien au nouveau système, avec contrôles de rapprochement."],
["Environnements séparés","Développement, test et production distincts."],
["Gestion des versions","Suivi des versions du code et des configurations."]],
ex:`<p>Migration du logiciel de paie d'<b>Assur'Ivoire</b>. L'auditeur vérifie les contrôles de migration :</p>
<ul><li>nombre de salariés avant et après : 1 250 = 1 250 ;</li><li>total des salaires bruts du dernier mois : identique au franc près ;</li><li>échantillon de 20 fiches comparées champ par champ ;</li><li>validation signée par la DRH (recette utilisateur) ;</li><li>fonctionnement en <b>parallèle</b> pendant un mois : les deux systèmes calculent la paie et on compare.</li></ul>`,
steps:[
"Vérifier que les tests couvrent les besoins, y compris la sécurité.",
"Contrôler que les utilisateurs valident (recette) avant la production.",
"Pour une migration, rapprocher nombres et totaux avant et après.",
"Choisir une méthode de bascule adaptée au risque.",
"Contrôler que le passage en production est fait par une autre personne que le développeur."],
exo:[
["quelle méthode de bascule est la plus sûre mais la plus coûteuse ?","<p>La bascule en <b>parallèle</b> : les deux systèmes tournent ensemble, ce qui permet de comparer les résultats avant d'arrêter l'ancien.</p>"],
["qui doit approuver la recette d'un nouveau logiciel de paie ?","<p>Le <b>métier</b> (DRH), propriétaire du processus, et non l'équipe informatique.</p>"]],
piege:[
"Les données de production ne doivent pas être utilisées en test sans anonymisation.",
"Un développeur ne doit pas avoir accès à la production.",
"Les totaux de contrôle (nombre, montants) sont la preuve clé d'une migration réussie."]},

/* c7 Exploitation et gestion des services */
{voc:[
["Gestion des incidents / des problèmes","Incident : rétablir vite le service. Problème : trouver et supprimer la cause des incidents répétés."],
["Gestion des changements","Demande, évaluation, approbation, test, mise en production, revue."],
["CMDB","Base de données des éléments de configuration (serveurs, logiciels, liens entre eux)."],
["Ordonnancement (batch)","Traitements automatiques planifiés, par exemple l'arrêté des comptes la nuit."],
["Gestion des capacités","Prévoir les ressources (stockage, puissance) avant qu'elles manquent."]],
ex:`<p>Chez <b>Banque Lagune</b>, l'auditeur extrait de la production la liste de tous les changements de l'année (journal du système), puis la compare aux tickets approuvés :</p>
<ul><li>312 changements dans le système, 298 tickets approuvés.</li><li>14 changements <b>sans ticket</b> : 9 correctifs d'urgence non régularisés, 5 sans explication.</li></ul>
<p>Constat important : on part du système vers les tickets (et non l'inverse) pour trouver les changements non autorisés.</p>`,
steps:[
"Obtenir la liste des changements à partir du système lui-même.",
"Rapprocher avec les tickets approuvés, dans les deux sens.",
"Vérifier les incidents graves : délais, causes, gestion des problèmes.",
"Contrôler les traitements de nuit : suivi des anomalies et relances.",
"Vérifier la gestion des capacités et des journaux."],
exo:[
["pour trouver des changements non autorisés, part-on des tickets ou des changements réels du système ?","<p>Des <b>changements réels</b> du système (journaux, comparaison de versions). Partir des tickets ne montre que les changements déclarés.</p>"],
["le même incident se produit chaque semaine et est résolu en redémarrant le serveur. Qu'est-ce qui manque ?","<p>La <b>gestion des problèmes</b> : personne ne recherche la cause profonde. Il faut ouvrir un problème, l'analyser et le corriger.</p>"]],
piege:[
"Changements d'urgence : autorisés, mais régularisés et approuvés après coup.",
"Le sens du test compte : de la population vers la preuve pour la complétude.",
"Incident ≠ problème."]},

/* c8 Résilience : continuité et reprise */
{voc:[
["BIA","Bilan d'impact : processus critiques, conséquences d'un arrêt, RTO et RPO."],
["RTO / RPO","Durée d'arrêt acceptable / perte de données acceptable."],
["PCA / PRA","Continuité des métiers / reprise des systèmes informatiques."],
["Types de tests","Revue documentaire, simulation sur table, test partiel, test complet."],
["Sauvegarde 3-2-1","3 copies, sur 2 supports différents, dont 1 hors site (idéalement hors ligne)."]],
ex:`<p>L'auditeur examine le plan de reprise de <b>FlashPay</b> :</p>
<ul><li>BIA daté de 4 ans, alors que l'entreprise a lancé 3 nouveaux services : <b>constat</b>.</li>
<li>RTO annoncé : 2 h. Dernier test réel : reprise obtenue en 9 h : <b>constat majeur</b>.</li>
<li>Sauvegardes sur le même site que les serveurs : un incendie détruirait tout : <b>constat</b>.</li></ul>
<p>Recommandations : refaire le BIA, copie hors site, nouveau test après corrections, rapport à la direction.</p>`,
steps:[
"Vérifier que le BIA existe, est récent et approuvé par les métiers.",
"Comparer les solutions techniques aux RTO et RPO demandés.",
"Examiner les tests : fréquence, réalisme, résultats, corrections.",
"Contrôler les sauvegardes : fréquence, lieu, tests de restauration.",
"Vérifier que le plan est à jour (contacts, systèmes, fournisseurs)."],
exo:[
["quel est le meilleur indicateur qu'un plan de reprise fonctionnera ?","<p>Des <b>tests réguliers réussis</b>, réalistes, avec des écarts corrigés. Un plan bien écrit mais jamais testé ne prouve rien.</p>"],
["quelle est la première étape pour bâtir un PCA ?","<p>Le <b>BIA</b> : il dit ce qui est critique et dans quels délais.</p>"]],
piege:[
"Le BIA précède la stratégie de reprise.",
"Un test sur table ne prouve pas que la reprise technique fonctionne.",
"Les sauvegardes doivent être éloignées du site principal."]},

/* c9 Protection des actifs : accès et identités */
{voc:[
["Revue des accès","Vérification périodique, par les managers, que chaque droit est encore justifié."],
["Comptes à privilèges","Comptes avec des droits élevés (administrateurs). Ils exigent une protection et une surveillance renforcées."],
["PAM","Outil de gestion des accès à privilèges : coffre-fort de mots de passe, enregistrement des sessions."],
["Compte générique / partagé","Compte utilisé par plusieurs personnes : on ne sait pas qui a fait quoi."],
["Sécurité physique","Contrôle des entrées en salle serveur : badges, registre, caméras."]],
ex:`<p>Test de la revue des accès au logiciel comptable de <b>Sahel Énergie</b> :</p>
<ol><li>L'auditeur obtient la liste des 180 utilisateurs extraite par lui-même.</li><li>Il vérifie que la dernière revue a été faite par les managers : oui, il y a 6 mois.</li><li>Mais 12 droits signalés « à retirer » lors de la revue sont toujours actifs : la revue n'est pas suivie d'effet.</li><li>Il trouve 3 comptes « admin » partagés par l'équipe informatique.</li></ol>
<p>Constats : retraits non appliqués et comptes partagés sans traçabilité. Recommandations : contrôle du retrait effectif, comptes nominatifs, outil PAM.</p>`,
steps:[
"Obtenir soi-même la liste des comptes et des droits.",
"Rapprocher avec la liste du personnel (partants, mutations).",
"Vérifier les comptes à privilèges et leur surveillance.",
"Contrôler la revue des accès et son suivi effectif.",
"Vérifier les paramètres d'authentification (MFA, mots de passe, verrouillage)."],
exo:[
["la revue des accès a eu lieu, mais les droits à retirer ne l'ont pas été. Le contrôle est-il efficace ?","<p>Non. Le contrôle comprend la revue <b>et</b> le retrait. Sans retrait, il n'atteint pas son objectif.</p>"],
["pourquoi un compte administrateur partagé est-il un problème ?","<p>On ne peut pas savoir qui a fait une action (absence de traçabilité, pas de responsabilité individuelle).</p>"]],
piege:[
"Une liste fournie par l'audité doit être vérifiée (complétude et exactitude).",
"Le compte d'un partant encore actif est un constat classique.",
"Les accès physiques à la salle serveur sont aussi à auditer."]},

/* c10 Données, cryptographie et surveillance */
{voc:[
["Prévention des fuites de données (DLP)","Outil qui repère et bloque l'envoi de données sensibles (numéros de carte, fichiers clients)."],
["Gestion des clés","Création, stockage, rotation, révocation et destruction des clés de chiffrement."],
["HSM","Boîtier matériel sécurisé qui génère et protège les clés (très utilisé en banque et monétique)."],
["Journalisation et surveillance","Enregistrer les événements de sécurité, les protéger et les analyser."],
["Protection des données personnelles","Respect des lois (en Côte d'Ivoire, la loi de 2013 et l'ARTCI) : finalité, consentement, sécurité, durée de conservation."]],
ex:`<p>Chez <b>Banque Lagune</b>, l'auditeur vérifie le chiffrement des numéros de carte :</p>
<ul><li>Les données sont chiffrées dans la base : bien.</li><li>Mais la clé de chiffrement est stockée dans un fichier sur le même serveur : un pirate qui vole le serveur a les deux. <b>Constat</b>.</li><li>Les journaux d'accès à la base sont conservés 30 jours seulement, et personne ne les lit : <b>constat</b>.</li></ul>
<p>Recommandations : clés dans un HSM, séparation des rôles sur les clés, conservation plus longue des journaux et alertes dans le SIEM.</p>`,
steps:[
"Identifier les données sensibles et où elles se trouvent.",
"Vérifier leur protection au repos, en transit et à la sortie (DLP).",
"Contrôler la gestion des clés : lieu de stockage, accès, rotation.",
"Vérifier la journalisation : quoi, combien de temps, qui la lit.",
"Contrôler la conformité aux lois sur les données personnelles."],
exo:[
["les données sont chiffrées, mais la clé est à côté. Le risque est-il traité ?","<p>Non : qui obtient les données obtient aussi la clé. La protection d'un chiffrement dépend de la protection de la clé.</p>"],
["des journaux existent mais personne ne les consulte. Quelle est la faiblesse ?","<p>La surveillance n'est pas effective : les journaux sont une mesure de détection seulement s'ils sont analysés, avec des alertes et des suites données.</p>"]],
piege:[
"Chiffrer sans gérer les clés ne protège pas.",
"La journalisation sans revue ne détecte rien.",
"Les journaux eux-mêmes doivent être protégés contre la modification."]}
]);
