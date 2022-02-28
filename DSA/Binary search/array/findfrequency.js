// Given a vector of N positive integers and an integer X. The task is to find the frequency of X in vector.


var arr = [1,5,6,1,8,8,6,7,8,3,8]
var k = 8;
var out = 0;

for (var i = 0; i < arr.length; i++){
    if (arr[i] == k){
        out++
    }
}
console.log(out)