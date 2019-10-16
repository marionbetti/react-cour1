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

// const action = "marcher";
// person[action](); // autre manière d'éxécuter les instructions de person.marcher

const etudiant = person.marcher.bind(person); // bind(); == associer
// attention on ne met pas les parenthéses
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
// etudiant(); this => window donc { this.nom } = undifined

// pour éviter que { this } devienne { window } => this.nom == window.nom == undifined
// les fonctions qui sont des objets dispose d'une méthode qui s'appelle { bind (person)}
// cette méthode de fonction permet de garantir que { this == person } quelque soit le contetxe dexecution

//--------------------------------------------

// méthode classique pour déclarer une fonction
function generateNom() {
  return "Béatrice";
}
console.log(generateNom());

// autre manière classique
const generatePrenom = function() {
  return "céline";
};
console.log(generatePrenom());

// nouvelle manière zéro paramètre ()

const generateNomComplet = () => {
  return "Victor Hugo";
};

console.log(generateNomComplet());

// nouvelle manière un paramètre les parenthéses sont facultatives et prettier va les supprimer
const html = texte => {
  return `<h1>${texte}</h1>`;
};
// nouvelle manière avec au moin s2 arguments les () sont obligatoire
const menu = (texte1, texte2) => {
  return `<nav>${texte1}${texte2}</nav>`;
};

// 1 seule instruction et quelle fait un return
// enlever les { } et le return
const film = () => "Terminator";
const film1 = name => name;

// équivalent à écrire
// function film(){
//  return "Terminator"
// }

console.log(film());
console.log(film1("ET"));
