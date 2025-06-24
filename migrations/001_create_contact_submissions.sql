-- Migration: Create contact_submissions table
-- Created: 2024-06-25
-- Description: Table to store contact form submissions from the website

CREATE TABLE IF NOT EXISTS contact_submissions (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    
    -- Required fields
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(50) NOT NULL,
    message TEXT NOT NULL,
    
    -- Optional fields
    service VARCHAR(100), -- general, appointment, referral, feedback, other
    appointment_service VARCHAR(100), -- specific service when appointment is selected
    
    -- Metadata fields
    status VARCHAR(50) DEFAULT 'new', -- new, in_progress, resolved, closed
    is_read BOOLEAN DEFAULT FALSE,
    priority VARCHAR(20) DEFAULT 'normal', -- low, normal, high, urgent
    
    -- Timestamps
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    responded_at TIMESTAMP WITH TIME ZONE,
    
    -- Audit fields
    ip_address INET,
    user_agent TEXT
);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_contact_submissions_created_at ON contact_submissions(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_status ON contact_submissions(status);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_service ON contact_submissions(service);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_email ON contact_submissions(email);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_is_read ON contact_submissions(is_read);

-- Create a function to automatically update the updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger to automatically update updated_at when record is modified
DROP TRIGGER IF EXISTS update_contact_submissions_updated_at ON contact_submissions;
CREATE TRIGGER update_contact_submissions_updated_at 
    BEFORE UPDATE ON contact_submissions 
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column();

-- Add comments to document the table structure
COMMENT ON TABLE contact_submissions IS 'Stores contact form submissions from the website';
COMMENT ON COLUMN contact_submissions.service IS 'Type of inquiry: general, appointment, referral, feedback, other';
COMMENT ON COLUMN contact_submissions.appointment_service IS 'Specific dental service requested when service type is appointment';
COMMENT ON COLUMN contact_submissions.status IS 'Processing status: new, in_progress, resolved, closed';
COMMENT ON COLUMN contact_submissions.priority IS 'Priority level: low, normal, high, urgent';
COMMENT ON COLUMN contact_submissions.is_read IS 'Whether the submission has been read by staff';
COMMENT ON COLUMN contact_submissions.ip_address IS 'IP address of the form submitter';
COMMENT ON COLUMN contact_submissions.user_agent IS 'Browser/device information of the submitter'; 