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

let getUser = (id) => {
  return new Promise((resolve, reject) => {
    let user = users.find((user) => user.id === id);
    // console.log(user);
    if (!user) {
      reject(`Not user found with id ${id}`);
    } else {
      resolve(user);
    }
  });
};


let getMoney = (user) => {
  return new Promise((resolve, reject) => {
    let _money = money.find((e) => e.id === user.id);
    if (!_money) {
      reject(`Not money found for user ${user.name}`);
    } else {
      resolve({
        name: user.name,
        money: _money.money
      });
    }
  });
}

let user = getUser(3).then((user) => {
  console.log(user);
  getMoney(user).then((ans) => {
    console.log(ans);
  }, (err) => console.log(err));
}, (err) => console.log(err));
