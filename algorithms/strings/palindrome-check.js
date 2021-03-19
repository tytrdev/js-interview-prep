// Function that takes a non-empty string and returns a boolean
// respresenting whether the string is a palindrome or not.

function isPalindrome(string) {
  const len = string.length;
  const mid = Math.floor(len / 2);

  for (let i = 0; i < mid; i++) {
    if (string[i] !== string[len - i - 1]) {
      return false;
    }
  }

  return true;
}