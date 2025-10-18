let a = [5, 3, 8, 2, 1];
let min, temp;

for (let i = 0; i < a.length; i++) {
  min = i;
  for (let j = i + 1; j < a.length; j++) {
    if (a[j] < a[min]) {
      min = j;
    }
  }

  temp = a[i];
  a[i] = a[min];
  a[min] = temp;
}

console.log(a);
