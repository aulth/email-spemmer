const express = require('express');
const nodemailer = require('nodemailer');
const router = express.Router();
const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    pool: true,
    auth:{
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
})
router.post('/send', (req, res)=>{
    let {message, email, count} = req.body;
    count = count?parseInt(count):1
    message = message?message: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae cum assumenda alias hic! Laborum sapiente, illo inventore vitae eveniet est, maiores, excepturi dignissimos itaque officia et laudantium tenetur expedita. Natus?"
    console.log(req.body);
    const emailOption = {
        from : "Elon Musk <email.spemmer@gmail.com>",
        to: email,
        subject: 'Urgent!',
        text: message,
    }
    for(let i=0; i<count; i++){
        transporter.sendMail(emailOption, (err, info)=>{
            if(err){
                console.log(err)
            }else{
                console.log(info.accepted)
            }
        })
    }
    res.status(200).json({success: true, message: `${count?count:1} emails have been sent to ${email}`})

})
module.exports = router