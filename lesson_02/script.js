const h1 = document.querySelector('h1');
const h2 = document.querySelector('h2');
const lessonDiv = document.querySelector('.lesson_02');

const style = document.createElement('style');
const input = document.createElement('input');
const paragraph = document.createElement('p');

paragraph.classList.add('rainbow-text');

style.textContent = `
  .rainbow-text {
    background: linear-gradient(to right, violet, indigo,
                blue, green, yellow, orange, red);
    -webkit-background-clip: text;
    color: transparent;
    font-size: 36px;
  }
`;

document.head.append(style);
lessonDiv.append(input);
lessonDiv.append(paragraph);

document.body.style.backgroundColor = '#f0f0f0';

h1.style.textAlign = 'center';
h1.style.color = '#333';
h1.style.fontSize = '48px';
h1.style.fontFamily = 'Arial, sans-serif';

h2.style.fontSize = '24px';
h2.style.marginBottom = '100px';

lessonDiv.style.display = 'flex';
lessonDiv.style.flexDirection = 'column';
lessonDiv.style.alignItems = 'center';
lessonDiv.style.justifyContent = 'top';
lessonDiv.style.height = '100vh';

input.style.padding = '10px';
input.style.fontSize = '16px';
input.style.marginBottom = '20px';

let timerId;

input.addEventListener('input', () => {
  clearTimeout(timerId);

  timerId = setTimeout(() => {
    paragraph.textContent = input.value;
  }, 300);
});


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
