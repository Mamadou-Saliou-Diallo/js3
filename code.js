// let x = 1;
// let y = 2;
// let z = x+y;
// console.log(typeof(x), x);
// console.log(typeof(y), y);
// console.log(typeof(z), z);

// Déclaration des variables
let x = "1";
let y = "2";
let z = x + y; // z est une concaténation de chaînes

// Affichage des types et des valeurs
console.log(`x: ${x}, type: ${typeof x}`);
console.log(`y: ${y}, type: ${typeof y}`);
console.log(`z: ${z}, type: ${typeof z}`);


// Conversion des types de x et y en entiers
x = parseInt(x);
y = parseInt(y);

// Recalcul de z
z = x + y; // z est maintenant une somme d'entiers

// Affichage des types et des valeurs
console.log(`x: ${x}, type: ${typeof x}`);
console.log(`y: ${y}, type: ${typeof y}`);
console.log(`z: ${z}, type: ${typeof z}`);
