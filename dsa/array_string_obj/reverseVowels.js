function reverseVowels(str) {
    //convert string to array
    const arr=Array.from(str);
    function isVowel(ch){
        return (ch==='A'||ch==='E'||ch==='I'||ch==='O'||ch==='U'||ch==='a'||ch==='e'||ch==='i'||ch==='o'||ch==='u')
    }
    let i=0;
    let j=arr.length-1;
    while(i<j){
        const leftIsVowel=isVowel(arr[i])
        const rightIsVowel=isVowel(arr[j]);
        //if left index id not vowel increment index
        if(!leftIsVowel){
            i++
        }else if(!rightIsVowel){
            //if right index id not vowel increment index
            j--
        }else{
            //if both index match with vowel then swap
            const tmp=arr[i]
            arr[i]=arr[j]
            arr[j]=tmp;
            i++;
            j--;
        }
    }
    return arr.join('')
}
console.log(reverseVowels('hello'))//holle
console.log(reverseVowels('aeiouAEIOU'))//UOIEAuoiea