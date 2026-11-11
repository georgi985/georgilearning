/* Finance d'entreprise et analyse financière : cours original pour débutants. */
(function(){
const {T, E, X} = window.__GL;

const modules = [
{ id:"f1", day:"Analyser", title:"Lire un bilan en finance : fonds de roulement, BFR, trésorerie", html:`
<p class="lead">Le comptable demande « les comptes sont-ils justes ? ». Le financier demande « l'entreprise peut-elle payer ses dettes et financer sa croissance ? ». On utilise les mêmes chiffres, avec un autre regard.</p>
<h2>1. Le bilan fonctionnel</h2>
<p>On regroupe le bilan en grandes masses selon leur fonction :</p>
${T(["Emplois","Ressources"],[
["Actif immobilisé (emplois stables)","Ressources stables : capitaux propres + dettes financières à long terme + amortissements et provisions"],
["Actif circulant d'exploitation : stocks, clients","Passif circulant d'exploitation : fournisseurs, dettes fiscales et sociales"],
["Trésorerie-actif : banque, caisse","Trésorerie-passif : découverts, crédits de trésorerie"]])}
<h2>2. Les trois grandeurs clés</h2>
${T(["Grandeur","Calcul","Sens"],[
["Fonds de roulement (FR)","Ressources stables − actif immobilisé","Ce qui reste des ressources durables après avoir financé les investissements"],
["Besoin de financement de l'activité (BFR)","Stocks + créances d'exploitation − dettes d'exploitation","L'argent bloqué dans le cycle d'exploitation : on paie les fournisseurs avant d'encaisser les clients"],
["Trésorerie nette (TN)","FR − BFR = trésorerie-actif − trésorerie-passif","Ce qui reste disponible"]])}
<div class="box key"><h4>L'équation à retenir</h4><p><b>Trésorerie nette = Fonds de roulement − BFR</b>. Si le BFR grandit plus vite que le fonds de roulement (par exemple parce que les clients paient de plus en plus tard), la trésorerie se dégrade, même si l'entreprise est bénéficiaire.</p></div>
${X("ressources stables 500 M ; actif immobilisé 380 M ; stocks 90 M ; clients 150 M ; fournisseurs et dettes d'exploitation 110 M. Calcule FR, BFR et TN.","<p>FR = 500 − 380 = <b>120 M</b>. BFR = 90 + 150 − 110 = <b>130 M</b>. TN = 120 − 130 = <b>−10 M</b> : l'entreprise vit sur ses découverts. Il faut soit augmenter les ressources stables, soit réduire le BFR (encaisser plus vite, réduire les stocks).</p>")}
<h2>3. Les délais de rotation</h2>
${T(["Ratio","Calcul","Exemple de lecture"],[
["Délai clients","Créances clients TTC ÷ chiffre d'affaires TTC × 360","75 jours : les clients paient en moyenne à 75 jours"],
["Délai fournisseurs","Dettes fournisseurs TTC ÷ achats TTC × 360","60 jours"],
["Rotation des stocks","Stock moyen ÷ coût des ventes × 360","45 jours de stock"]])}
<p>Pour l'auditeur, une hausse brutale du délai clients peut signaler des difficultés de recouvrement, voire des ventes fictives.</p>
`},

{ id:"f2", day:"Analyser", title:"Rentabilité, CAF et ratios", html:`
<p class="lead">Une entreprise doit être rentable, solvable et liquide. Les ratios permettent de le mesurer et de se comparer.</p>
<h2>1. La capacité d'autofinancement (CAF)</h2>
<p>La CAF est l'argent généré par l'activité, avant les décisions d'investissement et de financement. Méthode simple : <b>CAF = résultat net + dotations aux amortissements et provisions − reprises − plus-values de cession + moins-values</b>. Elle sert à rembourser les emprunts, investir et verser des dividendes.</p>
${X("résultat net 40 M ; dotations 25 M ; reprises 5 M ; plus-value de cession 3 M. CAF ?","<p>CAF = 40 + 25 − 5 − 3 = <b>57 M</b>.</p>")}
<h2>2. Les principaux ratios</h2>
${T(["Famille","Ratio","Calcul","Repère"],[
["Rentabilité","Marge nette","Résultat net ÷ chiffre d'affaires","Dépend du secteur"],
["Rentabilité","Rentabilité des capitaux propres (ROE)","Résultat net ÷ capitaux propres","Ce que gagnent les actionnaires"],
["Rentabilité","Rentabilité économique (ROA)","Résultat d'exploitation ÷ actif économique","Performance des actifs"],
["Endettement","Gearing","Dettes financières nettes ÷ capitaux propres","Au-delà de 1, endettement élevé"],
["Remboursement","Capacité de remboursement","Dettes financières ÷ CAF","En années ; souvent moins de 3 à 4 ans"],
["Liquidité","Liquidité générale","Actif circulant ÷ passif circulant","Supérieure à 1 souhaitée"],
["Solvabilité","Autonomie financière","Capitaux propres ÷ total du bilan","Plus elle est élevée, plus l'entreprise est solide"]])}
<h2>3. L'effet de levier</h2>
<p>S'endetter peut augmenter la rentabilité des actionnaires : si l'entreprise gagne 12 % sur ses actifs et emprunte à 7 %, chaque franc emprunté rapporte 5 % de plus aux actionnaires. Mais si la rentabilité économique tombe sous le taux d'intérêt, l'effet s'inverse et la dette détruit de la valeur : c'est l'<b>effet de massue</b>.</p>
<h2>4. Le seuil de rentabilité</h2>
<p>On sépare les charges <b>variables</b> (qui suivent l'activité : achats, commissions) des charges <b>fixes</b> (loyers, salaires de structure). La <b>marge sur coûts variables</b> = chiffre d'affaires − charges variables. <b>Seuil de rentabilité = charges fixes ÷ taux de marge sur coûts variables</b>.</p>
${X("chiffre d'affaires 200 M ; charges variables 120 M ; charges fixes 60 M. Seuil de rentabilité ?","<p>Marge sur coûts variables = 80 M, soit un taux de 40 %. Seuil = 60 ÷ 0,40 = <b>150 M</b>. Au-delà de 150 M de chiffre d'affaires, l'entreprise est bénéficiaire.</p>")}
`},

{ id:"f3", day:"Décider", title:"Choisir un investissement : VAN, TRI, délai de récupération", html:`
<p class="lead">Un franc aujourd'hui vaut plus qu'un franc dans cinq ans, parce qu'on peut le placer. Pour comparer des flux à des dates différentes, on les actualise.</p>
<h2>1. L'actualisation</h2>
<p>Valeur actuelle d'un flux F reçu dans n années au taux t : <b>F ÷ (1 + t)<sup>n</sup></b>. Exemple : 1 100 dans un an au taux de 10 % vaut 1 000 aujourd'hui.</p>
<h2>2. La valeur actuelle nette (VAN)</h2>
<p>VAN = somme des flux futurs actualisés − investissement initial. Si la VAN est <b>positive</b>, le projet crée de la valeur au taux exigé.</p>
${X("investissement de 100 M ; flux attendus de 40 M par an pendant 3 ans ; taux d'actualisation 10 %. VAN ?","<p>Flux actualisés : 40 ÷ 1,1 = 36,4 ; 40 ÷ 1,21 = 33,1 ; 40 ÷ 1,331 = 30,1. Total ≈ 99,5 M. VAN ≈ 99,5 − 100 = <b>−0,5 M</b> : le projet ne rapporte pas tout à fait les 10 % exigés. Il est à la limite.</p>")}
<h2>3. Les autres critères</h2>
${T(["Critère","Définition","Limite"],[
["Taux de rentabilité interne (TRI)","Le taux pour lequel la VAN est nulle ; on le compare au coût du capital","Peut induire en erreur pour des projets de tailles très différentes"],
["Délai de récupération","Temps nécessaire pour récupérer l'investissement","Ignore les flux après la récupération et, dans sa version simple, l'actualisation"],
["Indice de profitabilité","Flux actualisés ÷ investissement","Utile pour classer des projets quand le budget est limité"]])}
<h2>4. Le coût du capital</h2>
<p>Le taux d'actualisation reflète ce que coûtent les ressources : le coût de la dette (après impôt) et le rendement attendu par les actionnaires, pondérés par leur poids (<b>coût moyen pondéré du capital</b>, CMPC ou WACC). Plus le projet est risqué, plus le taux exigé est élevé.</p>
<div class="box key"><h4>Lien avec l'audit IT</h4><p>Un projet informatique (nouvel ERP, nouveau core banking) se justifie aussi par un business case avec VAN ou délai de récupération. L'auditeur vérifie que les hypothèses sont réalistes et que les bénéfices sont suivis après la mise en service.</p></div>
`},

{ id:"f4", day:"Décider", title:"Financer l'entreprise : capital, emprunt, crédit-bail", html:`
<p class="lead">Pour financer ses investissements et son activité, une entreprise combine ressources propres et ressources empruntées.</p>
<h2>1. Les sources de financement</h2>
${T(["Source","Avantages","Inconvénients"],[
["Autofinancement (CAF conservée)","Aucune dépendance extérieure","Limité, réduit les dividendes"],
["Augmentation de capital","Renforce les fonds propres, pas de remboursement","Dilution du pouvoir des actionnaires existants, coût élevé pour les actionnaires"],
["Emprunt bancaire","Intérêts déductibles fiscalement, effet de levier","Remboursements obligatoires, garanties exigées, covenants"],
["Emprunt obligataire","Gros montants, sur le marché financier régional","Réservé aux entreprises d'une certaine taille"],
["Crédit-bail","Pas d'apport initial, financement à 100 %","Coût souvent plus élevé"],
["Crédits de trésorerie, escompte, affacturage","Financent le BFR","Coûteux, à court terme"]])}
<h2>2. Le tableau d'amortissement d'un emprunt</h2>
<p>Emprunt de 30 M sur 3 ans au taux de 8 %, remboursé par <b>amortissements constants</b> (même part de capital chaque année) :</p>
${T(["Année","Capital restant dû en début","Intérêts (8 %)","Amortissement du capital","Annuité"],[
["1","30 000 000","2 400 000","10 000 000","12 400 000"],
["2","20 000 000","1 600 000","10 000 000","11 600 000"],
["3","10 000 000","800 000","10 000 000","10 800 000"]])}
<p>Avec des <b>annuités constantes</b>, le montant payé est le même chaque année : la part d'intérêts diminue et la part de capital augmente.</p>
${E("Paiement de l'annuité de l'année 1 (comptabilité de l'entreprise)",[["162","Emprunts auprès des établissements de crédit","10 000 000",""],["671","Intérêts des emprunts","2 400 000",""],["521","Banque","","12 400 000"]])}
<h2>3. Les covenants</h2>
<p>Les contrats de prêt imposent souvent des <b>clauses financières</b> : ratio d'endettement maximal, ratio de couverture des intérêts minimal, interdiction de distribuer des dividendes au-delà d'un seuil. En cas de non-respect, la banque peut exiger le remboursement anticipé. Pour l'auditeur, une violation de covenant peut obliger à reclasser la dette à court terme et poser une question de <b>continuité d'exploitation</b>.</p>
`},

{ id:"f5", day:"Décider", title:"Budget, trésorerie prévisionnelle et contrôle de gestion", html:`
<p class="lead">Piloter, c'est prévoir puis comparer. Le budget fixe les objectifs chiffrés ; le contrôle de gestion explique les écarts.</p>
<h2>1. La construction du budget</h2>
<ol><li>Budget des ventes (volumes et prix).</li><li>Budgets de production et d'achats.</li><li>Budget des charges (personnel, frais généraux).</li><li>Budget des investissements.</li><li>Budget de trésorerie : encaissements et décaissements mois par mois.</li><li>Compte de résultat et bilan prévisionnels.</li></ol>
<h2>2. Le budget de trésorerie</h2>
<p>Il traduit les opérations en flux d'argent, en tenant compte des délais : une vente de janvier payée à 60 jours sera encaissée en mars. Il permet d'anticiper un besoin de découvert et de le négocier à l'avance.</p>
${X("ventes prévues : janvier 100 M, février 120 M, mars 90 M ; les clients paient 50 % au comptant et 50 % le mois suivant. Encaissements de février et mars ?","<p>Février : 50 % de février (60) + 50 % de janvier (50) = <b>110 M</b>. Mars : 50 % de mars (45) + 50 % de février (60) = <b>105 M</b>.</p>")}
<h2>3. L'analyse des écarts</h2>
<p>Écart = réalisé − budget. On le décompose : un écart de chiffre d'affaires peut venir des <b>volumes</b> (on a vendu moins) ou des <b>prix</b> (on a vendu moins cher). Les écarts importants doivent être expliqués et suivis d'actions.</p>
<h2>4. Les tableaux de bord</h2>
<p>Ils présentent quelques indicateurs clés (chiffre d'affaires, marge, trésorerie, délai clients, carnet de commandes) avec leurs objectifs et des alertes visuelles. Ils doivent être fiables : leurs données proviennent souvent d'extractions de systèmes et de fichiers Excel, dont l'auditeur IT vérifie l'intégrité.</p>
`},

{ id:"f6", day:"Audit", title:"L'analyse financière au service de l'auditeur", html:`
<p class="lead">L'auditeur utilise l'analyse financière pour planifier sa mission, repérer les zones de risque et apprécier la continuité d'exploitation.</p>
<h2>1. Les procédures analytiques</h2>
<p>Au début de la mission, l'auditeur compare les chiffres de l'année avec l'année précédente, le budget et les ratios du secteur. Les variations inattendues orientent ses travaux.</p>
${T(["Constat","Question à poser"],[
["Chiffre d'affaires +30 %, délai clients de 45 à 90 jours","Les ventes sont-elles réelles ? Les clients peuvent-ils payer ?"],
["Marge brute en forte hausse sans changement de prix","Les stocks sont-ils surévalués ? Des achats manquent-ils ?"],
["Charges de personnel stables malgré une hausse des effectifs","Des salaires sont-ils oubliés (cut-off) ?"],
["Trésorerie positive à la clôture, découverts toute l'année","Y a-t-il un « habillage » de bilan (window dressing) ?"]])}
<h2>2. La continuité d'exploitation</h2>
<p>Les comptes sont établis en supposant que l'entreprise continuera son activité. L'auditeur doit apprécier s'il existe une <b>incertitude significative</b>. Indices :</p>
<ul><li>capitaux propres négatifs ou devenus inférieurs à la moitié du capital social (règle de l'Acte uniforme sur les sociétés commerciales qui impose une décision des associés) ;</li><li>pertes répétées, flux de trésorerie opérationnels négatifs ;</li><li>incapacité à rembourser ses emprunts, violation de covenants ;</li><li>perte d'un client ou d'une licence majeurs ;</li><li>litiges importants.</li></ul>
<p>L'auditeur examine alors le plan de la direction (financement, restructuration, prévisions de trésorerie), et peut ajouter un paragraphe dans son rapport ou, dans les cas graves, modifier son opinion.</p>
<h2>3. Le seuil de signification</h2>
<p>L'auditeur fixe un <b>seuil de signification</b> : le montant au-delà duquel une erreur pourrait influencer la décision d'un lecteur des comptes. Il est souvent calculé à partir d'un indicateur de référence (par exemple un pourcentage du résultat avant impôt, du chiffre d'affaires ou du total des capitaux propres selon l'entité). Il guide l'étendue des travaux et l'évaluation des anomalies.</p>
${X("une société a un résultat avant impôt de 400 M. L'auditeur retient 5 % de ce résultat comme seuil de signification. Une erreur non corrigée de 25 M a été trouvée. Est-elle significative ?","<p>Seuil = 5 % × 400 = 20 M. L'erreur de 25 M dépasse le seuil : elle est <b>significative</b> et doit être corrigée, sinon l'opinion de l'auditeur sera affectée. Il faut aussi tenir compte du cumul des autres anomalies non corrigées et de la nature de l'erreur (une petite fraude peut être significative par nature).</p>")}
`}
];

CERTS.push({
  id:"finance", title:"Finance d'entreprise et analyse financière", org:"Cours Georgi Learning · Comptabilité et finance",
  intro:"Lire la santé financière d'une entreprise, comprendre ses décisions d'investissement et de financement, et utiliser l'analyse financière comme auditeur. Il est conseillé d'avoir suivi le cours de comptabilité.",
  examMinutes:30, examQuestions:20, passMark:70,
  exam:`<p>Test de connaissances interne au campus : 20 questions tirées au hasard, 30 minutes, seuil conseillé 70 %.</p>`,
  modules,
  pages:[{ id:"formules", title:"Fiche des formules", html:`
${T(["Notion","Formule"],[
["Fonds de roulement","Ressources stables − actif immobilisé"],
["BFR","Stocks + créances d'exploitation − dettes d'exploitation"],
["Trésorerie nette","FR − BFR"],
["Délai clients","Créances clients TTC ÷ CA TTC × 360"],
["CAF","Résultat net + dotations − reprises − plus-values + moins-values"],
["ROE","Résultat net ÷ capitaux propres"],
["Gearing","Dettes financières nettes ÷ capitaux propres"],
["Capacité de remboursement","Dettes financières ÷ CAF"],
["Seuil de rentabilité","Charges fixes ÷ taux de marge sur coûts variables"],
["Valeur actuelle","F ÷ (1 + t)^n"],
["VAN","Σ flux actualisés − investissement"],
["Seuil de signification (exemple)","Pourcentage d'un indicateur de référence (résultat, CA, capitaux propres)"]])}
`}],
  questions:[]
});
})();
