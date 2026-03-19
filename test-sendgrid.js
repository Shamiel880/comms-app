// test-sendgrid.js
require('dotenv').config()
const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

sgMail.send({
  to:      'shamiel.simons@lemco.co.za',
  from:    'shamiel.simons@lemco.co.za',
  subject: 'LEMCO Priority OS — SendGrid test',
  text:    'Your SendGrid integration is working.',
  html:    '<p>Your <strong>SendGrid</strong> integration is working.</p>',
})
.then(() => console.log('✓ Email sent successfully'))
.catch(err => console.error('✗ Error:', err.response?.body || err))