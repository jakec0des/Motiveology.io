function calculateWarmups() {
    const prMax = parseFloat(document.getElementById('pr-max').value);
    if (isNaN(prMax) || prMax <= 0) {
        alert("Please enter a valid 1 Rep Max (PR).");
        return;
    }

    const resultsTable = document.getElementById('results-table');
    resultsTable.innerHTML = ''; // Clear previous results

    for (let week = 1; week <= 8; week++) {
        // Calculate warmup values
        const warmup1 = Math.round(prMax / 2 / 5) * 5;
        const warmup2 = Math.round(prMax * 0.05 / 5) * 5;
        const warmup3 = Math.round(prMax * 0.93 / 5) * 5;
        const warmup4 = warmup3 + 10;
        const warmup5 = warmup4 + 5;
        const pr = prMax + (week - 1) * 5;

        // Add a row to the results table for the current week
        resultsTable.innerHTML += `
            <tr>
                <td>Week ${week}</td>
                <td>${warmup1} lbs</td>
                <td>${warmup2} lbs</td>
                <td>${warmup3} lbs</td>
                <td>${warmup4} lbs</td>
                <td>${warmup5} lbs</td>
                <td>${pr} lbs</td>
            </tr>
        `;

        // Update PR for the next week
        prMax += 5;
    }
}








