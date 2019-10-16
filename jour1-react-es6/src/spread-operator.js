const a = [1, 2, 3];
const b = [4, 5, 6];

//concaténer des tableaux : sommer le contenu des deux tableaux
// méthode old school:

const c = a.concat(b);

console.log(c);

// méthode new school:
// [...x] ==> prend moi tous le tableau
const d = [...a, ...b]; // spread opérateur
console.log(d);

const e = [...a, "un texte", ...b];

console.log(e);
