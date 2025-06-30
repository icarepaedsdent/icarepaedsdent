'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Download, Mail, Phone, Calendar, FileText } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';
import { Alert, AlertDescription } from '@/components/ui/alert';

interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  phone: string;
  service: string | null;
  appointment_service: string | null;
  message: string;
  status: string;
  priority: string;
  is_read: boolean;
  created_at: string;
  updated_at: string;
  ip_address: string | null;
}

interface PaginationInfo {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}

const serviceTypes = [
  { value: 'all', label: 'All Services' },
  { value: 'general', label: 'General Inquiry' },
  { value: 'appointment', label: 'Appointment Request' },
  { value: 'referral', label: 'Referral' },
  { value: 'feedback', label: 'Feedback' },
  { value: 'other', label: 'Other' },
];

export default function AdminPage() {
  const [submissions, setSubmissions] = useState<ContactSubmission[]>([]);
  const [pagination, setPagination] = useState<PaginationInfo>({
    page: 1,
    limit: 10,
    total: 0,
    totalPages: 0,
  });
  const [selectedService, setSelectedService] = useState('all');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [downloading, setDownloading] = useState(false);

  const fetchSubmissions = async (page: number = 1, service: string = 'all') => {
    try {
      setLoading(true);
      setError(null);
      
      const params = new URLSearchParams({
        page: page.toString(),
        limit: '10',
      });
      
      if (service !== 'all') {
        params.append('service', service);
      }

      const response = await fetch(`/api/admin/contact-submissions?${params}`);
      
      if (!response.ok) {
        throw new Error('Failed to fetch submissions');
      }

      const data = await response.json();
      setSubmissions(data.submissions);
      setPagination(data.pagination);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const downloadCSV = async () => {
    try {
      setDownloading(true);
      
      const params = new URLSearchParams({
        format: 'csv',
      });
      
      if (selectedService !== 'all') {
        params.append('service', selectedService);
      }

      const response = await fetch(`/api/admin/contact-submissions?${params}`);
      
      if (!response.ok) {
        throw new Error('Failed to download CSV');
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.style.display = 'none';
      a.href = url;
      a.download = 'contact-submissions.csv';
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to download CSV');
    } finally {
      setDownloading(false);
    }
  };

  const handleServiceChange = (service: string) => {
    setSelectedService(service);
    fetchSubmissions(1, service);
  };

  const handlePageChange = (page: number) => {
    fetchSubmissions(page, selectedService);
  };

  useEffect(() => {
    fetchSubmissions();
  }, []);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Skeleton className="h-8 w-64 mb-4" />
          <div className="flex gap-4 mb-6">
            <Skeleton className="h-10 w-48" />
            <Skeleton className="h-10 w-32" />
          </div>
        </div>
        <div className="grid gap-4">
          {[...Array(5)].map((_, i) => (
            <Skeleton key={i} className="h-48 w-full" />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Contact Submissions</h1>
        <p className="text-gray-600">Manage and review contact form submissions</p>
      </div>

      {error && (
        <Alert className="mb-6">
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {/* Filters and Actions */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="flex-1">
          <Select value={selectedService} onValueChange={handleServiceChange}>
            <SelectTrigger className="w-full sm:w-48">
              <SelectValue placeholder="Filter by service" />
            </SelectTrigger>
            <SelectContent>
              {serviceTypes.map((service) => (
                <SelectItem key={service.value} value={service.value}>
                  {service.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        
        <Button
          onClick={downloadCSV}
          disabled={downloading}
          className="flex items-center gap-2"
        >
          <Download className="h-4 w-4" />
          {downloading ? 'Downloading...' : 'Download CSV'}
        </Button>
      </div>

      {/* Stats */}
      <div className="mb-6">
        <p className="text-sm text-gray-600">
          Showing {submissions.length} of {pagination.total} submissions
        </p>
      </div>

      {/* Submissions Grid */}
      <div className="grid gap-4 mb-8">
        {submissions.map((submission) => (
          <Card key={submission.id} className={`transition-shadow hover:shadow-md border-l-4 border-l-blue-500`}>
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-2">
                  <CardTitle className="text-lg">{submission.name}</CardTitle>
                  {/* {!submission.is_read && (
                    <Badge variant="secondary" className="text-xs">
                      <EyeOff className="h-3 w-3 mr-1" />
                      Unread
                    </Badge>
                  )} */}
                </div>
                {/* <div className="flex gap-2">
                  <Badge className={priorityColors[submission.priority as keyof typeof priorityColors]}>
                    {submission.priority}
                  </Badge>
                  <Badge className={statusColors[submission.status as keyof typeof statusColors]}>
                    {submission.status}
                  </Badge>
                </div> */}
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center gap-2 text-sm">
                  <Mail className="h-4 w-4 text-gray-500" />
                  <span>{submission.email}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Phone className="h-4 w-4 text-gray-500" />
                  <span>{submission.phone}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Calendar className="h-4 w-4 text-gray-500" />
                  <span>{formatDate(submission.created_at)}</span>
                </div>
                {submission.service && (
                  <div className="flex items-center gap-2 text-sm">
                    <FileText className="h-4 w-4 text-gray-500" />
                    <span className="capitalize">{submission.service}</span>
                    {submission.appointment_service && (
                      <span className="text-gray-500">
                        - {submission.appointment_service}
                      </span>
                    )}
                  </div>
                )}
              </div>
              
              <div className="pt-2 border-t">
                <h4 className="font-medium text-sm text-gray-700 mb-2">Message:</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {submission.message}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {submissions.length === 0 && !loading && (
        <div className="text-center py-12">
          <p className="text-gray-500">No submissions found for the selected criteria.</p>
        </div>
      )}

      {/* Pagination */}
      {pagination.totalPages > 1 && (
        <div className="flex items-center justify-center gap-2">
          <Button
            variant="outline"
            onClick={() => handlePageChange(pagination.page - 1)}
            disabled={pagination.page === 1}
          >
            Previous
          </Button>
          
          <div className="flex gap-1">
            {[...Array(pagination.totalPages)].map((_, index) => {
              const page = index + 1;
              const isCurrentPage = page === pagination.page;
              const showPage = 
                page === 1 || 
                page === pagination.totalPages || 
                (page >= pagination.page - 2 && page <= pagination.page + 2);
              
              if (!showPage) {
                if (page === pagination.page - 3 || page === pagination.page + 3) {
                  return <span key={page} className="px-2">...</span>;
                }
                return null;
              }
              
              return (
                <Button
                  key={page}
                  variant={isCurrentPage ? "default" : "outline"}
                  size="sm"
                  onClick={() => handlePageChange(page)}
                >
                  {page}
                </Button>
              );
            })}
          </div>
          
          <Button
            variant="outline"
            onClick={() => handlePageChange(pagination.page + 1)}
            disabled={pagination.page === pagination.totalPages}
          >
            Next
          </Button>
        </div>
      )}
    </div>
  );
}
