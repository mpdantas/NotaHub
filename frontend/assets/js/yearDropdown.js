document.addEventListener('DOMContentLoaded', function() {
    // Seleciona o menu dropdown de anos
    const anoSelect = document.getElementById('ano');

    // Define o ano inicial e o ano atual
    const anoInicial = 2012;
    const anoAtual = new Date().getFullYear();

    // Adiciona uma opção de placeholder
    const placeholder = document.createElement('option');
    placeholder.value = '';
    placeholder.textContent = 'Selecione o Ano';
    anoSelect.appendChild(placeholder);

    // Loop para preencher os anos dinamicamente
    for (let ano = anoAtual; ano >= anoInicial; ano--) {
        const option = document.createElement('option');
        option.value = ano;
        option.textContent = ano;
        anoSelect.appendChild(option);
    }
});