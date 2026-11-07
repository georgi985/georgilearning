/* CompTIA Security+ (V8, SY0-801) : cours.
   Contenu original rédigé pour la révision ; il ne reproduit pas les objectifs officiels de CompTIA.
   Les termes anglais sont donnés entre parenthèses car l'examen est en anglais. */
(function(){
const T = (head, rows) => '<div class="tablewrap"><table><thead><tr>' + head.map(h => '<th>' + h + '</th>').join('') + '</tr></thead><tbody>' + rows.map(r => '<tr>' + r.map(c => '<td>' + c + '</td>').join('') + '</tr>').join('') + '</tbody></table></div>';
const D = (n, name, w) => '<p class="eyebrow">Domaine ' + n + ' · ' + name + ' · ' + w + ' % de l\'examen</p>';

const modules = [
{ id:"s1", day:"Domaine 1", title:"Concepts généraux de sécurité", html: D(1,"General Security Concepts",16) + `
<h2>Les objectifs de base</h2>
${T(["Concept","Sens","Exemple"],[
["Confidentialité","Seuls les autorisés lisent","Chiffrement d'un disque"],
["Intégrité","Pas de modification non autorisée","Hachage d'un fichier téléchargé"],
["Disponibilité","Accessible quand il faut","Serveurs redondants"],
["Non-répudiation","L'auteur ne peut pas nier","Signature numérique"],
["AAA","Authentification, autorisation, traçabilité (accounting)","RADIUS qui journalise les connexions VPN"]])}
<p>L'authentification peut viser des <b>personnes</b> ou des <b>systèmes</b> (certificat machine, compte de service). L'autorisation se fait selon un modèle (voir le module IAM).</p>
<h2>Catégories et types de mesures</h2>
<p>L'examen croise deux axes : la <b>catégorie</b> (qui met en œuvre) et le <b>type</b> (ce que fait la mesure).</p>
${T(["Catégorie","Exemples"],[
["Technique (technical)","Pare-feu, chiffrement, EDR"],
["Managériale (managerial)","Politiques, analyse de risques, revues"],
["Opérationnelle (operational)","Gardes, sensibilisation, sauvegardes faites par des personnes"],
["Physique (physical)","Clôtures, serrures, éclairage"]])}
${T(["Type","Rôle","Exemple"],[
["Préventive","Empêche","Verrou, règle de pare-feu"],
["Dissuasive (deterrent)","Décourage","Panneau « site sous vidéosurveillance »"],
["Détective","Repère","Journal, IDS, caméra"],
["Corrective","Répare après","Restauration de sauvegarde"],
["Compensatoire","Remplace une mesure impossible","Isoler un vieux système qu'on ne peut pas corriger"],
["Directive","Indique quoi faire","Politique, consigne affichée"]])}
<h2>Zero Trust</h2>
<p>Principe : « ne jamais faire confiance, toujours vérifier ». Aucun utilisateur ni appareil n'est de confiance du seul fait d'être sur le réseau interne.</p>
<ul><li><b>Plan de contrôle</b> : décide. Il contient le <b>moteur de politique</b> (policy engine) et l'<b>administrateur de politique</b> ; ensemble ils forment le <b>PDP</b> (policy decision point). On y trouve l'authentification adaptative fondée sur l'identité, la réduction des menaces implicites, les zones de sécurité.</li>
<li><b>Plan de données</b> : applique. Le <b>PEP</b> (policy enforcement point) laisse passer ou bloque le flux entre le sujet et la ressource.</li></ul>
<h2>Sécurité physique</h2>
<p>Bollards, vestibule d'accès (sas, anciennement « mantrap »), clôtures, vidéosurveillance, gardes, badges, éclairage, capteurs (infrarouge, pression, micro-ondes, ultrasons).</p>
<h2>Technologies de leurre (deception)</h2>
${T(["Leurre","Description"],[["Honeypot","Faux système pour attirer et observer l'attaquant"],["Honeynet","Réseau de honeypots"],["Honeyfile","Faux fichier attractif (« mots_de_passe.xlsx ») qui alerte s'il est ouvert"],["Honeytoken","Fausse donnée (faux compte, fausse clé API) dont l'usage révèle une fuite"]])}
<h2>Gestion des changements</h2>
<p>Processus métier : approbation, propriétaire, parties prenantes, analyse d'impact, test, plan de retour arrière (backout), fenêtre de maintenance, procédure standard. Impacts techniques : listes d'autorisation, redémarrages, applications héritées, dépendances. Toujours mettre à jour la documentation et les schémas, et versionner.</p>
<h2>Analyse d'écart</h2><p>Comparer l'état actuel à un référentiel (NIST, ISO 27001) pour identifier ce qui manque.</p>
`},

{ id:"s2", day:"Domaine 1", title:"Cryptographie et PKI", html: D(1,"General Security Concepts",16) + `
<h2>Symétrique et asymétrique</h2>
${T(["","Symétrique","Asymétrique"],[
["Clés","Une clé secrète partagée","Paire clé publique / clé privée"],
["Vitesse","Rapide, données volumineuses","Lente, petites données"],
["Exemples","AES, ChaCha20, (anciens : DES, 3DES, RC4)","RSA, ECC, Diffie-Hellman (échange de clés)"],
["Problème","Distribuer la clé","Performance"]])}
<p>En pratique on combine : TLS échange une clé de session par asymétrique (ou ECDHE), puis chiffre les données en AES.</p>
<div class="box key"><h4>Qui utilise quelle clé ?</h4><ul><li>Pour <b>chiffrer</b> un message à Awa : la clé <b>publique</b> d'Awa. Seule sa clé privée déchiffre.</li><li>Pour <b>signer</b> : l'expéditeur hache le message et chiffre l'empreinte avec sa clé <b>privée</b>. Tout le monde vérifie avec sa clé publique. Cela donne intégrité, authentification et non-répudiation.</li></ul></div>
<h2>Hachage</h2>
<p>Fonction à sens unique, empreinte de taille fixe : SHA-256, SHA-3 (MD5 et SHA-1 sont cassés : collisions). Usages : intégrité, stockage des mots de passe.</p>
<ul><li><b>Sel</b> (salt) : valeur aléatoire ajoutée avant hachage, rend les tables arc-en-ciel inutiles.</li><li><b>Étirement de clé</b> (key stretching) : bcrypt, PBKDF2, Argon2 : ralentit volontairement le hachage pour freiner la force brute.</li><li><b>HMAC</b> : hachage avec clé secrète = intégrité + authenticité.</li></ul>
<h2>Chiffrement selon le niveau</h2>
<p>Disque entier (FDE, BitLocker), partition, volume, fichier, base de données, enregistrement, transport (TLS, IPsec). Le chiffrement au repos protège contre le vol physique, pas contre un utilisateur connecté.</p>
<h2>Outils matériels</h2>
${T(["Outil","Rôle"],[["TPM","Puce sur la carte mère : stocke les clés, démarrage mesuré, BitLocker"],["HSM","Boîtier dédié pour générer et protéger des clés à grande échelle (banques, CA)"],["Enclave sécurisée","Zone isolée du processeur pour les secrets (téléphones)"],["KMS","Service de gestion de clés (souvent cloud)"]])}
<h2>Obfuscation</h2>
<p><b>Stéganographie</b> : cacher des données dans une image ou un son. <b>Tokenisation</b> : remplacer une donnée sensible (numéro de carte) par un jeton sans valeur, la correspondance est dans un coffre. <b>Masquage</b> : afficher ****1234.</p>
<h2>PKI et certificats</h2>
<ul><li><b>CA</b> (autorité de certification) signe les certificats ; une <b>CA racine</b> hors ligne, des <b>CA intermédiaires</b> pour l'émission : chaîne de confiance.</li><li><b>CSR</b> : demande de signature de certificat, contient la clé publique.</li><li><b>Révocation</b> : <b>CRL</b> (liste téléchargée) ou <b>OCSP</b> (requête en temps réel) ; <b>OCSP stapling</b> : le serveur joint la réponse OCSP.</li><li><b>Wildcard</b> : *.exemple.ci couvre tous les sous-domaines d'un niveau. <b>SAN</b> : plusieurs noms dans un certificat.</li><li><b>Auto-signé</b> : pas de tiers de confiance, à réserver aux tests ou à l'interne.</li><li><b>Séquestre de clés</b> (key escrow) : un tiers garde une copie pour récupération.</li><li><b>Pinning</b> : l'application n'accepte qu'un certificat précis.</li></ul>
<h2>Autres notions</h2>
<p><b>Blockchain</b> : registre distribué et immuable. <b>Ledger ouvert</b>. <b>Cryptographie post-quantique</b> : algorithmes résistants aux futurs ordinateurs quantiques (le NIST a normalisé ML-KEM et ML-DSA en 2024). <b>Perfect forward secrecy</b> : une clé de session compromise ne révèle pas les autres sessions.</p>
`},

{ id:"s3", day:"Domaine 2", title:"Acteurs de menace, vecteurs et ingénierie sociale", html: D(2,"Threats, Vulnerabilities, and Attacks",24) + `
<h2>Les acteurs de menace</h2>
${T(["Acteur","Ressources","Motivation typique"],[
["État-nation / APT","Très élevées","Espionnage, sabotage, guerre"],
["Crime organisé","Élevées","Argent (rançongiciel, fraude)"],
["Hacktiviste","Variables","Idéologie, cause politique"],
["Initié (insider)","Accès légitime","Vengeance, argent, erreur"],
["Attaquant peu qualifié (unskilled)","Faibles, outils tout faits","Défi, notoriété"],
["Shadow IT","Interne","Productivité sans passer par l'IT (risque non voulu)"]])}
<p>Attributs : interne ou externe, niveau de ressources, sophistication. Motivations : exfiltration, espionnage, interruption de service, chantage, gain financier, conviction, vengeance, perturbation, guerre.</p>
<h2>Vecteurs et surfaces d'attaque</h2>
<ul><li>Messages : courriel, SMS, messagerie instantanée ;</li><li>fichiers, images, voix ;</li><li>supports amovibles (clé USB piégée) ;</li><li>logiciels vulnérables, avec ou sans client (agentless) ;</li><li>systèmes non supportés (fin de vie) ;</li><li>réseaux non sécurisés : Wi-Fi ouvert, Bluetooth ;</li><li>ports ouverts, identifiants par défaut ;</li><li>chaîne d'approvisionnement : prestataires de services gérés (MSP), fournisseurs, sous-traitants.</li></ul>
<h2>Ingénierie sociale</h2>
${T(["Technique","Description"],[
["Phishing","Courriel frauduleux de masse"],["Spear phishing","Ciblé sur une personne"],["Whaling","Ciblé sur un dirigeant"],
["Vishing","Par la voix (téléphone)"],["Smishing","Par SMS"],
["Prétexte (pretexting)","Scénario inventé pour obtenir une information"],
["Usurpation (impersonation)","Se faire passer pour le support, un fournisseur…"],
["BEC","Compromission de messagerie d'entreprise : faux ordre de virement du « DG »"],
["Point d'eau (watering hole)","Piéger un site visité par les cibles"],
["Typosquatting","Domaine proche : g00gle.com"],
["Usurpation de marque","Faux site ou faux courriel aux couleurs d'une marque"],
["Désinformation / mésinformation","Fausse information diffusée volontairement ou non"]])}
<h2>Menaces liées à l'intelligence artificielle</h2>
<p>La version V8 insiste sur l'IA :</p>
<ul><li><b>Injection de prompt</b> : instructions cachées qui détournent un assistant IA ;</li><li><b>Empoisonnement des données</b> d'entraînement ;</li><li><b>Vol ou extraction de modèle</b> ;</li><li><b>Fuite de données</b> par ce que les employés collent dans des outils IA publics ;</li><li><b>Deepfakes</b> vocaux ou vidéo pour des fraudes au virement ;</li><li><b>Hameçonnage généré par IA</b>, sans fautes et personnalisé.</li></ul>
<p>Défenses : politique d'usage de l'IA, filtrage des entrées et sorties, moindre privilège pour les agents IA, vérification hors bande des demandes de virement.</p>
`},

{ id:"s4", day:"Domaine 2", title:"Vulnérabilités, logiciels malveillants et attaques", html: D(2,"Threats, Vulnerabilities, and Attacks",24) + `
<h2>Vulnérabilités</h2>
${T(["Famille","Exemples"],[
["Applications","Dépassement de tampon, injection mémoire, condition de course (TOCTOU), mise à jour malveillante"],
["Système d'exploitation","Correctifs manquants, élévation de privilèges"],
["Web","Injection SQL, XSS"],
["Matériel","Firmware vulnérable, fin de vie (EOL), produits hérités"],
["Virtualisation","Évasion de VM, réutilisation de ressources"],
["Cloud","Mauvaise configuration (bucket public), clés exposées"],
["Chaîne d'approvisionnement","Fournisseur de logiciel, de matériel ou de service compromis"],
["Cryptographie","Algorithmes faibles, mauvaise gestion des clés"],
["Mobile","Sideloading, jailbreak / root"],
["Zero-day","Faille inconnue de l'éditeur, sans correctif"]])}
<h2>Logiciels malveillants</h2>
${T(["Type","Caractéristique"],[
["Rançongiciel","Chiffre les données et exige une rançon ; souvent double extorsion"],
["Cheval de Troie","Se fait passer pour un logiciel légitime"],
["Ver","Se propage seul par le réseau"],
["Virus","A besoin d'un hôte et d'une action de l'utilisateur"],
["Logiciel espion","Collecte des informations à l'insu de l'utilisateur"],
["Enregistreur de frappe","Capture le clavier"],
["Bombe logique","Se déclenche à une date ou un événement"],
["Rootkit","Se cache au cœur du système avec des privilèges élevés"],
["Bloatware","Logiciels préinstallés inutiles qui élargissent la surface d'attaque"],
["Sans fichier (fileless)","Vit en mémoire, utilise PowerShell ou WMI"]])}
<h2>Attaques réseau</h2>
<ul><li><b>DDoS</b> : saturation ; <b>par amplification</b> (petite requête, grosse réponse : DNS, NTP) et <b>par réflexion</b> (adresse source usurpée).</li><li><b>Attaques DNS</b> : empoisonnement de cache, détournement de domaine.</li><li><b>Sans fil</b> : point d'accès pirate (rogue AP), jumeau maléfique (evil twin), désauthentification, attaques Bluetooth.</li><li><b>On-path</b> (homme du milieu) : ARP poisoning, proxy malveillant.</li><li><b>Rejeu d'identifiants</b> (credential replay), pass-the-hash.</li></ul>
<h2>Attaques applicatives</h2>
${T(["Attaque","Principe","Défense"],[
["Injection SQL","Code SQL dans un champ","Requêtes paramétrées, validation"],
["XSS","Script injecté exécuté dans le navigateur des autres","Encodage des sorties, CSP"],
["CSRF","Faire exécuter une action à un utilisateur connecté","Jetons anti-CSRF, SameSite"],
["SSRF","Le serveur interroge une ressource interne pour l'attaquant","Liste d'autorisation des destinations"],
["Traversée de répertoire","../../etc/passwd","Validation des chemins"],
["Dépassement de tampon","Écrire au-delà de la mémoire prévue","Langages sûrs, ASLR, DEP"],
["Élévation de privilèges","Obtenir plus de droits","Correctifs, moindre privilège"],
["Rejeu","Renvoyer une requête capturée","Horodatage, nonce"]])}
<h2>Attaques sur les mots de passe et la cryptographie</h2>
<p><b>Password spraying</b> : un mot de passe courant essayé sur beaucoup de comptes (évite le verrouillage). <b>Force brute</b> : beaucoup d'essais sur un compte. <b>Rétrogradation</b> (downgrade) : forcer un protocole plus faible. <b>Collision</b> et <b>attaque des anniversaires</b> : deux entrées, même empreinte.</p>
<h2>Attaques physiques</h2><p>Force brute physique, clonage RFID de badges, conditions environnementales (couper la climatisation).</p>
<h2>Indicateurs d'activité malveillante</h2>
<p>Verrouillages de comptes en masse, voyage impossible (connexion d'Abidjan puis de Moscou en 10 minutes), consommation anormale de ressources, ressources inaccessibles, journaux manquants, accès bloqué, contenu publié ou documenté (vos données sur un forum), connexions simultanées.</p>
<h2>Techniques d'atténuation</h2>
<p>Segmentation, contrôle d'accès (ACL, permissions), liste d'autorisation d'applications, isolement, correctifs, chiffrement, surveillance, moindre privilège, application de configurations, mise hors service propre, durcissement (EDR, pare-feu hôte, HIPS, désactivation des ports et protocoles, changement des mots de passe par défaut, suppression des logiciels inutiles).</p>
`},

{ id:"s5", day:"Domaine 3", title:"Architecture sécurisée : cloud, réseau et systèmes", html: D(3,"Security Architecture",19) + `
<h2>Modèles cloud et responsabilité partagée</h2>
${T(["Modèle","Le fournisseur gère","Le client gère"],[
["IaaS","Matériel, réseau physique, virtualisation","OS, applications, données, identités"],
["PaaS","+ OS et plateforme","Applications, données, identités"],
["SaaS","Presque tout","Données, comptes et configuration"]])}
<p>Quel que soit le modèle, le client reste responsable de ses données et de ses accès. Concepts associés : cloud hybride, multi-cloud, tiers, <b>IaC</b> (infrastructure en tant que code), <b>serverless</b>, <b>microservices</b>, conteneurs.</p>
<h2>Autres architectures</h2>
<ul><li><b>Air gap</b> : réseau physiquement isolé.</li><li><b>SDN</b> : réseau piloté par logiciel (plan de contrôle séparé).</li><li><b>Sur site</b>, <b>centralisé</b> ou <b>décentralisé</b>.</li><li><b>Virtualisation</b> et <b>conteneurs</b>.</li><li><b>IoT</b>, <b>ICS / SCADA</b> (industriel), <b>OT</b>, <b>RTOS</b> (temps réel), <b>systèmes embarqués</b> : souvent difficiles à corriger, donc segmentation.</li></ul>
<p>Critères de choix : disponibilité, résilience, coût, réactivité, évolutivité, facilité de déploiement, transfert de risque, facilité de récupération, disponibilité des correctifs, alimentation, puissance de calcul.</p>
<h2>Infrastructure réseau</h2>
${T(["Concept","À retenir"],[
["Zones de sécurité","Interne, DMZ (services exposés), invités, gestion"],
["Fail-open / fail-closed","En panne, laisse tout passer (disponibilité) ou bloque tout (sécurité)"],
["Inline / tap (monitor)","IPS en ligne peut bloquer ; IDS sur un tap ou port miroir ne fait qu'alerter"],
["Serveur de rebond (jump server)","Point unique et durci pour administrer une zone"],
["Proxy","Intermédiaire : filtrage, cache, anonymisation (proxy direct ou inverse)"],
["Répartiteur de charge","Distribue le trafic, actif/actif ou actif/passif"],
["802.1X / EAP","Contrôle d'accès au port réseau avec authentification (souvent RADIUS)"],
["Pare-feu","Couche 4 (ports, IP), couche 7 / NGFW (applications), WAF (web), UTM (tout-en-un)"]])}
<h2>Connexions sécurisées</h2>
<ul><li><b>VPN</b> : site à site ou accès distant ; <b>IPsec</b> (AH = intégrité, ESP = chiffrement ; mode transport ou tunnel) ; <b>TLS</b>.</li><li><b>SD-WAN</b> : WAN piloté par logiciel entre sites.</li><li><b>SASE</b> : réseau et sécurité fournis depuis le cloud (SD-WAN + passerelle web, CASB, ZTNA).</li></ul>
<h2>Sans fil</h2>
<p>Préférer <b>WPA3</b> (SAE remplace la clé partagée de WPA2). En entreprise : WPA3-Enterprise avec RADIUS et 802.1X. Faire une étude de site et une carte thermique (heat map) pour placer les bornes.</p>
`},

{ id:"s6", day:"Domaine 3", title:"Protection des données et résilience", html: D(3,"Security Architecture",19) + `
<h2>Types et états des données</h2>
<p>Types : réglementées (santé, cartes bancaires), secrets d'affaires, propriété intellectuelle, juridiques, financières ; lisibles par l'humain ou non.</p>
<p>Classification habituelle : publique, interne, confidentielle, restreinte, critique ; dans le privé « sensible », « privée » ; dans le public « secret », « top secret ».</p>
${T(["État","Protection"],[["Au repos","Chiffrement disque et base, contrôle d'accès"],["En transit","TLS, VPN, IPsec"],["En cours d'utilisation","Enclaves sécurisées, contrôle de la mémoire"]])}
<p><b>Souveraineté des données</b> : les données sont soumises aux lois du pays où elles sont stockées. <b>Géolocalisation</b> : restreindre l'accès selon le lieu.</p>
<p>Méthodes : restrictions géographiques, chiffrement, hachage, masquage, tokenisation, obfuscation, segmentation, permissions.</p>
<h2>Haute disponibilité et résilience</h2>
<ul><li><b>Répartition de charge</b> (plusieurs serveurs actifs) ou <b>clustering</b> (nœuds qui se reprennent).</li><li>Sites de secours : <b>chaud</b> (prêt en minutes, coûteux), <b>tiède</b> (matériel présent, données à restaurer), <b>froid</b> (locaux vides, moins cher, lent).</li><li>Dispersion géographique, diversité des plateformes, multi-cloud.</li><li><b>COOP</b> : continuité des opérations.</li><li>Planification des capacités : personnes, technologie, infrastructure.</li></ul>
<h2>Tests</h2><p>Exercice sur table (tabletop), bascule (failover), simulation, traitement en parallèle.</p>
<h2>Sauvegardes</h2>
${T(["Notion","Détail"],[
["Complète","Tout, à chaque fois ; restauration simple"],
["Incrémentale","Ce qui a changé depuis la dernière sauvegarde, quelle qu'elle soit ; rapide, restauration longue"],
["Différentielle","Ce qui a changé depuis la dernière complète ; restauration = complète + dernière différentielle"],
["Instantané (snapshot)","Image à un instant, courant en virtualisation"],
["Réplication / journalisation","Copie continue / journal des transactions"],
["Règle 3-2-1","3 copies, 2 supports, 1 hors site (et idéalement 1 hors ligne contre le rançongiciel)"]])}
<h2>Indicateurs de continuité</h2>
${T(["Sigle","Sens"],[["RTO","Durée maximale d'interruption acceptable"],["RPO","Perte de données maximale acceptable (en temps)"],["MTTR","Temps moyen de réparation"],["MTBF","Temps moyen entre pannes"]])}
<h2>Alimentation</h2><p><b>Onduleur</b> (UPS) : quelques minutes pour basculer ou éteindre proprement. <b>Groupe électrogène</b> : longue durée. Très pertinent en Afrique de l'Ouest où les coupures sont fréquentes.</p>
`},

{ id:"s7", day:"Domaine 4", title:"Opérations : durcissement, actifs et vulnérabilités", html: D(4,"Security Operations",27) + `
<h2>Configurations de référence</h2>
<p>Établir, déployer, maintenir une base sécurisée (benchmarks CIS, guides de l'éditeur). Cibles du durcissement : mobiles, postes, commutateurs, routeurs, cloud, serveurs, ICS/SCADA, systèmes embarqués, IoT.</p>
<h2>Mobilité</h2>
${T(["Modèle","Description"],[["BYOD","L'employé utilise son appareil personnel"],["COPE","Appareil fourni par l'entreprise, usage personnel autorisé"],["CYOD","L'employé choisit dans une liste d'appareils de l'entreprise"]])}
<p><b>MDM</b> : gestion centralisée (politiques, effacement à distance, conteneurisation). Connexions : cellulaire, Wi-Fi, Bluetooth.</p>
<h2>Sécurité des applications</h2><p>Validation des entrées, cookies sécurisés (Secure, HttpOnly, SameSite), analyse statique (SAST) et dynamique (DAST), signature de code, bac à sable (sandbox).</p>
<h2>Gestion des actifs</h2><p>Achat (processus d'acquisition), attribution d'un propriétaire, classification, inventaire et suivi, puis mise au rebut : nettoyage (sanitization), destruction, certificat de destruction, conservation des données selon les règles.</p>
<h2>Gestion des vulnérabilités</h2>
${T(["Phase","Activités"],[
["Identification","Scans, analyse d'applications, flux de menaces (OSINT, partenaires, dark web), tests d'intrusion, bug bounty, audits"],
["Analyse","Confirmer (faux positif / faux négatif), prioriser, CVSS (score 0 à 10), CVE (identifiant), classification, exposition, environnement, tolérance au risque"],
["Réponse","Correctif, assurance, segmentation, mesure compensatoire, exception documentée"],
["Validation","Nouveau scan, audit, vérification"],
["Rapport","Communiquer aux responsables"]])}
<div class="box tip"><h4>Faux positif et faux négatif</h4><p>Faux positif : le scanner signale une faille qui n'existe pas. Faux négatif : une vraie faille n'est pas signalée, c'est le plus dangereux. Un scan <b>authentifié</b> (avec identifiants) réduit les deux.</p></div>
<h2>Surveillance</h2>
<p>Activités : agrégation des journaux, alertes, scans, rapports, archivage, réponse (quarantaine, ajustement des alertes). Outils : <b>SIEM</b>, <b>SCAP</b> (contenus de conformité automatisés), benchmarks, agents ou sans agent, <b>SNMP traps</b>, <b>NetFlow</b>, antivirus, DLP, scanners de vulnérabilités.</p>
`},

{ id:"s8", day:"Domaine 4", title:"Défenses d'entreprise et gestion des identités", html: D(4,"Security Operations",27) + `
<h2>Renforcer les défenses</h2>
${T(["Outil","Usage"],[
["Règles de pare-feu","Ports, protocoles, filtrage d'écran ; principe : refuser par défaut"],
["IDS / IPS","Signatures et détection d'anomalies"],
["Filtrage web","Agent, proxy centralisé, réputation des URL, catégories"],
["Filtrage DNS","Bloquer la résolution des domaines malveillants"],
["Sécurité de la messagerie","SPF, DKIM, DMARC, passerelle de messagerie"],
["FIM","Surveillance de l'intégrité des fichiers"],
["DLP","Prévention des fuites"],
["NAC","Contrôle d'accès au réseau selon l'état de l'appareil"],
["EDR / XDR","Détection et réponse sur les postes / étendue à plusieurs sources"],
["UBA / UEBA","Analyse du comportement des utilisateurs"]])}
<div class="box key"><h4>SPF, DKIM, DMARC</h4><ul><li><b>SPF</b> : liste DNS des serveurs autorisés à envoyer pour le domaine.</li><li><b>DKIM</b> : signature cryptographique du courriel, clé publique dans le DNS.</li><li><b>DMARC</b> : politique qui dit quoi faire si SPF ou DKIM échoue (none, quarantine, reject) et envoie des rapports.</li></ul></div>
<h2>Cycle de vie des identités</h2>
<p>Provisionnement et déprovisionnement, attribution des permissions, vérification d'identité, fédération, attestation (revue périodique des droits par les responsables).</p>
<h2>SSO et fédération</h2>
${T(["Protocole","Rôle"],[["LDAP","Annuaire (Active Directory) ; LDAPS = chiffré"],["SAML","Fédération d'authentification en XML entre fournisseur d'identité et service"],["OAuth 2.0","Délégation d'autorisation (accès à une API sans donner son mot de passe)"],["OpenID Connect","Couche d'authentification au-dessus d'OAuth"],["Kerberos","Tickets d'authentification en réseau Windows"],["RADIUS / TACACS+","AAA pour l'accès réseau / l'administration des équipements"]])}
<h2>Modèles de contrôle d'accès</h2>
${T(["Modèle","Qui décide","Exemple"],[["MAC (obligatoire)","Le système, selon des étiquettes de sensibilité","Défense, « secret »"],["DAC (discrétionnaire)","Le propriétaire de la ressource","Partage d'un dossier Windows"],["RBAC (par rôle)","Selon le poste","Rôle « comptable »"],["ABAC (par attributs)","Selon des attributs (lieu, heure, service, appareil)","Accès si service = Finance et poste géré"],["Par règles","Règles globales","Pare-feu, restrictions horaires"]])}
<p>Toujours appliquer le <b>moindre privilège</b>.</p>
<h2>Authentification multifacteur</h2>
<p>Facteurs : ce que l'on <b>sait</b> (mot de passe), ce que l'on <b>possède</b> (jeton, téléphone, clé FIDO2), ce que l'on <b>est</b> (biométrie), où l'on <b>se trouve</b>. Deux mots de passe = un seul facteur. Les <b>passkeys</b> (FIDO2 / WebAuthn) permettent le sans mot de passe et résistent à l'hameçonnage.</p>
<p>Bonnes pratiques de mots de passe : longueur avant complexité, pas de réutilisation, gestionnaire de mots de passe, pas d'expiration arbitraire sans raison.</p>
<h2>Gestion des accès à privilèges (PAM)</h2>
<p>Accès <b>juste à temps</b> (JIT), <b>coffre de mots de passe</b>, <b>identifiants éphémères</b>, enregistrement des sessions.</p>
<h2>Automatisation et orchestration</h2>
<p>Cas d'usage : provisionnement des comptes, garde-fous, tickets, activation ou désactivation de services, intégration continue, API. Bénéfices : efficacité, cohérence, réaction plus rapide, moins de fatigue. Points d'attention : complexité, coût, point de défaillance unique, dette technique. La V8 ajoute les flux assistés par IA : utiles, mais à superviser.</p>
`},

{ id:"s9", day:"Domaine 4", title:"Réponse aux incidents et investigation", html: D(4,"Security Operations",27) + `
<h2>Le processus de réponse</h2>
<ol><li><b>Préparation</b> : plan, équipe, outils, contacts.</li><li><b>Détection</b>.</li><li><b>Analyse</b>.</li><li><b>Confinement</b> : isoler pour limiter la propagation.</li><li><b>Éradication</b> : supprimer la cause.</li><li><b>Rétablissement</b> (recovery) : remettre en service et surveiller.</li><li><b>Retour d'expérience</b> (lessons learned).</li></ol>
<div class="box tip"><h4>Ordre fréquent à l'examen</h4><p>Confinement avant éradication, éradication avant rétablissement. On ne reformate pas une machine avant d'avoir collecté les preuves si une enquête est possible.</p></div>
<p>Formation et tests : exercice sur table, simulation. <b>Analyse des causes racines</b>. <b>Chasse aux menaces</b> (threat hunting) : chercher activement une compromission non détectée.</p>
<h2>Investigation numérique</h2>
<ul><li><b>Conservation légale</b> (legal hold) : interdire la destruction des données liées à un litige.</li><li><b>Chaîne de possession</b> (chain of custody) : qui a eu la preuve, quand, pourquoi.</li><li><b>Acquisition</b> : copie bit à bit, hachage pour prouver l'intégrité.</li><li><b>Préservation</b>, <b>rapport</b>, <b>e-discovery</b>.</li></ul>
<h3>Ordre de volatilité (du plus volatil au moins volatil)</h3>
<p>Registres et cache CPU → mémoire vive (RAM) → état réseau, processus en cours → fichiers temporaires et swap → disque → journaux distants → sauvegardes et archives.</p>
<h2>Sources de données</h2>
<p>Journaux de pare-feu, d'applications, des postes, du système d'exploitation, IDS/IPS, réseau, métadonnées ; scans de vulnérabilités, rapports automatisés, tableaux de bord, captures de paquets.</p>
`},

{ id:"s10", day:"Domaine 5", title:"Gouvernance, risques et tiers", html: D(5,"Security Program Management and Oversight",14) + `
<h2>Gouvernance</h2>
${T(["Élément","Exemples"],[
["Directives (guidelines)","Recommandations non obligatoires"],
["Politiques","Utilisation acceptable (AUP), sécurité de l'information, continuité, reprise après sinistre, réponse aux incidents, SDLC, gestion des changements"],
["Normes (standards)","Mots de passe, contrôle d'accès, sécurité physique, chiffrement"],
["Procédures","Gestion des changements, arrivée et départ, playbooks"],
["Structures","Conseils, comités, entités gouvernementales ; centralisée ou décentralisée"]])}
<h3>Rôles vis-à-vis des données</h3>
${T(["Rôle","Responsabilité"],[["Propriétaire (owner)","Responsable de la donnée, décide de la classification"],["Responsable de traitement (controller)","Décide des finalités du traitement de données personnelles"],["Sous-traitant (processor)","Traite pour le compte du responsable"],["Dépositaire (custodian / steward)","Gère au quotidien : sauvegardes, droits techniques"]])}
<h2>Gestion des risques</h2>
<p>Identification, appréciation (ponctuelle, récurrente, unique, continue), analyse qualitative ou quantitative.</p>
<div class="box key"><h4>Formules</h4><p><b>SLE</b> = valeur de l'actif × facteur d'exposition. <b>ALE</b> = SLE × <b>ARO</b> (occurrences par an). Une mesure est rentable si son coût annuel est inférieur à la baisse d'ALE qu'elle apporte.</p></div>
<ul><li><b>Registre des risques</b> : risques, propriétaires, KRI (indicateurs clés de risque), seuils.</li><li><b>Appétit pour le risque</b> : expansif, prudent, neutre. <b>Tolérance</b> : écart acceptable.</li><li><b>Stratégies</b> : transférer (assurance), accepter (avec exemption ou exception documentée), éviter, atténuer.</li><li><b>BIA</b> (analyse d'impact sur l'activité) : fixe RTO, RPO, MTTR, MTBF.</li></ul>
<h2>Risques liés aux tiers</h2>
<p>Évaluation des fournisseurs : tests d'intrusion, droit d'audit, preuves d'audits internes, évaluations indépendantes, analyse de la chaîne d'approvisionnement. Sélection : diligence raisonnable, conflits d'intérêts. Suivi : questionnaires, surveillance continue, règles d'engagement.</p>
${T(["Accord","Objet"],[["SLA","Niveau de service mesurable (disponibilité 99,9 %)"],["MOU / MOA","Protocole d'accord, intention commune, souvent peu contraignant"],["MSA","Contrat-cadre pour des prestations futures"],["SOW / WO","Énoncé des travaux d'une mission précise"],["NDA","Confidentialité"],["BPA","Accord de partenariat (partage des bénéfices et responsabilités)"]])}
`},

{ id:"s11", day:"Domaine 5", title:"Conformité, audits et sensibilisation", html: D(5,"Security Program Management and Oversight",14) + `
<h2>Conformité</h2>
<p>Rapports internes et externes. Conséquences d'une non-conformité : amendes, sanctions, atteinte à la réputation, perte de licence, impacts contractuels. Surveillance : diligence raisonnable (due diligence : s'informer) et devoir de vigilance (due care : agir), attestation, automatisation.</p>
<h2>Vie privée</h2>
<p>Lois locales, nationales, régionales, mondiales (RGPD en Europe ; en Côte d'Ivoire la loi n° 2013-450 et l'ARTCI). Notions : personne concernée, responsable de traitement et sous-traitant, propriété des données, inventaire et conservation, <b>droit à l'oubli</b>.</p>
<h2>Audits et évaluations</h2>
<ul><li><b>Attestation</b> : déclaration formelle de conformité.</li><li><b>Interne</b> : conformité, comité d'audit, auto-évaluation.</li><li><b>Externe</b> : régulateur, examen, audit tiers indépendant.</li></ul>
<h2>Tests d'intrusion</h2>
${T(["Notion","Sens"],[
["Environnement connu (white box)","Le testeur a toutes les informations"],
["Partiellement connu (grey box)","Informations partielles"],
["Inconnu (black box)","Aucune information, comme un attaquant externe"],
["Reconnaissance passive","Sans toucher la cible (OSINT, DNS publics)"],
["Reconnaissance active","Interaction directe (scan de ports)"],
["Physique / offensif / défensif / intégré","Équipe rouge, bleue, violette"]])}
<p>Un test d'intrusion exige des <b>règles d'engagement</b> écrites et signées : périmètre, horaires, contacts, ce qui est interdit.</p>
<h2>Sensibilisation</h2>
<p>Campagnes d'hameçonnage simulé, reconnaissance des comportements anormaux (risqués, inattendus, involontaires), consignes (politiques, mots de passe, supports amovibles, ingénierie sociale, sécurité opérationnelle, télétravail), signalement, développement et exécution du programme, mesure des résultats.</p>
`}
];

const pages = [
{ id:"ports", title:"Ports et protocoles à connaître", html:`<p class="lead">Une table que l'on retrouve partout dans l'examen, notamment dans les questions de performance sur les règles de pare-feu.</p>` + T(["Port","Protocole","Sécurisé ?"],[
["20/21","FTP","Non : préférer SFTP (22) ou FTPS (990)"],["22","SSH, SFTP, SCP","Oui"],["23","Telnet","Non : remplacer par SSH"],["25","SMTP","Non (587 avec STARTTLS pour la soumission)"],["53","DNS (UDP, et TCP pour les transferts de zone)","DNSSEC pour l'intégrité"],["67/68","DHCP","Non"],["80","HTTP","Non"],["88","Kerberos","Oui"],["110","POP3","Non (995 = POP3S)"],["123","NTP","Non par défaut"],["143","IMAP","Non (993 = IMAPS)"],["161/162","SNMP / traps","SNMPv3 seulement"],["389","LDAP","Non (636 = LDAPS)"],["443","HTTPS","Oui"],["445","SMB","À ne jamais exposer sur Internet"],["514","Syslog","Non (6514 = syslog sur TLS)"],["1812/1813","RADIUS","Partiellement"],["3389","RDP","Ne pas exposer : passer par VPN ou bastion"],["5060/5061","SIP / SIP sur TLS","5061 oui"]])},
{ id:"acronymes", title:"Acronymes essentiels", html:`<p class="lead">CompTIA publie une longue liste d'acronymes. Voici ceux qui reviennent le plus.</p>` + T(["Sigle","Signification","En une phrase"],[
["AAA","Authentication, Authorization, Accounting","Qui es-tu, que peux-tu faire, qu'as-tu fait"],["ACL","Access Control List","Liste de règles d'accès"],["ALE / ARO / SLE","Annualized Loss Expectancy / Rate of Occurrence / Single Loss Expectancy","Calcul quantitatif du risque"],["APT","Advanced Persistent Threat","Attaquant discret et durable"],["BIA","Business Impact Analysis","Impact d'un arrêt sur l'activité"],["CASB","Cloud Access Security Broker","Contrôle de l'usage du cloud"],["CVE / CVSS","Common Vulnerabilities and Exposures / Scoring System","Identifiant / note de gravité"],["DLP","Data Loss Prevention","Empêche les fuites"],["EDR / XDR","Endpoint / Extended Detection and Response","Détection sur postes / étendue"],["FIM","File Integrity Monitoring","Alerte si un fichier critique change"],["HSM","Hardware Security Module","Coffre matériel à clés"],["IoC","Indicator of Compromise","Trace d'une compromission"],["MDM","Mobile Device Management","Gestion des mobiles"],["NAC","Network Access Control","Contrôle de l'admission au réseau"],["OSINT","Open Source Intelligence","Renseignement en sources ouvertes"],["PAM","Privileged Access Management","Gestion des comptes à privilèges"],["PBQ","Performance-Based Question","Question pratique simulée"],["RTO / RPO","Recovery Time / Point Objective","Durée d'arrêt / perte de données tolérées"],["SASE","Secure Access Service Edge","Réseau et sécurité depuis le cloud"],["SIEM","Security Information and Event Management","Corrélation des journaux"],["SOAR","Security Orchestration, Automation and Response","Automatisation de la réponse"],["TPM","Trusted Platform Module","Puce de sécurité du poste"],["WAF","Web Application Firewall","Pare-feu pour applications web"],["ZTNA","Zero Trust Network Access","Accès aux applications sans VPN global"]])}
];

const exam = `
<p class="lead">CompTIA remplace la version SY0-701 par la <b>V8 (SY0-801)</b>, annoncée pour le 17 novembre 2026 environ. Ce cours suit la V8. Si tu passes encore la SY0-701, 90 % du contenu reste valable ; vérifie sa date de retrait sur comptia.org.</p>
<div class="grid">
<div class="card"><span class="stat">90</span><span class="t">questions maximum</span><span class="d">QCM + questions de performance (PBQ)</span></div>
<div class="card"><span class="stat">90</span><span class="t">minutes</span><span class="d">Une minute par question en moyenne</span></div>
<div class="card"><span class="stat">750</span><span class="t">sur 900 pour réussir</span><span class="d">Échelle de 100 à 900</span></div>
</div>
<p>Langue : l'examen V8 est annoncé en anglais. C'est pourquoi ce cours donne les termes anglais entre parenthèses. Expérience recommandée : deux ans d'administration de la sécurité (non obligatoire). Certification valable 3 ans, renouvelable par la formation continue (CE).</p>
<h2>Les 5 domaines de la V8</h2>
<div class="tablewrap"><table><thead><tr><th>Domaine</th><th>Poids</th><th>Modules</th></tr></thead><tbody>
<tr><td>1. General Security Concepts</td><td class="num">16 %</td><td>1, 2</td></tr>
<tr><td>2. Threats, Vulnerabilities, and Attacks</td><td class="num">24 %</td><td>3, 4</td></tr>
<tr><td>3. Security Architecture</td><td class="num">19 %</td><td>5, 6</td></tr>
<tr><td>4. Security Operations</td><td class="num">27 %</td><td>7, 8, 9</td></tr>
<tr><td>5. Security Program Management and Oversight</td><td class="num">14 %</td><td>10, 11</td></tr>
</tbody></table></div>
<p>Thèmes mis en avant par la V8 : risques liés à l'IA, flux automatisés assistés par IA, Zero Trust, architectures cloud, hybrides et OT, risques des tiers, gestion des accès à privilèges et fédération.</p>
<h2>Stratégie</h2>
<ol><li>Les PBQ apparaissent souvent au début : marque-les et reviens-y à la fin pour ne pas perdre de temps.</li><li>Cherche le mot clé de la question : « BEST », « FIRST », « MOST likely ». Plusieurs réponses peuvent être vraies, une seule répond à ce mot.</li><li>Pour « FIRST » en réponse aux incidents, suis l'ordre du processus.</li><li>Apprends les ports et les acronymes (voir les ressources).</li><li>Fais l'examen blanc jusqu'à dépasser 85 % de façon stable avant de réserver.</li></ol>
<h2>Plan de révision sur 6 semaines</h2>
<div class="tablewrap"><table><thead><tr><th>Semaine</th><th>Travail</th></tr></thead><tbody>
<tr><td>1</td><td>Modules 1 et 2, ports et acronymes</td></tr><tr><td>2</td><td>Modules 3 et 4</td></tr><tr><td>3</td><td>Modules 5 et 6</td></tr><tr><td>4</td><td>Modules 7 à 9 (le plus gros domaine)</td></tr><tr><td>5</td><td>Modules 10 et 11, quiz complet</td></tr><tr><td>6</td><td>Examens blancs, révision des erreurs, labo pratique (pare-feu, journaux)</td></tr>
</tbody></table></div>
`;

CERTS.push({
  id:"secplus", title:"CompTIA Security+ (V8, SY0-801)", org:"CompTIA",
  intro:"Les bases de la cybersécurité opérationnelle, reconnues partout : menaces, architecture, opérations, gouvernance. Cours aligné sur les 5 domaines de la version V8.",
  examMinutes:90, examQuestions:90, passMark:83,
  modules, pages, exam, questions:[]
});
})();
