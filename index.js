
const display = document.querySelector("#display");
const formula = document.querySelector("#formula");
const count   = document.querySelector("#count");
const reset   = document.querySelector("#reset");

function checkNumber(num){
    if(display.innerHTML == '0'){
        display.innerHTML = num;
    }else{
        display.innerHTML = display.innerHTML + num;
    }
}
function checkReset(){
    if(reset.value == "reset"){
        display.innerHTML = "";
        formula.innerHTML = "";
        reset.value="";
    }
}

// NUMBER

const click1 = document.querySelector("#click1");
click1.addEventListener("click", function() {
    checkReset();
    checkNumber(click1.value);
});
const click2 = document.querySelector("#click2");
click2.addEventListener("click", function() {
    checkReset();
    checkNumber(click2.value);
});
const click3 = document.querySelector("#click3");
click3.addEventListener("click", function() {
    checkReset();
    checkNumber(click3.value);
});
const click4 = document.querySelector("#click4");
click4.addEventListener("click", function() {
    checkReset();
    checkNumber(click4.value);
});
const click5 = document.querySelector("#click5");
click5.addEventListener("click", function() {
    checkReset();
    checkNumber(click5.value);
});
const click6 = document.querySelector("#click6");
click6.addEventListener("click", function() {
    checkReset();
    checkNumber(click6.value);
});
const click7 = document.querySelector("#click7");
click7.addEventListener("click", function() {
    checkReset();
    checkNumber(click7.value);
});
const click8 = document.querySelector("#click8");
click8.addEventListener("click", function() {
    checkReset();
    checkNumber(click8.value);
});
const click9 = document.querySelector("#click9");
click9.addEventListener("click", function() {
    checkReset();
    checkNumber(click9.value);
});
const click0 = document.querySelector("#click0");
click0.addEventListener("click", function() {
    checkReset();
    checkNumber(click0.value);
});


// OPERATION

const clickDivide = document.querySelector("#clickDivide");
clickDivide.addEventListener("click", function() {
    num = clickDivide.value;
    display.innerHTML = display.innerHTML + num;
    if(reset.value == "reset"){
        reset.value = "";
    }
});

const clickMultiply = document.querySelector("#clickMultiply");
clickMultiply.addEventListener("click", function() {
    num = clickMultiply.value;
    display.innerHTML = display.innerHTML + num;
    if(reset.value == "reset"){
        reset.value = "";
    }
});

const clickSubstract = document.querySelector("#clickSubstract");
clickSubstract.addEventListener("click", function() {
    num = clickSubstract.value;
    display.innerHTML = display.innerHTML + num;
    if(reset.value == "reset"){
        reset.value = "";
    }
});

const clickAdd = document.querySelector("#clickAdd");
clickAdd.addEventListener("click", function() {
    num = clickAdd.value;
    display.innerHTML = display.innerHTML + num;
    if(reset.value == "reset"){
        reset.value = "";
    }
});


// CLEAR
const clickAllClear = document.querySelector("#clickAllClear");
clickAllClear.addEventListener("click", function() {
    display.innerHTML = "";
    formula.innerHTML = "";
});


// DELETE
const clickClear = document.querySelector("#clickClear");
clickClear.addEventListener("click", function() {
    checkReset();
    const hasil = display.innerHTML.slice(0, -1);
    display.innerHTML = hasil;
});


// DECIMAL
const clickDecimal = document.querySelector("#clickDecimal");
clickDecimal.addEventListener("click", function() {
    if(display.innerHTML.length == '0'){
        display.innerHTML = "";
    }else{
        display.innerHTML = display.innerHTML + ".";
    }
});


// EQUAL
function clickEqual() {
    formula.innerHTML = display.innerHTML;
    try {
        display.innerHTML = eval(display.innerHTML);
    } catch (error) {
        display.innerHTML = 'Error';
    }
    reset.value = "reset"
}