//dans le dossier react => create-react-app jour1-react-es6(télécharger react)
// cd jour1-react-es6
// code . => ouvrir visual
// src.index.js

// objet littéral
// variable complexe : contient plusieurs variable
// contenir des fonctions

const person = {
  nom: "moi", // attribut d'objet ou propriété d'objet
  parler: function() {}, // méthode d'objet = fonction dans l'objet maanière classique d'écrire
  marcher() {
    console.log("marcher");
  } // nouvelle maniére d'écrire une méthode de l'objet
};

// deux manières d'utiliser de méthode
person.marcher();

const action = "marcher";
person[action](); // autre manière d'éxécuter les instructions de person.marcher
