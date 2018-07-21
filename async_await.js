// let getName = async() => "Caro";

// console.log(getName());

// let getName = async() => {
//   throw new Error('Error, the request couldn\'t be handled');
//   return "Caro";
// };

// getName().then((name) => {
//   console.log(name);
// })
// .catch((err) => {
//   console.log(err);
// });

let getName = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Caro");
    }, 3000);
  });
};

let sayHello = async() => {
  let name = await getName();
  return `Hello ${name}`;
};

sayHello().then((message) => {
  console.log(message);
});
