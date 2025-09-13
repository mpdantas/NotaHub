document.addEventListener('DOMContentLoaded', function() {
    const monthYearDisplay = document.getElementById('current-month-year');
    const calendarGrid = document.getElementById('calendar-grid');
    const prevMonthButton = document.getElementById('prev-month');
    const nextMonthButton = document.getElementById('next-month');

    let currentDate = new Date();

    function renderCalendar() {
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth();

        // Obtém o nome do mês em português
        const monthName = new Intl.DateTimeFormat('pt-BR', { month: 'long' }).format(currentDate);
        monthYearDisplay.textContent = `${monthName.charAt(0).toUpperCase() + monthName.slice(1)} ${year}`;

        // Limpa o grid do calendário
        calendarGrid.innerHTML = '';

        // Calcula o primeiro dia e o último dia do mês
        const firstDayOfMonth = new Date(year, month, 1).getDay();
        const lastDayOfMonth = new Date(year, month + 1, 0).getDate();
        const today = new Date();
        const currentDay = today.getDate();
        const currentMonth = today.getMonth();
        const currentYear = today.getFullYear();

        // Adiciona espaços vazios para alinhar o primeiro dia da semana
        for (let i = 0; i < firstDayOfMonth; i++) {
            const emptySpan = document.createElement('span');
            calendarGrid.appendChild(emptySpan);
        }

        // Adiciona os dias do mês
        for (let day = 1; day <= lastDayOfMonth; day++) {
            const daySpan = document.createElement('span');
            daySpan.textContent = day;
            
            // Verifica se é o dia atual
            if (day === currentDay && month === currentMonth && year === currentYear) {
                daySpan.classList.add('current-day');
            }
            calendarGrid.appendChild(daySpan);
        }
    }

    // Navegação do calendário
    prevMonthButton.addEventListener('click', () => {
        currentDate.setMonth(currentDate.getMonth() - 1);
        renderCalendar();
    });

    nextMonthButton.addEventListener('click', () => {
        currentDate.setMonth(currentDate.getMonth() + 1);
        renderCalendar();
    });

    // Renderiza o calendário inicial
    renderCalendar();
});