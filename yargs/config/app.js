let {argv} = require('./yargs');

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