document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const pr = parseFloat(urlParams.get('pr'));

    if (isNaN(pr)) {
        document.querySelector('.results-container').innerHTML = '<p>Error: Invalid PR value.</p>';
        return;
    }

    let currentPR = pr;
    let resultsHTML = '';

    for (let week = 1; week <= 8; week++) {
        const warmupSet1 = Math.round(0.50 * currentPR / 5) * 5;
        const warmupSet2 = Math.round(0.85 * currentPR / 5) * 5;
        const warmupSet3 = Math.round(0.93 * currentPR / 5) * 5;
        const warmupSet4 = Math.round((warmupSet3 + 10) / 5) * 5;
        const warmupSet5 = Math.round((warmupSet4 + 5) / 5) * 5;

        resultsHTML += `
            <div class="week">
                <h2>WEEK ${week}: ${currentPR}</h2>
                <p>Warm-up Set 1 (10 Reps): ${warmupSet1}</p>
                <p>Warm-up Set 2 (6 Reps): ${warmupSet2}</p>
                <p>Warm-up Set 3 (1 Rep): ${warmupSet3}</p>
                <p>Warm-up Set 4 (1 Rep): ${warmupSet4}</p>
                <p>Warm-up Set 5 (1 Rep): ${warmupSet5}</p>
                <p>PR Attempt: ${currentPR}</p>
            </div>
        `;

        currentPR += 5;
    }

    document.querySelector('.results-container').innerHTML = resultsHTML;
});







