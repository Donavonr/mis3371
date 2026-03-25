document.getElementById("today").innerHTML =
    new Date().toLocaleDateString();
function reviewForm() {
    let firstName = document.getElementsByName("firstname")[0].value;
    let middleInit = document.getElementsByName("middleinit")[0].value;
    let lastName = document.getElementsByName("lastname")[0].value;
    let dob = document.getElementsByName("dob")[0].value;
    let ssn = document.getElementsByName("ssn")[0].value;
    let addr1 = document.getElementsByName("addr1")[0].value;
    let addr2 = document.getElementsByName("addr2")[0].value;
    let city = document.getElementsByName("city")[0].value;
    let state = document.getElementsByName("state")[0].value;
    let zip = document.getElementsByName("zip")[0].value;
    let phone = document.getElementsByName("phone")[0].value;
    let email = document.getElementsByName("email")[0].value;
    let reason = document.getElementsByName("reason")[0].value;
    let healthRating = document.getElementsByName("healthRating")[0].value;
    let userId = document.getElementsByName("userId")[0].value;
    let password = document.getElementsByName("password")[0].value;

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

    let output = `
        <h2>PLEASE REVIEW THIS INFORMATION</h2>

        <p><strong>Name:</strong> ${firstName} ${middleInit} ${lastName}</p>
        <p><strong>Date of Birth:</strong> ${dob}</p>
        <p><strong>Social Security:</strong> ${ssn}</p>

        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Address:</strong> ${addr1}</p>
        <p>${addr2}</p>
        <p>${city}, ${state} ${zip}</p>
        <p><strong>Sex:</strong> ${sex}</p>
        <p><strong>Insurance:</strong> ${insurance}</p>
        <p><strong>Vaccinated:</strong> ${vaccinated}</p>

        <p><strong>Conditions:</strong> ${conditionsList.join(", ")}</p>

        <p><strong>Reason for Visit:</strong> ${reason}</p>
        <p><strong>Overall Health Rating:</strong> ${healthRating}</p>

        <p><strong>User ID:</strong> ${userId}</p>
        <p><strong>Password:</strong> ${password}</p>
    `;

    document.getElementById("reviewSection").innerHTML = output;
}
