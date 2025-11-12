const action=["hello","hi","bye","Hey"]
const subject=["sam","mik","rik","sougata"]

function rand(arr){
    let index=Math.floor(Math.random()*arr.length)
    return arr[index];
}
function heading(){
    let first=rand(action);
    let second=rand(subject);
    let heading=`${first} - ${second}`;
    console.log(heading)
}
heading()