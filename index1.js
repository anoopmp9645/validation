

function validateForm() {
  // Get input values
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const password = document.getElementById('password').value;

  // Regex patterns
  const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
  const phoneRegex = /^\\d{10}$/;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,20}$/;

  // Error message elements
  const emailError = document.getElementById('emailError');
  const phoneError = document.getElementById('phoneError');
  const passwordError = document.getElementById('passwordError');

  // Clear previous errors
  emailError.textContent = '';
  phoneError.textContent = '';
  passwordError.textContent = '';

  // Validate email
  if (!emailRegex.test(email)) {
    emailError.textContent = 'Invalid email format';
  }

  // Validate phone
  if (!phoneRegex.test(phone)) {
    phoneError.textContent = 'Phone number must be 10 digits';
  }

  // Validate password
  if (!passwordRegex.test(password)) {
    passwordError.textContent = 'Password must be 8-20 characters, include one uppercase letter, one lowercase letter, one digit, and one special character';
  }

  // Final validation check
  if (emailRegex.test(email) && phoneRegex.test(phone) && passwordRegex.test(password)) {
    alert("Form submitted successfully!");
  }
}