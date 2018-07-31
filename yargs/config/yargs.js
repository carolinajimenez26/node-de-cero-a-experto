const opts = {
    name: {
        demand: true,
        alias: 'n'
    }
}

let argv = require('yargs')
                .command('sayHello', 'Says hello to a person', opts)
                .command('sayGoodBye', 'Says good bye to a person', opts)
                .help()
                .argv;

module.exports = {
    argv
}