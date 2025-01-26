import React from 'react';
import FileUpload from '../components/FileUpload';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { toast } from 'sonner';

const StorageShare = () => {
  const navigate = useNavigate();
  const isLoggedIn = false; // This will be replaced with actual auth state later

  React.useEffect(() => {
    if (!isLoggedIn) {
      toast.error('Please log in to use temporary storage');
      navigate('/');
    }
  }, [isLoggedIn, navigate]);

  if (!isLoggedIn) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="container py-12 px-4">
        <Button
          variant="ghost"
          onClick={() => navigate('/')}
          className="mb-8"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Options
        </Button>

        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Temporary Storage Sharing
          </h1>
          <p className="text-lg text-gray-600">
            Upload files for 1-hour temporary storage
          </p>
        </div>
        
        <FileUpload />
        
        <div className="mt-12 text-center text-sm text-gray-500">
          <p>Files are automatically deleted after 1 hour • Max file size: 500MB</p>
        </div>
      </div>
    </div>
  );
};

export default StorageShare;