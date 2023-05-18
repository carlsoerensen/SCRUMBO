
// Example JavaScript functionality
document.addEventListener('DOMContentLoaded', function() {
    // Add a click event listener to a specific element
    var element = document.querySelector('.menu a');
    element.addEventListener('click', function(event) {
      // Prevent the default behavior of the link
      event.preventDefault();
      
      // Perform any desired actions when the link is clicked
      console.log('Link clicked!');
    });
  });
  