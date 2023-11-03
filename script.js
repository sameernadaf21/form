function formvalidation() {
    // Get form elements by their IDs
    console.log("Validation function called");
    var userid = document.getElementById("userid");
    var pass = document.getElementById("pass");
    var name = document.getElementById("name");
    var address = document.getElementById("address");
    var country = document.getElementById("country");
    var email = document.getElementById("email");
    var gender = document.getElementsByName("gender");

    // Simple validation checks
    if (userid.value.trim() === "") {
        alert("Please enter a Userid");
        return false;
    }
    if (pass.value.trim() === "") {
        alert("Please enter a Password");
        return false;
    }
    if (name.value.trim() === "") {
        alert("Please enter your Name");
        return false;
    }
    if (address.value.trim() === "") {
        alert("Please enter your Address");
        return false;
    }
    if (country.value === "default") {
        alert("Please select a Country");
        return false;
    }
    if (email.value.trim() === "" || !isValidEmail(email.value)) {
        alert("Please enter a valid Email");
        return false;
    }
    var genderSelected = false;
    for (var i = 0; i < gender.length; i++) {
        if (gender[i].checked) {
            genderSelected = true;
            break;
        }
    }
    if (!genderSelected) {
        alert("Please select a Gender");
        return false;
    }

    // If all validation checks pass, the form is considered valid
    return true;
}

function isValidEmail(email) {
    // Basic email validation pattern
    var emailPattern = /^\S+@\S+\.\S+$/;
    return emailPattern.test(email);
}
