        // Função para preencher os campos com os dados do localStorage
        window.onload = function() {
            const professorData = JSON.parse(localStorage.getItem('professorData'));

            if (professorData) {
                document.getElementById("nome").value = professorData.nome || '';
                document.getElementById("email").value = professorData.email || '';
                document.getElementById("tipo-contrato").value = professorData.tipoContrato || '';
                document.getElementById("rg").value = professorData.rg || '';
                document.getElementById("contato").value = professorData.contato || '';
                document.getElementById("matricula").value = professorData.matricula || '';
            }
        };