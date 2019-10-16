class Person {
  // Majuscule en 1ére lettre
  // on n'est pas en typescript private /public /protected n'existes pas

  constructor(nom) {
    // dispose d'une fonction constuctor éxécutée lorsque l'on fait un new
    // instancier les variables de class
    this.name = nom;
  }
  apprendre() {
    console.log(this.name + " est en train de se former en javascript");
  }
}

const Alain = new Person("Alain");

Alain.apprendre();
