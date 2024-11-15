    // Espera a página carregar completamente
    document.addEventListener('DOMContentLoaded', function() {
        const userType = localStorage.getItem('userType');  // Verifica o tipo de usuário armazenado

        // Verifica se o tipo de usuário existe e é válido
        if (userType === 'admin') {
            document.querySelector('.admin-section').style.display = 'block';  
        } else if (userType === 'professor') {
            document.querySelector('.professor-section').style.display = 'block';  
        } else {
            alert("Você não está autenticado.");
            window.location.href = 'login.html'; 
        }
    });