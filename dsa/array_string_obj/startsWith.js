function startsWith(str, sub) {
  if (sub.length > str.length) return false;

  for (let i = 0; i < sub.length; i++) {
    if (str[i] !== sub[i]) {
      return false;
    }
  }
  return true;
}

console.log(startsWith("JavaScript", "Java")); // true
console.log(startsWith("Hello", "Hi"));        // false
