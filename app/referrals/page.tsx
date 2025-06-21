'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function ReferralsPage() {
  const router = useRouter();

  useEffect(() => {
    router.push('/contact?type=referral');
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-2xl font-semibold mb-4">Redirecting to Contact Form...</h2>
        <p className="text-gray-600">Please wait while we redirect you to our contact form.</p>
      </div>
    </div>
  );
} 