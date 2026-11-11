/* Télécommunications : cours original pour auditeurs débutants. */
(function(){
const {T, E, X} = window.__GL;

const modules = [
{ id:"t1", day:"Comprendre", title:"Le métier d'un opérateur télécom", html:`
<p class="lead">Un opérateur télécom vend de l'accès : à la voix, aux SMS, à Internet. Il investit massivement dans un réseau, puis le rentabilise grâce à des millions de clients qui consomment chacun un peu chaque jour.</p>
<h2>1. Les activités</h2>
${T(["Activité","Contenu"],[
["Mobile grand public","Voix, SMS, données (Internet mobile), forfaits et recharges"],
["Fixe et Internet","Lignes fixes, fibre optique (FTTH), ADSL, box 4G/5G"],
["Entreprises","Liaisons dédiées, réseaux privés, centres de données, cloud, services gérés"],
["Gros (wholesale)","Vente de capacité à d'autres opérateurs : interconnexion, câbles sous-marins, transit international"],
["Services financiers","Mobile money, souvent dans une filiale établissement de monnaie électronique"],
["Contenus et services","Télévision, musique, services à valeur ajoutée, partenaires"]])}
<h2>2. Le réseau en quelques mots</h2>
<ul><li><b>Réseau d'accès</b> : antennes (sites radio, BTS pour la 2G, NodeB 3G, eNodeB 4G, gNodeB 5G), fibre jusqu'aux clients.</li><li><b>Réseau de transport</b> : faisceaux hertziens et fibres qui relient les sites.</li><li><b>Cœur de réseau</b> : établit les appels et les sessions de données, gère la mobilité (MSC, HLR/HSS, cœur de paquets).</li><li><b>Plateformes</b> : SMS, messagerie vocale, recharge, facturation.</li><li><b>Systèmes d'information</b> : facturation (BSS), supervision réseau (OSS), relation client (CRM).</li></ul>
<h2>3. Prépayé et postpayé</h2>
${T(["Mode","Fonctionnement","Particularités"],[
["Prépayé","Le client recharge d'abord, puis consomme ; le solde est décompté en temps réel","Plus de 90 % des clients mobiles dans de nombreux pays d'Afrique de l'Ouest ; revenu différé à gérer"],
["Postpayé","Le client consomme, puis reçoit une facture","Risque d'impayé ; entreprises et clients haut de gamme"]])}
<h2>4. Les indicateurs du secteur</h2>
${T(["Indicateur","Sens"],[
["Parc (abonnés actifs)","Nombre de clients ayant eu une activité sur une période (souvent 90 jours)"],
["ARPU","Revenu moyen par utilisateur et par mois"],
["Churn","Taux de clients perdus sur la période"],
["MOU","Minutes d'utilisation par client"],
["EBITDA et marge d'EBITDA","Résultat avant amortissements, très suivi car les investissements sont lourds"],
["Capex / chiffre d'affaires","Intensité des investissements dans le réseau"]])}
<h2>5. La régulation</h2>
<p>Au Sénégal, l'<b>Autorité de régulation des télécommunications et des postes (ARTP)</b> attribue les licences et les fréquences, contrôle la qualité de service, encadre l'interconnexion et les tarifs des opérateurs puissants, et collecte certaines redevances. Les opérateurs paient aussi des taxes spécifiques au secteur, et les obligations d'<b>identification des abonnés</b> (enregistrement des cartes SIM avec une pièce d'identité) sont strictes.</p>
<div class="box key"><h4>Pourquoi le secteur est intéressant pour un auditeur IT</h4><p>Le chiffre d'affaires est produit par une chaîne de systèmes : le réseau génère des tickets de consommation, la plateforme de taxation les valorise, la facturation les agrège, la comptabilité les enregistre. À chaque maillon, des données peuvent se perdre ou être altérées.</p></div>
`},

{ id:"t2", day:"Comprendre", title:"Des appels aux revenus : la chaîne de facturation", html:`
<p class="lead">Chaque appel, SMS ou session Internet laisse une trace. Suivre cette trace de bout en bout est le cœur de l'audit d'un opérateur.</p>
<h2>1. Le CDR</h2>
<p>Le <b>CDR</b> (Call Detail Record, ou ticket de taxation) est un enregistrement créé par un équipement réseau pour chaque événement : numéro appelant, numéro appelé, date, heure, durée ou volume, cellule, type de service. Un opérateur en génère des centaines de millions par jour.</p>
<h2>2. La chaîne</h2>
<ol><li><b>Réseau</b> : les équipements (commutateurs, cœur de données, plateforme SMS) produisent les CDR.</li><li><b>Médiation</b> : collecte, nettoie, dédoublonne, met au format et répartit les CDR vers les systèmes.</li><li><b>Taxation</b> : valorise chaque événement selon le plan tarifaire du client. En prépayé, c'est la plateforme de taxation en temps réel (OCS / IN) qui décompte le solde pendant l'appel.</li><li><b>Facturation</b> (postpayé) : agrège les événements valorisés et produit les factures.</li><li><b>Comptabilité</b> : reçoit les revenus agrégés par produit, souvent par interface quotidienne ou mensuelle.</li></ol>
<h2>3. Où se perd le revenu</h2>
${T(["Maillon","Fuite possible"],[
["Réseau → médiation","CDR non générés ou perdus (panne, fichier non transféré)"],
["Médiation","CDR rejetés et jamais retraités, doublons supprimés à tort"],
["Taxation","Plan tarifaire mal paramétré, service non taxé, numéros gratuits non autorisés"],
["Clients","Comptes de test ou de service utilisés pour de vrais appels, clients non facturés"],
["Facturation → comptabilité","Interface incomplète, revenus mal rattachés à la période"]])}
<h2>4. La revenue assurance</h2>
<p>La plupart des opérateurs ont une équipe de <b>revenue assurance</b> qui rapproche les volumes à chaque étape : nombre et durée des CDR au réseau, en médiation, en taxation, en facturation. Elle mesure les fuites et fait corriger les causes. Pour l'auditeur, ses rapports sont une source précieuse, à condition de vérifier leur fiabilité.</p>
${X("le réseau a produit 1 000 millions de minutes en mars ; la taxation en a valorisé 985 millions, dont 20 millions gratuites (numéros d'urgence et services internes). Calcule l'écart à expliquer.","<p>Minutes attendues en taxation : 1 000. Valorisées : 985 (dont 20 gratuites autorisées, qui sont bien passées par la taxation). Écart réseau → taxation : <b>15 millions de minutes</b> perdues ou rejetées entre les deux maillons. Il faut analyser les rejets de médiation et les fichiers non transférés, puis estimer le revenu perdu avec le prix moyen par minute.</p>")}
`},

{ id:"t3", day:"Comprendre", title:"Comptabiliser les revenus télécoms", html:`
<p class="lead">La règle de base : un revenu est constaté quand le service est rendu, pas quand le client paie. En télécoms, ce principe crée beaucoup de décalages.</p>
<h2>1. Les recharges prépayées</h2>
<p>Quand un client achète une recharge de 1 000, l'opérateur reçoit l'argent mais n'a encore rien fourni. Il enregistre un <b>produit constaté d'avance</b> (ou un passif de contrat). Le revenu est constaté au fur et à mesure de la consommation. Le crédit non utilisé à son expiration est constaté en revenu selon les règles applicables (et la politique comptable de l'opérateur).</p>
${E("Vente de recharges pour 10 000 000 via les distributeurs",[["Banque / distributeurs","Encaissement","10 000 000",""],["Produits constatés d'avance (crédit non consommé)","Passif","","10 000 000"]])}
${E("Consommation de 7 000 000 dans le mois",[["Produits constatés d'avance","Diminution du passif","7 000 000",""],["Revenus voix, SMS, données","Produit","","7 000 000"]])}
<h2>2. Les distributeurs et les remises</h2>
<p>Les recharges sont vendues à des distributeurs avec une remise (par exemple 5 %). Selon l'analyse du contrat, cette remise est soit une réduction du revenu, soit une charge de distribution. L'auditeur vérifie le traitement retenu et sa permanence.</p>
<h2>3. Les forfaits et offres groupées</h2>
<p>Un forfait mensuel facturé le 15 du mois couvre la moitié du mois suivant : une partie est à reporter (cut-off). Une offre qui combine un téléphone subventionné et un abonnement de 24 mois doit répartir le prix entre le téléphone et le service (en IFRS, norme IFRS 15 sur les revenus des contrats clients).</p>
<h2>4. L'interconnexion et le roaming</h2>
<ul><li>Quand un client d'un opérateur A appelle un client d'un opérateur B, A paie à B une <b>terminaison d'appel</b> (charge pour A, revenu pour B).</li><li>Le <b>roaming</b> : quand un client étranger utilise le réseau local, l'opérateur local facture son opérateur d'origine.</li><li>Les montants dépendent des volumes déclarés par chaque partie : il faut des <b>rapprochements</b> et des procédures de règlement des litiges. À la clôture, de nombreuses estimations (revenus à recevoir, charges à payer) sont nécessaires.</li></ul>
<h2>5. Le trafic international</h2>
<p>Les appels internationaux entrants sont une source de revenus importante, parfois soumise à des taxes spécifiques. Ils sont la cible de la <b>fraude par contournement</b> (SIM box, module 5).</p>
${X("au 31/12, le solde des crédits prépayés non consommés est de 3,2 milliards dans la plateforme, mais 2,7 milliards en comptabilité. Que fais-tu ?","<p>Rapprocher les deux montants : vérifier l'interface plateforme → comptabilité, les expirations de crédit (constatées en revenu dans un système et pas dans l'autre ?), les recharges promotionnelles ou bonus (qui ne sont pas de l'argent encaissé et ne doivent pas forcément être en passif), et la date exacte de l'extraction. L'écart de 0,5 milliard peut signifier un revenu constaté trop tôt.</p>")}
`},

{ id:"t4", day:"Comprendre", title:"Investissements, réseau et actifs", html:`
<p class="lead">Un opérateur dépense chaque année une part importante de son chiffre d'affaires en investissements. Leur comptabilisation a un impact direct sur le résultat.</p>
<h2>1. Les principaux actifs</h2>
${T(["Actif","Particularités"],[
["Licences et fréquences","Immobilisations incorporelles, souvent très coûteuses, amorties sur la durée de la licence"],
["Sites radio, pylônes","Corporelles ; souvent cédés à des sociétés de pylônes puis reloués"],
["Équipements de réseau","Durées de vie courtes (évolution technologique)"],
["Fibre et câbles sous-marins","Durées longues ; droits d'usage irrévocables (IRU) achetés ou vendus"],
["Systèmes d'information","Logiciels (facturation, CRM), développements internes immobilisés"]])}
<h2>2. Les questions de l'auditeur</h2>
<ul><li><b>Capitalisation</b> : quelles dépenses sont immobilisées (installation d'un nouveau site) et lesquelles sont des charges (maintenance) ? Capitaliser de la maintenance gonfle le résultat.</li><li><b>Immobilisations en cours</b> : des projets restent-ils « en cours » des années sans mise en service (amortissement retardé) ?</li><li><b>Existence</b> : les équipements sont dispersés sur des centaines de sites ; inventaire et rapprochement avec le registre.</li><li><b>Dépréciation</b> : équipements 2G/3G remplacés par la 4G/5G.</li><li><b>Contrats de location</b> de sites et de pylônes : traitement en location (en IFRS, IFRS 16).</li></ul>
<h2>3. L'obligation de démantèlement</h2>
<p>Quand un opérateur installe une antenne sur un terrain loué, il peut être obligé de remettre le terrain en état à la fin du contrat. Ce coût futur est provisionné et ajouté au coût de l'actif.</p>
`},

{ id:"t5", day:"Risques", title:"Fraude télécom et sécurité", html:`
<p class="lead">La fraude coûte chaque année une part significative du chiffre d'affaires des opérateurs. Elle combine techniques réseau, failles de processus et complicités internes.</p>
<h2>1. Les principales fraudes</h2>
${T(["Fraude","Mécanisme","Détection"],[
["SIM box (contournement)","Des appels internationaux sont détournés via Internet vers des boîtiers remplis de cartes SIM locales, puis terminés comme des appels locaux. L'opérateur perd le tarif international et l'État des taxes","Analyse des CDR : cartes SIM qui n'appellent que vers l'extérieur, sans recevoir, depuis une même cellule ; appels de test (test call generation)"],
["Fraude à l'abonnement","Ouverture de lignes postpayées avec de fausses identités, consommation massive, puis disparition","Contrôle KYC, plafonds de crédit, alertes de consommation"],
["Fraude aux numéros surtaxés","Appels générés vers des numéros internationaux ou premium partagés avec le fraudeur","Alertes sur les destinations à risque"],
["SIM swap","Duplicata de SIM obtenu frauduleusement pour voler les comptes de mobile money ou bancaires","Contrôle d'identité renforcé, délai avant les opérations sensibles"],
["Fraude interne","Recharges gratuites générées par un employé, activation de services non facturés, revente de cartes préactivées","Revue des accès aux plateformes de recharge et de provisioning, journalisation"],
["Fraude au roaming","Consommation massive à l'étranger avant la réception des CDR","Échanges rapides de données entre opérateurs (NRTRDE)"]])}
<h2>2. La sécurité du réseau</h2>
<p>Les protocoles de signalisation entre opérateurs (SS7, Diameter) n'ont pas été conçus pour un monde hostile : ils peuvent permettre l'interception de SMS ou la localisation d'abonnés s'ils ne sont pas filtrés. Les opérateurs déploient des pare-feu de signalisation. Les codes de validation envoyés par SMS sont donc un facteur d'authentification faible.</p>
<h2>3. Les plateformes sensibles</h2>
<ul><li><b>Plateforme de recharge et de taxation</b> : qui peut créditer un compte ou modifier un plan tarifaire ?</li><li><b>Provisioning</b> : qui peut activer une ligne ou un service ?</li><li><b>HLR/HSS</b> : base des abonnés du réseau.</li><li><b>Systèmes de surveillance légale</b> : accès strictement limités.</li></ul>
${X("une analyse montre 300 cartes SIM activées le même jour par le même point de vente, qui n'émettent que des appels sortants, chacune vers des centaines de numéros différents, sans aucun appel entrant ni SMS. Interprétation ?","<p>Profil typique de <b>SIM box</b>. Actions : bloquer les cartes, analyser l'emplacement (même cellule ?), remonter au point de vente qui les a activées (contrôle KYC défaillant ou complicité), estimer le revenu international perdu et signaler à l'autorité de régulation selon les procédures en vigueur.</p>")}
`},

{ id:"t6", day:"Audit IT", title:"Programme d'audit d'un opérateur télécom", html:`
<p class="lead">Ce module rassemble les travaux à mener sur le volet IT d'un commissariat aux comptes dans un opérateur.</p>
<h2>1. Cartographie</h2>
<p>Identifier les systèmes qui contribuent aux revenus et aux charges : réseau (sources de CDR), médiation, taxation temps réel, facturation, CRM, distribution des recharges, interconnexion et roaming, mobile money, ERP comptable. Repérer les interfaces et les contrôles de rapprochement.</p>
<h2>2. ITGC</h2>
${T(["Domaine","Points spécifiques"],[
["Accès","Administrateurs des plateformes de taxation et de recharge ; comptes génériques des équipementiers ; accès des prestataires de services gérés"],
["Changements","Création et modification des offres et plans tarifaires (fréquents, poussés par le marketing) : approbation, test, contrôle après mise en production"],
["Exploitation","Collecte et traitement des fichiers CDR, gestion des rejets, sauvegardes"],
["Prestataires","Une partie du réseau et des SI est souvent externalisée (services gérés) : rapports d'assurance (ISAE 3402 / SOC 1), droits d'audit"]])}
<h2>3. Tests sur les revenus</h2>
${T(["Test","Objectif"],[
["Rapprochement de bout en bout des volumes (réseau → médiation → taxation → facturation → comptabilité)","Exhaustivité"],
["Tests d'appels : on passe des appels et SMS réels et on vérifie leur taxation","Exactitude de la valorisation"],
["Comparaison du paramétrage des offres avec les grilles tarifaires approuvées","Exactitude"],
["Analyse des comptes de test, de service et du personnel","Usage abusif non facturé"],
["Rapprochement des crédits prépayés non consommés","Cut-off et passif"],
["Rapprochement interconnexion et roaming avec les déclarations des partenaires","Exactitude des revenus et charges"],
["Analyse de la revenue assurance (indicateurs, fuites, actions)","Efficacité du dispositif"]])}
<h2>4. Autres zones</h2>
<ul><li>Immobilisations : capitalisation, mises en service, inventaire des sites.</li><li>Créances clients postpayés et opérateurs : ancienneté, litiges.</li><li>Commissions des distributeurs : recalcul.</li><li>Conformité : identification des abonnés, obligations réglementaires de reporting.</li></ul>
<div class="box key"><h4>Ton expérience VoIP est un atout</h4><p>Tu as configuré Asterisk, 3CX et des serveurs vocaux : tu comprends ce qu'est un appel, une signalisation, un enregistrement de taxation. C'est exactement le savoir qui manque à beaucoup d'auditeurs dans ce secteur.</p></div>
`}
];

CERTS.push({
  id:"telecoms", title:"Télécommunications", org:"Secteur d'activité",
  intro:"Comprendre le fonctionnement d'un opérateur télécom, de l'antenne jusqu'au chiffre d'affaires : chaîne de facturation, prépayé, interconnexion, investissements, fraude et programme d'audit.",
  examMinutes:30, examQuestions:20, passMark:70,
  exam:`<p>Test de connaissances interne au campus : 20 questions tirées au hasard, 30 minutes, seuil conseillé 70 %.</p>`,
  modules,
  pages:[{ id:"lexique", title:"Lexique des télécoms", html:`
${T(["Terme","Définition"],[
["ARPU","Revenu moyen par utilisateur"],
["ARTP","Autorité de régulation des télécommunications et des postes (Sénégal)"],
["BSS / OSS","Systèmes métiers (facturation, CRM) / systèmes d'exploitation du réseau"],
["BTS / eNodeB / gNodeB","Station de base 2G / 4G / 5G"],
["CDR","Ticket de taxation produit pour chaque événement"],
["Churn","Taux de perte de clients"],
["EBITDA","Résultat avant intérêts, impôts, dépréciations et amortissements"],
["FTTH","Fibre jusqu'au domicile"],
["HLR / HSS","Base de données des abonnés du réseau mobile"],
["Interconnexion","Échange de trafic entre opérateurs"],
["IRU","Droit d'usage irrévocable sur une capacité (fibre, câble)"],
["Médiation","Système qui collecte et prépare les CDR"],
["MOU","Minutes d'utilisation"],
["OCS / IN","Plateforme de taxation en temps réel du prépayé"],
["Provisioning","Activation des lignes et services"],
["Revenue assurance","Fonction qui détecte et corrige les pertes de revenus"],
["Roaming","Utilisation d'un réseau étranger par un abonné"],
["SIM box","Équipement de contournement des appels internationaux"],
["SS7 / Diameter","Protocoles de signalisation entre réseaux"],
["Terminaison d'appel","Tarif payé à l'opérateur qui achemine l'appel jusqu'à son abonné"],
["Wholesale","Activités de gros entre opérateurs"]])}
`}],
  questions:[]
});
})();
