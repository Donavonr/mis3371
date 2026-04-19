
document.getElementById("today").innerHTML =
    new Date().toLocaleDateString();

function reviewForm() {
    let firstName = document.getElementsByName("firstname")[0].value.trim();
    let middleInit = document.getElementsByName("middleinit")[0].value.trim();
    let lastName = document.getElementsByName("lastname")[0].value.trim();
    let dob = document.getElementsByName("dob")[0].value;
    let ssn = document.getElementsByName("ssn")[0].value.trim();
    let addr1 = document.getElementsByName("addr1")[0].value.trim();
    let addr2 = document.getElementsByName("addr2")[0].value.trim();
    let city = document.getElementsByName("city")[0].value.trim();
    let state = document.getElementsByName("state")[0].value;
    let zip = document.getElementsByName("zip")[0].value.trim();
    let phone = document.getElementsByName("phone")[0].value.trim();
    let email = document.getElementsByName("email")[0].value.trim();
    let reason = document.getElementsByName("reason")[0].value.trim();
    let healthRating = document.getElementsByName("healthRating")[0].value;
    let userIdField = document.getElementsByName("userId")[0];
    let userId = userIdField.value.trim().toLowerCase();
    userIdField.value = userId;
    let password = document.getElementsByName("password")[0].value;
    let password2 = document.getElementsByName("password2")[0].value;

    let sex = document.querySelector('input[name="sex"]:checked');
    sex = sex ? sex.value : "Not selected";

    let insurance = document.querySelector('input[name="insurance"]:checked');
    insurance = insurance ? insurance.value : "Not selected";

    let vaccinated = document.querySelector('input[name="vaccinated"]:checked');
    vaccinated = vaccinated ? vaccinated.value : "Not selected";

    let checkedConditions = document.querySelectorAll('input[name="conditions"]:checked');
    let conditionsList = [];
    checkedConditions.forEach(function(item) {
        conditionsList.push(item.value);
    });
    if (conditionsList.length === 0) {
        conditionsList.push("None selected");
    }

    let addressLine2 = addr2 ? `<p>${addr2}</p>` : "";

 // Name check
let nameStatus = "pass";
let nameColor = "limegreen";

let firstNamePattern = /^[A-Za-z'-]{1,30}$/;
let middleInitPattern = /^[A-Za-z]?$/;
let lastNamePattern = /^[A-Za-z'2345-]{1,30}$/;

if (!firstNamePattern.test(firstName)) {
    nameStatus = "ERROR: First name must be 1-30 letters, apostrophes, or dashes only";
    nameColor = "red";
} else if (!middleInitPattern.test(middleInit)) {
    nameStatus = "ERROR: Middle initial must be blank or 1 letter only";
    nameColor = "red";
} else if (!lastNamePattern.test(lastName)) {
    nameStatus = "ERROR: Last name must be 1-30 chars using letters, apostrophes, dashes, and numbers 2-5 only";
    nameColor = "red";
}

    // DOB check
    let dobStatus = "pass";
let dobColor = "limegreen";

if (dob === "") {
    dobStatus = "ERROR: Missing DOB";
    dobColor = "red";
} else {
    let parts = dob.split("/");

    if (parts.length !== 3) {
        dobStatus = "ERROR: Invalid DOB format";
        dobColor = "red";
    } else {
        let month = parseInt(parts[0], 10);
        let day = parseInt(parts[1], 10);
        let year = parseInt(parts[2], 10);

        let dobDate = new Date(year, month - 1, day);
        let today = new Date();
        today.setHours(0, 0, 0, 0);

        let minDate = new Date();
        minDate.setHours(0, 0, 0, 0);
        minDate.setFullYear(minDate.getFullYear() - 120);

        if (dobDate > today) {
            dobStatus = "ERROR: Cannot be in the future";
            dobColor = "red";
        } else if (dobDate < minDate) {
            dobStatus = "ERROR: Cannot be over 120 years old";
            dobColor = "red";
        }
    }
}

    // Email check
    let emailStatus = "pass";
    let emailColor = "limegreen";
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        emailStatus = "ERROR: Invalid email";
        emailColor = "red";
    }

    // Phone check
    let phoneStatus = "pass";
    let phoneColor = "limegreen";
    let phonePattern = /^[0-9]{10}$|^[0-9]{3}-[0-9]{3}-[0-9]{4}$/;
    if (!phonePattern.test(phone)) {
        phoneStatus = "ERROR: Invalid phone";
        phoneColor = "red";
    }

    // Address check
    let addressStatus = "pass";
    let addressColor = "limegreen";
    if (addr1 === "" || city === "" || state === "" || !/^[0-9]{5}(-[0-9]{4})?$/.test(zip)) {
        addressStatus = "ERROR: Missing address info or bad ZIP";
        addressColor = "red";
    }

    // SSN check
    let ssnStatus = "pass";
    let ssnColor = "limegreen";
    let ssnPattern = /^[0-9]{3}-[0-9]{2}-[0-9]{4}$/;
    if (!ssnPattern.test(ssn)) {
        ssnStatus = "ERROR: Invalid SSN";
        ssnColor = "red";
    }
    // USER ID CHECK
    let userIdStatus = "pass";
    let userIdColor = "limegreen";
    let userIdPattern = /^[a-z][a-z0-9_-]{4,29}$/;

    if (!userIdPattern.test(userId)) {
    userIdStatus = "ERROR: Must start with a letter, be 5-30 chars, and use only letters, numbers, _ or -";
    userIdColor = "red";
}
    // Password check
 let passwordStatus = "pass";
let passwordColor = "limegreen";

let passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*_\-+=.?]).{8,30}$/;

