// INPUTS
const numberOne = document.getElementById ('numberOne');
const numberTwo = document.getElementById ('numberTwo');

// BUTTONS
const plus = document.getElementById ('plus');
const minus = document.getElementById ('minus');
const divide = document.getElementById ('divide');
const multiply = document.getElementById ('multiply');

//RESULT
const result = document.getElementById ('result');

// EVENTS FOR BUTTONS
plus.addEventListener('click', function(){
    if (checkValues() == true) {
        plusNumbers(parseInt(numberOne.value), parseInt(numberTwo.value));
        clearInputs();
    }
})
minus.addEventListener('click', function(){
    if (checkValues() == true) {
        minusNumbers(parseInt(numberOne.value), parseInt(numberTwo.value));
        clearInputs()
    };
})
divide.addEventListener('click', function(){
    if (checkValues() == true) {
        divideNumbers(parseInt(numberOne.value), parseInt(numberTwo.value));
        clearInputs()
    };
})
multiply.addEventListener('click', function(){
    if (checkValues() == true) {;
        multiplyNumbers(parseInt(numberOne.value), parseInt(numberTwo.value));
        clearInputs()
    };
})

//CALCULATION FUNCTIONS
function plusNumbers(a, b){
    result.textContent = a + b;
}
function minusNumbers(a, b){
    result.textContent = a - b;
}
function divideNumbers(a, b){
    result.textContent = a / b;
}
function multiplyNumbers(a, b){
    result.textContent = a * b;
}
function clearInputs() {
    numberOne.value = '';
    numberTwo.value = '';
}
function checkValues(){
    if (numberOne.value == '' && numberTwo.value == ''){
    alert ('Enter values!');
    return false;
} else {
    return true;
}}
