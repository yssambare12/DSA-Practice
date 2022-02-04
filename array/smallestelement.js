// smallestelement.js

// simple approch 

var arr = [65,53,99,15,36,75,69]

var out = arr[0];

for (var i = 1; i < arr.length; i++){
    if (arr[i] < out){
        out = arr[i]
    }
}
console.log(out);

// Tc O(n)
// Sc O(1)

