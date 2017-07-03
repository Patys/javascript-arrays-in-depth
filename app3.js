let family = ['Patryk', 'Tomek'];

let kittieExists = family.indexOf('Kot') > -1;

if(!kittieExists){
  family.push('Kot');
}

console.log(family);
