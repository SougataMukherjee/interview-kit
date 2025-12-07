//find duplicate elements in array
const a=['apple', 'banana', 2, 'cherry', 'banana', 2, 7, 3 ];
for(let i=0;i<a.length;i++){
    for(let j=i+1;j<a.length;j++){
        if(a[i]==a[j]&&(i!=j)){
            console.log(a[j])
        }
    }
}

//way 2
// let duplicates = a.filter((item, index) => a.indexOf(item) !== index);
// console.log(duplicates);

// way 3
// let unique = [];
// let duplicates = [];

// a.forEach(item => {
//   if (unique.indexOf(item) === -1) {
//     unique.push(item);
//   } else {
//     duplicates.push(item);
//   }
// });

// console.log("Unique:", unique);
// console.log("Duplicates:", duplicates);

