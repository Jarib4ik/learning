(function () {
  const buttons = document.querySelector('.flex-container-second');
  const startButton = document.querySelector('.button');
  let firstNum = null;
  let secondNum = null

  buttons.addEventListener('click', function (e) {
    if (firstNum > 0) {
      if (e.target.classList.contains('flex-item-second')) {
        e.target.classList.toggle('flex-item-third', true)
        e.target.firstElementChild.classList.toggle('span-visible')
      }
      secondNum = e.target.firstElementChild.textContent;
      if (firstNum === secondNum) {

      }

    } else if (firstNum === null) {
      if (e.target.classList.contains('flex-item-second')) {
        e.target.classList.toggle('flex-item-third', true)
        e.target.firstElementChild.classList.toggle('span-visible')
      }
      firstNum = e.target.firstElementChild.textContent;
    } else {
      if (e.target.classList.contains('flex-item-second')) {
        e.target.classList.toggle('flex-item-third', false)
        e.target.firstElementChild.classList.toggle('span-visible')
      }
      firstNum = null;
    }
  });

  startButton.addEventListener('click', function (e) {
    if (firstNum === null) {
      changeNum();
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

    let firstArr = randomArr();
    let secondArr = randomArr();

    let resultArr = [0, ...firstArr, ...secondArr];


    function pushNumbers(arr) {
      for (let i = 1; i < arr.length; i++) {
        let card = document.querySelector(`.flex-item-second:nth-child(${i}) span`);
        card.textContent = arr[i];
      }
    }
    pushNumbers(resultArr);
  }

  changeNum()
})();