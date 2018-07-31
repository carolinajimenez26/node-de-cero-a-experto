let {multiply} = require('./mult');
let argv = require('yargs')
                .command('multTable', 'Saves the table of a number in a txt file', {
                    base: {
                        demand: true,
                        alias: 'b'
                    },
                    from: {
                        default: 1,
                    },
                    to: {
                        default: 10
                    }
                })
                .help()
                .argv;

// console.log(argv.base);
// console.log(argv.from);
// console.log(argv.to);

multiply(argv.base, argv.from, argv.to).then((fileName) => {
    console.log(`File ${argv.base}.txt has been saved!`);
}, (err) => console.log(err));
