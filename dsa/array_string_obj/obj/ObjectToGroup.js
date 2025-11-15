const users = [
  {name: 'n1', date: '01-02-2025', time: '11-AM', deposit: '100' },
  {name: 'n2', date: '01-02-2025', time: '12-AM', deposit: '150' },
  {name: 'n1', date: '02-02-2025', time: '10-AM', deposit: '200' },
  {name: 'n2', date: '02-02-2025', time: '11-AM', deposit: '180' }
];
const output = {};
users.forEach(item => {
  if (!output[item.date] || output[item.date].deposit < item.deposit) {
    output[item.date] = { ...item, max: item.name };
  }
});

const result = Object.values(output);
console.log(result); 

// [
//   { name: 'n2', date: '01-02-2025', time: '12-AM',  deposit: '150', max: 'n2' },
//   { name: 'n1',  date: '02-02-2025', time: '10-AM',  deposit: '200', max: 'n1'  }
// ]