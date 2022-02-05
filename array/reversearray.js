// reverse the array ;


var arr = [2,5,6,8,9,7];

var out = [];
for (var i = arr.length-1 ; i >= 0; i--){
    out.push(arr[i])
}
console.log(out.join(" "));

// console.log(arr.reverse().join(" "));