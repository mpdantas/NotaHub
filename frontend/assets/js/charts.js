document.addEventListener('DOMContentLoaded', function() {
    // Objeto com dados simulados para cada seguradora
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

    const labels = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
    
    // Calcula a soma total de cada seguradora
    const totaisSeguradoras = {};
    for (const seguradora in dadosPorSeguradora) {
        totaisSeguradoras[seguradora] = dadosPorSeguradora[seguradora].reduce((soma, valor) => soma + valor, 0);
    }

    // Encontra a seguradora com o maior movimento
    let maiorTotal = 0;
    let seguradoraMaiorMovimento = '';
    for (const seguradora in totaisSeguradoras) {
        if (totaisSeguradoras[seguradora] > maiorTotal) {
            maiorTotal = totaisSeguradoras[seguradora];
            seguradoraMaiorMovimento = seguradora;
        }
    }
    
    // Mapeia os dados para o formato do Chart.js, aplicando a cor de destaque
    const datasets = Object.keys(dadosPorSeguradora).map(seguradora => {
        // Define a cor da linha: azul para o maior movimento, cinza para os outros
        const corLinha = seguradora === seguradoraMaiorMovimento ? 'rgb(54, 162, 235)' : 'rgb(150, 150, 150)';
        
        return {
            label: document.querySelector(`option[value="${seguradora}"]`).textContent,
            backgroundColor: corLinha,
            borderColor: corLinha,
            data: dadosPorSeguradora[seguradora],
            fill: false,
            hidden: true // Oculta as linhas por padrão
        };
    });
    
    // Adiciona o conjunto de dados para "Todas as Seguradoras"
    const dadosTotais = labels.map((mes, index) => {
        return Object.values(dadosPorSeguradora).reduce((soma, dados) => soma + dados[index], 0);
    });
    datasets.push({
        label: 'Evolução Anual (Todas as Seguradoras)',
        backgroundColor: 'rgb(54, 162, 235)',
        borderColor: 'rgb(54, 162, 235)',
        data: dadosTotais,
        fill: false,
        hidden: false // Mostra a linha por padrão
    });

    // Configuração do gráfico
    const config = {
        type: 'line',
        data: {
            labels: labels,
            datasets: datasets
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Evolução Mensal'
                }
            }
        }
    };

    // Renderiza o gráfico
    const ctx = document.getElementById('evolucao-mensal');
    const myChart = new Chart(ctx, config);

    // Lógica para filtrar o gráfico por seguradora
    const seguradoraGraficoSelect = document.getElementById('seguradora-grafico');
    seguradoraGraficoSelect.addEventListener('change', function() {
        const seguradoraSelecionada = this.value;
        
        myChart.data.datasets.forEach(dataset => {
            if (seguradoraSelecionada === '') {
                // Mostra a linha total, oculta as outras
                dataset.hidden = dataset.label.includes('Todas as Seguradoras') ? false : true;
            } else {
                // Mostra apenas a linha da seguradora selecionada, oculta as outras
                dataset.hidden = dataset.label.includes(seguradoraSelecionada) ? false : true;
            }
        });

        // Atualiza o gráfico na tela
        myChart.update();
    });
});