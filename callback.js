setTimeout(() =>{
  console.log("Hello world");
}, 3000);

let getUserById = (id, callback) => {
  let user = {
    name: 'Caro',
    id
  }
  if (id === 20) {
    callback('The user doesn\'t exist');
  } else {
    callback(null, user);
  }
};

getUserById(20, (err, user) => {
  if (err) {
    return console.log(err);
  }
  console.log(user);
});
