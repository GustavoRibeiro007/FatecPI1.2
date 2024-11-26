function filterTable() {
  // Obtém os valores dos filtros
  const tipoFilter = document.getElementById('tip').value.toLowerCase().trim(); // Pega o valor do filtro "Tipo HAE"
  const numeroFilter = document.getElementById('numero').value.toLowerCase().trim(); // Pega o valor do filtro "Número de inscrição"

  // Obtém todas as linhas da tabela (exceto o cabeçalho)
  const rows = document.querySelectorAll('table tbody tr');

  // Itera sobre cada linha da tabela
  rows.forEach(row => {
    // Acessa as células relevantes da linha
    const tipoText = row.cells[2].textContent.toLowerCase().trim(); // Tipo HAE (índice 2)
    const numeroText = row.cells[1].textContent.toLowerCase().trim(); // Número de Inscrição (índice 1)

    // Verifica se a linha corresponde aos filtros
    const tipoMatch = tipoFilter === 'selecione...' || tipoText.includes(tipoFilter);
    const numeroMatch = numeroFilter === '' || numeroText.includes(numeroFilter);

    // Exibe ou oculta a linha dependendo da correspondência com os filtros
    if (tipoMatch && numeroMatch) {
      row.style.display = '';  // Exibe a linha
    } else {
      row.style.display = 'none';  // Oculta a linha
    }
  });
}
