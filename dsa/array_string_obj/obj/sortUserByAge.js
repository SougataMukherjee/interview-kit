const users=[{id:1,age:20,name:'sam'}, 
    {id:2,age:15,name:'sou'}, 
    {id:3,age:30,name:'Rik'} ]
console.log(users.sort((a,b)=>b.age - a.age));
