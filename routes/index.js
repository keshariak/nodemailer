var express = require('express');
var router = express.Router();
const nodemailer = require("nodemailer");

const number = Math.random()*1000000
 const otp =Math.floor(number)

//  const emailAddresses = [];

// for (let i = 1; i <= 99; i++) {
//     // Pad the number with zeros to ensure it's always 3 digits long
//     const paddedNumber = String(i).padStart(3, '0');
//     const email = `0126cd211${paddedNumber}@oriental.ac.in`;
//     emailAddresses.push(email);
// }

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/hitmail', function(req, res, next) {
const transporter =  nodemailer.createTransport({
  service:"gmail",
  post:568,
  auth: {
    user: "aryankeshari2003@gmail.com",
    pass: "ktmvfdnvpsthtkru",
  }
  
});
  
 function sendMail(){
  return new Promise((resolve, reject)=>{

    transporter.sendMail({
      from: 'aryankeshari2003@gmail.com', // sender address
      to: "0126cd211099@oriental.ac.in", // list of receivers
      subject: '🌟 A Special Note Just for You! 😊', // Subject line
            text: 'Just a quick message to brighten your day! 😄', // plain text body
            html: `
                 <body style="font-family: Arial, sans-serif; color: #333; text-align: center; background-color: #f9f9f9; padding: 20px;">
                    <h1 style="color: #4caf50; font-size: 24px;">Hello There! 🌟</h1>
                    <p style="font-size: 16px; line-height: 1.6;">I just wanted to drop you a quick note to bring a smile to your face! 😄</p>
                    <p style="font-size: 16px; line-height: 1.6;">You are so amazing! Remember to take a little break and enjoy the simple things in life. Whether it's a good cup of coffee, a funny video, or just a moment to relax, make sure to treat yourself!</p>
                    <p style="font-size: 16px; line-height: 1.6;">Keep up the fantastic work and stay positive. We’re all in this together, and we’re doing great! 🌈</p>
                    <p style="margin-top: 20px; color: #777; font-size: 14px;"> If you’re looking for a bit more to brighten your day, check out this link. It’s worth a look! 🌟</p>
                    <p style="margin-top: 20px;">
                        <a href="https://img.freepik.com/free-vector/funny-being-adult-meme_23-2149088456.jpg?t=st=1722980451~exp=1722984051~hmac=d64b24fc686ab5d290d39559d3f191c50ba4943fe4a4607031948cff693a3b92&w=996" style="color: #007bff; text-decoration: none; font-weight: bold;">Check it out here!</a>
                    </p>
                    <p style="margin-top: 30px; color: #777; font-size: 14px;">Best regards,<br> Your Secret Cheerleader😜</p>
                </body>
            `
  , 
    },(err,info)=>{
      if(err){
        reject(err)
      }
      else{
        resolve(info)
      }
    });
  })
 }
   async function  sendEmails(){
    
    // for (let i=0;i<25; i++) {
    //   try {
    //     const result= await sendMail()
    //     console.log(`email sent successfull ${result}`)

    //   } catch (error) {
    //     console.log("errorororororor")
    //   }
    // }

    try {
          const result= await sendMail()
          console.log(`email sent successfull ${result}`)
  
        } catch (error) {
          console.log("errorororororor")
        }
  }
 sendEmails();
//  res.json("otp sent!!!!!!!!")
});
module.exports = router;
