document.getElementById('contactForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const formData = new FormData(this);
    const formDataObj = Object.fromEntries(formData.entries());

    try {
        const response = await fetch('/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formDataObj)
        });

        if (!response.ok) {
            throw new Error('Network response was not ok.');
        }

        const result = await response.json();
        document.getElementById('formMessage').textContent = result.message;
        this.reset(); // Clear the form
    } catch (error) {
        console.error('Error:', error);
        document.getElementById('formMessage').textContent = 'An error occurred, please try again later.';
    }
});
