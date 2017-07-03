const items = [ "   Patryk", "Tomek  "];
const mapped = items.map(x=>x.trim()).map(x => { return {firstname: x}});
console.log(mapped);
