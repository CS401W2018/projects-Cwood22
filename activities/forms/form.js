
document.getElementById('myform').addEventListener('submit',function(event){
    event.preventDefault();
    const first = document.getElementById("fname").value;
    const last = document.getElementById("lname").value;
    const age = document.getElementById("age").value;
    if (!first || !last) {
        alert("You need a first and last name.")
        return;
    }
    if (!age || age < 18) {
        alert ("You must be 18 or older");
        return;
    }
    const formData = {
        fname: fname,
        lname: lname,
        age: age,
        pass: document.getElementById('pass').value,
    }
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "submit.json", true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.onreadystatechange = function () {
        if (xhr.readystate === 4 && xhr.status === 200) {
            const response = JSON.parse(xhr.response);
            document.getElementById('message').innerHTML = response.message;
            document.getElementById('myform').innerHTML = "";
        } else if (xhr.readystate === 4) {
            alert('Error submitting form.');
        }
    };
    xhr.send(JSON.stringify(formData));
    console.log(formData);
});