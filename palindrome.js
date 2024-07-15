/*
Given a string, return true if the string is a palindrome or false if it is not.
Palindrome are strings that form the same word if it is reversed.
*/

function palindrome(str) {
  let reversedString = "";

  for (char of str) {
    reversedString = char + reversedString;
  }

  if (str !== reversedString) {
    return false;
  }

  return true;
}

console.log(palindrome("kayak"));
