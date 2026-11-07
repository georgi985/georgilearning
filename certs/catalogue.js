/* Catalogue des certifications du campus.
   Pour ajouter une certification :
   1. créer un fichier certs/<id>.js qui appelle CERTS.push({...}) (modèle : iso27001-li.js) ;
   2. ajouter <script src="certs/<id>.js"></script> dans index.html ;
   3. l'entrée ci-dessous passe automatiquement en « disponible » dès que le fichier est chargé. */
CATALOG.push(
  {id:"iso27001-li", title:"ISO/IEC 27001 Lead Implementer", org:"PECB", domain:"Management de la sécurité (SMSI)", kind:"QCM sur scénarios"},
  {id:"secplus", title:"CompTIA Security+ (SY0-701)", org:"CompTIA", domain:"Fondamentaux cybersécurité", kind:"QCM + questions de performance"},
  {id:"oscp", title:"OSCP et OSCP+ (PEN-200)", org:"OffSec", domain:"Test d'intrusion", kind:"Examen pratique en laboratoire"},
  {id:"cisa", title:"CISA", org:"ISACA", domain:"Audit des systèmes d'information", kind:"QCM"},
  {id:"cism", title:"CISM", org:"ISACA", domain:"Gouvernance et management de la sécurité", kind:"QCM"},
  {id:"cissp", title:"CISSP", org:"ISC2", domain:"Sécurité de l'information (8 domaines)", kind:"QCM adaptatif"}
);
