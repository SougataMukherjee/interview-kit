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

const places = [
  "at home",
  "at office",
  "on the roof",
  "at the airport",
  "at the bus stop"
];


function randomChoice(arr) {
  const index = Math.floor(Math.random() * arr.length);
  return arr[index];
}

function fakeHeading() {
  let playAgain = true;

  while (playAgain) {
    const subject = randomChoice(subjects);
    const action = randomChoice(actions);
    const place = randomChoice(places);

    const headline = `Breaking News: ${subject} ${action} ${place}!`;
    console.log("\n" + headline);

    const userInput = prompt("Do you want another headline? (yes/no)").trim().toLowerCase();
    if (userInput === "no" || userInput === "n") {
      playAgain = false;
    }
  }

  console.log("\nThanks !");
}

fakeHeading();
