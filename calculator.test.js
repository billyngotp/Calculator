const calculator = require('./calculator')

describe('calculator', () => {
    test('test equals in calculator', () => {
        const subject = new calculator(5);
        expect(subject.equals()).toBeDefined();
    });

    test('test adding in calculator', () => {
        const subject = new calculator(10);
        expect(subject.add(5).add(10).equals()).toEqual(25);
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

    test('Test RPN command to calculate Polish Notation', () => {
        const subject = new calculator();
        expect(subject.rpn("5 3 + 6 - 2 *")).toEqual(4);
    });

    test('Test RPN command to calculate 1+2', () => {
        const subject = new calculator();
        expect(subject.rpn("1 2 +")).toEqual(3);
    });

    test('Test RPN command to evaluate 0', () => {
        const subject = new calculator();
        expect(subject.rpn()).toEqual(0);
    });

    test('Test RPN command to 1 2 + 7 - 2 *', () => {
        const subject = new calculator();
        expect(subject.rpn("1 2 + 7 - 2 *")).toEqual(-8);
    });
    
})