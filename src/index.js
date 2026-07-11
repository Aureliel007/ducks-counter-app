let saveEl = document.getElementById('save-el');
let countEl = document.getElementById('count-el');
let incrementButton = document.getElementById('increment-btn');
let saveButton = document.getElementById('save-btn');
let resetButton = document.getElementById('reset-btn');

incrementButton.addEventListener('click', increment);
saveButton.addEventListener('click', save);
resetButton.addEventListener('click', resetCount);

let count = Number(localStorage.getItem('duckCount')) || 0;
countEl.textContent = count;

let previousValues = JSON.parse(localStorage.getItem('previousValues')) || [];
saveEl.textContent = previousValues.join(' - ');

function increment() {
    count++;
    countEl.textContent = count;

    localStorage.setItem('duckCount', count);
}

function save() {
    previousValues.push(count);

    localStorage.setItem('previousValues', JSON.stringify(previousValues));

    let previousValuesStr = previousValues.join(' - ');
    saveEl.textContent = previousValuesStr;
    countEl.textContent = 0;
    count = 0;
}
function resetCount() {
    previousValues = [];
    saveEl.textContent = '';
    countEl.textContent = 0;
    count = 0;
    localStorage.clear();
}
