document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const user = {
        email: email,
        password: password
    };

    console.log(JSON.stringify(user));
    alert('Login realizado com sucesso!');
});