// Given a random set of numbers, Print them in sorted order.

var arr = [2,5,3,9,7,12,13]

var minInd

for (var i = 0; i < arr.length; i++){
    var minInd = i;
    for (var j = i + 1; j < arr.length; j++){
        if (arr[j] < arr[minInd]){
            minInd = j;
            [minInd, i] = [minInd, i]
        }
    }
}

console.log(arr)



// Incomplete // Incomplete // Incomplete // Incomplete // Incomplete // Incomplete // Incomplete // Incomplete // Incomplete 