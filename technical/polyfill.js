
//Polyfill:

//Polyfills are pieces of code (often written in JavaScript) that provide modern functionality on older browsers
//polyfills are used to support newer JavaScript features such as promises, which are not available in all browsers
//we should create and store polyfill in utils folder
//map or forEach polyfill
Array.prototype.myMap = function(callback) {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i], i, this));////pushing currentValue, index, array
  }
  return result;
};

let arr = [1, 2, 3];
let doubled = arr.myMap(num => num * 2);
console.log(doubled);

//filter ployfill
Array.prototype.myFilter = function(callback) {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
        //if(true) push elements to new array
      result.push(this[i]);
    }
  }
  return result;
};

const arr = [1, 2, 3, 4, 5];
const even = arr.myFilter(num => num % 2 === 0);
console.log(even);

//polyfills for reduce

Array.prototype.myReduce = function(callback, initialValue) {
  let accumulator = initialValue;
  for (let i = 0; i < this.length; i++) {
    // if no initial value given, use first element
    if (accumulator === undefined) {
      accumulator = this[i];
    } else {
      accumulator = callback(accumulator, this[i], i, this);
    }
  }
  return accumulator;
};
const arr = [1, 2, 3, 4];

const sum = arr.myReduce((acc, curr) => acc + curr, 0);
console.log(sum);//10
//(VVI)flat()
Array.prototype.myFlat = function (depth = 1) {
  let result = [];

  this.forEach(item => {
    if (Array.isArray(item) && depth > 0) {
      result = result.concat(item.myFlat(depth - 1));
    } else {
      result.push(item);
    }
  });

  return result;
};


let arr = [1, [2, [3], 4]];
console.log(arr.myFlat(2)); // [1, 2, 3, 4]
//promiseAll
function myPromiseAll(promises) {
  return new Promise((resolve, reject) => {
    let results = [];
    let completed = 0;

    promises.forEach((p, i) => {
      Promise.resolve(p)
        .then((res) => {
          results[i] = res;
          completed++;
          if (completed === promises.length) {
            resolve(results);
          }
        })
        .catch(reject);
    });
  });
}

//for array length

Array.prototype.length = function () {
  return this.reduce(function (a, b) {
    return a + 1;
  }, 0);
};

//for every method
Array.prototype.every = function (callback) {
  if (!callback) {
    throw new TypeError("callback must be a function");
  }

  for (let i = 0; i < this.length; i++) {
    if (!callback.call(this, this[i])) {
      return false;
    }
  }

  return true;
};

//for find method
Array.prototype.find = function (callback) {
  if (!callback) {
    throw new TypeError("callback must be a function");
  }

  for (let i = 0; i < this.length; i++) {
    if (callback.call(this, this[i])) {
      return this[i];
    }
  }

  return undefined;
};

//polyfill for useState
function myUseState(initialValue) {
  let _val = initialValue; // holds state value

  function setState(newVal) {
    _val = newVal;
    console.log("State updated:", _val);
  }

  return [_val, setState];
}

const [count, setCount] = myUseState(0);
console.log(count); // 0
setCount(5);        // State updated: 5


//polyfill for useEffect
let effectDeps = [];
let effectIndex = 0;

function useEffect(callback, deps) {
  const currentIndex = effectIndex++;

  const prevDeps = effectDeps[currentIndex];
  const hasChanged =
    !prevDeps || !deps || deps.some((dep, i) => dep !== prevDeps[i]);

  if (hasChanged) {
    callback();
    effectDeps[currentIndex] = deps;
  }
}


