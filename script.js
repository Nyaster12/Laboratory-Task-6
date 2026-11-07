const form = document.getElementById("signupForm");
const firstName = document.getElementById("firstName");
const middleInitial = document.getElementById("middleInitial");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const resetBtn = document.getElementById("resetBtn");

const firstNameGroup = document.getElementById("firstNameGroup");
const middleInitialGroup = document.getElementById("middleInitialGroup");
const lastNameGroup = document.getElementById("lastNameGroup");
const emailGroup = document.getElementById("emailGroup");

const firstNameError = document.getElementById("firstNameError");
const middleInitialError = document.getElementById("middleInitialError");
const lastNameError = document.getElementById("lastNameError");
const emailError = document.getElementById("emailError");

// Helper: Show error state
function showError(group, errorSpan, message) {
    group.classList.remove("success");
    group.classList.add("error");
    errorSpan.textContent = message;
}

// Helper: Show success state
function showSuccess(group) {
    group.classList.remove("error");
    group.classList.add("success");
}

// Helper: Clear visual states
function clearState(group) {
    group.classList.remove("error", "success");
}

// Standard email validation pattern
function isValidEmail(emailValue) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(emailValue);
}

// Validation logic
function validateInputs() {
    let isValid = true;

    // Validate First Name
    if (firstName.value.trim() === "") {
        showError(firstNameGroup, firstNameError, "First Name is required");
        isValid = false;
    } else {
        showSuccess(firstNameGroup);
    }

    // Validate Middle Initial
    if (middleInitial.value.trim() === "") {
        showError(middleInitialGroup, middleInitialError, "Middle Initial is required");
        isValid = false;
    } else {
        showSuccess(middleInitialGroup);
    }

    // Validate Last Name
    if (lastName.value.trim() === "") {
        showError(lastNameGroup, lastNameError, "Last Name required");
        isValid = false;
    } else {
        showSuccess(lastNameGroup);
    }

    // Validate Email Address
    const emailVal = email.value.trim();
    if (emailVal === "") {
        showError(emailGroup, emailError, "Email is required");
        isValid = false;
    } else if (!isValidEmail(emailVal)) {
        showError(emailGroup, emailError, "Invalid email format");
        isValid = false;
    } else {
        showSuccess(emailGroup);
    }

    return isValid;
}

// Form Submission Event
form.addEventListener("submit", function (e) {
    e.preventDefault();

    const allValid = validateInputs();

    if (allValid) {
        alert("Success!");
    }
});

// Reset Button Event
resetBtn.addEventListener("click", function () {
    form.reset();
    clearState(firstNameGroup);
    clearState(middleInitialGroup);
    clearState(lastNameGroup);
    clearState(emailGroup);
});