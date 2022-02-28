function searching(n, k, arr){
    var a = 0;
    var b = arr.length-1;
    arr = arr.sort((a,b)=>a-b)
    while(a<=b){
        var mid = a+(Math.floor((b-a)/2))
        if (arr[mid] == k){
            return true
        } else if (arr[mid]>k){
            b = mid-1;
        } else if (arr[mid]<k){
            a = mid+1;
        }
    }
    // binary search 
    return false;
}



    function runProgram(input) {
        input = input.trim().split("\n")
        var [n, k] = input[0].trim().split(" ").map(Number);
        var arr = input[1].trim().split(" ").map(Number)
        if(searching(n, k, arr)){
            console.log(1)
        } else {
            console.log(-1)
        }
    }
    

if (process.env.USERNAME === "Admin") {
    runProgram(input);
} else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function(input) {
        read += input;
    });
    process.stdin.on("end", function() {
        read = read.replace(/\n$/, "");
        read = read.replace(/\n$/, "");
        runProgram(read);
    });
    process.on("SIGINT", function() {
        read = read.replace(/\n$/, "");
        runProgram(read);
        process.exit(0);
    });
}
   