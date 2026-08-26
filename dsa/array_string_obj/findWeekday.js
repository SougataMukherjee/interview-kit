const findWeekday=date=>
    new Date(date).toLocaleDateString("en-US", {weekday:"long"});
console.log(findWeekday("1995-11-11"));//saturday