function reverse(str) {
  let splitString = str.split("");
  let reverseString = "";

  for (char of splitString) {
    reverseString = char + reverseString;
  }

  return reverseString;
}

console.log(reverse("hello"));
