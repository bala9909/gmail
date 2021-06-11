alert("home page 503 error");

let request = new XMLHttpRequest();
request.open("DELETE", "https://jsonplaceholder.typicode.com/users/1");
request.send();
request.onload = () => {
    console.log(request);
    if (request.status === 200) {
        console.log(JSON.parse(request.response));
        const dataDiv = document.getElementById("userData");
        dataDiv.innerText = request.response;

    } else {
        console.log("error");
    }
};
