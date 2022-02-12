// You are given a string s. You need to reverse the string..

var s = "Abcdefg";
var out = []
for (var i = s.length-1; i >= 0; i--){
    out.push(s[i])
}

console.log(out.join(" "))

// second way

console.log(s.split('').reverse().join(''))
