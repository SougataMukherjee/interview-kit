function reverseVowels(s) {
  let vowels = "aeiouAEIOU";
  let arr = s.split("");      // convert string to array
  let l = 0, r = arr.length - 1;

  while (l < r) {
    // move left pointer until vowel
    while (l < r && !vowels.includes(arr[l])) l++;
    // move right pointer until vowel
    while (l < r && !vowels.includes(arr[r])) r--;

    // swap vowels
    [arr[l], arr[r]] = [arr[r], arr[l]];

    l++;
    r--;
  }

  return arr.join("");
}
