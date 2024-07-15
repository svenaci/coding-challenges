function reverse(str) {
  let reverseString = "";

  for (char of str) {
    reverseString = char + reverseString;
  }

  return reverseString;
}

console.log(reverse("hello"));
