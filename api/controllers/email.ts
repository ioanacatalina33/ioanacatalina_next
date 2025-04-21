import nodemailer from "nodemailer";
import * as SMTPTransport from "nodemailer/lib/smtp-transport";
import fs from "fs";
import path from "path";
import { NextApiRequest, NextApiResponse } from "next";

// some code here...

const poolOptions = {
  host: process.env.EMAILHOST,
  port: Number(process.env.EMAILPORT),
  secure: Boolean(process.env.EMAILSECURE),
  auth: {
    user: process.env.EMAILSUPPORT,
    pass: process.env.EMAILPASS,
  },
  tls: {
    rejectUnauthorized: false,
  },
};

const nodemailerOptions: SMTPTransport.Options = {
  ...poolOptions,
};

const transporter = nodemailer.createTransport(nodemailerOptions);

const absolutePath = function (p: string) {
  return process.env.NODE_ENV === "development"
    ? path.join(process.cwd(), "/public" + p)
    : path.join("/home/ioanacat/public_html", p);
};
interface MailOptions {
  from: string;
  to: string;
  subject: string;
  text?: string;
  attachments?: {
    filename: string;
    content: any;
  }[];
}

function getMailOptions(req, title): MailOptions {
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
  const mailOptions = getMailOptions(
    req,
    "IOANA CATALINA E. SHOP Title: " + req.body.title,
  );
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log("Error sending the email:" + error);
      res.status(400).json({ message: "error" });
    } else {
      console.log("Email sent: " + info.messageId);
      res.status(200).json({ message: "sent" });
    }
  });
}

export async function sendBuyDigitalEmail(
  req: NextApiRequest,
  res: NextApiResponse<{ message?: string; result?: number }>,
) {
  const mailOptions = getMailOptions(
    req,
    "IOANA CATALINA E. WEBSITE Request to buy digital",
  );
  mailOptions.text =
    mailOptions.text + "\n Sender's requested photo: " + req.body.img;
  mailOptions.attachments = [
    {
      // stream as an attachment
      filename: "wwww.ioanacatalina.com" + req.body.img,
      content: fs.createReadStream(absolutePath(req.body.img)),
    },
  ];
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log("Error sending the email:" + error);
      res.status(400).json({ message: error.message, result: -1 });
    } else {
      console.log("Email sent: " + info.messageId);
      res.status(200).json({ message: "sent", result: 1 });
    }
  });
}

export async function sendEmailFreelance(req, res) {
  const mailOptions = getMailOptions(
    req,
    "IOANA CATALINA Freelance: " + req.body.subject,
  );
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log("Error sending the email:" + error);
      res.status(400).json({ message: "error" });
    } else {
      console.log("Email sent: " + info.messageId);
      res.status(200).json({ message: "sent" });
    }
  });
}
