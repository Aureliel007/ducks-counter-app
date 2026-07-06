let saveEl = document.getElementById('save-el');
let countEl = document.getElementById('count-el');
let incrementButton = document.getElementById('increment-btn');
let saveButton = document.getElementById('save-btn');
let clearButton = document.getElementById('clear-btn');

incrementButton.addEventListener('click', increment);
saveButton.addEventListener('click', save);
clearButton.addEventListener('click', resetCount);

let count = 0;
let previousValues = [];

function increment() {
    count += 1;
    countEl.textContent = count;
}

function save() {
    previousValues.push(count);
    let previousValuesStr =
        'Предыдущие значения: ' + previousValues.join(' - ');
    saveEl.textContent = previousValuesStr;
    countEl.textContent = 0;
    count = 0;
}
function resetCount() {
    previousValues = [];
    saveEl.textContent = 'Предыдущие значения: ';
    countEl.textContent = 0;
    count = 0;
}
