//First non-repeating character
const str = "aabbcde";
for (const ch of str) {
	if (str.indexOf(ch) === str.lastIndexOf(ch)){
	    console.log(ch); 
	    break;
	}
}
// "c"