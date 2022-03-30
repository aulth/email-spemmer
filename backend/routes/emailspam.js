const express = require('express');
const nodemailer = require('nodemailer');
const router = express.Router();
const Email = require('../models/email')
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
router.post('/send', async (req, res)=>{
    let {message, email, count, htmlFormat} = req.body;
    count = count?parseInt(count):1
    message = message?message: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae cum assumenda alias hic! Laborum sapiente, illo inventore vitae eveniet est, maiores, excepturi dignissimos itaque officia et laudantium tenetur expedita. Natus?"
    Email.find({email:email}).then((response)=>{
        console.log(response)
    });
    const emailOption = {
        from : "Elon Musk <email.spemmer@gmail.com>",
        to: email,
        subject: 'Urgent!',
        if(htmlFormat){
            html: message
        }else{
            text: message
        }
    }
        }
    }
    // if(response){
    // console.log(response)
    //     return res.status(200).json({success:false, message:`${email} is protected`})
    // }
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


// protect email api 
router.post('/protect', (req, res)=>{
    const {email} = req.body;
    const protection = new Email({
        email:email,
        status:1
    })
    protection.save().then((result)=>{
        console.log(result)
    })
    
})
module.exports = router