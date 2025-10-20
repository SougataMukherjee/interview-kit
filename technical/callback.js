function area(x) {
  return function (y) {
    return x * y;
  };
}
console.log(area(4)(5)); //20
let mul = area(4);
mul(5);

function cal(op) {
  return function (y) {
    return function (z) {
      if (op === "mul") return y * z;
      else return y + z;
    };
  };
}
alert(cal("mul")(3)(4)); //24



(function ask(question = "prompt", yes = alert, no = alert) {
  if (confirm(question)) yes("You agreed.");
  //if we click yes in confirm message then condition will execute true and yes will execute else no()
  else no("You canceled the execution.");
})();
//1)
function sum(a, b) {
  //(6,5)
  console.log(a + b);
}
function operation(val1, val2, callback) {
  //(6,5,sum())
  callback(val1, val2);
}
operation(6, 5, sum);