let people = [
  {name:"Patryk"},
  {name:"Tomek"}
]
let people2 = [
  {name:"Ola"},
  {name:"Mariola"}
]

people
  .concat(people2)
  .forEach((person) => {
  console.log(person.name);
});
