const person = {
  firstName: 'John',
  lastName: 'Doe',
  hobby: 'banjo playing'
};
console.log('person', person);
const fullName = person.firstName + '' + person.lastName;
console.log('the full name is', fullName);
person.job = 'jerk';
console.log('the current job is', person.job);
person.previousJob = 'maid';
console.log('the pervious job was', person.previousJob);
console.log('the complete person object', person);
