/*
                           []
                    /                 \
                 [1]                   []
              /        \             /        \
          [1,2]        [1]         [2]          []
         /     \      /    \       /    \       /   \
   [1,2,3]  [1,2]  [1,3]  [1]   [2,3]   [2]   [3]   []

Leaf Nodes (Final Subsets):
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
    //skips duplicates
    while (i + 1 < arr.length && arr[i] === arr[i + 1]) {
        i++;
    }
    printSubsets(arr, ans, i + 1);
}

printSubsets([1, 2, 3], [], 0);// [1,2,3],[1,2],[1,3],[1],[2,3],[2],[3],[]
printSubsets([1, 2, 2], [], 0);//[1,2,2],[1,2],[1],[2,2],[2],[]