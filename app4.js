let person = {name: "Patryk"}
let items = [1,person];
let copy = items.slice();

copy[1].name = 'Tome';

console.log(items);
console.log(copy);
