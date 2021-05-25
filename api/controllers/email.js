import nodemailer from "nodemailer";
import fs from "fs";
import path from "path";

const transporter = nodemailer.createTransport({
  host: process.env.EMAILHOST,
  port: process.env.EMAILPORT,
  secure: process.env.EMAILSECURE,
  auth: {
    user: process.env.EMAILSUPPORT,
    pass: process.env.EMAILPASS,
  },
});

const root = path.dirname(require.main.filename);
const absolutePath = path.join(root, "shop/public/img/aboutme_slide1.jpg");

function getMailOptions(req, title) {
  return {
    from: process.env.EMAILSUPPORT,
    to: "ioana_catalina_33@yahoo.com, ioana.echim@gmail.com",
    subject: title,
    text:
      req.body.message +
      "\n\n\n Message send through ioanacatalina.com \n Sender's name: " +
      req.body.name +
      "\n Sender's email: " +
      req.body.email,
  };
}

export async function sendEmail(req, res) {
  var mailOptions = getMailOptions(
    req,
    "IOANA CATALINA E. SHOP Title: " + req.body.title
  );
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log("Error sending the email:" + error);
      res.status(500).json({ message: "error" });
    } else {
      console.log("Email sent: " + info.response);
      res.status(200).json({ message: "sent" });
    }
  });
}

export async function sendBuyDigitalEmail(req, res) {
  var mailOptions = getMailOptions(
    req,
    "IOANA CATALINA E. WEBSITE Request to buy digital"
  );
  mailOptions.text =
    mailOptions.text + "\n Sender's requested photo: " + req.body.img;
  mailOptions.attachments = [
    {
      // stream as an attachment
      filename: "wwww.ioanacatalina.com" + req.body.img,
      content: fs.createReadStream(absolutePath),
    },
  ];
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log("Error sending the email:" + error);
      res.status(500).json({ message: "error" });
    } else {
      console.log("Email sent: " + info.response);
      res.status(200).json({ message: "sent" });
    }
  });
}

export async function sendEmailFreelance(req, res) {
  var mailOptions = getMailOptions(
    req,
    "IOANA CATALINA Freelance: " + req.body.subject
  );
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log("Error sending the email:" + error);
      res.status(500).json({ message: "error" });
    } else {
      console.log("Email sent: " + info.response);
      res.status(200).json({ message: "sent" });
    }
  });
}
