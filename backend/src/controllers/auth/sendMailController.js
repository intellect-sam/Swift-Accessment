const transporter = require('../../config/emailConfig');
require('dotenv').config();

const sendMailController = async (userEmail) => {
  const mailOptions = {
    from: { name: 'Aluko O. Samuel', address: process.env.EMAIL_ADDRESS },
    to: userEmail,
    subject: 'Welcome to Our Platform',
    text: 'Thank you for registering on our platform. Enjoy your experience!',
    replyTo: 'noreply@example.com',
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending registration email:', error);
    } else {
      console.log('Registration email sent:', info.response);
    }
  });
};

module.exports = sendMailController;
