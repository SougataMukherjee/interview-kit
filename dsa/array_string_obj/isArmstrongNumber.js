let n=153,r,sum=0,temp;
temp=n;
while(temp>0){
    r=temp%10;
    sum=sum+r*r*r;
    temp=Math.floor(temp/10);
}
if(n==sum){
    console.log(n,' is armstrong number')
}else{
    console.log(n,' is not armstrong number')
}