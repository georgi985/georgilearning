/* Comptabilité générale pas à pas : partie 2 (modules 8 à 13 et ressources). */
(function(){
const {T, E, X} = window.__GL;
const c = CERTS.find(x => x.id === 'compta');

c.modules.push(
{ id:"m8", day:"Opérations courantes", title:"Salaires et charges sociales", html:`
<p class="lead">La paie est un cycle sensible : montants élevés, données personnelles, risque de salariés fictifs. Il faut comprendre la différence entre salaire brut, salaire net et coût total employeur.</p>
<h2>1. Du brut au net, et du brut au coût total</h2>
${T(["Notion","Définition"],[
["Salaire brut","Salaire de base + primes + heures supplémentaires + avantages"],
["Retenues salariales","Cotisations sociales à la charge du salarié (retraite…) et impôt sur le revenu retenu à la source"],
["Salaire net à payer","Brut − retenues salariales : ce que le salarié reçoit"],
["Charges patronales","Cotisations à la charge de l'employeur (retraite, prestations familiales, accidents du travail…)"],
["Coût total employeur","Brut + charges patronales"]])}
<p>Au Sénégal, les cotisations sont versées principalement à l'<b>IPRES</b> (retraite) et à la <b>CSS</b> (prestations familiales et accidents du travail). L'impôt sur le revenu est retenu par l'employeur et reversé à l'État. Les taux et plafonds changent : dans les exercices ci-dessous, les montants sont fictifs.</p>
<h2>2. Les écritures de paie</h2>
<p>Exemple : salaire brut 500 000 ; cotisations salariales 30 000 ; impôt retenu 20 000 ; net 450 000 ; charges patronales 80 000.</p>
${E("1) Constatation du salaire",[["661","Rémunérations directes versées au personnel","500 000",""],["431","Sécurité sociale (part salariale)","","30 000"],["447","État, impôts retenus à la source","","20 000"],["422","Personnel, rémunérations dues","","450 000"]])}
${E("2) Charges patronales",[["664","Charges sociales","80 000",""],["431","Sécurité sociale (part patronale)","","80 000"]])}
${E("3) Paiement du salaire net",[["422","Personnel, rémunérations dues","450 000",""],["521","Banque","","450 000"]])}
${E("4) Paiement des organismes sociaux et de l'État",[["431","Sécurité sociale","110 000",""],["447","État, impôts retenus à la source","20 000",""],["521","Banque","","130 000"]])}
<h2>3. Avances et acomptes</h2>
<p>Un acompte versé au salarié en cours de mois est enregistré au débit du compte 421 « Personnel, avances et acomptes ». Il est déduit du net à payer en fin de mois.</p>
<h2>4. Le cycle paie vu par l'auditeur</h2>
${T(["Risque","Contrôle attendu","Test d'audit"],[
["Salariés fictifs","Création d'un salarié validée par les RH, séparée de la paie","Rapprocher le fichier de paie et les contrats ; rechercher des comptes bancaires en double"],
["Modification non autorisée des salaires","Droits d'accès limités au module de paie ; revue des changements","Extraire le journal des modifications de rémunération ; vérifier les approbations"],
["Salariés partis toujours payés","Procédure de sortie (départ) reliée à la paie","Comparer la liste des départs et les paiements des mois suivants"],
["Charges sociales sous-déclarées","Rapprochement mensuel paie / déclarations","Recalculer les cotisations sur un échantillon"]])}
<div class="box key"><h4>Lien avec l'audit IT</h4><p>Dans la plupart des missions, la revue des accès au module de paie (qui peut créer un salarié, qui peut modifier un salaire, qui peut valider un virement) est l'un des tests ITGC les plus importants.</p></div>
${X("brut 800 000 ; cotisations salariales 56 000 ; impôt retenu 74 000 ; charges patronales 120 000. Calculer le net et le coût total, puis passer l'écriture de salaire.","<p>Net = 800 000 − 56 000 − 74 000 = <b>670 000</b>. Coût total = 800 000 + 120 000 = <b>920 000</b>.</p>" + E("",[["661","Rémunérations","800 000",""],["431","Sécurité sociale","","56 000"],["447","Impôts retenus","","74 000"],["422","Rémunérations dues","","670 000"]]))}
`},

{ id:"m9", day:"Opérations courantes", title:"Immobilisations et amortissements", html:`
<p class="lead">Une immobilisation est un bien utilisé durablement : on ne le passe pas en charge le jour de l'achat. On étale son coût sur sa durée d'utilisation grâce à l'amortissement.</p>
<h2>1. Charge ou immobilisation ?</h2>
<p>Un bien est immobilisé s'il est destiné à servir <b>plus d'un exercice</b>, s'il est contrôlé par l'entreprise et si son coût peut être mesuré de façon fiable. Les biens de faible valeur peuvent être passés en charges selon la politique de l'entreprise. Exemples : un camion, un serveur informatique ou un logiciel ERP sont des immobilisations ; des cartouches d'encre sont des charges.</p>
<h2>2. Le coût d'entrée</h2>
<p>Le coût d'acquisition comprend le prix d'achat (après remises), les droits de douane non récupérables, les frais de transport, d'installation et de mise en service. La TVA récupérable n'en fait pas partie.</p>
${E("Achat d'un serveur : 6 000 000 HT + installation 300 000 HT, TVA 18 %, à crédit",[["244","Matériel informatique","6 300 000",""],["4451","TVA récupérable sur immobilisations","1 134 000",""],["481","Fournisseurs d'investissements","","7 434 000"]])}
<p>Note le compte 481 : les dettes envers les fournisseurs d'immobilisations sont séparées des fournisseurs ordinaires (401).</p>
<h2>3. L'amortissement linéaire</h2>
<p>Le bien perd de la valeur en s'usant. Chaque année, on constate une charge (<b>dotation aux amortissements</b>) et on diminue la valeur du bien au bilan.</p>
<div class="box key"><h4>Formule</h4><p>Annuité = (Coût − valeur résiduelle) ÷ durée d'utilisation. La première année, on calcule <b>au prorata du temps</b> à partir de la date de mise en service.</p></div>
<p>Exemple : le serveur (6 300 000) est mis en service le 1<sup>er</sup> avril N, durée d'utilisation 5 ans, sans valeur résiduelle. Annuité pleine = 1 260 000. Année N : 1 260 000 × 9/12 = 945 000.</p>
${T(["Année","Dotation","Cumul des amortissements","Valeur nette comptable (VNC)"],[
["N (9 mois)","945 000","945 000","5 355 000"],
["N+1","1 260 000","2 205 000","4 095 000"],
["N+2","1 260 000","3 465 000","2 835 000"],
["N+3","1 260 000","4 725 000","1 575 000"],
["N+4","1 260 000","5 985 000","315 000"],
["N+5 (3 mois)","315 000","6 300 000","0"]])}
${E("Écriture au 31/12/N",[["681","Dotations aux amortissements d'exploitation","945 000",""],["2844","Amortissements du matériel et mobilier","","945 000"]])}
<p>Au bilan, on présente le <b>brut</b> (6 300 000), les <b>amortissements</b> (945 000) et la <b>valeur nette</b> (5 355 000).</p>
<h2>4. Autres modes</h2>
<ul><li><b>Dégressif</b> : annuités plus fortes au début (admis fiscalement pour certains biens).</li>
<li><b>Par unités d'œuvre</b> : selon l'utilisation réelle (kilomètres, heures machine).</li>
<li><b>Approche par composants</b> (SYSCOHADA révisé) : quand un bien a des éléments de durées différentes (un avion et ses moteurs, un bâtiment et sa toiture), chaque composant est amorti sur sa propre durée.</li></ul>
<p>Les terrains ne s'amortissent pas (sauf gisements et carrières). Si la valeur d'un bien chute brutalement (casse, obsolescence), on passe en plus une <b>dépréciation</b>.</p>
<h2>5. La cession d'une immobilisation</h2>
<p>La vente d'une immobilisation est une opération <b>hors activités ordinaires</b> (HAO) :</p>
${E("Vente du serveur le 31/12/N+2 pour 3 000 000 (TVA ignorée pour simplifier)",[["485","Créances sur cessions d'immobilisations","3 000 000",""],["822","Produits des cessions d'immobilisations corporelles","","3 000 000"]])}
${E("Sortie du bien de l'actif (après la dotation de l'année)",[["2844","Amortissements","3 465 000",""],["812","Valeurs comptables des cessions d'immobilisations corporelles","2 835 000",""],["244","Matériel informatique","","6 300 000"]])}
<p>Plus-value = prix de cession − VNC = 3 000 000 − 2 835 000 = <b>165 000</b>.</p>
<h2>6. Ce que vérifie l'auditeur</h2>
<ul><li><b>Existence</b> : inspection physique d'un échantillon, rapprochement avec le fichier des immobilisations.</li><li><b>Droits</b> : factures, titres de propriété, cartes grises.</li><li><b>Évaluation</b> : recalcul des amortissements, durées cohérentes, indices de dépréciation.</li><li><b>Classement</b> : des charges passées en immobilisations gonflent le résultat ; des immobilisations passées en charges le réduisent.</li><li>En audit IT : contrôle des paramètres d'amortissement dans le logiciel (durées, méthodes) et de qui peut les modifier.</li></ul>
${X("véhicule de 12 000 000 mis en service le 1er juillet N, amorti en linéaire sur 4 ans. Dotation N et VNC au 31/12/N+1 ?","<p>Annuité = 3 000 000. N : 3 000 000 × 6/12 = 1 500 000. N+1 : 3 000 000. Cumul = 4 500 000. VNC = 12 000 000 − 4 500 000 = <b>7 500 000</b>.</p>")}
`},

{ id:"m10", day:"Opérations courantes", title:"Les stocks", html:`
<p class="lead">Les stocks ont un double effet : ils sont à l'actif du bilan et ils font varier le résultat. Une erreur de stock de 10 millions, c'est une erreur de résultat de 10 millions.</p>
<h2>1. Les types de stocks</h2>
${T(["Compte","Stock","Exemple"],[
["31","Marchandises","Revendues en l'état : riz dans une boutique, téléphones chez un distributeur"],
["32","Matières premières et fournitures liées","Utilisées pour fabriquer : farine dans une boulangerie"],
["33","Autres approvisionnements","Pièces de rechange, emballages"],
["34 / 35","Produits et services en cours","Fabrication commencée mais non terminée"],
["36","Produits finis","Pain sorti du four, prêt à être vendu"]])}
<h2>2. L'inventaire intermittent (le plus courant dans le SYSCOHADA)</h2>
<p>Pendant l'année, les achats sont enregistrés en charges (601, 602). Le stock n'est mis à jour qu'à la clôture, après un <b>inventaire physique</b> (comptage). On annule le stock initial et on constate le stock final par le compte de variation de stocks.</p>
<p>Exemple : stock initial 2 000 000 ; achats de l'année 10 000 000 ; stock final compté 3 500 000.</p>
${E("1) Annulation du stock initial",[["6031","Variation des stocks de marchandises","2 000 000",""],["31","Marchandises","","2 000 000"]])}
${E("2) Constatation du stock final",[["31","Marchandises","3 500 000",""],["6031","Variation des stocks de marchandises","","3 500 000"]])}
<p>Le compte 6031 a un solde créditeur de 1 500 000, qui vient en diminution des achats. <b>Coût d'achat des marchandises vendues</b> = 10 000 000 + 2 000 000 − 3 500 000 = 8 500 000.</p>
<div class="box key"><h4>Pourquoi le stock influence le résultat</h4><p>Si le stock final est surévalué de 1 000 000, le coût des ventes est sous-évalué de 1 000 000 et le résultat est <b>surévalué</b> d'autant. Gonfler les stocks est donc une manipulation classique.</p></div>
<h2>3. L'inventaire permanent</h2>
<p>Le stock est mis à jour à chaque entrée et sortie, en général par le logiciel (ERP). On connaît à tout moment le stock théorique. L'inventaire physique reste obligatoire au moins une fois par an pour corriger les écarts (vols, casse, erreurs).</p>
<h2>4. Valoriser les sorties</h2>
<p>Situation : stock de 100 unités à 1 000 ; entrée de 200 unités à 1 300 ; sortie de 150 unités.</p>
${T(["Méthode","Calcul","Valeur de la sortie"],[
["Coût moyen unitaire pondéré (CMUP)","(100 000 + 260 000) ÷ 300 = 1 200 par unité","150 × 1 200 = 180 000"],
["Premier entré, premier sorti (PEPS ou FIFO)","100 unités à 1 000 puis 50 à 1 300","100 000 + 65 000 = 165 000"]])}
<p>Le SYSCOHADA révisé admet le CMUP et le PEPS. La méthode « dernier entré, premier sorti » (DEPS/LIFO) n'est pas admise. La méthode choisie doit être appliquée de façon permanente.</p>
<h2>5. Évaluation à la clôture</h2>
<p>Les stocks sont évalués au plus bas du <b>coût</b> et de la <b>valeur nette de réalisation</b> (prix de vente probable moins frais pour vendre). Si des marchandises sont abîmées, périmées ou démodées, on constate une dépréciation (compte 39, contrepartie 659).</p>
<h2>6. L'auditeur et les stocks</h2>
<ul><li>Il <b>assiste à l'inventaire physique</b> : il observe les procédures et fait des comptages par sondage, dans les deux sens (de la liste vers le rayon, et du rayon vers la liste).</li><li>Il vérifie la <b>séparation des exercices</b> : les dernières entrées et sorties avant et après le 31/12.</li><li>Il teste la <b>valorisation</b> : prix d'achat sur factures, calcul du CMUP, stocks à rotation lente.</li><li>En audit IT : qui peut ajuster les quantités dans le système, et ces ajustements sont-ils approuvés ?</li></ul>
${X("stock initial 500 000, achats 4 000 000, stock final 800 000, ventes 5 000 000. Calculer le coût d'achat des marchandises vendues et la marge commerciale.","<p>Coût = 4 000 000 + 500 000 − 800 000 = 3 700 000. Marge commerciale = 5 000 000 − 3 700 000 = <b>1 300 000</b>.</p>")}
`},

{ id:"m11", day:"Clôture", title:"Les travaux de fin d'exercice", html:`
<p class="lead">À la clôture, on ajuste les comptes pour que chaque exercice porte exactement ses charges et ses produits, et pour que les actifs ne soient pas surévalués. C'est là que se concentrent les jugements, donc les risques d'erreur et de manipulation.</p>
<h2>1. La liste des travaux d'inventaire</h2>
<ol><li>Amortissements des immobilisations (module 9).</li><li>Inventaire et variation des stocks (module 10).</li><li>Dépréciation des créances douteuses.</li><li>Provisions pour risques et charges.</li><li>Régularisation des charges et des produits (charges à payer, produits à recevoir, charges et produits constatés d'avance).</li><li>Rapprochements bancaires et inventaire de caisse (module 7).</li><li>Calcul de l'impôt sur le résultat.</li></ol>
<h2>2. Les créances douteuses</h2>
<p>Un client en difficulté risque de ne pas payer. Prudence : on isole sa créance et on la déprécie, sur la base <b>hors taxes</b> (la TVA pourra être récupérée si la perte devient définitive).</p>
${E("1) Reclassement du client douteux (créance 1 180 000 TTC)",[["416","Créances clients litigieuses ou douteuses","1 180 000",""],["411","Clients","","1 180 000"]])}
${E("2) Dépréciation de 50 % du HT (1 000 000 × 50 %)",[["659","Charges pour dépréciations et provisions à court terme d'exploitation","500 000",""],["491","Dépréciations des comptes clients","","500 000"]])}
<p>Si le client paie finalement, on reprend la dépréciation (crédit d'un compte de reprise en classe 7). Si la perte devient définitive, on passe la créance en perte (compte 651) et on reprend la dépréciation.</p>
<h2>3. Les provisions pour risques et charges</h2>
<p>Une provision constate une <b>obligation probable</b> envers un tiers, dont le montant ou l'échéance est incertain : procès en cours, garanties données aux clients, restructuration annoncée. Si l'obligation est seulement possible, on ne provisionne pas mais on la mentionne dans les notes annexes (passif éventuel).</p>
${E("Litige avec un ancien salarié : condamnation probable estimée à 2 000 000",[["691","Dotations aux provisions d'exploitation","2 000 000",""],["19","Provisions pour risques et charges","","2 000 000"]])}
<h2>4. Charges et produits : rattacher chaque montant au bon exercice</h2>
${T(["Situation","Exemple","Compte au bilan"],[
["<b>Charge à payer</b> : consommée en N, facture reçue en N+1","Électricité de décembre","408 Fournisseurs, factures non parvenues"],
["<b>Produit à recevoir</b> : vendu en N, facturé en N+1","Livraison du 30/12 non facturée","418 Clients, produits à recevoir"],
["<b>Charge constatée d'avance</b> : payée en N, concerne N+1","Loyer de janvier payé en décembre","476 Charges constatées d'avance"],
["<b>Produit constaté d'avance</b> : facturé en N, concerne N+1","Abonnement annuel facturé en octobre","477 Produits constatés d'avance"]])}
${E("Charge à payer : électricité de décembre estimée à 150 000 HT (TVA ignorée pour simplifier)",[["605","Autres achats (électricité)","150 000",""],["408","Fournisseurs, factures non parvenues","","150 000"]])}
${E("Charge constatée d'avance : loyer de 600 000 payé le 1er novembre pour 6 mois (4 mois concernent N+1)",[["476","Charges constatées d'avance","400 000",""],["622","Locations","","400 000"]])}
<p>Au 1<sup>er</sup> janvier N+1, ces écritures sont <b>contre-passées</b> (inversées) pour que la charge tombe dans le bon exercice.</p>
<div class="box key"><h4>Le test de séparation des exercices (cut-off)</h4><p>C'est l'un des tests d'audit les plus fréquents : on examine les factures et livraisons de la dernière quinzaine de décembre et de la première quinzaine de janvier, et on vérifie qu'elles sont dans le bon exercice. Les télécoms, les assurances et les banques ont de très gros enjeux de cut-off (abonnements, primes, intérêts courus).</p></div>
<h2>5. L'impôt sur le résultat</h2>
<p>On part du résultat comptable, on ajoute les charges non déductibles fiscalement (amendes, certaines provisions) et on retire les produits non imposables : on obtient le <b>résultat fiscal</b>. On y applique le taux de l'impôt sur les sociétés (au Sénégal, 30 % à la date de rédaction, avec un minimum d'imposition). Écriture : débit 891 « Impôts sur les bénéfices », crédit 441 « État, impôt sur les bénéfices ».</p>
${X("une prime d'assurance annuelle de 1 200 000 est payée le 1er octobre N pour 12 mois. Quelle régularisation au 31/12/N ?","<p>9 mois concernent N+1 : 1 200 000 × 9/12 = 900 000.</p>" + E("",[["476","Charges constatées d'avance","900 000",""],["625","Primes d'assurance","","900 000"]]))}
${X("un client doit 2 360 000 TTC (TVA 18 %). Il est en redressement judiciaire ; on estime la perte à 70 %. Écritures ?","<p>HT = 2 360 000 ÷ 1,18 = 2 000 000. Dépréciation = 1 400 000.</p>" + E("",[["416","Clients douteux","2 360 000",""],["411","Clients","","2 360 000"],["659","Dotations dépréciations","1 400 000",""],["491","Dépréciation clients","","1 400 000"]]))}
`},

{ id:"m12", day:"Clôture", title:"Les états financiers SYSCOHADA et les soldes intermédiaires", html:`
<p class="lead">Une fois la balance définitive arrêtée, on construit les états financiers. Savoir les lire, c'est savoir où regarder en premier quand on ouvre un dossier d'audit.</p>
<h2>1. Les états du système normal</h2>
<ul><li><b>Bilan</b> : actif et passif à la clôture, avec l'exercice précédent en comparaison.</li><li><b>Compte de résultat</b> : présenté en liste, avec des soldes successifs.</li><li><b>Tableau des flux de trésorerie</b> : comment la trésorerie a varié.</li><li><b>Notes annexes</b> : méthodes comptables, détail des postes, engagements, événements postérieurs à la clôture. Le SYSCOHADA révisé en prévoit un grand nombre.</li></ul>
<h2>2. Les soldes du compte de résultat</h2>
<p>Le compte de résultat SYSCOHADA calcule une cascade de soldes, chacun identifié par un code :</p>
${T(["Code","Solde","Calcul simplifié","Ce qu'il mesure"],[
["XA","Marge commerciale","Ventes de marchandises − (achats de marchandises ± variation de stocks)","Ce que rapporte le négoce"],
["XB","Chiffre d'affaires","Ventes de marchandises + produits fabriqués + travaux et services vendus + produits accessoires","Le volume d'activité"],
["XC","Valeur ajoutée","Production et marge − consommations externes (achats, transports, services extérieurs, impôts et taxes, autres charges)","La richesse créée par l'entreprise"],
["XD","Excédent brut d'exploitation (EBE)","Valeur ajoutée − charges de personnel","La performance du métier, avant amortissements et finance"],
["XE","Résultat d'exploitation","EBE + reprises − dotations aux amortissements, provisions et dépréciations","Le résultat de l'activité"],
["XF","Résultat financier","Revenus financiers − frais financiers","Le coût de l'endettement et les placements"],
["XG","Résultat des activités ordinaires (RAO)","XE + XF",""],
["XH","Résultat hors activités ordinaires (HAO)","Produits HAO − charges HAO","Événements non courants : cessions…"],
["XI","Résultat net","XG + XH − participation des travailleurs − impôt sur le résultat","Ce qui revient aux associés"]])}
<h2>3. Exemple chiffré</h2>
${T(["Élément","Montant"],[
["Ventes de marchandises","50 000 000"],["Achats de marchandises et variation de stocks","− 32 000 000"],["<b>Marge commerciale (XA)</b>","<b>18 000 000</b>"],
["Transports, services extérieurs, impôts et taxes","− 5 000 000"],["<b>Valeur ajoutée (XC)</b>","<b>13 000 000</b>"],
["Charges de personnel","− 6 000 000"],["<b>EBE (XD)</b>","<b>7 000 000</b>"],
["Dotations aux amortissements et provisions","− 2 500 000"],["<b>Résultat d'exploitation (XE)</b>","<b>4 500 000</b>"],
["Frais financiers","− 500 000"],["<b>RAO (XG)</b>","<b>4 000 000</b>"],
["Plus-value de cession (HAO)","+ 200 000"],["Impôt sur le résultat (30 %)","− 1 260 000"],["<b>Résultat net (XI)</b>","<b>2 940 000</b>"]])}
<h2>4. Le tableau des flux de trésorerie</h2>
${T(["Flux","Contenu"],[
["Activités opérationnelles","Capacité d'autofinancement globale (CAFG) corrigée de la variation du besoin de financement (stocks, clients, fournisseurs)"],
["Activités d'investissement","Acquisitions et cessions d'immobilisations"],
["Activités de financement","Apports en capital, emprunts reçus et remboursés, dividendes versés"]])}
<p>Trésorerie d'ouverture + somme des trois flux = trésorerie de clôture. Une entreprise dont les flux opérationnels sont négatifs plusieurs années de suite, malgré des bénéfices, mérite une attention particulière (ventes non encaissées, voire fictives).</p>
<h2>5. L'affectation du résultat</h2>
<p>L'assemblée générale décide quoi faire du bénéfice : réserve légale (dans les sociétés anonymes, au moins 10 % du bénéfice jusqu'à ce qu'elle atteigne 20 % du capital), autres réserves, dividendes, report à nouveau.</p>
${E("Affectation d'un bénéfice de 2 940 000",[["131","Résultat net : bénéfice","2 940 000",""],["111","Réserve légale","","294 000"],["465","Associés, dividendes à payer","","2 000 000"],["121","Report à nouveau créditeur","","646 000"]])}
${X("à partir de : chiffre d'affaires (services) 30 M ; consommations externes 12 M ; personnel 10 M ; dotations 3 M ; intérêts 1 M. Calculer VA, EBE, résultat d'exploitation et RAO.","<p>VA = 30 − 12 = 18 M. EBE = 18 − 10 = 8 M. Résultat d'exploitation = 8 − 3 = 5 M. RAO = 5 − 1 = <b>4 M</b>.</p>")}
`},

{ id:"m13", day:"Audit", title:"La comptabilité vue par l'auditeur : cycles, assertions, fraude", html:`
<p class="lead">Ce dernier module relie tout ce que tu as appris à ton métier. Un auditeur ne refait pas la comptabilité : il cherche où elle peut être fausse, et il le vérifie.</p>
<h2>1. Les assertions</h2>
<p>Quand la direction présente des comptes, elle affirme implicitement plusieurs choses. L'auditeur teste chacune de ces affirmations :</p>
${T(["Assertion","Question","Exemple de test"],[
["Existence / réalité","Ce qui est enregistré existe-t-il ?","Confirmation des clients, inspection des immobilisations"],
["Exhaustivité","Tout est-il enregistré ?","Recherche de dettes non comptabilisées (factures reçues en janvier)"],
["Exactitude","Les montants sont-ils justes ?","Recalcul de factures, de la paie, des amortissements"],
["Séparation des exercices","Le bon exercice ?","Test de cut-off"],
["Évaluation","La valeur est-elle correcte ?","Dépréciation des stocks et des créances"],
["Droits et obligations","L'entreprise est-elle propriétaire, est-ce bien sa dette ?","Titres de propriété, contrats d'emprunt"],
["Présentation et information","Est-ce bien classé et expliqué ?","Revue des notes annexes"]])}
<h2>2. Les cycles</h2>
${T(["Cycle","Comptes concernés","Points clés"],[
["Ventes / clients","70, 411, 416, 491, 443","Réalité du CA, cut-off, recouvrement"],
["Achats / fournisseurs","60, 61, 62, 401, 408, 445","Exhaustivité des dettes, fournisseurs fictifs"],
["Stocks","31 à 39, 603","Inventaire, valorisation, obsolescence"],
["Immobilisations","20 à 29, 68, 81, 82","Existence, capitalisation, amortissements"],
["Paie / personnel","66, 42, 43, 447","Salariés fictifs, accès au module de paie"],
["Trésorerie","52, 57, 58","Rapprochements, confirmations bancaires, caisse"],
["Capitaux propres et financement","10 à 19, 16","Décisions d'AG, contrats d'emprunt, covenants"],
["Impôts et taxes","44, 64, 89","TVA, IS, risques fiscaux"]])}
<h2>3. Contrôles internes et contrôles informatiques</h2>
<p>Dans chaque cycle, on distingue :</p>
<ul><li>les <b>contrôles manuels</b> : validation d'une facture par un responsable, revue d'un rapprochement ;</li><li>les <b>contrôles applicatifs automatisés</b> (ITAC) : rapprochement automatique commande / réception / facture (« three-way match »), blocage d'un paiement en double, calcul automatique de la TVA ;</li><li>les <b>contrôles généraux informatiques</b> (ITGC) : gestion des accès, gestion des changements, exploitation. Si les ITGC sont faibles, on ne peut pas faire confiance aux ITAC.</li></ul>
<h2>4. Les signaux de fraude comptable</h2>
${T(["Signal","Fraude possible"],[
["Écritures manuelles passées après la clôture, le week-end, par un dirigeant","Contournement des contrôles par la direction"],
["Forte hausse des ventes en décembre, avoirs en janvier","Ventes fictives ou anticipées"],
["Fournisseur sans adresse, avec le même compte bancaire qu'un salarié","Fournisseur fictif"],
["Stock qui augmente plus vite que les ventes","Stocks surévalués ou obsolètes"],
["Comptes d'attente (47) avec des soldes anciens et importants","Opérations non justifiées"],
["Bénéfice en hausse mais flux opérationnels négatifs","Résultat embelli"],
["Écarts de rapprochement « divers » récurrents","Détournement de fonds"]])}
<h2>5. Analyse de données sur les écritures</h2>
<p>Avec un outil comme ACL, IDEA, Excel ou Python, l'auditeur peut analyser 100 % des écritures : vérifier l'équilibre de chaque pièce, rechercher les doublons, les trous de numérotation, les montants ronds, les écritures hors heures ouvrées, les comptes inhabituellement mouvementés, ou appliquer la loi de Benford sur les premiers chiffres des montants.</p>
<div class="box key"><h4>Ton avantage</h4><p>Un auditeur IT qui comprend la comptabilité sait <b>pourquoi</b> un contrôle informatique compte : un accès trop large au module fournisseurs n'est pas qu'un écart technique, c'est un risque de paiement frauduleux qui touche directement les comptes 401 et 521.</p></div>
${X("tu constates que le comptable fournisseurs peut à la fois créer un fournisseur, saisir une facture et valider le virement. Quel risque, quelle assertion, quelle recommandation ?","<p><b>Risque</b> : création d'un fournisseur fictif et paiement de fausses factures (détournement). <b>Assertion</b> : réalité/existence des charges et des dettes. <b>Recommandation</b> : séparer les tâches (création du fichier fournisseurs par une autre personne, validation des paiements par un responsable), revoir les droits dans le logiciel, et faire une revue périodique des nouveaux fournisseurs et des changements de coordonnées bancaires.</p>")}
`}
);

c.pages = [
{ id:"lexique", title:"Lexique de la comptabilité (A à Z)", html:`
<p class="lead">Les termes que tu entendras chez tous tes clients. Utilise la recherche de ton navigateur (Ctrl+F) pour retrouver un mot.</p>
${T(["Terme","Définition"],[
["Actif","Ensemble des biens et droits contrôlés par l'entreprise et qui lui procureront des avantages futurs"],
["Actif circulant","Éléments liés au cycle d'exploitation : stocks, créances"],
["Actif immobilisé","Biens destinés à rester durablement : terrains, bâtiments, matériel, logiciels, titres de participation"],
["Amortissement","Constatation de l'usure d'une immobilisation, répartie sur sa durée d'utilisation"],
["Annexe (notes annexes)","Document qui explique et complète le bilan et le compte de résultat"],
["Avoir","Facture négative qui annule ou réduit une facture précédente"],
["Balance","Tableau de tous les comptes avec leurs totaux et soldes"],
["Balance âgée","Liste des créances clients (ou des dettes fournisseurs) classées par ancienneté"],
["Besoin en fonds de roulement (BFR)","Argent immobilisé dans le cycle d'exploitation : stocks + créances − dettes fournisseurs"],
["Bilan","Situation du patrimoine à une date : actif d'un côté, capitaux propres et dettes de l'autre"],
["Capacité d'autofinancement (CAF)","Ressources générées par l'activité, disponibles pour investir, rembourser ou distribuer"],
["Capitaux propres","Ressources appartenant aux associés : capital, réserves, résultat"],
["Charge","Consommation qui appauvrit l'entreprise sur l'exercice"],
["Charge à payer","Charge de l'exercice dont la facture n'est pas encore reçue"],
["Charge constatée d'avance","Charge payée dans l'exercice mais qui concerne l'exercice suivant"],
["Chiffre d'affaires","Montant des ventes de biens et de services de l'activité ordinaire"],
["Circularisation","Demande de confirmation écrite envoyée par l'auditeur à un tiers (banque, client, fournisseur, avocat)"],
["Clôture","Fin de l'exercice comptable, en général le 31 décembre"],
["CMUP","Coût moyen unitaire pondéré : méthode de valorisation des stocks"],
["Commissaire aux comptes","Auditeur légal qui certifie les comptes d'une société"],
["Compte collectif / auxiliaire","Compte général qui regroupe tous les clients (411) / sous-compte individuel de chaque client"],
["Contre-passation","Écriture inverse qui annule une écriture précédente"],
["Créance","Somme due à l'entreprise par un tiers"],
["Crédit","Colonne de droite d'un compte"],
["Crédit de TVA","TVA récupérable supérieure à la TVA facturée"],
["Cut-off","Séparation des exercices : rattacher chaque opération à la bonne période"],
["Débit","Colonne de gauche d'un compte"],
["Dépréciation","Perte de valeur d'un actif, probable mais non définitive"],
["Dividende","Part du bénéfice distribuée aux associés"],
["Dotation","Charge constatée pour un amortissement, une dépréciation ou une provision"],
["EBE","Excédent brut d'exploitation : performance économique avant amortissements, finance et impôts"],
["Écriture","Enregistrement d'une opération au journal, avec débit et crédit égaux"],
["Exercice","Période comptable de 12 mois"],
["Fonds de roulement","Ressources stables − actif immobilisé"],
["Grand livre","Ensemble des comptes avec le détail de tous leurs mouvements"],
["HAO","Hors activités ordinaires : opérations non courantes (cessions, sinistres exceptionnels)"],
["HT / TTC","Hors taxes / toutes taxes comprises"],
["IFRS","Normes comptables internationales"],
["Image fidèle","Objectif des comptes : refléter la réalité du patrimoine, de la situation financière et du résultat"],
["Immobilisation","Bien durable utilisé par l'entreprise pendant plus d'un exercice"],
["Inventaire","Comptage physique des biens (stocks, caisse, immobilisations) et ensemble des travaux de clôture"],
["Journal","Registre chronologique des écritures"],
["Lettrage","Rapprochement d'une facture et de son paiement dans un compte de tiers"],
["Marge commerciale","Ventes de marchandises − coût d'achat des marchandises vendues"],
["OD","Opérations diverses : journal des écritures qui ne sont ni achats, ni ventes, ni trésorerie"],
["OHADA","Organisation pour l'harmonisation en Afrique du droit des affaires"],
["Partie double","Principe selon lequel chaque opération touche au moins deux comptes, débit = crédit"],
["Passif","Ressources de l'entreprise : capitaux propres et dettes"],
["PEPS (FIFO)","Premier entré, premier sorti : méthode de valorisation des stocks"],
["Pièce justificative","Document qui prouve une opération : facture, relevé, contrat"],
["Plus-value / moins-value","Différence positive / négative entre prix de cession et valeur nette comptable"],
["Produit","Ressource qui enrichit l'entreprise sur l'exercice"],
["Produit constaté d'avance","Produit facturé dans l'exercice mais qui concerne l'exercice suivant"],
["Provision","Passif dont l'échéance ou le montant est incertain (litige, garantie)"],
["Rapprochement bancaire","Comparaison du compte banque de l'entreprise avec le relevé bancaire"],
["Report à nouveau","Bénéfices non distribués ou pertes non apurées des exercices précédents"],
["Réserve légale","Partie du bénéfice que la loi impose de conserver"],
["Résultat","Produits − charges : bénéfice ou perte"],
["Solde","Différence entre le total du débit et le total du crédit d'un compte"],
["SYSCOHADA","Système comptable OHADA : plan de comptes et règles de présentation"],
["Tableau des flux de trésorerie","État qui explique la variation de la trésorerie"],
["Trésorerie nette","Trésorerie-actif − trésorerie-passif"],
["TVA","Taxe sur la valeur ajoutée, payée par le consommateur final et collectée par les entreprises"],
["Valeur ajoutée","Richesse créée par l'entreprise : production − consommations venant des tiers"],
["Valeur nette comptable (VNC)","Coût d'un bien − amortissements et dépréciations cumulés"],
["Variation de stocks","Stock initial − stock final : ajuste les achats pour obtenir le coût des ventes"]])}
`},
{ id:"certifications", title:"Certifications comptables reconnues", html:`
<p class="lead">Voici les certifications comptables et financières les plus reconnues dans le monde, et celles qui ont le plus de sens pour un auditeur IT. Les conditions (examens, frais, expérience exigée) évoluent : vérifie toujours sur le site de l'organisme avant de t'inscrire.</p>
${T(["Certification","Organisme","Pour qui ?","Contenu en bref"],[
["<b>ACCA</b>","Association of Chartered Certified Accountants (Royaume-Uni)","Comptables et auditeurs qui veulent un titre international, très reconnu en Afrique","Jusqu'à 13 examens (connaissances de base, compétences appliquées, niveau stratégique) + module d'éthique + expérience professionnelle. Normes IFRS et ISA"],
["<b>ACCA DipIFR</b>","ACCA","Professionnels qui veulent maîtriser les normes IFRS sans faire tout l'ACCA","Un seul examen sur les IFRS"],
["<b>CPA (États-Unis)</b>","AICPA et NASBA, licence délivrée par chaque État américain","Carrière en audit et comptabilité aux normes américaines","Trois examens communs (audit, comptabilité financière, fiscalité et droit) + une discipline au choix, dont <b>ISC (Information Systems and Controls)</b>, très proche de l'audit IT. Conditions de diplôme exigeantes"],
["<b>CIA</b>","Institute of Internal Auditors (IIA)","Auditeurs internes","Trois parties : fondamentaux de l'audit interne, pratique de l'audit interne, connaissances de l'activité. Très utile en complément du CISA"],
["<b>CMA</b>","Institute of Management Accountants (IMA, États-Unis)","Contrôle de gestion, finance d'entreprise","Deux parties : planification, performance et contrôle ; décisions financières stratégiques"],
["<b>CFA</b>","CFA Institute","Analyse financière, gestion de portefeuille, banque d'investissement","Trois niveaux successifs, très exigeants"],
["<b>DCG, DSCG puis DEC</b>","Diplômes d'État français","Parcours vers l'expertise comptable en France","Licence (DCG), master (DSCG), puis stage de trois ans et diplôme d'expertise comptable (DEC)"],
["<b>Expertise comptable dans l'espace UEMOA / OHADA</b>","Ordres nationaux (au Sénégal : ONECCA) et dispositifs régionaux","Exercer comme expert-comptable ou commissaire aux comptes inscrit au Sénégal","Diplôme d'expertise comptable reconnu + stage + inscription au tableau de l'Ordre. Renseigne-toi auprès de l'ONECCA sur les diplômes admis et les conditions actuelles"]])}
<h2>Que choisir quand on est auditeur IT ?</h2>
<ol>
<li><b>Court terme</b> : continuer sur la lancée IT (ISO 27001, CISA). Le CISA reste la certification de référence de ton métier.</li>
<li><b>Pour renforcer le volet comptable</b> : l'<b>ACCA DipIFR</b> (un seul examen) ou les premiers examens de l'ACCA te donnent une base comptable internationale reconnue par les cabinets.</li>
<li><b>Pour évoluer vers l'audit interne ou la gestion des risques</b> : le <b>CIA</b> combiné au CISA est un profil très recherché dans les banques et les grands groupes.</li>
<li><b>Pour une carrière internationale en cabinet</b> : l'<b>ACCA</b> complet, ou le <b>CPA</b> avec la discipline ISC si tu vises les États-Unis.</li>
</ol>
<div class="box tip"><h4>Proposition</h4><p>Dis-moi laquelle t'intéresse : je peux préparer un parcours de cours et de QCM dédié, comme pour les certifications cyber.</p></div>
`}
];
})();
