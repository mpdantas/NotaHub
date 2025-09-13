document.addEventListener('DOMContentLoaded', function() {
    // Seleciona o campo de valor da nota fiscal pelo seu ID
    const valorInput = document.getElementById('valorNota');

    // Usa a biblioteca para aplicar a máscara de moeda brasileira
    VMasker(valorInput).maskMoney({
        // Prefixo para a moeda (opcional)
        prefix: 'R$ ',
        // Separador de milhar
        thousands: '.',
        // Separador decimal
        decimal: ',',
        // Precisão (número de casas decimais)
        precision: 2,
        // Inverte a máscara (útil para moedas)
        reverse: true
    });
});