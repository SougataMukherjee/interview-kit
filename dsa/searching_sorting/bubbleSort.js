let a=[34,15,29]
let temp;
for(let i=0;i<a.length;i++){
    let flag=0;
    //adjacent element in every step calculate and reduce sorted element
    for(let j=0;j<a.length-1-i;j++){
        if(a[j]>a[j+1]){
            temp=a[i]
            a[j]=a[j+1]
            a[j+1]=temp;
            flag=1
        }
    }
    if(flag==0){
        break
    }
    for(let i=0;i<a.length;i++){
        console.log(a[i])
    }
}