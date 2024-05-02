// Get the button element and add a click event listener
const bookButton = document.querySelector('button');
bookButton.addEventListener('click', function() {
  // Redirect the user to the booking page
  window.location.href = '../New folder (2)/index.html';
});

// Get the form element and add a submit event listener
const form = document.querySelector('form');
form.addEventListener('submit', function(event) {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Get the form data
  const formData = new FormData(form);

  // Send the form data to the server using AJAX
  const xhr = new XMLHttpRequest();
  xhr.open('POST', '/submit-your-inquiry');
  xhr.send(formData);

  // Show a success message to the user
  alert('Your inquiry has been submitted successfully!');

  // Clear the form fields
  form.reset();
});