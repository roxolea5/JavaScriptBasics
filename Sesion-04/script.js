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

//Second exercise
var car = {
    brand: 'Nissan',
    model: 'Versa',
    year: 2020
}

function keyValuePairs(car){
    var keys = Object.keys(car);
    var pairs = [];
    console.log(keys);

    for (var i =0; i < keys.length; i++){
        pairs.push([keys[i], car[keys[i]]]);
    }
    return pairs;

}

var result = keyValuePairs(car);
console.log(result);

//Reto 1

function calculateAverage(numbers) {
    var total = 0;
    for (var i=0; i<numbers.length; i++){
        total += numbers[i];
    }
    return total / numbers.length;
  }

var dataNumber = [10,15,14,31,50,66,73];
var average = calculateAverage(dataNumber);

console.log(average);

//Reto 2
function arrayToObject(array) {
    var obj = {};
  
    for(var i = 0; i < array.length; i++) {
      obj[array[i][0]] = array[i][1]
    }
  
    return obj;
  }

  var array1 = [["brand", "Nissan"],["model", "Versa"],["year", 2020]];
  var object1 = arrayToObject(array1);
  console.log(object1);


//Reto 3
function pluck(list, propertyName) {
    var values = [];
  
    for (var i = 0; i < list.length; i++) {
      values.push( list[i][propertyName] );
    }
  
    return values;
  }

var singers = [
    { name: 'Steven Tyler', band: 'Aerosmith', born: 1948 },
    { name: 'Karen Carpenter', band: 'The Carpenters', born: 1950 },
    { name: 'Kurt Cobain', band: 'Nirvana', born: 1967 },
    { name: 'Chris Cornell', band: 'Soundgarden', born: 1964 },
  ];

  console.log(pluck(singers, 'name'));
  console.log( pluck(singers, 'band') );
  console.log( pluck(singers, 'born') );