document.getElementById("today").innerHTML =
    new Date().toLocaleDateString();
function reviewForm() {

    let firstName = document.getElementsByName("firstName")[0].value;
    let lastName = document.getElementsByName("lastName")[0].value;
    let email = document.getElementsByName("email")[0].value;

    let output = `
        <h2>PLEASE REVIEW THIS INFORMATION</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
    `;

    document.getElementById("reviewSection").innerHTML = output;
}
