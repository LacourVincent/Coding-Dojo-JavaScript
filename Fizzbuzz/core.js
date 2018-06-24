
class FizzBuzz {

  constructor(count){
    this.count = count;
  };

  doSomeThings(value){
    let isFizz = value % 3 === 0;
    let isBuzz = value % 5 === 0;
    return (isFizz && isBuzz) ? "FizzBuzz" :
      isFizz ? "Fizz" :
        isBuzz ? "Buzz" :
          value;
  };

  run(){
    let result = "";
    for(let i = 1 ; i <= this.count ;i++){
      result += this.doSomeThings(i) + " ";
    }
    return result;
  }
  
}

/**
const fizz = new FizzBuzz(100);
fizz.run();
*/

exports.FizzBuzz = FizzBuzz;
