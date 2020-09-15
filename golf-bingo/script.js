const row = document.querySelector('.row');
const c0 = document.getElementById('0');
const c1 = document.getElementById('1');
const c2 = document.getElementById('2');
const c3 = document.getElementById('3');
const c4 = document.getElementById('4');
const c5 = document.getElementById('5');
const c6 = document.getElementById('6');
const c7 = document.getElementById('7');
const c8 = document.getElementById('8');
const c9 = document.getElementById('9');
const c10 = document.getElementById('10');
const c11 = document.getElementById('11');
const c12 = document.getElementById('12');
const c13 = document.getElementById('13');
const c14 = document.getElementById('14');
const c15 = document.getElementById('15');
const c16 = document.getElementById('16');
const c17 = document.getElementById('17');
const c18 = document.getElementById('18');
const c19 = document.getElementById('19');
const c20 = document.getElementById('20');
const c21 = document.getElementById('21');
const c22 = document.getElementById('22');
const c23 = document.getElementById('23');
const c24 = document.getElementById('24');

const rowOne = [0, 5, 10, 15, 20];
const rowTwo = [1, 6, 11, 16, 21];
const rowThr = [2, 7, 12, 17, 22];
const rowFou = [3, 8, 13, 18, 23];
const rowFiv = [4, 9, 14, 19, 24];
const colOne = [0, 1, 2, 3, 4];
const colTwo = [5, 6, 7, 8, 9];
const colThr = [10, 11, 12, 13, 14];
const colFou = [15, 16, 17, 18, 19];
const colFiv = [20, 21, 22, 23, 24];
const topLef = [0, 6, 12, 18, 24];
const topRig = [4, 8, 12, 16, 20];

const wins = [
  rowOne,
  rowTwo,
  rowThr,
  rowFou,
  rowFiv,
  colOne,
  colTwo,
  colThr,
  colFou,
  colFiv,
  topLef,
  topRig,
];

let arrIDs = [
  c0,
  c1,
  c2,
  c3,
  c4,
  c5,
  c6,
  c7,
  c8,
  c9,
  c10,
  c11,
  c12,
  c13,
  c14,
  c15,
  c16,
  c17,
  c18,
  c19,
  c20,
  c21,
  c22,
  c23,
  c24,
];

let arr = [];
let poolArr = [];
let val;

let cellText = [
  'Water Hazard',
  'Swing and a Miss',
  'Slice',
  'Hook',
  'Hit a Tree',
  'Playing From Other Fairway',
  'Lost Ball',
  'Lost Dog',
  'Current Putt >= Last Putt',
  'Duff Your Shot',
  'Out of Bounds',
  '3-Putt',
  '4-Putt',
  'Terrible Bounce',
  'Sand Trap',
  'Over the Green',
  'Ground Ball',
  'Rim the Cup',
  'Skulling a Chip Shot',
  'Lost a Club',
  'Divot goes Further than Ball',
  'Another Group Cheers',
  'Fairway Bunker',
  '321654987987',
  'asdfasdfadsf',
];

// generate a card
function newCard() {
  let num = randomNumber(0, cellText.length);
  for (let i = 0; i <= arrIDs.length - 1; i++) {
    arrIDs[i].innerHTML = `${cellText[num]}`;
    cellText.splice(num, 1);
    num = randomNumber(0, cellText.length);
  }
}

newCard();

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function testWin(arr, wins) {
  for (let i = 0; i < wins.length - 1, i++; ) {
    let test = wins[i];
    for (let j = 0; j <= wins[i].length - 1; j++) {
      if (!arr.include(wins[i][j])) {
        console.log('lose');
        console.log(wins[i][j]);
        return;
      }
      console.log(wins[i][j]);
    }
  }
}
// function test(array) {
//   while (let i = 0 && let j = 0; i < array.length - 1 && j < wins.length-1; i++) {
//     if
//     wins[j].includes(array[i])
//   }
// }

function addRemoveSquare(e) {
  if (
    e.target.classList.contains('spot') &&
    !e.target.classList.contains('selected')
  ) {
    console.log(e.target.getAttribute('id'));
    console.log(typeof e.target.getAttribute('id'));
    e.target.classList.toggle('selected');
    arr.push(parseInt(e.target.getAttribute('id')));
    console.log(arr);
    console.log(typeof e.target.getAttribute('id'));
    testWin(arr, wins);
  } else if (e.target.classList.contains('selected')) {
    arr.splice(arr.indexOf(parseInt(e.target.getAttribute('id'))), 1);
    e.target.classList.toggle('selected');
    console.log(arr);
  }
}

row.addEventListener('click', addRemoveSquare);

// let answer = checker(arr, target);

// console.log(answer);
