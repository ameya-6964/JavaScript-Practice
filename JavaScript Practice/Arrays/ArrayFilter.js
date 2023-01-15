// Filter method for Arrays
const numbers = [-10, 0, -2, 15, -36, 25]; // Array of postitive and negative numbers

const positiveNumbers = numbers.filter((number) => number >= 0);

console.log(positiveNumbers);

// Second Example

// A start up wants to reward the employees with 7 or more hours of overtime
var employeesData = [
  {
    name: "Sebastian",
    overtime: 5,
    duration: 1,
  },
  {
    name: "Cardi Vee",
    overtime: 10,
    duration: 2,
  },
  {
    name: "George Lopez",
    overtime: 4,
    duration: 1,
  },
];

const employeesToReward = employeesData.filter(
  (employee) => employee.overtime <= 6 && employee.duration < 2
);

console.log(employeesToReward);

const employeeNamesToReward = employeesToReward.map((employee) => {
  return employee.name;
});

console.log(employeeNamesToReward);

employeeNamesToReward.forEach((name) => {
  console.log(` Hurray ${name} You Recived Reward`);
});
