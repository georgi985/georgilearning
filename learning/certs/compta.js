/* Comptabilité générale pas à pas (SYSCOHADA révisé). Cours original rédigé pour débutants.
   Les montants sont en FCFA et fictifs. Les taux (TVA 18 %, cotisations) sont des exemples : vérifier les textes en vigueur.
   Partie 1 : modules 1 à 7. La suite est dans compta-2.js. */
(function(){
const T = (head, rows) => '<div class="tablewrap"><table><thead><tr>' + head.map(h => '<th>' + h + '</th>').join('') + '</tr></thead><tbody>' + rows.map(r => '<tr>' + r.map(c => '<td>' + c + '</td>').join('') + '</tr>').join('') + '</tbody></table></div>';
/* Écriture comptable : [compte, libellé, débit, crédit] */
const E = (title, rows) => (title ? '<p><b>' + title + '</b></p>' : '') + '<div class="tablewrap"><table><thead><tr><th>Compte</th><th>Libellé</th><th class="num">Débit</th><th class="num">Crédit</th></tr></thead><tbody>' + rows.map(r => '<tr><td>' + r[0] + '</td><td>' + r[1] + '</td><td class="num">' + (r[2] || '') + '</td><td class="num">' + (r[3] || '') + '</td></tr>').join('') + '</tbody></table></div>';
const X = (q, a) => '<details><summary>Exercice : ' + q + '</summary>' + a + '</details>';
window.__GL = {T, E, X};

const modules = [
{ id:"m1", day:"Bases", title:"À quoi sert la comptabilité ? Le cadre OHADA", html:`
<p class="lead">La comptabilité est le langage de l'entreprise. Elle enregistre chaque opération qui a une valeur en argent, puis la résume dans des états que tout le monde peut lire : dirigeants, banquiers, administration fiscale, actionnaires et auditeurs.</p>
<h2>1. Une idée simple</h2>
<p>Imagine une boutique. Chaque jour, elle achète des marchandises, les revend, paie un loyer, encaisse de l'argent, verse des salaires. Si on note tout cela de façon ordonnée, on peut répondre à trois questions :</p>
<ol><li><b>Qu'est-ce que l'entreprise possède et qu'est-ce qu'elle doit ?</b> C'est le <b>bilan</b>.</li><li><b>A-t-elle gagné ou perdu de l'argent sur l'année ?</b> C'est le <b>compte de résultat</b>.</li><li><b>D'où vient l'argent et où est-il parti ?</b> C'est le <b>tableau des flux de trésorerie</b>.</li></ol>
<p>La comptabilité générale (ou financière) sert à produire ces documents de façon normalisée, pour que deux entreprises différentes soient comparables.</p>
<h2>2. Qui utilise les comptes ?</h2>
${T(["Utilisateur","Ce qu'il cherche"],[
["Dirigeants","Piloter : marge, coûts, trésorerie disponible"],
["Actionnaires et associés","Savoir si l'entreprise est rentable et combien elle peut distribuer"],
["Banques","Décider d'un crédit : capacité de remboursement, endettement"],
["Administration fiscale","Calculer l'impôt sur les sociétés et vérifier la TVA"],
["Salariés, fournisseurs, clients","Juger de la solidité de l'entreprise"],
["Commissaire aux comptes (auditeur)","Certifier que les comptes sont réguliers, sincères et donnent une image fidèle"]])}
<h2>3. Le cadre juridique : OHADA et SYSCOHADA</h2>
<p>Le Sénégal fait partie de l'<b>OHADA</b> (Organisation pour l'harmonisation en Afrique du droit des affaires), qui regroupe 17 États d'Afrique de l'Ouest et du Centre. L'OHADA adopte des <b>Actes uniformes</b>, directement applicables dans chaque État membre.</p>
<ul>
<li>L'<b>Acte uniforme relatif au droit comptable et à l'information financière</b> (AUDCIF), adopté en 2017, fixe les règles comptables. Il est appliqué depuis le 1<sup>er</sup> janvier 2018 pour les comptes individuels et depuis 2019 pour les comptes consolidés.</li>
<li>Il est accompagné du <b>Système comptable OHADA révisé</b> (SYSCOHADA révisé) : le plan de comptes, le fonctionnement de chaque compte, les modèles d'états financiers.</li>
<li>Les entités cotées en bourse ou faisant appel public à l'épargne doivent aussi établir des comptes consolidés en <b>normes IFRS</b> (normes internationales).</li>
<li>Les banques (Plan comptable bancaire de l'UMOA), les assurances (code CIMA) et les systèmes financiers décentralisés ont leurs propres référentiels. Tu les verras dans les cours sectoriels.</li>
</ul>
<h2>4. Les deux systèmes du SYSCOHADA</h2>
${T(["Système","Pour qui ?","Ce qu'on produit"],[
["Système normal","La grande majorité des sociétés","Bilan, compte de résultat, tableau des flux de trésorerie, notes annexes"],
["Système minimal de trésorerie (SMT)","Très petites entités dont le chiffre d'affaires est sous les seuils fixés par l'Acte uniforme","Une comptabilité de recettes et dépenses, simplifiée"]])}
<h2>5. L'exercice comptable</h2>
<p>Les comptes sont arrêtés à la fin d'une période de 12 mois appelée <b>exercice</b>. Dans l'espace OHADA, l'exercice correspond en principe à l'année civile : du 1<sup>er</sup> janvier au 31 décembre. La fin de l'exercice s'appelle la <b>clôture</b>. Les états financiers doivent ensuite être arrêtés par les dirigeants puis approuvés par l'assemblée des associés.</p>
<h2>6. Les grands principes comptables</h2>
<p>Ces principes guident toutes les décisions. Un auditeur les invoque en permanence.</p>
${T(["Principe","En clair","Exemple"],[
["Continuité d'exploitation","On suppose que l'entreprise continuera son activité","Si la faillite est probable, les actifs ne sont plus évalués de la même façon"],
["Prudence","On ne compte pas un gain incertain, mais on tient compte d'une perte probable","Un client en difficulté : on déprécie sa créance"],
["Coût historique","Un bien est enregistré à son prix d'achat","Un terrain acheté 10 millions reste à 10 millions, même s'il vaut plus aujourd'hui"],
["Indépendance des exercices (séparation)","Chaque charge et chaque produit sont rattachés à l'année qu'ils concernent","La facture d'électricité de décembre, reçue en janvier, est une charge de décembre"],
["Permanence des méthodes","On garde les mêmes méthodes d'une année sur l'autre","On ne change pas la durée d'amortissement pour embellir le résultat"],
["Intangibilité du bilan d'ouverture","Le bilan d'ouverture d'une année est égal au bilan de clôture de l'année précédente","Aucune écriture « cachée » entre deux exercices"],
["Non-compensation","On ne compense pas une dette avec une créance, une charge avec un produit","Un client qui est aussi fournisseur apparaît des deux côtés"],
["Importance significative","Ce qui peut influencer la décision d'un lecteur doit être présenté","Un litige important est expliqué dans les notes annexes"],
["Prééminence de la réalité sur l'apparence","On traduit la réalité économique, pas seulement la forme juridique","Un bien loué avec option d'achat très probable est traité comme un bien acquis à crédit (location-acquisition)"]])}
<div class="box key"><h4>Pourquoi c'est important pour un auditeur</h4><p>Le commissaire aux comptes certifie que les comptes sont <b>réguliers</b> (conformes aux règles), <b>sincères</b> (appliqués de bonne foi) et donnent une <b>image fidèle</b> du patrimoine, de la situation financière et du résultat. Chaque anomalie que tu trouves s'explique par l'un de ces principes.</p></div>
<div class="box tip"><h4>Méthode de travail</h4><p>Dans ce cours, chaque module se termine par des exercices corrigés. Essaie toujours de faire l'exercice sur papier avant d'ouvrir la correction : c'est la seule façon d'apprendre la comptabilité.</p></div>
`},

{ id:"m2", day:"Bases", title:"Le bilan et le compte de résultat : la photo et le film", html:`
<p class="lead">Le bilan est une <b>photo</b> de l'entreprise à une date donnée. Le compte de résultat est le <b>film</b> de l'année : tout ce qui a enrichi ou appauvri l'entreprise.</p>
<h2>1. Le bilan : ce que l'entreprise a et ce qu'elle doit</h2>
<p>Le bilan comporte deux colonnes :</p>
<ul><li>À gauche, l'<b>actif</b> : tout ce que l'entreprise possède ou contrôle et qui lui rapportera de l'argent (bâtiments, matériel, stocks, créances sur clients, argent en banque).</li>
<li>À droite, le <b>passif</b> : d'où viennent les ressources qui ont financé cet actif (apports des associés, bénéfices conservés, emprunts, dettes envers les fournisseurs et l'État).</li></ul>
<div class="box key"><h4>L'équation fondamentale</h4><p><b>Actif = Capitaux propres + Dettes</b>. Le bilan est toujours équilibré, parce que tout ce que l'entreprise possède a été financé par quelqu'un : soit par ses propriétaires, soit par des tiers.</p></div>
<h2>2. Exemple : la boutique de Fatou</h2>
<p>Fatou crée une boutique. Elle apporte 3 000 000 FCFA de ses économies et emprunte 2 000 000 à la banque. Elle achète un réfrigérateur de 1 500 000 et des marchandises pour 1 000 000. Il reste 2 500 000 en banque.</p>
${T(["Actif","Montant","Passif","Montant"],[
["Matériel (réfrigérateur)","1 500 000","Capital (apport de Fatou)","3 000 000"],
["Stock de marchandises","1 000 000","Emprunt bancaire","2 000 000"],
["Banque","2 500 000","",""],
["<b>Total actif</b>","<b>5 000 000</b>","<b>Total passif</b>","<b>5 000 000</b>"]])}
<h2>3. Comment le bilan SYSCOHADA est organisé</h2>
${T(["Actif (emplois)","Passif (ressources)"],[
["<b>Actif immobilisé</b> : biens durables (terrains, bâtiments, matériel, logiciels, titres de participation)","<b>Capitaux propres</b> : capital, réserves, report à nouveau, résultat de l'exercice, subventions d'investissement"],
["<b>Actif circulant</b> : stocks, créances clients, autres créances","<b>Dettes financières</b> : emprunts à plus d'un an, dettes de location-acquisition, provisions pour risques"],
["<b>Trésorerie-actif</b> : banque, caisse, placements à court terme","<b>Passif circulant</b> : fournisseurs, dettes fiscales et sociales, autres dettes"],
["","<b>Trésorerie-passif</b> : découverts bancaires, crédits de trésorerie"]])}
<p>Capitaux propres + dettes financières = <b>ressources stables</b>. Ce sont elles qui doivent financer l'actif immobilisé (règle d'équilibre que tu verras dans le cours de finance).</p>
<h2>4. Le compte de résultat : charges et produits</h2>
<ul><li>Une <b>charge</b> appauvrit l'entreprise : achats, loyers, salaires, impôts et taxes, intérêts, usure du matériel (amortissement).</li>
<li>Un <b>produit</b> l'enrichit : ventes, prestations de services, intérêts reçus, subventions d'exploitation.</li></ul>
<div class="box key"><h4>Le résultat</h4><p><b>Résultat = Produits − Charges</b>. Positif : bénéfice. Négatif : perte. Le résultat apparaît aussi au passif du bilan, dans les capitaux propres. C'est le lien entre les deux documents.</p></div>
<h2>5. Suite de l'exemple</h2>
<p>Pendant le premier mois, Fatou vend pour 1 600 000 des marchandises qui lui avaient coûté 1 000 000. Elle paie 200 000 de loyer et 150 000 d'électricité et de transport.</p>
${T(["Charges","Montant","Produits","Montant"],[
["Coût des marchandises vendues","1 000 000","Ventes de marchandises","1 600 000"],
["Loyer","200 000","",""],
["Électricité et transport","150 000","",""],
["<b>Résultat (bénéfice)</b>","<b>250 000</b>","",""],
["<b>Total</b>","<b>1 600 000</b>","<b>Total</b>","<b>1 600 000</b>"]])}
<p>Au bilan, la banque passe à 2 500 000 + 1 600 000 − 200 000 − 150 000 = 3 750 000 et le stock tombe à zéro. Les capitaux propres deviennent 3 000 000 + 250 000 = 3 250 000. Total actif : 1 500 000 + 3 750 000 = 5 250 000 ; total passif : 3 250 000 + 2 000 000 = 5 250 000. L'équilibre est respecté.</p>
<h2>6. Ne pas confondre résultat et trésorerie</h2>
<p>Une entreprise peut être <b>bénéficiaire mais sans argent</b> (ses clients ne l'ont pas encore payée) ou <b>avoir de l'argent tout en perdant</b> (elle vient d'emprunter). Un auditeur vérifie toujours les deux : le résultat dit si l'activité est rentable, la trésorerie dit si l'entreprise peut payer ses dettes à temps.</p>
${window.__GL.X("classer ces éléments à l'actif ou au passif : stock de riz, emprunt bancaire, ordinateur, dette envers un fournisseur, créance sur un client, capital, solde de caisse, TVA à payer à l'État.",
"<p><b>Actif</b> : stock de riz (actif circulant), ordinateur (actif immobilisé), créance client (actif circulant), caisse (trésorerie-actif).</p><p><b>Passif</b> : emprunt bancaire (dette financière), dette fournisseur (passif circulant), capital (capitaux propres), TVA à payer (passif circulant, dette fiscale).</p>")}
${window.__GL.X("une entreprise a 12 millions d'actif et 7 millions de dettes. Quels sont ses capitaux propres ?","<p>Capitaux propres = Actif − Dettes = 12 − 7 = <b>5 millions</b>.</p>")}
`},

{ id:"m3", day:"Bases", title:"La partie double : débit, crédit et comptes en T", html:`
<p class="lead">C'est le module le plus important du cours. Une fois que tu sais passer une écriture en partie double, tout le reste n'est que de l'application.</p>
<h2>1. Le principe de la partie double</h2>
<p>Chaque opération a <b>deux faces</b> : une ressource d'un côté, un emploi de l'autre. Quand Fatou paie son loyer en espèces, la caisse diminue <i>et</i> une charge de loyer apparaît. On enregistre donc toujours au moins deux comptes, et <b>le total des débits est toujours égal au total des crédits</b>.</p>
<h2>2. Le compte en T</h2>
<p>Un compte se représente comme un T. La colonne de gauche s'appelle <b>débit</b>, celle de droite <b>crédit</b>. Ces mots n'ont rien à voir avec « devoir » ou « recevoir » dans le langage courant : ce sont seulement des côtés.</p>
<pre style="background:var(--surface);border:1px solid var(--line);border-radius:8px;padding:12px;overflow-x:auto">        521 Banque
   Débit          |   Crédit
   -------------- | --------------
   + 3 000 000    |   − 200 000
   (entrées)      |   (sorties)
   Solde débiteur : 2 800 000</pre>
<p>Le <b>solde</b> d'un compte est la différence entre le total du débit et le total du crédit. Si le débit l'emporte, le solde est <b>débiteur</b> ; sinon il est <b>créditeur</b>.</p>
<h2>3. La règle à retenir par cœur</h2>
${T(["Nature du compte","Il augmente au…","Il diminue au…","Solde normal"],[
["Actif (immobilisations, stocks, clients, banque, caisse)","<b>Débit</b>","Crédit","Débiteur"],
["Passif (capital, emprunts, fournisseurs, État)","<b>Crédit</b>","Débit","Créditeur"],
["Charges (achats, loyers, salaires)","<b>Débit</b>","Crédit","Débiteur"],
["Produits (ventes, prestations)","<b>Crédit</b>","Débit","Créditeur"]])}
<div class="box key"><h4>Astuce mnémotechnique</h4><p>« <b>Ce que je reçois, je le débite ; ce que je donne, je le crédite.</b> » Quand l'entreprise reçoit un bien, de l'argent ou un service, le compte qui le représente est débité. Le compte qui « fournit » est crédité.</p></div>
<h2>4. La méthode en quatre questions</h2>
<ol><li>Quels sont les comptes touchés par l'opération ?</li><li>Chaque compte est-il un actif, un passif, une charge ou un produit ?</li><li>Augmente-t-il ou diminue-t-il ?</li><li>Donc : débit ou crédit ? Vérifie que débit = crédit.</li></ol>
<h2>5. Six opérations expliquées</h2>
${window.__GL.E("a) Fatou apporte 3 000 000 en banque pour créer la société",[["521","Banque (actif qui augmente)","3 000 000",""],["101","Capital social (passif qui augmente)","","3 000 000"]])}
${window.__GL.E("b) La banque prête 2 000 000",[["521","Banque","2 000 000",""],["162","Emprunts auprès des établissements de crédit","","2 000 000"]])}
${window.__GL.E("c) Achat d'un réfrigérateur 1 500 000 payé par virement (hors TVA pour simplifier)",[["244","Matériel et mobilier (actif immobilisé qui augmente)","1 500 000",""],["521","Banque (actif qui diminue)","","1 500 000"]])}
${window.__GL.E("d) Achat de marchandises 1 000 000 à crédit (paiement dans 30 jours)",[["601","Achats de marchandises (charge)","1 000 000",""],["401","Fournisseurs (dette qui augmente)","","1 000 000"]])}
${window.__GL.E("e) Vente de marchandises 1 600 000 payée en espèces",[["571","Caisse","1 600 000",""],["701","Ventes de marchandises (produit)","","1 600 000"]])}
${window.__GL.E("f) Paiement du fournisseur par chèque",[["401","Fournisseurs (dette qui diminue)","1 000 000",""],["521","Banque","","1 000 000"]])}
<div class="box tip"><h4>Erreur fréquente</h4><p>Les débutants pensent que la banque « est créditée » quand on y dépose de l'argent, parce que c'est ce qui est écrit sur le relevé bancaire. Le relevé est tenu <b>par la banque, de son point de vue</b> : pour elle, ton argent est une dette envers toi, donc elle te crédite. Dans <b>ta</b> comptabilité, c'est l'inverse : le compte 521 est débité.</p></div>
${window.__GL.X("Fatou paie 200 000 de loyer en espèces. Passer l'écriture.", window.__GL.E("",[["622","Locations et charges locatives","200 000",""],["571","Caisse","","200 000"]]) + "<p>Le loyer est une charge (débit). La caisse, un actif, diminue (crédit).</p>")}
${window.__GL.X("un client paie par virement une facture de 500 000 déjà enregistrée en vente.", window.__GL.E("",[["521","Banque","500 000",""],["411","Clients","","500 000"]]) + "<p>La vente a déjà été comptabilisée le jour de la facture. Ici, la créance sur le client (actif) disparaît et la banque augmente.</p>")}
${window.__GL.X("on retire 300 000 de la banque pour alimenter la caisse.", window.__GL.E("",[["571","Caisse","300 000",""],["521","Banque","","300 000"]]) + "<p>C'est un simple <b>virement interne</b> : aucune charge, aucun produit, le résultat ne change pas. En pratique, on passe souvent par le compte 585 « Virements de fonds » pour éviter de compter deux fois l'opération (une fois dans le journal de banque, une fois dans le journal de caisse).</p>")}
`},

{ id:"m4", day:"Bases", title:"Le plan comptable SYSCOHADA : classes et comptes clés", html:`
<p class="lead">Le plan comptable donne à chaque type d'opération un numéro. Le premier chiffre indique la classe, chaque chiffre supplémentaire précise le compte. Connaître les comptes principaux te fera gagner un temps énorme en audit.</p>
<h2>1. Les neuf classes</h2>
${T(["Classe","Contenu","Document"],[
["1","Comptes de ressources durables : capital, réserves, résultat, emprunts, provisions pour risques","Bilan (passif)"],
["2","Comptes d'actif immobilisé : immobilisations incorporelles, corporelles, financières, amortissements","Bilan (actif)"],
["3","Comptes de stocks : marchandises, matières, produits finis","Bilan (actif)"],
["4","Comptes de tiers : fournisseurs, clients, personnel, organismes sociaux, État, associés","Bilan (actif ou passif)"],
["5","Comptes de trésorerie : banques, caisse, titres de placement","Bilan"],
["6","Comptes de charges des activités ordinaires","Compte de résultat"],
["7","Comptes de produits des activités ordinaires","Compte de résultat"],
["8","Comptes des autres charges et autres produits : hors activités ordinaires (HAO), participation des travailleurs, impôt sur le résultat","Compte de résultat"],
["9","Comptes des engagements hors bilan et comptabilité analytique de gestion","Hors bilan / analytique"]])}
<p>Les classes 1 à 5 forment le bilan. Les classes 6 à 8 forment le compte de résultat.</p>
<h2>2. Les comptes à connaître en priorité</h2>
${T(["Compte","Intitulé","Commentaire"],[
["101","Capital social","Apports des associés"],
["111","Réserve légale","Obligatoire dans les sociétés : une part du bénéfice mise de côté"],
["121 / 129","Report à nouveau créditeur / débiteur","Bénéfices non distribués / pertes antérieures"],
["131 / 139","Résultat net : bénéfice / perte","Résultat de l'exercice"],
["162","Emprunts auprès des établissements de crédit",""],
["19","Provisions financières pour risques et charges","Litiges, garanties"],
["21","Immobilisations incorporelles","Logiciels, brevets, fonds commercial"],
["22 / 23","Terrains / Bâtiments, installations",""],
["24","Matériel, mobilier et actifs biologiques","244 : matériel et mobilier de bureau, informatique"],
["245","Matériel de transport","Véhicules"],
["28","Amortissements","Ex. 2844 : amortissements du matériel et mobilier"],
["31","Marchandises","Stock"],
["401","Fournisseurs, dettes en compte",""],
["408","Fournisseurs, factures non parvenues","Charges à payer"],
["411","Clients",""],
["416","Créances clients litigieuses ou douteuses",""],
["421 / 422","Personnel : avances / rémunérations dues",""],
["431","Sécurité sociale","Cotisations sociales à payer"],
["441","État, impôt sur les bénéfices",""],
["443","État, TVA facturée","4431 : TVA facturée sur ventes"],
["445","État, TVA récupérable","4452 : sur achats ; 4451 : sur immobilisations"],
["444","État, TVA due ou crédit de TVA","4441 : TVA due"],
["447","État, impôts retenus à la source","Impôt sur salaires retenu"],
["476 / 477","Charges / produits constatés d'avance","Régularisations"],
["49","Dépréciations des comptes de tiers","491 : clients"],
["521","Banques",""],
["571","Caisse",""],
["601","Achats de marchandises",""],
["602","Achats de matières premières",""],
["6031","Variation des stocks de marchandises",""],
["605","Autres achats","Eau, électricité, fournitures"],
["61","Transports",""],
["62 / 63","Services extérieurs","622 : locations ; 624 : entretien ; 632 : honoraires"],
["64","Impôts et taxes","Hors impôt sur le bénéfice"],
["66","Charges de personnel","661 : rémunérations ; 664 : charges sociales"],
["67","Frais financiers","671 : intérêts des emprunts"],
["68","Dotations aux amortissements","681 : d'exploitation"],
["69","Dotations aux provisions et dépréciations",""],
["701","Ventes de marchandises",""],
["702 / 706","Ventes de produits finis / Services vendus",""],
["77","Revenus financiers",""],
["81 / 82","Valeurs comptables des cessions / Produits des cessions d'immobilisations","Hors activités ordinaires (HAO)"],
["89","Impôts sur le résultat","891 : impôt sur les bénéfices"]])}
<div class="box key"><h4>Les comptes de tiers « collectifs »</h4><p>Le compte 401 regroupe tous les fournisseurs et le 411 tous les clients. Dans le logiciel, chaque fournisseur ou client a en plus un <b>compte auxiliaire</b> (sous-compte individuel). La somme des comptes auxiliaires doit être égale au compte collectif : c'est l'un des premiers contrôles qu'un auditeur fait (« la balance auxiliaire est-elle égale au général ? »).</p></div>
<h2>3. Activités ordinaires et HAO</h2>
<p>Le SYSCOHADA sépare les opérations <b>courantes</b> (classes 6 et 7) des opérations <b>hors activités ordinaires</b> (classe 8) : cession d'une immobilisation, catastrophe naturelle, expropriation… Cela permet de voir ce que l'entreprise gagne avec son métier habituel, sans les événements exceptionnels.</p>
${window.__GL.X("dans quels comptes enregistrer : un loyer de bureau, une facture d'avocat, l'achat d'un camion, une vente de services informatiques, les intérêts d'un emprunt ?","<ul><li>Loyer : 622 Locations.</li><li>Avocat : 632 Honoraires (rémunérations d'intermédiaires et de conseils).</li><li>Camion : 245 Matériel de transport (immobilisation, pas une charge).</li><li>Services informatiques : 706 Services vendus.</li><li>Intérêts : 671 Intérêts des emprunts.</li></ul>")}
`},

{ id:"m5", day:"Le circuit", title:"Journal, grand livre et balance : le circuit comptable", html:`
<p class="lead">Une écriture suit toujours le même chemin : la pièce justificative, le journal, le grand livre, la balance, puis les états financiers. Ce circuit est aussi le chemin que suit l'auditeur, dans un sens ou dans l'autre.</p>
<h2>1. Les étapes</h2>
<ol>
<li><b>La pièce justificative</b> : facture, relevé bancaire, bulletin de paie, contrat, reçu de caisse. Aucune écriture sans pièce : c'est une obligation légale et la base de toute preuve d'audit.</li>
<li><b>Le journal</b> : on y enregistre les écritures par ordre chronologique. En pratique, il y a plusieurs journaux auxiliaires : achats, ventes, banque, caisse, opérations diverses (OD).</li>
<li><b>Le grand livre</b> : on y regroupe les écritures compte par compte. C'est là qu'on voit tous les mouvements du compte 411 ou du compte 521.</li>
<li><b>La balance</b> : un tableau qui reprend, pour chaque compte, le total des débits, le total des crédits et le solde. Total des débits = total des crédits : sinon, il y a une erreur.</li>
<li><b>Les états financiers</b> : bilan, compte de résultat, tableau des flux de trésorerie et notes annexes, construits à partir des soldes de la balance.</li>
</ol>
<h2>2. À quoi ressemble une écriture au journal</h2>
${T(["Date","N° pièce","Compte","Libellé","Débit","Crédit"],[
["05/01","FA-001","601","Achat marchandises, Sotrac","1 000 000",""],
["05/01","FA-001","4452","TVA récupérable sur achats","180 000",""],
["05/01","FA-001","401","Fournisseur Sotrac","","1 180 000"]])}
<p>Chaque écriture porte une date, une référence de pièce, des comptes, un libellé clair, et elle est équilibrée.</p>
<h2>3. Exercice complet : le premier mois de la société KADI</h2>
<p>Opérations de janvier (TVA 18 %) :</p>
<ol>
<li>02/01 : apport en capital de 10 000 000 versé en banque.</li>
<li>03/01 : achat d'ordinateurs 2 000 000 HT, payés par virement.</li>
<li>05/01 : achat de marchandises 4 000 000 HT à crédit.</li>
<li>15/01 : vente de marchandises 5 000 000 HT à crédit.</li>
<li>25/01 : paiement du loyer 500 000 (exonéré de TVA pour simplifier) par chèque.</li>
<li>30/01 : le client paie 3 000 000 par virement.</li>
</ol>
${window.__GL.X("passer les écritures au journal, puis établir la balance.",
window.__GL.E("1) Apport",[["521","Banque","10 000 000",""],["101","Capital social","","10 000 000"]]) +
window.__GL.E("2) Ordinateurs",[["244","Matériel informatique","2 000 000",""],["4451","TVA récupérable sur immobilisations","360 000",""],["521","Banque","","2 360 000"]]) +
window.__GL.E("3) Marchandises",[["601","Achats de marchandises","4 000 000",""],["4452","TVA récupérable sur achats","720 000",""],["401","Fournisseurs","","4 720 000"]]) +
window.__GL.E("4) Vente",[["411","Clients","5 900 000",""],["701","Ventes de marchandises","","5 000 000"],["4431","TVA facturée sur ventes","","900 000"]]) +
window.__GL.E("5) Loyer",[["622","Locations","500 000",""],["521","Banque","","500 000"]]) +
window.__GL.E("6) Encaissement client",[["521","Banque","3 000 000",""],["411","Clients","","3 000 000"]]) +
"<p><b>Balance au 31/01</b></p>" + window.__GL.T(["Compte","Débit","Crédit","Solde"],[
["101 Capital","","10 000 000","10 000 000 C"],
["244 Matériel informatique","2 000 000","","2 000 000 D"],
["401 Fournisseurs","","4 720 000","4 720 000 C"],
["411 Clients","5 900 000","3 000 000","2 900 000 D"],
["4431 TVA facturée","","900 000","900 000 C"],
["4451 TVA récup. immobilisations","360 000","","360 000 D"],
["4452 TVA récup. achats","720 000","","720 000 D"],
["521 Banque","13 000 000","2 860 000","10 140 000 D"],
["601 Achats de marchandises","4 000 000","","4 000 000 D"],
["622 Locations","500 000","","500 000 D"],
["701 Ventes","","5 000 000","5 000 000 C"],
["<b>Totaux</b>","<b>26 480 000</b>","<b>26 480 000</b>","Soldes débiteurs = soldes créditeurs = 20 620 000"]]) +
"<p>Les totaux sont égaux : la balance est équilibrée. Attention : une balance équilibrée ne prouve pas que tout est juste. Une écriture oubliée ou passée dans le mauvais compte ne déséquilibre rien. C'est pourquoi l'auditeur ne s'arrête jamais à ce contrôle.</p>")}
<h2>4. Ce que l'auditeur fait avec ces documents</h2>
${T(["Démarche","Sens","Ce que l'on teste"],[
["Partir des états financiers vers les pièces","Descendant","<b>Existence</b> : ce qui est comptabilisé a-t-il bien eu lieu ?"],
["Partir des pièces vers les états financiers","Ascendant","<b>Exhaustivité</b> : tout ce qui a eu lieu est-il comptabilisé ?"]])}
<p>En audit IT, on extrait souvent le <b>fichier des écritures</b> (toutes les lignes du journal) pour l'analyser : écritures passées le week-end, par des utilisateurs inhabituels, avec des montants ronds, sans libellé, juste avant la clôture. Ce sont les tests sur les <b>écritures de journal</b> (journal entry testing), indispensables pour détecter un contournement des contrôles par la direction.</p>
`},

{ id:"m6", day:"Opérations courantes", title:"Achats, ventes et TVA", html:`
<p class="lead">Les achats et les ventes représentent l'essentiel des écritures d'une entreprise. La TVA les accompagne presque toujours. Ce module te donne les schémas que tu retrouveras dans tous les dossiers.</p>
<h2>1. La TVA en trois phrases</h2>
<ul><li>La TVA est un impôt payé par le <b>consommateur final</b>. L'entreprise ne fait que la collecter pour l'État.</li>
<li>Sur ses ventes, l'entreprise <b>facture</b> de la TVA (TVA collectée, compte 443). Sur ses achats, elle <b>paie</b> de la TVA qu'elle peut récupérer (TVA déductible, compte 445).</li>
<li>Chaque mois, elle reverse la différence : <b>TVA due = TVA facturée − TVA récupérable</b>. Si la différence est négative, elle a un <b>crédit de TVA</b>.</li></ul>
<p>Au Sénégal, le taux normal est de 18 % (un taux réduit existe pour certaines activités comme l'hébergement touristique). HT = hors taxes ; TTC = toutes taxes comprises = HT × 1,18.</p>
<h2>2. La facture d'achat</h2>
${window.__GL.E("Achat de marchandises : 1 000 000 HT, TVA 18 %, payable à 30 jours",[["601","Achats de marchandises","1 000 000",""],["4452","État, TVA récupérable sur achats","180 000",""],["401","Fournisseurs","","1 180 000"]])}
<h2>3. La facture de vente</h2>
${window.__GL.E("Vente de marchandises : 1 500 000 HT, TVA 18 %",[["411","Clients","1 770 000",""],["701","Ventes de marchandises","","1 500 000"],["4431","État, TVA facturée sur ventes","","270 000"]])}
<h2>4. La déclaration de TVA</h2>
<p>En fin de mois, on solde les comptes de TVA et on fait apparaître la dette envers l'État :</p>
${window.__GL.E("Liquidation de la TVA du mois",[["4431","TVA facturée sur ventes","270 000",""],["4452","TVA récupérable sur achats","","180 000"],["4441","État, TVA due","","90 000"]])}
${window.__GL.E("Paiement de la TVA",[["4441","État, TVA due","90 000",""],["521","Banque","","90 000"]])}
<h2>5. Les réductions sur facture</h2>
${T(["Réduction","Nature","Traitement"],[
["Remise, rabais, ristourne","Commerciale : prix réduit pour quantité, défaut, fidélité","Si elle figure sur la facture d'origine : on enregistre directement le montant net. Si elle arrive après : facture d'avoir"],
["Escompte","Financière : réduction pour paiement anticipé","Charge financière (673) chez le vendeur, produit financier (773) chez l'acheteur"]])}
${window.__GL.E("Avoir reçu du fournisseur : rabais de 100 000 HT sur un lot défectueux",[["401","Fournisseurs","118 000",""],["601","Achats de marchandises (ou 6019 RRR obtenus)","","100 000"],["4452","TVA récupérable sur achats","","18 000"]])}
<h2>6. Frais accessoires, emballages, acomptes</h2>
<ul><li><b>Transport sur achat</b> : compte 6015 (frais sur achats) ou 61 (transports) selon l'organisation.</li>
<li><b>Acompte versé à un fournisseur</b> : compte 409 « Fournisseurs débiteurs, avances et acomptes versés ». Il s'impute sur la facture finale.</li>
<li><b>Acompte reçu d'un client</b> : compte 419 « Clients créditeurs, avances et acomptes reçus ».</li></ul>
<h2>7. Le cycle ventes vu par l'auditeur</h2>
${T(["Risque","Assertion","Test typique"],[
["Ventes fictives pour gonfler le chiffre d'affaires","Existence / réalité","Rapprocher factures, bons de livraison et encaissements ; circulariser les clients"],
["Ventes de décembre enregistrées en janvier, ou l'inverse","Séparation des exercices (cut-off)","Examiner les livraisons et factures autour du 31/12"],
["Ventes oubliées","Exhaustivité","Partir des bons de livraison et vérifier qu'ils sont facturés"],
["Créances irrécouvrables non dépréciées","Évaluation","Analyser la balance âgée des clients"],
["Contrôle IT défaillant : modification des prix sans autorisation","Exactitude","Revue des droits d'accès au fichier des prix et des changements"]])}
${window.__GL.X("vente de 2 000 000 HT avec une remise de 10 % sur la facture, TVA 18 %. Passer l'écriture.","<p>Net commercial = 2 000 000 − 200 000 = 1 800 000. TVA = 324 000. TTC = 2 124 000.</p>" + window.__GL.E("",[["411","Clients","2 124 000",""],["701","Ventes de marchandises","","1 800 000"],["4431","TVA facturée","","324 000"]]))}
${window.__GL.X("dans le mois : TVA facturée 450 000, TVA récupérable sur achats 520 000. Que se passe-t-il ?","<p>TVA récupérable > TVA facturée : l'entreprise a un <b>crédit de TVA</b> de 70 000, qu'elle reporte sur le mois suivant (ou dont elle demande le remboursement selon les règles fiscales).</p>" + window.__GL.E("",[["4431","TVA facturée","450 000",""],["4449","État, crédit de TVA à reporter","70 000",""],["4452","TVA récupérable sur achats","","520 000"]]))}
`},

{ id:"m7", day:"Opérations courantes", title:"Trésorerie, banque et rapprochement bancaire", html:`
<p class="lead">La trésorerie est la zone où la fraude est la plus tentante. Le rapprochement bancaire est le contrôle de base : il compare le compte 521 de l'entreprise avec le relevé de la banque.</p>
<h2>1. Les moyens de paiement</h2>
${T(["Moyen","Ce qu'il faut savoir"],[
["Espèces (caisse 571)","Risque élevé de vol. Plafonds, double signature, comptage régulier (inventaire de caisse) avec procès-verbal"],
["Chèque","L'émission ne vaut pas encaissement : le chèque peut mettre plusieurs jours à être débité"],
["Virement","Le plus sûr si les coordonnées bancaires des fournisseurs sont protégées (fraude au changement de RIB)"],
["Mobile money","Compte de trésorerie dédié, à rapprocher du relevé de l'opérateur"],
["Effets de commerce (lettre de change, billet à ordre)","Créances ou dettes payables à une date donnée ; comptes 412 et 402"]])}
<h2>2. Pourquoi le compte 521 et le relevé ne sont pas égaux</h2>
<p>L'entreprise et la banque n'enregistrent pas les opérations au même moment :</p>
<ul><li>des chèques émis par l'entreprise ne sont pas encore présentés à la banque ;</li>
<li>des remises de chèques ne sont pas encore créditées ;</li>
<li>la banque a prélevé des frais, des agios ou reçu un virement que l'entreprise ne connaît pas encore.</li></ul>
<p>Attention aux sens : un solde <b>débiteur</b> chez l'entreprise (elle a de l'argent) correspond à un solde <b>créditeur</b> sur le relevé de la banque.</p>
<h2>3. La méthode du rapprochement</h2>
<ol><li>Pointer chaque opération du compte 521 avec le relevé.</li><li>Lister les opérations non pointées des deux côtés.</li><li>Corriger le solde comptable avec ce que la banque a enregistré et que l'entreprise ignore (frais, virements reçus) : ces éléments donnent lieu à des écritures.</li><li>Corriger le solde bancaire avec ce que l'entreprise a enregistré et que la banque n'a pas encore traité (chèques en circulation) : pas d'écriture, on attend.</li><li>Les deux soldes corrigés doivent être égaux.</li></ol>
<h2>4. Exemple</h2>
<p>Au 31/12 : solde du compte 521 = 4 200 000 débiteur. Relevé bancaire = 4 650 000 créditeur. Après pointage :</p>
<ul><li>chèque n° 112 de 600 000 émis à un fournisseur, pas encore présenté ;</li><li>frais bancaires de 25 000 prélevés par la banque, non comptabilisés ;</li><li>virement d'un client de 125 000 reçu par la banque, non comptabilisé ;</li><li>remise de chèque de 250 000 déposée le 31/12, créditée par la banque en janvier.</li></ul>
${T(["Comptabilité de l'entreprise","Montant","Relevé de la banque","Montant"],[
["Solde du compte 521","4 200 000","Solde du relevé","4 650 000"],
["− Frais bancaires","− 25 000","− Chèque n° 112 non présenté","− 600 000"],
["+ Virement client reçu","+ 125 000","+ Remise de chèque non créditée","+ 250 000"],
["<b>Solde rectifié</b>","<b>4 300 000</b>","<b>Solde rectifié</b>","<b>4 300 000</b>"]])}
${window.__GL.E("Écritures à passer chez l'entreprise",[["631","Frais bancaires","25 000",""],["521","Banque","","25 000"],["521","Banque","125 000",""],["411","Clients","","125 000"]])}
<div class="box key"><h4>Les signaux d'alerte pour l'auditeur</h4><ul><li>Rapprochements non faits, non signés ou faits par la personne qui tient la caisse et passe les écritures (absence de séparation des tâches).</li><li>Chèques en circulation très anciens (plus de quelques mois) : chèques annulés ou détournés ?</li><li>Écarts « divers » inexpliqués reportés de mois en mois.</li><li>Comptes bancaires ouverts mais absents de la comptabilité : l'auditeur demande une <b>confirmation directe</b> à chaque banque (circularisation), qui liste tous les comptes, soldes, emprunts et garanties.</li></ul></div>
<h2>5. Le contrôle de la caisse</h2>
<p>La caisse ne peut jamais être créditrice : on ne peut pas sortir plus d'argent qu'il n'y en a. Un solde de caisse créditeur dans la balance signale une erreur ou des sorties non justifiées. L'auditeur assiste à un comptage surprise et compare au solde comptable.</p>
${window.__GL.X("solde 521 : 1 000 000 débiteur ; relevé : 1 300 000 créditeur. Chèques émis non présentés : 400 000. Agios prélevés non comptabilisés : 30 000. Intérêts créditeurs non comptabilisés : 10 000. Le rapprochement tombe-t-il juste ?","<p>Côté entreprise : 1 000 000 − 30 000 + 10 000 = 980 000. Côté banque : 1 300 000 − 400 000 = 900 000. Écart de 80 000 : il reste une opération non identifiée. Il faut reprendre le pointage. Un écart non expliqué ne doit jamais être passé en « divers ».</p>")}
`}
];

CERTS.push({
  id:"compta", title:"Comptabilité générale pas à pas (SYSCOHADA)", org:"Cours Georgi Learning · Comptabilité et finance",
  intro:"Un cours pour partir de zéro et arriver à lire, comprendre et contrôler des états financiers SYSCOHADA. Chaque module explique une notion avec des exemples chiffrés, puis propose des exercices corrigés. Pensé pour un auditeur qui doit comprendre la comptabilité de ses clients.",
  examMinutes:60, examQuestions:40, passMark:70,
  exam:`<p>Ce cours n'est pas une certification officielle : le test final sert à vérifier que tu maîtrises les bases avant de passer aux cours sectoriels (banque, assurance, télécoms…).</p>
<ul><li>40 questions tirées au hasard parmi toutes les questions du cours, 60 minutes.</li><li>Seuil conseillé : 70 %. En dessous, relis les modules signalés dans le résultat.</li><li>Les questions portent surtout sur la partie double, les comptes clés, les écritures courantes et les travaux de fin d'exercice.</li></ul>
<div class="box tip"><h4>Pour aller plus loin</h4><p>Si tu veux une certification comptable reconnue, consulte la page « Certifications comptables reconnues » dans les ressources de ce cours.</p></div>`,
  modules, pages:[], questions:[]
});
})();
