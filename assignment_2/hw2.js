const location = "Liverpool";
let coach = "Jurgen Klopp";
let cups = 6;
let redCards = null;
let problems = undefined;
let isTheBest = true;

let liverpool = {
  location,
  coach,
  cups,
  redCards,
  problems,
  isTheBest,
};

liverpool.coach = "Arne Slot";
delete liverpool.problems;
liverpool.yellowCards = 2;
liverpool["stadium"] = "Anfield";

let vehicle = {};
vehicle.brandName = "Mers";
vehicle.model = "GT 63";
vehicle.model = "S class";
delete vehicle.model;

let salaries = {
  John: 500000,
  Arnold: 450000,
  Rodrigo: 800000,
};

let sum = 0;
for (x in salaries) {
  sum += x;
}
console.log(sum);
