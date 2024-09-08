document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('pr-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const prInput = document.getElementById('pr');
        const pr = parseFloat(prInput.value);

        // Redirect to results page with PR as a URL parameter
        window.location.href = `results.html?pr=${pr}`;
    });
});



















