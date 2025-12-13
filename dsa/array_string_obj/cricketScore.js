let ball = 0;
let score = 0;

function hit(run) {
  ball++;
  score += run;

  console.log(`Ball: ${ball}, Run: ${run}, Total: ${score}`);

  if (ball % 6 === 0) {
    console.log("Over completed");
  }
}


hit(1);
hit(4);
hit(6);
hit(2);
hit(0);
hit(1);