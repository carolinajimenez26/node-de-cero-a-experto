const fs = require('fs');

let todo_list = [];

const save = () => {
  let data = JSON.stringify(todo_list);
  fs.writeFile('db/data.json', data, (err) => {
      if (err) throw err;
      console.log('File has been saved!');
  });
};

const getData = () => {
  try {
    todo_list = require('../db/data.json');
  } catch (e) {
    todo_list = [];
  }
};

const create = (description) => {
  getData();
  let todo = {
    description,
    completed: false
  };
  let found = todo_list.find((todo) => {
    return todo.description === description;
  });
  if (!found) {
    todo_list.push(todo);
    save();
  }
  return todo;
};

const getTODOS = () => {
  getData();
  return todo_list;
};

const update = (description) => {
  getData();
  let found = todo_list.find((todo) => {
    return todo.description === description;
  });
  if (found) {
    found.completed = true;
    save();
    return true;
  } else {
    return false;
  }
};

const remove = (description) => {
  getData();
  let index = todo_list.findIndex((todo) => {
    return todo.description === description;
  });
  if (index > -1) {
    todo_list.splice(index, 1);
    save();
    return true;
  } else {
    return false;
  }
};

module.exports = {
  create,
  getTODOS,
  update,
  remove
};
