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
        html: req.body.html,
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
