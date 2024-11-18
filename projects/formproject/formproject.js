document.getElementById('formproject').addEventListener("submit", function(event){
    event.preventDefault();
const first = document.getElementById("fname").value;
const last = document.getElementById("lname").value;
const email = document.getElementById("email").value;
const password = document.getElementById("pass").value;
const date = document.getElementById("date").value;
const phone = document.getElementById("phone").value;
const employment = document.getElementById("employ").value;
const comments = document.getElementById("feedback").value;
const promotions = document.getElementById("cbox").value;
const number = document.getElementById("favnumber").value;

if (!first || !last) {
    alert("Please tell us your full name.");
    return;
}
if (!phone ) {
    alert("Please provide your phone number")
    return;
}
if (!number || number < 22) {
    alert("Your favorite number cannot be less than mine")
    return;
}

const data = {
    fname: first,
    lname: last,
    email: email,
    pass: password,
    date: date,
    phone: phone,
    employ: employment,
    feedback: comments,
    cbox: promotions,
    favnumber: number,
}

const xhr = new XMLHttpRequest();
xhr.open ("GET", "formproject.json", true);
xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        const response = JSON.parse(xhr.responseText);
        document.getElementById("message").innerHTML = response.message;
        document.getElementById("formproject").innerHTML = "";
    } else if (xhr.readyState === 4) {
        alert('Error submitting form.');
    }
};
xhr.send(JSON.stringify(data));
console.log(data);
});