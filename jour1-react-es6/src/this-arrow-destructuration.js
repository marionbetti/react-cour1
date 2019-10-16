// combo arrow function , this et objet littéral

const formation = {
  nom: "Développeur WEb & Mobile",
  apprendre() {
    console.log(this.nom);
  },
  apprendreVite() {
    setTimeout(function() {
      console.log(this.nom); // attention au contexte
      console.log(this);
    }, 1000);
  },
  apprendreViteSelf() {
    // méthode super classique
    const self = this; // créer une variable qui va contenir la valeur de this (formation)

    setTimeout(function() {
      console.log(self.nom); // puis l'utiliser dans la fonction
      console.log(self);
    }, 2000);
  },
  apprendreViteArrow() {
    setTimeout(() => {
      // Arrows functions ne créent pas de nouveau contexte
      console.log(this.nom);
    }, 3000);
  }
};

formation.apprendre();
formation.apprendreVite();
formation.apprendreViteSelf();
formation.apprendreViteArrow();

// dans react il n'existe pas ed directive de type *ngFor
// il faut utiliser une méthode natuive des tableaux en javascript
// .map()

const jours = ["lundi", "mardi"];

// je veux générer depuis ce tableau une liste [<li>"lundi"</li>,<li>"mardi"</li> ]

// rappel de la syntaxe d'angular
// <li *ngFor let j of jours>{{ j }}</li>

const htmlJour = jours.map(function(j) {
  return `<li>${j}</li>`;
});
console.log(htmlJour);

const htmlJour2 = jours.map(j => `<li>${j}</li>`);
console.log(htmlJour2);

// destructuration d'objet

const voiture = {
  modele: 206,
  marque: "Peugeot",
  anneeAchat: 2012,
  info() {
    return `${this.marque}${this.modele}`;
  }
};
// modèle classque pour afficher chaque attribut de l'objet
console.log(voiture.anneeAchat, voiture.marque, voiture.modele);

// nouvelle manière
// destructuration de l'objet
const { anneeAchat, marque, modele, info } = voiture;

console.log(anneeAchat, marque, modele);
const i = info.bind(voiture);
console.log(i());

function generateInfo(objet) {
  return `<p>${objet.id} - ${objet.titre}</p>`;
}

const r = generateInfo({ id: 1, titre: "titre1" });

console.log(r);

function generateInfo2({ id, titre }) {
  // ta fonction en 1 seul argument
  return `<p>${id} - ${titre}</p>`;
}

const r2 = generateInfo2({ id: 2, titre: "titre2" });
console.log(r2);
