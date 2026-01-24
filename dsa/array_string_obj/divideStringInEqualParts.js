function divideIntoKParts(s, k) {
  let n = s.length;
  if (n % k !== 0) return "Not possible";
  let size = n / k;
  let res = [];

  for (let i = 0; i < n; i += size) {
    res.push(s.slice(i, i + size));
  }

  return res;
}
console.log(divideIntoKParts('aaabbbccc',3));//[ 'aaa', 'bbb', 'ccc' ]