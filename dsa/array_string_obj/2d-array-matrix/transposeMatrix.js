function transpose(mat,n){
    for(let i=0;i<n;i++){
        for(let j=0;j<=i;j++){
            [mat[i][j], mat[j][i]] = [mat[j][i], mat[i][j]];
        }
    }
    return mat;
}
const arr=[[1, 1, 1, 1],[2, 2, 2, 2],[3, 3, 3, 3],[4, 4, 4, 4]];
const n=arr.length;
                    
console.log(transpose(arr,n));//[ [ 1, 2, 3, 4 ], [ 1, 2, 3, 4 ], [ 1, 2, 3, 4 ], [ 1, 2, 3, 4 ] ]