
document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let valid = true;

    // Name validation
    const name = document.getElementById("name").value.trim();
    if (name.length < 3) {
        document.getElementById("nameError").textContent = "Name must be at least 3 characters.";
        valid = false;
    } else {
        document.getElementById("nameError").textContent = "";
    }

    // Email validation
    const email = document.getElementById("email").value.trim();
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailPattern.test(email)) {
        document.getElementById("emailError").textContent = "Enter a valid email address.";
        valid = false;
    } else {
        document.getElementById("emailError").textContent = "";
    }

    // DOB validation (must be at least 17 years old)
    const dob = new Date(document.getElementById("dob").value);
    const today = new Date();
    let age = today.getFullYear() - dob.getFullYear();
    const m = today.getMonth() - dob.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) {
        age--;
    }
    if (age < 17) {
        document.getElementById("dobError").textContent = "You must be at least 17 years old.";
        valid = false;
    } else {
        document.getElementById("dobError").textContent = "";
    }

    // Department validation
    const department = document.getElementById("department").value;
    if (department === "") {
        document.getElementById("deptError").textContent = "Please select a department.";
        valid = false;
    } else {
        document.getElementById("deptError").textContent = "";
    }

    // Phone validation
    const phone = document.getElementById("phone").value.trim();
    if (!/^\d{10}$/.test(phone)) {
        document.getElementById("phoneError").textContent = "Phone must be exactly 10 digits.";
        valid = false;
    } else {
        document.getElementById("phoneError").textContent = "";
    }

    // Show confirmation if valid
    if (valid) {
        document.getElementById("confirmation").style.display = "block";
        document.getElementById("confirmation").textContent = `✅ Registration successful! Welcome, ${name}.`;
        this.reset();
    }
});
