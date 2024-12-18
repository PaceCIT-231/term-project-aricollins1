document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('roommateForm').addEventListener('submit', function(event) {
        event.preventDefault();
        var form = this;
        if (!form.checkValidity()) {
            alert("Please fill out all required fields correctly.");
            return;
        }

        var messageDiv = document.getElementById('message');
        if (messageDiv) {
            messageDiv.textContent = "Thank you for your submission. We are looking for your new roomie and will give you results soon!";
            form.reset();
        } else {
            console.error('The message element does not exist!');
        }
    });
});
if (darkModeToggle) {
    darkModeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
    });
}

