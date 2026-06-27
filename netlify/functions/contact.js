// netlify/functions/contact.js
const nodemailer = require("nodemailer");
const validator = require("validator");

exports.handler = async (event) => {
  // Preflight (CORS)
  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
      },
      body: "",
    };
  }

  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method not allowed" };
  }

  const { name = "", email = "", subject = "", message = "" } = JSON.parse(event.body || "{}");
  if (!name.trim() || !validator.isEmail(email) || !message.trim()) {
    return { statusCode: 400, body: JSON.stringify({ ok: false, error: "Please provide a valid name, email, and message." }) };
  }

  // Gmail SMTP — no extra envs needed
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.GMAIL_USER,           // your Gmail
      pass: process.env.GMAIL_APP_PASSWORD,   // 16-char app password
    },
  });

  const safeName = validator.escape(name.trim());
  const safeEmail = validator.escape(email.trim());
  const safeSubject = validator.escape((subject || "New portfolio message").trim());
  const safeMessage = validator.escape(message.trim());

  const html = `
    <div style="font-family:Inter,Arial,sans-serif">
      <h2>New message from your portfolio</h2>
      <p><strong>Name:</strong> ${safeName}</p>
      <p><strong>Email:</strong> ${safeEmail}</p>
      <p><strong>Subject:</strong> ${safeSubject}</p>
      <hr/>
      <pre style="white-space:pre-wrap">${safeMessage}</pre>
    </div>
  `;

  try {
    const info = await transporter.sendMail({
      from: process.env.GMAIL_USER,                 // send from your Gmail
      to: process.env.GMAIL_USER,                   // send to your Gmail
      replyTo: `${safeName} <${safeEmail}>`,        // replying goes to the visitor
      subject: safeSubject,
      html,
      text: `From ${safeName} <${safeEmail}>\n\n${message}`,
    });

    return {
      statusCode: 200,
      headers: { "Access-Control-Allow-Origin": "*" },
      body: JSON.stringify({ ok: true, messageId: info.messageId }),
    };
  } catch (err) {
    console.error(err);
    return {
      statusCode: 500,
      headers: { "Access-Control-Allow-Origin": "*" },
      body: JSON.stringify({ ok: false, error: "Failed to send message." }),
    };
  }
};