if (password === "" || password2 === "") {
    passwordStatus = "ERROR: Missing password";
    passwordColor = "red";
} else if (!passwordPattern.test(password)) {
    passwordStatus = "ERROR: Must include upper, lower, number, and special char";
    passwordColor = "red";
} else if (password !== password2) {
    passwordStatus = "ERROR: Passwords do not match";
    passwordColor = "red";
} else {
    passwordStatus = "pass";
}
   let output = `
    <h2>PLEASE REVIEW THIS INFORMATION</h2>

  <p>
    <strong>Name:</strong> ${firstName} ${middleInit} ${lastName}
    <span style="color:${nameColor}; margin-left:20px;">
        <strong>${nameStatus}</strong>
    </span>
</p>
    <p>
        <strong>Date of Birth:</strong> ${dob}
        <span style="color:${dobColor}; margin-left:20px;"><strong>${dobStatus}</strong></span>
    </p>

    <p>
        <strong>Social Security:</strong> ${ssn}
        <span style="color:${ssnColor}; margin-left:20px;"><strong>${ssnStatus}</strong></span>
    </p>

    <p>
        <strong>Email:</strong> ${email}
        <span style="color:${emailColor}; margin-left:20px;"><strong>${emailStatus}</strong></span>
    </p>

    <p>
        <strong>Phone:</strong> ${phone}
        <span style="color:${phoneColor}; margin-left:20px;"><strong>${phoneStatus}</strong></span>
    </p>

    <p>
        <strong>Address:</strong> ${addr1}
        <span style="color:${addressColor}; margin-left:20px;"><strong>${addressStatus}</strong></span>
    </p>
    ${addressLine2}
    <p>${city}, ${state} ${zip}</p>

    <p><strong>Sex:</strong> ${sex}</p>
    <p><strong>Insurance:</strong> ${insurance}</p>
    <p><strong>Vaccinated:</strong> ${vaccinated}</p>
    <p><strong>Conditions:</strong> ${conditionsList.join(", ")}</p>
    <p><strong>Reason for Visit:</strong> ${reason}</p>
    <p><strong>Overall Health Rating:</strong> ${healthRating}</p>

    <p>
        <strong>User ID:</strong> ${userId}
        <span style="color:${userIdColor}; margin-left:20px;"><strong>${userIdStatus}</strong></span>
    </p>

    <p>
    <strong>Password:</strong> ********
    <span style="color:${passwordColor}; margin-left:20px;">
        <strong>${passwordStatus}</strong>
    </span>
</p>
    `;

    document.getElementById("reviewSection").innerHTML = output;
}
function updateSliderValue() {
    let slider = document.getElementById("healthRating");
    let display = document.getElementById("sliderValue");

    display.innerHTML = slider.value;
}
function checkPasswords() {
    let userId = document.getElementById("userId").value.trim().toLowerCase();
    let pw1 = document.getElementById("password").value;
    let pw2 = document.getElementById("password2").value;
    let pw2Field = document.getElementById("password2");
    let msg = document.getElementById("passwordMessage");

    let passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+\\\/><.,`~?]).{8,30}$/;

    if (pw1 === "" && pw2 === "") {
        msg.innerHTML = "";
        pw2Field.setCustomValidity("");
        return true;
    }

    if (pw1 !== "" && !passwordPattern.test(pw1)) {
        msg.innerHTML = "Password must include uppercase, lowercase, number, and special character.";
        msg.style.color = "red";
        pw2Field.setCustomValidity("Invalid password format");
        return false;
    }

    if (pw1.includes('"') || pw1.includes("'")) {
        msg.innerHTML = "Password cannot contain quotes.";
        msg.style.color = "red";
        pw2Field.setCustomValidity("Password cannot contain quotes");
        return false;
    }

    if (userId !== "" && pw1.toLowerCase() === userId) {
        msg.innerHTML = "Password cannot be the same as User ID.";
        msg.style.color = "red";
        pw2Field.setCustomValidity("Password cannot equal User ID");
        return false;
    }

    if (pw2 === "") {
        msg.innerHTML = "Re-enter password to check if they match.";
        msg.style.color = "red";
        pw2Field.setCustomValidity("Please re-enter password");
        return false;
    }

    if (pw1 !== pw2) {
        msg.innerHTML = "Passwords do not match.";
        msg.style.color = "red";
        pw2Field.setCustomValidity("Passwords do not match");
        return false;
    }

    msg.innerHTML = "Passwords match.";
    msg.style.color = "green";
    pw2Field.setCustomValidity("");
    return true;
}
function validateForm() {
    let valid = true;

    if (!validateFirstName()) valid = false;
    if (!validateMiddleInitial()) valid = false;
    if (!validateLastName()) valid = false;
    if (!validateDOB()) valid = false;
    if (!validateSSN()) valid = false;
    if (!validateAddress1()) valid = false;
    if (!validateCity()) valid = false;
    if (!validateState()) valid = false;
    if (!validateZip()) valid = false;
    if (!validateEmail()) valid = false;
    if (!validateUserId()) valid = false;
    if (!validatePasswordRules()) valid = false;
    if (!validatePasswordMatch()) valid = false;

    if (valid) {
        document.getElementById("submitButton").style.display = "inline-block";
    } else {
        document.getElementById("submitButton").style.display = "none";
    }

    return valid;
}
function validateFirstName() {
    let value = document.getElementById("firstname").value.trim();
    let msg = document.getElementById("firstnameError");
    let pattern = /^[A-Za-z'-]{1,30}$/;

    if (value === "") {
        msg.innerHTML = "First name is required.";
        msg.style.color = "red";
        return false;
    }

    if (!pattern.test(value)) {
        msg.innerHTML = "Use 1-30 letters, apostrophes, or dashes only.";
        msg.style.color = "red";
        return false;
    }

    msg.innerHTML = "pass";
    msg.style.color = "green";
    return true;
}

function validateMiddleInitial() {
    let value = document.getElementById("middleinit").value.trim();
    let msg = document.getElementById("middleinitError");
    let pattern = /^[A-Za-z]?$/;

    if (!pattern.test(value)) {
        msg.innerHTML = "Middle initial must be blank or 1 letter only.";
        msg.style.color = "red";
        return false;
    }

    if (value === "") {
        msg.innerHTML = "";
        return true;
    }

    msg.innerHTML = "pass";
    msg.style.color = "green";
    return true;
}

function validateLastName() {
    let value = document.getElementById("lastname").value.trim();
    let msg = document.getElementById("lastnameError");
    let pattern = /^[A-Za-z'-]{1,30}$/;

    if (value === "") {
        msg.innerHTML = "Last name is required.";
        msg.style.color = "red";
        return false;
    }

    if (!pattern.test(value)) {
        msg.innerHTML = "Use 1-30 letters, apostrophes, or dashes only.";
        msg.style.color = "red";
        return false;
    }

    msg.innerHTML = "pass";
    msg.style.color = "green";
    return true;
}

function validateEmail() {
    let field = document.getElementById("email");
    let value = field.value.trim().toLowerCase();
    let msg = document.getElementById("emailError");
    let pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    field.value = value;

    if (value === "") {
        msg.innerHTML = "Email is required.";
        msg.style.color = "red";
        return false;
    }

    if (!pattern.test(value)) {
        msg.innerHTML = "Enter email as name@domain.tld.";
        msg.style.color = "red";
        return false;
    }

    msg.innerHTML = "pass";
    msg.style.color = "green";
    return true;
}

function validateZip() {
    let value = document.getElementById("zip").value.trim();
    let msg = document.getElementById("zipError");
    let pattern = /^[0-9]{5}$/;

    if (value === "") {
        msg.innerHTML = "ZIP code is required.";
        msg.style.color = "red";
        return false;
    }

    if (!pattern.test(value)) {
        msg.innerHTML = "ZIP code must be exactly 5 digits.";
        msg.style.color = "red";
        return false;
    }

    msg.innerHTML = "pass";
    msg.style.color = "green";
    return true;
}

function validateUserId() {
    let field = document.getElementById("userId");
    let value = field.value.trim().toLowerCase();
    let msg = document.getElementById("userIdError");
    let pattern = /^[a-z][a-z0-9_-]{4,19}$/;

    field.value = value;

    if (value === "") {
        msg.innerHTML = "User ID is required.";
        msg.style.color = "red";
        return false;
    }

    if (!pattern.test(value)) {
        msg.innerHTML = "Must start with a letter, be 5-20 chars, and use only letters, numbers, _ or -.";
        msg.style.color = "red";
        return false;
    }

    msg.innerHTML = "pass";
    msg.style.color = "green";
    return true;
}
function validatePhone() {
    let value = document.getElementById("phone").value.trim();
    let msg = document.getElementById("phoneError");
    let pattern = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/;

    if (value === "") {
        msg.innerHTML = "Phone number is required.";
        msg.style.color = "red";
        return false;
    }

    if (!pattern.test(value)) {
        msg.innerHTML = "Use format 000-000-0000.";
        msg.style.color = "red";
        return false;
    }

    msg.innerHTML = "pass";
    msg.style.color = "green";
    return true;
}
function validateDOB() {
    let value = document.getElementById("dob").value.trim();
    let msg = document.getElementById("dobError");
    let pattern = /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/\d{4}$/;

    if (value === "") {
        msg.innerHTML = "DOB is required.";
        msg.style.color = "red";
        return false;
    }

    if (!pattern.test(value)) {
        msg.innerHTML = "Use MM/DD/YYYY format.";
        msg.style.color = "red";
        return false;
    }

    let parts = value.split("/");
    let month = parseInt(parts[0], 10);
    let day = parseInt(parts[1], 10);
    let year = parseInt(parts[2], 10);

    let dobDate = new Date(year, month - 1, day);
    let today = new Date();
    today.setHours(0, 0, 0, 0);

    let minDate = new Date();
    minDate.setHours(0, 0, 0, 0);
    minDate.setFullYear(minDate.getFullYear() - 120);

    if (dobDate > today) {
        msg.innerHTML = "DOB cannot be in the future.";
        msg.style.color = "red";
        return false;
    }

    if (dobDate < minDate) {
        msg.innerHTML = "DOB cannot be more than 120 years ago.";
        msg.style.color = "red";
        return false;
    }

    msg.innerHTML = "pass";
    msg.style.color = "green";
    return true;
}

function formatSSN() {
    let field = document.getElementById("ssn");
    let digits = field.value.replace(/\D/g, "").substring(0, 9);

    if (digits.length > 5) {
        field.value = digits.substring(0, 3) + "-" + digits.substring(3, 5) + "-" + digits.substring(5);
    } else if (digits.length > 3) {
        field.value = digits.substring(0, 3) + "-" + digits.substring(3);
    } else {
        field.value = digits;
    }
}

function validateSSN() {
    let value = document.getElementById("ssn").value.trim();
    let msg = document.getElementById("ssnError");
    let pattern = /^[0-9]{3}-[0-9]{2}-[0-9]{4}$/;

    if (value === "") {
        msg.innerHTML = "SSN is required.";
        msg.style.color = "red";
        return false;
    }

    if (!pattern.test(value)) {
        msg.innerHTML = "Use format 123-45-6789.";
        msg.style.color = "red";
        return false;
    }

    msg.innerHTML = "pass";
    msg.style.color = "green";
    return true;
}

function validateAddress1() {
    let value = document.getElementById("addr1").value.trim();
    let msg = document.getElementById("addr1Error");

    if (value === "") {
        msg.innerHTML = "Address Line 1 is required.";
        msg.style.color = "red";
        return false;
    }

    if (value.length < 2 || value.length > 30) {
        msg.innerHTML = "Address Line 1 must be 2 to 30 characters.";
        msg.style.color = "red";
        return false;
    }

    msg.innerHTML = "pass";
    msg.style.color = "green";
    return true;
}

function validateCity() {
    let value = document.getElementById("city").value.trim();
    let msg = document.getElementById("cityError");

    if (value === "") {
        msg.innerHTML = "City is required.";
        msg.style.color = "red";
        return false;
    }

    if (value.length < 2 || value.length > 30) {
        msg.innerHTML = "City must be 2 to 30 characters.";
        msg.style.color = "red";
        return false;
    }

    msg.innerHTML = "pass";
    msg.style.color = "green";
    return true;
}

window.onload = function() {
    updateSliderValue();
};
window.onload = function() {
    updateSliderValue();
};
