// // negativelementend.js

// Move all negative elements to end 

var arr = [1, -1, 3, 2, -7, -5, 11, 6]
var pos = [];
var neg = [];

for (var i = 0; i < arr.length; i++){
    if (arr[i] >= 0){
        pos.push(arr[i]);
    }else {
        neg.push(arr[i]);
    }
}
console.log(pos+neg);