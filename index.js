function clearScreen() {
    document.getElementById("result").value = "";
}
 

function display(value) {
    document.getElementById("result").value += value;
}
 

function calculate() {
    let equation = document.getElementById("result").value;
    let answer = eval(equation);
    document.getElementById("result").value = answer;

    if (eval(equation) = NaN) {
        document.getElementById("result").value = "error";
    }
    
}

function calculatesine(){
    let equation = document.getElementById("result").value;
    let answer = Math.sin(equation);
    document.getElementById("result").value = answer; 
}

function calculatecosine() {
    let equation = document.getElementById("result").value;
    let answer = Math.cos(equation);
    document.getElementById("result").value = answer; 
}

function calculatetangent() {
    let equation = document.getElementById("result").value;
    let answer = Math.tan(equation);
    document.getElementById("result").value = answer; 
}

function calculatepercent() {
    let equation = document.getElementById("result").value;
    let answer = equation / 100;
    document.getElementById("result").value = answer;
}

function calculatelog(){
    let equation = document.getElementById("result").value;
    let answer = Math.log(equation);
    document.getElementById("result").value = answer;
}
function calculateln(){
    let equation = document.getElementById("result").value;
    let answer = Math.LN10(equation);
    document.getElementById("result").value = answer;
}
function calculatesqrt(){
    let equation = document.getElementById("result").value;
    let answer = Math.sqrt(equation);
    document.getElementById("result").value = answer;
}