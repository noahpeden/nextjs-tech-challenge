import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const msg = {
        to: req.body.to,
        from: req.body.from,
        subject: req.body.subject,
        text: req.body.text,
        html: `
          <div style="background-color: #f5f5f5; padding: 20px;">
            <img src="https://imgur.com/YoApEvP alt="Logo" style="display: block; margin: 0 auto; width: 200px;">
            <div style="background-color: white; padding: 20px; margin-top: 20px;">
              <h1 style="color: #333333;">Hello ${req.body.to}</h1>
              <p style="color: #666666;">${req.body.text}</p>
              <p style="color: #666666;">Sincerely, ${req.body.from}</p>
            </div>
          </div>
        `,
      };

      await sgMail.send(msg);
      console.log('Email sent');
      return res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error(error);
      if (error.response) {
        console.error(error.response.body);
      }
      return res.status(500).json({ error: 'Error sending email' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
