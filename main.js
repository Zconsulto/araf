function sendEmail() {
    const userEmail = document.getElementById("email").value;
    const subject = "Customer wants to Contact US";

    fetch('https://zconsulto.github.io/.herokuapp.com/send-email', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: 'ashorbagy@zconsulto.com',
            subject: subject,
            message: userEmail  
        })
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        alert(data);
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Email sending failed. Please try again later.');
    });
}
