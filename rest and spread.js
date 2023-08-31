// function filterOutOdds() {
//     var nums = Array.prototype.slice.call(arguments);
//     return nums.filter(function(num) {
//       return num % 2 === 0
//     });
//   }

  // refactor to use arrow funcs

  let filterOutOdds = (...arguments) => arguments.filter(nums => nums%2 ===0);

  let findMin = (...args) => 
    Math.min(...args)


    let mergeObj = (obj1,obj2) => ({...obj1,...obj2});

    let doubleAndReturnArgs = (arr, ...args) => [...arr, ...args.map(nums => nums *2)];



    /** remove a random element in the items array
and return a new array without that item. */

function removeRandom(items) {
  let randIndex = Math.floor(Math.random()*items.length);

  return [...items.slice(0,randIndex),...items.slice(randIndex + 1)];

}

/** Return a new array with every item in array1 and array2. */

function extend(array1, array2) {
  return [...array1,...array2];

}

/** Return a new object with all the keys and values
from obj and a new key/value pair */

function addKeyVal(obj, key, val) {
  let newObject = {...obj};
  newObject[key] = val;
  return newObject;

}


/** Return a new object with a key removed. */

function removeKey(obj, key) {

  let newObject = {...obj};
  delete newObject[key];
  return newObject;

}


/** Combine two objects and return a new object. */

function combine(obj1, obj2) {
  return {...obj1,...obj2};

}


/** Return a new object with a modified key and value. */

function update(obj, key, val) {

  let newObject = {...obj};
  newObject[key] = val;
  return newObject;

}