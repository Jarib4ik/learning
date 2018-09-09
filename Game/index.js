const buttons = document.querySelector('.flex-container-second');
const spanVisible = document.querySelector('.flex-container-second .flex-item-second span');

buttons.addEventListener('click', function (e) {
  if (e.target.classList.contains('flex-item-second')) {
    e.target.classList.toggle('flex-item-third')
  }
});


function changeNum() {

  function randomInteger(min, max) {
    var rand = min + Math.random() * (max + 1 - min);
    rand = Math.floor(rand);
    return rand;
  }

  function randomArr() {
    const elementSum = document.querySelectorAll('.span-nane').length;
    let maxNum = elementSum / 2;
    let arr = []

    for (let i = 0; arr.length < maxNum; i++) {
      rand = randomInteger(1, maxNum);
      if (arr.indexOf(rand) < 0) {
        arr.push(rand);
      }
    }
    return arr
  }

  let a = randomArr();
  let b = randomArr();

  let c = [0, ...a, ...b];


  function pushNumbers(arr) {
    for (let i = 1; i < arr.length; i++) {
      let card = document.querySelector(`.flex-item-second:nth-child(${i}) span`);
      card.textContent = arr[i];
    }
  }
  pushNumbers(c);
}

changeNum()