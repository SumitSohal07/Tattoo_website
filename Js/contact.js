document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        // Perform the form submission
        fetch(form.action, {
            method: form.method,
            body: new FormData(form),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // Handle the response if needed
            console.log(data);

            // Show success alert
            alert('Form submitted successfully!');

            // Reset the form after submission
            form.reset();
        })
        .catch(error => {
            console.error('Error:', error);
            alert('There was a problem with the submission. Please try again.');
        });
    });
});