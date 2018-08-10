const description = {
  demand: true,
  alias: 'd'
};

const completed = {
  alias: 'c',
  default: false
};

let argv = require('yargs')
                .command('create', 'Creates a TODO', {description})
                .command('update', 'Updates a TODO', {
                  description,
                  completed
                })
                .command('remove', 'Remove a TODO', {description})
                .help()
                .argv;

module.exports = {
    argv
}
