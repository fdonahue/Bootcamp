new Set([1,1,2,2,3,4])

// returns [1,2,3,4]


[...new Set("referee")].join("")

// returns ["ref"]

let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false);

// 0: {Array(3) => true}
// 1: {Array(3) => false}


hasDuplicate([1,3,2,1]) // true
hasDuplicate([1,5,-1,4]) // false

const hasDuplicate = arr => 
new Set(arr).size !== arr.length

// if new array set is same lenght as original return false, elsereturn true.

vowelCount('awesome') // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
vowelCount('Colt') // Map { 'o' => 1 }

function isVowel(char){
    // if char is in string aeiou, return true or false
    return "aeiou".includes(char);
  }
  
  function vowelCount(str){
    //create empty map array
    const vowelMap = new Map();
    //iterate over each char of string
    for(let char of str){
        // set lowercase characters to a value
      let lowerCaseChar = char.toLowerCase()
      // if letter is a vowel is true,
      if(isVowel(lowerCaseChar)){
        //add letter key and its value to map, or add 1 to existing value
        if(vowelMap.has(lowerCaseChar)){
          vowelMap.set(lowerCaseChar, vowelMap.get(lowerCaseChar) + 1);
        } else {
          vowelMap.set(lowerCaseChar, 1);
        }
      }
    }
    return vowelMap;
  }