let users = [{
  id: 1,
  name: "A"
}, {
  id: 2,
  name: "B"
}, {
  id: 3,
  name: "C"
}];

let money = [{
  id: 1,
  money: 1000
}, {
  id: 2,
  money: 300
}];

let getUser = (id, callback) => {
  let user = users.find((user) => user.id === id);
  // console.log(user);
  if (!user) {
    callback(`Not user found with id ${id}`);
  } else {
    callback(null, user);
  }
};

let getMoney = (user, callback) => {
  let _money = money.find((e) => e.id === user.id);
  if (!_money) {
    callback(`Not money found for user ${user.name}`);
  } else {
    callback(null, {
      name: user.name,
      money: _money.money
    });
  }
}

getUser(3, (err, user) => {
  if (err) {
    return console.log(err);
  }
  console.log(user);

  getMoney(user, (err, user) => {
    if (err) {
      return console.log(err);
    }
    console.log(user);
  });

});
