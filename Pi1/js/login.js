function validateLogin(event) {
    event.preventDefault();

    const email = document.getElementById('email').value; 
    const password = document.getElementById('password').value;  

    // definindo as credencias para os usuarios 
    const users = [
        { email: 'admin@gmail.com', password: 'admin123', userType: 'admin' },
        { email: 'professor@gmail.com', password: 'prof123', userType: 'professor' }
    ];

    // Variáveis para controle de login
    let isValidLogin = false;
    let userType = '';

    function isValidEmail(email) {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return emailRegex.test(email);
    }

    // verificando se o email é válido
    if (!isValidEmail(email)) {
        alert("Por favor, insira um e-mail válido.");
        return; // Impede o envio do formulário se o e-mail não for válido
    }

    // Verifica se o e-mail existe e a senha corresponde
    for (let user of users) {
        if (email === user.email && password === user.password) {
            isValidLogin = true;
            userType = user.userType;  // Define o tipo de usuário (admin ou professor)
            break;  // Encerra o loop assim que encontrar o usuário correspondente
        }
    }

    // Se o login for válido, salva o tipo de usuário no localStorage e redireciona
    if (isValidLogin) {
        localStorage.setItem('userType', userType);  // Armazena o tipo de usuário no localStorage
        window.location.href = 'pages/dashboard.html';  // Redireciona para o dashboard
    } else {
        alert("E-mail ou senha inválidos. Tente novamente.");
    }
}
