// Parse URL parameters to get PR and warmups
function getQueryParams() {
    const params = new URLSearchParams(window.location.search);
    return {
        pr: parseFloat(params.get('pr')),
        warmup1: parseFloat(params.get('warmup1')),
        warmup2: parseFloat(params.get('warmup2')),
        warmup3: parseFloat(params.get('warmup3')),
        warmup4: parseFloat(params.get('warmup4')),
        warmup5: parseFloat(params.get('warmup5'))
    };
}

function generateResultsTable(pr, warmups) {
    let resultsHTML = '<h2>Warmup Sets</h2>';
    resultsHTML += '<table><thead><tr><th>Week</th><th>Warmup 1</th><th>Warmup 2</th><th>Warmup 3</th><th>Warmup 4</th><th>Warmup 5</th><th>PR</th></tr></thead><tbody>';

    for (let week = 1; week <= 8; week++) {
        const weekWarmup3 = warmups.warmup3 + (week - 1) * 5;
        const weekWarmup4 = weekWarmup3 + 10;
        const weekWarmup5 = weekWarmup4 + 5;
        const weekPR = pr + (week - 1) * 5;

        resultsHTML += `<tr>
            <td>Week ${week}</td>
            <td>${warmups.warmup1} lbs</td>
            <td>${warmups.warmup2} lbs</td>
            <td>${weekWarmup3} lbs</td>
            <td>${weekWarmup4} lbs</td>
            <td>${weekWarmup5} lbs</td>
            <td>${weekPR} lbs</td>
        </tr>`;
    }

    resultsHTML += '</tbody></table>';
    return resultsHTML;
}

document.addEventListener('DOMContentLoaded', function() {
    const params = getQueryParams();

    if (!params.pr) {
        document.getElementById('results').innerHTML = '<p>Error: No PR value provided.</p>';
        return;
    }

    const warmups = {
        warmup1: params.warmup1,
        warmup2: params.warmup2,
        warmup3: params.warmup3,
        warmup4: params.warmup4,
        warmup5: params.warmup5
    };

    const resultsHTML = generateResultsTable(params.pr, warmups);
    document.getElementById('results').innerHTML = resultsHTML;
});


