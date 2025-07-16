import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend with API key from environment variables
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    // Parse the request body
    const body = await request.json();
    const { name, email, phone, service, appointmentService, message } = body;

    // Validate required fields
    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Send email notification via Resend
    try {
      // Simple email template inline
      const emailSubject = `New Contact Form Submission from ${name}`;
      const emailHtml = `
        <h2>🦷 New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        ${service ? `<p><strong>Service:</strong> ${service}</p>` : ''}
        ${appointmentService ? `<p><strong>Appointment Service:</strong> ${appointmentService}</p>` : ''}
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <hr>
        <p><small>Received: ${new Date().toLocaleString()}</small></p>
      `;

      console.log('📧 Attempting to send email via Resend...');
      const emailResult = await resend.emails.send({
        from: 'iCare Pediatric Dentistry <onboarding@resend.dev>',
        to: ['icarepaedsdent@gmail.com'],
        subject: emailSubject,
        html: emailHtml,
      });

      console.log('✅ Email notification sent successfully:', emailResult);

      return NextResponse.json(
        {
          success: true,
          message:
            'Your message has been sent successfully! We will get back to you soon.',
          emailId: emailResult.data?.id,
        },
        { status: 200 }
      );
    } catch (emailError) {
      console.error('❌ Failed to send email notification:', emailError);
      return NextResponse.json(
        {
          error:
            'Failed to send your message. Please try again or call us directly.',
        },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { error: 'Internal server error. Please try again later.' },
      { status: 500 }
    );
  }
}

// Handle GET requests (optional - for testing)
export async function GET() {
  return NextResponse.json(
    {
      message: 'Contact API endpoint is working',
      service: 'Resend Email Only',
    },
    { status: 200 }
  );
}
