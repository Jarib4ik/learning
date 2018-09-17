const numButtons = document.querySelector('.numButton');
const operButtons = document.querySelector('.operButton');

numButtons.addEventListener('click', function (e) {
    console.log(e.target.dataset.number)
});

operButtons.addEventListener('click', function (e) {
    console.log(e.target.dataset.operation)
});