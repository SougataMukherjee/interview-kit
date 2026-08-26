function calculateAge(birthDate) {
  const today = new Date();
  const birth = new Date(birthDate);

  let years = today.getFullYear() - birth.getFullYear();
  let months = today.getMonth() - birth.getMonth();
  let days = today.getDate() - birth.getDate();
  // If current day is smaller than birth day, borrow days from previous month; if current month is smaller than birth month, borrow 12 months from previous year.

  if (days < 0) {
    months--;
    days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  return `${years} Years, ${months} Months, ${days} Days`;
}

console.log(calculateAge("1995-11-11"))