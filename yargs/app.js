let argv = require('yargs')
                .command('sayHello', 'Says hello to a person', {
                    name: {
                        demand: true,
                        alias: 'n'
                    }
                })
                .command('sayGoodBye', 'Says good bye to a person', {
                    name: {
                        demand: true,
                        alias: 'n'
                    }
                })
                .help()
                .argv;

let command = argv._[0];

switch(command) {
    case 'sayHello':
        console.log(`Hello ${argv.name}`);
    break;

    case 'sayGoodBye':
    console.log(`Good bye ${argv.name}`);
    break;

    default:
        console.log('Invalid option');
}