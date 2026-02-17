function validateForm() {

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let age = document.getElementById("age").value;
    let password = document.getElementById("password").value;
    let message = document.getElementById("message");

    if (name === "") {
        message.innerText = "Name cannot be empty";
        return false;
    }

    if (!email.includes("@")) {
        message.innerText = "Email must contain @";
        return false;
    }

    if (age < 18 || age > 60) {
        message.innerText = "Age must be between 18 and 60";
        return false;
    }

    if (password.length < 6) {
        message.innerText = "Password must be at least 6 characters";
        return false;
    }

    if (confirm("Are you sure you want to submit?")) {
        alert("Registration Successful!");
        message.style.color = "green";
        message.innerText = "Form submitted successfully!";
        return true;
    }

    return false;
}