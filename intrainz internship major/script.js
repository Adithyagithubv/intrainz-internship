function validateForm(event) {
    event.preventDefault();

    // Reset errors
    resetErrors();

    // Get form values
    const fullName = document.getElementById('fullName').value.trim();
    const email = document.getElementById('email').value.trim();
    const phoneNumber = document.getElementById('phoneNumber').value.trim();
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirmPassword').value.trim();

    // Validate Full Name
    if (fullName.length < 5) {
        displayError('fullNameError', 'Name must be at least 5 characters');
        return;
    }

    // Validate Email
    if (!email.includes('@')) {
        displayError('emailError', 'Enter a valid email address');
        return;
    }

    // Validate Phone Number
    if (phoneNumber.length !== 10 || phoneNumber === '123456789') {
        displayError('phoneNumberError', 'Enter a valid 10-digit phone number');
        return;
    }

    // Validate Password
    if (password.length < 8 || password.toLowerCase() === 'password' || password.toLowerCase() === fullName.toLowerCase()) {
        displayError('passwordError', 'Password must be at least 8 characters and not be "password" or your name');
        return;
    }

    // Validate Confirm Password
    if (confirmPassword !== password) {
        displayError('confirmPasswordError', 'Passwords do not match');
        return;
    }

    // Form is valid - you can submit the form data or perform additional actions here
    alert('Form submitted successfully!');
}

function displayError(elementId, errorMessage) {
    const errorElement = document.getElementById(elementId);
    errorElement.textContent = errorMessage;
}

function resetErrors() {
    const errorElements = document.querySelectorAll('.form-text.text-danger');
    errorElements.forEach(element => {
        element.textContent = '';
    });
}
