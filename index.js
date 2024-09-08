document.getElementById('pr-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const pr = parseFloat(document.getElementById('pr').value);

    if (isNaN(pr) || pr <= 0) {
        alert('Please enter a valid PR.');
        return;
    }

    const warmup1 = Math.round((pr / 2) / 5) * 5;
    const warmup2 = Math.round((pr * 0.05) / 5) * 5;
    const warmup3 = Math.round((pr * 0.93) / 5) * 5;
    const warmup4 = warmup3 + 10;
    const warmup5 = warmup4 + 5;

    let resultsHTML = '<h2>Warmup Sets</h2>';
    resultsHTML += '<table><thead><tr><th>Week</th><th>Warmup 1</th><th>Warmup 2</th><th>Warmup 3</th><th>Warmup 4</th><th>Warmup 5</th><th>PR</th></tr></thead><tbody>';

    for (let week = 1; week <= 8; week++) {
        const weekWarmup1 = warmup1;
        const weekWarmup2 = warmup2;
        const weekWarmup3 = warmup3 + (week - 1) * 5;
        const weekWarmup4 = weekWarmup3 + 10;
        const weekWarmup5 = weekWarmup4 + 5;
        const weekPR = pr + (week - 1) * 5;

        resultsHTML += `<tr>
            <td>Week ${week}</td>
            <td>${weekWarmup1} lbs</td>
            <td>${weekWarmup2} lbs</td>
            <td>${weekWarmup3} lbs</td>
            <td>${weekWarmup4} lbs</td>
            <td>${weekWarmup5} lbs</td>
            <td>${weekPR} lbs</td>
        </tr>`;
    }

    resultsHTML += '</tbody></table>';
    document.getElementById('results').innerHTML = resultsHTML;
});













