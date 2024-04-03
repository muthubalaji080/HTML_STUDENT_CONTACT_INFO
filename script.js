document.getElementById("contact-form").addEventListener("submit", function (event) {
event.preventDefault();
var name = document.getElementById("name").value;
var email = document.getElementById("email").value;
var table = document.getElementById("submitted-info").getElementsByTagName("tbody")[0];
if (!isEmailExists(table, email)) {
    var index = table.rows.length + 1;
    var row = table.insertRow();
    var cellIndex = row.insertCell(0);
    var cell1 = row.insertCell(1);
    var cell2 = row.insertCell(2);
    cellIndex.innerText = index;
    cellIndex.classList.add("index-column");
    cell1.innerText = name;
    cell2.innerText = email;
    clearForm();
} else {
    alert("Email already exists!");
}
});

function isEmailExists(table, email) {
    var rows = table.rows;
    for (var i = 0; i < rows.length; i++) {
        var rowEmail = rows[i].cells[2].innerText;
        if (rowEmail === email) {
            return true;
        }
    }
    return false;
}

function clearForm() {
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
}