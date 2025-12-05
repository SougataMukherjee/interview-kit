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