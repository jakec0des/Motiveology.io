function calculateWarmups() {
    const prMax = parseFloat(document.getElementById('pr-max').value);
    if (isNaN(prMax) || prMax <= 0) {
        alert('Please enter a valid 1 Rep Max (PR).');
        return;
    }

    const resultsTable = document.getElementById('results-table');
    resultsTable.innerHTML = ''; // Clear previous results

    for (let week = 1; week <= 8; week++) {
        const pr = prMax + (week - 1) * 5; // PR for each week, incremented by 5

        // Calculations
        const warmup1 = Math.round((pr / 2) / 5) * 5;
        const warmup2 = Math.round((pr * 0.05) / 5) * 5;
        const warmup3 = Math.round((pr * 0.93) / 5) * 5;
        const warmup4 = warmup3 + 10;
        const warmup5 = warmup4 + 5;

        // Insert into table
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>Week ${week}</td>
            <td>${warmup1} lbs</td>
            <td>${warmup2} lbs</td>
            <td>${warmup3} lbs</td>
            <td>${warmup4} lbs</td>
            <td>${warmup5} lbs</td>
        `;
        resultsTable.appendChild(row);
    }

    document.getElementById('results').style.display = 'block';
}




