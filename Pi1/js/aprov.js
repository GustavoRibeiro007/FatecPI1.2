function approveStatus(inscricao) {
    // Atualiza o status na tabela
    document.getElementById('status-' + inscricao).innerText = 'Aprovado';
    // Exibe a notificação
    alert("Inscrição aprovada enviada");
}

function rejectStatus(inscricao) {
    // Solicita o motivo de reprovação
    var motivo = prompt("Informe o motivo da reprovação:");
    if (motivo) {
        // Atualiza o status na tabela e adiciona o motivo
        document.getElementById('status-' + inscricao).innerText = 'Reprovado ';
        // Exibe a notificação
        alert("Inscrição reprovada. Motivo: " + motivo);
    }
}