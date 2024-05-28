document.addEventListener('DOMContentLoaded', () => {
  // Add event listener to the "Book Now" button
  const bookButton = document.querySelector('.book-now');
  if (bookButton) {
    bookButton.addEventListener('click', function() {
      window.location.href = "contact.html";
    });
  }

  // Add event listener to the nav toggle button
  const navToggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('nav');

  if (navToggle && nav) {
    navToggle.addEventListener('click', () => {
      nav.classList.toggle('nav-open');
    });
  }

  // Function to show alert on form submission
  function notify() {
    alert("Query Submitted.");
  }

  // Handle newsletter form submission
  const newsletterForm = document.querySelector('.newsletter form');
  const emailInput = document.querySelector('.newsletter input[type="email"]');
  const submitButton = document.querySelector('.newsletter button[type="submit"]');

  if (newsletterForm && emailInput && submitButton) {
    newsletterForm.addEventListener('submit', (event) => {
      event.preventDefault(); // Prevent form from submitting normally

      if (emailInput.value === '') {
        alert('Please enter your email address.');
        return;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(emailInput.value)) {
        alert('Please enter a valid email address.');
        return;
      }

      // Show the notification alert
      notify();

      // Optionally reset the form
      newsletterForm.reset();
    });
  }
});
