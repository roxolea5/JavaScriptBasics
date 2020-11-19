var div = document.getElementById('showResult');

function basicOp(){
    div.innerHTML = "";
    var op1= Number.parseFloat((document.getElementById('operator1').value), 10);
    var op2= Number.parseFloat((document.getElementById('operator2').value), 10);
    if (isNaN (op1) || isNaN (op2)){
        alert('Ingresa solo valores numéricos');
    }else{
        var sumResult = document.createElement("p");
        var subResult = document.createElement("p");
        var multResult = document.createElement("p");
        var diviResult = document.createElement("p");
        var sum = op1 + op2;
        var sub = op1 - op2;
        var mult = op1 * op2;
        var divi = op1 / op2;
        sumResult.append(`La suma de los operandos es: ${sum}`);
        subResult.append(`La resta de los operandos es: ${sub}`);
        multResult.append(`El producto de los operandos es: ${mult}`);
        diviResult.append(`La división de los operandos es: ${divi}`);

        div.appendChild(sumResult);
        div.appendChild(subResult);
        div.appendChild(multResult);
        div.appendChild(diviResult);      
    }   
}