
var arr = [2,4,6,50,15,25]

    var out = arr[0];
    for (var i = 1; i <= arr.length; i++){
        if (arr[i] > out){
            out = arr[i]
        }
    }
    console.log(out)

