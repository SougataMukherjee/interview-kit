    //        ""
    //     /   |   \
    //    A    B    C
    //   / \  / \  / \
    //  AB AC BA BC CA CB
    //  |   |  |   |  |   |
    // ABC ACB BAC BCA CAB CBA
    
function permute(str, prefix = '') {
  if (!str.length) return console.log(prefix);
  for (let i = 0; i < str.length; i++)
    permute(str.slice(0, i) + str.slice(i + 1), prefix + str[i]);
}
permute("abc");