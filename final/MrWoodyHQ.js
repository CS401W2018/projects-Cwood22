document.getElementById('communityform').addEventListener('submit', function(event) {
    event.preventDefault();
    const first = document.getElementById("fname").value;
    const last = document.getElementById("lname").value;
    const category = document.getElementById("post").value;
    const brand = document.getElementById("legotype").value;
    const title = document.getElementById("communitytitle").value;
    const image = document.getElementById("communityimage").value;
    const comment = document.getElementById("comments").value;

    if (!first || !last) {
        alert("Please use your full name or add a name you would like your post to be known under.");
        return;
    }

    const data = {
        fname: first,
        lname: last,
        post: category,
        legotype: brand,
        communitytitle: title,
        communityimage: image,
        comments: comment,
    }

    const xhr = new XMLHttpRequest();
    xhr.open("POST", "communitysubmission.json", true);
    xhr.setRequestHeader ("Content-Type", "application/json;charset=UTF-8");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const response = JSON.parse(xhr.response);
            document.getElementById('communitymessage').innerHTML = response.communitymessage;
            document.getElementById('communityform').innerHTML = '';
        } else if (xhr.readyState === 4) {
            alert ('Submission Error, Please Try Again.');
        }
    };
    xhr.send(JSON.stringify(data));
    console.log(data);
});