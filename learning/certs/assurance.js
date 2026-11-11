/* Assurance (zone CIMA) : cours original pour auditeurs débutants.
   Les règles citées sont résumées : vérifier le Code CIMA et les règlements en vigueur. */
(function(){
const {T, E, X} = window.__GL;

const modules = [
{ id:"a1", day:"Comprendre", title:"Le métier de l'assureur et le cycle inversé", html:`
<p class="lead">Un assureur vend une promesse : payer si un événement incertain se produit. Il encaisse d'abord, et ne connaît son vrai coût que plus tard. Cette particularité change toute la comptabilité.</p>
<h2>1. Le principe de mutualisation</h2>
<p>Mille propriétaires de voitures paient chacun 100 000 par an. L'assureur collecte 100 millions. Statistiquement, une cinquantaine d'accidents coûteront en moyenne 1,4 million chacun, soit 70 millions. La somme des cotisations de tous paie les sinistres de quelques-uns : c'est la <b>mutualisation</b>. Le reste couvre les frais et la marge.</p>
<h2>2. Le cycle de production inversé</h2>
<p>Dans une entreprise classique, on connaît le coût d'un produit avant de fixer son prix. En assurance, c'est l'inverse : on fixe la <b>prime</b> (le prix) avant de connaître le coût réel des <b>sinistres</b>. Le résultat d'une année dépend donc d'estimations, notamment des <b>provisions techniques</b>. C'est la zone de jugement principale pour un auditeur.</p>
<h2>3. Les deux grandes familles</h2>
${T(["Branche","Contenu","Durée des engagements"],[
["IARD (incendie, accidents, risques divers) ou « non-vie »","Automobile (obligatoire), incendie, multirisque habitation et entreprise, transport, responsabilité civile, santé, risques techniques","Courte : en général un an, mais certains sinistres (corporels, responsabilité) se règlent sur plusieurs années"],
["Vie et capitalisation","Épargne, retraite, assurance décès, assurance emprunteur, prévoyance","Longue : plusieurs années voire décennies"]])}
<p>Dans la zone CIMA, une même société ne peut pas pratiquer à la fois la vie et l'IARD : ce sont des sociétés distinctes, souvent dans le même groupe.</p>
<h2>4. Les acteurs</h2>
${T(["Acteur","Rôle"],[
["Assureur","Porte le risque, encaisse les primes, paie les sinistres"],
["Agent général","Représente une compagnie et vend ses contrats, payé à la commission"],
["Courtier","Représente le client, compare les compagnies ; il encaisse souvent les primes avant de les reverser"],
["Bancassurance","Vente d'assurance par les banques (assurance emprunteur, épargne)"],
["Réassureur","Assureur des assureurs : prend une partie des risques en échange d'une partie des primes"],
["CIMA","Conférence interafricaine des marchés d'assurances : 14 États d'Afrique de l'Ouest et du Centre, dont le Sénégal, un code commun et un contrôle commun"],
["Direction nationale des assurances","Administration nationale de contrôle, en lien avec la CIMA"]])}
<h2>5. Le vocabulaire de base</h2>
${T(["Terme","Sens"],[
["Souscripteur / assuré / bénéficiaire","Celui qui signe et paie / celui dont la personne ou les biens sont couverts / celui qui reçoit l'indemnité"],
["Police","Le contrat d'assurance"],
["Prime (ou cotisation)","Prix payé par l'assuré"],
["Sinistre","Réalisation du risque couvert : accident, incendie, décès"],
["Franchise","Part du dommage qui reste à la charge de l'assuré"],
["Capital assuré / plafond","Montant maximum que l'assureur paiera"],
["Exercice de survenance","Année au cours de laquelle le sinistre s'est produit"]])}
`},

{ id:"a2", day:"Comprendre", title:"Primes, sinistres et résultat technique", html:`
<p class="lead">Le compte de résultat d'un assureur s'organise autour de deux flux : les primes qui entrent et les sinistres qui sortent.</p>
<h2>1. Primes émises et primes acquises</h2>
<p>Une police automobile de 120 000 est souscrite le 1<sup>er</sup> octobre N pour un an. La prime est <b>émise</b> en totalité en N, mais seuls 3 mois de couverture concernent N. La prime <b>acquise</b> en N est de 30 000. Les 90 000 restants sont mis en <b>provision pour primes non acquises</b> (PPNA) : ils seront acquis en N+1.</p>
${E("Émission de la prime (taxes ignorées pour simplifier)",[["Assurés","Créance sur l'assuré","120 000",""],["Primes émises","Produit","","120 000"]])}
${E("Au 31/12/N : constatation de la PPNA",[["Variation de la PPNA","Charge (diminue les primes acquises)","90 000",""],["PPNA","Provision technique (passif)","","90 000"]])}
<h2>2. La règle d'encaissement préalable</h2>
<p>Depuis la réforme du Code CIMA (article 13), la garantie ne prend effet qu'après <b>paiement de la prime</b>, sauf exceptions encadrées. L'objectif était de mettre fin aux énormes arriérés de primes qui fragilisaient les compagnies. Pour l'auditeur : les créances sur assurés anciennes et importantes sont un signal d'alerte.</p>
<h2>3. Le coût des sinistres</h2>
<p>Charge de sinistres de l'exercice = sinistres payés + variation des provisions pour sinistres à payer (PSAP) + frais de gestion des sinistres − recours encaissés.</p>
<h2>4. Les indicateurs</h2>
${T(["Indicateur","Calcul","Lecture"],[
["Ratio sinistres / primes (S/P)","Charge de sinistres ÷ primes acquises","Un S/P de 65 % : 65 de sinistres pour 100 de primes"],
["Taux de frais","Frais généraux et commissions ÷ primes acquises",""],
["Ratio combiné","S/P + taux de frais","Au-dessus de 100 % : l'activité d'assurance perd de l'argent, seuls les produits financiers peuvent compenser"],
["Résultat technique","Primes acquises − charge de sinistres − frais + produits financiers alloués ± solde de réassurance",""]])}
<h2>5. Les produits financiers</h2>
<p>L'assureur encaisse les primes avant de payer les sinistres : il place cet argent (obligations d'État, dépôts à terme, immobilier, actions). Ces placements sont strictement encadrés par le Code CIMA.</p>
${X("primes acquises 800 M ; sinistres payés 400 M ; PSAP en hausse de 120 M ; commissions et frais 260 M. Calculer le S/P et le ratio combiné.","<p>Charge de sinistres = 400 + 120 = 520 M. S/P = 520 ÷ 800 = <b>65 %</b>. Taux de frais = 260 ÷ 800 = 32,5 %. Ratio combiné = <b>97,5 %</b> : l'activité est juste bénéficiaire avant produits financiers.</p>")}
`},

{ id:"a3", day:"Comprendre", title:"Les provisions techniques : le cœur de l'audit", html:`
<p class="lead">Les provisions techniques représentent ce que l'assureur doit encore à ses assurés. Elles sont souvent le premier poste du passif. Une sous-estimation embellit le résultat et cache une insolvabilité.</p>
<h2>1. Les principales provisions</h2>
${T(["Provision","Branche","Ce qu'elle couvre"],[
["Provision pour primes non acquises (PPNA)","IARD","La part des primes émises qui correspond à une couverture future"],
["Provision pour risques en cours","IARD","Le complément si la PPNA ne suffit pas à couvrir les sinistres futurs (tarif insuffisant)"],
["Provision pour sinistres à payer (PSAP)","IARD (et vie pour les décès déclarés)","Les sinistres survenus et non encore réglés, y compris ceux non encore déclarés"],
["Provision mathématique","Vie","La valeur des engagements de l'assureur envers les assurés moins celle des engagements des assurés"],
["Provision pour participation aux bénéfices","Vie","Bénéfices à reverser aux assurés"]])}
<h2>2. La PPNA en pratique</h2>
<p>Calcul <b>prorata temporis</b>, contrat par contrat : prime × nombre de jours restant à courir après la clôture ÷ nombre de jours de la période couverte. Un auditeur la recalcule sur l'ensemble du portefeuille à partir de l'extraction des polices.</p>
<h2>3. La PSAP en pratique</h2>
<p>Elle comprend :</p>
<ul><li>les <b>dossiers ouverts</b> : chaque sinistre déclaré est évalué par un gestionnaire (expertise, devis, décision de justice) ;</li><li>les <b>sinistres tardifs</b> (IBNR, « survenus mais non déclarés ») : estimés statistiquement ;</li><li>les <b>frais de gestion</b> futurs.</li></ul>
<h2>4. Les triangles de liquidation</h2>
<p>Pour estimer l'évolution des sinistres, les actuaires construisent des triangles : en ligne l'année de survenance, en colonne l'année de développement, et dans les cases les paiements cumulés. On observe comment les sinistres d'une année « mûrissent » et on projette ceux des années récentes (méthode Chain Ladder).</p>
${T(["Survenance","Après 1 an","Après 2 ans","Après 3 ans"],[
["N−2","100","150","165"],
["N−1","120","180","?"],
["N","130","?","?"]])}
<p>Facteurs observés : 150 ÷ 100 = 1,50 de l'année 1 à 2 (et 180 ÷ 120 = 1,50) ; 165 ÷ 150 = 1,10 de l'année 2 à 3. Projection : N−1 → 180 × 1,10 = 198 ; N → 130 × 1,50 × 1,10 = 214,5.</p>
<h2>5. Le boni / mali de liquidation</h2>
<p>Chaque année, on compare la provision constituée pour les sinistres anciens avec ce qu'ils ont réellement coûté. Si la provision était trop forte : <b>boni</b>. Trop faible : <b>mali</b>. Des malis répétés montrent que l'assureur sous-provisionne : c'est un indicateur très utilisé par les auditeurs et le régulateur.</p>
<div class="box key"><h4>Tests d'audit sur les provisions</h4><ul><li>Recalcul de la PPNA sur 100 % des polices.</li><li>Échantillon de dossiers de sinistres : pièces, évaluation à jour, dossiers sans mouvement depuis longtemps.</li><li>Analyse des boni / mali sur plusieurs années.</li><li>Revue des travaux de l'actuaire (méthodes, hypothèses, données utilisées).</li><li>Exhaustivité des données : tous les sinistres du système sont-ils dans l'extraction utilisée par l'actuaire ?</li></ul></div>
${X("une police de 365 000 couvre du 1er septembre N au 31 août N+1. Calculer la PPNA au 31/12/N.","<p>Jours restants après le 31/12 : du 1er janvier au 31 août N+1 = 243 jours. PPNA = 365 000 × 243 ÷ 365 = <b>243 000</b>.</p>")}
`},

{ id:"a4", day:"Risques", title:"Réassurance, solvabilité et placements", html:`
<p class="lead">Un assureur ne garde pas tous ses risques : il en cède une partie aux réassureurs. Et le régulateur vérifie qu'il a assez de fonds propres et d'actifs de qualité pour tenir ses promesses.</p>
<h2>1. Les formes de réassurance</h2>
${T(["Forme","Principe","Exemple"],[
["Quote-part (proportionnelle)","Le réassureur prend un pourcentage fixe de chaque risque, primes et sinistres","40 % de toutes les polices incendie : il reçoit 40 % des primes et paie 40 % des sinistres"],
["Excédent de plein (proportionnelle)","L'assureur garde un montant maximum par risque, le réassureur prend le surplus","Rétention de 500 M par usine ; sur une usine de 2 milliards, le réassureur prend 75 %"],
["Excédent de sinistre (non proportionnelle)","Le réassureur paie la partie d'un sinistre qui dépasse un seuil","Au-delà de 300 M par sinistre, jusqu'à 2 milliards"],
["Stop loss","Protection si le total des sinistres de l'année dépasse un seuil",""]])}
<p>En échange, le réassureur verse souvent une <b>commission de réassurance</b> à l'assureur. Les comptes avec les réassureurs (primes cédées, sinistres à récupérer, dépôts) doivent être rapprochés et confirmés.</p>
<h2>2. La marge de solvabilité</h2>
<p>L'assureur doit disposer d'une <b>marge de solvabilité</b> (fonds propres et éléments assimilés) au moins égale à un minimum calculé à partir de ses primes ou de ses sinistres (IARD) ou de ses provisions mathématiques (vie). La CIMA a aussi fortement relevé le <b>capital minimum</b> des sociétés lors de sa dernière grande réforme.</p>
<h2>3. La couverture des engagements réglementés</h2>
<p>Les provisions techniques doivent être <b>représentées</b> par des actifs équivalents, sûrs et liquides, appartenant à l'assureur : obligations d'État, dépôts bancaires, immobilier, actions cotées… Le Code fixe la liste des actifs admis, des plafonds par catégorie et des règles de localisation (une part significative doit être placée dans le pays). L'état de couverture est transmis au régulateur.</p>
<div class="box key"><h4>Pourquoi c'est important</h4><p>Un assureur peut afficher un bénéfice tout en ayant des actifs insuffisants ou illiquides (créances sur assurés anciennes, immobilier surévalué) : il ne pourrait pas payer les sinistres. Le régulateur peut alors imposer un plan de redressement, voire retirer l'agrément.</p></div>
${X("un assureur IARD a une rétention de 200 M par risque en excédent de plein, avec une capacité de 9 pleins. Une usine est assurée pour 1 milliard. Quelle part est cédée ?","<p>L'assureur garde 200 M ; le réassureur prend 800 M (dans la limite de 9 × 200 = 1 800 M). Part cédée = 800 ÷ 1 000 = <b>80 %</b>. Sur un sinistre de 100 M, le réassureur paie 80 M.</p>")}
`},

{ id:"a5", day:"Risques", title:"Fraude, intermédiaires et contrôle interne", html:`
<p class="lead">L'assurance est exposée à la fraude des assurés, des intermédiaires et du personnel. Beaucoup de ces risques se traitent par des contrôles dans le système de gestion.</p>
<h2>1. La fraude des assurés</h2>
<ul><li>Sinistre fictif ou provoqué.</li><li>Sinistre gonflé (devis de garage surévalués, factures médicales fictives).</li><li>Fausse déclaration à la souscription (cacher un antécédent).</li><li>Souscription après le sinistre (antidatage du contrat).</li></ul>
<h2>2. La fraude interne et des intermédiaires</h2>
${T(["Schéma","Contrôle attendu"],[
["Un intermédiaire encaisse les primes et ne les reverse pas","Rapprochement des comptes intermédiaires, relances, confirmations"],
["Annulation d'une police après encaissement de la prime","Annulations soumises à validation, revue des annulations"],
["Un gestionnaire crée un sinistre fictif et paie un complice","Séparation entre ouverture, évaluation et paiement ; contrôle des bénéficiaires"],
["Modification du capital assuré après un sinistre","Historique des avenants, contrôle des dates"],
["Paiement d'un sinistre sur une police non payée","Blocage système si la prime n'est pas encaissée (article 13)"]])}
<h2>3. Les contrôles dans le système de gestion</h2>
<ul><li>Impossibilité d'émettre une attestation d'assurance automobile sans encaissement.</li><li>Contrôle de cohérence : date de survenance postérieure à la date d'effet et pendant la période de garantie.</li><li>Plafonds de règlement par gestionnaire, au-delà validation hiérarchique.</li><li>Détection des doublons (même véhicule, même date, même bénéficiaire).</li><li>Traçabilité de toutes les modifications de police et de sinistre.</li></ul>
${X("une analyse montre 40 sinistres payés dont la date de survenance est antérieure de quelques jours à la date de souscription. Que conclus-tu ?","<p>Ces sinistres n'auraient pas dû être couverts : soit la date de souscription a été modifiée (antidatage), soit le contrôle de cohérence n'existe pas dans le système. Il faut identifier qui a saisi et validé ces dossiers, vérifier les paiements et leurs bénéficiaires, et recommander un contrôle bloquant dans le système et une revue des droits de modification des dates.</p>")}
`},

{ id:"a6", day:"Audit IT", title:"Le système d'information de l'assureur et le programme d'audit", html:`
<p class="lead">Polices, primes, sinistres, commissions, réassurance et provisions sont tous calculés à partir du système de gestion. L'auditeur IT en vérifie la fiabilité.</p>
<h2>1. Les applications</h2>
${T(["Application","Contenu"],[
["Gestion de la production","Clients, polices, avenants, primes, quittances, encaissements"],
["Gestion des sinistres","Déclarations, évaluations, règlements, recours"],
["Commissions","Calcul des commissions des intermédiaires"],
["Réassurance","Traités, cessions, comptes avec les réassureurs"],
["Outils actuariels","Calcul des provisions (souvent dans des fichiers ou outils hors du système principal)"],
["Comptabilité et reporting CIMA","États réglementaires, état de couverture, marge de solvabilité"]])}
<h2>2. Les tests ITGC et applicatifs</h2>
${T(["Domaine","Test"],[
["Accès","Qui peut créer une police, modifier une prime, ouvrir et payer un sinistre ? Séparation des tâches"],
["Changements","Modifications des tarifs, des règles de calcul de PPNA et de commissions : approbation et tests"],
["Interfaces","Gestion → comptabilité : primes émises et sinistres payés égaux dans les deux systèmes"],
["Données actuarielles","L'extraction transmise à l'actuaire est-elle complète ? Totaux de contrôle"],
["Calculs","Recalcul de la PPNA et des commissions sur 100 % du portefeuille"]])}
<h2>3. Analyses de données utiles</h2>
<ul><li>Polices émises sans encaissement, notamment en automobile.</li><li>Annulations massives en début d'exercice suivant (primes gonflées à la clôture).</li><li>Sinistres sans mouvement depuis plus de deux ans mais toujours provisionnés.</li><li>Bénéficiaires de règlements identiques à des employés ou des intermédiaires.</li><li>Sinistres déclarés juste après la souscription.</li></ul>
<h2>4. Le cut-off des primes</h2>
<p>Primes émises en décembre avec une date d'effet en janvier : elles concernent N+1. Primes à annuler pour des polices résiliées : elles doivent être provisionnées. Un test de séparation des exercices sur les avenants et quittances autour de la clôture est indispensable.</p>
<div class="box key"><h4>À retenir</h4><p>Dans une compagnie d'assurance, l'audit IT sert surtout à donner confiance dans <b>trois populations de données</b> : les polices (pour les primes et la PPNA), les sinistres (pour la PSAP) et les commissions. Si ces données sont fiables, l'auditeur financier et l'actuaire peuvent s'appuyer dessus.</p></div>
`}
];

CERTS.push({
  id:"assurance", title:"Assurance", org:"Secteur d'activité · Zone CIMA",
  intro:"Comprendre comment fonctionne une compagnie d'assurance (IARD et vie), son vocabulaire, ses provisions techniques, la réassurance, la réglementation CIMA et l'audit de ses systèmes.",
  examMinutes:35, examQuestions:25, passMark:70,
  exam:`<p>Test de connaissances interne au campus : 25 questions tirées au hasard, 35 minutes, seuil conseillé 70 %.</p>`,
  modules,
  pages:[{ id:"lexique", title:"Lexique de l'assurance", html:`
${T(["Terme","Définition"],[
["Avenant","Modification d'un contrat en cours"],
["Bénéficiaire","Personne qui reçoit l'indemnité ou le capital"],
["Boni / mali de liquidation","Écart favorable / défavorable entre la provision d'un sinistre et son coût réel"],
["Chain Ladder","Méthode statistique de projection des sinistres à partir des triangles"],
["CIMA","Conférence interafricaine des marchés d'assurances"],
["Coassurance","Partage d'un risque entre plusieurs assureurs"],
["Courtier","Intermédiaire mandaté par le client"],
["Franchise","Part du dommage restant à la charge de l'assuré"],
["IARD","Incendie, accidents et risques divers (non-vie)"],
["IBNR","Sinistres survenus mais non encore déclarés"],
["Marge de solvabilité","Fonds propres minimaux exigés par le régulateur"],
["Mutualisation","Les primes de tous paient les sinistres de quelques-uns"],
["Police","Contrat d'assurance"],
["PPNA","Provision pour primes non acquises"],
["Prime acquise / émise","Part de prime correspondant à la période écoulée / prime facturée"],
["Provision mathématique","Engagement de l'assureur vie envers ses assurés"],
["PSAP","Provision pour sinistres à payer"],
["Quittance","Avis d'échéance ou reçu de paiement de prime"],
["Ratio combiné","S/P + taux de frais"],
["Recours","Somme récupérée auprès du responsable du sinistre ou de son assureur"],
["Réassurance","Assurance des assureurs"],
["Rétention","Part du risque conservée par l'assureur"],
["S/P","Ratio sinistres sur primes"],
["Sinistre","Réalisation du risque assuré"],
["Souscripteur","Personne qui signe le contrat et paie la prime"],
["Triangle de liquidation","Tableau de l'évolution des sinistres par année de survenance"]])}
`}],
  questions:[]
});
})();
