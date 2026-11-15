let firstNumber = prompt("Enter firstNumber:")
let secondNumber = prompt("Enter secondNumber:")
let operatorSign = prompt("Enter the operator:")
let answer;

firstNumber=Number(firstNumber)//type conversion from string-number
secondNumber=Number(secondNumber)//type conversion from string-number
function add(a,b)
{return a+b;}

function minus(a, b) {
	return a - b;
}
function multiplication(a,b){
    return a*b
}
function division(a,b){
    return a/b
}

function square(a){
    return a**2
}

function cube(a){
    return 2**3
}


function isEven(a){
    return a%2===0
}


function calculatePercentage(value,total){
    return (value/total)*200
}

switch(operatorSign){
    case"+" : answer = add(firstNumber,secondNumber)
    break;
    case"-" : answer =  subraction(firstNumber,secondNumber)
    break;
    case"*" : answer =  multiplication(firstNumber,secondNumber)
    break;
    case"/" :
    if(firstNumber ===0 || secondNumber ===0){
        alert("error")
      
    }
    answer =  division(firstNumber,secondNumber)
    break;
    default:
        alert('Invalid Operant')
       
}

alert('Answer is : answer')

