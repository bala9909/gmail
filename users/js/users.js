let request = new XMLHttpRequest();
request.open("GET", "http://localhost:8080/users");
request.send();
request.onload = () => {
    console.log(request);
    if (request.status === 200) {
        console.log(JSON.parse(request.response));
        addDataToTable(JSON.parse(request.response))
    } else {
        console.log("error");
    }
};

function addDataToTable(userArray) {
    let tableElement = document.getElementById('userTable');
    userArray.forEach(user => {
        const tableRow = document.createElement("TR");
        tableElement.appendChild(tableRow);
        let userNameCell = document.createElement("TD");
        userNameCell.innerText=user.userName;
        let firstNameCell = document.createElement("TD");
        firstNameCell.innerText=user.firstName;
        let lastNameCell = document.createElement("TD");
        lastNameCell.innerText=user.lastName;
        let passwordCell = document.createElement("TD");
        passwordCell.innerText=user.password;
        tableRow.appendChild(userNameCell);
        tableRow.appendChild(firstNameCell);
        tableRow.appendChild(lastNameCell);
        tableRow.appendChild(passwordCell);
    });

}
