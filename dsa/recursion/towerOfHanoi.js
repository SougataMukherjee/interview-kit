function hanoi(n, from, to, aux) {
  if (n === 0) return;
  hanoi(n - 1, from, aux, to);
  console.log(`Move ${n} from ${from} → ${to}`);
  hanoi(n - 1, aux, to, from);
}

hanoi(3, "A", "C", "B");