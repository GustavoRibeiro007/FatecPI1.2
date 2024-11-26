
    document.getElementById('unid').addEventListener('change', filterTable);
    document.getElementById('tip').addEventListener('change', filterTable);
    document.getElementById('numero').addEventListener('input', filterTable);
    document.getElementById('ano').addEventListener('input', filterTable);

    function filterTable() {
      const unidadeFilter = document.getElementById('unid').value.toLowerCase();
      const tipoFilter = document.getElementById('tip').value.toLowerCase();
      const numeroFilter = document.getElementById('numero').value.toLowerCase();
      const anoFilter = document.getElementById('ano').value.toLowerCase();

      const rows = document.querySelectorAll('#table tbody tr');
      
      rows.forEach(row => {
        const unidade = row.cells[0].textContent.toLowerCase();
        const tipo = row.cells[2].textContent.toLowerCase();
        const numero = row.cells[1].textContent.toLowerCase();
        const ano = row.cells[6].textContent.toLowerCase();

        const matches = (
          (unidadeFilter === '' || unidade.includes(unidadeFilter)) &&
          (tipoFilter === '' || tipo.includes(tipoFilter)) &&
          (numeroFilter === '' || numero.includes(numeroFilter)) &&
          (anoFilter === '' || ano.includes(anoFilter))
        );

        row.style.display = matches ? '' : 'none';
      });
    }