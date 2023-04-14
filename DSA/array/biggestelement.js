// var arr = [1,1,1,2,3,4,3,4,5,4,6,7,8];
// var out = "";
// arr.sort();

// for (var i = 0; i < arr.length; i++) {
// if(arr[i] == arr[i+1]){
//     out = out + "";
// }else {
//     out = out + arr[i] + " ";:
// }

// }
// console.log(out);

// --------------------------------------------------------

var arr = [2,4,6,50,15,25]

    var out = arr[0];
    for (var i = 1; i <= arr.length; i++){
        if (arr[i] > out){
            out = arr[i]
        }
    }
    console.log(out)



