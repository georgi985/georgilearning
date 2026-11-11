/* Security+ : parcours débutant ajouté à chaque module (ordre des modules de secplus.js). Contenu original ; entreprises fictives. */
PAS("secplus", [
/* s1 Concepts généraux */
{voc:[
["CIA","Confidentialité, intégrité, disponibilité : les trois objectifs de base."],
["Non-répudiation","Impossible de nier avoir fait une action (grâce à la signature numérique et aux journaux)."],
["AAA","Authentification (prouver qui on est), autorisation (ce qu'on peut faire), comptabilisation (traces des actions)."],
["Zéro confiance (Zero Trust)","On ne fait confiance à personne par défaut, même à l'intérieur du réseau : chaque accès est vérifié."],
["Catégories de contrôles","Technique, managérial, opérationnel, physique."],
["Types de contrôles","Préventif, dissuasif, détectif, correctif, compensatoire, directif."]],
ex:`<p>À l'entrée de l'agence d'une banque fictive :</p>
${'<div class="tablewrap"><table><thead><tr><th>Mesure</th><th>Catégorie</th><th>Type</th></tr></thead><tbody><tr><td>Panneau « site sous vidéosurveillance »</td><td>Physique</td><td>Dissuasif</td></tr><tr><td>Sas d\'entrée à badge</td><td>Physique</td><td>Préventif</td></tr><tr><td>Caméra enregistrée</td><td>Physique</td><td>Détectif</td></tr><tr><td>Restauration d\'une sauvegarde</td><td>Technique</td><td>Correctif</td></tr><tr><td>Politique de sécurité</td><td>Managérial</td><td>Directif</td></tr><tr><td>Gardien formé qui fait des rondes</td><td>Opérationnel</td><td>Détectif / dissuasif</td></tr></tbody></table></div>'}`,
steps:[
"Demande-toi d'abord quel objectif est menacé : C, I ou D.",
"Classe la mesure par catégorie : qui ou quoi la met en œuvre ?",
"Classe-la par type : quand agit-elle (avant, pendant, après) ?",
"En Zero Trust, vérifie chaque accès : identité, appareil, contexte."],
exo:[
["un journal d'audit qui enregistre qui a modifié un fichier soutient quel principe ?","<p>La <b>comptabilisation</b> (traçabilité) et la <b>non-répudiation</b> : on peut prouver qui a agi.</p>"],
["un message d'avertissement à la connexion (« accès réservé, toute action est enregistrée ») est de quel type ?","<p><b>Dissuasif</b> (et directif) : il décourage sans empêcher techniquement.</p>"]],
piege:[
"Une même mesure peut appartenir à plusieurs types ; choisis le plus évident pour la question.",
"Le hachage protège l'intégrité, pas la confidentialité.",
"Zero Trust ne veut pas dire « pas de pare-feu » : c'est une vérification continue."]},

/* s2 Cryptographie et PKI */
{voc:[
["Symétrique (AES)","Une clé pour chiffrer et déchiffrer. Rapide."],
["Asymétrique (RSA, ECC)","Clé publique et clé privée. Sert à échanger des clés et à signer."],
["Hachage (SHA-256)","Empreinte unique et irréversible. Le « sel » (valeur aléatoire ajoutée) protège les mots de passe hachés."],
["Certificat numérique","Document signé par une autorité de certification (AC) qui lie une clé publique à une identité (un site, une personne)."],
["Révocation (CRL, OCSP)","Liste des certificats annulés / vérification en ligne de l'état d'un certificat."],
["Chiffrement de disque, de fichier, de transport","BitLocker, chiffrement d'un fichier, TLS."]],
ex:`<p>Quand tu ouvres le site de ta banque en HTTPS :</p>
<ol><li>Le site t'envoie son <b>certificat</b>. Ton navigateur vérifie qu'il est signé par une AC de confiance, qu'il n'est pas expiré ni révoqué, et que le nom correspond au site.</li>
<li>Le navigateur et le site se mettent d'accord sur une <b>clé de session symétrique</b> grâce à la cryptographie asymétrique.</li>
<li>Tout l'échange est ensuite chiffré avec cette clé (AES), rapide.</li></ol>
<p>Si le certificat est faux, le navigateur affiche une alerte : c'est peut-être une attaque de l'homme du milieu.</p>`,
steps:[
"Confidentialité d'un gros volume → symétrique.",
"Échange de clé ou signature → asymétrique.",
"Vérifier qu'un fichier n'a pas changé → hachage.",
"Stocker des mots de passe → hachage lent avec sel (bcrypt, PBKDF2, Argon2), jamais en clair ni chiffré de façon réversible.",
"Faire confiance à une clé publique → certificat d'une AC."],
exo:[
["pourquoi ajouter un sel avant de hacher un mot de passe ?","<p>Pour que deux personnes ayant le même mot de passe aient des empreintes différentes, et pour rendre inutiles les tables pré-calculées (tables arc-en-ciel).</p>"],
["la clé privée d'un serveur web a été volée. Que faire en priorité pour le certificat ?","<p>Le <b>révoquer</b> auprès de l'AC, générer une nouvelle paire de clés et obtenir un nouveau certificat.</p>"]],
piege:[
"Clé publique du destinataire pour chiffrer ; clé privée de l'expéditeur pour signer.",
"Hachage ≠ chiffrement (pas de clé, pas de retour).",
"Un certificat expiré ou révoqué ne doit pas être accepté."]},

/* s3 Acteurs, vecteurs, ingénierie sociale */
{voc:[
["Acteurs de menace","État (très puissant, objectifs d'espionnage), crime organisé (argent), hacktiviste (idéologie), initié (employé), amateur, concurrent."],
["Vecteur d'attaque","Le chemin d'entrée : e-mail, SMS, clé USB, réseau Wi-Fi, fournisseur, site web."],
["Hameçonnage (phishing)","Faux message qui pousse à cliquer, donner un mot de passe ou payer. Smishing : par SMS. Vishing : par téléphone."],
["Usurpation de dirigeant (BEC)","Faux message du « directeur » qui demande un virement urgent."],
["Prétexte","Histoire inventée pour gagner la confiance (« je suis du support informatique »)."],
["Point d'eau (watering hole)","Piéger un site que les victimes visitent souvent."]],
ex:`<p>Le comptable d'une société fictive reçoit un e-mail du « DG » : « Je suis en réunion, fais un virement urgent de 25 M FCFA à ce fournisseur, je t'expliquerai ». L'adresse ressemble à celle du DG à une lettre près.</p>
<p>Indices : urgence, secret, changement de procédure, adresse légèrement différente. Bonne réaction : ne pas répondre à l'e-mail, rappeler le DG sur son numéro connu, appliquer la procédure de double validation des virements, signaler l'e-mail à la sécurité.</p>`,
steps:[
"Repérer les signaux : urgence, peur, autorité, récompense, demande inhabituelle.",
"Vérifier l'expéditeur par un autre canal connu.",
"Ne jamais donner de mot de passe ou de code reçu par SMS.",
"Signaler le message à l'équipe de sécurité.",
"Côté entreprise : sensibilisation, filtrage des e-mails, double validation des paiements."],
exo:[
["un faux technicien appelle un employé pour obtenir son code MFA. Comment s'appelle cette attaque ?","<p>Du <b>vishing</b> (hameçonnage vocal) avec un prétexte.</p>"],
["quel acteur de menace a en général le plus de moyens et de patience ?","<p>Un acteur <b>étatique</b> (souvent appelé APT, menace persistante avancée).</p>"]],
piege:[
"Le spear phishing vise une personne précise ; le whaling vise un dirigeant.",
"Le typosquattage utilise des noms de domaine proches du vrai.",
"La meilleure défense contre le BEC est une procédure de vérification hors ligne."]},

/* s4 Vulnérabilités, logiciels malveillants, attaques */
{voc:[
["Rançongiciel","Chiffre les fichiers et demande une rançon ; souvent vole aussi les données (double extorsion)."],
["Cheval de Troie, ver, logiciel espion, rootkit","Se cache dans un logiciel normal ; se propage seul ; espionne ; se cache au cœur du système."],
["Zero-day","Faille inconnue de l'éditeur, sans correctif disponible."],
["Injection SQL, XSS","Attaques sur les applications web par des saisies piégées."],
["Débordement de mémoire tampon","Le programme écrit plus de données que prévu et peut exécuter du code pirate."],
["Attaques par mot de passe","Force brute, dictionnaire, pulvérisation (un mot de passe courant essayé sur beaucoup de comptes), réutilisation de mots de passe volés."]],
ex:`<p>Les journaux d'une messagerie montrent, en une heure, des tentatives de connexion sur 800 comptes différents, chacune avec le mot de passe « Abidjan2026! », et une seule tentative par compte.</p>
<p>Diagnostic : <b>pulvérisation de mot de passe</b>. Le verrouillage de compte ne se déclenche pas car il n'y a qu'un essai par compte. Défenses : MFA, interdiction des mots de passe courants, détection des connexions multiples depuis une même source.</p>`,
steps:[
"Lire les indices : un essai par compte (pulvérisation), beaucoup d'essais sur un compte (force brute), fichiers renommés (rançongiciel).",
"Identifier la faiblesse exploitée (mot de passe, correctif manquant, saisie non validée).",
"Choisir la mesure qui coupe la cause : MFA, correctif, validation des entrées.",
"Compléter par la détection (journaux, EDR) et la restauration (sauvegardes)."],
exo:[
["un programme se copie seul d'un ordinateur à l'autre sans action de l'utilisateur. Qu'est-ce ?","<p>Un <b>ver</b>.</p>"],
["quelle est la meilleure défense contre un zero-day ?","<p>Il n'y a pas de correctif : on s'appuie sur la défense en profondeur (moindre privilège, segmentation, EDR qui repère les comportements anormaux, sauvegardes).</p>"]],
piege:[
"Un virus a besoin d'une action (ouvrir un fichier) ; un ver se propage seul.",
"Le rootkit vise à rester caché avec des privilèges élevés.",
"Les indices dans les journaux donnent la réponse : lis-les attentivement."]},

/* s5 Architecture : cloud, réseau, systèmes */
{voc:[
["IaaS, PaaS, SaaS","Infrastructure (tu gères le système), plateforme (tu gères l'application), logiciel (tu gères surtout tes données et tes accès)."],
["Responsabilité partagée","Dans le cloud, le fournisseur protège sa partie, le client protège la sienne (données, comptes, configuration)."],
["Segmentation, VLAN, DMZ","Séparer les zones du réseau pour limiter la propagation."],
["Conteneurs, virtualisation","Applications isolées sur un même système ; machines virtuelles sur un même serveur physique."],
["IoT, OT/SCADA","Objets connectés ; systèmes industriels (pompes, vannes), souvent anciens et difficiles à corriger."],
["SASE / SD-WAN","Services de sécurité et de réseau fournis depuis le cloud, au plus près de l'utilisateur."]],
ex:`<p>Une société fictive stocke ses factures dans un espace de stockage cloud. Un employé a laissé l'espace en « accès public ». Les factures sont indexées par des moteurs de recherche.</p>
<p>Qui est responsable ? <b>Le client</b> : la configuration des accès fait partie de sa part de responsabilité, même en IaaS ou PaaS. Mesures : interdire le public par défaut, outil de contrôle de configuration (CSPM), revue des droits.</p>`,
steps:[
"Identifier le modèle (IaaS, PaaS, SaaS) pour savoir ce que tu dois protéger.",
"Séparer les zones selon la sensibilité.",
"Isoler les systèmes fragiles (OT, IoT) dans des segments dédiés.",
"Appliquer des configurations de base sûres et les vérifier en continu."],
exo:[
["en SaaS (messagerie en ligne), qui gère les correctifs du serveur ?","<p>Le <b>fournisseur</b>. Le client gère ses comptes, ses accès, le MFA et ses données.</p>"],
["comment protéger des caméras IP qu'on ne peut pas mettre à jour ?","<p>Les placer dans un <b>VLAN isolé</b>, sans accès Internet direct, changer les mots de passe par défaut et filtrer leurs flux.</p>"]],
piege:[
"Dans tous les modèles cloud, les données et les accès restent au client.",
"Les mots de passe par défaut des objets connectés sont une faiblesse classique.",
"Un réseau « plat » (non segmenté) facilite la propagation d'une attaque."]},

/* s6 Protection des données et résilience */
{voc:[
["États des données","Au repos, en transit, en usage."],
["Masquage, tokenisation, anonymisation","Cacher une partie (**** 1234) ; remplacer par un jeton sans valeur ; supprimer définitivement le lien avec la personne."],
["Souveraineté des données","Les données sont soumises aux lois du pays où elles sont stockées."],
["Haute disponibilité","Redondance (deux serveurs, deux liens) et répartition de charge pour éviter l'arrêt."],
["Sauvegarde, instantané, réplication","Copie restaurable ; image d'un état à un instant ; copie en continu vers un autre site."],
["RTO / RPO","Temps d'arrêt acceptable / perte de données acceptable."]],
ex:`<p>Un service de paiement fictif ne garde pas les numéros de carte : il les remplace par des <b>jetons</b> (tokenisation). Si la base est volée, les jetons sont inutiles. Seul un coffre séparé, très protégé, fait le lien.</p>
<p>Pour la disponibilité : deux serveurs derrière un répartiteur de charge, réplication vers un second centre, sauvegarde quotidienne hors ligne testée chaque mois.</p>`,
steps:[
"Classer les données et réduire ce qu'on conserve.",
"Protéger selon l'état : chiffrement au repos et en transit, contrôle d'accès en usage.",
"Masquer ou tokeniser les données sensibles quand on n'a pas besoin de les voir.",
"Prévoir la redondance selon le RTO et le RPO.",
"Tester les restaurations."],
exo:[
["un centre d'appel doit vérifier l'identité d'un client sans voir son numéro de carte complet. Quelle technique ?","<p>Le <b>masquage</b> : n'afficher que les 4 derniers chiffres.</p>"],
["RPO de 5 minutes : sauvegarde quotidienne ou réplication ?","<p><b>Réplication</b> (quasi continue). Une sauvegarde quotidienne peut faire perdre jusqu'à 24 heures de données.</p>"]],
piege:[
"La tokenisation n'est pas un chiffrement : le jeton n'a pas de lien mathématique avec la donnée.",
"Un RAID n'est pas une sauvegarde : une suppression ou un chiffrement se répercute sur tous les disques.",
"La sauvegarde hors ligne protège contre les rançongiciels."]},

/* s7 Durcissement, actifs, vulnérabilités */
{voc:[
["Durcissement","Réduire la surface d'attaque : désactiver les services inutiles, changer les mots de passe par défaut, appliquer une configuration de référence."],
["Inventaire des actifs","Savoir ce qu'on possède : on ne protège pas ce qu'on ne connaît pas."],
["CVE / CVSS","Identifiant public d'une vulnérabilité / score de gravité de 0 à 10."],
["Analyse avec ou sans identifiants","Avec un compte (vue détaillée de l'intérieur) / sans compte (vue d'un attaquant extérieur)."],
["Exception, risque accepté","Quand on ne peut pas corriger : décision documentée, durée limitée, mesures compensatoires."]],
ex:`<p>Le rapport d'analyse d'une entreprise fictive liste 300 vulnérabilités. Ordre de traitement :</p>
<ol><li>CVSS 9,8 sur le serveur web exposé à Internet, exploit public connu → correction sous 48 h.</li>
<li>CVSS 9,8 sur un serveur interne isolé → correction sous 15 jours.</li>
<li>CVSS 5 sur des postes → cycle normal de mise à jour mensuel.</li></ol>
<p>Le score seul ne suffit pas : on tient compte de l'exposition, de la valeur de l'actif et de l'existence d'une attaque connue.</p>`,
steps:[
"Tenir l'inventaire des matériels et des logiciels.",
"Appliquer une configuration de référence durcie.",
"Analyser régulièrement les vulnérabilités.",
"Prioriser selon gravité, exposition et valeur de l'actif.",
"Corriger, vérifier par une nouvelle analyse, documenter les exceptions."],
exo:[
["une analyse sans identifiants trouve peu de vulnérabilités sur un serveur. Peut-on conclure qu'il est sûr ?","<p>Non : une analyse <b>avec identifiants</b> voit beaucoup plus (logiciels installés, versions, configuration). Le résultat peut cacher des faux négatifs.</p>"],
["un logiciel métier ne fonctionne pas avec le dernier correctif du système. Que faire ?","<p>Créer une <b>exception</b> approuvée et limitée dans le temps, ajouter des mesures compensatoires (isolement, surveillance) et demander une mise à jour à l'éditeur.</p>"]],
piege:[
"On commence toujours par l'inventaire.",
"Priorité = gravité × exposition × criticité de l'actif.",
"Vérifier la correction par une nouvelle analyse."]},

/* s8 Défenses d'entreprise et identités */
{voc:[
["Pare-feu, IPS, filtrage web","Filtrer les flux ; bloquer les attaques connues ; contrôler les sites visités."],
["EDR / XDR","Surveillance du comportement des postes et serveurs, avec réponse (isoler une machine)."],
["SIEM / SOAR","Centraliser et corréler les journaux / automatiser les réponses."],
["NAC","Contrôle des appareils qui se branchent au réseau."],
["SSO, fédération, SAML, OAuth, OIDC","Une connexion pour plusieurs services ; délégation d'autorisation ; identité."],
["Moindre privilège, accès juste à temps","Juste les droits nécessaires ; droits élevés accordés temporairement."]],
ex:`<p>L'EDR d'un poste comptable détecte qu'un document Word lance PowerShell, qui télécharge un fichier. L'EDR isole automatiquement le poste du réseau. Le SIEM corrèle avec une alerte de la messagerie : le même document a été reçu par 6 personnes. Le SOAR retire l'e-mail des 6 boîtes. L'analyste confirme et lance l'investigation.</p>`,
steps:[
"Filtrer à la périphérie et entre les zones.",
"Surveiller les postes avec un EDR.",
"Centraliser les journaux dans un SIEM et définir des règles d'alerte.",
"Automatiser les réponses simples et répétitives (SOAR).",
"Gérer les identités : SSO, MFA, moindre privilège, revue des droits."],
exo:[
["un appareil personnel inconnu se branche sur une prise réseau du bureau. Quel outil l'empêche d'accéder au réseau ?","<p>Le <b>NAC</b> (contrôle d'accès réseau), par exemple avec 802.1X.</p>"],
["un administrateur a besoin de droits élevés une heure par mois. Meilleure pratique ?","<p>L'<b>accès juste à temps</b> par un outil PAM : droits accordés pour la durée nécessaire, puis retirés automatiquement, avec enregistrement de la session.</p>"]],
piege:[
"OAuth sert à autoriser (déléguer un accès), pas à authentifier ; OIDC ajoute l'identité.",
"Le SIEM collecte et alerte ; le SOAR automatise la réponse.",
"Un EDR voit le comportement, pas seulement les signatures."]},

/* s9 Réponse aux incidents et investigation */
{voc:[
["Étapes de la réponse","Préparation, détection, analyse, confinement, éradication, rétablissement, leçons apprises."],
["Ordre de volatilité","Collecter d'abord ce qui disparaît le plus vite : mémoire, connexions réseau, puis disque, puis sauvegardes."],
["Chaîne de possession","Registre qui trace chaque manipulation d'une preuve."],
["Conservation légale (legal hold)","Ordre de ne rien supprimer en vue d'une procédure judiciaire."],
["Exercice sur table","Simulation en salle d'un scénario d'incident pour tester les rôles et les décisions."]],
ex:`<p>Un serveur de fichiers chiffre ses données en direct :</p>
<ol><li><b>Détection</b> : alerte EDR et appels d'utilisateurs.</li><li><b>Confinement</b> : isoler le serveur du réseau (ne pas l'éteindre : on perdrait la mémoire).</li><li><b>Preuves</b> : capture de la mémoire, puis image du disque, avec empreinte et chaîne de possession.</li><li><b>Éradication</b> : trouver le compte utilisé par l'attaquant, le désactiver, supprimer la porte dérobée.</li><li><b>Rétablissement</b> : restauration depuis la sauvegarde hors ligne, surveillance renforcée.</li><li><b>Leçons</b> : l'attaquant est entré par un VPN sans MFA.</li></ol>`,
steps:[
"Préparer : plan, équipe, outils, contacts, exercices.",
"Détecter et analyser : est-ce un incident ? Quelle étendue ?",
"Confiner sans détruire les preuves.",
"Éradiquer la cause.",
"Rétablir et surveiller.",
"Tirer les leçons et améliorer."],
exo:[
["à quelle étape appartient « déconnecter la machine infectée du réseau » ?","<p>Au <b>confinement</b>.</p>"],
["pourquoi calculer l'empreinte (hachage) d'une image de disque ?","<p>Pour prouver que la copie n'a pas été modifiée depuis sa collecte (intégrité de la preuve).</p>"]],
piege:[
"Ne pas éteindre une machine avant d'avoir capturé la mémoire, sauf danger immédiat.",
"La préparation est la première étape, avant tout incident.",
"Analyser sur une copie, jamais sur l'original."]},

/* s10 Gouvernance, risques et tiers */
{voc:[
["Politique, norme, procédure, guide","Quoi et pourquoi ; règle mesurable ; comment ; conseil."],
["Registre des risques","Liste des risques avec propriétaire, niveau et traitement."],
["SLE, ARO, ALE","Perte par événement × fréquence annuelle = perte annuelle attendue."],
["Accepter, réduire, transférer, éviter","Les quatre traitements du risque."],
["Gestion des tiers","Questionnaire, droit d'audit, SLA, NDA, MSA, SOW, suivi."],
["Appétit pour le risque","Niveau de risque que la direction accepte."]],
ex:`<p>Calcul pour un vol d'ordinateurs portables dans une société fictive : valeur d'un portable avec données = 1,5 M FCFA (SLE), 8 vols par an (ARO), ALE = 12 M FCFA. Un chiffrement des disques et un câble antivol coûtent 3 M par an : les données ne fuient plus et l'impact tombe à la valeur du matériel. La mesure est rentable.</p>`,
steps:[
"Identifier et évaluer les risques.",
"Les comparer à l'appétit pour le risque.",
"Choisir un traitement et le faire approuver par le propriétaire.",
"Encadrer les fournisseurs par contrat et les évaluer régulièrement.",
"Suivre le registre et les indicateurs."],
exo:[
["SLE 4 M, ARO 0,25. ALE ?","<p>4 × 0,25 = <b>1 M FCFA par an</b>.</p>"],
["quel document signe-t-on avec un fournisseur pour protéger les informations échangées avant même le contrat ?","<p>Un <b>NDA</b> (accord de confidentialité).</p>"]],
piege:[
"MSA = contrat-cadre ; SOW = description d'une mission précise ; SLA = niveaux de service.",
"Acheter une assurance = transférer, pas supprimer le risque.",
"Le propriétaire du risque accepte le risque, pas l'équipe technique."]},

/* s11 Conformité, audits, sensibilisation */
{voc:[
["Conformité","Respect des lois, règlements, normes et contrats (protection des données, PCI DSS pour les cartes)."],
["Rôles sur les données","Responsable de traitement (décide des finalités), sous-traitant (traite pour lui), personne concernée (dont on traite les données)."],
["Attestation","Déclaration formelle qu'une exigence est respectée, souvent après audit."],
["Audit interne / externe","Par l'entreprise / par un organisme indépendant."],
["Test d'intrusion : connu, partiel, inconnu","Le testeur a toutes les informations, une partie, ou aucune."],
["Sensibilisation","Programme continu : formation, simulation d'hameçonnage, indicateurs."]],
ex:`<p>Un commerçant fictif accepte les cartes bancaires. Il doit respecter <b>PCI DSS</b>. Il réduit son périmètre en utilisant un terminal de paiement certifié qui ne stocke jamais les numéros, et un prestataire qui tokenise. Moins il y a de systèmes qui voient les cartes, moins il y a de contrôles à justifier.</p>
<p>Côté personnes : simulation d'hameçonnage trimestrielle, taux de clic suivi, formation ciblée pour les personnes qui cliquent.</p>`,
steps:[
"Lister les obligations applicables (lois, secteur, contrats).",
"Réduire le périmètre concerné quand c'est possible.",
"Mettre en œuvre et documenter les contrôles.",
"Se faire auditer et corriger les écarts.",
"Former et sensibiliser en continu, en mesurant les résultats."],
exo:[
["une entreprise confie la paie à un prestataire. Qui est responsable de traitement ?","<p>L'<b>entreprise</b> : elle décide des finalités. Le prestataire est sous-traitant.</p>"],
["quelle conséquence possible d'une non-conformité, en dehors des amendes ?","<p>Perte de la possibilité d'exercer (retrait d'agrément, interdiction d'accepter les cartes), atteinte à l'image, actions en justice des clients.</p>"]],
piege:[
"Réduire le périmètre est souvent la meilleure stratégie de conformité.",
"La sensibilisation se mesure (taux de clic, de signalement).",
"Un test d'intrusion exige des règles d'engagement signées."]}
]);
