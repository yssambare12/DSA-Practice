// How do you find the missing number in a given integer array of 1 to 100? (solution)

var arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,15,16,17,18,19,20]

for(let i = 0; i < arr.length-1; i++){
    if(arr[i] + 1 == arr[i+1]){

    } else {
        console.log(arr[i] + 1)
    }
}

// o(n) complexity