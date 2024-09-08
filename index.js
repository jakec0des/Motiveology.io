document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('calculator-form');
    const resultsTable = document.getElementById('results');
    const resultsBody = resultsTable.querySelector('tbody');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const pr = parseFloat(document.getElementById('pr').value);
        const reps = parseInt(document.getElementById('reps').value);

        if (isNaN(pr) || isNaN(reps) || reps < 1) {
            alert('Please enter valid numbers.');
            return;
        }

        // Clear previous results
        resultsBody.innerHTML = '';

        // Generate warmup sets
        const warmups = [];
        for (let i = 1; i <= 5; i++) {
            const warmup = ((pr * 0.2) * i).toFixed(2); // Adjust formula if needed
            warmups.push(warmup);
        }

        // Add results to table
        const row = document.createElement('tr');
        const cells = [
            `${reps} reps`,
            ...warmups,
            pr.toFixed(2)
        ];

        cells.forEach(cellText => {
            const cell = document.createElement('td');
            cell.textContent = cellText;
            row.appendChild(cell);
        });

        resultsBody.appendChild(row);
        resultsTable.style.display = 'table'; // Show results table
    });

    // Handle Enter key for form submission
    form.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            form.dispatchEvent(new Event('submit'));
        }
    });
});










