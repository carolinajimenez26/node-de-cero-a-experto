const {argv} = require('./yargs');
const colors = require('colors/safe');

let command = argv._[0];

switch(command) {
    case 'sayHello':
        console.log(colors.rainbow(`Hello ${argv.name}`));
    break;

    case 'sayGoodBye':
    console.log(colors.cyan(`Good bye ${argv.name}`));
    break;

    default:
        console.log('Invalid option');
}