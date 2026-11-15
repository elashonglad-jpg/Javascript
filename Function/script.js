function greet(){console.log("Hellow!!"); }
greet()
greet()

function greet(name){console.log("Hello " + name)}
greet("shown")
greet("peter")
greet("melet")

function introduceStudent(name,age,course)
{console.log("Student Name: " + name)
console.log("Age: " + age)
console.log("Course: " + course)
}
introduceStudent("shown",20,"softwaredevelopment")
introduceStudent("mark",22,"customerservice")

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

console.log(add(5,5))
console.log(minus(5,4))
console.log(multiplication(2,2))
console.log(division(4,2))


console.log(square(5))
console.log(cube(2))
console.log(isEven(4%2==0))

console.log(calculatePercentage(40,100))

const totals = function calculateTotals(prize,quantity){
    console.log(prize*quantity)
}
totals(50,4)

//local variable-declared inside a function
function calculateAll(){
    let prize=500;
    let quantity=3
    let total=prize*quantity
    console.log(total)
}
calculateAll()

//global-declard outside a function
let schoolName="Future Labs Africa"
function displaySchool(){console.log(schoolName)}
displaySchool()
