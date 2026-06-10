require("dotenv").config();

const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// EMAIL ROUTE
app.post("/api/contact", async (req, res) => {
  const { name, firstName, lastName, email, projectType, budget, message } = req.body;
  const resolvedName = name || `${firstName || ""} ${lastName || ""}`.trim() || "Web User";

  try {
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const htmlContent = `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e5e5e5; border-radius: 8px;">
        <h2 style="color: #dc2626; border-bottom: 2px solid #dc2626; padding-bottom: 10px; margin-top: 0;">New Submission Received</h2>
        <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
          <tr>
            <td style="padding: 8px 0; font-weight: bold; width: 150px;">Name:</td>
            <td style="padding: 8px 0;">${resolvedName}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold;">Email:</td>
            <td style="padding: 8px 0;"><a href="mailto:${email}">${email}</a></td>
          </tr>
          ${projectType ? `
          <tr>
            <td style="padding: 8px 0; font-weight: bold;">Project Type:</td>
            <td style="padding: 8px 0;">${projectType}</td>
          </tr>
          ` : ""}
          ${budget ? `
          <tr>
            <td style="padding: 8px 0; font-weight: bold;">Budget/Est. Total:</td>
            <td style="padding: 8px 0; color: #16a34a; font-weight: bold;">${budget}</td>
          </tr>
          ` : ""}
        </table>
        <div style="margin-top: 20px; padding: 15px; background-color: #f9fafb; border-radius: 6px; border: 1px solid #f3f4f6;">
          <h4 style="margin-top: 0; margin-bottom: 10px; color: #374151;">Message / Details:</h4>
          <p style="margin: 0; white-space: pre-wrap; font-size: 14px; line-height: 1.5; color: #4b5563;">${message}</p>
        </div>
      </div>
    `;

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO || process.env.EMAIL_USER,
      subject: `New Form Submission from ${resolvedName}`,
      html: htmlContent,
      replyTo: email,
    });

    res.json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});