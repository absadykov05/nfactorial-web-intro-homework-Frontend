// 1-TASK
let ans = prompt("Write some number: ", "");

if (ans == 5) {
  alert("It is 5");
}
if (ans == 6) {
  alert("It is 6");
} else {
  alert(ans);
}

// 2-TASK
let a = +prompt("Write value of a: ", "");
console.log(a); // string
a = +a;
console.log(a); // number

switch (a) {
  case 0:
    alert(0);
    break;
  case 1:
    alert(0);
    break;
  case 2:
    alert("2,3");
    break;
  case 3:
    alert("2,3");
    break;
}

// 3-TASK

let sum = 0;

for (let i = 0; i <= 100; i++) {
  if (i % 2 == 0) {
    sum += i;
  }
}

console.log(sum);

let i = 0;
while (i < 3) {
  alert(`number ${i}!`);
  i++;
}