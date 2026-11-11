/* Risques pour l'auditeur et programmes de travail ITAC, par secteur d'activité.
   Une même méthode (ITACM) pour tous les secteurs, puis les risques et les contrôles propres à chacun. Contenu original ; exemples fictifs. */
(function(){
const T = (head, rows) => '<div class="tablewrap"><table><thead><tr>' + head.map(h => '<th>' + h + '</th>').join('') + '</tr></thead><tbody>' + rows.map(r => '<tr>' + r.map(c => '<td>' + c + '</td>').join('') + '</tr>').join('') + '</tbody></table></div>';
const X = (q, a) => '<details><summary>Cas pratique : ' + q + '</summary>' + a + '</details>';

/* Méthode commune, identique pour tous les secteurs. */
const METHODE = `
<h2>1. Ce qu'est un ITAC, en clair</h2>
<p>Un <b>ITAC</b> (IT Application Control, contrôle applicatif automatisé) est une règle programmée ou paramétrée dans une application, qui s'exécute <b>toute seule</b>, de la même façon à chaque transaction. Exemple : le logiciel refuse d'enregistrer un virement si le solde est insuffisant.</p>
<p>Pour l'auditeur, son grand intérêt est là : un contrôle automatique qui fonctionne une fois fonctionne toujours, <b>tant que personne ne l'a modifié</b>. On peut donc le tester sur une seule occurrence par cas (« test of one »), au lieu d'un échantillon de 25 ou 40 comme pour un contrôle manuel. Cette réduction n'est valable que si les ITGC (accès et changements) de l'application sont efficaces.</p>
${T(["Famille d'ITAC","Ce qu'il fait","Exemple"],[
["Contrôle de saisie (validation)","Refuse ou signale une donnée incorrecte : format, champ obligatoire, plage de valeurs, doublon","Impossible de créer une facture sans numéro de bon de commande"],
["Calcul automatique","Calcule un montant sans intervention humaine","Intérêts, TVA, primes, amortissements, provisions selon l'ancienneté"],
["Interface","Transfère des données d'un système à un autre, avec des contrôles de complétude","Les ventes du jour passent du logiciel de caisse à la comptabilité, avec un total de contrôle"],
["Habilitation et séparation des tâches applicatives","Limite les actions selon le profil ; empêche la même personne de saisir et valider","Le profil « caissier » ne peut pas valider ses propres annulations"],
["Circuit d'approbation (workflow)","Exige une validation selon des seuils","Un paiement de plus de 10 M FCFA exige la validation du DAF"],
["Blocage, alerte","Bloque une opération à risque ou alerte quelqu'un","Blocage d'un client au-delà de sa limite de crédit ; alerte de fraude"],
["Rapport système (IPE)","Produit une information utilisée par un contrôle ou par l'auditeur","Balance âgée des clients utilisée pour calculer la provision"]])}
<div class="box key"><h4>ITAC, contrôle manuel dépendant de l'informatique, IPE : ne pas confondre</h4><p><b>ITAC</b> : la machine fait le contrôle. <b>Contrôle manuel dépendant de l'IT</b> : une personne contrôle à partir d'un rapport du système (exemple : le chef comptable revoit la liste des écritures manuelles). <b>IPE</b> (Information Produced by the Entity) : l'information produite par le système, dont il faut vérifier l'exhaustivité et l'exactitude avant de s'y fier.</p></div>

<h2>2. Les risques pour l'auditeur</h2>
<p>Quand l'entreprise dépend de ses systèmes, l'auditeur court des risques précis :</p>
<ul>
<li><b>Se fier à un calcul faux</b> : un paramètre erroné (taux, barème, règle d'ancienneté) produit une erreur répétée sur des milliers d'opérations. Une petite erreur unitaire devient significative.</li>
<li><b>Se fier à un rapport incomplet</b> : un rapport qui oublie une catégorie de clients ou une période fausse tout le travail fondé sur lui.</li>
<li><b>Ignorer un contournement</b> : un contrôle automatique peut être désactivé, surpassé par un utilisateur habilité (« forçage ») ou contourné par des écritures manuelles.</li>
<li><b>Ignorer un changement</b> : un paramètre modifié en cours d'année invalide le test fait à une seule date.</li>
<li><b>Fraude interne</b> : un utilisateur avec trop de droits peut créer, valider et masquer une opération.</li>
</ul>

<h2>3. La méthode de test d'un ITAC, pas à pas</h2>
<ol>
<li><b>Comprendre le processus</b> par un entretien et un test de cheminement (walkthrough) : suivre une transaction de bout en bout et noter où se trouve chaque contrôle automatique.</li>
<li><b>Relier le contrôle au risque</b> : quel risque d'anomalie couvre-t-il, sur quelle assertion (exhaustivité, exactitude, réalité, séparation des exercices, évaluation) et sur quel compte ?</li>
<li><b>Vérifier le préalable ITGC</b> sur l'application concernée : accès aux paramètres limités, changements approuvés et testés sur toute la période. Si les ITGC sont déficients, on ne peut pas se contenter d'un test of one : tester à plusieurs dates, chercher un contrôle compensatoire ou renforcer les tests de détail.</li>
<li><b>Obtenir la configuration</b> : écran de paramétrage, table de paramètres, règle de workflow, ou description technique. Noter qui peut la modifier.</li>
<li><b>Concevoir le test</b> : <b>inspection</b> du paramétrage + <b>réexécution</b> d'un cas réel (ou d'un cas test dans un environnement dont on a prouvé qu'il est identique à la production). Tester un cas <b>positif</b> (le contrôle laisse passer ce qui est correct) et un cas <b>négatif</b> (il bloque ce qui est incorrect).</li>
<li><b>Couvrir chaque variante</b> : un test par type de transaction, par barème ou par branche de la règle (exemple : un taux par catégorie de produit).</li>
<li><b>Documenter</b> : captures horodatées avec l'identifiant de l'utilisateur et l'environnement, paramètres relevés, résultat attendu, résultat obtenu, conclusion.</li>
<li><b>Vérifier qu'il n'y a pas eu de modification</b> sur la période (journal des changements, historique des paramètres). Les années suivantes, on peut s'appuyer sur ce test de référence (« benchmarking ») tant que rien n'a changé et que les ITGC restent efficaces.</li>
<li><b>Conclure et traiter les exceptions</b> : une seule anomalie suffit à remettre en cause un ITAC. On en cherche la cause, on mesure son impact sur les comptes (combien d'opérations, quel montant) et on adapte les tests de détail.</li>
</ol>

<h2>4. Tester un rapport (IPE) avant de s'en servir</h2>
<ol>
<li>Identifier la source (table, requête, paramètres de lancement : dates, filiales, filtres).</li>
<li><b>Exhaustivité</b> : rapprocher le total du rapport avec la balance ou le grand livre ; vérifier que les filtres n'excluent rien.</li>
<li><b>Exactitude</b> : vérifier quelques lignes du rapport avec le détail dans le système (et inversement, du système vers le rapport).</li>
<li>S'assurer que le rapport n'a pas pu être modifié après extraction (format non modifiable, extraction faite en présence de l'auditeur ou par lui).</li>
</ol>
`;

function page(intro, risques, rows, ipe, cas){
  return '<p class="lead">' + intro + '</p>' + METHODE +
  '<h2>5. Les risques propres à ce secteur</h2>' + T(["Risque","Assertion et comptes touchés","Pourquoi c'est un risque pour l'auditeur"], risques) +
  '<h2>6. Programme de travail ITAC</h2><p>Pour chaque ligne : le contrôle à rechercher, puis le test à réaliser. Adapter au paramétrage réel de l\'application auditée : ces contrôles sont des exemples courants, pas une liste exhaustive.</p>' +
  T(["Processus","Risque couvert","ITAC à rechercher","Test (pas à pas)","Preuves à conserver","Anomalies fréquentes"], rows) +
  '<h2>7. Rapports (IPE) à valider</h2>' + T(["Rapport","Utilisé pour","Test d'exhaustivité et d'exactitude"], ipe) +
  '<h2>8. Cas pratiques corrigés</h2>' + cas;
}
function add(id, html){ const c = CERTS.find(x => x.id === id); if(!c) return; c.pages = c.pages || []; c.pages.push({id:"itac", title:"Risques et programme de travail ITAC", html}); }

/* ---------- Banque ---------- */
add("banque", page(
"Une banque est l'entreprise la plus dépendante de son système d'information : presque tous ses produits (intérêts, commissions) et ses provisions sont calculés par le système bancaire central (core banking). L'auditeur ne peut pas recalculer des millions d'opérations à la main : il doit tester les calculs et les contrôles automatiques.",
[["Intérêts mal calculés (taux, base de jours, date de valeur)","Exactitude des produits et charges d'intérêts","Erreur répétée sur tout le portefeuille ; souvent significative"],
["Mauvais classement des créances en souffrance","Évaluation des crédits et des provisions","Le classement dépend du calcul automatique des jours d'impayés ; un paramètre faux sous-estime les provisions"],
["Commissions non facturées ou annulées","Exhaustivité et réalité des commissions","Paramétrage incomplet ou annulations manuelles abusives"],
["Opérations frauduleuses validées par une seule personne","Réalité des opérations, trésorerie","Absence de double validation (maker / checker) ou profils trop larges"],
["Comptes d'attente non apurés","Exactitude et réalité","Les interfaces en échec alimentent des comptes d'attente qui masquent des écarts"],
["Dépassement des limites de crédit","Évaluation","Un forçage non autorisé permet des découverts non garantis"]],
[["Crédits","Calcul des intérêts","Calcul automatique selon le taux contractuel, la base (360 ou 365 jours) et l'échéancier","1. Relever les paramètres du produit (taux, base, périodicité). 2. Choisir un prêt par type de produit. 3. Recalculer l'échéance d'intérêts sur la période. 4. Comparer au montant comptabilisé.","Fiche produit, écran du prêt, tableau d'amortissement, recalcul","Taux modifié sans avenant ; base de jours différente du contrat"],
["Crédits","Classement et provisions","Calcul des jours d'impayés et reclassement automatique (sain, en souffrance, douteux) selon les seuils réglementaires","1. Relever les seuils paramétrés et les comparer à la réglementation. 2. Choisir un prêt de chaque catégorie, juste au-dessus et juste en dessous de chaque seuil. 3. Vérifier la date du plus ancien impayé et le classement obtenu. 4. Vérifier que le remboursement partiel ne remet pas à zéro le compteur à tort.","Paramètres, historique des échéances, classement obtenu","Compteur remis à zéro par un petit remboursement ; restructuration utilisée pour « blanchir » un impayé"],
["Dépôts","Intérêts créditeurs et frais de tenue de compte","Calcul et prélèvement automatique selon la grille tarifaire","1. Obtenir la grille tarifaire approuvée. 2. Comparer à la table des tarifs du système. 3. Réexécuter pour un compte de chaque catégorie.","Grille signée, table de paramètres, relevé du compte","Grille du système différente de la grille publiée ; exonérations non autorisées"],
["Opérations","Double validation (maker / checker)","Une opération au-delà d'un seuil doit être validée par un autre utilisateur","1. Relever les seuils de validation par type d'opération. 2. Tenter (en test) une saisie et une validation par le même utilisateur : elle doit être refusée. 3. Extraire les profils : aucun utilisateur ne doit avoir saisie et validation sur le même type d'opération sans contrôle compensatoire.","Paramètres de workflow, capture du refus, extraction des profils","Super-utilisateurs ou comptes génériques capables de tout faire"],
["Opérations","Limites et forçages","Blocage d'un retrait ou d'un débit au-delà du solde ou de l'autorisation ; forçage réservé à des profils précis et tracé","1. Vérifier le blocage sur un cas de dépassement. 2. Lister les profils autorisés à forcer. 3. Extraire le journal des forçages de l'année et vérifier un échantillon d'autorisations.","Capture du blocage, liste des profils, journal des forçages","Forçages massifs par un même agent ; forçages sans justification"],
["Interfaces","Monétique, SWIFT, compensation vers le core banking","Contrôle de complétude des fichiers (nombre et montant total) et rejet des doublons","1. Identifier les interfaces qui alimentent la comptabilité. 2. Pour une journée, rapprocher le total émis et le total intégré. 3. Vérifier le traitement des rejets et des comptes d'attente.","Comptes rendus d'intégration, totaux, liste des rejets","Fichier rejeté jamais retraité ; comptes d'attente anciens"],
["Clôture quotidienne","Arrêté de fin de journée","Traitements automatiques (intérêts courus, agios) avec contrôle de bonne fin","1. Obtenir le planning des traitements. 2. Vérifier les journaux de quelques jours, dont les fins de mois. 3. Vérifier le suivi des anomalies.","Journaux, tickets d'incident","Traitement relancé manuellement sans contrôle"],
["LBC/FT","Filtrage et alertes","Filtrage automatique des noms sur les listes de sanctions ; alertes sur les opérations atypiques","1. Relever les règles et les seuils. 2. Tester un nom de liste (dans un environnement de test validé). 3. Vérifier le traitement d'un échantillon d'alertes.","Paramètres, résultat du test, dossiers d'alertes","Listes non mises à jour ; seuils trop hauts ; alertes closes sans analyse"]],
[["Balance âgée des crédits (impayés par ancienneté)","Calcul des provisions","Total rapproché des encours comptables ; vérification de quelques prêts dans le système"],
["Liste des forçages","Revue des dépassements","Comparer le nombre de forçages au journal du système ; vérifier les paramètres d'extraction (dates, agences)"],
["État des comptes d'attente","Revue des suspens","Rapprocher le total avec la balance ; vérifier l'ancienneté de quelques lignes"]],
X("le système classe en « souffrance » à 90 jours d'impayés. Un prêt a 120 jours de retard mais le client a payé 5 000 FCFA la veille de l'arrêté ; le système l'affiche à 0 jour. Que conclure ?","<p>Le calcul remet le compteur à zéro dès qu'un paiement arrive, quel que soit son montant : l'ITAC est <b>déficient</b>. Conséquences : identifier tous les prêts concernés par une analyse de données (paiement récent faible et ancienneté réelle élevée), recalculer le classement et la provision, signaler la faiblesse à la direction et à la gouvernance.</p>") +
X("l'auditeur veut se fier au calcul des intérêts testé l'an dernier (benchmarking). Que doit-il vérifier ?","<p>Que les paramètres et le programme n'ont pas changé (journal des changements, historique des paramètres) et que les ITGC d'accès et de changement sont restés efficaces sur toute l'année. Sinon, il refait le test.</p>")
));

/* ---------- Monnaie électronique ---------- */
add("monnaie-electronique", page(
"Chez un émetteur de monnaie électronique, les montants unitaires sont petits mais les volumes énormes : des millions de transactions par mois. Les frais, les commissions des distributeurs, les plafonds et l'équilibre entre la monnaie émise et les fonds cantonnés à la banque reposent entièrement sur la plateforme.",
[["Monnaie émise non couverte par les fonds cantonnés","Exhaustivité et exactitude du passif envers les clients","La somme des portefeuilles doit être égale aux fonds déposés en banque ; un écart révèle une fraude ou une erreur grave"],
["Frais et commissions mal paramétrés","Exactitude du chiffre d'affaires et des charges de commissions","Erreur répétée sur des millions d'opérations"],
["Dépassement des plafonds réglementaires","Conformité, LBC/FT","Des portefeuilles non vérifiés au-delà des plafonds exposent à des sanctions"],
["Création de monnaie sans dépôt réel","Réalité","Un compte technique ou un administrateur peut créditer des portefeuilles sans contrepartie"],
["Transactions en échec mal dénouées","Exactitude","Un transfert débité mais non crédité, ou crédité deux fois"],
["Fraude par échange de carte SIM ou ingénierie sociale","Réalité des opérations","Pertes à rembourser, provisions"]],
[["Émission","Création de monnaie","La monnaie n'est créée que contre un dépôt confirmé (dépôt chez un distributeur adossé à sa propre réserve, ou virement bancaire reçu)","1. Identifier tous les moyens de créditer un portefeuille. 2. Vérifier qu'aucun ne crée de monnaie sans contrepartie. 3. Lister les comptes techniques et les utilisateurs habilités à les mouvementer. 4. Analyser leurs mouvements de l'année.","Schéma des flux, liste des habilitations, extraction des mouvements","Compte de « régularisation » utilisable sans double validation"],
["Rapprochement","Monnaie émise / fonds cantonnés","Rapport quotidien qui compare le total des portefeuilles au solde des comptes de cantonnement","1. Valider le rapport (IPE). 2. Vérifier les rapprochements de fin de mois et le traitement des écarts. 3. Refaire le rapprochement à la clôture.","Rapports signés, relevés bancaires","Écarts anciens non expliqués"],
["Tarification","Frais de transfert et de retrait","Calcul automatique des frais selon la grille par tranche de montant","1. Comparer la grille publiée et la table des frais du système. 2. Réexécuter une transaction juste en dessous et juste au-dessus de chaque palier. 3. Vérifier la comptabilisation.","Grille, table de paramètres, détail des transactions","Palier décalé d'une unité ; transactions exonérées sans raison"],
["Distributeurs","Commissions","Calcul automatique des commissions des distributeurs selon leur contrat","1. Relever les taux par type d'opération. 2. Recalculer la commission d'un distributeur pour un mois. 3. Analyser les opérations circulaires (dépôt et retrait répétés pour gonfler les commissions).","Contrats, paramètres, relevé de commissions","Opérations fractionnées pour multiplier les commissions"],
["KYC et plafonds","Plafonds par niveau de vérification","Blocage des opérations au-delà des plafonds de solde et de flux selon le niveau KYC du client","1. Relever les plafonds et les comparer à la réglementation. 2. Tester un portefeuille de chaque niveau au-delà du plafond. 3. Extraire les portefeuilles qui dépassent le plafond.","Paramètres, capture du blocage, extraction","Plafonds levés manuellement ; comptes de distributeurs utilisés comme comptes personnels"],
["Transactions","Atomicité et dénouement","Une transaction est entièrement réalisée ou entièrement annulée ; traitement automatique des transactions en suspens","1. Obtenir la liste des transactions en état « en attente » ou « échec ». 2. Vérifier leur dénouement. 3. Rapprocher débits et crédits d'une journée.","Rapport des transactions en suspens, journaux","Transactions bloquées depuis des mois"],
["Sécurité","Authentification des clients","Code PIN obligatoire, blocage après plusieurs erreurs, délai de sécurité après changement de SIM","1. Relever les paramètres. 2. Tester le blocage. 3. Vérifier le lien avec l'opérateur pour les changements de SIM.","Paramètres, captures","Pas de délai après changement de SIM"]],
[["État de rapprochement monnaie émise / cantonnement","Garantir que la monnaie est couverte","Recalcul du total des portefeuilles à partir de la base ; comparaison aux relevés bancaires"],
["Relevé des commissions des distributeurs","Charges de commissions","Recalcul sur un échantillon ; total rapproché de la comptabilité"],
["Liste des portefeuilles au-delà des plafonds","Conformité","Requête refaite par l'auditeur ou en sa présence"]],
X("la somme des portefeuilles dépasse de 40 M FCFA les fonds cantonnés à la banque. Quelle démarche ?","<p>C'est une anomalie majeure : de la monnaie a peut-être été créée sans contrepartie. Démarche : analyser les mouvements des comptes techniques et de régularisation, rechercher les crédits sans dépôt correspondant, identifier les utilisateurs qui les ont passés, informer immédiatement la direction et la gouvernance. L'écart doit être couvert et la BCEAO peut devoir être informée.</p>") +
X("des distributeurs font chaque jour des centaines de dépôts de 1 000 FCFA suivis de retraits. Pourquoi est-ce suspect ?","<p>Ces opérations circulaires gonflent les commissions versées par tranche d'opération. L'auditeur recherche par analyse de données les paires dépôt et retrait rapprochées sur les mêmes portefeuilles, chiffre les commissions indues et vérifie s'il existe une règle de détection.</p>")
));

/* ---------- Assurance ---------- */
add("assurance", page(
"Chez un assureur, le système calcule les primes, découpe les primes entre exercices (provision pour primes non acquises), gère les dossiers de sinistres et les provisions associées, et calcule les commissions des intermédiaires. Les provisions techniques sont le plus gros passif du bilan : elles dépendent directement des données et des calculs du système.",
[["Primes mal calculées ou mal découpées entre exercices","Exactitude et séparation des exercices (primes, PPNA)","La PPNA est calculée automatiquement sur toutes les polices"],
["Provisions pour sinistres sous-évaluées","Évaluation des provisions techniques (PSAP)","Dossiers non mis à jour, dossiers clos à tort, sinistres tardifs oubliés"],
["Sinistres fictifs ou payés deux fois","Réalité des charges de sinistres","Fraude interne ou externe"],
["Commissions d'intermédiaires gonflées","Exactitude des charges","Taux paramétrés hors contrat"],
["Primes émises non encaissées","Évaluation des créances","Polices maintenues en vigueur malgré l'absence de paiement"]],
[["Production","Calcul de la prime","Calcul automatique à partir du tarif (barème, coefficients, bonus-malus)","1. Obtenir le tarif approuvé. 2. Comparer aux tables du système. 3. Réexécuter le calcul pour une police de chaque produit, dont une avec bonus et une avec malus.","Tarif signé, tables, police","Tarif non mis à jour ; réductions commerciales sans limite"],
["Production","PPNA","Calcul automatique de la part de prime non acquise à la clôture (prorata temporis)","1. Choisir des polices à cheval sur deux exercices. 2. Recalculer la part non acquise. 3. Rapprocher le total du rapport de la comptabilité.","Rapport PPNA, polices, recalcul","Base de calcul sur la date de saisie au lieu de la date d'effet"],
["Sinistres","Contrôle de garantie et doublon","À l'ouverture d'un dossier, vérification automatique que la police était en vigueur et que le sinistre n'est pas déjà déclaré","1. Tester l'ouverture d'un dossier sur une police résiliée (doit être refusée ou signalée). 2. Tester un doublon (même police, même date, même tiers).","Captures, paramètres","Dossiers ouverts sur des polices suspendues pour impayé"],
["Sinistres","Délégation de règlement","Plafond de règlement par gestionnaire ; au-delà, validation hiérarchique","1. Relever les plafonds par profil. 2. Tester un règlement au-delà du plafond. 3. Extraire les règlements de l'année proches des plafonds (fractionnement).","Paramètres, captures, extraction","Règlements fractionnés juste sous le plafond"],
["Sinistres","Provisions dossier par dossier","Provision automatique à l'ouverture (forfait par type) puis mise à jour obligatoire ; alerte sur les dossiers sans mouvement","1. Relever les forfaits. 2. Lister les dossiers ouverts sans mise à jour depuis plus de 6 mois. 3. Vérifier la cohérence avec les expertises.","Paramètres, liste des dossiers, rapports d'expertise","Dossiers dormants avec provision insuffisante"],
["Intermédiaires","Commissions","Calcul automatique selon le taux du contrat de l'intermédiaire et le produit","1. Comparer taux contractuels et paramètres. 2. Recalculer la commission d'un intermédiaire sur un mois.","Contrats, paramètres, relevés","Taux plus élevé que le contrat pour certains intermédiaires"],
["Encaissement","Suspension pour non-paiement","Suspension automatique de la garantie après le délai légal sans paiement","1. Relever le délai paramétré. 2. Vérifier quelques polices impayées : sont-elles suspendues ?","Paramètres, état des primes impayées","Garantie maintenue sur des polices impayées"]],
[["Inventaire des sinistres à payer","Provisions pour sinistres (PSAP)","Total rapproché de la comptabilité ; quelques dossiers vérifiés dans le système et inversement"],
["État des primes émises et de la PPNA","Chiffre d'affaires et PPNA","Rapprochement avec la comptabilité ; vérification des paramètres de date"],
["Balance âgée des primes impayées","Provision pour créances douteuses","Rapprochement et sondage des anciennetés"]],
X("une prime annuelle de 120 000 FCFA à effet du 1er octobre a été saisie le 15 décembre. Le système calcule la PPNA à partir de la date de saisie. Quel est l'impact au 31 décembre ?","<p>Correct (date d'effet) : 9 mois non acquis, PPNA = 90 000. Système (date de saisie) : environ 11,5 mois non acquis, PPNA ≈ 115 000. La provision est surévaluée et le résultat sous-évalué d'environ 25 000 pour cette police. L'ITAC est déficient : il faut mesurer l'effet sur toutes les polices saisies en retard et faire corriger le paramètre.</p>")
));

/* ---------- Télécoms ---------- */
add("telecoms", page(
"Le chiffre d'affaires d'un opérateur télécom naît dans le réseau : chaque appel, SMS ou session de données produit un enregistrement (CDR) qui doit être valorisé par la plateforme de taxation, puis facturé ou décompté du crédit prépayé, puis comptabilisé. L'auditeur doit s'assurer que rien ne se perd et que les tarifs appliqués sont les bons (assurance des revenus).",
[["Perte de revenus : CDR perdus ou non taxés","Exhaustivité du chiffre d'affaires","Les CDR passent par plusieurs systèmes ; une rupture de chaîne est silencieuse"],
["Tarifs mal paramétrés","Exactitude du chiffre d'affaires","Une erreur s'applique à des millions d'appels"],
["Crédit prépayé vendu mais non consommé","Séparation des exercices (produits constatés d'avance)","Le crédit non consommé à la clôture n'est pas encore un revenu"],
["Fraude interne : bonus ou crédit attribués sans raison","Réalité","Des administrateurs de la plateforme peuvent créditer des comptes"],
["Interconnexion et itinérance mal facturées","Exactitude et exhaustivité","Écarts avec les autres opérateurs"]],
[["Collecte","Complétude des CDR","Contrôle de séquence des fichiers produits par les commutateurs et rapprochement des volumes entre réseau, taxation et facturation","1. Cartographier la chaîne (commutateur, médiation, taxation, facturation, comptabilité). 2. Pour une journée, rapprocher le nombre de CDR et les minutes à chaque étape. 3. Vérifier le traitement des fichiers rejetés.","Schéma, rapports de médiation, rapprochement","Fichiers manquants dans la séquence ; rejets jamais retraités"],
["Taxation","Application des tarifs","Valorisation automatique selon le plan tarifaire et les options de l'abonné","1. Comparer le catalogue des offres commerciales et les tarifs paramétrés. 2. Passer des appels test (numéro de test) pour chaque type d'appel et vérifier le montant décompté. 3. Vérifier les offres promotionnelles et leurs dates de fin.","Catalogue, paramètres, résultats des appels test","Promotion restée active après sa date de fin"],
["Prépayé","Recharges et crédit non consommé","Création des recharges (cartes, électronique) avec numéros uniques ; calcul du crédit restant à la clôture","1. Vérifier l'unicité et l'activation des recharges. 2. Valider le rapport du crédit restant (IPE). 3. Vérifier sa comptabilisation en produits constatés d'avance.","Rapports de recharge, état du crédit restant","Lots de cartes activés sans vente"],
["Plateforme","Ajustements manuels","Crédits manuels ou bonus limités à des profils précis, avec plafond et double validation","1. Lister les profils autorisés. 2. Extraire les ajustements de l'année. 3. Vérifier les autorisations sur un échantillon et les montants inhabituels.","Liste des profils, extraction, justificatifs","Ajustements répétés vers les mêmes numéros"],
["Postpayé","Facturation","Génération automatique des factures avec contrôle du cycle de facturation complet","1. Rapprocher le nombre d'abonnés actifs et le nombre de factures du cycle. 2. Recalculer une facture.","Rapports de cycle, factures","Abonnés actifs non facturés"],
["Interconnexion","Facturation entre opérateurs","Calcul automatique du trafic entrant et sortant et des montants dus","1. Rapprocher le trafic mesuré et celui déclaré par l'autre opérateur. 2. Analyser les écarts au-delà du seuil contractuel.","Relevés de trafic, factures, rapprochements","Écarts non contestés dans les délais"]],
[["Rapport de rapprochement des CDR","Exhaustivité du chiffre d'affaires","Refaire le rapprochement pour une journée à partir des sources"],
["État du crédit prépayé restant à la clôture","Produits constatés d'avance","Vérifier la requête et rapprocher avec les recharges vendues moins la consommation"],
["Liste des ajustements manuels","Revue des crédits accordés","Comparer le nombre d'ajustements avec le journal de la plateforme"]],
X("le réseau a produit 52 millions de minutes en mars, la taxation en a valorisé 50,5 millions. Que fait l'auditeur ?","<p>Un écart de 1,5 million de minutes (près de 3 %) est un risque d'exhaustivité du chiffre d'affaires. Il demande l'explication : appels gratuits (numéros d'urgence, service client), appels échoués, rejets de médiation. Il vérifie que les rejets ont été retraités et chiffre le revenu perdu si une partie reste inexpliquée.</p>")
));

/* ---------- Pétrole ---------- */
add("petrole", page(
"Dans le pétrole, la monnaie du secteur est le volume. Les systèmes de mesure (jaugeage des cuves, compteurs, index des pompes) alimentent l'ERP, qui valorise les stocks et les ventes. Les prix à la pompe sont souvent réglementés et les subventions ou compensations de l'État reposent sur les volumes déclarés. L'auditeur doit suivre les litres de bout en bout.",
[["Volumes mal mesurés ou non corrigés en température","Exactitude et réalité des stocks","Les volumes à 15 °C sont la base des stocks, des ventes et des droits de douane"],
["Pertes et vols masqués","Réalité des stocks","Modification des volumes ou des tables de correction dans le système"],
["Prix de vente non conformes à la structure des prix","Exactitude du chiffre d'affaires et des créances sur l'État","La compensation de l'État dépend du prix réglementé"],
["Stocks mal valorisés (coût moyen)","Évaluation","Calcul du coût moyen par produit et par dépôt"],
["Coûts récupérables gonflés (amont)","Réalité des coûts, partage de production","Le système de l'opérateur répartit les coûts entre partenaires"]],
[["Réception","Rapprochement des volumes","Comparaison automatique entre le volume du connaissement, le volume mesuré à la réception et la tolérance de perte en transit","1. Relever la tolérance paramétrée. 2. Choisir des réceptions au-dessus et en dessous de la tolérance. 3. Vérifier le blocage ou l'alerte et le traitement des écarts.","Paramètres, bons de réception, rapports de jaugeage","Tolérance élevée sans approbation ; écarts systématiquement au maximum"],
["Mesure","Correction de température","Conversion automatique des volumes ambiants en volumes à 15 °C avec les tables normalisées","1. Vérifier la version des tables et qui peut les modifier. 2. Réexécuter la conversion pour un produit et une température. 3. Vérifier le journal des modifications des tables.","Tables, recalcul, journal","Table modifiée sans changement approuvé"],
["Stations","Ventes par les index","Calcul automatique des ventes à partir des index de début et de fin des pompes ; alerte si l'index recule","1. Recalculer les ventes d'une station pour une journée. 2. Tester la saisie d'un index inférieur au précédent (doit être bloquée). 3. Rapprocher ventes, encaissements et variation de stock.","Relevés d'index, rapport des ventes, encaissements","Index modifiés après coup ; remise à zéro de compteur non justifiée"],
["Ventes","Prix","Application automatique du prix réglementé en vigueur à la date de livraison","1. Comparer l'historique des arrêtés de prix et la table des prix. 2. Vérifier une facture avant et après un changement de prix.","Arrêtés, table des prix, factures","Changement de prix saisi avec retard"],
["Stocks","Coût moyen pondéré","Calcul automatique du coût moyen par produit et par dépôt à chaque entrée","1. Recalculer le coût moyen après deux entrées. 2. Vérifier le traitement des écarts de jaugeage.","Fiches de stock, recalcul","Écarts de stock passés au coût d'achat le plus bas"],
["Habilitations","Accès aux volumes","Seuls des profils limités peuvent modifier un volume validé, avec double validation et trace","1. Extraire les profils. 2. Extraire les modifications de volumes de l'année. 3. Vérifier les justificatifs d'un échantillon.","Profils, journal des modifications","Modifications en fin de mois par la même personne"],
["Achats et services","Fractionnement","Contrôle automatique des seuils d'approbation et détection des factures fractionnées","1. Relever les seuils. 2. Rechercher par analyse les factures d'un même fournisseur juste sous les seuils sur une courte période.","Paramètres, analyse de données","Factures découpées pour éviter la validation de niveau supérieur"]],
[["Rapport des écarts de stock par dépôt","Évaluation des pertes","Rapprocher stock théorique (début + entrées − sorties) et stock mesuré"],
["Rapport des ventes par station","Chiffre d'affaires","Recalcul à partir des index d'un échantillon de stations"],
["État des créances de compensation sur l'État","Créances","Rapprochement avec les volumes vendus et les écarts de prix"]],
X("une station déclare un index final de pompe inférieur à l'index de la veille, avec la mention « changement de compteur ». Que vérifier ?","<p>Qu'un changement de compteur a bien eu lieu (bon d'intervention du technicien, approbation), que les index de l'ancien et du nouveau compteur sont documentés, et que le système bloque normalement un index qui recule sans cette procédure. Sinon, des ventes peuvent être dissimulées.</p>")
));

/* ---------- Entreprise commerciale (cours de comptabilité) ---------- */
add("compta", page(
"Toute entreprise commerciale ou industrielle utilise un ERP ou un logiciel de gestion pour ses achats, ses ventes, sa paie, ses immobilisations et sa trésorerie. Ce programme couvre les cycles communs à presque tous les clients : c'est le socle que l'on complète par les programmes sectoriels.",
[["Achats fictifs ou payés deux fois","Réalité des charges, exactitude des dettes","Faux fournisseurs, doublons de factures"],
["Ventes non facturées ou facturées à tort","Exhaustivité et réalité du chiffre d'affaires","Livraisons sans facture ; factures sans livraison"],
["Salariés fictifs, salaires modifiés","Réalité des charges de personnel","Le fichier du personnel et la paie sont souvent gérés par les mêmes personnes"],
["Amortissements mal calculés","Évaluation des immobilisations","Durées ou dates de mise en service fausses"],
["Écritures manuelles non autorisées","Toutes assertions","Contournement des contrôles automatiques"]],
[["Achats","Rapprochement commande, réception, facture (« three-way match »)","La facture n'est payable que si elle correspond à la commande et à la réception, dans une tolérance","1. Relever les tolérances (quantité, prix). 2. Tester une facture conforme (acceptée) et une facture au-delà de la tolérance (bloquée). 3. Vérifier qui peut débloquer.","Paramètres, captures, liste des profils","Tolérances trop larges ; déblocages massifs"],
["Achats","Doublons de factures","Blocage d'une facture avec le même fournisseur, le même numéro et le même montant","1. Tester un doublon. 2. Rechercher par analyse les doublons approchants (numéro légèrement différent).","Capture, analyse de données","Contrôle sur le numéro exact seulement"],
["Fournisseurs","Fichier fournisseurs","Création et modification des coordonnées bancaires réservées à un service indépendant, avec double validation et trace","1. Extraire les profils. 2. Extraire les modifications de RIB de l'année et vérifier les justificatifs.","Profils, journal des modifications","Le comptable fournisseurs peut modifier les RIB et payer"],
["Ventes","Limite de crédit client","Blocage des commandes au-delà de l'encours autorisé","1. Tester une commande au-delà de la limite. 2. Lister les déblocages et leurs auteurs.","Paramètres, capture, journal","Limites non renseignées (illimitées)"],
["Ventes","Facturation automatique","Facture générée automatiquement à la livraison, au prix du tarif en vigueur","1. Vérifier qu'aucune livraison ne reste sans facture (rapport des livraisons non facturées). 2. Réexécuter une facture et comparer au tarif.","Rapport, tarif, facture","Prix modifiables à la saisie sans contrôle"],
["Paie","Calcul de la paie","Calcul automatique du brut, des cotisations et de l'impôt selon les barèmes","1. Comparer les barèmes paramétrés aux textes en vigueur. 2. Recalculer le bulletin d'un salarié de chaque catégorie.","Barèmes, bulletins, recalcul","Barème non mis à jour au 1er janvier"],
["Paie","Fichier du personnel","Création d'un salarié réservée aux RH, paie lancée par une autre personne","1. Vérifier la séparation des profils. 2. Rapprocher le fichier de paie et le fichier RH ; rechercher RIB communs à plusieurs salariés.","Profils, extractions, analyse","Même RIB pour plusieurs salariés"],
["Immobilisations","Amortissements","Calcul automatique selon la durée et la date de mise en service","1. Relever les durées par catégorie. 2. Recalculer la dotation d'une immobilisation par catégorie.","Paramètres, fiches, recalcul","Durée saisie librement par l'utilisateur"],
["Comptabilité","Écritures manuelles","Validation obligatoire des écritures manuelles au-delà d'un seuil ; interdiction de saisir sur une période clôturée","1. Tester une saisie sur une période clôturée (refus). 2. Extraire toutes les écritures manuelles et analyser : week-ends, montants ronds, comptes inhabituels, auteurs.","Paramètres, capture, extraction","Périodes rouvertes après la clôture"]],
[["Balance âgée clients","Provision pour créances douteuses","Total rapproché du compte clients ; ancienneté vérifiée sur quelques factures"],
["Journal des écritures manuelles","Tests sur les écritures (fraude)","Exhaustivité : rapprocher avec le grand livre complet"],
["Fichier des immobilisations","Amortissements","Total rapproché des comptes d'immobilisations"]],
X("le contrôle de doublon ne bloque que les factures au numéro identique. L'auditeur trouve « FA-1203 » et « FA1203 » du même fournisseur pour le même montant, payées toutes les deux. Que conclure ?","<p>L'ITAC est conçu de façon trop étroite (conception insuffisante) : il ne couvre pas le risque de doublon. L'auditeur étend l'analyse à tout l'exercice (mêmes fournisseur et montant, numéros proches, dates proches), chiffre les paiements en double, demande leur récupération et recommande d'élargir la règle.</p>")
));
})();
