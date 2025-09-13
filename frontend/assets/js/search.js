document.addEventListener('DOMContentLoaded', function() {
    // 1. Seleciona os elementos do DOM
    const searchButton = document.getElementById('search-button');
    const seguradoraSelect = document.getElementById('seguradora-pesquisa');
    const totalNotasSpan = document.getElementById('total-notas');

    // 2. Adiciona um "ouvinte de evento" para o clique no botão
    searchButton.addEventListener('click', function() {
        // Pega o valor da seguradora selecionada
        const seguradoraSelecionada = seguradoraSelect.value;
        let valorTotal = 0;

        // 3. Lógica de busca simulada (substituiremos isso pelo backend depois)
        // Para fins de teste, cada seguradora terá um valor diferente
        if (seguradoraSelecionada === 'porto_seguro') {
            valorTotal = 15000;
        } else if (seguradoraSelecionada === 'bradesco_seguros') {
            valorTotal = 22500;
        } else if (seguradoraSelecionada === 'allianz_seguros') {
            valorTotal = 8000;
        } else if (seguradoraSelecionada === '') {
            // Se a opção "Todas as Seguradoras" for selecionada, mostramos um valor total
            valorTotal = 50000; 
        } else {
            // Para as outras seguradoras, um valor genérico
            valorTotal = 5000;
        }

        // 4. Formata o valor como moeda e atualiza a exibição
        const formattedValue = valorTotal.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        });

        totalNotasSpan.textContent = formattedValue;
    });
});