const calculator = require('./calculator')

test('test equals in calculator', () => {
    const subject = new calculator(5);
    expect(subject.equals()).toBeDefined();
});

test('test adding in calculator', () => {
    const subject = new calculator(5);
    expect(subject.add(5).add(10).equals()).toEqual(20);
});

test('test subtraction in calculator', () => {
    const subject = new calculator(5);
    expect(subject.subtract(5).equals()).toEqual(0);
});

test('test multiplication in calculator', () => {
    const subject = new calculator(5);
    expect(subject.multiply(5).equals()).toEqual(25);
});
test('test division in calculator', () => {
    const subject = new calculator(5);
    expect(subject.divide(5).equals()).toEqual(1);
});

test('test clearing in calculator', () => {
    const subject = new calculator(5);
    expect(subject.clear().multiply(10).equals()).toEqual(0);
});
