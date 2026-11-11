/* CISSP : parcours débutant ajouté à chaque domaine (ordre des modules de cissp.js). Contenu original ; entreprises fictives. */
PAS("cissp", [
/* d1 Sécurité et gestion des risques */
{voc:[
["Triade CIA (CID en français)","<b>Confidentialité</b> : seules les personnes autorisées voient l'information. <b>Intégrité</b> : l'information n'est pas modifiée sans autorisation. <b>Disponibilité</b> : elle est accessible quand on en a besoin."],
["Diligence raisonnable / soin raisonnable","Due diligence : s'informer, analyser avant d'agir. Due care : agir comme le ferait une personne prudente (mettre les mesures en place)."],
["Code d'éthique ISC2","Quatre canons, dans l'ordre : protéger la société, agir honorablement, servir les mandants avec compétence, faire progresser la profession."],
["Mesure administrative, technique, physique","Politique et formation ; pare-feu et chiffrement ; badge et caméra."],
["Contre-mesure compensatoire","Mesure de remplacement quand la mesure normale est impossible."]],
ex:`<p>Une clinique fictive, <b>Clinique du Plateau</b>, analyse son dossier patient informatisé :</p>
<ul><li><b>Confidentialité</b> : un voisin du patient ne doit pas lire son diagnostic → contrôle d'accès par rôle.</li>
<li><b>Intégrité</b> : un dosage de médicament modifié peut tuer → journalisation et validation.</li>
<li><b>Disponibilité</b> : aux urgences, le dossier doit s'ouvrir la nuit → serveur de secours.</li></ul>
<p>Ici, l'intégrité et la disponibilité pèsent plus que la confidentialité, car la vie du patient est en jeu. La protection des personnes passe toujours en premier.</p>`,
steps:[
"Identifier ce qui a de la valeur et ce qui doit être protégé (C, I ou D).",
"Connaître les lois et obligations applicables (protection des données, secteur).",
"Apprécier les risques : menaces, vulnérabilités, probabilité, impact.",
"Choisir des mesures proportionnées (administratives, techniques, physiques).",
"Documenter dans des politiques et former les personnes.",
"Surveiller et revoir régulièrement."],
exo:[
["un collègue te demande de fermer les yeux sur un accès non autorisé « pour ne pas faire de vagues ». Que dit le code d'éthique ?","<p>Le premier canon est de protéger la société et l'infrastructure. Agir honorablement impose de ne pas couvrir une faute. Tu signales par les canaux prévus.</p>"],
["un ancien système ne peut pas être chiffré. Quelle mesure proposer ?","<p>Une <b>mesure compensatoire</b> : isoler le système dans un segment réseau dédié, limiter les accès et renforcer la surveillance, en attendant son remplacement.</p>"]],
piege:[
"La sécurité des personnes passe avant les données et les biens.",
"Au CISSP, pense comme un conseiller de la direction, pas comme un technicien.",
"Ne pas confondre due diligence (étudier) et due care (agir)."]},

/* d2 Sécurité des actifs */
{voc:[
["Classification","Ranger l'information par niveau de sensibilité : public, interne, confidentiel, secret."],
["Propriétaire des données","Responsable métier qui décide de la classification et des accès."],
["Dépositaire (custodian)","Service, souvent l'informatique, qui applique les protections décidées (sauvegarde, droits)."],
["Rémanence","Données qui restent lisibles après une suppression simple."],
["Effacement, purge, destruction","Effacer (réutilisation interne), purger (rendre irrécupérable même en laboratoire), détruire physiquement (broyage, incinération)."],
["Données au repos, en transit, en usage","Stockées ; en circulation sur un réseau ; en cours de traitement en mémoire."]],
ex:`<p>À <b>Banque Lagune</b>, un fichier de salaires est classé « confidentiel » par le DRH (propriétaire). L'informatique (dépositaire) le chiffre sur le serveur (au repos), impose TLS pour son envoi (en transit), et limite son accès au service RH.</p>
<p>À la fin de vie des disques durs, la banque ne se contente pas de « formater » : les disques sont purgés puis broyés par un prestataire qui fournit un certificat de destruction.</p>`,
steps:[
"Inventorier les actifs et désigner un propriétaire pour chacun.",
"Classer l'information selon son impact si elle fuitait ou était modifiée.",
"Étiqueter les documents et les supports.",
"Appliquer les protections prévues pour chaque niveau.",
"Conserver seulement le temps nécessaire, puis détruire de façon sûre."],
exo:[
["qui décide qu'un fichier client est « confidentiel » : l'administrateur système ou le directeur commercial ?","<p>Le directeur commercial, <b>propriétaire</b> des données. L'administrateur est dépositaire : il applique les protections.</p>"],
["une entreprise revend des ordinateurs à des employés. Suffit-il de supprimer les fichiers ?","<p>Non : la suppression laisse des données récupérables (rémanence). Il faut un effacement sûr avec un outil adapté, vérifié, ou remplacer le disque.</p>"]],
piege:[
"Le propriétaire décide ; le dépositaire exécute.",
"Formater n'est pas effacer de façon sûre.",
"Pour les disques SSD, l'écrasement classique peut ne pas suffire : chiffrement complet puis effacement cryptographique, ou destruction physique."]},

/* d3 Architecture et ingénierie de sécurité */
{voc:[
["Chiffrement symétrique","Une seule clé partagée pour chiffrer et déchiffrer (AES). Rapide, mais il faut échanger la clé de façon sûre."],
["Chiffrement asymétrique","Une paire de clés : publique (à donner) et privée (à garder). Lent, mais règle l'échange de clés et permet la signature (RSA, courbes elliptiques)."],
["Hachage","Empreinte de taille fixe d'un message (SHA-256). Sens unique : on ne retrouve pas le message. Sert à vérifier l'intégrité."],
["Signature numérique","Empreinte chiffrée avec la clé privée de l'expéditeur : prouve l'origine et l'intégrité, et empêche de nier l'envoi."],
["Modèles Bell-LaPadula et Biba","Bell-LaPadula protège la confidentialité (pas de lecture au-dessus, pas d'écriture en dessous). Biba protège l'intégrité (l'inverse)."],
["Moindre privilège, séparation des tâches, défense en profondeur","Principes de conception sûrs."]],
ex:`<p>Awa envoie un contrat à Koffi :</p>
<ol><li>Elle calcule l'empreinte du contrat et la chiffre avec <b>sa clé privée</b> : c'est la signature.</li>
<li>Elle génère une clé AES, chiffre le contrat avec cette clé (rapide).</li>
<li>Elle chiffre la clé AES avec <b>la clé publique de Koffi</b> : seul Koffi pourra l'ouvrir.</li>
<li>Koffi déchiffre la clé AES avec sa clé privée, puis le contrat.</li>
<li>Il vérifie la signature avec la clé publique d'Awa : le contrat vient bien d'elle et n'a pas changé.</li></ol>
<p>C'est le principe du chiffrement <b>hybride</b> utilisé par TLS et la messagerie sécurisée.</p>`,
steps:[
"Pour la confidentialité d'un gros volume : chiffrement symétrique.",
"Pour échanger la clé : chiffrement asymétrique avec la clé publique du destinataire.",
"Pour l'intégrité seule : hachage.",
"Pour l'origine et la non-répudiation : signature avec la clé privée de l'expéditeur.",
"Pour faire confiance à une clé publique : certificat émis par une autorité de certification (PKI)."],
exo:[
["Awa veut que seul Koffi puisse lire son message. Avec quelle clé chiffre-t-elle ?","<p>Avec la <b>clé publique de Koffi</b>. Seule la clé privée de Koffi pourra le déchiffrer.</p>"],
["Awa veut prouver que c'est elle qui a écrit le message. Quelle clé utilise-t-elle ?","<p>Sa <b>propre clé privée</b> pour signer. Tout le monde peut vérifier avec sa clé publique.</p>"],
["un utilisateur « secret » peut-il écrire dans un document « public » selon Bell-LaPadula ?","<p>Non : la règle « pas d'écriture vers le bas » empêche de faire fuir de l'information secrète vers un niveau inférieur.</p>"]],
piege:[
"Chiffrer avec la clé publique du destinataire = confidentialité ; signer avec sa propre clé privée = authenticité.",
"Le hachage ne chiffre pas : il ne se déchiffre pas.",
"Bell-LaPadula = confidentialité ; Biba = intégrité."]},

/* d4 Communications et réseaux */
{voc:[
["Modèle OSI","7 couches : physique, liaison, réseau, transport, session, présentation, application. Sert à situer un protocole ou une attaque."],
["TCP / UDP","TCP : fiable, avec connexion (poignée de main en 3 temps). UDP : rapide, sans garantie (voix, vidéo, DNS)."],
["Pare-feu","Filtre le trafic selon des règles. À états : il suit les connexions ouvertes."],
["Segmentation, DMZ","Découper le réseau en zones ; la DMZ héberge les serveurs exposés à Internet, séparés du réseau interne."],
["VPN","Tunnel chiffré à travers un réseau non sûr (IPsec, TLS)."],
["IDS / IPS","Détection (alerte) / prévention (bloque) d'intrusion."]],
ex:`<p>Le réseau d'un distributeur pétrolier fictif, <b>Sahel Énergie</b> :</p>
<ul><li>Internet → pare-feu → <b>DMZ</b> (site web, messagerie) → pare-feu → réseau interne bureautique.</li>
<li>Le réseau industriel des dépôts (automates de pompage) est dans une zone séparée, sans accès Internet direct.</li>
<li>Les commerciaux en déplacement passent par un VPN avec MFA.</li>
<li>Un IPS surveille le trafic entre la DMZ et l'interne.</li></ul>
<p>Si le site web est piraté, l'attaquant reste bloqué dans la DMZ.</p>`,
steps:[
"Situer le problème dans le modèle OSI (câble ? adresse IP ? application ?).",
"Découper le réseau en zones selon la sensibilité.",
"Filtrer entre les zones : tout est interdit sauf ce qui est autorisé.",
"Chiffrer les flux sensibles (TLS, VPN).",
"Surveiller (IDS/IPS, journaux) et réagir."],
exo:[
["à quelle couche OSI se situe une adresse IP ? Et une adresse MAC ?","<p>IP : couche 3 (réseau). MAC : couche 2 (liaison de données).</p>"],
["pourquoi placer le serveur web dans une DMZ plutôt que dans le réseau interne ?","<p>Il est exposé à Internet donc plus exposé aux attaques. En DMZ, une compromission ne donne pas un accès direct au réseau interne.</p>"]],
piege:[
"Règle par défaut d'un pare-feu : refuser tout ce qui n'est pas explicitement autorisé.",
"Un IDS alerte, un IPS bloque.",
"Les mots de passe envoyés en clair (Telnet, FTP, HTTP) sont une faiblesse : préférer SSH, SFTP, HTTPS."]},

/* d5 Identités et accès */
{voc:[
["Identification, authentification, autorisation, traçabilité","Dire qui on est (identifiant) ; le prouver ; recevoir des droits ; laisser des traces (journaux)."],
["Facteurs d'authentification","Ce que je sais (mot de passe), ce que je possède (téléphone, carte), ce que je suis (empreinte). Le MFA combine des facteurs de types différents."],
["FAR / FRR / CER","Biométrie : taux de fausses acceptations (type II), taux de faux rejets (type I), point d'égalité des deux (plus il est bas, meilleur est le système)."],
["DAC, MAC, RBAC, ABAC","Accès décidé par le propriétaire ; par des étiquettes imposées par le système ; par le rôle ; par des attributs (heure, lieu, service)."],
["Fédération, SSO","Une seule connexion pour plusieurs applications, parfois entre organisations (SAML, OpenID Connect)."],
["Cycle de vie des accès","Arrivée, mobilité, départ, avec des revues périodiques."]],
ex:`<p>À <b>SavaneTel</b>, Moussa passe du service clients au service facturation :</p>
<ul><li>Son manager demande les nouveaux droits du rôle « facturation » (RBAC).</li>
<li>Ses anciens droits « service clients » sont <b>retirés</b> le même jour : sinon il accumulerait les droits.</li>
<li>Six mois plus tard, la revue des accès confirme que ses droits correspondent à son poste.</li>
<li>Quand il quitte l'entreprise, son compte est désactivé dès son dernier jour.</li></ul>`,
steps:[
"Créer une identité unique pour chaque personne (pas de compte partagé).",
"Authentifier de façon forte (MFA pour les accès sensibles et distants).",
"Attribuer les droits par rôle, selon le moindre privilège.",
"Ajuster les droits à chaque changement de poste.",
"Revoir les droits périodiquement et retirer immédiatement ceux des partants.",
"Journaliser les accès pour garder la traçabilité."],
exo:[
["mot de passe + code PIN : est-ce du MFA ?","<p>Non. Ce sont deux éléments du même type (ce que je sais). Le MFA exige des types différents, par exemple mot de passe + code reçu sur le téléphone.</p>"],
["un système biométrique laisse entrer des imposteurs. Quel taux est trop élevé ?","<p>Le <b>FAR</b> (fausses acceptations, erreur de type II). C'est l'erreur la plus grave pour la sécurité.</p>"]],
piege:[
"L'accumulation de droits lors des changements de poste est un constat d'audit fréquent.",
"Authentification = prouver qui on est ; autorisation = ce qu'on a le droit de faire.",
"Erreur de type I = faux rejet (gêne) ; type II = fausse acceptation (danger)."]},

/* d6 Évaluation et tests */
{voc:[
["Analyse de vulnérabilités","Recherche automatique de faiblesses connues. Elle ne les exploite pas."],
["Test d'intrusion","Exploitation contrôlée des faiblesses, avec une autorisation écrite et un périmètre défini, pour mesurer l'impact réel."],
["Boîte noire, grise, blanche","Le testeur ne sait rien ; en sait un peu ; a toute la documentation et le code."],
["Revue de code, test statique, test dynamique","Lecture du code ; analyse sans exécution (SAST) ; test de l'application qui tourne (DAST)."],
["Audit interne / externe / tiers","Par l'entreprise elle-même ; par un cabinet pour elle ; par un organisme indépendant pour un client ou un régulateur."],
["Faux positif / faux négatif","Alerte sur un problème qui n'existe pas / problème réel non détecté."]],
ex:`<p><b>FlashPay</b> fait tester son application de paiement avant le lancement :</p>
<ol><li>Lettre d'autorisation signée par la direction, avec périmètre, dates et contacts d'urgence.</li>
<li>Analyse de vulnérabilités : 40 alertes, dont 12 faux positifs écartés après vérification.</li>
<li>Test d'intrusion en boîte grise : le testeur réussit à voir les transactions d'un autre client en modifiant un numéro dans l'adresse web.</li>
<li>Rapport classé par gravité, présenté aux développeurs et à la direction ; correction puis nouveau test.</li></ol>`,
steps:[
"Définir l'objectif, le périmètre et les règles d'engagement.",
"Obtenir l'autorisation écrite de la direction.",
"Choisir le type de test adapté (vulnérabilités, intrusion, revue de code).",
"Exécuter, vérifier les résultats, écarter les faux positifs.",
"Rapporter avec des recommandations classées par risque.",
"Vérifier la correction par un nouveau test."],
exo:[
["quelle est la première chose à obtenir avant un test d'intrusion ?","<p>L'<b>autorisation écrite</b> de la direction, avec le périmètre. Sans elle, le test est une attaque illégale.</p>"],
["un scanner ne trouve rien sur un serveur pourtant mal configuré. Comment s'appelle cette situation ?","<p>Un <b>faux négatif</b> : c'est le plus dangereux, car on se croit protégé.</p>"]],
piege:[
"Analyse de vulnérabilités ≠ test d'intrusion : la première ne prouve pas l'exploitation.",
"Pas d'autorisation écrite = pas de test.",
"Un faux négatif est plus grave qu'un faux positif."]},

/* d7 Opérations de sécurité */
{voc:[
["SIEM","Outil qui centralise les journaux, les met en corrélation et lève des alertes."],
["Gestion des changements","Tout changement en production est demandé, évalué, approuvé, testé, documenté."],
["Gestion des correctifs","Inventorier, tester puis déployer les mises à jour de sécurité, par ordre de criticité."],
["Sauvegarde complète, incrémentale, différentielle","Tout ; ce qui a changé depuis la dernière sauvegarde ; ce qui a changé depuis la dernière complète."],
["Site de secours chaud, tiède, froid","Prêt en quelques heures ; en quelques jours ; simple local à équiper (plusieurs semaines)."],
["Investigation numérique","Collecte et analyse des preuves en respectant la chaîne de possession et l'ordre de volatilité."]],
ex:`<p>Sauvegardes d'<b>Assur'Ivoire</b> : complète le dimanche, différentielle chaque soir. Panne le jeudi matin :</p>
<ul><li>Avec des <b>différentielles</b>, on restaure : complète de dimanche + différentielle de mercredi (2 jeux).</li>
<li>Avec des <b>incrémentales</b>, il aurait fallu : complète + lundi + mardi + mercredi (4 jeux). Sauvegarde plus rapide chaque soir, restauration plus longue.</li></ul>
<p>Une copie est conservée hors ligne : un rançongiciel ne peut pas la chiffrer.</p>`,
steps:[
"Journaliser les événements importants et les centraliser (SIEM).",
"Contrôler chaque changement avant la mise en production.",
"Corriger les vulnérabilités selon leur criticité.",
"Sauvegarder (règle 3-2-1 : 3 copies, 2 supports, 1 hors site) et tester la restauration.",
"Préparer la reprise (site de secours) selon les RTO et RPO.",
"En cas d'incident, préserver les preuves avant d'agir."],
exo:[
["dans quel ordre collecter les preuves d'un ordinateur allumé : disque dur ou mémoire vive ?","<p>La <b>mémoire vive</b> d'abord : elle disparaît à l'extinction (ordre de volatilité). Puis le disque.</p>"],
["un administrateur applique un correctif urgent directement en production, sans ticket. Problème ?","<p>Oui : le changement contourne le processus. Même en urgence, il faut une procédure d'urgence avec approbation (même a posteriori), documentation et possibilité de retour arrière.</p>"]],
piege:[
"Une sauvegarde non testée n'est pas une sauvegarde fiable.",
"Différentielle = 2 jeux à restaurer ; incrémentale = tous depuis la complète.",
"Site chaud = cher mais rapide ; site froid = bon marché mais lent."]},

/* d8 Sécurité du développement logiciel */
{voc:[
["Cycle de développement sécurisé","Intégrer la sécurité à chaque étape : besoins, conception, code, tests, mise en production, maintenance."],
["Injection SQL","Le pirate glisse des commandes dans un champ de saisie pour qu'elles soient exécutées par la base de données."],
["XSS (script intersite)","Le pirate fait exécuter un script dans le navigateur d'une autre personne."],
["Validation des entrées","Vérifier tout ce qui vient de l'utilisateur : type, longueur, format, caractères autorisés."],
["Requête paramétrée","Façon d'écrire les requêtes qui sépare le code des données : elle bloque l'injection SQL."],
["DevSecOps","Automatiser les contrôles de sécurité dans la chaîne de livraison (analyse du code, des dépendances)."]],
ex:`<p>Sur le site de <b>Banque Lagune</b>, le champ « numéro de compte » envoie directement le texte saisi à la base de données. Un pirate tape une instruction qui ajoute « ou toujours vrai » à la requête : la page affiche tous les comptes.</p>
<p>Correction : requête paramétrée (la saisie est traitée comme une donnée, jamais comme du code), validation que le champ ne contient que des chiffres, compte de base de données avec des droits minimaux, et un test automatique ajouté à la chaîne de livraison.</p>`,
steps:[
"Écrire les exigences de sécurité avec les besoins fonctionnels.",
"Analyser les menaces lors de la conception.",
"Coder de façon sûre : valider les entrées, encoder les sorties, requêtes paramétrées.",
"Tester : revue de code, analyse statique et dynamique, dépendances.",
"Séparer développement, test et production ; contrôler la mise en production.",
"Corriger les failles découvertes après la livraison."],
exo:[
["quelle est la meilleure protection contre l'injection SQL ?","<p>Les <b>requêtes paramétrées</b> (ou procédures stockées bien écrites), complétées par la validation des entrées. Un pare-feu applicatif aide mais ne remplace pas un code sûr.</p>"],
["à quelle étape corriger une faille coûte-t-il le moins cher ?","<p>À la <b>conception</b> (ou aux besoins). Plus la faille est découverte tard, plus la correction coûte cher.</p>"]],
piege:[
"Ne jamais faire confiance à une saisie de l'utilisateur.",
"Les développeurs ne doivent pas mettre eux-mêmes leur code en production (séparation des tâches).",
"Les bibliothèques externes aussi doivent être suivies et mises à jour."]}
]);
