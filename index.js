document.getElementById('calculator-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const pr = parseFloat(document.getElementById('pr').value);

    if (isNaN(pr) || pr <= 0) {
        alert('Please enter a valid PR.');
        return;
    }

    // Redirect to results page with PR value
    window.location.href = `results.html?pr=${pr}`;
});














