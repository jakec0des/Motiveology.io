document.getElementById('calculate-btn').addEventListener('click', () => {
    const prMax = parseFloat(document.getElementById('pr-max').value);
    
    if (isNaN(prMax) || prMax <= 0) {
        alert('Please enter a valid PR (1 rep max).');
        return;
    }

    const resultsTableBody = document.getElementById('results-table').getElementsByTagName('tbody')[0];
    resultsTableBody.innerHTML = ''; // Clear previous results

    let currentPR = prMax;
    for (let week = 1; week <= 8; week++) {
        const warmupSet1 = Math.round((currentPR / 2) / 5) * 5;
        const warmupSet2 = Math.round((currentPR * 0.05) / 5) * 5;
        const warmupSet3 = Math.round((currentPR * 0.93) / 5) * 5;
        const warmupSet4 = warmupSet3 + 10;
        const warmupSet5 = warmupSet4 + 5;

        // Create a new row for the table
        const row = resultsTableBody.insertRow();
        row.insertCell().textContent = `Week ${week}`;
        row.insertCell().textContent = `10 reps at ${warmupSet1} lbs`;
        row.insertCell().textContent = `6 reps at ${warmupSet2} lbs`;
        row.insertCell().textContent = `1 rep at ${warmupSet3} lbs`;
        row.insertCell().textContent = `1 rep at ${warmupSet4} lbs`;
        row.insertCell().textContent = `1 rep at ${warmupSet5} lbs`;

        // Increment PR by 5 lbs for the next week
        currentPR += 5;
    }

    document.getElementById('results').style.display = 'block';
});



