function groupBy(arr, key) {
    const output = {};

    arr.forEach((item) => {
        const group=item[key]
        if (!output[group]) {
            output[group] = [];
        }
        output[group].push(item);
    })
    return output
}
console.log(groupBy([
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 25 }
],'age'));