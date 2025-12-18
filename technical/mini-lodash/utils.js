
export function debounce(callback, delay = 500) {
    let timer;
  
    return function (...args) {
      clearTimeout(timer);
  
      timer = setTimeout(() => {
        callback(...args);
      }, delay);
    };
  }
  
  export function throttle(callback, delay = 500) {
    let lastTime = 0;
  
    return function (...args) {
      const now = Date.now();
  
      if (now - lastTime >= delay) {
        lastTime = now;
        callback(...args);
      }
    };
  }
  export function memo(fn) {
    const cache = {};
  
    return function (arg) {
      if (cache[arg]) {
        return cache[arg];
      }
  
      const result = fn(arg);
      cache[arg] = result;
      return result;
    };
  }
  export function* fetchDataGenerator(url) {
    try {

      const response = yield fetch(url);
      const data = yield response.json();
  
      return data;
    } catch (error) {
      throw error;
    }
  }
  
 
  export function myMap(arr, callback) {
    let result = [];
  
    for (let i = 0; i < arr.length; i++) {
      result.push(callback(arr[i], i, arr));
    }
  
    return result;
  }
  export function myFilter(arr, callback) {
    let result = [];
  
    for (let i = 0; i < arr.length; i++) {
      if (callback(arr[i], i, arr)) {
        result.push(arr[i]);
      }
    }
  
    return result;
  }
       