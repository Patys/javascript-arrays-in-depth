var tasks = [
    {
        title: 'Do laundry',
        completed: true
    },
    {
        title: 'Feed the cat',
        completed: true
    },
    {
        title: 'Watch the array lessons on egghead.io',
        completed: true
    }
];

function addTask(title) {
  tasks.push({title: title, completed: false});
}

addTask('Feed the dog');

console.log(tasks);
