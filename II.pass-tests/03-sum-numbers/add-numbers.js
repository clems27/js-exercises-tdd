function addAllnumbers(numbers) {
  const number = (accumulator, currentValue) => accumulator + currentValue;
  return numbers.reduce(number);
}
module.exports = addAllnumbers;