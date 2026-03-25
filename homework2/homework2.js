document.getElementById("today").innerHTML =
    new Date().toLocaleDateString();
function reviewForm() {

    let firstname = document.getElementsByName("firstname")[0].value;
    let lastname = document.getElementsByName("lastname")[0].value;
    let email = document.getElementsByName("email")[0].value;

    let output = `
        <h2>PLEASE REVIEW THIS INFORMATION</h2>
        <p><strong>Name:</strong> ${firstname} ${lastname}</p>
        <p><strong>Email:</strong> ${email}</p>
    `;

    document.getElementById("reviewSection").innerHTML = output;
}
