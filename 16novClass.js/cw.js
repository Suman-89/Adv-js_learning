function toggleText() {
    let textElement = document.getElementById("btn_1");
    textElement.innerHTML = (textElement.innerHTML === "Hello World" ? "" : "Hello World");
  }


function showDate() {
    let text = document.getElementById("date");
    let date_text = new Date().toLocaleString();
    if(text.innerHTML === date_text){
        text.innerHTML = "";
    }else{
        text.innerHTML = date_text;
    }
}

function btn_clk(){
    document.getElementById("text_show").innerHTML = document.getElementById("text").value ;
}

function clearText(){
    document.getElementById("text_show").innerHTML = "" ;
    document.getElementById("text").value = "" ;
}