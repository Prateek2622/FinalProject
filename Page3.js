// Form validation and functionality
document.getElementById('company-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const companyName = document.getElementById('company-name').value;
    const contactPerson = document.getElementById('contact-person').value;

    if (companyName === '' || contactPerson === '') {
        alert('Please fill in all required fields.');
    } else {
        alert(`Thank you for registering, ${companyName}! Our team will contact ${contactPerson} shortly.`);
    }
});
