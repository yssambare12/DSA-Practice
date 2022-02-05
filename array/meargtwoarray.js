// mearge 2 sorted array an output should be a sorted 

var arr1 = [1,3,4,6,8,9];
var arr2 = [2,5,7]

// brout force approch 

var arr3 = [];

for (var i = 0; i < arr1.length; i++){
    if(arr1[i] < arr2[i]){
        arr3.push(arr1[i])
    }
}

console.log(arr3)