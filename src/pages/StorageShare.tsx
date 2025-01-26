import React from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const StorageShare = () => {
  const navigate = useNavigate();

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
            Please log in to use temporary storage sharing
          </p>
        </div>
        
        <div className="max-w-md mx-auto text-center">
          <Button
            size="lg"
            className="w-full"
            onClick={() => {
              // TODO: Implement login functionality
              console.log('Login clicked');
            }}
          >
            Log in to Continue
          </Button>
        </div>
        
        <div className="mt-12 text-center text-sm text-gray-500">
          <p>Files are stored for 1 hour • Maximum file size: 500MB</p>
        </div>
      </div>
    </div>
  );
};

export default StorageShare;