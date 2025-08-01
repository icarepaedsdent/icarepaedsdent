import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend with API key from environment variables
const resend = new Resend(process.env.RESEND_API_KEY);

// Handle referral form submissions
async function handleReferralSubmission(body: any) {
  console.log('🔍 Processing referral submission');
  
  const { patientDetails, referralDetails, reasonsForReferral, radiographsTaken, referrerDetails } = body;

  // Validate required fields for referral
  if (!patientDetails?.name || !patientDetails?.phone || !referralDetails || 
      !radiographsTaken || !referrerDetails?.name || !referrerDetails?.email || !referrerDetails?.phone) {
    console.log('❌ Referral validation failed: Missing required fields');
    return NextResponse.json(
      { error: 'Missing required referral fields' },
      { status: 400 }
    );
  }

  // Basic email validation for referrer
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(referrerDetails.email)) {
    console.log('❌ Referral validation failed: Invalid referrer email');
    return NextResponse.json(
      { error: 'Invalid referrer email address' },
      { status: 400 }
    );
  }

  console.log('✅ Referral validation passed, sending email...');

  try {
    // Beautiful referral email template
    const emailSubject = `New Referral from ${referrerDetails.name} - ${patientDetails.name}`;
    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 700px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #20b2aa 0%, #00a693 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0; text-align: center; }
            .content { background: #f9f9f9; padding: 20px; border: 1px solid #ddd; }
            .section { margin-bottom: 25px; background: white; padding: 15px; border-radius: 6px; border-left: 4px solid #20b2aa; }
            .field { margin-bottom: 12px; }
            .label { font-weight: bold; color: #555; display: block; margin-bottom: 5px; }
            .value { background: #f8f8f8; padding: 8px; border-radius: 4px; border: 1px solid #e1e1e1; }
            .footer { background: #333; color: white; padding: 15px; text-align: center; border-radius: 0 0 8px 8px; font-size: 12px; }
            .urgent { background: #fff3cd; border-left-color: #ffc107; }
            .reasons-list { display: flex; flex-wrap: wrap; gap: 8px; }
            .reason-tag { background: #e8f5e8; padding: 4px 8px; border-radius: 12px; font-size: 12px; border: 1px solid #4caf50; }
          </style>
        </head>
        <body>
          <div class="header">
            <h1>🩺 New Patient Referral</h1>
            <p>iCare Paediatric Dentistry</p>
          </div>
          
          <div class="content">
            <div class="section">
              <h3>👶 Patient Information</h3>
              <div class="field">
                <span class="label">Patient Name:</span>
                <div class="value">${patientDetails.name}</div>
              </div>
              <div class="field">
                <span class="label">Date of Birth:</span>
                <div class="value">${patientDetails.dateOfBirth || 'Not provided'}</div>
              </div>
              <div class="field">
                <span class="label">Phone:</span>
                <div class="value">${patientDetails.phone}</div>
              </div>
              <div class="field">
                <span class="label">Email:</span>
                <div class="value">${patientDetails.email || 'Not provided'}</div>
              </div>
              ${patientDetails.medicalHistory ? `
              <div class="field">
                <span class="label">Medical History:</span>
                <div class="value">${patientDetails.medicalHistory.replace(/\n/g, '<br>')}</div>
              </div>
              ` : ''}
            </div>

            <div class="section">
              <h3>🏥 Referral Details</h3>
              <div class="field">
                <span class="label">Referral Information:</span>
                <div class="value">${referralDetails.replace(/\n/g, '<br>')}</div>
              </div>
            </div>

            ${reasonsForReferral && reasonsForReferral.length > 0 ? `
            <div class="section">
              <h3>📋 Reasons for Referral</h3>
              <div class="reasons-list">
                ${reasonsForReferral.map((reason: string) => `<span class="reason-tag">${reason}</span>`).join('')}
              </div>
            </div>
            ` : ''}

            <div class="section">
              <h3>📸 Radiographs</h3>
              <div class="field">
                <span class="label">Radiographs taken and e-mailed:</span>
                <div class="value">${radiographsTaken === 'yes' ? '✅ Yes' : '❌ No'}</div>
              </div>
            </div>

            <div class="section">
              <h3>👨‍⚕️ Referring Doctor</h3>
              <div class="field">
                <span class="label">Referrer Name:</span>
                <div class="value">${referrerDetails.name}</div>
              </div>
              <div class="field">
                <span class="label">Practice:</span>
                <div class="value">${referrerDetails.practice}</div>
              </div>
              <div class="field">
                <span class="label">Phone:</span>
                <div class="value">${referrerDetails.phone}</div>
              </div>
              <div class="field">
                <span class="label">Email:</span>
                <div class="value">${referrerDetails.email}</div>
              </div>
            </div>

            <div class="section urgent">
              <strong>📋 Next Steps:</strong>
              <ul style="margin: 10px 0;">
                <li>Contact patient within 24-48 hours</li>
                <li>Review referral details and prioritize based on urgency</li>
                <li>Schedule appropriate appointment</li>
                <li>Send treatment report back to referring doctor</li>
                <li>Maintain communication throughout treatment</li>
              </ul>
            </div>
          </div>
          
          <div class="footer">
            <p>This referral was automatically generated from the iCare Paediatric Dentistry website.</p>
            <p>Received at: ${new Date().toLocaleString('en-US', {
              timeZone: 'Australia/Brisbane',
              year: 'numeric',
              month: 'long',
              day: 'numeric',
              hour: '2-digit',
              minute: '2-digit',
            })}</p>
          </div>
        </body>
      </html>
    `;

    // Plain text version for referral
    const emailText = `
New Patient Referral - iCare Paediatric Dentistry

PATIENT INFORMATION:
Name: ${patientDetails.name}
Date of Birth: ${patientDetails.dateOfBirth || 'Not provided'}
Phone: ${patientDetails.phone}
Email: ${patientDetails.email || 'Not provided'}
${patientDetails.medicalHistory ? `Medical History: ${patientDetails.medicalHistory}` : ''}

REFERRAL DETAILS:
${referralDetails}

REASONS FOR REFERRAL:
${reasonsForReferral && reasonsForReferral.length > 0 ? reasonsForReferral.join(', ') : 'Not specified'}

RADIOGRAPHS:
Taken and e-mailed: ${radiographsTaken === 'yes' ? 'Yes' : 'No'}

REFERRING DOCTOR:
Name: ${referrerDetails.name}
Practice: ${referrerDetails.practice}
Phone: ${referrerDetails.phone}
Email: ${referrerDetails.email}

---
This referral was received on ${new Date().toLocaleString('en-US', {
      timeZone: 'Australia/Brisbane',
    })}

Please contact the patient within 24-48 hours and send a treatment report back to the referring doctor.
    `;

    console.log('📧 Attempting to send referral email via Resend...');
    const emailResult = await resend.emails.send({
      from: 'iCare Paediatric Dentistry <onboarding@resend.dev>',
      to: ['icarepaedsdent@gmail.com'],
      subject: emailSubject,
      html: emailHtml,
      text: emailText,
    });

    console.log('✅ Referral email sent successfully:', emailResult);

    return NextResponse.json(
      {
        success: true,
        message: 'Referral submitted successfully! We will contact the patient within 24-48 hours.',
        emailId: emailResult.data?.id,
        timestamp: new Date().toISOString(),
      },
      { status: 200 }
    );
  } catch (emailError) {
    console.error('❌ Failed to send referral email:', emailError);
    return NextResponse.json(
      {
        error: 'Failed to submit referral. Please try again or call us directly.',
        details: emailError instanceof Error ? emailError.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  console.log('🔍 POST route called at:', new Date().toISOString());
  console.log('🔍 Headers:', Object.fromEntries(request.headers.entries()));

  try {
    // Parse the request body
    const body = await request.json();
    console.log('🔍 Request body:', body);
    
    // Check if this is a referral submission
    if (body.type === 'referral') {
      return handleReferralSubmission(body);
    }
    
    // Handle regular contact form submission
    const { name, email, phone, service, appointmentService, message } = body;

    // Validate required fields
    if (!name || !email || !phone || !message) {
      console.log('❌ Validation failed: Missing required fields');
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      console.log('❌ Validation failed: Invalid email');
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    console.log('✅ Validation passed, sending email...');

    // Send email notification via Resend
    try {
      // Beautiful email template
      const emailSubject = `New Contact Form Submission from ${name}`;
      const emailHtml = `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0; text-align: center; }
              .content { background: #f9f9f9; padding: 20px; border: 1px solid #ddd; }
              .field { margin-bottom: 15px; }
              .label { font-weight: bold; color: #555; display: block; margin-bottom: 5px; }
              .value { background: white; padding: 10px; border-radius: 4px; border: 1px solid #e1e1e1; }
              .footer { background: #333; color: white; padding: 15px; text-align: center; border-radius: 0 0 8px 8px; font-size: 12px; }
              .next-steps { margin-top: 20px; padding: 15px; background: #e8f5e8; border-radius: 4px; border-left: 4px solid #4caf50; }
            </style>
          </head>
          <body>
            <div class="header">
              <h1>🦷 New Contact Form Submission</h1>
              <p>iCare Paediatric Dentistry</p>
            </div>
            
            <div class="content">
              <div class="field">
                <span class="label">👤 Patient/Parent Name:</span>
                <div class="value">${name}</div>
              </div>
              
              <div class="field">
                <span class="label">📧 Email Address:</span>
                <div class="value">${email}</div>
              </div>
              
              <div class="field">
                <span class="label">📞 Phone Number:</span>
                <div class="value">${phone}</div>
              </div>
              
              ${
                service
                  ? `
              <div class="field">
                <span class="label">🏥 Service Interest:</span>
                <div class="value">${service}</div>
              </div>
              `
                  : ''
              }
              
              ${
                appointmentService
                  ? `
              <div class="field">
                <span class="label">📅 Appointment Service:</span>
                <div class="value">${appointmentService}</div>
              </div>
              `
                  : ''
              }
              
              <div class="field">
                <span class="label">💬 Message:</span>
                <div class="value">${message.replace(/\n/g, '<br>')}</div>
              </div>
              
              <div class="next-steps">
                <strong>📋 Next Steps:</strong>
                <ul style="margin: 10px 0;">
                  <li>Review patient inquiry within 2 hours</li>
                  <li>Respond via email or phone call</li>
                  <li>Schedule appointment if requested</li>
                  <li>Update patient record in system</li>
                </ul>
              </div>
            </div>
            
            <div class="footer">
              <p>This email was automatically generated from the iCare Paediatric Dentistry website contact form.</p>
              <p>Received at: ${new Date().toLocaleString('en-US', {
                timeZone: 'America/New_York',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
              })}</p>
            </div>
          </body>
        </html>
      `;

      // Plain text version
      const emailText = `
New Contact Form Submission - iCare Paediatric Dentistry

Patient/Parent Name: ${name}
Email: ${email}
Phone: ${phone}
${service ? `Service Interest: ${service}` : ''}
${appointmentService ? `Appointment Service: ${appointmentService}` : ''}

Message:
${message}

---
This submission was received on ${new Date().toLocaleString('en-US', {
        timeZone: 'America/New_York',
      })}

Please respond to the patient within 2 hours for optimal patient care.
      `;

      console.log('📧 Attempting to send email via Resend...');
      const emailResult = await resend.emails.send({
        from: 'iCare Paediatric Dentistry <onboarding@resend.dev>',
        to: ['icarepaedsdent@gmail.com'],
        subject: emailSubject,
        html: emailHtml,
        text: emailText,
      });

      console.log('✅ Email notification sent successfully:', emailResult);

      return NextResponse.json(
        {
          success: true,
          message:
            'Your message has been sent successfully! We will get back to you soon.',
          emailId: emailResult.data?.id,
          timestamp: new Date().toISOString(),
        },
        { status: 200 }
      );
    } catch (emailError) {
      console.error('❌ Failed to send email notification:', emailError);
      return NextResponse.json(
        {
          error:
            'Failed to send your message. Please try again or call us directly.',
          details:
            emailError instanceof Error ? emailError.message : 'Unknown error',
        },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('❌ API error:', error);
    return NextResponse.json(
      {
        error: 'Internal server error. Please try again later.',
        details: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}

// Handle GET requests (for testing and debugging)
export async function GET(request: NextRequest) {
  console.log('🔍 GET route called at:', new Date().toISOString());

  return NextResponse.json(
    {
      message: 'Contact API endpoint is working',
      service: 'Resend Email Only',
      hasApiKey: !!process.env.RESEND_API_KEY,
      timestamp: new Date().toISOString(),
      environment: process.env.NODE_ENV || 'unknown',
      url: request.url,
    },
    { status: 200 }
  );
}

// Add OPTIONS method for CORS preflight
export async function OPTIONS(request: NextRequest) {
  console.log('🔍 OPTIONS route called at:', new Date().toISOString());

  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}
