/*
                           []
          include  /                 \ exclude
                 [1]                   []
              /        \             /        \
          [1,2]        [1]         [2]          []
         /     \      /    \       /    \       /   \
   [1,2,3]  [1,2]  [1,3]  [1]   [2,3]   [2]   [3]   []

Leaf Nodes (Final Subsets):
power set = set of all subsets = 2^n
[1,2,3]
[1,2]
[1,3]
[1]
[2,3]
[2]
[3]
[]
*/

function printSubsets(arr, ans, i) {
    // base case
    if (i === arr.length) {
        console.log(ans);
        return;
    }

    // include arr[i]
    ans.push(arr[i]);
    printSubsets(arr, ans, i + 1);

    // exclude arr[i]
    ans.pop();
    //---------skips duplicates if ask------------------
    while (i + 1 < arr.length && arr[i] === arr[i + 1]) {
        i++;
    }
    printSubsets(arr, ans, i + 1);
}

printSubsets([1, 2, 3], [], 0);// [1,2,3],[1,2],[1,3],[1],[2,3],[2],[3],[]
printSubsets([1, 2, 2], [], 0);//[1,2,2],[1,2],[1],[2,2],[2],[]
printSubsets(["a","b","c"], [], 0);//[ 'a', 'b', 'c' ][ 'a', 'b' ][ 'a', 'c' ][ 'a' ][ 'b', 'c' ][ 'b' ][ 'c' ][]