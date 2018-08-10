const argv = require('./config/yargs').argv;
const todo_logic = require('./todo-logic/todo-logic');
const colors = require('colors/safe');

let command = argv._[0];

switch (command) {
  case 'create':
    let todo = todo_logic.create(argv.description);
    console.log('TODO ' + colors.red(todo.description) + ' created');
  break;

  case 'list':
    console.log("TODOS");
    let todos = todo_logic.getTODOS();
    console.log(colors.black("-------------"));
    for (let todo of todos) {
      console.log(colors.bold.blue(`TODO: ${todo.description}`));
      if (todo.completed) {
        console.log(colors.bold.green(`State: ${todo.completed}`));
      } else {
        console.log(colors.bold.red(`State: ${todo.completed}`));
      }
      console.log(colors.black("-------------"));
    }
  break;

  case 'update':
    let updated = todo_logic.update(argv.description);
    if (updated) {
      console.log(colors.green(`${argv.description} updated!`));
    } else {
      console.log(colors.red(`Couldn't find ${argv.description} in TODOS`));
    }
  break;

  case 'remove':
    let removed = todo_logic.remove(argv.description);
    if (removed) {
      console.log(colors.green(`${argv.description} removed!`));
    } else {
      console.log(colors.red(`Couldn't remove ${argv.description}`));
    }
  break;

  default:
    console.log("Option not available");
}
