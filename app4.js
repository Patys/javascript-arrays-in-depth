let person = {name: "patryk-szczygło"};

let filters = {
  'deslugify': x => x.replace('-', ' '),
  'uppercase': x => x.toUpperCase()
};

let input = 'name | deslugify | uppercase';

let sections = input.split('|').map(x => x.trim());
console.log(sections);
