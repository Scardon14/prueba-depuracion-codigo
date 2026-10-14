const calculator = require('./calculator');

test('adds 1 + 2 to equal 3', () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test('adds -4 + 8 to equal 4', () => {
  expect(calculator.add(-4, 8)).toBe(4);
});

test('subtract 5 - 4 to equal 1', () => {
  expect(calculator.subtract(5, 4)).toBe(1);
});

test('subtract -5 - -10 to equal 5', () => {
  expect(calculator.subtract(-5, -10)).toBe(5);
});

// Tarea1 divide
test('divide 10 / 2 to equal 5', () => {
  expect(calculator.divide(10, 2)).toBe(5);
});
test('divide -12 / 3 to equal -4', () => {
  expect(calculator.divide(-12, 3)).toBe(-4);
});

// Tarea1 multiply
test('multiply 4 * 3 to equal 12', () => {
  expect(calculator.multiply(4, 3)).toBe(12);
});
test('multiply 2.5 * 4 to equal 10', () => {
  expect(calculator.multiply(2.5, 4)).toBe(10);
});

// Tarea3 división por cero
test('divide by zero should throw an error', () => {
  expect(() => calculator.divide(10, 0))
  .toThrow('No se puede dividir por cero');
});