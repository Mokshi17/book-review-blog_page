document.addEventListener('DOMContentLoaded', function() {
    const toggleButtons = document.querySelectorAll('.toggle-details');

    toggleButtons.forEach(button => {
        button.addEventListener('click', function() {
            const bookDetails = this.previousElementSibling;
            bookDetails.classList.toggle('show-details');
            if (bookDetails.classList.contains('show-details')) {
                this.textContent = 'Hide Details';
            } else {
                this.textContent = 'Toggle Details';
            }
        });
    });
});
