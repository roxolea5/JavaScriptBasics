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
