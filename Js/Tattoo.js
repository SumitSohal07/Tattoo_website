document.addEventListener('DOMContentLoaded', () => {
  const bookButton = document.querySelector('button');
  bookButton.addEventListener('click', function() {
      // Redirect the user to the contact page
      window.location.href = "contact.html";
  });

  const navToggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.nav');

  navToggle.addEventListener('click', () => {
      nav.classList.toggle('nav-open');
  });
});

// Define the function that will be called when the "Book Now" button is clicked
function redirectToContactPage() {
  window.location.href = "contact.html";
}




// Uncomment and use this part if needed in the future
// const form = document.querySelector('form');
// form.addEventListener('submit', function(event) {
//   event.preventDefault();
//   const formData = new FormData(form);
//   const xhr = new XMLHttpRequest();
//   xhr.open('POST', '/submit-your-inquiry');
//   xhr.send(formData);
//   alert('Your inquiry has been submitted successfully!');
//   form.reset();
// });

const newsletterForm = document.querySelector('.newsletter form');
const emailInput = document.querySelector('.newsletter input[type="email"]');
const submitButton = document.querySelector('.newsletter button[type="submit"]');

newsletterForm.addEventListener('submit', (event) => {
  event.preventDefault();
  if (emailInput.value === '') {
    alert('Please enter your email address.');
    return;
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailInput.value)) {
    alert('Please enter a valid email address.');
    return;
  }
  // Send the form data to the server
  // You can use fetch() or XMLHttpRequest() to send the data
  submitButton.disabled = true;
});
