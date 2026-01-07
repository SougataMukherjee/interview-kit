
// ========================
// FIRST PASS
// ========================

// [ 7 | 6 | 4 | 3 ]
//   ^---^  swap (7 > 6)

// [ 6 | 7 | 4 | 3 ]
//       ^---^  swap (7 > 4)

// [ 6 | 4 | 7 | 3 ]
//           ^---^  swap (7 > 3)

// [ 6 | 4 | 3 | 7 ]   ← 7 fixed at end


// ========================
// SECOND PASS
// ========================

// [ 6 | 4 | 3 | 7 ]
//   ^---^  swap (6 > 4)

// [ 4 | 6 | 3 | 7 ]
//       ^---^  swap (6 > 3)

// [ 4 | 3 | 6 | 7 ]   ← 6 fixed


// ========================
// THIRD PASS
// ========================

// [ 4 | 3 | 6 | 7 ]
//   ^---^  swap (4 > 3)

// [ 3 | 4 | 6 | 7 ]   ← sorted


// ========================
// FINAL RESULT
// ========================

// [ 3 | 4 | 6 | 7 ]

let a=[7,6,4,3]
let temp;
for(let i=0;i<a.length;i++){
    let flag=0;
    //adjacent element in every step calculate and reduce sorted element
    for(let j=0;j<a.length-1-i;j++){
        if(a[j]>a[j+1]){
            temp=a[i]
            a[j]=a[j+1]
            a[j+1]=temp;
            flag=1
        }
    }
    if(flag==0){
        break
    }
    for(let i=0;i<a.length;i++){
        console.log(a[i])
    }
}