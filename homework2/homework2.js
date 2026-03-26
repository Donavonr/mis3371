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
    let userId = document.getElementsByName("userId")[0].value.trim();
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
    if (firstName === "" || lastName === "") {
        nameStatus = "ERROR: Missing first or last name";
        nameColor = "red";
    }

    // DOB check
    let dobStatus = "pass";
    let dobColor = "limegreen";
    if (dob === "") {
        dobStatus = "ERROR: Missing DOB";
        dobColor = "red";
    } else {
        let today = new Date();
        let dobDate = new Date(dob);
        today.setHours(0, 0, 0, 0);
        if (dobDate > today) {
            dobStatus = "ERROR: Cannot be in the future";
            dobColor = "red";
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
    if (addr1 === "" || city === "" || state === "" || !/^[0-9]{5}$/.test(zip)) {
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

    // Password check
    let passwordStatus = "pass";
    let passwordColor = "limegreen";
    if (password === "" || password2 === "") {
        passwordStatus = "ERROR: Missing password";
        passwordColor = "red";
    } else if (password !== password2) {
        passwordStatus = "ERROR: Passwords do not match";
        passwordColor = "red";
    }

    let output = `
    <h2>PLEASE REVIEW THIS INFORMATION</h2>

    <p>
        <strong>Name:</strong> ${firstName} ${middleInit} ${lastName}
        <span style="color:${nameColor}; margin-left:20px;"><strong>${nameStatus}</strong></span>
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
    <p><strong>User ID:</strong> ${userId}</p>

    <p>
        <strong>Password:</strong> ********
        <span style="color:${passwordColor}; margin-left:20px;"><strong>${passwordStatus}</strong></span>
    </p>
    `;

    document.getElementById("reviewSection").innerHTML = output;
}

function checkPasswords() {
    let pw1 = document.getElementById("password").value;
    let pw2 = document.getElementById("password2").value;
    let pw2Field = document.getElementById("password2");

    if (pw2 === "") {
        pw2Field.setCustomValidity("");
        return true;
    }

    if (pw1 !== pw2) {
        pw2Field.setCustomValidity("Passwords do not match");
        return false;
    } else {
        pw2Field.setCustomValidity("");
        return true;
    }
}
