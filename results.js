window.onload = function() {
    // Parse the query string to get the data
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const dataString = urlParams.get('data');
    if (dataString) {
        const results = JSON.parse(decodeURIComponent(dataString));
        displayResults(results);
    } else {
        document.getElementById('results').innerHTML = 'No data available.';
    }
};

function displayResults(weeks) {
    const resultsDiv = document.getElementById('results');
    let html = '<table><thead><tr><th>Week</th><th>10 Reps</th><th>6 Reps</th><th>1 Rep</th><th>1 Rep + 10</th><th>1 Rep + 15</th><th>PR</th></tr></thead><tbody>';

    weeks.forEach(week => {
        html += `<tr>
            <td>Week ${week.week}</td>
            <td>${week.warmup1} lbs</td>
            <td>${week.warmup2} lbs</td>
            <td>${week.warmup3} lbs</td>
            <td>${week.warmup4} lbs</td>
            <td>${week.warmup5} lbs</td>
            <td>${week.pr} lbs</td>
        </tr>`;
    });

    html += '</tbody></table>';
    resultsDiv.innerHTML = html;
}

