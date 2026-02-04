import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Please fill in all required fields' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address' },
        { status: 400 }
      );
    }

    // Create transporter using Gmail with app password
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_APP_PASSWORD,
      },
    });

    // Email to company
    const mailToCompany = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_RECIPIENT || process.env.EMAIL_USER,
      subject: `New Contact Form Submission: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="margin: 20px 0;">
            <p style="margin: 10px 0;">
              <strong style="color: #374151;">Name:</strong> ${name}
            </p>
            <p style="margin: 10px 0;">
              <strong style="color: #374151;">Email:</strong> 
              <a href="mailto:${email}" style="color: #2563eb;">${email}</a>
            </p>
            ${phone ? `
              <p style="margin: 10px 0;">
                <strong style="color: #374151;">Phone:</strong> ${phone}
              </p>
            ` : ''}
            <p style="margin: 10px 0;">
              <strong style="color: #374151;">Subject:</strong> ${subject}
            </p>
          </div>
          
          <div style="background-color: #f3f4f6; padding: 15px; border-radius: 5px; margin: 20px 0;">
            <p style="margin: 0; color: #374151;">
              <strong>Message:</strong>
            </p>
            <p style="margin: 10px 0 0 0; color: #1f2937; white-space: pre-wrap;">
              ${message}
            </p>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 12px;">
            <p>This email was sent from the contact form on your website.</p>
            <p>Received: ${new Date().toLocaleString()}</p>
          </div>
        </div>
      `,
    };

    // Auto-reply to sender
    const mailToSender = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Thank you for contacting us - iTech Netronics',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: white; padding: 20px; text-align: center;">
            <img src="cid:logo" alt="iTech Netronics Logo" style="max-width: 200px; height: auto;" />
          </div>
          
          <div style="padding: 30px 20px;">
            <h2 style="color: #1f2937;">Thank you for reaching out!</h2>
            
            <p style="color: #374151; line-height: 1.6;">
              Dear ${name},
            </p>
            
            <p style="color: #374151; line-height: 1.6;">
              We have received your message and appreciate you taking the time to contact us. 
              Our team will review your inquiry and get back to you as soon as possible, typically 
              within 1-2 business days.
            </p>
            
            <div style="background-color: #f3f4f6; padding: 15px; border-radius: 5px; margin: 20px 0;">
              <p style="margin: 0; color: #6b7280; font-size: 14px;">
                <strong>Your message:</strong>
              </p>
              <p style="margin: 10px 0 0 0; color: #1f2937;">
                ${message.substring(0, 200)}${message.length > 200 ? '...' : ''}
              </p>
            </div>
            
            <p style="color: #374151; line-height: 1.6;">
              If you need immediate assistance, please don't hesitate to call us at 
              <strong>+234 802 295 4768</strong>.
            </p>
            
            <p style="color: #374151; line-height: 1.6;">
              Best regards,<br>
              <strong>iTech Netronics Team</strong>
            </p>
          </div>
          
          <div style="background-color: #f9fafb; padding: 20px; text-align: center; color: #6b7280; font-size: 12px;">
            <p style="margin: 5px 0;">
              <strong>Abuja:</strong> Td 15, Richygold Homes and Estate, Abuja, Nigeria
            </p>
            <p style="margin: 5px 0;">
              <strong>Lagos:</strong> No 39, Social Science Street, Unilag Estate, Magodo, Lagos
            </p>
            <p style="margin: 10px 0 5px 0;">
              Email: Info@itechneronics.com | Phone: +234 802 295 4768
            </p>
          </div>
        </div>
      `,
    };

    // Send email to company
    await transporter.sendMail(mailToCompany);

    // Read logo file for embedded image
    const fs = await import('fs');
    const path = await import('path');
    const logoPath = path.join(process.cwd(), 'public', 'assets', 'logo.PNG');
    const logoBuffer = fs.readFileSync(logoPath);

    // Send email to sender with embedded logo
    const mailToSenderWithLogo = {
      ...mailToSender,
      attachments: [
        {
          filename: 'logo.PNG',
          content: logoBuffer,
          cid: 'logo',
        },
      ],
    };

    await transporter.sendMail(mailToSenderWithLogo);

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email. Please try again later.' },
      { status: 500 }
    );
  }
}
