"use server";

import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const sendEmail = async(to : string, subject : string, body : string) => {

    // Before creating the instance, check all the values are present
    if(!to || !subject || !body) {
        throw new Error("Missing required values");
        return;
    }

    // Create a transporter object using the default SMTP transport
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: process.env.Mail_User_Name,
            pass: process.env.Mail_Password,
        }
    })

    // Send the email
    await transporter.sendMail({
        from: '"Technosys Inc" <contact@technosysinc.com>',
        to,
        subject,
        html: body,
        attachments : [
            {
                filename : "contact.pdf",
                path : "@public/contact.pdf",
                contentType : "application/pdf",
                contentDisposition : "attachment"
            }
        ]
    })

    return NextResponse.json({ success: true }, { status: 200 });
}