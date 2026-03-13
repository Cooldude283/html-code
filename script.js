const form = document.getElementById('loginForm');
const msg = document.getElementById('msg');

if (form && msg) {
  form.addEventListener('submit', e => {
    e.preventDefault();

    if (!form.checkValidity()) {
      msg.style.color = '#c00';
      msg.textContent = 'Password must be 6+ chars, include uppercase, lowercase, and at least one number or symbol.';
      return;
    }

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Do not expose credentials to console or page UI.
    // No further processing is done here unless you add a secure API call.

    msg.style.color = '#108014';
    msg.textContent = 'Form submitted successfully.';

    form.reset();
  });
}

const togglePassword = document.getElementById('togglePassword');
const passwordInput = document.getElementById('password');
if (togglePassword && passwordInput) {
  togglePassword.addEventListener('click', () => {
    const isPassword = passwordInput.type === 'password';
    passwordInput.type = isPassword ? 'text' : 'password';
    togglePassword.textContent = isPassword ? 'Hide' : 'Show';
  });
}
