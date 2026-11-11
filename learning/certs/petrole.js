/* Pétrole et gaz : cours original pour auditeurs débutants. */
(function(){
const {T, E, X} = window.__GL;

const modules = [
{ id:"p1", day:"Comprendre", title:"La chaîne pétrolière et gazière", html:`
<p class="lead">Du gisement sous la mer jusqu'au réservoir de ta voiture, le pétrole passe par une longue chaîne d'acteurs. Chaque maillon a son métier, ses contrats et ses risques.</p>
<h2>1. Les trois segments</h2>
${T(["Segment","Activités","Acteurs typiques"],[
["Amont (upstream)","Exploration (recherche de gisements), développement (construction des installations), production (extraction)","Compagnies pétrolières internationales, sociétés nationales, sociétés de services pétroliers"],
["Intermédiaire (midstream)","Transport (oléoducs, gazoducs, navires), stockage, liquéfaction du gaz (GNL)","Transporteurs, terminaux, opérateurs de stockage"],
["Aval (downstream)","Raffinage, distribution, stations-service, vente aux industriels et à l'aviation","Raffineries, distributeurs de produits pétroliers, marketeurs"]])}
<h2>2. Le contexte sénégalais</h2>
<p>Le Sénégal est devenu producteur de pétrole avec le champ offshore de <b>Sangomar</b> (premier pétrole en 2024) et de gaz avec le projet <b>Grand Tortue Ahmeyim</b> (GTA), partagé avec la Mauritanie, qui produit du gaz naturel liquéfié. La société nationale <b>Petrosen</b> y détient des participations. La raffinerie de la SAR (Société africaine de raffinage) et de nombreux distributeurs opèrent dans l'aval. Le secteur est encadré par le Code pétrolier et le Code gazier, ainsi que par des règles de contenu local.</p>
<h2>3. Les produits</h2>
${T(["Produit","Usage"],[
["Pétrole brut","Matière première des raffineries ; vendu en barils (1 baril ≈ 159 litres)"],
["Gaz naturel","Production d'électricité, industrie ; transporté par gazoduc ou liquéfié (GNL)"],
["Produits raffinés","Essence (super), gazole, kérosène (aviation), fioul, butane (gaz domestique), bitume"]])}
<h2>4. Ce qui fait le prix</h2>
<p>Le prix du brut est fixé sur des marchés internationaux (par exemple le Brent) en dollars. Une entreprise pétrolière est donc exposée au <b>prix du baril</b> et au <b>taux de change</b> dollar / franc CFA. Dans l'aval, les prix de vente au public sont souvent <b>réglementés</b> par l'État, qui peut verser des <b>subventions</b> ou des <b>compensations</b> aux distributeurs quand les prix internationaux montent.</p>
<div class="box key"><h4>Pourquoi le secteur est particulier pour un auditeur</h4><p>Des montants énormes, des contrats complexes avec l'État, des stocks difficiles à mesurer (liquides, volumes qui varient avec la température), des estimations de réserves, et une exposition aux devises et aux prix. Les systèmes de mesure (compteurs, jaugeage) et les ERP sont au cœur des contrôles.</p></div>
`},

{ id:"p2", day:"Comprendre", title:"Les contrats pétroliers et la part de l'État", html:`
<p class="lead">Le sous-sol appartient à l'État. Les compagnies obtiennent le droit de l'exploiter par des contrats qui fixent comment la production et les revenus sont partagés.</p>
<h2>1. Les deux grandes familles de contrats</h2>
${T(["Contrat","Principe","Part de l'État"],[
["Concession","La compagnie est propriétaire du pétrole produit et paie des redevances et des impôts","Redevance (pourcentage de la production) + impôt sur les bénéfices"],
["Contrat de partage de production (CPP)","L'État reste propriétaire ; la compagnie finance les coûts et se rembourse sur une partie de la production, le reste est partagé","« Profit oil » de l'État + impôts + participation de la société nationale"]])}
<p>Le Sénégal utilise principalement des <b>contrats de recherche et de partage de production</b>.</p>
<h2>2. Le mécanisme du CPP pas à pas</h2>
<ol><li>La production de la période est mesurée.</li><li>Une redevance éventuelle est prélevée.</li><li>Une part est réservée au <b>cost oil</b> : elle rembourse à la compagnie ses coûts d'exploration, de développement et d'exploitation, dans la limite d'un plafond (par exemple 70 % de la production).</li><li>Le reste est le <b>profit oil</b>, partagé entre l'État et la compagnie selon des pourcentages fixés au contrat (souvent progressifs avec la rentabilité).</li><li>La compagnie paie l'impôt sur ses bénéfices.</li></ol>
${X("production de 1 000 000 barils ; pas de redevance ; plafond de cost oil 60 % ; coûts récupérables de la période 500 000 barils équivalents ; profit oil partagé 40 % État / 60 % compagnie. Calcule la part de chacun.","<p>Plafond = 600 000 barils ; les coûts récupérables (500 000) sont sous le plafond : cost oil = <b>500 000</b> pour la compagnie. Profit oil = 1 000 000 − 500 000 = 500 000. État : 40 % = <b>200 000</b>. Compagnie : 60 % = 300 000. Total compagnie = 800 000 barils (avant impôt). Si les coûts avaient dépassé 600 000, l'excédent serait reporté sur les périodes suivantes.</p>")}
<h2>3. La joint-venture et l'opérateur</h2>
<p>Un champ est généralement exploité par plusieurs partenaires (par exemple une compagnie internationale, un partenaire et la société nationale). L'un d'eux est l'<b>opérateur</b> : il mène les opérations et refacture les coûts aux partenaires selon leur pourcentage, via des <b>appels de fonds</b> (cash calls). Chaque partenaire a le droit d'auditer les comptes de l'opérateur (<b>audit de joint-venture</b>).</p>
<h2>4. Les coûts récupérables : un enjeu majeur</h2>
<p>Plus les coûts déclarés sont élevés, plus le cost oil est élevé et plus la part de l'État diminue. L'État fait donc auditer les coûts : les coûts non conformes au contrat (dépenses non justifiées, frais de siège excessifs, transactions avec des sociétés liées à des prix anormaux) sont rejetés.</p>
<h2>5. La transparence</h2>
<p>Le Sénégal participe à l'<b>ITIE</b> (Initiative pour la transparence dans les industries extractives), qui publie chaque année les paiements des entreprises à l'État et les revenus déclarés par l'État, avec un rapprochement des deux.</p>
`},

{ id:"p3", day:"Comprendre", title:"Comptabilité pétrolière : exploration, réserves, amortissement", html:`
<p class="lead">Dépenser des millions pour forer un puits sec : est-ce une charge ou un actif ? La comptabilité pétrolière répond à des questions que les autres secteurs ne se posent pas.</p>
<h2>1. Les dépenses d'exploration</h2>
<p>Deux approches existent dans les référentiels internationaux :</p>
${T(["Méthode","Principe","Effet"],[
["Successful efforts (efforts fructueux)","Seuls les coûts liés à des découvertes exploitables sont immobilisés ; les puits secs passent en charges","Résultat plus volatil, actif plus prudent"],
["Full cost (coûts entiers)","Tous les coûts d'exploration d'une zone sont immobilisés, y compris les échecs","Résultat plus lissé, actif plus élevé"]])}
<p>En IFRS, la norme IFRS 6 encadre la phase d'exploration et d'évaluation et impose des tests de dépréciation. Dans le SYSCOHADA révisé, les dépenses d'exploration suivent les principes généraux et les éventuelles dispositions spécifiques du secteur.</p>
<h2>2. Les réserves</h2>
<p>Les réserves sont les quantités de pétrole ou de gaz qu'on estime pouvoir extraire de façon rentable. Elles sont classées selon leur degré de certitude : <b>prouvées (1P)</b>, <b>probables</b>, <b>possibles</b>. Leur estimation est faite par des ingénieurs de réservoir, souvent revue par des experts indépendants.</p>
<h2>3. L'amortissement à l'unité de production</h2>
<p>Les installations d'un champ servent tant qu'il y a du pétrole à extraire. On les amortit donc selon la production : <b>dotation = valeur nette amortissable × production de la période ÷ réserves restantes en début de période</b>.</p>
${X("installations de 600 milliards ; réserves prouvées développées en début d'année 120 millions de barils ; production de l'année 15 millions. Dotation ?","<p>Dotation = 600 × 15 ÷ 120 = <b>75 milliards</b>. Si les réserves sont révisées à la baisse, la dotation par baril augmente : c'est pourquoi l'estimation des réserves est un sujet d'audit majeur.</p>")}
<h2>4. Le démantèlement</h2>
<p>À la fin de la vie d'un champ, les plateformes, puits et conduites doivent être démantelés et le site remis en état. Ce coût futur, souvent très élevé (surtout en mer), est provisionné dès l'installation et actualisé. Les contrats prévoient parfois un fonds de démantèlement alimenté pendant la production.</p>
<h2>5. Autres sujets</h2>
<ul><li><b>Devises</b> : comptes tenus en dollars, conversion en francs CFA, écarts de change.</li><li><b>Dépréciation</b> : quand le prix du baril chute, la valeur des actifs peut devenir inférieure à leur valeur comptable.</li><li><b>Fiscalité</b> : régimes spécifiques, impôts sur les bénéfices pétroliers, retenues sur les prestataires étrangers.</li></ul>
`},

{ id:"p4", day:"Comprendre", title:"L'aval : raffinage, distribution et stocks", html:`
<p class="lead">Dans l'aval, l'essentiel du risque se trouve dans les volumes : produits qui entrent, qui sortent, qui s'évaporent, qui disparaissent.</p>
<h2>1. Le circuit d'un distributeur</h2>
<ol><li>Achat de produits (importation par navire ou achat à la raffinerie).</li><li>Réception dans un <b>dépôt</b> : mesure des volumes reçus.</li><li>Chargement des camions-citernes.</li><li>Livraison aux stations-service ou aux clients industriels.</li><li>Vente au litre en station, avec encaissement en espèces, carte, mobile money ou bons.</li></ol>
<h2>2. Mesurer un liquide</h2>
<p>Un liquide se dilate avec la chaleur. 1 000 litres d'essence à 35 °C ne contiennent pas la même quantité de produit que 1 000 litres à 15 °C. On convertit donc les volumes mesurés (<b>volume ambiant</b>) en <b>volume à 15 °C</b> (volume standard) grâce à des tables de correction. Les écarts entre volumes facturés, reçus et vendus doivent tenir compte de cette correction.</p>
<p>Les méthodes de mesure : <b>jaugeage</b> des cuves (règle graduée ou jauge électronique), <b>compteurs</b> aux points de chargement et aux pompes, <b>certificats d'inspection</b> d'un inspecteur indépendant à la réception des navires.</p>
<h2>3. Les pertes et écarts</h2>
${T(["Type d'écart","Explication","Seuil"],[
["Pertes normales","Évaporation, manipulation, résidus","Admises dans une limite (pourcentage fixé par la réglementation ou les contrats)"],
["Écarts de mesure","Compteurs mal étalonnés, erreurs de jaugeage","À corriger, avec étalonnage régulier"],
["Pertes anormales","Fuites, vols, fraude (camions détournés, mélanges)","À investiguer"]])}
<h2>4. Les prix réglementés et les subventions</h2>
<p>Quand l'État fixe les prix à la pompe, une <b>structure des prix</b> détermine chaque composante : coût d'achat, transport, marges du dépôt et du distributeur, taxes. Si le coût réel dépasse le prix fixé, l'État compense la différence (<b>pertes commerciales</b> ou subventions). Ces créances sur l'État peuvent être très importantes et lentes à encaisser : leur recouvrabilité est un point d'audit.</p>
<h2>5. Les stations-service</h2>
<ul><li><b>Index des pompes</b> : relevés au début et à la fin de chaque période (quart, journée) ; ventes = différence des index.</li><li><b>Rapprochement</b> : ventes selon les index = encaissements + crédits clients ; stock théorique = stock initial + livraisons − ventes, comparé au jaugeage.</li><li>Les écarts répétés à la même station signalent un problème (vol, pompe trafiquée, erreurs).</li></ul>
${X("dans une station : stock initial 20 000 L, livraison 30 000 L, ventes selon index 42 000 L, jaugeage final 7 400 L. Calcule l'écart et commente.","<p>Stock théorique = 20 000 + 30 000 − 42 000 = 8 000 L. Stock réel = 7 400 L. Écart = <b>−600 L</b>, soit environ 1,2 % des ventes. Il faut comparer au taux de perte admis, vérifier la correction de température, l'étalonnage des pompes et l'historique de la station. Un écart de cet ordre récurrent mérite une enquête.</p>")}
`},

{ id:"p5", day:"Risques", title:"Risques du secteur et contrôles", html:`
<p class="lead">Les risques pétroliers sont à la fois financiers, physiques, réglementaires et informatiques.</p>
<h2>1. La cartographie des risques</h2>
${T(["Risque","Exemple","Contrôle attendu"],[
["Prix et change","Chute du baril, hausse du dollar","Politique de couverture, suivi des positions, limites"],
["Réserves","Surestimation des réserves","Revue par des experts indépendants, gouvernance des révisions"],
["Coûts récupérables","Coûts non éligibles imputés au cost oil","Revue des imputations, audits de joint-venture"],
["Prix de transfert","Services facturés par des sociétés du groupe à des prix excessifs","Documentation des prix de transfert, comparaison avec le marché"],
["Stocks et volumes","Vols, pertes, erreurs de mesure","Étalonnage, rapprochements quotidiens, inspection indépendante"],
["Corruption","Pots-de-vin pour obtenir des permis ou des contrats","Programme anticorruption, due diligence sur les intermédiaires"],
["Environnement et sécurité","Marée noire, accident industriel","Systèmes de gestion HSE, assurances, provisions"],
["Contenu local","Non-respect des obligations d'emploi et de sous-traitance locales","Suivi et reporting réglementaire"],
["Cyber","Attaque sur les systèmes industriels (ICS / SCADA) de production ou de pipelines","Segmentation des réseaux, surveillance, plans de continuité"]])}
<h2>2. Les systèmes industriels (OT)</h2>
<p>Les installations sont pilotées par des systèmes industriels : automates (PLC), SCADA, systèmes de contrôle distribué (DCS). Ils sont souvent anciens, difficiles à mettre à jour et conçus pour la disponibilité plutôt que la sécurité. Les bonnes pratiques (par exemple la série de normes <b>IEC 62443</b>) reposent sur la segmentation entre réseau bureautique (IT) et réseau industriel (OT), le contrôle des accès à distance des fournisseurs et la surveillance.</p>
<h2>3. Les systèmes de gestion</h2>
<p>Les ERP (par exemple SAP, très répandu dans le secteur) gèrent les achats, les stocks, la maintenance, la comptabilité de joint-venture et la facturation. Des applications spécialisées gèrent la mesure des volumes (hydrocarbure accounting), les terminaux et les stations. Les interfaces entre compteurs, applications de mesure et ERP sont un point de contrôle clé.</p>
`},

{ id:"p6", day:"Audit IT", title:"Programme d'audit d'une société pétrolière", html:`
<p class="lead">Ce module rassemble les travaux d'audit, en particulier sur le volet systèmes d'information.</p>
<h2>1. Comprendre l'entité</h2>
<ul><li>Segment (amont, aval ou les deux), contrats (CPP, joint-ventures), rôle d'opérateur ou non.</li><li>Flux physiques : d'où viennent les produits, où sont-ils stockés, comment sont-ils mesurés et vendus.</li><li>Systèmes : ERP, applications de mesure, systèmes des stations, OT.</li></ul>
<h2>2. ITGC</h2>
${T(["Domaine","Points spécifiques"],[
["Accès","Qui peut modifier les volumes, les prix, les tables de correction de température, les données de jaugeage ?"],
["Changements","Modifications de la structure des prix et des paramètres de mesure : approbation et traçabilité"],
["Interfaces","Compteurs et jauges → application de mesure → ERP : exhaustivité et intégrité"],
["Prestataires","Accès à distance des fournisseurs aux systèmes industriels et aux ERP"]])}
<h2>3. Tests sur les processus</h2>
${T(["Processus","Test"],[
["Achats de produits","Rapprochement des quantités facturées, certifiées par l'inspecteur et reçues au dépôt"],
["Stocks","Assistance au jaugeage, recalcul des volumes à 15 °C, analyse des écarts par dépôt et station"],
["Ventes","Rapprochement des sorties de dépôt, des livraisons et des factures ; ventes des stations selon index et encaissements"],
["Prix","Application de la structure des prix réglementée ; recalcul des compensations réclamées à l'État"],
["Créances sur l'État","Ancienneté, confirmations, recouvrabilité"],
["Amont","Amortissement à l'unité de production, réserves, provision de démantèlement, cost oil, appels de fonds"],
["Devises","Taux utilisés, écarts de change"]])}
<h2>4. Analyses de données</h2>
<ul><li>Écarts de stocks par site et par mois, en volume et en pourcentage ; sites atypiques.</li><li>Livraisons à des clients non enregistrés ou à des adresses identiques à celles d'employés.</li><li>Modifications manuelles de quantités dans l'ERP après réception.</li><li>Factures fournisseurs de services pétroliers sans bon de commande, ou fractionnées pour rester sous les seuils d'approbation.</li></ul>
<div class="box key"><h4>À retenir</h4><p>Dans le pétrole, <b>le volume est la monnaie</b>. Le cœur de l'audit consiste à rapprocher les volumes à chaque étape (achat, réception, stock, sortie, vente) et à s'assurer que les systèmes qui les mesurent et les transmettent sont fiables.</p></div>
`}
];

CERTS.push({
  id:"petrole", title:"Pétrole et gaz", org:"Secteur d'activité",
  intro:"Comprendre la chaîne pétrolière et gazière (amont, intermédiaire, aval), les contrats avec l'État, la comptabilité spécifique (exploration, réserves, démantèlement), la gestion des volumes et l'audit des systèmes du secteur.",
  examMinutes:30, examQuestions:20, passMark:70,
  exam:`<p>Test de connaissances interne au campus : 20 questions tirées au hasard, 30 minutes, seuil conseillé 70 %.</p>`,
  modules,
  pages:[{ id:"lexique", title:"Lexique pétrole et gaz", html:`
${T(["Terme","Définition"],[
["Amont / aval","Exploration-production / raffinage-distribution"],
["Appel de fonds (cash call)","Demande de l'opérateur aux partenaires de financer leur part des coûts"],
["Baril","Unité de volume du pétrole, environ 159 litres"],
["Brent","Prix de référence international du pétrole brut"],
["Cost oil","Part de la production qui rembourse les coûts de la compagnie"],
["CPP","Contrat de partage de production"],
["Démantèlement","Retrait des installations et remise en état du site en fin de vie"],
["Full cost / successful efforts","Méthodes de comptabilisation des dépenses d'exploration"],
["GNL","Gaz naturel liquéfié"],
["ITIE","Initiative pour la transparence dans les industries extractives"],
["Jaugeage","Mesure du niveau d'un produit dans une cuve"],
["Joint-venture","Association de partenaires pour exploiter un permis"],
["Opérateur","Partenaire qui conduit les opérations pour le compte de la joint-venture"],
["OT / ICS / SCADA","Systèmes industriels de pilotage des installations"],
["Profit oil","Part de la production partagée entre l'État et la compagnie après le cost oil"],
["Redevance","Prélèvement de l'État sur la production"],
["Réserves 1P / 2P / 3P","Prouvées / prouvées + probables / + possibles"],
["Structure des prix","Décomposition réglementée du prix à la pompe"],
["Unité de production","Méthode d'amortissement selon les volumes produits"],
["Volume à 15 °C","Volume standard corrigé de la température"]])}
`}],
  questions:[]
});
})();
