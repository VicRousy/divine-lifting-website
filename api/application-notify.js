import nodemailer from 'nodemailer';

const ALLOWED = [
  'https://divine-lifting-website.vercel.app',
  'https://divine-lifting-school.vercel.app',
  'http://localhost:5173',
  'http://localhost:3001',
]

function esc(str) {
  return String(str || '').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#039;')
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const origin = req.headers.origin || req.headers.referer || ''
  if (origin && !ALLOWED.some(a => origin.startsWith(a))) {
    return res.status(403).json({ error: 'Forbidden' })
  }

  const { student_first_name, student_last_name, class_applying_for, application_number, father_name, mother_name, father_email, mother_email, _honeypot, _t } = req.body;

  if (!student_first_name || !student_last_name || !application_number) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  if (_honeypot) {
    return res.status(400).json({ error: 'Spam detected' })
  }

  if (_t && (Date.now() - _t < 2000 || Date.now() - _t > 14400000)) {
    return res.status(400).json({ error: 'Invalid request' })
  }

  if (student_first_name.length > 50 || student_last_name.length > 50 || application_number.length > 30) {
    return res.status(400).json({ error: 'Field too long' })
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    const parentInfo = [father_name, mother_name].filter(Boolean).join(' & ') || 'Not provided';

    await transporter.sendMail({
      from: `"Divine Lifting Website" <${process.env.GMAIL_USER}>`,
      to: process.env.NOTIFY_EMAIL || process.env.GMAIL_USER,
      subject: `New Admission Application: ${student_first_name} ${student_last_name} - ${application_number}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #1f2937; padding: 24px; text-align: center; border-radius: 12px 12px 0 0;">
            <h1 style="color: #f97316; margin: 0; font-size: 20px;">Divine Lifting International School</h1>
            <p style="color: #9ca3af; margin: 8px 0 0;">New Admission Application Received</p>
          </div>
          <div style="background: #f9fafb; padding: 24px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 12px 12px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 8px 0; color: #6b7280; font-weight: bold; width: 140px;">Application #:</td><td style="padding: 8px 0; color: #1f2937;">${esc(application_number)}</td></tr>
              <tr><td style="padding: 8px 0; color: #6b7280; font-weight: bold;">Student:</td><td style="padding: 8px 0; color: #1f2937;">${esc(student_first_name)} ${esc(student_last_name)}</td></tr>
              <tr><td style="padding: 8px 0; color: #6b7280; font-weight: bold;">Class:</td><td style="padding: 8px 0; color: #1f2937;">${esc(class_applying_for)}</td></tr>
              <tr><td style="padding: 8px 0; color: #6b7280; font-weight: bold;">Parent/Guardian:</td><td style="padding: 8px 0; color: #1f2937;">${esc(parentInfo)}</td></tr>
            </table>
            <div style="margin-top: 20px; padding-top: 16px; border-top: 1px solid #e5e7eb; text-align: center;">
              <a href="${process.env.PORTAL_URL || 'https://divine-lifting-school.vercel.app'}" style="background: #f97316; color: white; padding: 10px 24px; text-decoration: none; border-radius: 8px; font-weight: bold; display: inline-block;">View in Portal</a>
            </div>
          </div>
          <p style="text-align: center; color: #9ca3af; font-size: 12px; margin-top: 16px;">Sent from divine-lifting-website.vercel.app</p>
        </div>
      `,
    });

    res.json({ success: true });
  } catch (error) {
    console.error('Email send error:', error);
    res.status(500).json({ error: 'Failed to send notification' });
  }
}
