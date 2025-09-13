document.addEventListener('DOMContentLoaded', function() {
    // Objeto com os mesmos dados simulados do gráfico
    const dadosPorSeguradora = {
        'porto_seguro': [500, 700, 600, 900, 1100, 1000, 1200, 1400, 1300, 1500, 1450, 1600],
        'azul_seguros': [800, 900, 750, 1000, 1200, 1100, 1300, 1500, 1400, 1600, 1550, 1700],
        'bradesco_seguros': [400, 600, 500, 800, 900, 850, 1000, 1100, 1050, 1200, 1150, 1300],
        'allianz_seguros': [200, 300, 250, 400, 500, 450, 600, 700, 650, 800, 750, 900],
        'tokio_marine': [700, 800, 750, 900, 1000, 950, 1100, 1200, 1150, 1300, 1250, 1400],
        'aig_seguros': [100, 200, 150, 300, 400, 350, 500, 600, 550, 700, 650, 800],
        'hdi_seguros': [600, 700, 650, 800, 900, 850, 1000, 1100, 1050, 1200, 1150, 1300],
        'suhai_seguros': [300, 400, 350, 500, 600, 550, 700, 800, 750, 900, 850, 1000],
        'mapfre_seguros': [900, 1000, 950, 1100, 1200, 1150, 1300, 1400, 1350, 1500, 1450, 1600],
        'yeloow_seguros': [550, 650, 600, 750, 850, 800, 950, 1050, 1000, 1150, 1100, 1250]
    };

    // Função para calcular a soma total de um array
    function calcularSoma(array) {
        return array.reduce((soma, valor) => soma + valor, 0);
    }
    
    // Objeto para armazenar as somas mensais de todas as seguradoras
    const somaMensalTotal = {};
    for (let i = 0; i < 12; i++) {
        somaMensalTotal[i] = Object.values(dadosPorSeguradora).reduce((soma, dados) => soma + dados[i], 0);
    }

    // Calcula a soma total anual de todas as seguradoras
    const somaAnualTotal = calcularSoma(Object.values(somaMensalTotal));

    // Formata o valor como moeda e atualiza o painel
    document.getElementById('soma-anual').textContent = somaAnualTotal.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });

    // Para a soma mensal, vamos considerar o mês atual para fins de exemplo
    const mesAtual = new Date().getMonth(); // Retorna o mês de 0 a 11
    const valorMensalAtual = somaMensalTotal[mesAtual];
    
    document.getElementById('soma-mensal').textContent = valorMensalAtual.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });
});