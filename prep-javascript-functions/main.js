function addTwoNumbers(x, y) {
  return x + y;
}

var sum = addTwoNumbers(4, 4);
console.log('sum', sum);

function convertHourstoMinutes(hours) {
  return hours * 60;
}
var pro = convertHourstoMinutes(2);
console.log('number of minutes', pro);

function getGreeting(name) {
  var result = 'Hello' + ' ' + name + '!';
  return result;
}
var greeting = getGreeting('alex');
console.log('greeting', greeting);

function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}
var addandmultiply = addAndMultiplyBy5(4, 2);
console.log('add and multiply by 5 =', addandmultiply);

function multiplyAndDivideBy5(num1, num2) {
  return (num1 * num2) / 5;
}
var multiplyanddivide = multiplyAndDivideBy5(10, 2);
console.log('multiply and divide by 5 =', multiplyanddivide);

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}
var subtract = subtractTwoNumbers(8, 6);
console.log(subtract);

function getCircleCircumference(radius) {
  return (radius * 2) * 3.1415;
}
var circumference = getCircleCircumference(5);
console.log('the circumference is', circumference);

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}
var fullname = getFullName('Alex', 'Piper');
console.log('the fullname is', fullname);

function cube(number) {
  return number * number * number;
}
var cubevalue = cube(5);
console.log(cubevalue);
