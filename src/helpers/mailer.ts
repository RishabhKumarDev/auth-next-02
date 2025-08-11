import User from "@/models/userModel";
import nodemailer from "nodemailer";

export const sendMail = async ({ email, emailType, userId }:any) => {
  try {
    // TODO: configure mail for usage;

    if(emailType === "VERIFY"){
        await User.findByIdAndUpdate(userId,{
            
        })
    }
    const transporter = await nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: "maddison53@ethereal.email",
        pass: "jn7jnAPss4f63QBp6D",
      },
    });
    const mailOption = {
      from: "rishabh@gmail.com",
      to: email,
      subject:
        emailType === "VERIFY" ? "Vefiry Your Email" : "Reset Your Password",
      text: "Hello world?", // plain‑text body
      html: "<b>Hello world?</b>", // HTML body
    };

    const mailResponse = await transporter.sendMail(mailOption);
    return mailResponse;
  } catch (error: any) {
    throw new Error(error?.message);
  }
};
