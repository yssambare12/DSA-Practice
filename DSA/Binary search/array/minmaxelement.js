var arr = [2,4,6,50,15,25]

var min = arr[0];
var max = arr[0];

for (var i = 1; i < arr.length; i++){
    if (arr[i] > min){
        min = arr[i];
    }
}

for (var i = 1; i < arr.length; i++){
    if (arr[i] < max){
        max = arr[i];
    }
}

console.log("Maximum Element is ", min)
console.log("Minimum Element is ", max)