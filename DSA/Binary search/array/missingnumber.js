// Missing number in array 

var arr = [1,2,3,5,6,8,9]
var n = arr.length;
var i 
var total = 1;


for (var i = 2; i <= (n+1); i++){
    total += i
    total -= arr[i-2]
}

console.log(total)

