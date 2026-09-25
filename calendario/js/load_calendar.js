// Script que carrega o calendário a partir de um arquivo CSV gerado pelo Google Sheets
document.addEventListener("DOMContentLoaded", () => {
  const sheetUrl = "./js/calendario2026.csv";

    fetch(sheetUrl)
        .then(response => response.text())
        .then(csvText => {
            // Quebra o texto em linhas
            const linhas = csvText.split('\n');

            // Começa a montar uma tabela do Bootstrap
            // A classe 'table' já obedece o modo dark/light do Bootstrap se configurado
            let html = '<table class="table table-striped table-hover">';

            linhas.forEach((linha, index) => {
                // Quebra a linha em colunas separadas por vírgula
                const colunas = linha.split(',');

                if (index === 0) {
                    // É a primeira linha (Cabeçalho da planilha)
                    html += '<thead><tr>';
                    colunas.forEach(col => html += `<th>${col}</th>`);
                    html += '</tr></thead><tbody>';
                } else {
                    // São os dados do calendário
                    html += '<tr>';
                    colunas.forEach(col => html += `<td>${col}</td>`);
                    html += '</tr>';
                }
            });

            html += '</tbody></table>';

            // Joga o HTML gerado dentro da página
            document.getElementById('tabela-calendario').innerHTML = html;
        })
        .catch(error => {
            console.error("Erro ao carregar a planilha: ", error);
            document.getElementById('tabela-calendario').innerHTML = '<p class="text-danger">Erro ao carregar o calendário.</p>';
        });
});
