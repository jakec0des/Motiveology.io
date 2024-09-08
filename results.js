function calculateWarmups() {
    const prMax = parseFloat(document.getElementById('pr-max').value);
    const resultsTable = document.getElementById('results-table');
    
    if (isNaN(prMax) || prMax <= 0) {
        alert('Please enter a valid 1 Rep Max.');
        return;
    }
    
    let tableRows = '';
    
    for (let week = 1; week <= 8; week++) {
        const warmup1 = Math.round((prMax / 2) / 5) * 5;
        const warmup2 = Math.round((prMax * 0.05) / 5) * 5;
        const warmup3 = Math.round((prMax * 0.93) / 5) * 5;
        const warmup4 = warmup3 + 10;
        const warmup5 = warmup4 + 5;
        const pr = prMax + (week - 1) * 5;

        tableRows += `
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
    }

    resultsTable.innerHTML = tableRows;
}

