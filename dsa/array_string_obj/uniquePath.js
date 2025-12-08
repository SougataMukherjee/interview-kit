function paths(m,n){
  let dp=Array(n).fill(1);

  for(let row=1;row<m;row++)
    for(let col=1;col<n;col++)
      dp[col] = dp[col] + dp[col-1];

  return dp[n-1];
}

console.log(paths(3,7));//28
console.log(paths(3,2));//3