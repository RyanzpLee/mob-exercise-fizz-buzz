const fizzBuzz = (number) => {
  if (typeof number !== 'number') {
    throw new TypeError();
  }

  if (number % 3 === 0 && number % 5 === 0) {
    return 'FizzBuzz';
  } else if (number % 3 === 0) {
    return 'Fizz';
  } else if (number % 5 === 0) {
    return 'Buzz';
  } else {
    return number;
  }
};

describe('Fizz Buzz', () => {
  it('Should say Fizz if Divisible By Three', () => {
    expect(fizzBuzz(3)).toBe('Fizz');
  });

  it('Should say Buzz if divisible by Five', () => {
    expect(fizzBuzz(5)).toBe('Buzz');
  });

  it('Should say FizzBuzz if divisible by Three and Five', () => {
    expect(fizzBuzz(15)).toBe('FizzBuzz');
  });

  it('Should return the given number if not divisible by Three or Five', () => {
    expect(fizzBuzz(1)).toBe(1);
  });

  it('should throw a TypeError if argument is not a number', () => {
    expect(() => fizzBuzz('Mr Func')).toThrow(TypeError);
  });
});
