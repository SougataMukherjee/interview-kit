let a = [5, 4, 7, 9, 2];
a.sort((x, y) => x - y); 

let item = 4;
let l = 0;
let r = a.length - 1;
let found = false;

while (l <= r) {
  let m = Math.floor((l + r) / 2);

  if (a[m] === item) {
    console.log('Element found at index ' + m);
    found = true;
    break;
  } else if (a[m] < item) {
    l = m + 1;
  } else {
    r = m - 1;
  }
}

if (!found) {
  console.log('Item not found');
}