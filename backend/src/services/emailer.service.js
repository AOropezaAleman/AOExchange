const nodemailer = require('nodemailer');

module.exports = {
    deliverEmail: function (dest, subject, body) {
        var transport = nodemailer.createTransport({
            service: process.env.EMAIL_SERVICE,
            auth: {
                user: process.env.EMAIL,
                pass: process.env.EMAIL_PWD
            }
        });
    
        var mailOptions = {
            from: process.env.EMAIL,
            to: dest,
            subject: subject,
            text: body
        };
    
        transport.sendMail(mailOptions, function(error, info){
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });
    }   
}