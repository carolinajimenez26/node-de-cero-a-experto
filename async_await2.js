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


let getUser = async (id) => {
  let user = users.find((user) => user.id === id);
  // console.log(user);
  if (!user) {
    throw new Error(`Not user found with id ${id}`);
  } else {
    return user;
  }
};

let getMoney = async (user) => {
  let _money = money.find((e) => e.id === user.id);
  if (!_money) {
    throw new Error(`Not money found for user ${user.name}`);
  } else {
    return {
      name: user.name,
      money: _money.money
    };
  }
}

let getInformation = async (id) => {
  let user = await getUser(id);
  // console.log(user);
  let ans = await getMoney(user);
  // console.log(ans);
  return ans;
};

getInformation(1).then((message) => {
  console.log(message);
}).catch((err) => console.log(err));
