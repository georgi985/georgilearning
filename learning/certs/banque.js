/* Secteur bancaire (UMOA) : cours original pour auditeurs débutants.
   Les seuils réglementaires cités sont ceux connus à la date de rédaction : vérifier les textes BCEAO en vigueur. */
(function(){
const {T, E, X} = window.__GL;

const modules = [
{ id:"b1", day:"Comprendre", title:"À quoi sert une banque ? Le métier en clair", html:`
<p class="lead">Une banque collecte l'argent de ceux qui en ont (déposants) et le prête à ceux qui en ont besoin (emprunteurs). Elle gagne sa vie sur la différence entre les taux, et sur les services qu'elle facture.</p>
<h2>1. Les trois fonctions d'une banque</h2>
${T(["Fonction","En clair","Exemple"],[
["Intermédiation","Collecter des dépôts et accorder des crédits","Le salaire de Moussa est déposé, il sert à financer le crédit de Awa"],
["Transformation","Prêter à long terme avec des ressources souvent à court terme","Des dépôts à vue financent un crédit immobilier sur 15 ans"],
["Gestion des moyens de paiement","Tenir les comptes et exécuter les paiements","Virements, chèques, cartes, prélèvements, transferts internationaux"]])}
<p>La transformation est utile pour l'économie, mais elle crée le principal danger du métier : si tous les déposants veulent récupérer leur argent en même temps, la banque ne peut pas rendre ce qu'elle a prêté à 15 ans. C'est le <b>risque de liquidité</b>.</p>
<h2>2. Comment une banque gagne de l'argent</h2>
<ul><li><b>La marge d'intérêt</b> : intérêts reçus sur les crédits moins intérêts versés sur les dépôts et les emprunts. Un crédit à 9 % financé par des dépôts rémunérés à 3 % rapporte une marge de 6 points.</li>
<li><b>Les commissions</b> : tenue de compte, cartes, virements, transferts, crédit documentaire, cautions, banque à distance.</li>
<li><b>Les opérations de marché</b> : titres d'État, change.</li></ul>
<h2>3. Les grands indicateurs de résultat</h2>
${T(["Indicateur","Calcul simplifié","Ce qu'il dit"],[
["Produit net bancaire (PNB)","Intérêts reçus − intérêts payés + commissions nettes + gains nets sur titres et change","L'équivalent de la valeur ajoutée : ce que la banque gagne avec son métier"],
["Résultat brut d'exploitation","PNB − frais généraux − amortissements","Ce qui reste après avoir payé le fonctionnement"],
["Coefficient d'exploitation","Frais généraux ÷ PNB","Efficacité : plus il est bas, mieux c'est (souvent autour de 50 à 65 %)"],
["Coût du risque","Dotations nettes aux provisions sur créances + pertes sur créances irrécouvrables","Ce que coûtent les crédits qui tournent mal"],
["Résultat net","Résultat d'exploitation − coût du risque ± éléments exceptionnels − impôt",""]])}
<h2>4. Les acteurs autour d'une banque de l'UMOA</h2>
${T(["Acteur","Rôle"],[
["BCEAO","Banque centrale des huit États de l'UMOA (Bénin, Burkina Faso, Côte d'Ivoire, Guinée-Bissau, Mali, Niger, Sénégal, Togo). Émet le franc CFA, fixe les taux directeurs, édicte les règles prudentielles et comptables, gère les systèmes de paiement"],
["Commission bancaire de l'UMOA","Supervise les banques : contrôles sur place et sur pièces, sanctions, retrait d'agrément"],
["Ministère des Finances","Délivre l'agrément après avis conforme de la Commission bancaire"],
["CENTIF (au Sénégal)","Cellule de renseignement financier qui reçoit les déclarations de soupçon de blanchiment"],
["Commissaires aux comptes","Certifient les comptes et produisent des rapports spécifiques destinés au superviseur"],
["Bureau d'information sur le crédit","Centralise l'historique de crédit des emprunteurs pour aider les banques à décider"]])}
<div class="box key"><h4>Pourquoi le secteur est si réglementé</h4><p>Une banque utilise l'argent du public. Sa faillite peut entraîner d'autres banques (risque systémique). D'où des règles strictes : capital minimum, ratios prudentiels, contrôle interne, lutte contre le blanchiment, reporting régulier au superviseur.</p></div>
`},

{ id:"b2", day:"Comprendre", title:"Le bilan d'une banque et le plan comptable bancaire", html:`
<p class="lead">Le bilan d'une banque ne ressemble pas à celui d'une entreprise commerciale : pas de stocks, très peu d'immobilisations, et des dépôts de clients qui sont des dettes.</p>
<h2>1. Le principe inversé</h2>
<ul><li>Pour la banque, <b>les dépôts des clients sont des dettes</b> (passif) : elle doit les rendre.</li><li><b>Les crédits accordés sont des créances</b> (actif) : les clients doivent les rembourser.</li></ul>
<p>C'est pourquoi le relevé bancaire d'un client affiche un dépôt « au crédit » : dans la comptabilité de la banque, son compte (une dette) augmente au crédit.</p>
<h2>2. Bilan simplifié</h2>
${T(["Actif","Passif"],[
["Caisse et banque centrale (billets, réserves obligatoires à la BCEAO)","Dettes interbancaires (emprunts auprès d'autres banques et de la BCEAO)"],
["Créances interbancaires (prêts à d'autres banques)","Dépôts de la clientèle : comptes courants, épargne, dépôts à terme"],
["Crédits à la clientèle (nets des provisions)","Dettes représentées par un titre (certificats de dépôt, emprunts obligataires)"],
["Titres : bons et obligations du Trésor, actions","Autres passifs, comptes de régularisation"],
["Immobilisations","Provisions"],
["Autres actifs, comptes de régularisation","Fonds propres : capital, réserves, résultat"]])}
<h2>3. Le plan comptable bancaire révisé de l'UMOA</h2>
<p>Les banques n'utilisent pas le SYSCOHADA mais le <b>Plan comptable bancaire révisé (PCB révisé)</b> de l'UMOA, appliqué depuis 2018. Il est organisé par grandes familles d'opérations :</p>
${T(["Classe","Contenu"],[
["1","Opérations de trésorerie et opérations interbancaires"],
["2","Opérations avec la clientèle (crédits, comptes ordinaires, dépôts)"],
["3","Opérations sur titres et opérations diverses (dont comptes de régularisation et comptes d'attente)"],
["4","Valeurs immobilisées"],
["5","Provisions, fonds propres et assimilés"],
["6","Charges"],
["7","Produits"],
["9","Engagements hors bilan"]])}
<p>Les numéros exacts des comptes figurent dans le recueil du PCB révisé publié par la BCEAO. L'essentiel pour toi : reconnaître une opération interbancaire, une opération clientèle, un compte d'attente et un engagement hors bilan.</p>
<h2>4. Le hors bilan : les engagements</h2>
<p>Une banque prend des engagements qui ne sont pas encore des flux d'argent : <b>cautions</b> données pour un client (marché public, douane), <b>crédits documentaires</b> à l'import, <b>lignes de crédit</b> accordées mais non utilisées. Ils peuvent se transformer en décaissement si le client fait défaut : ils sont suivis en classe 9 et intégrés dans le calcul des risques.</p>
<h2>5. Exemple d'écritures, du point de vue de la banque</h2>
${E("Un client dépose 1 000 000 en espèces",[["Caisse","Caisse (actif)","1 000 000",""],["Comptes ordinaires de la clientèle","Compte du client (dette)","","1 000 000"]])}
${E("La banque débloque un crédit de 5 000 000 sur le compte du client",[["Crédits à moyen terme","Créance sur le client (actif)","5 000 000",""],["Comptes ordinaires de la clientèle","Compte du client (dette)","","5 000 000"]])}
${E("Prélèvement de l'échéance : 400 000 de capital et 50 000 d'intérêts",[["Comptes ordinaires de la clientèle","Compte du client","450 000",""],["Crédits à moyen terme","Remboursement du capital","","400 000"],["Intérêts sur crédits","Produit d'intérêts","","50 000"]])}
${X("pourquoi un dépôt à terme (DAT) de 100 millions d'une société est-il un passif pour la banque ?","<p>La banque a reçu l'argent mais doit le rendre à l'échéance, avec des intérêts. C'est une <b>dette envers le client</b>. L'actif correspondant est l'argent reçu (trésorerie) que la banque va prêter ou placer.</p>")}
`},

{ id:"b3", day:"Comprendre", title:"Les produits bancaires : dépôts, crédits, paiements", html:`
<p class="lead">Avant d'auditer une banque, il faut connaître ce qu'elle vend. Chaque produit a ses propres flux, ses propres paramètres dans le système et ses propres risques.</p>
<h2>1. Les ressources (ce que la banque reçoit)</h2>
${T(["Produit","Caractéristiques"],[
["Compte courant / compte chèque","Dépôt à vue, disponible à tout moment, en général non rémunéré, avec frais de tenue de compte"],
["Compte d'épargne","Rémunéré, retraits limités"],
["Dépôt à terme (DAT)","Bloqué pendant une durée fixée, taux plus élevé, pénalité en cas de retrait anticipé"],
["Bons de caisse, certificats de dépôt","Titres émis par la banque pour se financer"],
["Refinancement","Emprunts sur le marché interbancaire et auprès de la BCEAO (en échange de titres en garantie)"]])}
<h2>2. Les emplois (ce que la banque prête)</h2>
${T(["Produit","Durée","Exemple"],[
["Découvert autorisé, facilité de caisse","Court terme","Une PME couvre un décalage de trésorerie"],
["Escompte d'effets, affacturage","Court terme","La banque avance l'argent d'une facture client avant son échéance"],
["Crédit de campagne","Court terme","Financement de la commercialisation de l'arachide ou du coton"],
["Crédit à moyen terme","2 à 7 ans","Achat de matériel, de véhicules"],
["Crédit à long terme","Plus de 7 ans","Immobilier, gros investissements"],
["Crédit-bail (leasing)","Moyen terme","La banque achète le bien et le loue au client avec option d'achat"],
["Crédit aux particuliers","Variable","Prêt personnel, prêt immobilier, avance sur salaire, souvent prélevé sur le salaire domicilié"]])}
<h2>3. Le financement du commerce international</h2>
<ul><li><b>Crédit documentaire</b> : la banque de l'importateur s'engage à payer l'exportateur contre remise de documents conformes (connaissement, facture, certificat d'origine).</li><li><b>Remise documentaire</b> : la banque transmet les documents contre paiement ou acceptation, sans s'engager elle-même.</li><li><b>Garanties et cautions</b> : soumission, bonne exécution, restitution d'acompte, caution douanière.</li><li><b>Transferts</b> via le réseau SWIFT, soumis à la réglementation des changes (justificatifs pour les paiements hors UEMOA).</li></ul>
<h2>4. Les systèmes de paiement de l'UEMOA</h2>
${T(["Système","Rôle"],[
["STAR-UEMOA","Système de règlement brut en temps réel (RTGS) pour les paiements de gros montants entre banques"],
["SICA-UEMOA","Système de compensation des chèques, virements et effets de faible montant"],
["GIM-UEMOA","Groupement interbancaire monétique : interopérabilité des cartes dans la zone"],
["SWIFT","Messagerie sécurisée pour les virements internationaux"],
["Systèmes de paiement instantané","Interopérabilité en cours de déploiement entre banques, émetteurs de monnaie électronique et microfinance"]])}
<h2>5. Le cycle de vie d'un crédit</h2>
<ol><li><b>Demande</b> et constitution du dossier (états financiers, bulletins de salaire, garanties proposées).</li><li><b>Analyse</b> : capacité de remboursement, endettement, consultation du bureau d'information sur le crédit.</li><li><b>Décision</b> selon les délégations de pouvoir (agence, comité de crédit, conseil d'administration pour les gros montants ou les parties liées).</li><li><b>Mise en place</b> : signature du contrat, prise des garanties (hypothèque, nantissement, caution), déblocage des fonds.</li><li><b>Suivi</b> : échéances, impayés, revues annuelles.</li><li><b>Recouvrement</b> amiable puis contentieux si le client ne paie plus.</li></ol>
<div class="box key"><h4>Points d'audit</h4><p>Respect des délégations (un crédit au-delà du plafond de l'agence doit avoir l'accord du comité), garanties réellement prises <b>avant</b> le déblocage, conditions de taux conformes à la grille, et dans le système : seules les personnes habilitées peuvent modifier un taux, une échéance ou un statut d'impayé.</p></div>
`},

{ id:"b4", day:"Risques", title:"Le risque de crédit : impayés, classement et provisions", html:`
<p class="lead">Le risque de crédit est le premier risque d'une banque de l'UMOA. Une grande partie du travail d'audit porte sur la question : les crédits qui tournent mal sont-ils bien identifiés et suffisamment provisionnés ?</p>
<h2>1. Du crédit sain au crédit compromis</h2>
${T(["Catégorie","Situation typique","Conséquence"],[
["Créance saine","Le client paie à l'échéance","Pas de provision individuelle (une provision générale peut s'appliquer)"],
["Créance sous surveillance / restructurée","Premiers retards, difficultés, échéancier renégocié","Suivi renforcé ; règles spécifiques pour les crédits restructurés"],
["Créance en souffrance (douteuse ou litigieuse)","Impayé au-delà d'un délai fixé par la réglementation (en général 90 jours), procédure collective, contentieux","Déclassement obligatoire, arrêt de la comptabilisation des intérêts en produits, provision"],
["Créance irrécouvrable","Aucune chance raisonnable de recouvrement","Passage en perte, reprise de la provision"]])}
<p>Les règles précises de classement et de provisionnement sont fixées par une instruction de la BCEAO. Les groupes bancaires qui publient aussi en IFRS appliquent <b>IFRS 9</b>, qui provisionne les pertes attendues dès l'origine en trois « stages » (1 : sain, 2 : dégradation significative du risque, 3 : défaut).</p>
<h2>2. Le provisionnement</h2>
<p>La provision couvre la partie de la créance qu'on ne pense pas récupérer. On peut tenir compte de certaines garanties (hypothèque, dépôt bloqué), selon les conditions et décotes fixées par les textes.</p>
<p>Exemple : créance douteuse de 50 000 000, hypothèque valorisée à 30 000 000 après décote. Si la réglementation autorise à déduire la garantie, la provision minimale porte sur 20 000 000. Si l'hypothèque n'est pas correctement inscrite, elle ne peut pas être retenue : la provision passe à 50 000 000.</p>
<h2>3. Intérêts réservés</h2>
<p>Quand une créance est déclassée, la banque ne doit plus enregistrer les intérêts qui courent comme des produits, puisqu'elle ne les encaissera probablement pas. Ils sont « réservés » (mis de côté) et ne seront constatés en produit qu'en cas d'encaissement. Un auditeur vérifie que le système arrête automatiquement la constatation des intérêts au moment du déclassement.</p>
<h2>4. Les autres règles prudentielles sur le crédit</h2>
<ul><li><b>Division des risques</b> : les engagements sur un même bénéficiaire (ou groupe lié) ne doivent pas dépasser un pourcentage des fonds propres (25 % dans le dispositif de l'UMOA à la date de rédaction).</li><li><b>Prêts aux parties liées</b> (dirigeants, actionnaires, administrateurs) : plafonnés et soumis à autorisation du conseil.</li><li><b>Concentration sectorielle</b> : suivie par la direction des risques.</li></ul>
<h2>5. Les tests d'audit sur le portefeuille de crédits</h2>
${T(["Test","Objectif"],[
["Extraire du système tous les crédits avec leur nombre de jours d'impayés","Vérifier que chaque créance au-delà du seuil est bien déclassée"],
["Recalculer l'ancienneté des impayés à partir des échéanciers","Détecter les manipulations (rééchelonnements répétés pour « remettre à zéro » les retards)"],
["Examiner un échantillon de dossiers","Garanties existantes, inscrites et évaluées ; décisions conformes aux délégations"],
["Analyser les crédits restructurés","Éviter que des créances douteuses soient maquillées en créances saines"],
["Revue des droits dans le système","Qui peut modifier une date d'échéance, un statut, un taux ?"],
["Rapprocher la balance de la base crédits","Les encours du système de gestion des crédits sont-ils égaux à la comptabilité ?"]])}
${X("un crédit présente 120 jours d'impayés mais reste classé sain. Le chargé de clientèle explique qu'il a été rééchelonné la semaine dernière. Que fais-tu ?","<p>Vérifier que la restructuration a été approuvée au bon niveau, qu'elle est documentée et que le crédit a été classé en <b>créance restructurée</b> selon les règles BCEAO, pas en créance saine ordinaire. Analyser l'historique : combien de rééchelonnements ? Un crédit rééchelonné plusieurs fois sans remboursement réel doit en principe être déclassé et provisionné. Vérifier aussi qui a modifié l'échéancier dans le système et si cette personne en avait le droit.</p>")}
`},

{ id:"b5", day:"Risques", title:"Fonds propres, liquidité et ratios prudentiels (Bâle)", html:`
<p class="lead">Les accords de Bâle fixent les règles internationales de solidité des banques. L'UMOA les applique depuis 2018 dans son dispositif prudentiel (Bâle II et III adaptés).</p>
<h2>1. Les trois piliers</h2>
${T(["Pilier","Contenu"],[
["Pilier 1","Exigences minimales de fonds propres pour couvrir les risques de crédit, de marché et opérationnel"],
["Pilier 2","Surveillance par le superviseur : évaluation interne de l'adéquation des fonds propres, gouvernance, gestion des risques"],
["Pilier 3","Discipline de marché : publication d'informations sur les risques et les fonds propres"]])}
<h2>2. Le ratio de solvabilité</h2>
<p><b>Ratio = Fonds propres ÷ Actifs pondérés par les risques (RWA)</b>. Chaque actif est pondéré selon son risque : un prêt à l'État dans sa monnaie peut être pondéré à 0 %, un crédit immobilier garanti moins qu'un crédit à une entreprise non notée (100 %).</p>
<p>Dans l'UMOA, à la date de rédaction, le minimum total est de 11,5 % (8 % de base + 2,5 % de coussin de conservation, avec des minima sur les fonds propres de base durs), auquel peuvent s'ajouter des exigences pour les banques d'importance systémique.</p>
<p>Exemple : fonds propres 30 milliards ; RWA 240 milliards → ratio 12,5 %. Si la banque accorde 40 milliards de crédits pondérés à 100 % sans augmenter ses fonds propres, le ratio tombe à 30 ÷ 280 = 10,7 % : il passe sous le minimum.</p>
<h2>3. Les ratios de liquidité</h2>
${T(["Ratio","Question posée","Minimum"],[
["LCR (ratio de liquidité à court terme)","La banque a-t-elle assez d'actifs liquides pour tenir 30 jours de crise ?","100 %"],
["NSFR (ratio de financement stable net)","Les emplois à long terme sont-ils financés par des ressources stables ?","100 %"]])}
<h2>4. Le ratio de levier</h2>
<p>Fonds propres de base ÷ exposition totale (sans pondération). Il évite qu'une banque gonfle son bilan avec des actifs faiblement pondérés.</p>
<h2>5. Les reportings réglementaires</h2>
<p>Les banques transmettent régulièrement à la BCEAO et à la Commission bancaire des états prudentiels et comptables. Pour l'auditeur IT, ces reportings sont un sujet important : ils sont souvent produits par des requêtes et des outils hors du système central. Il faut tester :</p>
<ul><li>l'exhaustivité et l'exactitude des données extraites ;</li><li>les contrôles sur les fichiers intermédiaires (Excel modifiables à la main) ;</li><li>la piste d'audit entre la comptabilité et l'état transmis ;</li><li>les changements apportés aux requêtes et aux paramètres de pondération.</li></ul>
${X("fonds propres : 18 milliards ; RWA : 160 milliards. Le ratio respecte-t-il un minimum de 11,5 % ? Quelle marge de crédits pondérés à 100 % reste-t-il ?","<p>Ratio = 18 ÷ 160 = <b>11,25 %</b> : insuffisant. Pour atteindre 11,5 % sans nouveaux fonds propres, les RWA devraient baisser à 18 ÷ 0,115 ≈ 156,5 milliards. Il n'y a donc aucune marge : la banque doit réduire ses risques ou augmenter ses fonds propres.</p>")}
`},

{ id:"b6", day:"Risques", title:"Risques opérationnels, fraude et lutte contre le blanchiment", html:`
<p class="lead">Une banque peut perdre de l'argent sans qu'aucun client ne fasse défaut : une erreur de traitement, une fraude interne, une cyberattaque ou une sanction pour blanchiment.</p>
<h2>1. Les familles de risque opérationnel</h2>
${T(["Famille","Exemple bancaire"],[
["Fraude interne","Un caissier détourne des espèces ; un agent crée de faux crédits à des prête-noms"],
["Fraude externe","Faux chèques, usurpation d'identité, piratage de comptes de banque en ligne, fraude aux cartes"],
["Pratiques commerciales","Frais non contractuels prélevés aux clients"],
["Dommages aux actifs","Incendie d'une agence"],
["Interruption des systèmes","Panne du système central, indisponibilité des GAB"],
["Exécution des processus","Virement exécuté deux fois, erreur de saisie de montant"]])}
<h2>2. Les points sensibles en agence</h2>
<ul><li><b>Caisse</b> : arrêtés de caisse quotidiens, double contrôle pour les gros montants, plafonds par caissier.</li><li><b>Comptes dormants</b> : comptes sans mouvement depuis longtemps, cible privilégiée des fraudeurs internes. Ils doivent être bloqués et leur réactivation contrôlée.</li><li><b>Comptes internes et comptes d'attente</b> : les fonds y transitent ; des soldes anciens non justifiés peuvent masquer un détournement.</li><li><b>Modification des données clients</b> : changement d'adresse, de téléphone ou de signature avant un retrait frauduleux.</li></ul>
<h2>3. La lutte contre le blanchiment et le financement du terrorisme (LBC/FT)</h2>
<p>Le <b>blanchiment</b> consiste à donner une apparence légale à de l'argent d'origine criminelle. Trois étapes : <b>placement</b> (faire entrer l'argent dans le système), <b>empilement</b> (multiplier les opérations pour brouiller la piste), <b>intégration</b> (réinvestir dans l'économie légale).</p>
<p>Dans l'UMOA, une loi uniforme LBC/FT/FP impose aux banques :</p>
<ul><li>de <b>connaître leur client</b> (KYC) : identité, activité, origine des fonds, bénéficiaire effectif ;</li><li>d'appliquer une <b>vigilance renforcée</b> pour les clients à risque, dont les personnes politiquement exposées (PPE) ;</li><li>de <b>filtrer</b> les clients et les virements contre les listes de sanctions ;</li><li>de <b>surveiller</b> les opérations inhabituelles et de faire une <b>déclaration de soupçon</b> à la CENTIF ;</li><li>de <b>conserver</b> les documents pendant au moins dix ans.</li></ul>
<div class="box key"><h4>Audit IT de la LBC/FT</h4><p>Tester l'outil de filtrage (les listes sont-elles mises à jour ? le seuil de correspondance est-il trop permissif ?), l'outil de profilage (les scénarios d'alerte sont-ils actifs et adaptés ?), le traitement des alertes (délais, justification des clôtures) et l'exhaustivité des données envoyées à ces outils (tous les comptes et toutes les opérations y arrivent-ils ?).</p></div>
<h2>4. Contrôle interne bancaire</h2>
<p>La réglementation impose trois lignes : les métiers (contrôle permanent de premier niveau), les fonctions de contrôle (risques, conformité, contrôle permanent), et l'audit interne. Le conseil d'administration s'appuie sur un comité d'audit et un comité des risques.</p>
${X("lors d'une revue, tu trouves un compte dormant depuis cinq ans réactivé hier par un agent, suivi d'un retrait de 15 millions en espèces le même jour. Quelles vérifications ?","<p>Qui a demandé et validé la réactivation (procédure, pièces d'identité, double validation) ? La signature du client a-t-elle été vérifiée ? Les coordonnées ont-elles été modifiées juste avant ? Le retrait respecte-t-il les plafonds et le double contrôle ? Le titulaire peut-il être joint par un canal indépendant ? Dans le système : l'agent a-t-il le droit de réactiver <b>et</b> de valider un retrait ? Ce cas doit être escaladé immédiatement (fraude interne possible).</p>")}
`},

{ id:"b7", day:"Audit IT", title:"Le système d'information bancaire et son audit", html:`
<p class="lead">Dans une banque, presque tout est automatisé : calcul des intérêts, des frais, des impayés, des provisions, production des états réglementaires. L'audit IT y est donc central.</p>
<h2>1. L'architecture type</h2>
${T(["Composant","Rôle"],[
["Système bancaire central (core banking)","Clients, comptes, crédits, dépôts, calcul des intérêts et frais, comptabilité. Exemples de progiciels : Temenos T24/Transact, Oracle Flexcube, Sopra Amplitude, Delta…"],
["Monétique","Cartes, GAB, terminaux de paiement, interface avec GIM-UEMOA et les réseaux internationaux"],
["Banque à distance","Application mobile, site web, SMS, interfaces avec les opérateurs de mobile money"],
["SWIFT","Messagerie des virements internationaux"],
["Outils de conformité","Filtrage des sanctions, profilage LBC, déclarations"],
["Reporting réglementaire et décisionnel","Entrepôt de données, outils de génération des états BCEAO"],
["Interfaces","Échanges entre tous ces systèmes, souvent par fichiers"]])}
<h2>2. Le traitement de fin de journée (batch)</h2>
<p>Chaque soir, le système central exécute le <b>traitement de fin de journée</b> : calcul et imputation des intérêts courus, prélèvement des échéances, application des frais, mise à jour des statuts d'impayés, génération des écritures comptables. Un auditeur vérifie :</p>
<ul><li>que les traitements se sont terminés sans erreur (journaux d'exécution) ;</li><li>que les anomalies sont suivies et corrigées ;</li><li>qui peut lancer, arrêter ou relancer ces traitements ;</li><li>que la date système ne peut pas être modifiée sans contrôle.</li></ul>
<h2>3. Les ITGC en banque</h2>
${T(["Domaine","Points d'attention spécifiques"],[
["Gestion des accès","Profils par métier ; séparation saisie / validation (« maker / checker ») ; accès des informaticiens à la production ; comptes génériques ; revue périodique ; départs"],
["Gestion des changements","Changements du paramétrage (taux, frais, règles de déclassement) traités comme des changements applicatifs : demande, test, approbation, traçabilité"],
["Exploitation","Batch, sauvegardes, supervision, gestion des incidents"],
["Développement et projets","Migration de données lors d'un changement de core banking : contrôles de complétude et d'exactitude"]])}
<h2>4. Les contrôles applicatifs clés</h2>
<ul><li>Calcul correct des intérêts et frais (recalcul sur échantillon).</li><li>Blocage automatique des retraits au-delà du solde disponible ou de l'autorisation.</li><li>Déclassement automatique selon le nombre de jours d'impayés.</li><li>Double validation au-delà d'un montant.</li><li>Rapprochements automatiques : comptes de correspondants (nostro), compensation, monétique, mobile money.</li></ul>
<h2>5. La sécurité SWIFT</h2>
<p>SWIFT impose à ses membres un cadre de contrôles de sécurité (Customer Security Programme) avec une attestation annuelle : isolement de l'environnement SWIFT, comptes à privilèges protégés, authentification forte, journalisation, détection des anomalies, rapprochement des messages envoyés avec la comptabilité. De grandes fraudes internationales ont exploité des faiblesses à ce niveau.</p>
<h2>6. Rapprochements à vérifier</h2>
${T(["Rapprochement","Pourquoi"],[
["Comptes nostro (comptes de la banque chez ses correspondants étrangers)","Détecter des paiements non comptabilisés ou frauduleux"],
["Compensation (SICA) et règlements (STAR)","Écarts entre opérations échangées et comptabilisées"],
["Monétique","Transactions cartes et GAB ; caisses des GAB"],
["Mobile money / wallets","Comptes de règlement avec les émetteurs de monnaie électronique"],
["Base crédits et dépôts / comptabilité","Cohérence entre les modules et le grand livre"]])}
<div class="box key"><h4>Tes atouts</h4><p>Ton expérience de la revue des accès, des matrices de séparation des tâches et des requêtes SQL sur Oracle s'applique directement : les core bankings reposent très souvent sur Oracle, et les tests les plus utiles consistent à extraire les profils, les transactions et les journaux pour les analyser.</p></div>
`},

{ id:"b8", day:"Audit IT", title:"Mener l'audit d'une banque : programme de travail", html:`
<p class="lead">Ce module rassemble tout en un programme de travail type pour le volet IT d'un commissariat aux comptes bancaire.</p>
<h2>1. Comprendre l'environnement</h2>
<ul><li>Cartographie des applications qui alimentent les comptes : core banking, monétique, SWIFT, trésorerie, reporting.</li><li>Infrastructures (serveurs, bases de données, hébergement, prestataires).</li><li>Changements de l'année : migration, nouvelle version, nouveau produit, nouvelle application mobile.</li><li>Rapports précédents : Commission bancaire, audit interne, auditeurs externes, tests d'intrusion.</li></ul>
<h2>2. Programme ITGC</h2>
${T(["Contrôle","Test"],[
["Création et modification des accès approuvées","Échantillon de créations : demande, approbation, droits conformes"],
["Retrait des accès des partants","Liste RH des départs comparée aux comptes actifs et à la date de dernière connexion"],
["Revue périodique des accès","Preuve de la revue, corrections effectuées"],
["Comptes à privilèges","Liste des administrateurs du core banking et des bases ; justification ; journalisation"],
["Maker / checker","Extraction des profils : aucun utilisateur ne peut saisir et valider la même opération"],
["Changements","Échantillon de changements (programmes et paramètres) : approbation, test, mise en production par une personne différente du développeur"],
["Batch et incidents","Journaux de fin de journée, tickets d'incidents, actions correctives"],
["Sauvegardes","Planification, réussite, tests de restauration"]])}
<h2>3. Programme sur les processus</h2>
${T(["Processus","Test"],[
["Crédits","Recalcul des jours d'impayés et du classement ; tests de provisions ; parties liées"],
["Intérêts et commissions","Recalcul sur échantillon ; analyse de la marge par produit"],
["Dépôts","Confirmation de soldes ; comptes dormants ; comptes internes"],
["Trésorerie et interbancaire","Confirmations ; rapprochements nostro et BCEAO"],
["Comptes d'attente","Ancienneté, justification, apurement"],
["LBC/FT","Filtrage, alertes, KYC sur échantillon"],
["Reporting réglementaire","Rapprochement des états prudentiels avec la comptabilité"]])}
<h2>4. Analyses de données utiles</h2>
<ul><li>Opérations passées par des utilisateurs en dehors de leurs horaires ou de leur agence.</li><li>Crédits débloqués sans garantie enregistrée.</li><li>Comptes clients avec le même téléphone ou la même adresse que des employés.</li><li>Frais ou intérêts annulés manuellement (« extournes ») en grand nombre par un même agent.</li><li>Écritures manuelles sur les comptes de produits en fin d'année.</li></ul>
<h2>5. Rédiger un constat</h2>
<p>Un bon constat suit toujours la même structure : <b>constat</b> (ce que tu as vu, chiffré), <b>critère</b> (la règle ou la bonne pratique), <b>cause</b>, <b>risque</b> (impact sur les comptes, la conformité ou la sécurité), <b>recommandation</b> et <b>réponse de la direction</b>.</p>
${X("rédige un constat pour la situation suivante : 14 utilisateurs du core banking peuvent à la fois saisir et valider des virements de plus de 10 millions.","<p><b>Constat</b> : 14 utilisateurs disposent à la fois du droit de saisie et du droit de validation des virements supérieurs à 10 millions. <b>Critère</b> : principe de séparation des tâches (maker / checker) prévu par la politique de sécurité et les règles de contrôle interne. <b>Cause</b> : profils historiques non revus, absence de matrice SoD dans le processus d'habilitation. <b>Risque</b> : virement frauduleux ou erroné exécuté sans contrôle indépendant, perte financière, atteinte à l'image. <b>Recommandation</b> : retirer l'un des deux droits, formaliser une matrice de tâches incompatibles appliquée lors de chaque habilitation, analyser les virements validés par leur propre auteur sur l'exercice.</p>")}
`}
];

CERTS.push({
  id:"banque", title:"Banque", org:"Secteur d'activité · UMOA",
  intro:"Comprendre le métier bancaire, son vocabulaire, sa comptabilité et ses risques, puis savoir auditer une banque de l'UMOA, notamment sur le volet informatique. Aucune connaissance préalable du secteur n'est nécessaire ; il est conseillé d'avoir suivi le cours de comptabilité.",
  examMinutes:45, examQuestions:30, passMark:70,
  exam:`<p>Test de connaissances interne au campus : 30 questions tirées au hasard, 45 minutes, seuil conseillé 70 %.</p><div class="box tip"><h4>Pour aller plus loin</h4><p>Lis le dispositif prudentiel, le plan comptable bancaire révisé et la loi uniforme LBC/FT publiés sur le site de la BCEAO, ainsi que le rapport annuel de la Commission bancaire.</p></div>`,
  modules,
  pages:[{ id:"lexique", title:"Lexique bancaire", html:`
<p class="lead">Les mots qu'on entend en mission dans une banque.</p>
${T(["Terme","Définition"],[
["Agios","Intérêts et frais facturés sur un découvert"],
["Arrêté de caisse","Comptage et rapprochement de la caisse en fin de journée"],
["Bâle (accords de)","Règles internationales de solvabilité et de liquidité des banques"],
["BCEAO","Banque centrale des États de l'Afrique de l'Ouest"],
["Bénéficiaire effectif","Personne physique qui contrôle réellement un client personne morale"],
["Bureau d'information sur le crédit","Organisme qui centralise l'historique de crédit des emprunteurs"],
["Caution bancaire","Engagement de la banque de payer à la place de son client s'il est défaillant"],
["CENTIF","Cellule nationale de traitement des informations financières (renseignement anti-blanchiment)"],
["Coefficient d'exploitation","Frais généraux ÷ PNB"],
["Commission bancaire","Superviseur des banques de l'UMOA"],
["Compte dormant","Compte sans mouvement à l'initiative du client depuis une longue période"],
["Compte nostro / vostro","Compte de la banque chez un correspondant / compte d'un correspondant chez la banque"],
["Core banking","Système informatique central de la banque"],
["Coût du risque","Charge annuelle liée aux crédits qui ne seront pas remboursés"],
["Créance en souffrance","Crédit impayé ou douteux à déclasser et provisionner"],
["Crédit documentaire","Engagement de paiement d'une banque à un exportateur contre documents conformes"],
["Crédit-bail","Location d'un bien avec option d'achat, financée par la banque"],
["DAT","Dépôt à terme : somme bloquée pour une durée fixée contre rémunération"],
["Déclaration de soupçon","Signalement à la CENTIF d'une opération suspecte"],
["Division des risques","Plafond des engagements sur un même bénéficiaire"],
["Domiciliation de salaire","Engagement de faire verser son salaire sur le compte de la banque prêteuse"],
["Escompte","Avance du montant d'un effet de commerce avant son échéance"],
["Fonds propres","Capital et réserves qui absorbent les pertes"],
["Garantie","Sûreté qui protège la banque : hypothèque, nantissement, caution, dépôt bloqué"],
["GIM-UEMOA","Groupement interbancaire monétique de l'UEMOA"],
["Intérêts réservés","Intérêts d'une créance douteuse non constatés en produit"],
["KYC","Know Your Customer : connaissance du client"],
["LBC/FT","Lutte contre le blanchiment de capitaux et le financement du terrorisme"],
["LCR / NSFR","Ratios de liquidité à court terme / de financement stable"],
["Maker / checker","Principe de double contrôle : un saisit, un autre valide"],
["Marge d'intérêt","Intérêts reçus − intérêts payés"],
["Marché interbancaire","Marché où les banques se prêtent entre elles"],
["PCB révisé","Plan comptable bancaire de l'UMOA"],
["PNB","Produit net bancaire"],
["PPE","Personne politiquement exposée"],
["Provision","Montant mis de côté pour couvrir une perte probable sur un crédit"],
["Ratio de solvabilité","Fonds propres ÷ actifs pondérés par les risques"],
["Refinancement","Emprunt de la banque auprès de la BCEAO ou d'autres banques"],
["Réserves obligatoires","Dépôts que chaque banque doit maintenir à la BCEAO"],
["Restructuration","Renégociation des conditions d'un crédit en difficulté"],
["RWA","Actifs pondérés par les risques"],
["SICA-UEMOA","Système de compensation interbancaire"],
["STAR-UEMOA","Système de règlement brut en temps réel"],
["SWIFT","Réseau de messagerie des paiements internationaux"],
["Taux directeur","Taux auquel la BCEAO prête aux banques"],
["Transformation","Prêter à long terme avec des ressources à court terme"],
["UMOA / UEMOA","Union monétaire / Union économique et monétaire ouest-africaine"]])}
`}],
  questions:[]
});
})();
