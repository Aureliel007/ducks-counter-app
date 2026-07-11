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

let quackTimer;

function showQuack() {
    clearTimeout(quackTimer);

    incrementButton.textContent = '🦆 Quack!';

    quackTimer = setTimeout(() => {
        incrementButton.textContent = 'INCREMENT';
    }, 500);
}

function increment() {
    count++;
    countEl.textContent = count;

    localStorage.setItem('duckCount', count);

    if (count % 5 === 0) {
        showQuack();
    }
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
