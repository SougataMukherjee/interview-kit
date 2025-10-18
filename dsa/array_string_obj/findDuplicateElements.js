//find duplicate elements in array
let a=[1,2,3,4,5,4];
for(let i=0;i<a.length;i++){
    for(let j=i+1;j<a.length;j++){
        if(a[i]==a[j]&&(i!=j)){
            console.log(a[j])
        }
    }
}
