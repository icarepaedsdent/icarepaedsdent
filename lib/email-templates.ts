export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  service?: string;
  appointmentService?: string;
  message: string;
}

export function createContactNotificationEmail(data: ContactFormData) {
  const { name, email, phone, service, appointmentService, message } = data;

  return {
    subject: `New Contact Form Submission from ${name}`,
    html: `
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
            .priority { background: #ff6b6b; color: white; padding: 4px 8px; border-radius: 12px; font-size: 11px; font-weight: bold; }
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
            
            <div style="margin-top: 20px; padding: 15px; background: #e8f5e8; border-radius: 4px; border-left: 4px solid #4caf50;">
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
    `,
    text: `
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
    `,
  };
}
