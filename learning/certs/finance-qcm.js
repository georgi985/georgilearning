/* Finance d'entreprise : questions d'entraînement originales. */
CERTS.find(c => c.id === "finance").questions = [
{m:"f1",q:"La trésorerie nette est égale à :",o:["BFR − FR","Fonds de roulement − BFR","Capitaux propres − dettes","Chiffre d'affaires − charges"],a:1,e:"TN = FR − BFR."},
{m:"f1",q:"FR 50 M ; BFR 80 M. La trésorerie nette est :",o:["+30 M","−30 M","130 M","0"],a:1,e:"50 − 80 = −30 M : l'entreprise dépend de ses découverts."},
{m:"f1",q:"Si les clients paient de plus en plus tard, le BFR :",o:["Diminue","Augmente","Ne change pas","Devient négatif"],a:1,e:"Les créances clients augmentent, donc le besoin de financement aussi."},
{m:"f1",q:"Créances clients TTC 30 M ; CA TTC 180 M. Délai clients ?",o:["30 jours","60 jours","90 jours","6 jours"],a:1,e:"30 ÷ 180 × 360 = 60 jours."},
{m:"f2",q:"Résultat net 20 ; dotations 10 ; reprises 2. CAF ?",o:["32","28","30","12"],a:1,e:"20 + 10 − 2 = 28."},
{m:"f2",q:"Le ROE mesure :",o:["La rentabilité des actifs","La rentabilité des capitaux propres pour les actionnaires","La liquidité","L'endettement"],a:1,e:"ROE = résultat net ÷ capitaux propres."},
{m:"f2",q:"L'effet de levier devient défavorable quand :",o:["La rentabilité économique dépasse le taux d'intérêt","Le taux d'intérêt dépasse la rentabilité économique","Les capitaux propres augmentent","L'entreprise n'a pas de dettes"],a:1,e:"La dette coûte alors plus qu'elle ne rapporte."},
{m:"f2",q:"Charges fixes 30 M ; taux de marge sur coûts variables 25 %. Seuil de rentabilité ?",o:["7,5 M","120 M","40 M","30 M"],a:1,e:"30 ÷ 0,25 = 120 M."},
{m:"f3",q:"Une VAN positive signifie :",o:["Que le projet perd de l'argent","Que le projet rapporte plus que le taux exigé","Que le délai de récupération est court","Que le TRI est nul"],a:1,e:"Le projet crée de la valeur au taux d'actualisation retenu."},
{m:"f3",q:"Valeur actuelle de 1 210 reçus dans 2 ans au taux de 10 % ?",o:["1 100","1 000","1 210","990"],a:1,e:"1 210 ÷ 1,21 = 1 000."},
{m:"f3",q:"Le TRI est :",o:["Le taux d'intérêt de l'emprunt","Le taux pour lequel la VAN est nulle","Le délai de récupération","Le taux de TVA"],a:1,e:"On le compare au coût du capital."},
{m:"f3",q:"Quelle est la principale limite du délai de récupération simple ?",o:["Il est trop compliqué","Il ignore les flux après la récupération et l'actualisation","Il nécessite le TRI","Il ne s'applique qu'aux banques"],a:1,e:"Un projet rentable à long terme peut être mal classé."},
{m:"f4",q:"Emprunt de 40 M sur 4 ans à 10 %, amortissements constants. Intérêts de l'année 1 ?",o:["10 M","4 M","1 M","14 M"],a:1,e:"10 % × 40 M = 4 M ; l'annuité de l'année 1 est 10 + 4 = 14 M."},
{m:"f4",q:"Un covenant est :",o:["Un type d'action","Une clause financière d'un contrat de prêt","Un impôt","Une méthode d'amortissement"],a:1,e:"Son non-respect peut rendre la dette exigible."},
{m:"f4",q:"Quel est l'inconvénient d'une augmentation de capital ?",o:["Les intérêts à payer","La dilution du pouvoir des actionnaires existants","Le remboursement obligatoire","Les garanties exigées"],a:1,e:"De nouveaux actionnaires entrent au capital."},
{m:"f5",q:"Ventes de mars 200 M, encaissées à 50 % en mars et 50 % en avril. Encaissement de mars lié aux ventes de mars ?",o:["200 M","100 M","50 M","0"],a:1,e:"50 % de 200 M."},
{m:"f5",q:"Un écart de chiffre d'affaires peut se décomposer en :",o:["Écart de TVA et de change","Écart sur volumes et écart sur prix","Écart fixe et variable","Écart de stock"],a:1,e:"On a vendu plus ou moins, plus ou moins cher."},
{m:"f6",q:"Chiffre d'affaires +30 % et délai clients doublé : quelle question l'auditeur se pose-t-il d'abord ?",o:["Les salaires sont-ils justes ?","Les ventes sont-elles réelles et recouvrables ?","La TVA est-elle à 18 % ?","Le capital est-il libéré ?"],a:1,e:"C'est un signal de ventes fictives ou de difficultés de recouvrement."},
{m:"f6",q:"Quel indice pose une question de continuité d'exploitation ?",o:["Un bénéfice en hausse","Des capitaux propres devenus inférieurs à la moitié du capital social","Un nouveau client important","Une baisse des impôts"],a:1,e:"L'Acte uniforme impose alors une décision des associés."},
{m:"f6",q:"Seuil de signification 20 M ; erreur non corrigée 25 M. Conclusion ?",o:["L'erreur est négligeable","L'erreur est significative et doit être corrigée","L'audit doit être annulé","Le seuil doit être relevé à 30 M"],a:1,e:"Elle dépasse le seuil : elle affecte l'opinion si elle n'est pas corrigée."}
];
