/* Émetteurs de monnaie électronique (UMOA) : cours original pour auditeurs débutants.
   Les règles citées sont résumées : vérifier les instructions BCEAO en vigueur. */
(function(){
const {T, E, X} = window.__GL;

const modules = [
{ id:"e1", day:"Comprendre", title:"Qu'est-ce que la monnaie électronique ?", html:`
<p class="lead">Quand tu envoies de l'argent avec ton téléphone, tu utilises de la monnaie électronique. Derrière ce geste simple se cache un modèle très encadré : chaque franc électronique doit être couvert par un franc réel déposé en banque.</p>
<h2>1. Définition</h2>
<p>La monnaie électronique est une <b>valeur monétaire stockée sous forme électronique</b> (sur un serveur, accessible par une puce, un téléphone ou une carte), <b>émise contre la remise de fonds</b> d'un montant au moins égal, et <b>acceptée comme moyen de paiement</b> par d'autres personnes que l'émetteur.</p>
<ul><li>Ce n'est <b>pas un dépôt bancaire</b> : l'émetteur ne peut pas prêter cet argent.</li><li>Elle ne rapporte <b>pas d'intérêts</b> au porteur.</li><li>Elle est <b>remboursable</b> à tout moment à sa valeur nominale (on peut toujours retirer son argent).</li></ul>
<h2>2. Qui peut en émettre dans l'UMOA ?</h2>
${T(["Émetteur","Modèle"],[
["Établissement de monnaie électronique (EME)","Société agréée par la BCEAO, dédiée à cette activité (souvent filiale d'un opérateur télécom ou fintech)"],
["Banque","Une banque peut émettre de la monnaie électronique, souvent en partenariat avec un opérateur télécom qui fournit le canal"],
["Système financier décentralisé (microfinance)","Sous conditions, pour sa clientèle"]])}
<p>Au Sénégal, des services comme Orange Money, Wave ou Free Money reposent sur ces modèles. La réglementation principale est une instruction de la BCEAO relative aux conditions et modalités d'exercice des activités des émetteurs de monnaie électronique.</p>
<h2>3. Les services proposés</h2>
${T(["Service","En clair"],[
["Cash-in (dépôt)","Le client remet des espèces à un agent, qui lui transfère de la monnaie électronique"],
["Cash-out (retrait)","Le client transfère de la monnaie électronique à un agent, qui lui remet des espèces"],
["Transfert P2P","D'un porteur à un autre"],
["Paiement marchand","Achat chez un commerçant, souvent par QR code"],
["Paiement de factures","Électricité, eau, télévision, frais scolaires"],
["Paiements de masse","Salaires, aides sociales, versés par une entreprise ou un État sur des milliers de comptes"],
["Transferts internationaux","Réception d'argent de la diaspora via des partenaires"],
["Liens avec les banques","Virement entre compte bancaire et portefeuille électronique"],
["Services associés","Microcrédit et épargne, toujours proposés par une banque ou une institution partenaire, jamais par l'EME seul"]])}
<h2>4. Comment l'émetteur gagne de l'argent</h2>
<ul><li><b>Frais de retrait</b> et frais de transfert (certains acteurs ont un modèle à frais réduits, par exemple un pourcentage unique sur les retraits).</li><li><b>Commissions</b> des marchands et des facturiers.</li><li>Commissions sur les transferts internationaux.</li></ul>
<p>Ses principales charges : les <b>commissions versées aux agents</b> et distributeurs, la plateforme technique, le marketing, les coûts de conformité.</p>
<div class="box key"><h4>L'enjeu pour l'auditeur</h4><p>Le chiffre d'affaires est fait de millions de petites transactions calculées automatiquement par la plateforme. Il est impossible de tout vérifier à la main : l'audit repose sur la fiabilité du système, la grille tarifaire paramétrée et des analyses de données sur 100 % des transactions.</p></div>
`},

{ id:"e2", day:"Comprendre", title:"Le principe de couverture : le compte de cantonnement", html:`
<p class="lead">C'est la règle d'or du secteur et le premier point que vérifie un auditeur : la monnaie électronique en circulation doit être intégralement couverte par des fonds placés sur des comptes bancaires dédiés.</p>
<h2>1. Le mécanisme</h2>
<ol><li>Un agent veut de la monnaie électronique pour servir ses clients. Il verse 1 000 000 en espèces ou par virement sur le compte bancaire de l'émetteur.</li><li>L'émetteur crée 1 000 000 de monnaie électronique sur le portefeuille de l'agent.</li><li>Les fonds versés sont placés sur un <b>compte de cantonnement</b> (aussi appelé compte de couverture), ouvert dans une ou plusieurs banques, séparé des comptes propres de l'émetteur.</li><li>Ces fonds sont protégés : ils ne peuvent pas servir à payer les dettes de l'émetteur et restent destinés aux porteurs, même en cas de faillite.</li></ol>
<div class="box key"><h4>L'équation à vérifier chaque jour</h4><p><b>Fonds sur les comptes de cantonnement ≥ total de la monnaie électronique en circulation</b> (somme de tous les portefeuilles : clients, agents, marchands, comptes internes de l'émetteur).</p></div>
<h2>2. Pourquoi des écarts apparaissent</h2>
${T(["Cause","Exemple"],[
["Décalages de date","Un agent a versé l'argent le soir, la banque le crédite le lendemain"],
["Frais et commissions","Les revenus de l'émetteur, prélevés en monnaie électronique, doivent être sortis du cantonnement vers son compte propre"],
["Transactions en échec","Transfert débité mais non crédité, à corriger"],
["Fraude","Création de monnaie électronique sans dépôt réel (émission non adossée)"],
["Erreurs d'intégration","Fichiers mal chargés entre la banque et la plateforme"]])}
<h2>3. La comptabilité chez l'émetteur</h2>
${E("Un agent verse 1 000 000 sur le compte de cantonnement ; l'émetteur crée la monnaie électronique",[["Banque, compte de cantonnement","Fonds reçus (actif, à usage restreint)","1 000 000",""],["Monnaie électronique en circulation","Dette envers les porteurs","","1 000 000"]])}
${E("Un client retire 50 000 chez un agent avec 500 de frais",[["Monnaie électronique en circulation (client)","Débit du portefeuille du client","50 500",""],["Monnaie électronique en circulation (agent)","Crédit du portefeuille de l'agent","","50 000"],["Produits : frais de retrait","Revenu de l'émetteur","","500"]])}
<p>La monnaie électronique en circulation a baissé de 500 : ce montant appartient désormais à l'émetteur. Il doit transférer 500 du compte de cantonnement vers son compte propre, sinon le cantonnement contiendrait plus que nécessaire.</p>
<h2>4. Les tests d'audit</h2>
<ul><li>Obtenir les confirmations bancaires de tous les comptes de cantonnement à la clôture.</li><li>Extraire de la plateforme le solde de <b>tous</b> les portefeuilles à la même date et heure (photographie de la base).</li><li>Rapprocher les deux et expliquer chaque écart.</li><li>Vérifier que le rapprochement est fait <b>quotidiennement</b>, revu par une personne indépendante, et que les écarts anciens sont traités.</li><li>Vérifier que la somme des portefeuilles dans la plateforme est égale à la dette inscrite en comptabilité.</li></ul>
${X("à la clôture : comptes de cantonnement 12,4 milliards ; total des portefeuilles 12,9 milliards. Que conclus-tu ?","<p>La monnaie électronique en circulation dépasse la couverture de 0,5 milliard : <b>non-respect du principe de couverture</b>. Causes possibles : décalages de date (à justifier un par un), frais non encore sortis (cela jouerait dans l'autre sens), monnaie créée sans fonds (fraude ou erreur). C'est un point majeur à remonter à la direction et, selon la réglementation, au superviseur.</p>")}
`},

{ id:"e3", day:"Comprendre", title:"Le réseau d'agents et la gestion de la liquidité", html:`
<p class="lead">Sans agents, pas de mobile money : ce sont eux qui transforment les espèces en monnaie électronique et inversement. Ils sont aussi une source importante de risque.</p>
<h2>1. La chaîne de distribution</h2>
${T(["Acteur","Rôle"],[
["Émetteur","Crée la monnaie électronique, fixe les règles et les commissions"],
["Distributeur / super-agent (master agent)","Recrute et anime des agents, leur fournit de la monnaie électronique et des espèces"],
["Agent (point de service)","Commerçant de quartier qui fait les dépôts et retraits pour les clients"],
["Client / porteur","Utilise le service"]])}
<h2>2. La double liquidité de l'agent</h2>
<p>Un agent doit avoir en permanence <b>des espèces</b> (pour les retraits) et <b>de la monnaie électronique</b> (le « float », pour les dépôts). Quand les clients déposent beaucoup, son float s'épuise et ses espèces s'accumulent ; il doit « rééquilibrer » auprès de son distributeur ou d'une banque. Une rupture de liquidité fait perdre des clients.</p>
<h2>3. Les commissions</h2>
<p>L'agent touche une commission sur chaque opération, selon une grille paramétrée dans la plateforme. Les commissions sont calculées automatiquement (souvent chaque jour ou chaque mois) et versées en monnaie électronique.</p>
<h2>4. Les fraudes liées aux agents</h2>
${T(["Fraude","Mécanisme","Détection"],[
["Fractionnement","L'agent découpe un dépôt de 100 000 en dix dépôts de 10 000 pour toucher dix commissions minimales","Analyse des transactions répétées entre le même agent et le même client sur un temps court"],
["Opérations fictives","Dépôts et retraits croisés entre l'agent et des complices sans mouvement réel d'argent","Rotation anormale, clients toujours les mêmes"],
["Dépôt direct non autorisé","L'agent fait le transfert depuis son propre compte au lieu d'un dépôt, et facture le client","Contrôles terrain, plaintes"],
["Frais illégaux","L'agent demande au client des frais supplémentaires","Enquêtes clients mystère"],
["Abus de comptes clients","L'agent utilise les identifiants de clients peu familiers avec le téléphone","Surveillance des connexions"]])}
<h2>5. La conformité au niveau des agents</h2>
<p>L'émetteur reste <b>responsable</b> des actes de ses agents vis-à-vis du régulateur. Il doit les sélectionner, les former, les contrôler et tenir la liste à jour. Les agents réalisent souvent l'identification des clients (KYC) : la qualité des pièces collectées est un sujet d'audit fréquent.</p>
${X("un agent a perçu 3 millions de commissions en un mois alors que la moyenne est de 150 000. Quelles analyses ?","<p>Extraire toutes ses transactions : nombre, montants, contreparties, horaires. Rechercher le fractionnement (montants juste au seuil de commission, mêmes clients répétés), les allers-retours dépôt / retrait entre les mêmes comptes, les comptes créés récemment par cet agent. Vérifier que la grille de commission n'a pas été modifiée et que le calcul est correct. Comparer avec le volume réel d'espèces que l'agent a rééquilibré.</p>")}
`},

{ id:"e4", day:"Risques", title:"Réglementation, KYC et lutte contre le blanchiment", html:`
<p class="lead">La monnaie électronique favorise l'inclusion financière, mais sa rapidité et son anonymat relatif la rendent attirante pour le blanchiment et la fraude. La réglementation cherche l'équilibre entre facilité d'accès et contrôle.</p>
<h2>1. Les exigences principales pour un émetteur</h2>
<ul><li><b>Agrément</b> de la BCEAO et capital minimum.</li><li><b>Couverture intégrale</b> de la monnaie émise sur des comptes de cantonnement (module 2).</li><li><b>Interdiction</b> de prêter les fonds ou de verser des intérêts aux porteurs.</li><li><b>Plafonds</b> de solde et d'opérations selon le niveau d'identification du client.</li><li><b>Reporting</b> périodique à la BCEAO (activité, couverture, incidents).</li><li><b>Contrôle interne</b>, gestion des risques, sécurité des systèmes et continuité d'activité.</li><li><b>Application de la loi uniforme LBC/FT</b> : connaissance du client, surveillance, déclaration de soupçon à la CENTIF.</li></ul>
<h2>2. Les niveaux de KYC</h2>
<p>Le principe : plus le compte est identifié, plus les plafonds sont élevés.</p>
${T(["Niveau","Identification","Plafonds"],[
["Simplifié","Numéro de téléphone, informations de base","Faibles"],
["Standard","Pièce d'identité vérifiée","Plus élevés"],
["Renforcé","Justificatifs supplémentaires, entreprise identifiée, bénéficiaire effectif","Les plus élevés"]])}
<p>Les montants exacts sont fixés par la réglementation et la politique de l'émetteur. L'auditeur vérifie que les plafonds sont <b>paramétrés dans la plateforme</b> et qu'ils <b>bloquent réellement</b> les opérations au-delà.</p>
<h2>3. Les signaux de blanchiment typiques</h2>
<ul><li>Nombreux portefeuilles ouverts avec la même pièce d'identité ou depuis le même appareil.</li><li>Comptes qui reçoivent de nombreux petits montants puis retirent tout immédiatement (comptes « mules »).</li><li>Transactions juste en dessous des plafonds, répétées.</li><li>Flux transfrontaliers inhabituels.</li></ul>
<h2>4. La fraude subie par les clients</h2>
<ul><li><b>Ingénierie sociale</b> : faux appels d'un « agent du service client » qui demande le code secret.</li><li><b>SIM swap</b> : le fraudeur obtient un duplicata de la carte SIM et prend le contrôle du compte.</li><li><b>Faux SMS</b> de confirmation de dépôt pour tromper un commerçant.</li></ul>
<p>Les contrôles attendus : vérification d'identité renforcée pour le remplacement de SIM, blocage temporaire des retraits après un changement de SIM, alertes, sensibilisation des clients.</p>
${X("l'outil de paramétrage montre un plafond de 2 000 000 par jour pour les comptes « simplifiés », alors que la politique prévoit 200 000. Quel est le risque et que recommandes-tu ?","<p><b>Risque</b> : non-conformité réglementaire et exposition au blanchiment (des comptes peu identifiés peuvent faire passer de gros montants). <b>Recommandation</b> : corriger immédiatement le paramètre, rechercher les comptes ayant dépassé 200 000 par jour depuis la date de modification, analyser ces flux, et revoir la gestion des changements de paramètres (qui a fait la modification, avec quelle approbation).</p>")}
`},

{ id:"e5", day:"Audit IT", title:"La plateforme technique et son audit", html:`
<p class="lead">Un émetteur de monnaie électronique est avant tout une entreprise informatique. Sa plateforme tient les comptes de millions de clients en temps réel.</p>
<h2>1. Les composants</h2>
${T(["Composant","Rôle"],[
["Plateforme de portefeuilles (wallet)","Tient les comptes et exécute les transactions ; calcule les frais et commissions"],
["Passerelle USSD et SMS","Permet d'utiliser le service sur un téléphone simple (codes *xxx#)"],
["Application mobile et API","Application des clients et des marchands ; interfaces avec les partenaires"],
["Interfaces bancaires","Approvisionnement, virements banque ↔ portefeuille, comptes de cantonnement"],
["Interfaces facturiers et partenaires internationaux","Paiement de factures, transferts de la diaspora"],
["Système de lutte contre la fraude et LBC","Règles d'alerte, listes de sanctions"],
["Entrepôt de données et comptabilité","Agrégation des transactions, écritures comptables, reporting BCEAO"]])}
<h2>2. Les risques IT spécifiques</h2>
${T(["Risque","Pourquoi c'est grave"],[
["Ajustement manuel de solde","Un utilisateur interne qui peut créditer un portefeuille crée de l'argent à partir de rien"],
["Modification de la grille tarifaire","Les revenus et les commissions changent instantanément pour des millions d'opérations"],
["Accès direct à la base de données","Un administrateur peut modifier des soldes sans laisser de trace dans l'application"],
["Transactions en échec ou en double","Pertes financières et écarts de couverture"],
["Interfaces non contrôlées","Fichiers bancaires chargés deux fois, ou pas du tout"],
["Indisponibilité","Les clients ne peuvent plus payer : impact d'image et réglementaire"]])}
<h2>3. Les contrôles attendus</h2>
<ul><li><b>Ajustements</b> : procédure formalisée, double validation (maker / checker), plafonds, revue quotidienne de tous les ajustements par une équipe indépendante.</li><li><b>Paramètres</b> (frais, commissions, plafonds) : modification par un nombre restreint de personnes, après approbation, avec journal des changements revu.</li><li><b>Base de données</b> : accès administrateur nominatif, limité, journalisé, surveillé ; aucun compte applicatif partagé.</li><li><b>Rapprochements automatiques</b> : plateforme ↔ comptes de cantonnement, plateforme ↔ comptabilité, plateforme ↔ partenaires.</li><li><b>Sécurité</b> : chiffrement, protection des codes secrets, tests d'intrusion des applications et API.</li><li><b>Continuité</b> : site de secours, tests de bascule.</li></ul>
<h2>4. Analyses de données de l'auditeur</h2>
<ul><li>Recalcul des frais sur 100 % des transactions à partir de la grille approuvée.</li><li>Recalcul des commissions des agents.</li><li>Liste de tous les ajustements manuels de l'année : auteurs, validateurs, montants, bénéficiaires.</li><li>Recherche de portefeuilles internes (comptes de l'émetteur, comptes de test) avec des soldes ou des mouvements anormaux.</li><li>Rapprochement du revenu comptabilisé avec le revenu calculé depuis les transactions.</li></ul>
${X("tu constates que trois développeurs ont un accès en écriture à la base de données de production des portefeuilles. Quels risques et quels tests ?","<p><b>Risques</b> : modification non autorisée de soldes (création de monnaie, détournement), effacement de traces, non-respect de la séparation développement / production. <b>Tests</b> : extraire les journaux de la base pour identifier les requêtes de modification exécutées par ces comptes ; rapprocher les soldes avec les transactions (un solde qui ne s'explique pas par l'historique des transactions signale une modification directe) ; vérifier la procédure d'accès d'urgence. <b>Recommandation</b> : retirer ces droits, mettre en place un accès d'urgence tracé et approuvé, et une surveillance des requêtes sur les tables de soldes.</p>")}
`},

{ id:"e6", day:"Audit IT", title:"Revenus, comptabilité et programme d'audit", html:`
<p class="lead">Ce module assemble les éléments pour auditer les comptes d'un émetteur de monnaie électronique.</p>
<h2>1. Les postes clés des états financiers</h2>
${T(["Poste","Point d'attention"],[
["Comptes de cantonnement (actif)","Existence (confirmations bancaires), caractère restreint, présentation séparée"],
["Monnaie électronique en circulation (dette)","Exhaustivité et exactitude : égale à la somme des portefeuilles"],
["Revenus (frais, commissions)","Calcul automatique fiable, rattachement à la bonne période"],
["Commissions des agents (charges)","Exactitude, fraude au fractionnement"],
["Comptes de passage et d'attente","Transactions en suspens, ancienneté"],
["Provisions","Litiges, fraudes subies, remboursements clients"]])}
<h2>2. Le programme de travail type</h2>
${T(["Domaine","Travaux"],[
["Compréhension","Cartographie des flux (cash-in, cash-out, P2P, paiements, international), des systèmes et des partenaires"],
["ITGC","Accès (dont accès base de données et ajustements), changements (dont paramètres tarifaires), exploitation (traitements de calcul des commissions, sauvegardes)"],
["Couverture","Rapprochement cantonnement / portefeuilles à la clôture et sur plusieurs dates de l'année"],
["Revenus","Recalcul des frais sur 100 % des transactions, analyse des variations mensuelles"],
["Charges de commissions","Recalcul, analyse des agents atypiques"],
["Ajustements manuels","Revue exhaustive, approbations, justificatifs"],
["Conformité","Plafonds paramétrés, KYC sur échantillon, traitement des alertes LBC, reporting BCEAO"],
["Interfaces","Rapprochement avec les banques, facturiers et partenaires internationaux"]])}
<h2>3. Questions à poser en entretien</h2>
<ul><li>Qui peut créer ou modifier un portefeuille interne ? Qui peut faire un ajustement de solde ?</li><li>Comment est fait le rapprochement quotidien de la couverture ? Montrez-moi celui du 31 décembre.</li><li>Quels changements de grille tarifaire ont eu lieu cette année ? Qui les a approuvés ?</li><li>Comment sont traitées les transactions en échec ?</li><li>Combien de fraudes ont été signalées, et quel montant a été remboursé aux clients ?</li></ul>
<div class="box key"><h4>À retenir</h4><p>Trois tests font l'essentiel de la valeur d'un audit d'émetteur : <b>la couverture</b>, <b>les ajustements manuels</b> et <b>le recalcul des frais et commissions</b>. Les trois reposent sur une extraction fiable et complète des données de la plateforme : vérifie toujours comment l'extraction a été faite.</p></div>
`}
];

CERTS.push({
  id:"monnaie-electronique", title:"Émetteurs de monnaie électronique", org:"Secteur d'activité · UMOA",
  intro:"Comprendre le mobile money de l'intérieur : couverture des fonds, agents, commissions, réglementation BCEAO, fraude, plateforme technique et programme d'audit. Un secteur où l'audit IT est au cœur de la certification des comptes.",
  examMinutes:35, examQuestions:25, passMark:70,
  exam:`<p>Test de connaissances interne au campus : 25 questions tirées au hasard, 35 minutes, seuil conseillé 70 %.</p>`,
  modules,
  pages:[{ id:"lexique", title:"Lexique de la monnaie électronique", html:`
${T(["Terme","Définition"],[
["Agent","Point de service qui réalise les dépôts et retraits pour les clients"],
["Ajustement","Correction manuelle d'un solde de portefeuille par l'émetteur"],
["API","Interface qui permet à un système partenaire d'utiliser les services de la plateforme"],
["Cash-in / cash-out","Dépôt d'espèces contre monnaie électronique / retrait d'espèces"],
["Compte de cantonnement","Compte bancaire dédié où sont déposés les fonds qui couvrent la monnaie émise"],
["Couverture","Égalité entre fonds cantonnés et monnaie électronique en circulation"],
["Distributeur (master agent)","Intermédiaire qui anime un réseau d'agents"],
["EME","Établissement de monnaie électronique"],
["Float","Stock de monnaie électronique d'un agent"],
["Fractionnement","Découpage d'une opération pour multiplier les commissions ou rester sous un plafond"],
["Interopérabilité","Possibilité d'envoyer de l'argent entre émetteurs et banques différents"],
["KYC","Connaissance du client ; niveaux simplifié, standard, renforcé"],
["Marchand","Commerçant qui accepte les paiements en monnaie électronique"],
["P2P","Transfert de personne à personne"],
["Paiement de masse","Versement simultané à de nombreux bénéficiaires (salaires, aides)"],
["Plafond","Limite de solde ou d'opérations selon le niveau de KYC"],
["Porteur","Titulaire d'un portefeuille de monnaie électronique"],
["Portefeuille (wallet)","Compte de monnaie électronique"],
["Rééquilibrage","Opération par laquelle un agent échange espèces et float"],
["SIM swap","Remplacement frauduleux de la carte SIM d'un client pour prendre le contrôle de son compte"],
["USSD","Technologie de menus par codes (*xxx#) utilisable sur tous les téléphones"]])}
`}],
  questions:[]
});
})();
