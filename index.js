function isPalindrome(word) {
  const cleanedWord = word.replace(/\s/g, '').toLowerCase();

  let left = 0;
  let right = cleanedWord.length - 1;

  while (left < right) {
    if (cleanedWord[left] !== cleanedWord[right]) {
      return false; 
    }
    left++;
    right--;
  }

  return true; 
}
if (require.main === module) {
  
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
  console.log("Expecting: true");
  console.log("=>", isPalindrome("A man a plan a canal Panama"));
  console.log("Expecting: false");
  console.log("=>", isPalindrome("Was it a car or a cat I saw?"));
}

module.exports = isPalindrome;
