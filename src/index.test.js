beforeEach(() => {
    document.body.innerHTML = `
    <h2 id="count-el">0</h2>
    <button id="increment-btn"></button>
    <button id="save-btn"></button>
    <button id="clear-btn"></button>
    <p id="save-el">Предыдущие значения: </p>
  `;
    jest.resetModules();
    require('./index');
});

const clickIncrement = () => document.getElementById('increment-btn').click();
const clickSave = () => document.getElementById('save-btn').click();
const clickClear = () => document.getElementById('clear-btn').click();
const getCount = () => document.getElementById('count-el').textContent;
const getSaves = () => document.getElementById('save-el').textContent;

describe('increment()', () => {
    test('счётчик увеличивается на 1', () => {
        clickIncrement();
        expect(getCount()).toBe('1');
    });

    test('счётчик увеличивается несколько раз', () => {
        clickIncrement();
        clickIncrement();
        clickIncrement();
        expect(getCount()).toBe('3');
    });
});

describe('save()', () => {
    test('после save счётчик сбрасывается в 0', () => {
        clickIncrement();
        clickIncrement();
        clickSave();
        expect(getCount()).toBe('0');
    });

    test('сохранённое значение появляется в строке', () => {
        clickIncrement();
        clickIncrement();
        clickSave();
        expect(getSaves()).toContain('2');
    });

    test('несколько сохранений разделяются через дефис', () => {
        clickIncrement();
        clickSave();
        clickIncrement();
        clickIncrement();
        clickSave();
        expect(getSaves()).toContain('1 - 2');
    });
});

describe('resetCount()', () => {
    test('счётчик сбрасывается в 0', () => {
        clickIncrement();
        clickIncrement();
        clickClear();
        expect(getCount()).toBe('0');
    });

    test('предыдущие значения очищаются', () => {
        clickIncrement();
        clickSave();
        clickClear();
        expect(getSaves()).toBe('Предыдущие значения: ');
    });
});
