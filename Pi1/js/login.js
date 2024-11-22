function validateLogin(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Definindo as credenciais para os usuários
    const users = [
        { email: 'ronaldo@gmail.com', password: 'senha123', userType: 'admin' },
        { email: 'marta@gmail.com', password: 'senha123', userType: 'professor', professorData: { 
            nome: 'Marta Silva',
            email: 'marta@gmail.com',
            tipoContrato: 'estagio_supervisionado',
            rg: '123456789',
            contato: '987654321',
            matricula: '20230001',
        }}
    ];

    // Variáveis para controle de login
    let isValidLogin = false;
    let userType = '';
    let professorData = null;  // Variável para armazenar os dados do professor

    // função pra verificar se é um email
    function isValidEmail(email) {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return emailRegex.test(email);
    }

    // vendo se o email é valido
    if (!isValidEmail(email)) {
        alert("Por favor, insira um e-mail válido.");
        return; // Impede o envio do formulário se o e-mail não for válido
    }

    // vendo se o email e a senha corresponde
    for (let user of users) {
        if (email === user.email && password === user.password) {
            isValidLogin = true;
            userType = user.userType;  // Define o tipo de usuário (admin ou professor)
            if (userType === 'professor') {
                professorData = user.professorData;  // Armazenar os dados do professor
            }
            break;  
        }
    }

    // Se o login for válido, armazena o tipo de usuário e os dados do professor no localStorage
    if (isValidLogin) {
        localStorage.setItem('userType', userType);  
        if (professorData) {
            localStorage.setItem('professorData', JSON.stringify(professorData));  // Armazena os dados do professor
        }
        window.location.href = 'pages/dashboard.html';  
    } else {
        alert("E-mail ou senha inválidos. Tente novamente.");
    }
}
