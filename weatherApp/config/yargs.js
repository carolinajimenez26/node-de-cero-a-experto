const argv = require('yargs').options({
  address: {
    alias: 'a',
    description: 'Address of the desired location of the world',
    demand: true
  }
}).argv;

module.exports = {
    argv
}
