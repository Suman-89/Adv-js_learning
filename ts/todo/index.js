const input = document.getElementById("new-task-title");
const list = document.getElementById("main_div");
function addItem(){
    if(input.value === "") {
        alert("Please write something !!");
    }
    else {
        let li = document.createElement("li");
        li.innerText = input.value;
        list.appendChild(li);
        console.log("I am clicked");
    }
    input.value = "";  
}