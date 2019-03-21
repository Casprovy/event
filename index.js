'use strict';

const functions = require('firebase-functions');
const nodemailer = require('nodemailer');
// Configure the email transport using the default SMTP transport and a GMail account.
// For other types of transports such as Sendgrid see https://nodemailer.com/transports/
// TODO: Configure the `gmail.email` and `gmail.password` Google Cloud environment variables.
const gmailEmail = functions.config().gmail.email;
const gmailPassword = functions.config().gmail.password;
const mailTransport = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: gmailEmail,
    pass: gmailPassword,
  },
});

// Sends an email confirmation when a user registers.
exports.sendEmailConfirmation = functions.database.ref('/messages/{id}').onCreate(async (snap, context) => {
  console.log('New registration!');
  const val = snap.val();
  

  const mailOptions = {
    from: gmailEmail,
    subject: 'Registration confirmation',
    text: 'Thank you for registering for the conference!',
    to: val.email,
  };

  // Building Email message.

  try {
    await mailTransport.sendMail(mailOptions);
    console.log(`New confirmation email sent to:`, val.email);
  } catch(error) {
    console.error('There was an error while sending the email:', error);
  }
  return null;
});
