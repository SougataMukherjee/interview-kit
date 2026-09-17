function longestCommonSubsequence(text1, text2, i = 0, j = 0) {
  if (i === text1.length || j === text2.length) {
    return 0;
  }

  if (text1[i] === text2[j]) {
    return 1 + longestCommonSubsequence(text1, text2, i + 1, j + 1);
  }

  return Math.max(
    longestCommonSubsequence(text1, text2, i + 1, j),
    longestCommonSubsequence(text1, text2, i, j + 1)
  );
}
console.log(longestCommonSubsequence("abcde","ace"))//3
console.log(longestCommonSubsequence("abc","abc"))//3
console.log(longestCommonSubsequence("abc","def"))//0