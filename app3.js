let family = ['Patryk', 'Tomek', 'Kot'];

let kittieExists = family.indexOf('Kot') > -1;

if(!kittieExists){
  family.push('Kot');
}

console.log(family);
