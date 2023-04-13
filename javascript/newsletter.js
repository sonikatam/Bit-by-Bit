const form = document.getElementById('newsletter-form');
const emailInput = document.getElementById('email-input');
const submitButton = document.getElementById('submit-button');

form.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent the default form submission behavior
  
  // Validate the email input
  if (!emailInput.value || !emailInput.value.includes('@')) {
    alert('Please enter a valid email address.');
    return;
  }
  
  // Submit the form data to the server (replace the URL with your own endpoint)
  fetch('https://example.com/newsletter', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email: emailInput.value })
  })
  .then(response => {
    if (response.ok) {
      alert('Thank you for subscribing to our newsletter!');
      emailInput.value = ''; // Clear the email input field
    } else {
      alert('Something went wrong. Please try again later.');
    }
  })
  .catch(error => {
    alert('Something went wrong. Please try again later.');
  });
});
