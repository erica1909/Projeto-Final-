const loginForm = document.getElementById('login-form');

loginForm.addEventListener('submit', function(e) {
  e.preventDefault();

  const usernameInput = document.getElementById('username');
  const passwordInput = document.getElementById('password');

  const username = usernameInput.value;
  const password = passwordInput.value;

  if (username === '' || password === '') {
    alert('Por favor, preencha todos os campos.');
  } else if (username === 'admin' && password === 'admin') {
    alert('Bem-vindo, administrador!');
    window.location.href = 'index.html';
  } else {
    alert('Usuário ou senha incorretos.');
  }
});


