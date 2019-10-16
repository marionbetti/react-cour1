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

const arr = [1, 2, 3];
const arr2 = [...arr]; // clone // on fix les valeurs du tableau
arr2.push(4);
// avec [...]on copie l'adresse pas la valeur

// const arr =[1, 2, 3];
// const arr2 = arr;
// arr2.push(4);

// console.log(arr2);
// modifie les valeurs et rajoute 4 , à la fin du tableau a arr aussi

console.log("arr", arr);
console.log("arr2", arr2); // [1, 2, 3, 4]
