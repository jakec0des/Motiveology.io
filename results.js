document.addEventListener('DOMContentLoaded', function() {
    // Retrieve PR from URL parameter
    const urlParams = new URLSearchParams(window.location.search);
    const pr = parseFloat(urlParams.get('pr'));

    // Function to round to the nearest 5 lbs
    function roundToNearest5(num) {
        return Math.round(num / 5) * 5;
    }

    // Function to generate warm-ups based on PR
    function generateWarmUps(pr) {
        const results = [];
        for (let week = 1; week <= 8; week++) {
            const weekPR = pr + (week - 1) * 5;
            const warmup1 = roundToNearest5(0.50 * weekPR);
            const warmup2 = roundToNearest5(0.85 * weekPR);
            const warmup3 = roundToNearest5(0.93 * weekPR);
            const warmup4 = roundToNearest5(warmup3 + 10);
            const warmup5 = roundToNearest5(warmup4 + 10);

            results.push({
                week: week,
                pr: weekPR,
                warmup1: `${warmup1} (10 Reps)`,
                warmup2: `${warmup2} (6 Reps)`,
                warmup3: `${warmup3} (1 Rep)`,
                warmup4: `${warmup4} (1 Rep)`,
                warmup5: `${warmup5} (1 Rep)`,
            });
        }
        return results;
    }

    // Generate and display the results
    const results = generateWarmUps(pr);
    const resultsContainer = document.getElementById('results-container');

    results.forEach(result => {
        const weekDiv = document.createElement('div');
        weekDiv.className = 'week';
        weekDiv.innerHTML = `
            <h2>WEEK ${result.week}: ${result.pr}</h2>
            <p>Warm-up Set 1: ${result.warmup1}</p>
            <p>Warm-up Set 2: ${result.warmup2}</p>
            <p>Warm-up Set 3: ${result.warmup3}</p>
            <p>Warm-up Set 4: ${result.warmup4}</p>
            <p>Warm-up Set 5: ${result.warmup5}</p>
        `;
        resultsContainer.appendChild(weekDiv);
    });
});







