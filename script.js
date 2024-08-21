document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const firstname = document.getElementById('firstname').value.trim();
    const lastname = document.getElementById('lastname').value.trim();
    const email = document.getElementById('email').value.trim();
    const contact = document.getElementById('contact').value.trim();

    if (firstname === "" || lastname === "" || email === "" || contact === "") {
        alert("Please fill out all fields.");
        return;
    }

    if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    if (!validateContact(contact)) {
        alert("Please enter a valid contact number.");
        return;
    }

    document.getElementById('message').innerText = "Registration complete";
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validateContact(contact) {
    const re = /^[0-9]{10}$/;
    return re.test(contact);
}