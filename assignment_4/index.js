const checkAge = (age) => {
  return age > 18 ? true : confirm("Rpditeli razreshili???");
};

alert(checkAge(19));

const pow = (x, n) => {
  let ans = 1;
  for (let i = 0; i < n; i++) {
    ans = ans * x;
  }
  return ans;
};

alert(pow(2, 6));

//код этой функций выдает ошибку, но сама стрелочность правильная))
const ask = (question, yes, no) => {
  if (confirm(question)) yes();
  else no();
};

ask(
  "Вы согласны?",
  function () {
    alert("Вы согласились.");
  },
  function () {
    alert("Вы отменили выполнение.");
  }
);

let arr = [5, 2, 1, -10, 8];
arr.sort((a, b) => {
  return b - a;
});
alert(arr);

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [vasya, petya, masha];

let names = users.map((obj) => obj.name);
alert(names);

let vasya2 = { name: "Вася", surname: "Пупкин", id: 1 };
let petya2 = { name: "Петя", surname: "Иванов", id: 2 };
let masha2 = { name: "Маша", surname: "Петрова", id: 3 };

let users2 = [vasya, petya, masha];

let usersMapped = users2.map((obj) => {
  fullName: obj.name + obj.surname;
  id: obj.id;
});
console.log(usersMapped);

let vasya3 = { name: "Вася", age: 25 };
let petya3 = { name: "Петя", age: 30 };
let masha3 = { name: "Маша", age: 29 };

let arr3 = [vasya, petya, masha];

const getAverageArr = (arr) => {
  let sum = 0;
  array.forEach((obj) => {
    sum = sum + obj.age;
  });

  return sum / length(arr);
};

alert(getAverageArr(arr3));
