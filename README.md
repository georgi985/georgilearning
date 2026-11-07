# Georgi Learning

Site de révision pour les certifications en sécurité de l'information : ISO/IEC 27001 Lead Implementer, CompTIA Security+, CISA, CISM et CISSP.

Chaque certification propose des modules de cours, des questions corrigées et un examen blanc chronométré. Site statique (HTML et JavaScript), publié avec GitHub Pages sur https://georgilearning.academy.

## Ajouter une certification

1. Créer `certs/<id>.js` qui appelle `CERTS.push({...})` (modèle : `certs/iso27001-li.js`).
2. Créer `certs/<id>-qcm.js` pour les questions (modèle : `certs/iso27001-li-qcm.js`).
3. Ajouter les deux balises `<script>` dans `index.html` et une entrée dans `certs/catalogue.js`.

Contenu original rédigé pour la révision ; il ne reproduit ni les normes ni les supports officiels des organismes de certification.
