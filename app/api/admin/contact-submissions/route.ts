import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '10');
    const service = searchParams.get('service');
    const format = searchParams.get('format'); // 'csv' or null
    
    const offset = (page - 1) * limit;

    // Build query
    let query = supabase
      .from('contact_submissions')
      .select('*', { count: 'exact' })
      .order('created_at', { ascending: false });

    // Apply service filter if provided
    if (service && service !== 'all') {
      query = query.eq('service', service);
    }

    // For CSV export, don't apply pagination
    if (format !== 'csv') {
      query = query.range(offset, offset + limit - 1);
    }

    const { data, error, count } = await query;

    if (error) {
      console.error('Database error:', error);
      return NextResponse.json(
        { error: 'Failed to fetch submissions' },
        { status: 500 }
      );
    }

    // Handle CSV export
    if (format === 'csv') {
      const csvContent = generateCSV(data || []);
      return new NextResponse(csvContent, {
        status: 200,
        headers: {
          'Content-Type': 'text/csv',
          'Content-Disposition': 'attachment; filename="contact-submissions.csv"',
        },
      });
    }

    // Regular JSON response
    return NextResponse.json({
      submissions: data || [],
      pagination: {
        page,
        limit,
        total: count || 0,
        totalPages: Math.ceil((count || 0) / limit),
      },
    });

  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

function generateCSV(data: any[]): string {
  if (data.length === 0) return '';

  const headers = [
    'Name',
    'Email',
    'Phone',
    'Service',
    'Appointment Service',
    'Message',
    'Submission',
  ];

  const csvRows = [
    headers.join(','),
    ...data.map(row => [
      `"${row.name}"`,
      `"${row.email}"`,
      `"${row.phone}"`,
      `"${row.service || ''}"`,
      `"${row.appointment_service || ''}"`,
      `"${row.message.replace(/"/g, '""')}"`,
      `"${new Date(row.created_at).toLocaleString()}"`
    ].join(','))
  ];

  return csvRows.join('\n');
} 