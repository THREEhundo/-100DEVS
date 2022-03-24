//---Easy
//create a function that subtracts two numbers and alerts the difference
const easy = (one, two) => alert(one - two);
//create a function that divides three numbers and console logs the quotient
const divide = (one, two, three) => console.log(one / two / three);
//create a function that multiplys three numbers and returns the product
const multiply = (one, two, three) => one * two * three;
//---Medium
//create a function that takes in three numbers. Add the first two numbers and return the remainder of dividing the sum of the first two numbers by the third number
const medium = (one, two, three) => (one + two) % three;
//---Hard
//create a function that takes in 4 numbers. Multiply the first two numbers. If the product is greater than 100 add the sum of the last two numbers and console log the value. If the product is less that 100, subtract the difference of the last two numbers and console log the value. If the product is 100, multiply the first three numbers together and alert the remainder of dividing the fourth number
const fourNums = (n1, n2, n3, n4) => {
  const product = n1 * n2;
  if (product > 100) console.log(n3 + n4);
  if (product < 100) console.log(n3 - n4);
  if (product === 100) {
    console.log(n1 * n2 * n3);
    alert((n1 * n2 * n3) / n4);
  }
};
