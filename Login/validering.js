function validatePassword(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get the entered username and password
    let usernameInput = document.getElementById('username');
    let passwordInput = document.getElementById('password');
    let username = usernameInput.value;
    let password = passwordInput.value;
  
    // Check if the username and password match the expected values
    if (username === 'sharwarma' && password === 'Kebab') {
      // Redirect to the forside.html page
      window.location.href = '/undersider/forside.html';
    } else {
      alert('Invalid username or password. Please try again.');
      // Clear the input fields
      usernameInput.value = '';
      passwordInput.value = '';
      // Set focus to the username field
      usernameInput.focus();
    }
  }
  