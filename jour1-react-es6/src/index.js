//dans le dossier react => create-react-app jour1-react-es6(télécharger react)
// cd jour1-react-es6
// code . => ouvrir visual
// src.index.js

// objet littéral
// variable complexe : contient plusieurs variable
// contenir des fonctions

const person = {
  nom: "Alain", // attribut d'objet ou propriété d'objet
  parler: function() {
    console.log("parler");
  }, // méthode d'objet = fonction dans l'objet maanière classique d'écrire
  marcher() {
    console.log(this.nom + " est en train de marcher");
    console.log(this);
  } // nouvelle maniére d'écrire une méthode de l'objet
};

// deux manières d'utiliser de méthode
person.marcher();

//const action = "marcher";
//person[action](); // autre manière d'éxécuter les instructions de person.marcher

const etudiant = person.marcher; //attention on ne met pas les parenthéses
// passage par reference
// etudiant va contenir les instructions contenus dans la méthode marcher
console.log("etudiant", etudiant);

etudiant();

// this mot clé du language JS
// il ne fonctionne pas de la même manière que this lorsque l'on travaille en Java ou PHP

// en fonction de comment vous allez l'éxécuter renvoyé une référence à un objet
// renvoyer windows
// this renvoie le contexte d'éxécution
// person.marcher(); this=person{} donc this.nom = "Alain"
// etudiant(); this => window donc this.nom = undifined
