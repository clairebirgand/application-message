const nodemailer = require('nodemailer');

// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'everysendtest@gmail.com',
        pass: 'labfabschool'
    }
});

exports.sendMail = sendMail;

function sendMail(subject, body) {
    // setup email data with unicode symbols
    let mailOptions = {
        from: '"Pénélope" <péné@lope.com>', // sender address
        to: 'everysendtest@gmail.com', // list of receivers
        subject: subject, // Subject line
        text: body, // plain text body
    //  html: '<b>Hello world ?</b>' // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log('Error sending mail:', error);
        }
        else {
            console.log('Mail successfully sent');
        }
    });
}
