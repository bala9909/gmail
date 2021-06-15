/* Reading URL query params*/
const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());
if (params && params.id) {
    getUserFromService(params.id);
}

/* Fetches user data with userID from the service*/
function getUserFromService(userID) {
    let request = new XMLHttpRequest();
    request.open("GET", "http://localhost:8080/users/" + userID);
    request.send();
    request.onload = () => {
        if (request.status === 200) {
            console.log(JSON.parse(request.response));
            populateDataToHtmlForm(JSON.parse(request.response))
        } else {
            console.log("error");
        }
    };
}

/* Populates the user data to html registration form*/
function populateDataToHtmlForm(userData) {
    document.getElementById('fname').value = userData.firstName;
    document.getElementById('lname').value = userData.lastName;
    document.getElementById("username").value = userData.userName;
    document.getElementById("password").value = userData.password;
}

/* Fetches the values entered in the registration from and posts that data to backend service */
function registerUser() {
    const response = new XMLHttpRequest();

    const json = JSON.stringify({
        firstName: document.getElementById('fname').value,
        lastName: document.getElementById('lname').value,
        userName: document.getElementById("username").value,
        password: document.getElementById("password").value,
    });

    response.open("POST", 'http://localhost:8080/users');
    response.setRequestHeader('Content-Type', 'application/json');
    response.send(json);
    response.onload = (e) => {
        alert(response.response);
    }
}


