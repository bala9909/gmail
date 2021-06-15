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
        tableRow.id = user.id;
        tableElement.appendChild(tableRow);
        let userNameCell = document.createElement("TD");
        userNameCell.innerText = user.userName;
        let firstNameCell = document.createElement("TD");
        firstNameCell.innerText = user.firstName;
        let lastNameCell = document.createElement("TD");
        lastNameCell.innerText = user.lastName;
        let passwordCell = document.createElement("TD");
        passwordCell.innerText = user.password;

        let editButtonCell = document.createElement("TD");
        let editButton = document.createElement("BUTTON");
        editButton.innerText = 'Edit';
        editButton.addEventListener('click', function () {
            alert('edit user' + user.id);
            editUser(user.id);
        });
        editButtonCell.appendChild(editButton);

        let deleteButtonCell = document.createElement("TD");
        let deleteButton = document.createElement("BUTTON");
        deleteButton.innerText = 'Delete';
        deleteButton.addEventListener('click', function () {
            alert('delete user');
            deleteUser(user.id);
        });
        deleteButtonCell.appendChild(deleteButton);


        tableRow.appendChild(userNameCell);
        tableRow.appendChild(firstNameCell);
        tableRow.appendChild(lastNameCell);
        tableRow.appendChild(passwordCell);
        tableRow.appendChild(editButtonCell);
        tableRow.appendChild(deleteButtonCell);
    });

}

function editUser(userId) {
    alert('edit user' + userId);
    window.location = '../../registration/html/registration.html?id=' + userId;


}

function deleteUser(userId) {
    let request = new XMLHttpRequest();
    request.open("DELETE", "http://localhost:8080/users/" + userId);
    request.send();
    request.onload = () => {
        if (request.status === 200) {
            console.log('user with id ' + userId + 'deleted successfully');
            deleteUserFromHtmlTable(userId);
        } else {
            console.log("error");
        }
    };
}

function deleteUserFromHtmlTable(userId) {
    let tableElement = document.getElementById('userTable');
    let deleteElement = document.getElementById(userId);
    tableElement.removeChild(deleteElement);
}
