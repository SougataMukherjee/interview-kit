//find duplicate elements in array
const a=['apple', 'banana', 2, 'cherry', 'banana', 2, 7, 3 ];
for(let i=0;i<a.length;i++){
    for(let j=i+1;j<a.length;j++){
        if(a[i]==a[j]&&(i!=j)){
            console.log(a[j])
        }
    }
}
