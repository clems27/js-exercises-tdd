module.exports = function myFizzBuzz(numb) {
                        //This result variable used to store the final result
                        var result = "";
                        var i = 1;
                        while (i <= numb) {
                          result +=
                            (i % 3 === 0 &&
                              i % 5 === 0) ||
                            (hasThree(i) && hasFive(i))
                              ? "FizzBuzz" + ", "
                              : i % 3 === 0 || hasThree(i)
                              ? "Fizz" + ", "
                              : i % 5 === 0 || hasFive(i)
                              ? "Buzz" + ", "
                              : i + ", ";
                          i++; //incrementing the counter i
                        }

                        return result.slice(0, -2);
                      };

function hasThree(number) {
    var numbersArray = String(number).split("");
    return numbersArray.find(number => number === "3") === "3";
}

function hasFive(number) {
    var numbersArray = String(number).split("");
    return numbersArray.find(number => number === "5") === "5";
}
