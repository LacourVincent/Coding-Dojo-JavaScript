const {FizzBuzz} = require("./core");
const assert = require('assert');

describe("Test of the FizzBuzz Module", () =>  {

  const fizz = new FizzBuzz(15);

  it("should test the constructor of the module", () => {
    assert.equal(fizz.count,15);
  });

  it("should test the run method of the module", () => {
    let expected = "1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11 Fizz 13 14 FizzBuzz "
    assert.equal(fizz.run(),expected);
  });

  it("should show how to test doSomeThings method", () => {
    assert.equal( fizz.doSomeThings(1) , 1 );
  });

  it("should return fizz with 3 in input", () => {
    assert.equal( fizz.doSomeThings(3) , "Fizz" );
  });

  it("should return fizz with 6 in input", () => {
    assert.equal( fizz.doSomeThings(6) , "Fizz" );
  });

  it("should return fizz with 9 in input", () => {
    assert.equal( fizz.doSomeThings(9) , "Fizz" );
  });

  it("should return buzz with 5 in input", () => {
    assert.equal( fizz.doSomeThings(5) , "Buzz" );
  });

  it("should return buzz with 10 in input", () => {
    assert.equal( fizz.doSomeThings(10) , "Buzz" );
  });

  it("should return buzz with 20 in input", () => {
    assert.equal( fizz.doSomeThings(20) , "Buzz" );
  });

  it("should return fizzbuzz with 15 in input", () => {
    assert.equal( fizz.doSomeThings(15) , "FizzBuzz" );
  });

  it("should return fizzbuzz with 30 in input", () => {
    assert.equal( fizz.doSomeThings(30) , "FizzBuzz" );
  });

});
