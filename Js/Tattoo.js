const bookButton = document.querySelector('button');
bookButton.addEventListener('click', function() {
  // Redirect the user to the contact page
  window.location.href = '../New folder (2)/contact.html';
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
const newsletterForm = document.querySelector('.newsletter form');
const emailInput = document.querySelector('.newsletter input[type="email"]');
const submitButton = document.querySelector('.newsletter button[type="submit"]');

newsletterForm.addEventListener('submit', (event) => {
  event.preventDefault();

  // Check if the email input is empty
  // if (emailInput.value === '') {
  //   alert('Please enter your email address.');
  //   return;
  // }

  // Check if the email input is valid
  // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  // if (!emailRegex.test(emailInput.value)) {
  //   alert('Please enter a valid email address.');
  //   return;
  // }

  // Send the form data to the server
  // You can use fetch() or XMLHttpRequest() to send the data

  // Disable the submit button to prevent multiple submissions
  submitButton.disabled = true;
});