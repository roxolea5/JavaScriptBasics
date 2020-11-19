function multiplyArray(firstArray){
    var newArray=[];

    for (var i=0; i<firstArray.length; i++){
        var value = firstArray[i] * 2;
        newArray.push(value);
    }
    return newArray;
}

input = [1, 3, 4, 7, 2, 1, 9, 0];
output = multiplyArray(input);
console.log(input);
console.log(output);