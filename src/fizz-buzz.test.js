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

const fizzBuzzArray = (number) => {
  const arr = [];

  for (let i = 1; i <= number; i++) {
    arr.push(fizzBuzz(i));
  }

  return arr;
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

describe('fizzBuzzArray', () => {
  it('Should return an array', () => {
    expect(fizzBuzzArray(3)).toBeInstanceOf(Array);
  });

  it('Should return an array with length equal to number', () => {
    const numberArg = 5;

    expect(fizzBuzzArray(numberArg)).toHaveLength(numberArg);
  });

  it('Should return array with expected elements', () => {
    const expectedArray = [1, 2, 'Fizz', 4, 'Buzz'];

    expect(fizzBuzzArray(5)).toEqual(expectedArray);
  });
});
