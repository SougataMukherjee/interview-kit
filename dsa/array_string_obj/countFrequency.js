/*
DRY RUN

Initial state:
arr = ["a","b","a","c","b","a"]
out = {}

Iteration 1:
x = "a"
out["a"] does NOT exist
→ out["a"] = 1
out = { a: 1 }

Iteration 2:
x = "b"
out["b"] does NOT exist
→ out["b"] = 1
out = { a: 1, b: 1 }

Iteration 3:
x = "a"
out["a"] EXISTS (value = 1)
→ out["a"] = 1 + 1 = 2
out = { a: 2, b: 1 }

Iteration 4:
x = "c"
out["c"] does NOT exist
→ out["c"] = 1
out = { a: 2, b: 1, c: 1 }

Iteration 5:
x = "b"
out["b"] EXISTS (value = 1)
→ out["b"] = 1 + 1 = 2
out = { a: 2, b: 2, c: 1 }

Iteration 6:
x = "a"
out["a"] EXISTS (value = 2)
→ out["a"] = 2 + 1 = 3
out = { a: 3, b: 2, c: 1 }

Final Output:
{ a: 3, b: 2, c: 1 }
*/
const arr = ["a","b","a","c","b","a"];
const out = {};

arr.forEach(x => {
    if(out[x]){
        out[x]+=1
    }else{
        out[x]=1
    }
});

console.log(out); // {a:3, b:2, c:1}

// if ask count word based on occurrence of str="hi hello hi bye hello hi"
// so using str.split(" ").forEach(...same)
