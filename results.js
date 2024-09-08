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
        const warmup1 = pr - 0.10 * pr;
        const warmup2 = pr - 0.20 * pr;
        const warmup3 = pr - 0.30 * pr;
        const warmup4 = pr - 0.40 * pr;
        const warmup5 = pr - 0.50 * pr;
        const warmup6 = pr - 0.60 * pr;

        resultsHtml += `
            <div class="week-container">
                <h2>Week ${week}</h2>
                <div class="warmup-list">
                    <div class="warmup-item">1 Rep Warmup 1: ${warmup1.toFixed(2)} lbs</div>
                    <div class="warmup-item">1 Rep Warmup 2: ${warmup2.toFixed(2)} lbs</div>
                    <div class="warmup-item">1 Rep Warmup 3: ${warmup3.toFixed(2)} lbs</div>
                    <div class="warmup-item">1 Rep Warmup 4: ${warmup4.toFixed(2)} lbs</div>
                    <div class="warmup-item">1 Rep Warmup 5: ${warmup5.toFixed(2)} lbs</div>
                    <div class="warmup-item">1 Rep Warmup 6: ${warmup6.toFixed(2)} lbs</div>
                </div>
            </div>
        `;

        pr += warmupIncrement;
    }

    document.getElementById('results').innerHTML = resultsHtml;
});



