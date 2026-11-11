/* Catalogue des certifications du campus.
   Pour ajouter une certification :
   1. créer un fichier certs/<id>.js qui appelle CERTS.push({...}) (modèle : iso27001-li.js) ;
   2. ajouter <script src="certs/<id>.js"></script> dans index.html ;
   3. l'entrée ci-dessous passe automatiquement en « disponible » dès que le fichier est chargé. */
/* Rubriques du campus : chaque entrée du catalogue porte un champ cat. */
CATEGORIES.push(
  {id:"cyber", title:"Cybersécurité et audit des SI", lead:"Les certifications de référence en sécurité de l'information et en audit informatique.", en:{title:"Cybersecurity and IS audit", lead:"The reference certifications in information security and IT audit."}},
  {id:"compta", title:"Comptabilité et finance", lead:"Les bases indispensables à tout auditeur : lire des comptes, comprendre les écritures, analyser une entreprise.", en:{title:"Accounting and finance", lead:"The basics every auditor needs: reading accounts, understanding entries, analysing a company."}},
  {id:"secteurs", title:"Secteurs d'activité", lead:"Le fonctionnement, le vocabulaire et les risques de chaque secteur audité, expliqués pas à pas.", en:{title:"Industries", lead:"How each audited industry works, its vocabulary and its risks, explained step by step."}}
);
CATALOG.push(
  {id:"iso27001-li", cat:"cyber", title:"ISO/IEC 27001 Lead Implementer", org:"PECB", domain:"Management de la sécurité (SMSI)", kind:"QCM sur scénarios", en:{domain:"Information security management (ISMS)", kind:"Scenario-based multiple choice"}},
  {id:"secplus", cat:"cyber", title:"CompTIA Security+ (V8, SY0-801)", org:"CompTIA", domain:"Fondamentaux cybersécurité", kind:"QCM + questions de performance", en:{domain:"Cybersecurity fundamentals", kind:"Multiple choice + performance-based"}},
  {id:"oscp", cat:"cyber", title:"OSCP et OSCP+ (PEN-200)", org:"OffSec", domain:"Test d'intrusion", kind:"Examen pratique en laboratoire", en:{title:"OSCP and OSCP+ (PEN-200)", domain:"Penetration testing", kind:"Hands-on lab exam"}},
  {id:"cisa", cat:"cyber", title:"CISA", org:"ISACA", domain:"Audit des systèmes d'information", kind:"QCM", en:{domain:"Information systems audit", kind:"Multiple choice"}},
  {id:"cism", cat:"cyber", title:"CISM", org:"ISACA", domain:"Gouvernance et management de la sécurité", kind:"QCM", en:{domain:"Security governance and management", kind:"Multiple choice"}},
  {id:"cissp", cat:"cyber", title:"CISSP", org:"ISC2", domain:"Sécurité de l'information (8 domaines)", kind:"QCM adaptatif", en:{domain:"Information security (8 domains)", kind:"Adaptive multiple choice"}},
  {id:"compta", cat:"compta", title:"Comptabilité générale pas à pas (SYSCOHADA)", org:"Cours Georgi Learning", domain:"De zéro aux états financiers", kind:"Cours + exercices corrigés + QCM", en:{title:"Financial accounting step by step (SYSCOHADA)", domain:"From zero to financial statements", kind:"Course + worked exercises + quiz"}},
  {id:"finance", cat:"compta", title:"Finance d'entreprise et analyse financière", org:"Cours Georgi Learning", domain:"Ratios, trésorerie, rentabilité, investissement", kind:"Cours + QCM", en:{title:"Corporate finance and financial analysis", domain:"Ratios, cash, profitability, investment", kind:"Course + quiz"}},
  {id:"banque", cat:"secteurs", title:"Banque", org:"Secteur", domain:"Crédit, dépôts, Bâle, BCEAO, PCB révisé", kind:"Cours + lexique + QCM", en:{title:"Banking", domain:"Lending, deposits, Basel, BCEAO, banking chart of accounts", kind:"Course + glossary + quiz"}},
  {id:"monnaie-electronique", cat:"secteurs", title:"Émetteurs de monnaie électronique", org:"Secteur", domain:"Mobile money, comptes de cantonnement, agents", kind:"Cours + lexique + QCM", en:{title:"E-money issuers", domain:"Mobile money, safeguarding accounts, agents", kind:"Course + glossary + quiz"}},
  {id:"assurance", cat:"secteurs", title:"Assurance", org:"Secteur", domain:"Primes, sinistres, provisions techniques, CIMA", kind:"Cours + lexique + QCM", en:{title:"Insurance", domain:"Premiums, claims, technical provisions, CIMA", kind:"Course + glossary + quiz"}},
  {id:"telecoms", cat:"secteurs", title:"Télécommunications", org:"Secteur", domain:"Revenus, interconnexion, roaming, revenue assurance", kind:"Cours + lexique + QCM", en:{title:"Telecommunications", domain:"Revenue, interconnection, roaming, revenue assurance", kind:"Course + glossary + quiz"}},
  {id:"petrole", cat:"secteurs", title:"Pétrole et gaz", org:"Secteur", domain:"Amont, aval, contrats de partage, stocks", kind:"Cours + lexique + QCM", en:{title:"Oil and gas", domain:"Upstream, downstream, production sharing, inventory", kind:"Course + glossary + quiz"}}
);
