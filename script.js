document.addEventListener('DOMContentLoaded', () => {
    
    const form = document.getElementById('ServeyForm');
    const fullName = document.getElementById('fullName');
    const email = document.getElementById('email');
    const gender = document.getElementsByName('gender');
    const department = document.getElementById('department');
    const concerns = document.getElementsByName('concern');
    const appointmentDate = document.getElementById('appointmentDate');
    const username = document.getElementById('username');
    const phone = document.getElementById('phone');

    const fullNameError = document.getElementById('fullNameError');
    const emailError = document.getElementById('emailError');
    const genderError = document.getElementById('genderError');
    const departmentError = document.getElementById('departmentError');
    const concernError = document.getElementById('concernError');
    const appointmentDateError = document.getElementById('appointmentDateError');
    const usernameError = document.getElementById('usernameError');
    const phoneError = document.getElementById('phoneError');

    const phonePattern = /^\d{10}$/; 

    function isRadioSelected(radioGroup) {
        return Array.from(radioGroup).some(radio => radio.checked);
    }

    function isCheckboxSelected(checkboxGroup) {
        return Array.from(checkboxGroup).some(checkbox => checkbox.checked);
    }

    function validateForm(event) {
        let isValid = true;

        if (fullName.value.trim() === '') {
            fullNameError.textContent = 'Full name is required';
            isValid = false;
        } else {
            fullNameError.textContent = '';
        }

        if (email.value.trim() === '') {
            emailError.textContent = 'Email is required';
            isValid = false;
        } else if (!email.validity.valid) {
            emailError.textContent = 'Invalid email address';
            isValid = false;
        } else {
            emailError.textContent = '';
        }

        if (!isRadioSelected(gender)) {
            genderError.textContent = 'Please select a gender';
            isValid = false;
        } else {
            genderError.textContent = '';
        }

        if (department.value === '') {
            departmentError.textContent = 'Please select a department';
            isValid = false;
        } else {
            departmentError.textContent = '';
        }

        if (!isCheckboxSelected(concerns)) {
            concernError.textContent = 'Please select at least one health concern';
            isValid = false;
        } else {
            concernError.textContent = '';
        }

        if (appointmentDate.value === '') {
            appointmentDateError.textContent = 'Appointment date is required';
            isValid = false;
        } else {
            appointmentDateError.textContent = '';
        }

        if (username.value.trim() === '') {
            usernameError.textContent = 'Username is required';
            isValid = false;
        } else if (!usernamePattern.test(username.value)) {
            usernameError.textContent = 'Username must be alphanumeric (letters and numbers only)';
            isValid = false;
        } else {
            usernameError.textContent = '';
        }

        if (phone.value.trim() === '') {
            phoneError.textContent = 'Phone number is required';
            isValid = false;
        } else if (!phonePattern.test(phone.value)) {
            phoneError.textContent = 'Phone number must be 10 digits';
            isValid = false;
        } else {
            phoneError.textContent = '';
        }

        if (!isValid) {
            event.preventDefault();
        }
    }

    form.addEventListener('submit', validateForm);

});
