/* Catalogue des certifications du campus.
   Pour ajouter une certification :
   1. créer un fichier certs/<id>.js qui appelle CERTS.push({...}) (modèle : iso27001-li.js) ;
   2. ajouter <script src="certs/<id>.js"></script> dans index.html ;
   3. l'entrée ci-dessous passe automatiquement en « disponible » dès que le fichier est chargé. */
CATALOG.push(
  {id:"iso27001-li", title:"ISO/IEC 27001 Lead Implementer", org:"PECB", domain:"Management de la sécurité (SMSI)", kind:"QCM sur scénarios", en:{domain:"Information security management (ISMS)", kind:"Scenario-based multiple choice"}},
  {id:"secplus", title:"CompTIA Security+ (V8, SY0-801)", org:"CompTIA", domain:"Fondamentaux cybersécurité", kind:"QCM + questions de performance", en:{domain:"Cybersecurity fundamentals", kind:"Multiple choice + performance-based"}},
  {id:"oscp", title:"OSCP et OSCP+ (PEN-200)", org:"OffSec", domain:"Test d'intrusion", kind:"Examen pratique en laboratoire", en:{title:"OSCP and OSCP+ (PEN-200)", domain:"Penetration testing", kind:"Hands-on lab exam"}},
  {id:"cisa", title:"CISA", org:"ISACA", domain:"Audit des systèmes d'information", kind:"QCM", en:{domain:"Information systems audit", kind:"Multiple choice"}},
  {id:"cism", title:"CISM", org:"ISACA", domain:"Gouvernance et management de la sécurité", kind:"QCM", en:{domain:"Security governance and management", kind:"Multiple choice"}},
  {id:"cissp", title:"CISSP", org:"ISC2", domain:"Sécurité de l'information (8 domaines)", kind:"QCM adaptatif", en:{domain:"Information security (8 domains)", kind:"Adaptive multiple choice"}}
);
