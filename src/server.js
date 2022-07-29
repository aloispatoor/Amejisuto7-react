const express = require("express");
const router = express.Router();
const cors = require("cors");
// const nodemailer = require("nodemailer");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(5000, () => console.log("Server Running"));

router.post("/contact", (req, res) => {
    const subject = req.body.subject;
    const email = req.body.email;
    const message = req.body.message; 
    const mail = {
      from: email,
      to: "aloisp774@gmail.com",
      subject: `<p>${subject}</p>`,
      html: `<p>Email: ${email}</p>
             <p>Message: ${message}</p>`,
    };
    contactEmail.sendMail(mail, (error) => {
      if (error) {
        res.json({ status: "ERROR" });
      } else {
        res.json({ status: "Message Sent" });
      }
    });
  });