document.addEventListener("DOMContentLoaded", function () {
    async function getData() {
        const url = "https://api.github.com/users";
        try {
            const response = await fetch(url);
            const result = await response.json();
            fetchData(result);
        } catch (error) {
            console.log(error);
        }
    }
    function fetchData(data){
        const vData = document.getElementById("card");
        //data fetching
        data.forEach(element => {
            console.log(element);
        });
    }
    getData();
})