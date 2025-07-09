import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function GET() {
  try {
    // Simple query to keep Supabase active and test connection
    const { data, error } = await supabase
      .from('contact_submissions')
      .select('id')
      .limit(1);

    if (error) {
      console.log('Health check - Supabase error:', error.message);
      return NextResponse.json({ 
        status: 'degraded',
        database: 'error',
        timestamp: new Date().toISOString(),
        message: 'Database connection failed'
      }, { status: 503 });
    }

    return NextResponse.json({ 
      status: 'healthy',
      database: 'connected',
      timestamp: new Date().toISOString(),
      message: 'All systems operational'
    });

  } catch (error) {
    console.log('Health check error:', error);
    return NextResponse.json({ 
      status: 'error',
      timestamp: new Date().toISOString(),
      message: 'Health check failed'
    }, { status: 500 });
  }
} 