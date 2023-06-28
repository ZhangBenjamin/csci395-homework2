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

}