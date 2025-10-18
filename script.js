// Simple script to handle form submission (since we don't have a backend)
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Stop the form from doing a default submission
    
    // Check if the required fields are filled (basic check)
    const name = this.querySelector('input[type="text"]').value;
    const email = this.querySelector('input[type="email"]').value;
    const message = this.querySelector('textarea').value;
    
    if (name && email && message) {
        alert("Message Sent! (Note: This is a placeholder alert. You'd need a backend service to actually receive the message.)");
        this.reset(); // Clear the form
    } else {
        alert("Please fill in all required fields.");
    }
});

// You can add more complex JavaScript here later for scroll animations or a mobile menu.