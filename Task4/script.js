document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu functionality
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Form validation setup
    const form = document.getElementById('registrationForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const successMessage = document.getElementById('successMessage');

    if (form && nameInput && emailInput) {
        // Validate name field
        function validateName() {
            const name = nameInput.value.trim();
            if (name === '') {
                nameInput.style.borderColor = 'red';
                nameError.classList.remove('hidden');
                return false;
            } else {
                nameInput.style.borderColor = '';
                nameError.classList.add('hidden');
                return true;
            }
        }

        // Validate email field
        function validateEmail() {
            const email = emailInput.value.trim();
            const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            
            if (email === '' || !emailRegex.test(email)) {
                emailInput.style.borderColor = 'red';
                emailError.classList.remove('hidden');
                return false;
            } else {
                emailInput.style.borderColor = '';
                emailError.classList.add('hidden');
                return true;
            }
        }

        // Real-time validation
        nameInput.addEventListener('input', validateName);
        emailInput.addEventListener('input', validateEmail);

        // Form submission
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const isNameValid = validateName();
            const isEmailValid = validateEmail();

            if (isNameValid && isEmailValid) {
                // Show success message
                successMessage.classList.remove('hidden');
                
                // Clear form
                form.reset();
                
                // Reset styles
                nameInput.style.borderColor = '';
                emailInput.style.borderColor = '';
                
                // Hide success message after 3 seconds
                setTimeout(() => {
                    successMessage.classList.add('hidden');
                }, 3000);
            }
        });
    }
});

   