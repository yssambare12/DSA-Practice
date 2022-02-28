function commonindex(arr1,arr2){
    var arr1 = [1,2,3,4,5]
    var arr2 = [10,11,3,14,15]
    var first = 0;
    var second = 0;
    var out = [];

    while (first < arr1.length && second < arr2.length){
        if (arr1[first] == arr2[second]){
            out.push(arr1)
            first++;
            second++;
        } else if (arr1[first] > arr2[second]){
            second++;
        } else {
            first++;
        }
    }
    return out;
}