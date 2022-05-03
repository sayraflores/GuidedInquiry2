// EASY: Write a function that would allow you to do this:
// var run = exercise('running');
// console.log(run()); // prints "Today's exercise: running"
// var swim = exercise('swimming');
// console.log(swim()); // prints "Today's exercise: swimming

// function thingsToDo() {
//     var run = 'exercise(running)';
//     console.log(run);
// }

function activity(activity1, activity2) {
    const act1 = `Todays exercise:`;
    return act1;
}

const exercise = activity(`running`);
console.log(exercise + ` ` + 'Running');

const exercise2 = activity('swimming');
console.log(exercise2 + ' ' + 'Swimming');

