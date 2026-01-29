//logic : "eat": ["eat","tea"], "tan":["tan","nat"]
/*-----------------------------------
DRY RUN (Step by Step)
-----------------------------------

Initial state:
strings = ["eat", "tea", "tan", "nat"]
obj = {}

-----------------------------------
Iteration 1:
str = "eat"

sort = "eat"
"eat".split("")  -> ["e","a","t"]
.sort()          -> ["a","e","t"]
.join("")        -> "aet"

obj["aet"] does not exist
→ create empty array

obj = {
  "aet": []
}

Push "eat" into obj["aet"]

obj = {
  "aet": ["eat"]
}

-----------------------------------
Iteration 2:
str = "tea"

sort = "aet"
"tea" → ["t","e","a"] → ["a","e","t"] → "aet"

obj["aet"] already exists

Push "tea" into obj["aet"]

obj = {
  "aet": ["eat", "tea"]
}

-----------------------------------
Iteration 3:
str = "tan"

sort = "ant"
"tan" → ["t","a","n"] → ["a","n","t"] → "ant"

obj["ant"] does not exist
→ create empty array

obj = {
  "aet": ["eat", "tea"],
  "ant": []
}

Push "tan" into obj["ant"]

obj = {
  "aet": ["eat", "tea"],
  "ant": ["tan"]
}

-----------------------------------
Iteration 4:
str = "nat"

sort = "ant"
"nat" → ["n","a","t"] → ["a","n","t"] → "ant"

obj["ant"] already exists

Push "nat" into obj["ant"]

obj = {
  "aet": ["eat", "tea"],
  "ant": ["tan", "nat"]
}

-----------------------------------
Final Step:
Object.values(obj)

Result:
[
  ["eat", "tea"],
  ["tan", "nat"]
]

-----------------------------------
Output printed:
[ [ 'eat', 'tea' ], [ 'tan', 'nat' ] ]
-----------------------------------
*/

function groupAnagrams(strings){
    const obj={};
    for(let str of strings){
        const sort=str.split("").sort().join("");
        if(!obj[sort]){
            obj[sort]=[]
        }
        obj[sort].push(str);
    }
    return Object.values(obj)
}
console.log(groupAnagrams(["eat","tea","tan","nat"])); //[ [ 'eat', 'tea' ], [ 'tan', 'nat' ] ]