document.getElementById('pr-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const pr = parseFloat(document.getElementById('pr').value);
    let resultsHTML = '';

    for (let week = 1; week <= 8; week++) {
        const weekPR = pr + (week - 1) * 5;
        
        const warmup1 = Math.round(0.5 * weekPR / 5) * 5;
        const warmup2 = Math.round(0.85 * weekPR / 5) * 5;
        const warmup3 = Math.round(0.93 * weekPR / 5) * 5;
        const warmup4 = Math.round((warmup3 + 1) / 5) * 5;
        const warmup5 = Math.round((warmup4 + 10) / 5) * 5;

        resultsHTML += `
            <div class="week">
                <h2>WEEK ${week}: ${weekPR}</h2>
                <p>Warm-up Set 1 (10 Reps): ${warmup1}</p>
                <p>Warm-up Set 2 (6 Reps): ${warmup2}</p>
                <p>Warm-up Set 3 (1 Rep): ${warmup3}</p>
                <p>Warm-up Set 4 (1 Rep): ${warmup4}</p>
                <p>Warm-up Set 5 (1 Rep): ${warmup5}</p>
                <p>PR Attempt: ${weekPR}</p>
            </div>
        `;
    }

    document.getElementById('results').innerHTML = resultsHTML;
});



















