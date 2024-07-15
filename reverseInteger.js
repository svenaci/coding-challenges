function reverseInteger(n) {
  let splitInteger = n.toString().split("");
  let reversedInteger = "";

  for (char of splitInteger) {
    reversedInteger = char + reversedInteger;
  }

  return parseInt(reversedInteger) * Math.sign(n);
}

console.log(reverseInteger(-15));
