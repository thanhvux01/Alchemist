const express = require("express");
require("dotenv").config();
const nodemailer = require("nodemailer");
const path = require("path");
const fs = require('fs');


const handleRegisterEmail = (email,verifyToken) => {
  const VerifyLink = `http://localhost:3000/verify/?token=${verifyToken}`;
  const mailOptions = {
    from: {
       name:"Alchemist",
       address:process.env.MAIL_SERVICE,
    },
    to: email,
    subject: 'Registration Successful',
    text: 'Thank you for registering! Your account has been successfully created.',
    html:`<p>Cảm ơn bạn đã đăng ký , vui lòng xác thực tài khoản bằng đường link bên dưới.</p>
          <p>Click the link below the verify your account.<a href=${VerifyLink}>Verify here</a></p>
    `
  };
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.MAIL_SERVICE, // Replace with your email
      pass: process.env.APP_PASS, // Replace with your password or an application-specific password
    },
  });
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}

const handleOrderEmail = (email,username,order_id,createdAt,course_name,course_price) => { 
    const mailOptions = {
      from: {
         name:"Alchemist",
         address:process.env.MAIL_SERVICE,
      },
      to: email,
      subject: 'Registration Successful',
      text: 'Thank you for registering! Your account has been successfully created.',
      html:`<!-- emailTemplate.html -->
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://res.cloudinary.com/dicgj8bdg/raw/upload/v1703774452/mailcss_oinuin.css">
        <title>Email Template</title>
        <!-- Your email template styles go here -->
      </head>
      <style>
           
      </style>
      <body>
          <div class="container">
              <div class="logo">
                  <img src="https://res.cloudinary.com/dicgj8bdg/image/upload/c_scale,h_50,w_50/v1703774687/Bot_ngj2ln.png" style="height: 50px;width: 50px; "/>
              </div>
              <div class="banner">
      
              </div>
             <div class="form-wrapper">
              <div class="title">
                  <h2>Chào ${username}</h2>
                  <p>Cảm ơn bạn vì đã mua khoá học của chúng tôi dưới đây là thông tin về đơn hàng của bạn của bạn</p>
                 </div>
                 <div class="detail-header">
                  <h2>Thông tin đơn hàng #${order_id}</h2>
                  <span>${createdAt}</span>
             </div>
             <div class="detail">
                 <div class="username-email">
                     <span class="line">
                      <label>Khách hàng:</label>
                      <span>${username}</span>
                     </span>
                     <span class="line">
                      <label>Email:</label>
                      <span class="highlight">${email}</span>
                     </span>
                 </div>
                 <div class="username-email">
                  <span class="line">
                   <label>IP:</label>
                   <span>162.158.178.73</span>
                  </span>
                  <span class="line">
                   <label>Tình trạng</label>
                   <span class="highlight">Thanh toán thành công</span>
                  </span>
              </div>
             </div>
             <div class="product-title">
              <h2>Chi tiết sản phẩm</h2>
             </div>
             <div class="product">
                <img src="https://res.cloudinary.com/dicgj8bdg/image/upload/v1703272626/360_F_552900530_D4WF1c3zGsvIGfLgKaRBrEmbvPlk6O6E_n6oat8.jpg"/>
                <h4>${course_name}</h4>
                <h4>Số lượng: 1</h4>
                <h4>${course_price}VND</h4>
             </div>
             </div>
           
          </div>
      </body>
      </html>
      `
    };
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.MAIL_SERVICE, // Replace with your email
        pass: process.env.APP_PASS, // Replace with your password or an application-specific password
      },
    });
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
  }
  

module.exports = {handleOrderEmail,handleRegisterEmail} ;