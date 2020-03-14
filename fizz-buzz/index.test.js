const FizzBuzz = require("./index");

describe("FizzBuzz", () => {
  const fizzbuzz = new FizzBuzz(15);

  it("should test the constructor of the module", () => {
    expect(fizzbuzz.count).toBe(15);
  });

  it("should return Fizz", () => {
    expect(fizzbuzz.getFizzBuzz(3)).toBe("Fizz");
  });

  it("should return Buzz", () => {
    expect(fizzbuzz.getFizzBuzz(5)).toBe("Buzz");
  });

  it("should return FizzBuzz", () => {
    expect(fizzbuzz.getFizzBuzz(15)).toBe("FizzBuzz");
  });

  it("should return a FizzBuzz of 15", () => {
    const expected = "1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11 Fizz 13 14 FizzBuzz ";
    expect(fizzbuzz.run()).toBe(expected);
  });
});
