// const field = document.createElement("input");

function addText() {
    let user_name = document.getElementById("inputUserName").value;
    let pass_key = document.getElementById("exampleInputPassword1").value;

    const user_obj = {
        uname: user_name,
        passkey: pass_key
    }
    localStorage.setItem('user', JSON.stringify(user_obj));
    alert('Data saved to local storage!');
}

function getText() {
    const user_details = localStorage.getItem('user');
    const user_data = JSON.parse(user_details);
    document.getElementById("user_output").innerText = user_data.uname;
    document.getElementById("pass_output").innerText = user_data.passkey;
}

function clearText() {
    document.getElementById("user_output").innerText = "";
    document.getElementById("pass_output").innerText = "";
}
function clearStorage() {
    localStorage.clear();
    setTimeout(() => {
        alert('Local storage has been cleared!');
    }, 500);
}