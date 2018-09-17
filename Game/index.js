(function () {
  const buttons = document.querySelector('.flex-container-second');
  let firstNum = null;
  let secondNum = null;

  buttons.addEventListener('click', function (e) {

    if (!e.target.classList.contains('flex-item-second')) {
      return;
    }
    if (secondNum) {
      return;
    }
    if (!firstNum) {
      firstNum = e.target;
      e.target.classList.toggle('flex-item-third', true);
      e.target.firstElementChild.classList.toggle('span-visible', true);
    } else {
      secondNum = e.target;
      if (firstNum.firstElementChild !== secondNum.firstElementChild && firstNum.firstElementChild.textContent === secondNum.firstElementChild.textContent) {
        e.target.classList.toggle('flex-item-third', true);
        e.target.firstElementChild.classList.toggle('span-visible', true);
        function deleteCard() {
          firstNum.firstElementChild.parentNode.parentNode.removeChild(firstNum.firstElementChild.parentNode);
          secondNum.firstElementChild.parentNode.parentNode.removeChild(secondNum.firstElementChild.parentNode);
          firstNum = null;
          secondNum = null;
        }
        setTimeout(deleteCard, 1000);
      } else {
        e.target.classList.toggle('flex-item-third', true);
        e.target.firstElementChild.classList.toggle('span-visible', true);

        function closeCard() {
          firstNum.classList.toggle('flex-item-third', false);
          firstNum.firstElementChild.classList.toggle('span-visible', false);
          secondNum.classList.toggle('flex-item-third', false);
          secondNum.firstElementChild.classList.toggle('span-visible', false);
          firstNum = null;
          secondNum = null;
        }
        setTimeout(closeCard, 1000);
      }
    }

  });

  const changeNum = document.querySelector('.button');

  changeNum.addEventListener('click', function (e) {
    if (firstNum === null) {
      generate();
    }
  });

  const startButton = document.querySelector('.button-container .button:nth-child(2)')

  startButton.addEventListener('click', function(e) {
    location.href = 'index.html';
  });

  function generate() {

    function randomInteger(min, max) {
      var rand = min + Math.random() * (max + 1 - min);
      rand = Math.floor(rand);
      return rand;
    }

    function randomArr() {
      const elementSum = document.querySelectorAll('.span-nane').length;
      let maxNum = elementSum / 2;
      let arr = [];

      for (let i = 0; arr.length < maxNum; i++) {
        rand = randomInteger(1, maxNum);
        if (arr.indexOf(rand) < 0) {
          arr.push(rand);
        }
      }
      return arr;
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

  generate();
})();