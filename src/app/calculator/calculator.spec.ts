class CalculatorMock {
  calculator(number1: number, number2: number, operator: string) {
    switch (operator) {
      case '+':
        return number1 + number2;
      case '-':
        return number1 - number2;
      case '*':
        return number1 * number2;
      case '/':
        return number1 / number2;
      default:
        return 'Operador não conhecido';
    }
  }
}

describe('CalculatorMock', () => {
  let calculator: CalculatorMock;
  beforeEach(() => {
    calculator = new CalculatorMock();
  });

  it('should instanced', () => {
    expect(calculator).toBeTruthy();
  });

  it('should return the sum between 2 + 2 = 4', () => {
    const number1 = 2;
    const number2 = 2;

    expect(calculator.calculator(number1, number2, '+')).toEqual(4);
  });

  it('should return the subtraction  between 10 - 2 = 8', () => {
    const number1 = 10;
    const number2 = 2;

    expect(calculator.calculator(number1, number2, '-')).toEqual(8);
  });

  it('should return the multiplication between 5 * 5 = 25', () => {
    const number1 = 5;
    const number2 = 5;

    expect(calculator.calculator(number1, number2, '*')).toEqual(25);
  });

  it('should return the division between 10 / 2 = 5', () => {
    const number1 = 10;
    const number2 = 2;

    expect(calculator.calculator(number1, number2, '/')).toEqual(5);
  });

  it('should fail when the operator is not valid when performing the sum operation between 10 + 10', () => {
    const number1 = 10;
    const number2 = 10;

    expect(calculator.calculator(number1, number2, 'lala')).toEqual(
      'Operador não conhecido'
    );
  });
});
