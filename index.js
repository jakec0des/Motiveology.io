document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('calculator-form');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const pr = parseFloat(document.getElementById('pr').value);
        const warmupPR = parseFloat(document.getElementById('warmup-pr').value);

        // Calculate warmup sets
        const warmup1 = Math.round((pr / 2) / 5) * 5;
        const warmup2 = Math.round((pr * 0.05) / 5) * 5;
        const warmup3 = Math.round((pr * 0.93) / 5) * 5;
        const warmup4 = warmup3 + 10;
        const warmup5 = warmup4 + 5;
        const prFinal = pr;

        // Calculate weekly increments
        const weeks = [];
        for (let i = 0; i < 8; i++) {
            weeks.push({
                week: i + 1,
                warmup1: warmup1,
                warmup2: warmup2,
                warmup3: warmup3,
                warmup4: warmup4,
                warmup5: warmup5,
                pr: prFinal
            });

            // Increment for next week
            warmup1 += 5;
            warmup2 += 5;
            warmup3 += 5;
            warmup4 += 5;
            warmup5 += 5;
            prFinal += 5;
        }

        // Save results to local storage
        localStorage.setItem('weeks', JSON.stringify(weeks));

        // Redirect to results page
        window.location.href = 'results.html';
    });
});










