function capitalizeWords(sentence) {
    return sentence.split(' ')
    .filter(word=>word !=='')
    .map(word=>word[0].toUpperCase(1)+word.slice(1).toLowerCase())
    .join(' ')
}
console.log(capitalizeWords('hello world'));// Hello World
console.log(capitalizeWords("   multiple      space"));
console.log(capitalizeWords('WELCOME to the JUNGLE'))//WELCOME To The JUNGLE