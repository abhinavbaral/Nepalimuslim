const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

app.post('/api/signup', async (req, res) => {
  const { email, phone } = req.body;

  // Validate email and phone (simplified example)
  if (!email || !phone) {
    return res.status(400).json({ success: false, message: 'Please provide both email and phone.' });
  }

  // Generate a random OTP or validation link
  const otp = Math.floor(100000 + Math.random() * 900000); // Random 6-digit OTP

  // Create a transporter for sending emails
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'Email Verification for Signup',
    text: `Your OTP is: ${otp}`,
  };

  try {
    // Send the OTP via email
    await transporter.sendMail(mailOptions);
    res.status(200).json({
      success: true,
      message: 'A validation link has been sent to your email. Please verify it.',
    });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ success: false, message: 'Error sending email. Try again later.' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
