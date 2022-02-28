// // duplicatearray.js
// Find duplicates in an array 

var arr = [1,2,3,4,5,2,3];
var n = arr.length;
var out = 0
for ( var i = 0; i<= n; i++){
    for (var j = i+1; j <= n; j++){
        if(arr[i] == arr[j]){
            out = arr[i]
        }
    }
}
console.log(out);