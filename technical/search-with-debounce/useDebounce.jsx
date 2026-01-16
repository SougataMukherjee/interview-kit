export function debounce(fn, delay = 500) {
    let timer;
  
    return function (...args) {
      clearTimeout(timer);
      timer = setTimeout(() => {
        fn(...args);
      }, delay);
    };
  }
  