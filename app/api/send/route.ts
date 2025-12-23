import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend with the API key from environment variables
const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    if (!process.env.NEXT_PUBLIC_RESEND_API_KEY) {
      return NextResponse.json(
        { error: 'Server configuration error: Missing API key' },
        { status: 500 }
      );
    }

    const { name, email, message } = await request.json();
    
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: 'AspA! Contact Form <onboarding@resend.dev>',
      to: 'ryfgmz87@gmail.com',
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px;">
          <h2 style="color: #333; border-bottom: 2px solid #D4AF37; padding-bottom: 10px;">New Contact Form Submission</h2>
          <p><strong>From:</strong> ${name} &lt;${email}&gt;</p>
          <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
          <div style="margin-top: 20px; padding: 15px; background-color: #f9f9f9; border-left: 4px solid #D4AF37;">
            <p style="margin: 0; white-space: pre-line;">${message}</p>
            </div>
          </div>
          <p style="margin-top: 20px; color: #666; font-size: 14px;">
            This message was sent from your website contact form.
          </p>
        </div>
      `,
    });

    if (error) {
      console.error('Failed to send email:', error.message);
      return NextResponse.json(
        { error: error.message || 'Failed to send email' },
        { status: 500 }
      );
    }

    return NextResponse.json({ 
      message: 'Email sent successfully',
      data 
    });
  } catch (error) {
    console.error('Server error processing contact form:', error instanceof Error ? error.message : 'Unknown error');
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
