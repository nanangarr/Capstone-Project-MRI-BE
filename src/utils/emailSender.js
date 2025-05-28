const nodemailer = require('nodemailer');
require('dotenv').config();

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

const sendPasswordEmail = (email, password) => {
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'Password Akun Stroke Detection System',
        text: `Berikut password untuk akun Anda: ${password}\n\nSilakan login menggunakan email dan password ini.`
    };

    return transporter.sendMail(mailOptions);
};

module.exports = { sendPasswordEmail };