const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());
if (params && params.id) {
    getUserFromService(params.id);
}

function getUserFromService(userID) {
    let request = new XMLHttpRequest();
    request.open("GET", "http://localhost:8080/users/" + userID);
    request.send();
    request.onload = () => {
        if (request.status === 200) {
            console.log(JSON.parse(request.response));
            addDataToHtmlForm(JSON.parse(request.response))
        } else {
            console.log("error");
        }
    };
}

function addDataToHtmlForm(userData) {
    document.getElementById('fname').value = userData.firstName;
    document.getElementById('lname').value = userData.lastName;
    document.getElementById("username").value = userData.userName;
    document.getElementById("password").value = userData.password;
}

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


/*function deleteEmpRecord() {
	
	int empid = 100;
		
	RestAssured.baseURI = "http://localhost:8080/users";
	RequestSpecification request = RestAssured.given();	
		
	// Add a header stating the Request body is a JSON
	request.header("Content-Type", "application/json");	
	
       // Delete the request and check the response
	Response response = request.delete("/delete/"+ empid);		
		
	int statusCode = response.getStatusCode();
	System.out.println(response.asString());
	Assert.assertEquals(statusCode, 200);
		
	String jsonString =response.asString();
	Assert.assertEquals(jsonString.contains("successfully! deleted Records"), true);
	}*/
