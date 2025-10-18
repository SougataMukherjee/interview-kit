//print all prime numbers between 1 to 100

for(let n=1;n<=100;n++){
    let temp=0;
    for(let i=2;i<=n-1;i++){
        if(n%i==0){
            temp+=1
        }
    }
    if(temp==0){
        console.log(n)
    }
}