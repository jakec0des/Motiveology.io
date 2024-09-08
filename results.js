document.addEventListener('DOMContentLoaded', () => {
    const weeks = JSON.parse(localStorage.getItem('weeks'));
    const tableBody = document.querySelector('#results-table tbody');

    weeks.forEach(week => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${week.week}</td>
            <td>${week.warmup1} lbs</td>
            <td>${week.warmup2} lbs</td>
            <td>${week.warmup3} lbs</td>
            <td>${week.warmup4} lbs</td>
            <td>${week.warmup5} lbs</td>
            <td>${week.pr} lbs</td>
        `;
        tableBody.appendChild(row);
    });
});


