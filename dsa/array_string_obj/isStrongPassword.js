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

//way 2
export const checkPasswordStrength = (pwd) => {
  let score = 0;
  
  if (pwd.length >= 8) score++;
  if (/[A-Z]/.test(pwd)) score++;
  if (/[a-z]/.test(pwd)) score++;
  if (/[0-9]/.test(pwd)) score++;
  if (/[^A-Za-z0-9]/.test(pwd)) score++;

  if (pwd.length === 0) return "Weak Password";
  if (score <= 1) return "Level 1";
  if (score <= 3) return "Level 2";
  return "Level 3";
};