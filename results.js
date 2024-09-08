document.addEventListener("DOMContentLoaded", function() {
    const urlParams = new URLSearchParams(window.location.search);
    const pr = parseFloat(urlParams.get('pr'));

    if (isNaN(pr) || pr <= 0) {
        document.getElementById('results').innerHTML = 'Invalid PR value.';
        return;
    }

    const warmupIncrement = 5; // Increment for warm-ups
    const numWeeks = 8; // Number of weeks

    let resultsHtml = '';

    for (let week = 1; week <= numWeeks; week++) {
        const warmup1 = pr - 0.10 * pr; // Warm-up Set 1 (10 Reps)
        const warmup2 = pr - 0.20 * pr; // Warm-up Set 2 (6 Reps)
        const warmup3 = pr - 0.30 * pr; // Warm-up Set 3 (1 Rep)
        const warmup4 = pr - 0.40 * pr; // Warm-up Set 4 (1 Rep)
        const warmup5 = pr - 0.50 * pr; // Warm-up Set 5 (1 Rep)

        resultsHtml += `
            <div class="week-container">
                <h2>Week ${week}: ${pr.toFixed(2)} lbs</h2>
                <div class="warmup-list">
                    <p>Warm-up Set 1 (10 Reps): ${warmup1.toFixed(2)} lbs</p>
                    <p>Warm-up Set 2 (6 Reps): ${warmup2.toFixed(2)} lbs</p>
                    <p>Warm-up Set 3 (1 Rep): ${warmup3.toFixed(2)} lbs</p>
                    <p>Warm-up Set 4 (1 Rep): ${warmup4.toFixed(2)} lbs</p>
                    <p>Warm-up Set 5 (1 Rep): ${warmup5.toFixed(2)} lbs</p>
                    <p>PR Attempt: ${pr.toFixed(2)} lbs</p>
                </div>
            </div>
        `;

        pr += warmupIncrement;
    }

    document.getElementById('results').innerHTML = resultsHtml;
});




