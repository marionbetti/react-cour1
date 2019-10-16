class Person {
  // Majuscule en 1ére lettre
  // on n'est pas en typescript private /public /protected n'existes pas

  constructor(nom) {
    // dispose d'une fonction constuctor éxécutée lorsque l'on fait un new
    // instancier les variables de class
    this.name = nom;
    console.log("ici");
    console.log("la");
  }
  apprendre() {
    console.log(this.name + " est en train de se former en javascript");
  }
}

// héritage :

class Teacher extends Person {
  constructor(nom, diplome) {
    super(nom); // réexécute la fonction parente // fait faire des choses en + // en 1er
    this.diplome = diplome;
  }
  former() {
    console.log("former en react");
  }
  apprendre() {
    console.log(
      "il n'a pas besoin d'apprendre car il a un diplôme de l' " + this.diplome
    );
  }
}

const alain = new Person("Alain");

alain.apprendre();

const prof = new Teacher("Malik", "Ifocop");
prof.apprendre();
prof.former();
