export default function requestInfoEmail(msg) {
  fetch('/api/send-email', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(msg),
  })
    .then((response) => {
      if (response.ok) {
        console.log('Email sent');
      } else {
        return response.json().then((data) => {
          throw new Error(data.error || 'Error sending email');
        });
      }
    })
    .catch((error) => {
      console.error(error);
    });
}
