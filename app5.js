var lessons = [
    {
        title: 'Javascript Array methods in depth - concat',
        views: 1000
    },
    {
        title: 'Javascript Array methods in depth - slice',
        views: 1050
    },
    {
        title: 'Javascript Array methods in depth - join',
        views: 1025
    }
];

let list = lessons
  .sort((a,b) => b.views-a.views)
  .map(x => `   <li>${x.title} - ${x.views}</li>`)
  .join('\n');

let output = `<ul>\n${list}\n</ul>`;

console.log(output);
