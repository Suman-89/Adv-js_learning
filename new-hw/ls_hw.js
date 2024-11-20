// const field = document.createElement("input");

function addText(){
    let textDoc = document.getElementById("text").value;
    localStorage.setItem('key_text', textDoc);
    document.getElementById("text").value = "";
}

function getText(){
    const username = localStorage.getItem('key_text');
    document.getElementById("output").value = username;
}

function clearText(){
    localStorage.clear();
    document.getElementById("output").value = "";
    setTimeout(()=>{
    alert('Local storage has been cleared!');
    },500);
}