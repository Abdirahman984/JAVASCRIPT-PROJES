let inputText = document.getElementById("input-text")
let listContainer = document.getElementById("list-container")

function addTask (){
    if(inputText.value === ""){
        alert ("you have to write something")
    } else{
        let li = document.createElement("li")
        li.innerHTML = inputText.value
        listContainer.appendChild(li)

        // CANCEL BUTTON
        let span = document.createElement("span")
        span.innerHTML ='<i class="fa-solid fa-x"></i>'
        li.appendChild(span)
    }
    inputText.value=""
    saveData();
}

// ADDEVEMTLISTNER WHEN YOU CLICK CHECKED AND DELET TASK
listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked")
        saveData();
    } else if (e.target.tagName === "SPAN" || e.target.tagName === "I"){
        e.target.closest("li").remove();
    }
    saveData();
})

// LOCALSTORAGE FOR THE DATA

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML)
}

function showData(){
    listContainer.innerHTML = localStorage.getItem("data")
}
showData();