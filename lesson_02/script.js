// let counter = 0;

// const intervalId = setInterval(() => {
//   console.log(`${counter + 1}: Hello World!`);
//   counter++;

//   if (counter === 5) {
//     console.log('Done');
//     clearInterval(intervalId);
//   }
// }, 1000);


// ! EACHER
// const eacher = (arr, callback, delay) => {
//   let counter = 0;

//   setTimeout(function eacherTimer() {
//     callback(arr[counter++]);

//     if (counter < arr.length) {
//       setTimeout(eacherTimer, delay);
//     }
//   }, delay);
// };

// const numbers = [1, 2, 3, 4, 5];

// eacher(numbers, number => {
//   console.log('Число ' + number);
// }, 0);


// ! CALLER
// const obj = {
//   id: '42',
//   whoCalledMe() {
//     console.log('Caller is', this);
//   },
// };

// obj.whoCalledMe();

// setTimeout(() => {
//   obj.whoCalledMe();
// }, 1000);

// setTimeout(obj.whoCalledMe, 2000);


// const helloing = delay => {
//   setTimeout(() => {
//     console.log('Hello World!', delay);

//     if (delay === 5) {
//       return console.log('Done');
//     }

//     helloing(delay + 1);
//   }, 1000);
// };

// helloing(1);


// сложнааааааааа
// let lastIntervalId = null;
// let counter = 5;

// const greeting = delay => {
//   if (counter === 5) {
//     clearInterval(lastIntervalId);
//     console.log(lastIntervalId);

//     lastIntervalId = setInterval(() => {
//       console.log('Hello World. ', delay, counter);
//       greeting(delay + 100);
//     }, delay);

//     counter = 0;
//   }

//   counter += 1;
// };

// greeting(100);
