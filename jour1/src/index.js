// imr
import React from "react";
import ReactDOM from "react-dom"; // sert à synchroniser le virtuel DOM avec le réel

// react-script est utilisée lorsque l'on fait dans le shell
// commande npm start

// ReactDOM.render(
//   <h1>Bonjour tous le monde</h1>, // JSX
//   document.getElementById("root")
// );
//
// 2 méthodes :
// const html = <h1>Bonjour tous le monde</h1>;
// ReactDOM.render(html, document.getElementById("root"));

const tml = React.createElement("h1", null, "hello"); // JS
// const tml = <h1>hello</h1>; // JSX
console.log(tml);

// utilisé le fichier en cours
// afficher une petite liste  dans le naviguateur en utilisant du jSX
// -lundi
// -mardi
// -mercredi

const liste = (
  <ul>
    <li>lundi</li>
    <li>mardi</li>
    <li>mercredi</li>
  </ul>
);
console.log(liste);

ReactDOM.render(liste, document.getElementById("root"));
