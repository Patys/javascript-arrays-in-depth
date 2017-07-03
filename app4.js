let items = [1,2,3,4];
let copy = items.slice();

copy[0] = 100;
copy.push(432);

console.log(items);
console.log(copy);
