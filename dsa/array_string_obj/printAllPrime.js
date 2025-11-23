//print all prime numbers between 1 to 100

for(let i=1;i<=100;i++){
    let j;
    for(j=2;j<=i;j++){
        if(i%j==0){
            break;
        }
    }
    if(i===j){
        console.log(i)
    }
}