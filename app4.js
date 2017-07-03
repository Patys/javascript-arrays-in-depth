let person = {name: "patryk-szczygło"};

let filters = {
  'deslugify': x => x.replace('-', ' '),
  'uppercase': x => x.toUpperCase()
};

let input = 'name | deslugify | uppercase';

let sections = input.split('|').map(x => x.trim());
console.log(sections);
let ref = person[sections[0]];
let output = sections
  .slice(1)
  .reduce((prev, next) => {
    if(filters[next]) {
      return filters[next].call(null, prev);
    }
    return prev;
  }, ref);

console.log(output);
