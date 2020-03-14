class FizzBuzz {
  constructor(count) {
    this.count = count;
  }

  getFizzBuzz(value) {
    const isFizz = value % 3 === 0;
    const isBuzz = value % 5 === 0;
    if (isFizz && isBuzz) return "FizzBuzz";
    if (isFizz) return "Fizz";
    if (isBuzz) return "Buzz";
    return value;
  }

  run() {
    let result = "";
    for (let i = 1; i <= this.count; i++) {
      result += this.getFizzBuzz(i) + " ";
    }
    return result;
  }
}

module.exports = FizzBuzz;
