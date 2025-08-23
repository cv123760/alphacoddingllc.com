document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('payment-form');
    const cardNumberInput = document.getElementById('card-number');
    const expiryDateInput = document.getElementById('expiry-date');

    // Auto-format card number input
    cardNumberInput.addEventListener('input', (event) => {
        let { value } = event.target;
        // Remove all non-digit characters
        value = value.replace(/\D/g, '');
        // Add a space every 4 digits
        value = value.replace(/(\d{4})(?=\d)/g, '$1 ');
        // Limit to 19 characters (16 digits + 3 spaces)
        event.target.value = value.slice(0, 19);
    });

    // Auto-format expiration date input
    expiryDateInput.addEventListener('input', (event) => {
        let { value } = event.target;
        // Remove all non-digit characters
        value = value.replace(/\D/g, '');
        // Add a slash after the first 2 digits
        if (value.length >= 2) {
            value = `${value.slice(0, 2)}/${value.slice(2, 4)}`;
        }
        // Limit to 5 characters (MM/YY)
        event.target.value = value.slice(0, 5);
    });

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent default form submission

        const cardNumber = cardNumberInput.value.replace(/\s/g, '');
        const expiryDate = expiryDateInput.value;
        const cvv = document.getElementById('cvv').value;
        const cardName = document.getElementById('card-name').value;

        // Basic validation
        if (cardNumber.length !== 16 || isNaN(cardNumber)) {
            alert('Please enter a valid 16-digit card number.');
            return;
        }

        const [month, year] = expiryDate.split('/');
        const currentYear = new Date().getFullYear() % 100;
        const currentMonth = new Date().getMonth() + 1;

        if (!month || !year || parseInt(month) > 12 || parseInt(year) < currentYear || (parseInt(year) === currentYear && parseInt(month) < currentMonth)) {
            alert('Please enter a valid expiration date (MM/YY).');
            return;
        }

        if (cvv.length < 3 || cvv.length > 4 || isNaN(cvv)) {
            alert('Please enter a valid 3 or 4 digit CVV.');
            return;
        }

        // Simulate a successful payment
        console.log('Payment Data:', {
            cardNumber,
            expiryDate,
            cvv,
            cardName
        });
        alert('Payment successful! Thank you for your purchase.');

        // Reset the form after submission
        form.reset();
    });
});