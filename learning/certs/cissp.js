/* ISC2 CISSP : cours. Contenu original rédigé pour la révision ; il ne reproduit pas le guide officiel ISC2. */
(function(){
const T = (head, rows) => '<div class="tablewrap"><table><thead><tr>' + head.map(h => '<th>' + h + '</th>').join('') + '</tr></thead><tbody>' + rows.map(r => '<tr>' + r.map(c => '<td>' + c + '</td>').join('') + '</tr>').join('') + '</tbody></table></div>';
const D = (n, name, w) => '<p class="eyebrow">Domaine ' + n + ' · ' + name + ' · ' + w + ' % de l\'examen</p>';

const modules = [
{ id:"d1", day:"Domaine 1", title:"Sécurité et gestion des risques", html: D(1,"Security and Risk Management",16) + `
<p class="lead">Le CISSP est souvent décrit comme « un kilomètre de large et deux centimètres de profondeur ». Ce domaine fixe l'état d'esprit : penser comme un conseiller de la direction qui protège l'organisation, pas comme un technicien.</p>
<h2>Le code de déontologie ISC2</h2>
<p>Quatre canons, dans cet ordre de priorité : protéger la société, le bien commun et l'infrastructure ; agir honorablement, honnêtement, justement, de façon responsable et légale ; fournir un service diligent et compétent aux mandants ; faire progresser et protéger la profession. En cas de conflit, le canon le plus haut l'emporte.</p>
<h2>Concepts fondamentaux</h2>
<p>CIA (confidentialité, intégrité, disponibilité) et son contraire DAD (divulgation, altération, destruction). Authenticité, non-répudiation. <b>Due care</b> (agir en personne raisonnable) et <b>due diligence</b> (s'informer, vérifier en continu).</p>
<h2>Gouvernance</h2>
<p>Alignement sur la stratégie, rôles (direction, propriétaires, dépositaires, utilisateurs), comités, cadres (COBIT, ISO 27001, NIST CSF), politiques, normes, procédures, lignes directrices et bases de référence (baselines).</p>
<h2>Droit et conformité</h2>
${T(["Notion","À retenir"],[
["Types de droit","Pénal, civil, administratif (réglementaire)"],
["Propriété intellectuelle","Droit d'auteur, marque, brevet, secret d'affaires"],
["Vie privée","RGPD, lois nationales (Côte d'Ivoire : loi 2013-450) ; flux transfrontaliers"],
["Licences","Contrats de licence, logiciels libres, usage conforme"],
["Investigations","Administratives, pénales, civiles, réglementaires ; niveau de preuve différent"]])}
<h2>Gestion des risques</h2>
<p>Identifier les actifs, menaces, vulnérabilités ; analyser (qualitatif, quantitatif : SLE = AV × EF, ALE = SLE × ARO) ; traiter (atténuer, transférer, éviter, accepter) ; surveiller. Valeur d'une mesure = ALE avant − ALE après − coût annuel de la mesure.</p>
<p>Cadres : NIST RMF (SP 800-37 : catégoriser, sélectionner, mettre en œuvre, évaluer, autoriser, surveiller), ISO 31000, ISO/IEC 27005, FAIR.</p>
<h2>Modélisation des menaces</h2>
<p><b>STRIDE</b> : usurpation (Spoofing), altération (Tampering), répudiation, divulgation (Information disclosure), déni de service, élévation de privilèges. Autres : PASTA, DREAD, arbres d'attaque, MITRE ATT&amp;CK.</p>
<h2>Continuité d'activité</h2>
<p>Périmètre et équipe, <b>BIA</b> (MTD, RTO, RPO, WRT), stratégie, plan, tests, maintenance. Le soutien de la direction est la première condition.</p>
<h2>Personnel et sensibilisation</h2>
<p>Vérifications à l'embauche, NDA, séparation des tâches, rotation des postes, congés obligatoires, départs encadrés, sécurité des tiers, programmes de sensibilisation et de formation adaptés aux rôles.</p>
`},

{ id:"d2", day:"Domaine 2", title:"Sécurité des actifs", html: D(2,"Asset Security",10) + `
<h2>Classification</h2>
<p>Gouvernement : Top Secret, Secret, Confidentiel, Non classifié. Privé : Confidentiel / propriétaire, Privé, Sensible, Public. La classification dépend de la valeur et de l'impact d'une divulgation ; elle détermine les règles de manipulation, de stockage et de destruction.</p>
<h2>Les rôles autour des données</h2>
${T(["Rôle","Responsabilité"],[["Propriétaire (data owner)","Responsable final, classe, approuve les accès"],["Responsable de traitement (controller)","Décide des finalités du traitement de données personnelles"],["Sous-traitant (processor)","Traite pour le compte du responsable"],["Dépositaire (custodian)","Met en œuvre la protection au quotidien (IT)"],["Gestionnaire (steward)","Qualité et usage métier des données"],["Personne concernée (data subject)","La personne dont les données sont traitées"]])}
<h2>Cycle de vie des données</h2>
<p>Création / collecte, stockage, usage, partage, archivage, destruction. <b>Minimisation</b> : ne collecter que le nécessaire. <b>Rétention</b> : durée définie par la loi et les besoins.</p>
<h2>États des données</h2><p>Au repos (chiffrement disque, base), en transit (TLS, IPsec), en cours d'utilisation (contrôle de la mémoire, enclaves).</p>
<h2>Effacement et destruction</h2>
${T(["Méthode","Description"],[["Effacement (erasing)","Suppression logique : récupérable"],["Écrasement (clearing / overwriting)","Réécriture : protège contre les outils courants"],["Purge","Rend la récupération impossible même en laboratoire (démagnétisation, effacement cryptographique)"],["Destruction","Broyage, incinération, désintégration : la plus sûre"]])}
<p>La <b>rémanence</b> des données est la trace qui subsiste après un effacement. Pour les SSD, la démagnétisation est inefficace : on préfère l'effacement cryptographique ou la destruction physique.</p>
<h2>Protection</h2><p>DLP, DRM, CASB, chiffrement, masquage, tokenisation, anonymisation et pseudonymisation, bases de référence (scoping et tailoring : on choisit puis on adapte les contrôles d'une base).</p>
`},

{ id:"d3", day:"Domaine 3", title:"Architecture et ingénierie de sécurité", html: D(3,"Security Architecture and Engineering",13) + `
<h2>Principes de conception sécurisée</h2>
<p>Moindre privilège, défense en profondeur, valeurs par défaut sûres, défaillance sécurisée (fail secure), séparation des tâches, simplicité (keep it simple), Zero Trust, confidentialité dès la conception (privacy by design), confiance mais vérification, responsabilité partagée.</p>
<h2>Modèles de sécurité</h2>
${T(["Modèle","Objectif","Règles clés"],[
["Bell-LaPadula","Confidentialité","Pas de lecture au-dessus (no read up), pas d'écriture en dessous (no write down)"],
["Biba","Intégrité","Pas de lecture en dessous (no read down), pas d'écriture au-dessus (no write up)"],
["Clark-Wilson","Intégrité commerciale","Transactions bien formées, séparation des tâches, triplet sujet / programme / objet"],
["Brewer-Nash (muraille de Chine)","Conflits d'intérêts","L'accès dépend de ce que l'utilisateur a déjà consulté"],
["Graham-Denning / HRU","Gestion des droits","Création et suppression sûres des sujets, objets et droits"]])}
<div class="box tip"><h4>Moyen mnémotechnique</h4><p>Bell-LaPadula protège les secrets : on ne lit pas plus haut, on ne divulgue pas plus bas. Biba est l'inverse : on ne se laisse pas contaminer par plus bas, on ne contamine pas plus haut.</p></div>
<h2>Évaluation des systèmes</h2><p><b>Critères communs</b> (ISO/IEC 15408) : profil de protection (besoins), cible de sécurité (ce que le produit prétend), niveaux d'assurance EAL1 à EAL7. <b>Certification</b> = évaluation technique ; <b>accréditation</b> (autorisation) = acceptation formelle du risque par la direction.</p>
<h2>Vulnérabilités des architectures</h2>
<p>Client, serveur, bases de données (agrégation, inférence), cloud, virtualisation (évasion de VM), conteneurs, serverless, IoT, ICS/SCADA, systèmes embarqués, calcul en périphérie (edge), systèmes distribués, canaux cachés, conditions de course, portes dérobées de maintenance.</p>
<h2>Cryptographie</h2>
${T(["Famille","Exemples","Usage"],[["Symétrique","AES, ChaCha20 ; anciens DES, 3DES","Données volumineuses"],["Asymétrique","RSA, ECC, Diffie-Hellman","Échange de clés, signatures"],["Hachage","SHA-2, SHA-3","Intégrité"],["Post-quantique","ML-KEM, ML-DSA (NIST 2024)","Résister aux futurs ordinateurs quantiques"]])}
<p>Nombre de clés : symétrique n(n−1)/2 ; asymétrique 2n. Gestion des clés : génération, distribution, stockage (HSM), rotation, révocation, destruction. PKI : CA, RA, CRL, OCSP. Attaques : force brute, texte clair connu ou choisi, canaux auxiliaires, attaque des anniversaires, rejeu.</p>
<h2>Sécurité physique des sites</h2>
<p>CPTED (prévention par l'aménagement), périmètres, sas, éclairage, contrôle d'accès, détection d'intrusion, extinction incendie (classes de feux, gaz inertes, sprinklers à préaction), alimentation (onduleur, groupe), climatisation. La sécurité des personnes passe toujours en premier.</p>
`},

{ id:"d4", day:"Domaine 4", title:"Sécurité des communications et des réseaux", html: D(4,"Communication and Network Security",13) + `
<h2>Modèles OSI et TCP/IP</h2>
${T(["Couche OSI","Exemples","Équipements"],[["7 Application","HTTP, DNS, SMTP","Pare-feu applicatif, WAF, proxy"],["6 Présentation","Encodage, chiffrement (TLS en partie)",""],["5 Session","RPC, NetBIOS",""],["4 Transport","TCP, UDP","Pare-feu à état"],["3 Réseau","IP, ICMP, IPsec","Routeur"],["2 Liaison","Ethernet, ARP, 802.1X","Commutateur"],["1 Physique","Câbles, ondes","Concentrateur, répéteur"]])}
<h2>Protocoles sécurisés</h2>
<p>TLS 1.3, IPsec (AH, ESP, modes transport et tunnel, IKE), SSH, SFTP, DNSSEC, HTTPS, S/MIME, SNMPv3, LDAPS, 802.1X / EAP, WPA3.</p>
<h2>Architecture réseau</h2>
<ul><li>Segmentation physique, logique (VLAN), micro-segmentation, DMZ.</li><li>SDN, SD-WAN, SASE, Zero Trust (ZTNA).</li><li>Réseaux sans fil : WPA3, isolement des invités, étude de site.</li><li>Réseaux cellulaires, satellites, IoT.</li><li>Réseaux de diffusion de contenu (CDN), cloud et hybride.</li><li>Voix sur IP : SIP, SRTP.</li></ul>
<h2>Équipements</h2>
<p>Pare-feu (filtrage de paquets, à état, proxy applicatif, NGFW), IDS / IPS (signatures, anomalies), NAC, proxys, répartiteurs de charge, passerelles de messagerie, bastions.</p>
<h2>Attaques réseau</h2>
<p>Déni de service distribué, usurpation (IP, ARP, DNS), homme du milieu, détournement de session, écoute, attaques sur le Wi-Fi (jumeau maléfique, désauthentification), VLAN hopping. Défenses : chiffrement, authentification mutuelle, filtrage, segmentation, surveillance.</p>
`},

{ id:"d5", day:"Domaine 5", title:"Gestion des identités et des accès", html: D(5,"Identity and Access Management",13) + `
<h2>Les étapes de l'accès</h2>
<p>Identification, authentification, autorisation, traçabilité (accountability). L'imputabilité exige des identifiants uniques.</p>
<h2>Authentification</h2>
${T(["Type","Exemples"],[["Type 1 : ce que l'on sait","Mot de passe, PIN, phrase secrète"],["Type 2 : ce que l'on possède","Carte à puce, jeton, téléphone, clé FIDO2"],["Type 3 : ce que l'on est","Empreinte, visage, iris"]])}
<p>Biométrie : erreur de type I = faux rejet (FRR) ; erreur de type II = fausse acceptation (FAR, la plus grave) ; CER / EER = point de croisement. Les passkeys (FIDO2) résistent à l'hameçonnage.</p>
<h2>Modèles de contrôle d'accès</h2>
${T(["Modèle","Principe"],[["DAC","Le propriétaire décide"],["MAC","Étiquettes de sécurité imposées par le système"],["RBAC","Droits selon le rôle"],["ABAC","Droits selon des attributs combinés (sujet, objet, environnement)"],["Par règles","Règles globales (pare-feu, horaires)"],["Basé sur le risque","Adapte l'exigence au contexte (lieu inhabituel → MFA)"]])}
<h2>Fédération et SSO</h2>
<p>SAML (fournisseur d'identité et fournisseur de service), OAuth 2.0 (autorisation déléguée), OpenID Connect (authentification sur OAuth), Kerberos (KDC, TGT, tickets de service, horloges synchronisées), LDAP, RADIUS, TACACS+, Diameter.</p>
<h2>Cycle de vie des identités</h2>
<p>Provisionnement, revue périodique des accès, gestion des changements de poste (éviter l'accumulation de droits, « privilege creep »), déprovisionnement rapide, comptes de service et machines, gestion des accès à privilèges (PAM, juste à temps, coffres).</p>
<h2>Attaques sur les accès</h2>
<p>Hameçonnage d'identifiants, bourrage d'identifiants (credential stuffing), pulvérisation de mots de passe, pass-the-hash, attaques sur Kerberos, fatigue MFA (bombardement de notifications). Défenses : MFA résistant à l'hameçonnage, détection des anomalies, moindre privilège.</p>
`},

{ id:"d6", day:"Domaine 6", title:"Évaluation et tests de sécurité", html: D(6,"Security Assessment and Testing",12) + `
<h2>Stratégies d'évaluation</h2>
<p>Internes, externes, par un tiers. Le choix dépend de l'objectif (conformité, assurance, amélioration), des risques et des exigences réglementaires.</p>
<h2>Types de tests</h2>
${T(["Test","But"],[
["Évaluation de vulnérabilités","Identifier les faiblesses connues (scans authentifiés ou non)"],
["Test d'intrusion","Exploiter de façon autorisée pour mesurer l'impact réel ; règles d'engagement signées"],
["Revue de journaux","Détecter les anomalies, vérifier la traçabilité"],
["Transactions synthétiques","Simuler des transactions pour surveiller la disponibilité et la performance"],
["Revue de code et SAST","Analyse statique du code source"],
["DAST et fuzzing","Tests dynamiques, entrées aléatoires ou malformées"],
["Tests de cas d'abus (misuse)","Vérifier le comportement face aux usages malveillants"],
["Couverture de tests","Proportion du code ou des exigences testés"],
["Tests d'interface","API, interfaces utilisateur, interfaces physiques"],
["Simulation d'attaque","Exercice équipe rouge / bleue / violette"]])}
<p>Connaissance du testeur : environnement inconnu (boîte noire), partiellement connu, connu (boîte blanche).</p>
<h2>Collecte des données de sécurité</h2>
<p>Indicateurs de performance et de risque, données de vérification des comptes, revues de la direction, données de sauvegarde (tests de restauration), formation et sensibilisation, plans de continuité testés.</p>
<h2>Audits</h2>
<p>Audit interne, externe, par un tiers. Rapports <b>SOC 1</b> (contrôles financiers), <b>SOC 2</b> (sécurité, disponibilité, intégrité de traitement, confidentialité, vie privée ; type I à une date, type II sur une période), <b>SOC 3</b> (version publique résumée). Normes : ISAE 3402, SSAE 18.</p>
<h2>Analyser et rapporter</h2>
<p>Prioriser les résultats selon le risque, traiter les exceptions, rendre compte à la direction avec des recommandations, suivre la correction. Divulgation éthique des vulnérabilités découvertes chez des tiers.</p>
`},

{ id:"d7", day:"Domaine 7", title:"Opérations de sécurité", html: D(7,"Security Operations",13) + `
<h2>Investigations</h2>
<p>Collecte et manipulation des preuves, chaîne de possession, ordre de volatilité, copie bit à bit avec hachage, admissibilité (pertinence, fiabilité, légalité), règles de la meilleure preuve. Types de preuves : réelle, documentaire, testimoniale, démonstrative.</p>
<h2>Journalisation et surveillance</h2>
<p>SIEM, SOAR, UEBA, surveillance continue, renseignement sur les menaces, chasse aux menaces, gestion des journaux (protection, rétention, synchronisation des horloges), surveillance de la sortie (egress).</p>
<h2>Concepts d'exploitation</h2>
<p>Besoin d'en connaître, moindre privilège, séparation des tâches, rotation des postes, gestion des comptes à privilèges, accords de niveau de service.</p>
<h2>Gestion des changements, des configurations et des correctifs</h2>
<p>Demande, revue, approbation, test, déploiement, documentation. Configuration de référence, inventaire, contrôle des versions. Correctifs priorisés selon le risque et testés.</p>
<h2>Gestion des incidents</h2>
<p>Détection, réponse, atténuation (confinement), rapport, rétablissement, remédiation, retour d'expérience. Mesures préventives : pare-feu, IDS/IPS, listes d'autorisation, antimalware, bac à sable, honeypots, filtrage.</p>
<h2>Reprise et continuité</h2>
${T(["Stratégie","Délai de reprise"],[["Site miroir / actif-actif","Quasi immédiat"],["Site chaud","Heures"],["Site tiède","Jours"],["Site froid","Semaines"],["Cloud (reprise en tant que service)","Variable selon le contrat"]])}
<p>Sauvegardes complètes, incrémentales, différentielles ; réplication ; tests du plan : lecture, parcours, sur table, simulation, parallèle, interruption complète.</p>
<h2>Sécurité physique et des personnes</h2>
<p>Contrôle d'accès aux sites, sécurité des voyages, gestion de crise, sécurité du personnel en situation d'urgence. Toujours : la vie humaine d'abord.</p>
`},

{ id:"d8", day:"Domaine 8", title:"Sécurité du développement logiciel", html: D(8,"Software Development Security",10) + `
<h2>Cycles de développement</h2>
<p>Cascade, spirale (centré sur le risque), agile (Scrum, Kanban), DevOps et DevSecOps (sécurité intégrée et automatisée dans le pipeline CI/CD), développement rapide, prototypage. Modèles de maturité : CMMI, SAMM d'OWASP, BSIMM.</p>
<h2>La sécurité dans le cycle de vie</h2>
<ol><li>Exigences : besoins de sécurité et de conformité.</li><li>Conception : modélisation des menaces, architecture sécurisée.</li><li>Développement : codage sécurisé, revues de code, SAST.</li><li>Tests : DAST, fuzzing, tests d'intrusion, recette.</li><li>Déploiement : configuration sécurisée, signature du code.</li><li>Exploitation et maintenance : correctifs, surveillance, gestion des changements.</li><li>Retrait : suppression sûre des données.</li></ol>
<h2>Vulnérabilités courantes</h2>
<p>Injections (SQL, commandes), XSS, CSRF, dépassement de tampon, désérialisation non sûre, contrôle d'accès défaillant, mauvaise configuration, composants vulnérables, secrets codés en dur, journalisation insuffisante. Référence : OWASP Top 10.</p>
<h2>Bonnes pratiques de codage</h2>
<p>Valider toutes les entrées, encoder les sorties, requêtes paramétrées, gestion sûre des erreurs (sans divulgation), gestion sûre des sessions, moindre privilège pour les applications, gestion des secrets dans un coffre.</p>
<h2>Logiciels acquis et chaîne d'approvisionnement</h2>
<p>COTS, logiciels libres, SaaS, développement externalisé : évaluer la sécurité, exiger des preuves (tests, certifications), suivre les composants avec une <b>SBOM</b> (nomenclature logicielle), surveiller les vulnérabilités des bibliothèques (analyse de composition, SCA), séquestre du code source.</p>
<h2>Bases de données</h2>
<p>Agrégation (des données anodines deviennent sensibles ensemble), inférence (déduire une information sensible), polyinstanciation (plusieurs versions selon le niveau d'habilitation), propriétés ACID des transactions, vues pour restreindre l'accès.</p>
<h2>IA et code généré</h2>
<p>Le code produit par des assistants IA doit passer par les mêmes revues et tests que le code humain ; attention aux secrets, aux dépendances inventées et aux failles reproduites.</p>
`}
];

const exam = `
<p class="lead">Le CISSP (Certified Information Systems Security Professional) d'ISC2 est la certification généraliste la plus reconnue en sécurité. Vérifie les informations à jour sur isc2.org avant de t'inscrire.</p>
<div class="grid">
<div class="card"><span class="stat">100–150</span><span class="t">questions (version anglaise adaptative)</span><span class="d">L'examen s'arrête quand le niveau est établi</span></div>
<div class="card"><span class="stat">3 h</span><span class="t">de durée maximale</span><span class="d">Version anglaise en format adaptatif (CAT)</span></div>
<div class="card"><span class="stat">700</span><span class="t">sur 1 000 pour réussir</span><span class="d">Score pondéré</span></div>
</div>
<p>En format adaptatif, on ne peut pas revenir sur une question déjà validée. D'autres langues existent en format linéaire, plus long ; vérifie lesquelles sur isc2.org. L'examen se passe en centre Pearson VUE. Vise au moins 75 % aux examens blancs de ce site.</p>
<h2>Les 8 domaines</h2>
<div class="tablewrap"><table><thead><tr><th>Domaine</th><th>Poids</th></tr></thead><tbody>
<tr><td>1. Security and Risk Management</td><td class="num">16 %</td></tr>
<tr><td>2. Asset Security</td><td class="num">10 %</td></tr>
<tr><td>3. Security Architecture and Engineering</td><td class="num">13 %</td></tr>
<tr><td>4. Communication and Network Security</td><td class="num">13 %</td></tr>
<tr><td>5. Identity and Access Management (IAM)</td><td class="num">13 %</td></tr>
<tr><td>6. Security Assessment and Testing</td><td class="num">12 %</td></tr>
<tr><td>7. Security Operations</td><td class="num">13 %</td></tr>
<tr><td>8. Software Development Security</td><td class="num">10 %</td></tr>
</tbody></table></div>
<p>Un module de ce site correspond à chaque domaine.</p>
<h2>Après l'examen</h2>
<p>Il faut <b>5 ans d'expérience professionnelle rémunérée</b> dans au moins 2 des 8 domaines. Un diplôme universitaire ou une certification reconnue par ISC2 (par exemple CISA, CISM ou Security+) peut valoir 1 an. Sans l'expérience, on devient <b>Associate of ISC2</b> et on a 6 ans pour l'acquérir. Il faut ensuite être parrainé (endorsement) par un membre certifié. Maintien : 120 CPE sur 3 ans et une cotisation annuelle.</p>
<h2>Penser comme un CISSP</h2>
<ol><li>Pense en conseiller de la direction, pas en technicien qui répare.</li><li>La sécurité des personnes passe avant tout le reste.</li><li>Entre plusieurs bonnes réponses, choisis celle qui traite la cause, à l'échelle de l'organisation, et qui respecte les processus (politique, risque, approbation).</li><li>Le CISSP aime les étapes dans l'ordre : on évalue avant d'agir, on obtient l'approbation avant de déployer.</li><li>Lis chaque mot : « BEST », « FIRST », « MOST », « LEAST » changent la réponse.</li></ol>
<h2>Plan de révision sur 10 semaines</h2>
<div class="tablewrap"><table><thead><tr><th>Semaine</th><th>Travail</th></tr></thead><tbody>
<tr><td>1 et 2</td><td>Domaine 1 (le plus lourd) et domaine 2</td></tr><tr><td>3 et 4</td><td>Domaines 3 et 4</td></tr><tr><td>5</td><td>Domaine 5</td></tr><tr><td>6</td><td>Domaines 6 et 7</td></tr><tr><td>7</td><td>Domaine 8</td></tr><tr><td>8 à 10</td><td>Examens blancs, guide et questions officiels ISC2, révision des erreurs</td></tr>
</tbody></table></div>
`;

CERTS.push({
  id:"cissp", title:"CISSP", org:"ISC2",
  intro:"La certification généraliste de référence en sécurité de l'information : 8 domaines, de la gestion des risques au développement sécurisé, avec un regard de conseiller de la direction.",
  examMinutes:180, examQuestions:150, passMark:75,
  modules, exam, questions:[]
});
})();
