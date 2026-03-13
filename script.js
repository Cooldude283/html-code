const form = document.getElementById('loginForm');
const msg = document.getElementById('msg');

if (form && msg) {
  form.addEventListener('submit', e => {
    e.preventDefault();

    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const username = usernameInput.value.trim();
    const password = passwordInput.value;

    if (!username) {
      msg.style.color = '#c00';
      msg.textContent = 'Username is required.';
      usernameInput.focus();
      return;
    }

    if (!passwordInput.checkValidity()) {
      msg.style.color = '#c00';
      msg.textContent = 'Password must be 6+ chars, include uppercase, lowercase, and at least one number or symbol.';
      passwordInput.focus();
      return;
    }

    // Do not expose credentials to console or page UI.
    // No further processing is done here unless you add a secure API call.

    msg.style.color = '#108014';
    msg.textContent = 'Form submitted successfully.';

    form.reset();
  });
}

const togglePassword = document.getElementById('togglePassword');
const passwordInput = document.getElementById('password');
const passwordStrength = document.getElementById('passwordStrength');

function computeStrength(value) {
  if (value.length < 6) {
    return {text: 'Weak', color: '#c00'};
  }

  let score = 0;
  if (/[a-z]/.test(value)) score += 1;
  if (/[A-Z]/.test(value)) score += 1;
  if (/[0-9]/.test(value)) score += 1;
  if (/[^A-Za-z0-9]/.test(value)) score += 1;

  // Length bonus for high-entropy passwords
  if (value.length >= 12) score += 1;
  if (value.length >= 16) score += 1;
  if (value.length >= 20) score += 1;

  if (score >= 6) {
    return {text: 'Strong', color: '#147b00'};
  }
  if (score >= 4) {
    return {text: 'Good', color: '#2a9d8f'};
  }
  if (score >= 3) {
    return {text: 'Fair', color: '#e67e22'};
  }

  return {text: 'Weak', color: '#c00'};
}

if (passwordInput && passwordStrength) {
  passwordInput.addEventListener('input', () => {
    const value = passwordInput.value;
    const result = computeStrength(value);
    passwordStrength.textContent = `Strength: ${result.text}`;
    passwordStrength.style.color = result.color;
  });
}

if (togglePassword && passwordInput) {
  togglePassword.addEventListener('click', () => {
    const isPassword = passwordInput.type === 'password';
    passwordInput.type = isPassword ? 'text' : 'password';
    togglePassword.textContent = isPassword ? 'Hide' : 'Show';
  });
}
