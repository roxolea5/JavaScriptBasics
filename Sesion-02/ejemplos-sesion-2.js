var time = 13;
var greeting;

if (time >= 0 && time < 12) {
  greeting = "Good morning";
} else if (time < 20) {
  greeting = "Good afternoon";
} else if (time >= 20 && time <= 24) {
  greeting = "Good evening";
}else{
    greeting = "Unknown hour";
}

console.log(greeting) // Good afternoon

var day = 2;
var text;

switch (day) {
  case 0:
    text = "Sunday";
    break;
  case 1:
    text = "Monday";
    break;
  case 2:
    text = "Tuesday";
    break;
  case 3:
    text = "Wednesday";
    break;
  case 4:
    text = "Thursday";
    break;
  case 5:
    text = "Friday";
    break;
  case 6:
    text = "Saturday";
    break;
  default:
    text = "Error";

}

console.log(text); // Tuesday

for(var i = 0; i<=200; i++){
    console.log("Hello World");
  }

  //Ciclo para mostrar núimeros pares de 1 al 100

  for (var i =0; i<= 100; i++){
      if (i%2===0){
          console.log(i)
      }
  }

  //Números primos en una serie de 1 a 100

  for (var counter = 2; counter <= 100; counter++) {
    var isPrime = true;
  
    for (var i = 2; i <= counter; i++) {
      if (counter % i === 0 && i !== counter) {
        isPrime = false;
      }
    }
  
    if(isPrime) {
      console.log(counter);
    }
  }