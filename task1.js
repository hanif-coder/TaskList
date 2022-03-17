/* 
Task ## 1

Given a sentence with multiple lowercase words separated by spaces, write a Javascript code that finds the longest word in the sentence. If there are multiple words of the same length, choose one that has the highest number of vowels. Ignore any character in the sentence that is not a letter or a space. Find the most efficient way to achieve this.

Sample input:

“Smart people learn from everything and everyone, average people from their experience, stupid people already, have all the answers” (Socrates)

Sample output:


“experience”

Note: Longest words are “everything” and “experience”, but the second has the most vowels
*/

let sentence  = "Smart people learn from everything and everyone, average people from their experience stupid people already, have all the answers";
let arrayOfSentence = sentence.split(" ");
let finalArray = arrayOfSentence.map(getLongestLetter);
function getLongestLetter(letter){
  let vowels = /[aeiou]+/g;
  let word = /[\w+]+/g;
  // let word = /[^a-z0-9]/gi;
  let filterObject =  {letter:letter,length :  letter.length , isVowels: letter.match(vowels), isWord: isNaN(letter)}  ;
  return (filterObject.isWord && filterObject.letter.length > 1) ? filterObject : false;
}

//console.log(finalArray);

finalArray.sort(function(x, y) {
  if (x.length > y.length) {
    return -1;
  }
  if (x.length < y.length) {
    return 1;
  }
  return 0;
});

let finalResult = (finalArray.length) ? finalArray[0] : null;
let arrayLength = finalArray.length;
if(arrayLength > 0 && finalArray[1].isVowels.length > finalArray[0].isVowels.length){
  finalResult = finalArray[1];
}

console.log(finalResult);
console.log("longest word is :" + finalResult.letter);