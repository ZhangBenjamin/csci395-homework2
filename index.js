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

    if (eval(equation) = False) {
        document.getElementById("result").value = "error";
    }
    
}
