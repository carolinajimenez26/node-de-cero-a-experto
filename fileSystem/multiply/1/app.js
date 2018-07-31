let {multiply} = require('./mult');

let argv = process.argv;
let base = argv[2].split('=')[1];

multiply(base).then((fileName) => {
    console.log(`File ${base}.txt has been saved!`);
}, (err) => console.log(err));
