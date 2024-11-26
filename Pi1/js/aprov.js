// Função para mudar o status para "Aprovado"
function approveStatus(inscricaoId) {
    // Abrir o modal de aprovação
    openApprovalModal(inscricaoId);
}

// Função para mudar o status para "Reprovado"
function rejectStatus(inscricaoId) {
    const motivo = prompt("Por favor, informe o motivo da reprovação:");
    
    if (motivo) {
        let statusCell = document.getElementById("status-" + inscricaoId);
        statusCell.textContent = "Reprovado";
        
        // Exibir o motivo da reprovação
        alert("Inscrição reprovada. Motivo: " + motivo);
    } else {
        alert("Você precisa informar um motivo para reprovar.");
    }
}

// Função para abrir o modal de aprovação
function openApprovalModal(inscricaoId) {
    // Exibir o modal
    document.getElementById('approvalModal').style.display = 'block';
    
    // Armazenar o ID da inscrição no modal
    document.getElementById('approvalForm').setAttribute('data-inscricao-id', inscricaoId);
    
    // Mostrar ou esconder o campo de horas com base na opção de aprovação
    const approvalTypeRadios = document.querySelectorAll('input[name="approvalType"]');
    
    // Inicializar a visibilidade do campo de horas
    document.getElementById('partialHoursSection').style.display = 'none'; // Ocultar a seção de horas inicialmente
    
    // Verificar o tipo de aprovação selecionado
    approvalTypeRadios.forEach(function(radio) {
        radio.addEventListener('change', function() {
            const partialHoursSection = document.getElementById('partialHoursSection');
            if (this.value === 'partial') {
                partialHoursSection.style.display = 'block'; // Exibir a seção de horas
            } else {
                partialHoursSection.style.display = 'none'; // Esconder a seção de horas
            }
        });
    });
}

// Função para fechar o modal
function closeModal() {
    document.getElementById('approvalModal').style.display = 'none';
}

// Função para enviar a aprovação
function submitApproval() {
    const form = document.getElementById('approvalForm');
    const inscricaoId = form.getAttribute('data-inscricao-id');
    const approvalType = document.querySelector('input[name="approvalType"]:checked').value;
    const hours = document.getElementById('hours').value;

    // Validação para aprovação parcial
    if (approvalType === 'partial') {
        // Verifica se as horas foram inseridas e se o campo não está vazio
        if (!hours || hours.trim() === "") {
            alert("Por favor, insira a quantidade de horas.");
            return;
        }

        // Converte o valor para número inteiro
        const hoursInt = parseInt(hours);

        // Verifica se as horas inseridas são um número válido e maior que 0
        if (isNaN(hoursInt) || hoursInt <= 0) {
            alert("Por favor, insira um número válido de horas.");
            return;
        }
    }

    let statusMessage = "";
    if (approvalType === 'partial') {
        // Aprovação parcial
        statusMessage = `Aprovação parcial de ${hours} horas confirmada.`;
    } else {
        // Aprovação total
        statusMessage = "Aprovação total confirmada.";
    }

    // Atualizar o status na tabela
    let statusCell = document.getElementById("status-" + inscricaoId);
    if (approvalType === 'partial') {
        statusCell.textContent = `Aprovado Parcialmente (${hours} horas)`;
    } else {
        statusCell.textContent = "Aprovado";
    }

    // Exibir a mensagem de confirmação
    alert(statusMessage);
    
    // Fechar o modal após a aprovação
    closeModal();
}
