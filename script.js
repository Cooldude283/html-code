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

    console.log('Username:', username);
    console.log('Password:', password);

    msg.style.color = '#108014';
    msg.textContent = `Got input: ${username} / ${'*'.repeat(password.length)}`;

    // Optional: send via fetch to server
    // fetch('/login', {
    //   method: 'POST',
    //   headers: {'Content-Type': 'application/json'},
    //   body: JSON.stringify({ username, password })
    // });

    form.reset();
  });
}
