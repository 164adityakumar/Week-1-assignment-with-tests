/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/
function sort(str)
{
  //sort the string
  return str.split('').sort().join('');
}

function isAnagram(str1, str2) {
 str1=sort(str1.toLowerCase());
 str2=sort(str2.toLowerCase());
 if(str1 === str2){
   return true;
 }
  else{
    return false;
  }
}

// console.log(isAnagram('spar', 'rasp')); // true
module.exports = isAnagram;
