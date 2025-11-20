function isStrong(pwd) {
  if (pwd.length < 8) return false;

  let hasUpper = false;
  let hasDigit = false;
  let hasSpecial = false;

  for (let ch of pwd) {
    switch (true) {
      case ch >= "A" && ch <= "Z":
        hasUpper = true;
        break;

      case ch >= "0" && ch <= "9":
        hasDigit = true;
        break;

      default:
        hasSpecial = true;
    }
  }

  return hasUpper && hasDigit && hasSpecial;
}

console.log(isStrong("Pass@123")); // true