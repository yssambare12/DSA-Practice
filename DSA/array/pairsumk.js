// // Count pairs with given sum 
// Given an array of N integers, and an integer K, find the number of pairs of elements in the array whose sum is equal to K.


var arr = [1,3,5,6,7,8,];
var k = 10;

// brute force approch 

// for (var i = 0; i <= arr.length; i++){
//     for (var j = 1; j <= arr.length; j++){
//         if (arr[i] + arr[j] == k){
//             console.log(i,j)
//         }
//     }
// }

// -----------------------------------------------------------------------------

// optimized approch 

var s = 0;
var e = arr.length-1;
var out = 0;
while (s < e){
    total = arr[s] + arr[e]
    if(total == k){
        out++
    }else if (total > k){
        e--
    }else{
        s++
    }
}