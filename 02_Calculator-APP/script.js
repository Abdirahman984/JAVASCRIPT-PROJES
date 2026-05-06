let inputText = document.getElementById("input-text")

// CLICK FUNCATION 
function clickButton(input){
    inputText.value += input
    saveData();
}

// CLEAR FUNCATION 
function clearButton(){
    inputText.value ="";
    saveData();
}

// CALCULATE FUNCATION

function calculate(){
try {
    inputText.value = eval(inputText.value)
} catch(error){
    inputText.value = "Error"
}
    saveData();
}

// LOCALSTORAGE 
function saveData (){
    localStorage.setItem("data", inputText.value)
}

// saveData();

function displayData(){
    inputText.value = localStorage.getItem("data")
}

displayData();