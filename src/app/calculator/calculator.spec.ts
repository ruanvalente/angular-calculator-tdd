class CalculatorMock {
  public valorSalvo: number;

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

  save(valorAtual) {
    this.valorSalvo = valorAtual;
  }

  load() {
    return this.valorSalvo;
  }

  clearSave() {
    this.valorSalvo = 0;
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

  // it('should fail', () => {
  //   expect(calculator.calculator(10, 20, '+')).toEqual(20);
  // });

  it('should return the result of two operation using save() and load()', () => {
    // Teste Operação Soma
    expect(calculator.calculator(10, 20, '+')).toEqual(30);

    //Teste Salvar Valor
    calculator.save(calculator.calculator(10, 20, '+'));
    expect(calculator.load()).toEqual(30);

    // Teste Operação Multiplicação com a variavel Salva
    expect(calculator.calculator(calculator.load(), 30, '+')).toEqual(60);
  });
});
