# georgilearning.academy

Site personnel de Georges Cabo, bilingue français / anglais, publié avec GitHub Pages sur https://georgilearning.academy.

## Structure

- `index.html` : page d'accueil (présentation, CV, outils, contact). Le CV se modifie dans les objets `CV.fr` et `CV.en` du script.
- `learning/` : cours et entraînement aux certifications (ISO/IEC 27001 Lead Implementer, CompTIA Security+, CISA, CISM, CISSP), avec questions corrigées et examen blanc chronométré.
- Les anciennes adresses du type `/#iso27001-li` sont redirigées vers `/learning/#iso27001-li`.

## Ajouter ou traduire une certification (dans `learning/`)

1. Créer `certs/<id>.js` qui appelle `CERTS.push({...})` (modèle : `certs/iso27001-li.js`).
2. Créer `certs/<id>-qcm.js` pour les questions (modèle : `certs/iso27001-li-qcm.js`).
3. Version anglaise : `certs/<id>.en.js` (définit `c.en = {title, intro, modules, exam}` dans le même ordre de modules) et `certs/<id>-qcm.en.js` (définit `c.enQuestions`, même ordre de questions et d'options que le fichier français).
4. Ajouter les balises `<script>` dans `learning/index.html` et une entrée dans `certs/catalogue.js`.

Sans traduction, le contenu s'affiche en français avec un avertissement.

Contenu original rédigé pour la révision ; il ne reproduit ni les normes ni les supports officiels des organismes de certification.
