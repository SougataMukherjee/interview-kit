const subjects = [
  "Sougata Mukherjee",
  "Rupai",
  "Sam Muk",
  "a group of girls",
  "company CEO",
  "Bus driver in Bangalore"
];

const actions = [
  "cancels",
  "swimming with",
  "sleeps",
  "celebrates"
];
function rand(arr){
    let index=Math.floor(Math.random()*arr.length)
    return arr[index]
}
function fakeHeading(){
    let playAgain = true;

  while (playAgain) {
    let subject=rand(subjects)
    let action=rand(actions)
    const headline = `Breaking News: ${subject} ${action}!`;
    console.log("\n" + headline);
    const userInput = prompt("Do you want another headline? (yes/no)").trim().toLowerCase();
    if (userInput === "no" || userInput === "n") {
      playAgain = false;
    }
  }
    
}
fakeHeading()