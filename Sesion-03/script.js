function calculateAge(birthYear){
    var age = 2020 - birthYear;
    return age; 
}

function yearsUntilRetirement(year, name){
    var age = calculateAge(year);
    var retirement = 65 - age;
    return name + ' retires in '+retirement+ ' years.';

}

var whatDoYouDo = function (job, name){
    switch(job){
        case 'developer':
            return name + ' develops cool apps.';
        case 'designer':
            return name + ' designs awesome websites.';
        default:
            return name + ' does something else.'
    }

}

function logName() {
    var name = "John Doe";
    console.log(name);
  }
  
  logName();

  (function() {
    var name = "John Doe";
    console.log(name);
  })();

  (function(lastName) {
    var firstName = "John";
    console.log(firstName + ' ' + lastName);
  })('Doe');

var ageJohn = calculateAge(1995);


console.log(ageJohn);
console.log(yearsUntilRetirement(1995, 'John Doe'));
console.log(whatDoYouDo('developer', 'Diego Mendoza'));
console.log(whatDoYouDo('designer', 'Aura Leyva'));
console.log(whatDoYouDo('qa', 'Roxana Olea'));

function power(base, exponent) {
    console.log('Reto 1');
    var result = 1;
  
    for(var i = 0; i < exponent; i++) {
      result *= base; // Same as: result = result * base;
    }
  
    return result;
  }

pot = power(3,3);
console.log(pot);


function getLargerInt(num1, num2) {
    console.log('Reto 2')
    if(num1 > num2){
        return num1;
    }else{
        return num2;
    }
  }

largest = getLargerInt(14,16);
console.log(largest);

function fibonacci(num) {
    if (num <= 1) return 1;
  
    return fibonacci(num - 1) + fibonacci(num - 2);
  }
  
  function fibonacciSequence(limit) {
      console.log('Reto 3');
    if(limit < 1) return console.log('Limit must be greater than 0');
  
    for(var i = 0; i < limit; i++ ) {
      console.log( fibonacci(i) );
    }
  }

  fibonacciSequence(8);