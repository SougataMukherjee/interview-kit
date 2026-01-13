function isStrong(pwd) {
  if (pwd.length < 4) return false;

  let hasUpper = false;
  let hasLower = false;
  let hasDigit = false;
  let hasSpecial = false;

  for (let ch of pwd) {
      if( ch >= "A" && ch <= "Z"){
        hasUpper = true;
      }else if(ch >= "a" && ch <= "z"){
        hasLower = true;
      }else if(ch >= "0" && ch <= "9"){
        hasDigit = true;  
      }else{
        hasSpecial = true;
      }

  }

  return hasUpper && hasLower && hasDigit && hasSpecial;
}

console.log(isStrong("Pass@123")); // true
console.log(isStrong("password!1"));// false